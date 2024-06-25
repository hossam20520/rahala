<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FollowingDetails extends Model
{
    protected $table = 'FollowingDetails';

    protected $fillable = [
        'id', 'Sh_followingID', 'Quantity', 'Price', 'TotalPrice', 'CategoryID' 

    ];
}
