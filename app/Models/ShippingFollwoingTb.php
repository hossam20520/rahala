<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShippingFollwoingTb extends Model
{
 
    public $timestamps = false;
    protected $table = 'ShippingFollwoingTb';

    protected $fillable = [
        'ID', 'CodeID', 'TypeID', 'RecievedName', 'RPhone1', 'RPhone2', 'DeliveryPlaceID',
        'Qt',
        'TotalPrice',
 
    ];


    public function branch()
    {
        return $this->belongsTo('App\Models\CoBranchTb' , 'DeliveryPlaceID' , 'ID' );
    }

    public function items()
    {
        return $this->hasMany('App\Models\RhallaMobile_FollowingDetails' , 'Sh_followingID' , 'ID' );
    }
 
   
}
