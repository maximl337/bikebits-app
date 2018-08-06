<?php

namespace App\Http\Controllers;

use App\Journey;
use App\JourneyObject;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
     * [store description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'object_type_id' => 'required',
            'object_id' => 'required'
        ]);

        if(!$request->journey_id) {
            $journey = new Journey(
                ['title' => 'unnamed journey']
            );
            $request->user()->journeys()->save($journey);
        } else {
            $journey = Journey::findOrFail($request->journey_id);

        }
        if(!$journey->journey_objects()->where('object_id', $request->object_id)->exists()) {
            $journey->journey_objects()->save(new JourneyObject(
                $request->only([
                    'object_type_id',
                    'object_id'
                ])
            ));
        }

        $journey->load('journey_objects');

        return response(compact('journey'));
    }

    /**
     * [destroy description]
     * @param  Journey       $journey       [description]
     * @param  JourneyObject $journeyObject [description]
     * @return [type]                       [description]
     */
    public function destroy(JourneyObject $journeyObject)
    {
        $journeyObject->delete();
        return $this->respond([]);
    }
}
