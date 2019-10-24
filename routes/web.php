<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/front_area/{path?}', function () {
    return view('app');
})->where('path', '.*');


Route::get('/v1/admin_area/{path?}', function () {
  return view('appBack');
})->where('path', '.*');

  // Landing Page Routes
  Route::get('/', function () {
    return view('welcome');
});

  // Landing Page Routes
  Route::get('/reservation_de_vehicule', function () {
    return view('reservation');
})->middleware('auth');

//Route::get('reservation_de_vehicule', 'DemandeApprentissageController@create');
//Route::get('/v1/front/{any}', 'PageController@front')->where('any', '.*');

Route::get('/v1/back/{any}', 'PageController@back')->where('any', '.*');

Route::get('/redirect_facebook', 'SocialAuthFacebookController@redirect');
Route::get('/callback_facebook', 'SocialAuthFacebookController@callback');

Route::get('/redirect_google', 'SocialAuthGoogleController@redirect');
Route::get('/callback_google', 'SocialAuthGoogleController@callback');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


 // ajouter demande 
 Route::post('ajouter_demande_pour_apprentissage', 'DemandeApprentissageController@store');

    // modifier une demande pour apprentissage
    Route::put('modifier_demande_pour_apprentissage/{id}', 'DemandeApprentissageController@update');