<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoBranchTb extends Model
{
   

    // CoBranchTb

    protected $table = 'CoBranchTb';

    protected $fillable = [
         'BName', 'Phone1', 'Phone2', 'BAddress', 'CityID', 'CountryID',
        'IsActive' 
     

    ];


   
}
