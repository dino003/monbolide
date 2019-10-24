<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    // retourne la vue du front office
    public function front()
    {
        return view('app');
    }

    // retourne la vue du back office
    public function back(){
        return view('appBack');
    }
}
