<?php
namespace App\Http\Controllers;

use App\Models\Date;
use App\Models\Category;

use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class DatesController extends Controller
{

    //------------ GET ALL Dates -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Date::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $dates = Date::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $dates->count();
        $dates = $dates->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();




            



            $category =  Category::where('deleted_at', '=', null)->get(['name' , 'id']);

       


        return response()->json([
            'dates' => $dates,
            'categories' =>$category,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Date -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Date::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                // $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/dates/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Date = new Date;


            


            $Date->en_name = $request['en_name'];
            $Date->ar_name = $request['ar_name'];
            $Date->date_name = $request['date_name'];
            $Date->category  = $request['category_id'];
            $Date->rate = $request['rate'];
            $Date->category_id  = $request['category_id'];

            
            $Date->image = $filename;
            $Date->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Date -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Date::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Date = Date::findOrFail($id);
             $currentImage = $Date->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/dates';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                //  $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/dates/' . $filename));
 
                 $DateImage = $path . '/' . $currentImage;
                 if (file_exists($DateImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($DateImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/dates';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/dates/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
             $Date->category_id  = $request['category_id'];
             Date::whereId($id)->update([
                'category' => $request['category_id'],
                'category_id' => $request['category_id'],
                'rate' => $request['rate'],
                 'ar_name' => $request['ar_name'],
                 'en_name' => $request['en_name'],
                 'date_name' => $request['date_name'],
                 'image' => $filename,
             ]);
           
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Date -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Date::class);

        Date::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Date::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $date_id) {
            Date::whereId($date_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

