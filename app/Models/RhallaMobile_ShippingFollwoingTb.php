<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RhallaMobile_ShippingFollwoingTb extends Model
{
    public $timestamps = false;
    protected $table = 'RhallaMobile_ShippingFollwoingTb';

    protected $fillable = [
        'ID', 'CodeID', 'TypeID', 'RecievedName', 'RPhone1', 'RPhone2', 'DeliveryPlaceID',
        'Qt',
        'TotalPrice',
 
    ];


    public function branch()
    {
        return $this->belongsTo('App\Models\CoBranchTb' , 'DeliveryPlaceID' , 'ID' );
    }

    
}
