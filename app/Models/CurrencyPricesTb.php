<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrencyPricesTb extends Model
{
    protected $table = 'CurrencyPricesTb';

    protected $fillable = [
         'FirstCurrencyID', 'SecondCurrencyID', 'SellPrice', 'BuyPrice', 'CurrencyPower', 'IsActive',
        'InsertDate',
        'IsActive' 
     

    ];



    public function FCurrency()
    {
        return $this->belongsTo('App\Models\CurrencyMainTb' , 'FirstCurrencyID' , 'ID' );
    }


    public function LCurrency()
    {
        return $this->belongsTo('App\Models\CurrencyMainTb' , 'SecondCurrencyID' , 'ID' );
    }



}




 