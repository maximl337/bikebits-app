<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/bike', 'HomeController@bikeIndex');

Route::get('/bike/shocks', 'HomeController@shocksIndex');
