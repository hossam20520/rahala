<?php

namespace App\Http\Controllers\device;
use App\Models\User;
use App\Models\CUSTEMPACCOUNTTB;
use App\Models\CoBranchTb;
use App\Models\CurrencyPricesTb;
use App\Models\MonyTransTb;
use App\Models\Wallet;


use App\Models\About;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\utils\helpers;
use Intervention\Image\ImageManagerStatic as Image;
use File;

use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
     


    public function resetPassword(Request $request){

        $phone = $request->phone;
        $passowrd = $request->passowrd;
        $user = User::where('phone',  $phone )->first();
        $pass = Hash::make($request->new_password);
        User::whereId($user->id)->update([
            'password' => $pass,
        ]);


 
        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);


        // $User->password  = Hash::make($request['password']);

    }


    public function getCountries(Request $request){

         $countries = Cce::with('currency')->where('deleted_at', '=', null)->get();
         return response()->json(['countries' =>  $countries     ], 200);

    }

    
    public function changeImage(Request $request){
 
        $helpers = new helpers();
        $user =   Auth::user();
         $currentAvatar = $user->avatar;


         $image = $request->file('avatar');
         $path = public_path() . '/images/avatar';
         $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

         $image_resize = Image::make($image->getRealPath());
      
         $image_resize->save(public_path('/images/avatar/' . $filename));

         $userPhoto = $path . '/' . $currentAvatar;
         if (file_exists($userPhoto)) {
             if ($user->avatar != 'no_avatar.png') {
                 @unlink($userPhoto);
             }
         }

         // $filename = $currentAvatar;
   

        // return $filename;


 User::whereId($user->id)->update([

     'avatar' => $filename,
   
 ]);




 return response()->json(['url' =>  "/images/avatar/".  $filename   ], 200);



 }



 public function EditProfile(Request $request){
    $helpers = new helpers();
    $user =   Auth::user();
    $email =  $request['email']  == null ? $user->email : $request['email'];
    $phone =  $request['phone']  == null ? $user->phone : $request['phone'];



    if($phone  ==  $user->phone ){

         

    }else{


        $userd  = User::where('deleted_at', '=', null )->where('phone' , $phone )->first();
        if( $userd ){
            return response()->json(['status' => "fail" ,  'message'=> 'Phone Already Exist'   ], 401);
        }   



    }


    if($email  ==  $user->email ){


        
    }else{
        $user  = User::where('deleted_at', '=', null )->where('email' ,  $email  )->first();
        if( $user ){
            return response()->json(['status' => "fail" ,  'message'=> 'Email Already Exist'   ], 401);
        } 
 
    }
    $userrr =   User::where('email' , $email )->first();
      
    User::whereId($user->id)->update([
        'firstname' => $request['firstname'] == "" ? $userrr->firstname :  $request['firstname'] ,
        'lastname' =>  $request['lastname'] == "" ? $userrr->lastname :  $request['lastname'] ,
        'email' =>    $email == "" ? $user->email :  $email ,
        'phone' =>   $phone == "" ? $user->phone :  $phone  ,
      
    ]); 
    

    return response()->json(  $user, 200);
}


    // public function profile(Request $request){
    //     $user = Auth::user(); 
    //     $currentDate = Carbon::now()->format('Y-m-d');

             
    //     $subscription =   Subscription::where('deleted_at' , '=' , null)->where('user_id' , $user->id)->whereDate('end_date', '>=', $currentDate)->first();

    //     $daysLeft = 0;
    //     if( $subscription){
    //         $daysLeft = Carbon::parse($currentDate)->diffInDays( $subscription->end_date);
    //     }
     
 

    //     return response()->json(['user' =>  $user   , 'subscription'=>   $daysLeft   ], 200);

    // }

    // public function updateProfile(Request $request){
 
    //     $helpers = new helpers();
    //     $user =  $helpers->getInfo();
    //     User::whereId($user->id)->update([
    //         'firstname' => $request['firstname'],
    //         'lastname' =>  $request['lastname'],
    //         'email' =>  $request['email'],
    //         'phone' => $request['phone'],
    //     ]);


    //     return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);
    // }



 




    public function getInfoAbout(){

         $about = About::where('id', '=', 1)->first();


       $aboutt =   [
            'ar_name'=> $about->ar_name,
            'en_name'=>  $about->en_name,
            'support_number'=>   $about->support_number,
            'support_email'=> $about->support_email,
            
              ];

        return response()->json( [ 'about'=> $aboutt]  , 200); 

    }

 

    
    public function sendMoney(Request $request){

        $user = Auth::user(); 
        $monyTransf  =  new MonyTransTb;
        $monyTransf->CodeID = $user->account_ID;
        $monyTransf->RecievedName = $request['RecievedName'];
        $monyTransf->RPhone1 = $request['RPhone1'];
        $monyTransf->DeliveryPlaceID = $request['DeliveryPlaceID'];
        $monyTransf->SCurenncyID = $request['SCurenncyID'];
        $monyTransf->RCurenncyID = $request['RCurenncyID'];
        $monyTransf->Value = $request['Value'];
        $monyTransf->DeliveredStatus = '0';
        $monyTransf->TypeID = $request['DeliveredStatus'];
        $monyTransf->save();


 
        
 
        return response()->json(['status' => "success" ,  'message'=> 'success' ], 200);
 
     }




    public function getFcurrency(Request $request){

        $fcurrency = CurrencyPricesTb::with('FCurrency' , 'LCurrency')->get();


        return response()->json(['fcurrency' =>  $fcurrency       ], 200);
     }






   
    public function getBranches(Request $request){

         $branches = CoBranchTb::get();


         return response()->json(['branches' =>  $branches       ], 200);
    }

    public function register(Request $request){


     
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users',
          
        ], [
            'email.unique' => 'This Email is already taken.',
      
        ]);

        if ($validator->fails()) {
           

            return response()->json([
                'status'=> 200,
                'message'=>  $validator->errors(),
                
            ] , 422); 
    
        }

        
       $Customdata =  CUSTEMPACCOUNTTB::where('AccountCode' , $request['code'])->first();



       if(!$Customdata){
           return response()->json(['error' => 'Invalid credentials'], 401);
       }


 
        $filename = 'no_avatar.png';
        $User = new User;
        $User->firstname = $Customdata->AccName;
        $User->lastname  =  "";
        $User->username  = $Customdata->AccountCode;
        $User->email     = $request['email'];
        $User->phone     = $Customdata->LogPhone1;
        $User->password  = Hash::make($request['password']);
        $User->avatar    = $filename;
        $User->account_ID    =  $Customdata->ID;
        $User->type    =  $Customdata->LogType;
        $User->role_id   = 2;
       
        $User->save();
 
  

        
       $wallet =  new Wallet;

       $wallet->wallet = 0;
       $wallet->currency_id = 1;
       $wallet->user_CUSTEMPACCOUNTTB_id =  $Customdata->ID; 
       $wallet->save();


        $accessToken = $User->createToken('AuthToken')->accessToken;
        return response()->json([
           
            'user'=>  $User,
            'token'=> $accessToken
            
        ] , 200); 


    }

    public function test(){
        return response()->json([
            'd' => 66,
        ]);
    }

 


    public function deletePr(){
            $helpers = new helpers();
            $user =  $helpers->getInfo();
         
            User::whereId($user->id)->update([
     
    
                'statut' =>  '0',
         
            ]); 


            return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);

    }




    public function login(Request $request)
    {

         
        $credentials = [];
        if($request['phone'] == ""){
            $user = User::where('email' ,  $request['email'])->first();
            $phone = "";
            if($user){
                $phone = $user->phone;
            }
            
            $credentials =  [
                "phone" =>   $phone ,
                "password"=>  $request['password']
            ];
        }else{
            $credentials = $request->only('phone', 'password');
        }

   

          




        if (Auth::attempt($credentials)) {
            $user = Auth::user();
     
            

 
            $accessToken = $user->createToken('AuthToken')->accessToken;
 
          if($user->statut == '0'){
            return response()->json(['error' => 'Invalid credentials'], 401);
          }
            
            $user = array( 'user'=>   $user      ,   'token' => $accessToken   );
 
            return response()->json(['status' => "success" ,  'message'=> 'success' , 'data'=> $user 
             
            
            ], 200);



        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }


    }



    public function changePassword(Request $request)
    {

        $user = Auth::user();

       
        User::whereId($user->id)->update([
            'password' => Hash::make($request->password) ,
     
        ]);

        return response()->json($user , 200);
 


    }




    public function loginBySocail(Request $request)
    {

        $credentials = $request->only('phone', 'password');
        if(Auth::attempt($credentials)) {
            $user = Auth::user();
            $accessToken = $user->createToken('AuthToken')->accessToken;
            return response()->json(['access_token' => $accessToken , 'data'=>$user], 200);

        } else {

            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }





}
