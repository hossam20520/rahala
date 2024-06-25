<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccounsActivityTb extends Model
{
    protected $table = 'AccounsActivityTb';

    protected $fillable = [
        'ID', 'CodeID', 'ISID', 'Debit', 'Credit', 'TypeID', 'AccID',
        'MovementType',
        'Notes',
        'IsActive',
        'InsertDate',
        'BranchID',
        'TypeMobile',
        'Value_Mobile',

    ];


    public function branch()
    {
        return $this->belongsTo('App\Models\CoBranchTb' , 'BranchID' , 'ID' );
    }
    
    // public function  Currency()
    // {
    //     return $this->belongsTo('App\Models\CurrencyMainTb' , 'SCurenncyID' , 'ID' );
    // }
 
}
