<?php

namespace App\Http\Controllers;

use JourneyObjectType;
use Illuminate\Http\Request;

class JourneyObjectTypeController extends ApiController
{
    public function index()
    {
        return $this->respond(JourneyObjectType::all());
    }
}
