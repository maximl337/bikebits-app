<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    /**
     * [bikeIndex description]
     * @return [type] [description]
     */
    public function bikeIndex()
    {
        return view('bike.index');
    }

    /**
     * [shocksIndex description]
     * @return [type] [description]
     */
    public function shocksIndex()
    {
        return view('bike.shocks');
    }
}
