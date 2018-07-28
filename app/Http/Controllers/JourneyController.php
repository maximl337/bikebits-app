<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

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
        $this->validate($request, [
            'categoryId' => 'required|exists:categories,id'
        ]);
        $category = Category::find($request->categoryId);
        $journeys = $category->journeys()->with('journey_objects')->get();
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
            'category_id' => 'required|exists:categories,id'
        ]);

        $journey = new Journey(
                $request->only(['title', 'description', 'category_id'])
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
