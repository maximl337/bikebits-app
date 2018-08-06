<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('register', 'AuthController@register');

});

Route::resource('categories', 'CategoryController');
Route::resource('journeys', 'JourneyController');
Route::get('journeys/objects/types', 'JourneyObjectTypeController@index');
Route::resource('journeys/objects', 'JourneyObjectController');


