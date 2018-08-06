<?php

namespace App\Http\Controllers;

use App\JourneyObjectType;
use Illuminate\Http\Request;

class JourneyObjectTypeController extends ApiController
{

	public function __construct()
	{
		$this->middleware('auth:api');
	}

    public function index()
    {
        return $this->respond(JourneyObjectType::all());
    }
}
