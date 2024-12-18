<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver_delivery_shipping extends Model
{
    protected $table = 'Driver_delivery_shipping';


    protected $fillable = [
        'Code_delivery', 'DriverID' ,'Quantity' ,'Total_Price' ,'Paid__value' ,
        'Remaining_value' ,
        'BranchID' ,
        'Delivery_placeID' ,
        'IsActive' ,

    ];


    public function place()
    {
        return $this->belongsTo('App\Models\CoBranchTb' , 'Delivery_placeID' , 'ID' );
    }

    public function branch()
    {
        return $this->belongsTo('App\Models\CoBranchTb' , 'BranchID' , 'ID' );
    }

    

}
