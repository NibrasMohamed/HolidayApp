<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Holiday extends Model
{
    public $primarykey=['id'];
    protected $fillable=[
        'name',
        'from',
        'to',
    ];

}
