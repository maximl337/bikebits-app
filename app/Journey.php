<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Journey extends Model
{
    protected $fillable = [
    	'title',
    	'description',
    	'user_id',
    	'category_id'
    ];
}
