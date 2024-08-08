<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

/*auth middleware api passport token*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get("device/about", "device\AuthController@getInfoAbout");


//--------------------------- Reset Password  ---------------------------

Route::group([
    'prefix' => 'password',
], function () {
    Route::post('create', 'PasswordResetController@create');
    Route::post('reset', 'PasswordResetController@reset');
});




Route::post("device/auth/login/", "device\AuthController@login");






Route::post("device/getWallet", "device\AuthController@wallet");


Route::post("device/auth/register/", "device\AuthController@register");
Route::get("device/branches/", "device\AuthController@getBranches");
Route::get("device/fcurruncy/", "device\AuthController@getFcurrency");

Route::get("device/currencies/", "device\RahalaController@getCurrenices");

Route::get("device/sendmoney/detail/", "device\RahalaController@GetDetailsSendMoney");

Route::middleware(['auth:api', 'Is_Active'])->group(function () {


Route::get("device/drivers/", "device\RahalaController@getPackagesDriver");


Route::get("device/bills/driver/", "device\RahalaController@GetBills");

Route::get("device/amanat/driver/{code}", "device\RahalaController@GetAmanat");
Route::get("device/amana/driver/detail/{code}", "device\RahalaController@getAmanaDetail");


// Start here
Route::get("device/amanats/out/driver", "device\RahalaController@getOutAmanat");

Route::get("device/amanats/out/details/{iiscode}", "device\RahalaController@getDetailsHeader");
Route::get("device/amanats/out/details/{iiscode}", "device\RahalaController@getDetailsHeader");
Route::get("device/amanats/out/status/{isid}/{code}", "device\RahalaController@CheckStatus");

 
Route::get("device/amanats/out/status/update/{isid}/{codeStatus}/{status}", "device\RahalaController@updateStatus");

Route::get("device/amanats/moves/list/{type}", "device\RahalaController@getMovsList");


 Route::post("device/sendMoney/", "device\AuthController@sendMoney");

 Route::get("device/home/", "device\RahalaController@GetHome");

 Route::get("device/status/", "device\RahalaController@GetStatusTable");
 

 Route::get("device/getnotification/", "device\RahalaController@GetNotification");
 

 Route::get("device/sent/", "device\RahalaController@GetSentMoney");

 Route::get("device/history/", "device\RahalaController@getTheOwntrans");

 Route::post("device/shipment/add", "device\RahalaController@addShipping");
 
 Route::get("device/shipment/dropdown", "device\RahalaController@getDropDownShip");
 Route::get("device/shipment/getlist", "device\RahalaController@GetListShipment");

 Route::get("device/shipment/byid/{id}", "device\RahalaController@GetListShipmentByID");

 
 Route::get("device/shipdetail/shipdetail/{id}/{type}", "device\RahalaController@getDetail");
 
 
    Route::get("device/profile", "device\AuthController@profile");
    Route::post("device/profile/image", "device\AuthController@changeImage");

    Route::post("device/profile/edit", "device\AuthController@EditProfile");


    Route::post("device/password/edit", "device\AuthController@changePassword");
    




    //-------------------------- Clear Cache ---------------------------

    Route::get("Clear_Cache", "SettingsController@Clear_Cache");

 
    
    //------------------------------- Abouts--------------------------\
    //------------------------------------------------------------------\
    Route::resource('abouts', 'AboutsController');
    Route::post('abouts/delete/by_selection', 'AboutsController@delete_by_selection');
    
 
    
    //------------------------------- Notifications--------------------------\
    //------------------------------------------------------------------\
    Route::resource('notifications', 'NotificationsController');
    Route::post('notifications/delete/by_selection', 'NotificationsController@delete_by_selection');


 
 

    //------------------------------- Currencies --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('currencies', 'CurrencyController');
    Route::get('Get_Currencies/All', 'CurrencyController@Get_Currencies');
    Route::post('currencies/delete/by_selection', 'CurrencyController@delete_by_selection');

 

 

 

    

 
    //------------------------------- Users --------------------------\\
    //------------------------------------------------------------------\\

    Route::get('GetUserAuth', 'UserController@GetUserAuth');
    Route::get("/GetPermissions", "UserController@GetPermissions");
    Route::resource('users', 'UserController');
    Route::put('users/Activated/{id}', 'UserController@IsActivated');
    Route::get('users/export/Excel', 'UserController@exportExcel');
    Route::get('users/Get_Info/Profile', 'UserController@GetInfoProfile');
    Route::put('updateProfile/{id}', 'UserController@updateProfile');

    //------------------------------- Permission Groups user -----------\\
    //------------------------------------------------------------------\\

    Route::resource('roles', 'PermissionsController');
    Route::resource('roles/check/Create_page', 'PermissionsController@Check_Create_Page');
    Route::get('getRoleswithoutpaginate', 'PermissionsController@getRoleswithoutpaginate');
    Route::post('roles/delete/by_selection', 'PermissionsController@delete_by_selection');

    
    //------------------------------- Settings ------------------------\\
    //------------------------------------------------------------------\\    
    Route::resource('settings', 'SettingsController');

    Route::put('pos_settings/{id}', 'SettingsController@update_pos_settings');
    Route::get('get_pos_Settings', 'SettingsController@get_pos_Settings');
    
    Route::put('SMTP/{id}', 'SettingsController@updateSMTP');
    Route::post('SMTP', 'SettingsController@CreateSMTP');
    Route::get('getSettings', 'SettingsController@getSettings');
    Route::get('getSMTP', 'SettingsController@getSMTP');
    Route::get('get_sms_config', 'SettingsController@get_sms_config');


    Route::post('payment_gateway', 'SettingsController@Update_payment_gateway');
    Route::post('sms_config', 'SettingsController@sms_config');
    Route::get('Get_payment_gateway', 'SettingsController@Get_payment_gateway');

    //------------------------------- Backup --------------------------\\
    //------------------------------------------------------------------\\
    
    Route::get("GetBackup", "ReportController@GetBackup");
    Route::get("GenerateBackup", "ReportController@GenerateBackup");
    Route::delete("DeleteBackup/{name}", "ReportController@DeleteBackup");

});

    