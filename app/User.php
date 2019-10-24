<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function demandes_apprentissages(){
        return $this->hasMany(DemandeApprentissage::class, 'user', 'id');
    }

    public function account_provider_facebook(){
        return $this->hasMany(SocialFacebookAccount::class, '');
    }

    public function account_provider_google(){
        return $this->hasMany(SocialGoogleAccount::class);
    }
}
