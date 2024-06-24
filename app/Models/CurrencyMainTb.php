<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrencyMainTb extends Model
{
    protected $table = 'CurrencyMainTb';

    protected $fillable = [
        'ID', 'CuName', 'IBAN', 'SellPrice', 'CurCode', 'IsActive' 
  

    ];
}
 