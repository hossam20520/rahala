<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MonyTransTb extends Model
{
    
    public $timestamps = false;
    protected $table = 'MonyTransTb';

    protected $fillable = [
        'ID', 'CodeID', 'RecievedName', 'RPhone1', 'RPhone2', 'DeliveryPlaceID',
        'SCurenncyID',
        'RCurenncyID',
        'Value',
        'DeliveredStatus',

    ];


}


 