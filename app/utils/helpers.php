<?php
namespace App\utils;

use App\Models\Currency;
use App\Models\Role;
use App\Models\Setting;
use App\Models\Favourite;

use Illuminate\Support\Facades\Auth;

class helpers
{



  public function GetFavourite($media , $type){
    $user = Auth::user();
      
    $favourit = Favourite::where('deleted_at', '=', null)->where('user_id' , $user->id )->where('type' , $type)->where('media_id' , $media->id)->first();
  
   
     if($favourit){
        return true;

     }else{
        return false;
     }
  }



    public function MediaFields($Movie){


        $item['id'] = $Movie->id;
        $item['ar_name'] = $Movie->ar_name;
        $item['en_name'] = $Movie->en_name;
        $item['rate'] = $Movie->rate;
        $firstimage = explode(',', $Movie->image);
        $item['image'] =     "/images/serieses/".$firstimage[0]  ;    
        $data[] = $item;

        return $data;
    }

    //  Helper Multiple Filter
    public function filter($model, $columns, $param, $request)
    {
        // Loop through the fields checking if they've been input, if they have add
        //  them to the query.
        $fields = [];
        for ($key = 0; $key < count($columns); $key++) {
            $fields[$key]['param'] = $param[$key];
            $fields[$key]['value'] = $columns[$key];
        }

        foreach ($fields as $field) {
            $model->where(function ($query) use ($request, $field, $model) {
                return $model->when($request->filled($field['value']),
                    function ($query) use ($request, $model, $field) {
                        $field['param'] = 'like' ?
                        $model->where($field['value'], 'like', "{$request[$field['value']]}")
                        : $model->where($field['value'], $request[$field['value']]);
                    });
            });
        }

        // Finally return the model
        return $model;
    }

    //  Check If Hass Permission Show All records
    public function Show_Records($model)
    {
        $Role = Auth::user()->roles()->first();
        $ShowRecord = Role::findOrFail($Role->id)->inRole('record_view');

        if (!$ShowRecord) {
            return $model->where('user_id', '=', Auth::user()->id);
        }
        return $model;
    }

    // Get Currency
    public function Get_Currency()
    {
        $settings = Setting::with('Currency')->where('deleted_at', '=', null)->first();

        if ($settings && $settings->currency_id) {
            if (Currency::where('id', $settings->currency_id)
                ->where('deleted_at', '=', null)
                ->first()) {
                $symbol = $settings['Currency']->symbol;
            } else {
                $symbol = '';
            }
        } else {
            $symbol = '';
        }
        return $symbol;
    }

    // Get Currency COde
    public function Get_Currency_Code()
    {
        $settings = Setting::with('Currency')->where('deleted_at', '=', null)->first();

        if ($settings && $settings->currency_id) {
            if (Currency::where('id', $settings->currency_id)
                ->where('deleted_at', '=', null)
                ->first()) {
                $code = $settings['Currency']->code;
            } else {
                $code = 'usd';
            }
        } else {
            $code = 'usd';
        }
        return $code;
    }

}
