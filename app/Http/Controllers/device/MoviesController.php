<?php
namespace App\Http\Controllers\device;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Exports\EpisodesExport;
use App\Models\Episode;
use App\Models\Movie;

use App\Models\Subscription;

use App\Models\Package;
use App\Models\Favourite;
use App\Models\Comment;
use App\Models\Ad;
use App\Models\Series;
use App\Models\Category;
// use App\Models\Date as DateModel;
use App\Models\Date;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use \Gumlet\ImageResize;

class MoviesController extends Controller
{
    public function getCategoryNames($categoryIds)
    {
        // Split the comma-separated values into an array
        $categoryIdArray = explode(',', $categoryIds);
    
        // Fetch the category names using Eloquent
        $categoryNames = Category::whereIn('id', $categoryIdArray)->pluck('name')->toArray();
    
        // Format the category names into a string
        $formattedCategoryNames = implode(', ', $categoryNames);
    
        return $formattedCategoryNames;
    }


    public function getCategoryNames_ar($categoryIds)
    {
        // Split the comma-separated values into an array
        $categoryIdArray = explode(',', $categoryIds);
    
        // Fetch the category names using Eloquent
        $categoryNames = Category::whereIn('id', $categoryIdArray)->pluck('code')->toArray();
    
        // Format the category names into a string
        $formattedCategoryNames = implode(', ', $categoryNames);
    
        return $formattedCategoryNames;
    }
 


    
   public function IsPremum($user){
    

       // Package
       $currentDate = Carbon::now()->format('Y-m-d');
       $records = Subscription::where('deleted_at' , '=' , null)->where('user_id' , $user->id)->whereDate('end_date', '>=', $currentDate)->first();
       if( $records ){
          return  "yes";
       }else{
          return "no";
       }

       
  
   }

   


   public function isVideoAval($video_q3 ){

    if($video_q3 == null){
         return false;
    } else{
        return true;
    }


   }



   public function GetPremumVideoUrl($status , $video_q3){

     $user = Auth::user();
  
    if($status == "yes"){
        $prmum =   $this->IsPremum($user);
  
         if( $prmum  == "yes"){
            if($video_q3 == null){
                return "NOVIDEO";
            }else{
                  return env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q3/').$video_q3;
            
            }
           
         }else{
            
            return "PREMIUM";
            
         }


      
       }else{
        if($video_q3 == null){
            return "NOVIDEO";
        }else{
              return env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q3/').$video_q3;
        
        }
       
       }
 
      
   }


   public function GetAd(){  
    $user = Auth::user();
    $isPrem =  $this->IsPremum($user);
    $ad =  Ad::where('deleted_at' , '=' , null)->first();
    if( $isPrem  == "yes"){
         if($ad){
            if($ad->ads == null){
                return "NOVIDEO";
            }
          return  env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/ads/').$ad->ads; 
         }else{
            return "NOVIDEO";
         }
    }else{
        if($ad){
            if($ad->ads == null){
                return "NOVIDEO";
            }
          return  env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/ads/').$ad->ads; 
         }else{
            return "NOVIDEO";
         }
    }
   

   
   }




    public function detailMovie(Request $request , $id  ){
        // 
       $helpers = new helpers();
       $user = Auth::user();
  

       $Movie = Movie::where('deleted_at', '=', null)->findOrFail($id);
  
 
        // $Movie = Movie::where('deleted_at', '=', null)->findOrFail($id);

        // https://animecrow.store
        $item['id'] = $Movie->id;
        $item['ar_name'] = $Movie->ar_name;
        $item['en_name'] = $Movie->en_name;
        $item['age'] = $Movie->age;
        $item['rate'] = $Movie->rate;
        $item['status'] = $Movie->status;
        $item['aired'] = $Movie->aired;
        $item['premium'] = $Movie->premium;
        $item['story_ar'] = $Movie->story_ar;
        $item['story_en'] = $Movie->story_en;
        $item['video_q1'] =    $this->isVideoAval($Movie->video_q1) ?    env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q1/').$Movie->video_q1 : "NOVIDEO";            // env('url', 'http://localhost:8000')."/path/videos/q1/".$Movie->video_q1;
        $item['video_q2'] =    $this->isVideoAval($Movie->video_q2) ?   env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q2/').$Movie->video_q2 : "NOVIDEO";     
        $item['video_q3'] =  $this->GetPremumVideoUrl($Movie->premium , $Movie->video_q3);
        $item['category_ar'] =   $this->getCategoryNames($Movie->category);  
        $item['category_en'] =   $this->getCategoryNames_ar($Movie->category);  
        $item['wishlist'] =   $helpers->GetFavourite($Movie , "MOVIES"); 
        $firstimage = explode(',', $Movie->image);
        $item['image'] =  $request->type  == "SERIES" ?   "/images/episodes/".$firstimage[0] :  "/images/movies/".$firstimage[0];    
        $data[] = $item;

        return response()->json([
            'movie' => $data[0],
            'subscription' =>  $this->IsPremum($user) ,  
            'ad_video'=> $this->GetAd()
           
        ]);
        
    }
   

    public function addComment(Request $request){
        $user = Auth::user();
        $currentDate = Carbon::now();

        // Format the date as "d-M-Y" (day-month-year)
        $formattedDate = $currentDate->format('d-M-Y');
        $comment = new Comment;
        $comment->user_id = $user->id;
        $comment->comment = $request['comment'];
        $comment->type = $request['type'];
        $comment->media_id = $request['id'];
        $comment->date =  $formattedDate;
        $comment->save();


      return response()->json( $comment ,
     
             );
         

    }

    public function Addfavourite(Request $request  ){ 

        $user = Auth::user();
        $media_id = $request->media_id;
        $type = $request->type;

       $favourit = Favourite::where('deleted_at', '=', null)->where('user_id' , $user->id )->where('type' , $type)->where('media_id' , $media_id)->first();
  

       if(!$favourit){
        $fav = new Favourite;
        $fav->user_id = $user->id;
        $fav->media_id = $media_id;
        $fav->type = $type;
        $fav->save();
        return response()->json($fav);
       }
      

      

        return response()->json($favourit);
     }



     

 public function GetDates(Request $request){
         

    $date = [
        "Saturday"=> $this->GetDatedMany("Saturday") ,
        "Sunday"=> $this->GetDatedMany("Sunday") ,
        "Monday"=> $this->GetDatedMany("Monday") ,
        "Tuesday"=> $this->GetDatedMany("Tuesday") ,
        "Wednesday"=> $this->GetDatedMany("Wednesday") ,
        "Thursday"=> $this->GetDatedMany("Thursday") ,
        "Friday"=> $this->GetDatedMany("Friday") ,

    ];

    return response()->json($date);
 }


  public function GetDatedMany($date ){
    $dates =   Date::where('deleted_at', '=', null)->where('date_name'  , $date)->get();
      
    $data =  array();
   foreach ($dates as   $date) {
        $item['id'] =  $date->id;
        $firstimage = explode(',', $date->image);
        $item['image'] =    "/images/dates/".$firstimage[0] ;
        $item['category_ar'] =  $this->getCategoryNames($date->category_id);
        $item['category_en'] =  $this->getCategoryNames_ar($date->category_id);
        $item['rate'] =  $date->rate;
        $item['ar_name'] = $date->ar_name;
        $item['en_name'] = $date->en_name;
        $item['date_name'] = $date->date_name;
        $data[] = $item;
      }

      return $data;

  }
    public function deletefavourite(Request $request , $id){ 


        Favourite::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);

          $fav = Favourite::where('id' , $id)->first();

        return response()->json($fav);
     }

    public function getfavourite(Request $request){
        $user = Auth::user();
        $type = $request->type;
        $id = $request->id;
       $favs =  Favourite::where('deleted_at', '=', null)->where('user_id' , $user->id)->get();

       $data = array();
       foreach ($favs as   $onefav) {
        $item['id'] =  $onefav->id;
         $item['image'] =  $this->GetFav($onefav)['image'];
         $item['ar_name'] =  $this->GetFav($onefav)['ar_name'];
         $item['en_name'] =  $this->GetFav($onefav)['en_name'];
         $item['category_ar'] =  $this->GetFav($onefav)['category_ar'];
         $item['category_en'] =  $this->GetFav($onefav)['category_en'];
         $item['rate'] =  $this->GetFav($onefav)['rate'];
         $item['media_id'] =  $onefav->media_id;
         $item['type'] =  $onefav->type;
         $data[] = $item;
       }
   
       return response()->json([
        'favourites' =>  $data  ,
    ]);


    }




  public function search(Request $request){

    $perPage = $request->limit;
    $pageStart = \Request::get('page', 1);
    // Start displaying items from this number;
    $offSet = ($pageStart * $perPage) - $perPage;
    $order = $request->SortField;
    $dir = $request->SortType;
    $helpers = new helpers();
   

    
      $MOVIES = $this->GetSearchData(Movie::class , $request    ,  $request->search , "MOVIES" , $offSet ,$perPage   ,  $order  ,  $dir );
      $SERIES = $this->GetSearchData(Series::class ,  $request  , $request->search , "SERIES" , $offSet ,$perPage   ,  $order  ,  $dir );
      $allResults = array_merge($MOVIES, $SERIES );


      return response()->json([
        'search' => $allResults   
      
    ]);


  }




  
  public function GetSearchData($model , $request , $search , $type  , $offSet , $perPage , $order , $dir ){


 
      $deals = $model::where('deleted_at', '=', null)->where(function ($query) use ($search) {
        return $query->when($search, function ($query) use ($search) {
            return $query->where('ar_name', 'LIKE', "%{$search}%")
                ->orWhere('en_name', 'LIKE',  "%{$search}%");
        });
    });
 
    if($request->rank != "null"  ){
   
        $deals->Where('rate' , 'LIKE' , "%{$request->rank}%" );  
    }

  

     if($request->year != "null"   ){
        $deals->Where('aired_start_date' , 'LIKE' , "%{$request->year}%"  );
     }

     if($request->age != "null"  ){
        $deals->Where('age' , $request->age);  
     }

     


    $totalRows = $deals->count();
    $deals = $deals->offset($offSet)
        ->limit($perPage)
        ->orderBy($order, $dir)
        ->get();

        $data = array();
          
 

        foreach ($deals as   $deal) {
            $image = "";

            if($type == "MOVIES"){
                $image  =  "/images/movies/".$deal->image;
            }else{
                $image  =  "/images/serieses/".$deal->image;
            }

            $item['id'] =  $deal->id;
            $item['image'] = $image;
            $item['ar_name'] =     $deal->ar_name;
            $item['en_name'] =  $deal->en_name;
 
            $item['category_ar'] =  $this->getCategoryNames($deal->category_id);
            $item['category_en'] =  $this->getCategoryNames_ar($deal->category_id);
            $item['rate'] =  $deal->rate;
           
            $item['type'] =  $type;
            $data[] = $item;
          
        }

         
     

    return   $data;
  }





    public function GetFav($fav){
         if($fav->type == "MOVIES"){
            $media =  Movie::where('id' , $fav->media_id)->first();
           $empty =  [
                'ar_name' =>  null,
                'en_name' => null,
                'rate' => null,
                'category_ar' =>  null,
                'category_en' => null,
                'image' => null,
         
            ];
            if($media ){
                $firstimage = explode(',', $media->image);
                $data  = [
                    'ar_name' => $media->ar_name,
                    'en_name' => $media->en_name,
                    'rate' => $media->rate,
                    'category_ar' =>  $this->getCategoryNames($media->category),
                    'category_en' => $this->getCategoryNames_ar($media->category),
                    'image' => "/images/movies/".$firstimage[0],
             
                ];

                return $data;
            }else{
              return $empty ;
            }
           
         
            
            
            
            




         }else{
            
            $media = Series::where('id' , $fav->media_id)->first();

            if($media ){
                $firstimage = explode(',', $media->image);
                $data  = [
                    'ar_name' => $media->ar_name,
                    'en_name' => $media->en_name,
                    'rate' => $media->rate,
                    'category_ar' =>  $this->getCategoryNames($media->category_ar),
                    'category_en' => $this->getCategoryNames_ar($media->category_en),
                    'image' => "/images/serieses/".$firstimage[0],
             
                ];

                return $data;
            }else{
              return $empty ;
            }



            
         }

    }
 

    public function getComments(Request $request ){
        
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'comment', 1 => 'comment', 2 => 'type', 3 => 'type');
        $param = array(0 => 'like', 1 => 'like', 2 => 'like', 3 => 'like');
        $data = array();
        $type = $request->type;
        $id = $request->id;
        $comments =  Comment::with('user')->where('deleted_at', '=', null)->where('type' , $type )->where('media_id' ,$id  );
    

        $Filtred = $helpers->filter($comments, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('comment', 'LIKE', "%{$request->search}%")
                    
                     
                        ->orWhere('comment', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $Filtred->count();
        $comments = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();
        

            return response()->json([
                'comments' => $comments,
     
            ]);
         


        


    }
    


    public function detailEpos(Request $request , $id  ){
        // 
        $helpers = new helpers();
       $user = Auth::user();
  

       $Movie = Episode::with('series')->where('deleted_at', '=', null)->where('id' , $id)->first();
 
        $item['id'] = $Movie->series->id;
        $item['ar_name'] = $Movie->ar_name;
        $item['en_name'] = $Movie->en_name;
        $item['age'] = $Movie->series->age;
        $item['rate'] = $Movie->series->rate;
        $item['status'] = $Movie->series->status;
        $item['aired'] = $Movie->series->aired;
        $item['premium'] = $Movie->series->premium;
        $item['story_ar'] = $Movie->series->story_ar;
        $item['story_en'] = $Movie->series->story_en;
        $item['filler'] = $Movie->filler;
        $item['video_q1'] =    $this->isVideoAval($Movie->video_q1) ?    env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q1/').$Movie->video_q1 : "NOVIDEO";            // env('url', 'http://localhost:8000')."/path/videos/q1/".$Movie->video_q1;
        $item['video_q2'] =    $this->isVideoAval($Movie->video_q2) ?   env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q2/').$Movie->video_q2 : "NOVIDEO";     
        $item['video_q3'] =  $this->GetPremumVideoUrl($Movie->series->premium , $Movie->video_q3);
        $item['category_ar'] =   $this->getCategoryNames($Movie->series->category);  
        $item['category_en'] =   $this->getCategoryNames_ar($Movie->series->category);  
        // $item['episodes'] =   $this->getEpisodes( $Movie) ; 
        $item['wishlist'] =     $helpers->GetFavourite($Movie , "SERIES");

       
        $firstimage = explode(',', $Movie->image);
        $item['image'] =     "/images/episodes/".$firstimage[0]  ;    
        $data[] = $item;

        return response()->json([
            'series' => $data[0],
            'subscription' =>  $this->IsPremum($user) ,  
            'ad_video'=> $this->GetAd()
           
        ]);
        
    }


    public function detailSeries(Request $request , $id  ){
        // 
        $helpers = new helpers();
       $user = Auth::user();
  

       $Movie = Series::where('deleted_at', '=', null)->findOrFail($id);
 
        $item['id'] = $Movie->id;
        $item['ar_name'] = $Movie->ar_name;
        $item['en_name'] = $Movie->en_name;
        $item['age'] = $Movie->age;
        $item['rate'] = $Movie->rate;
        $item['status'] = $Movie->status;
        $item['aired'] = $Movie->aired;
        $item['premium'] = $Movie->premium;
        $item['story_ar'] = $Movie->story_ar;
        $item['story_en'] = $Movie->story_en;
        // $item['video_q1'] =    $this->isVideoAval($Movie->video_q1) ?    env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q1/').$Movie->video_q1 : "NOVIDEO";            // env('url', 'http://localhost:8000')."/path/videos/q1/".$Movie->video_q1;
        // $item['video_q2'] =    $this->isVideoAval($Movie->video_q2) ?   env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q2/').$Movie->video_q2 : "NOVIDEO";     
        // $item['video_q3'] =  $this->GetPremumVideoUrl($Movie->premium , $Movie->video_q3);
        $item['category_ar'] =   $this->getCategoryNames($Movie->category_id);  
        $item['category_en'] =   $this->getCategoryNames_ar($Movie->category_id);  
        $item['wishlist'] =     $helpers->GetFavourite($Movie , "SERIES");

        // $item['episodes'] =   $this->getEpisodes( $Movie) ; 



        $firstimage = explode(',', $Movie->image);
        $item['image'] =     "/images/serieses/".$firstimage[0]  ;    
        $data[] = $item;

        return response()->json([
            'series' => $data[0],
            'episodes'=> $this->getEpisodes( $Movie),
            'related'=> $this->getRelated(  $Movie->category_id , $Movie->id),
            'subscription' =>  $this->IsPremum($user) ,  
            'ad_video'=> $this->GetAd()
           
        ]);
        
    }




    public function getRelated($series , $idv ){

        $ids = explode(',', $series);
        // $Episodes = Series::where('deleted_at', '=', null)->whereIn('series_id',$series)->get();
        // $episodes = Series::whereNull('deleted_at')
        // ->where(function ($query) use ($series) {
        //     $query->whereRaw("FIND_IN_SET(category_id, '$series')");
        // })
        // ->get();



        $episodes = Series::whereNull('deleted_at')
        ->where(function ($query) use ($ids) {
            foreach ($ids as $id) {
                $query->whereRaw("FIND_IN_SET('$id', category_id)");
            }
        })
        ->get();
        $data = array();
        
      foreach ($episodes as  $episode) {

         if($episode->id == $idv ){
            continue;
         }

          $item['id']  = $episode->id;
           $item['ar_name']  = $episode->ar_name;
           $item['en_name']  = $episode->en_name;
           $item['filler']  = $episode->filler;
           $item['rate']  = $episode->rate ;
           $item['image']  =      "/images/serieses/".$episode->image ;
           $item['category_ar'] =   $this->getCategoryNames($episode->category_id);  
           $item['category_en'] =   $this->getCategoryNames_ar($episode->category_id);  
 
        $data[] = $item;
      }
  
      return $data;



    }

    
  public function getEpisodes($series    ){
    $Episodes = Episode::where('deleted_at', '=', null)->where('series_id' ,$series->id )->get();

      $data = array();
      
    foreach ($Episodes as  $episode) {
        $item['id']  = $episode->id;
         $item['ar_name']  = $episode->ar_name;
         $item['en_name']  = $episode->en_name;
         $item['filler']  = $episode->filler;
         $item['rate']  = $series->rate ;
         $item['image']  =      "/images/episodes/".$episode->image ;
         $item['video_q1'] =   $this->isVideoAval($episode->video_q1) ?    env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q1/').$episode->video_q1 : "NOVIDEO";            // env('url', 'http://localhost:8000')."/path/videos/q1/".$Movie->video_q1;
         $item['video_q2'] =     $this->isVideoAval($episode->video_q2) ?   env('aws_url_stream', 'https://d28wz33wf63hfw.cloudfront.net/anime/movies/q2/').$episode->video_q2 : "NOVIDEO";     
         $item['video_q3'] =     $this->GetPremumVideoUrl($series->premium , $episode->video_q3);
         $data[] = $item;
    }

    return $data;
  }

    public function detail(Request $request  ){

        $id = $request->id;
        $Movie = null;
        if($request->type == "SERIES"){
            $Movie = Episode::where('deleted_at', '=', null)->where('series_id' ,$id )->findOrFail($id);
        }else{
            $Movie = Movie::where('deleted_at', '=', null)->findOrFail($id);
        }




        // $Movie = Movie::where('deleted_at', '=', null)->findOrFail($id);

        // https://animecrow.store
        $item['id'] = $Movie->id;
        $item['ar_name'] = $Movie->ar_name;
        $item['en_name'] = $Movie->en_name;
        $item['age'] = $Movie->age;
        $item['rate'] = $Movie->rate;
        $item['status'] = $Movie->status;
        $item['aired'] = $Movie->aired;
        $item['premium'] = $Movie->premium;
        $item['story_ar'] = $Movie->story_ar;
        $item['story_en'] = $Movie->story_en;
        $item['video_q1'] =    "https://animecrow.store/path/videos/1695138363.mp4";            // env('url', 'http://localhost:8000')."/path/videos/q1/".$Movie->video_q1;
        $item['video_q2'] =      env('url', 'http://localhost:8000')."/path/videos/q2/".$Movie->video_q2;
        $item['category_ar'] =   $this->getCategoryNames($Movie->category);  
        $item['category_en'] =   $this->getCategoryNames_ar($Movie->category);  
        $firstimage = explode(',', $Movie->image);
        $item['image'] =  $request->type  == "SERIES" ?   "/images/episodes/".$firstimage[0] :  "/images/movies/".$firstimage[0];    
        $data[] = $item;

        return response()->json([
            'detail' => $data[0],
           
        ]);
        
    }



    public function getSubscription(){
        $packages = Package::where('deleted_at', '=', null)->get();

        return response()->json( ['packages'=> $packages     ] );
    }
 

public function getVideos($status , $type , $limit  ){
  

if($status == "normal"){
    if($type == "MOVIES"){
        $movies = Movie::where('deleted_at', '=', null)->limit($limit)->orderBy('id', 'desc')->get(['id' , 'ar_name' , 'en_name' , 'rate' , 'category'  , 'image' ]);
  
    }else{
        $movies = Series::where('deleted_at', '=', null)->limit($limit)->orderBy('id', 'desc')->get(['id' , 'ar_name' , 'en_name' , 'rate' , 'category'  , 'image' ]);
  
    }

}else if($status == "RANDOM"){

 
    
    if($type == "MOVIES"){
        $movies = Movie::where('deleted_at', '=', null)->inRandomOrder()->limit($limit)->orderBy('id', 'desc')->get(['id' , 'ar_name' , 'en_name' , 'rate' , 'category'  , 'image' ]);
  
    }else{
        $movies = Series::where('deleted_at', '=', null)->inRandomOrder()->limit($limit)->orderBy('id', 'desc')->get(['id' , 'ar_name' , 'en_name' , 'rate' , 'category'  , 'image' ]);
    }
} else{


    if($type == "MOVIES"){
        $movies = Movie::where('deleted_at', '=', null)->where('publish_status',     $status)->limit($limit)->orderBy('id', 'desc')->get(['id' , 'ar_name' , 'en_name' , 'rate' , 'category'  , 'image' ]);
  
    }else{
        $movies = Series::where('deleted_at', '=', null)->where('publish_status',     $status)->limit($limit)->orderBy('id', 'desc')->get(['id' , 'ar_name' , 'en_name' , 'rate' , 'category'  , 'image' ]);
  
    }


}


    $data = array();
    foreach ($movies as $movie) {
        $item['id'] = $movie->id;
        $item['ar_name'] = $movie->ar_name;
        $item['en_name'] = $movie->en_name;
        $item['rate'] = $movie->rate;
        $item['category_ar'] =   $this->getCategoryNames($movie->category);  
        $item['category_en'] =   $this->getCategoryNames_ar($movie->category);  
        $firstimage = explode(',', $movie->image);
        $item['image'] =    $type == "MOVIES" ?   "/images/movies/".$firstimage[0] :  "/images/serieses/".$firstimage[0];
        $data[] = $item;
    }

    return $data;
}


 


public function SeeAll(Request $request){

    $status = $request->status;
    $type = $request->type;
    $limit = $request->limit;
 
    if($status == "NEW_MEDIA"){
        $status  = "new";
   
      }else if($status == "TOP"){
        $status  = "top";
      }else if(  $status == "NORMAL"){
        $status  = "normal";
      } 
    return response()->json( ['media'=> $this->getVideos(  $status ,  $type , $limit)] );

}

 
 
    public function home(){
       
        return response()->json([
            'movies' =>  [
                'new'=> $this->getVideos("new" , "MOVIES" , 10),
                'top'=>  $this->getVideos("top" , "MOVIES" , 10),
                'movies' => $this->getVideos("normal" , "MOVIES" , 10),
                'random' => $this->getVideos("RANDOM" , "MOVIES" , 10),

              
            ],

             'series' => [
                'new' =>  $this->getVideos("new" , "series" , 10),
                'top'=> $this->getVideos("top" , "series" , 10),
                'series' => $this->getVideos("normal" , "series" , 10),
                'random' => $this->getVideos("RANDOM" , "series" , 10),

                
             ],

 
            
        ]);


        

        
    }
    
    public function listMovies(request $request){

        // $this->authorizeForUser($request->user('api'), 'view', Movie::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'ar_name', 1 => 'en_name' );
        $param = array(0 => 'like', 1 => '='   );
        $data = array();


        $publish_status = $request->publish_status;

        $movies = Movie::where('deleted_at', '=', null)->where('publish_status',    $publish_status);

        //Multiple Filter
        $Filtred = $helpers->filter($movies, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('movies.ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('movies.en_name', 'LIKE', "%{$request->search}%");
                        
                   
                });
            });
        $totalRows = $Filtred->count();
        $movies = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();


 


        foreach ($movies as $movie) {
            $item['id'] = $movie->id;
            $item['ar_name'] = $movie->ar_name;
            $item['en_name'] = $movie->en_name;
            $item['rate'] = $movie->rate;
            $item['category_en'] =   $this->getCategoryNames($movie->category);  
            $item['category_ar'] =   $this->getCategoryNames_ar($movie->category);  
            $firstimage = explode(',', $movie->image);
            $item['image'] = $firstimage[0];
            $data[] = $item;
        }

 

        return response()->json([
            'movies' => $data,
            'totalRows' => $totalRows,
        ]);




    }




}
