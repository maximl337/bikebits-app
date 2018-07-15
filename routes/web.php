<?php

// Route::get('/', 'PageController@login');
// Route::get('/login', 'PageController@login');

Route::get('/{any}', function () {
    return view('app');
})->where(['any' => '.*']);