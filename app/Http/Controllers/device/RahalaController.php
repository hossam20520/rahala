<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CurrencyMainTb;
use App\Models\CoBranchTb;
use App\Models\MonyTransTb;
use App\Models\AccounsActivityTb;
use App\Models\RhallaMobile_ShippingFollwoingTb;
use App\Models\FollowingDetails;
use App\Models\RhallaMobile_FollowingDetails;
use App\Models\appnotifications;
use App\Models\category;
use Illuminate\Support\Facades\Auth;
use App\Models\Wallet;
use App\Models\DeliveryStatusTb;
use App\Models\DeliveryStatusTb_Count;

class RahalaController extends Controller
{
    //



    public function GetStatusTable(Request $request){

      
      $status  =  DeliveryStatusTb_Count::with('status')->get();
  

      return response()->json([  'status' =>    $status ], 200);

    }
  




    public function GetHome(Request $request){

      $user = Auth::user();
      $wallet =  Wallet::with('currency')->where('user_CUSTEMPACCOUNTTB_id' , $user->account_ID)->first();
  

      return response()->json([  'wallet' =>    $wallet ], 200);

    }
  

    public function GetNotification(Request $request){
    

      $user = Auth::user();
      
       
      $notification  = appnotifications::where('account_id' , (string)$user->account_ID)->get();
      
      return response()->json([  'notifications' =>   $notification ], 200);
 
    }





    public function getDetail(Request $request , $id){

      $following = RhallaMobile_ShippingFollwoingTb::with('branch' , 'items.category')->where('id' , $id)->first();
      $user =   Auth::user();
      $branches = CoBranchTb::where('ID', '!=',  $user->BranchID)->get();
      $category = category::get();

      return response()->json([  'following' =>  $following  , 'branches'=> $branches  ,  'category'=>  $category     ], 200);
    }

   public function GetListShipment(Request $request){
    $user = Auth::user();

    $following = RhallaMobile_ShippingFollwoingTb::with('branch' , 'items.category')->where('CodeID' , $user->account_ID )->orderBy('ID', 'DESC')->get();

    return response()->json([  'following' =>  $following  ], 200);
   }




    public function getDropDownShip(Request $request){

      $user =   Auth::user();
      
   
      $branches = CoBranchTb::where('ID', '!=',  $user->BranchID)->get();
      $category = category::get();

 
      return response()->json([  'branches' =>  $branches  , 'category'=>  $category ,       ], 200);
    }


    public function addShipping(Request $request){
     
   
       $user =   Auth::user();


       $items = $request->items;
 
       $totalAmount = 0;
       $totalPrice = 0;
       foreach ($items as $item  ) {
          
        $totalAmount +=   $item['qty'];

        $totalPrice  +=  ( $item['price'] * $item['qty']);

 
       }


       if($request->edit == "yes"){

        RhallaMobile_FollowingDetails::where('Sh_followingID', $request->ID)->delete();
        $ship =  RhallaMobile_ShippingFollwoingTb::where('id' , $request->ID )->update([
          'RecievedName'=> $request->RecievedName,
          'RPhone1'=> $request->RPhone1,
          'RPhone2'=> $request->RPhone2,
          'Qt'=> $totalAmount,
          'TotalPrice'=> $totalPrice,
         
        ]);

        

        foreach ($items as $item  ) {
          
          $itemsData[] = [
            'Sh_followingID' => $request->ID,
            'Quantity' => $item['qty'],
            'Price' => $item['price'],
            'TotalPrice' =>  ( $item['qty']  * $item['price'] ),
            'CategoryID' => $item['category_id'],
    
        ];
   
         }
  
  
         RhallaMobile_FollowingDetails::insert($itemsData);


      //   foreach ($items as $item) {
      //     $itemsData = [
      //         'Quantity' => $item['qty'],
      //         'Price' => $item['price'],
      //         'TotalPrice' => ($item['qty'] * $item['price']),
      //         'CategoryID' => $item['category_id'],
      //     ];
      
      //     RhallaMobile_FollowingDetails::where('id', $item['id'])->update($itemsData);
      // }

      return response()->json(['status' => "success" ,  'message'=> 'success' ], 200);

       }else{


        $ship = new RhallaMobile_ShippingFollwoingTb;
        $ship->CodeID =   $user->account_ID;
        $ship->TypeID =   4;
        $ship->RecievedName =   $request->RecievedName;
        $ship->RPhone1 =   $request->RPhone1;
        $ship->RPhone2 =   $request->RPhone2;
        $ship->DeliveryPlaceID =   $request->DeliveryPlaceID;
        
        $ship->Qt =    $totalAmount;
        $ship->TotalPrice =   $totalPrice;
        $ship->save();






        foreach ($items as $item  ) {
          
          $itemsData[] = [
            'Sh_followingID' => $ship->id,
            'Quantity' => $item['qty'],
            'Price' => $item['price'],
            'TotalPrice' =>  ( $item['qty']  * $item['price'] ),
            'CategoryID' => $item['category_id'],
    
        ];
   
         }
  
  
         RhallaMobile_FollowingDetails::insert($itemsData);
  
         return response()->json(['status' => "success" ,  'message'=> 'success' ], 200);
         
     

       }
    
 


       


    }


    public function getTheOwntrans(Request $request){

      $from_date = $request->from_date;

      $to_date = $request->to_date;

      $type =  $request->type;

 if($type == "ALL"){
   $accActivtb  = AccounsActivityTb::with('branch' , 'currency')->whereBetween('InsertDate', [$from_date, $to_date])->get();

 }else{
   $accActivtb  = AccounsActivityTb::with('branch' , 'currency')->where('TypeMobile' , $type)->whereBetween('InsertDate', [$from_date, $to_date])->get();

 }


      return response()->json(['history' =>  $accActivtb       ], 200);
       
     }



    public function getCurrenices(Request $request){

        $currency = CurrencyMainTb::get();


        return response()->json(['currencies' =>  $currency       ], 200);
     }


     public function GetDetailsSendMoney(Request $request){

        $currency = CurrencyMainTb::get();

        $branches = CoBranchTb::get();
        
 
        return response()->json(['currencies' =>  $currency  , 'branches' =>  $branches        ], 200);
     }

     
     public function GetSentMoney(Request $request){
       $user =   Auth::user();
    
       $moneyTrans = MonyTransTb::with('branch' , 'SCurrency' , 'RCurrency')->where('CodeID' , $user->account_ID  )->orderBy('ID', 'DESC')-> get();

      // $branches = CoBranchTb::get();
      

      return response()->json(['sent' =>   $moneyTrans      ], 200);
   }
}
