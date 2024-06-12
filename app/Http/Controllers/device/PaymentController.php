<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Subscription;
use App\Models\Package;
use App\Models\Paymentsession;

use Carbon\Carbon;
class PaymentController extends Controller
{






    public function Pay(Request $request , $id)
    {
        $package = $id;


        // return response()->json(['status' => 'payment' ,  'session_id'=>  "chg_TS03A4220230507u2JB0312388" ,    'url' =>  "https://checkout.beta.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NmZiYjI2N2ExYTUwNWJhNThkYjZmYiJ9.eJPBCMNe8eoF31ptP_d-GanBWPc78q7S23IJ7BeUPZ0" ], 200);

        $user = Auth::user();
        $package_in = Package::where('deleted_at', '=', null)
            ->where('id', $package)
            ->first();
        if (!$package_in) {
            return false;
        }


        $payment = [
            'amount' => round( $package_in->price, 2),
            'description' => 'Hello ' . $user->firstname . ' ' . $user->lastname . ' Your Subscription is ' . $package_in->en_name . ' please pay and confirm your Subscription Thanks For made Subscription.',
            'currency' => 'SAR',
            'receipt' => [
                'email' => true,
                'sms' => true,
            ],
            'customer' => [
                'first_name' => $user->firstname,
                'last_name' => $user->lastname,
                'email' => $user->email,
                'phone' => [
                    'country_code' => 'IN',
                    'number' => $user->phone,
                ],
            ],
            'source' => [
                'id' => 'src_all',
            ],
            'redirect' => [
                'url' => route('tap.callback'),
            ],
        ];

        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://api.tap.company/v2/charges',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode($payment),
            CURLOPT_HTTPHEADER => [
                'authorization: Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ', // SECRET API KEY
                'content-type: application/json',
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            // Handle cURL error
            return response()->json(['status' => 'error', 'message' => 'cURL Error: ' . $err], 500);
        } else {
            // Debugging: print the response
            // var_dump($response);

            // Decode the response
            $response = json_decode($response);

            // $this->storeSale($request);

            if (property_exists($response, 'transaction')) {
                // Access the 'transaction' property
                $transactionUrl = $response->transaction->url;
                $idSesseion = $response->id;
                $session =  Paymentsession::where('user_id' , $user->id)->first();

               if(!$session){
                   $new_session = new Paymentsession;
                   $new_session->session_id = $idSesseion;
                   $new_session->user_id =  $user->id;
                   $new_session->package_id = $package;
                   $new_session->save();

               }else{
                 Paymentsession::where('user_id' , $user->id)->update([
                    'user_id'=> $user->id,
                    'session_id'=>  $idSesseion
                ]);


               }
 
                // Return the JSON response
                return response()->json(['status' => 'payment' ,  'session_id'=> $idSesseion  ,    'url' => $transactionUrl ], 200);
            } else {
                // Handle the case where 'transaction' property is not present
                return response()->json(['status' => 'error', 'data' => $response, 'message' => 'Transaction property not found in the response'], 500);
            }
        }
    }



public function subscription(  $session  ){

    $package  = Package::where('deleted_at', '=', null)
    ->where('id',  $session->package_id)
    ->first();

 
    $user = Auth::user();
    $currentDate = Carbon::now()->format('Y-m-d');
    $currentDate_end = Carbon::now();
    // Add number of days (let's say 5 days)
    $numberOfDays = intval($package->days);
    $endDate = $currentDate_end->addDays($numberOfDays)->format('Y-m-d');
    $Subscription = new Subscription();
    $Subscription->package_id = $package->id;
    $Subscription->start_date = $currentDate;
    $Subscription->end_date = $endDate;
    $Subscription->amount = $package->price;
    $Subscription->paymentRef =  $session->session_id;
    $Subscription->user_id =  $user->id;
    $Subscription->save();
}






public function callback(Request $request)
{
    $input = $request->all();
    $user = Auth::user();


    $payment  = Paymentsession::where('user_id' , $user->id)->first();
    
    $session_id = $payment->session_id;



    // $session =  Paymentsession::where('user_id' , $user->id)->first();
    // $this->subscription( $payment );
    // return response()->json(['status' => 'success' ,  'session_id'=>  ""  ,    'url' => "" ], 200); 

    // return $session_id;
   





    // $package_in = Package::where('deleted_at', '=', null)
    //     ->where('id', $package)
    //     ->first();
    // if (!$package_in) {
    //     return false;
    // }

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.tap.company/v2/charges/".$session_id,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "{}",
    CURLOPT_HTTPHEADER => array(
            "authorization: Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ" // SECRET API KEY
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    $responseTap = json_decode($response);

    // return  $responseTap;
    
    if (property_exists($responseTap, 'status')) { 

 

    if ($responseTap->status == 'CAPTURED') {
        // subscription($package );
        // return redirect()->route('success')->with('success','Payment Successfully Made.');
        $session =  Paymentsession::where('user_id' , $user->id)->first();
        $this->subscription( $session );
        return response()->json(['status' => 'success' ,  'session_id'=>  ""  ,    'url' => "" ], 200); 


    }else{
        return response()->json(['status' => 'invalid' ,  'session_id'=>  ""  ,    'url' => "" ], 404); 
    }


}else{
    return response()->json(['status' => 'invalid' ,  'session_id'=>  ""  ,    'url' => "" ], 404); 
}

    //   return redirect()->route('error')->with('error','Something Went Wrong.');
}






}
