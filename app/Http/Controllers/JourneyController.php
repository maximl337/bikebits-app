<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Journey;

class JourneyController extends ApiController
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * [index description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function index(Request $request)
    {
        \Log::info('request', $request->input());
        $category_id = $request->input('category_id');
        $journeys = Journey::whereHas('journey_objects')
                        ->when($category_id, function ($query, $category_id) {
                            return $query->where('category_id', $category_id);
                        })
                        ->with('journey_objects')
                        ->get();
        return $this->respond(compact('journeys'));
    }

    /**
     * [store description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:3',
        ]);

        $journey = new Journey(
                $request->only(['title', 'description'])
            );
        $request->user()->journeys()->save($journey);
        return $this->respondCreated('', compact('journey'));
    }

    /**
     * [destroy description]
     * @param  Journey $journey [description]
     * @return [type]           [description]
     */
    public function destroy(Journey $journey)
    {
        $journey->delete();
        return $this->respond([]);
    }

    /**
     * [update description]
     * @param  Journey $journey [description]
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function update(Journey $journey, Request $request)
    {
        $this->validate($request, [
            'title' => 'min:3',
        ]);

        $input = array_filter($request->only(['title', 'description']));
        $journey->update($input);
        return $this->respond(compact('journey'));
    }
}
