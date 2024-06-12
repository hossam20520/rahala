<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Date extends Model
{
    protected $table = 'dates';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name', "image" ,"date_name" , "category", "rate" , 'category_id'
    ];
 
    protected $casts = [
 
    ];
    public function getCategoryAttribute($value)
    {
        // Manipulate the retrieved value before returning it
        return   array_map('intval', explode(',', $value));
    }
    

}

