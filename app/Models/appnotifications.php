<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class appnotifications extends Model
{

    public $timestamps = false;
    protected $table = 'appnotifications';

    protected $fillable = [
        'user_id', 'account_id', 'title', 'body', 'read', 'read' 

    ];
}
