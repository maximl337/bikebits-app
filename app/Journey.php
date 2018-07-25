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

    public function category()
    {
    	return $this->belongsTo(Category::class);
    }

    public function journey_objects()
    {
    	return $this->hasMany(JourneyObject::class);
    }
}
