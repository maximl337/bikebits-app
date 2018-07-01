<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends ApiController
{
    public function index(Request $request)
    {
        return $this->respond([ 'categories' => Category::all() ]);
    }
}
