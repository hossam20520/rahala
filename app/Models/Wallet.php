<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected $table = 'wallet';

    protected $fillable = [
        
        'wallet', 'currency_id'  , 'user_CUSTEMPACCOUNTTB_id' , 'mobile_user_id'
  

    ];


    public function  Currency()
    {
        return $this->belongsTo('App\Models\CurrencyMainTb' , 'currency_id' , 'ID' );
    }
}
