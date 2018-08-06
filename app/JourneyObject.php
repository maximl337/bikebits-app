<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JourneyObject extends Model
{
    protected $fillable = [
    	'object_id',
    	'object_type_id',
    	'journey_id'
    ];

    public function journey()
    {
    	return $this->belongsTo(Journey::class);
    }
}
