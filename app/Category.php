<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
   	protected $table = 'categories';

   	protected $fillable = [
   		'title',
   		'image',
   		'description'
   	];

   	public function journeys()
   	{
   		return $this->hasMany(Journey::class);
   	}
}
