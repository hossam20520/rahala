<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryStatusTb extends Model
{
    protected $table = 'DeliveryStatusTb';

    protected $fillable = [
        'ID', 'DName' 

    ];
}
