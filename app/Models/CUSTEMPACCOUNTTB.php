<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CUSTEMPACCOUNTTB extends Model
{
  

    protected $table = 'CUSTEMPACCOUNTTB';

    protected $fillable = [
        'ID', 'AccountCode', 'AccName', 'LogPhone1', 'LogPhone2', 'BranchID', 'AccID',
        'IsExist',
        'IsActive',
        'InsertDate',
        'LogType',

    ];
 
    
}
