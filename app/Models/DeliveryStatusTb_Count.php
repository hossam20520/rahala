<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryStatusTb_Count extends Model
{
    protected $table = 'DeliveryStatusTb_Count';

    protected $fillable = [
        'ID', 'CodeID' , 'DeliveryStatusTb_ID' , 'DeliveryStatusTb_count' 

    ];


    public function status()
    {
        return $this->belongsTo('App\Models\DeliveryStatusTb' , 'DeliveryStatusTb_ID' , 'ID' );
    }


}
