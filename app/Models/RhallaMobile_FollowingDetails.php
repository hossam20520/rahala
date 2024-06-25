<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RhallaMobile_FollowingDetails extends Model
{
    public $timestamps = false;
    protected $table = 'FollowingDetails';

    protected $fillable = [
        'id', 'Sh_followingID', 'Quantity', 'Price', 'TotalPrice', 'CategoryID' 

    ];
}
