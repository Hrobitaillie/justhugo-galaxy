<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Ici vous pouvez garder vos routes web (non-API)
// Exemple : routes pour les pages Vue
Route::get('/{any}', function () {
    return view('app'); // votre vue principale Vue.js
})->where('any', '.*');