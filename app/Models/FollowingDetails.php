<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FollowingDetails extends Model
{

    public $timestamps = false;
    protected $table = 'FollowingDetails';

    protected $fillable = [
        'id', 'Sh_followingID', 'Quantity', 'Price', 'TotalPrice', 'CategoryID' , ''

    ];

    public function category()
    {
        return $this->belongsTo('App\Models\category' , 'CategoryID' , 'ID' );
    }
    
}
