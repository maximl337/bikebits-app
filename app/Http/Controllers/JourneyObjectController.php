<?php

namespace App\Http\Controllers;

use App\Journey;
use Illuminate\Http\Request;

class JourneyObjectController extends ApiController
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    /**
     * [index description]
     * @param  Journey $journey [description]
     * @return [type]           [description]
     */
    public function index(Journey $journey)
    {
        $this->respond(['journey_objects' => $journey->objects()->get()]);
    }

    /**
     * [destroy description]
     * @param  Journey       $journey       [description]
     * @param  JourneyObject $journeyObject [description]
     * @return [type]                       [description]
     */
    public function destroy(Journey $journey, JourneyObject $journeyObject)
    {
        $journeyObject->delete();
        return $this->respond();
    }
}
