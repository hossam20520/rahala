<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CurrencyMainTb;
use App\Models\CoBranchTb;
use App\Models\MonyTransTb;
use Illuminate\Support\Facades\Auth;

class RahalaController extends Controller
{
    //


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
    
       $moneyTrans = MonyTransTb::where('CodeID' , $user->account_ID  )->get();

      // $branches = CoBranchTb::get();
      

      return response()->json(['sent' =>   $moneyTrans      ], 200);
   }
}
