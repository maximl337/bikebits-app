<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::resource('categories', 'CategoryController');
Route::resource('journeys', 'JourneyController');
Route::resource('journeys/{journey}/objects', 'JourneyObjectController');


