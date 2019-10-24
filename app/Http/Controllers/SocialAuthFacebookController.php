<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Socialite;
use App\Services\SocialFacebookAccountService;
use Illuminate\Support\Facades\Session;


class SocialAuthFacebookController extends Controller
{
    /**
   * Create a redirect method to facebook api.
   *
   * @return void
   */
  public function redirect()
  {
      return Socialite::driver('facebook')->redirect();
  }
  /**
   * Return a callback method from facebook api.
   *
   * @return callback URL from facebook
   */
  public function callback(SocialFacebookAccountService $service)
  {
      $user = $service->createOrGetUser(Socialite::driver('facebook')->user());
      if(!$user->active){
        auth()->logout($user);
        Session::flash('message', 'Votre authengtification à échoué!'); 
        Session::flash('alert-class', 'alert-danger'); 

        return redirect()->to('/');

      }
      auth()->login($user);
      Session::flash('message', 'Vous êtes connecté(e)!'); 
      Session::flash('alert-class', 'alert-info'); 
      return redirect()->to('/');
  }
}
