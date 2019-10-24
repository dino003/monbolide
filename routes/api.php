<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//********************* */ demandes pour apprentissages **************************************************

//----------- pour le front office ----------------------------------------------//
Route::prefix('front')->group(function () {




});


//------------ fin front office --------------------------------------------------//


//----------- pour le back office ----------------------------------------------//

Route::prefix('back')->group(function () {
   
    // obtenir la liste de toutes les demandes pour apprentissage
    Route::get('liste_des_demandes_pour_apprentissage', 'DemandeApprentissageController@index');

   

 // voir une demande pour apprentissage
    Route::get('voir_demande_pour_apprentissage/{id}', 'DemandeApprentissageController@show');

   // modifier une demande pour apprentissage
   Route::put('modifier_demande_pour_apprentissage/{id}', 'DemandeApprentissageController@update');

    // supprimer une demande pour apprentissage
    Route::delete('supprimer_demande_pour_apprentissage/{id}', 'DemandeApprentissageController@destroy');


    //****************** user  ********************************************************/
    Route::get('users', 'UserController@index');
    // voir
    Route::get('voir_user/{id}', 'UserController@show');

    // ajouter 
    Route::post('ajouter_user', 'UserController@store');
    // modifier
    Route::put('modifier_user/{id}', 'UserController@update');

    // changer status 
    Route::get('modifier_user_status/{id}', 'UserController@updateStatus');

  // changer status toggle_admin
  Route::get('toggle_admin/{id}', 'UserController@toggleAdmin');

    // supprimer
    Route::delete('supprimer_user/{id}', 'UserController@destroy');
//*********** fin user ********************************************************* 

});



//------------ fin back office --------------------------------------------------//

// **********************  fin demandes pour apprentissages ****************************************************
