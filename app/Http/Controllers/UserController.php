<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Repository;
use App\User;

class UserController extends Controller
{
    protected $model;

    public function __construct(User $user){
        $this->model = new Repository($user);
       // $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('created_at', 'desc')
                                        ->with(['account_provider_facebook', 'account_provider_google'])
                                        ->withCount('demandes_apprentissages')    
                                        ->get();

        return response()->json($users);

       // return $this->model->with(['user'] )->get(); ne peut pas ordonner par date

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      //
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $demande = User::find($id);

        // return response()->json($demande);

        // return $this->model->show($id);
       //  return $this->model->with(['user'] )->show($id); 


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function edit(User $User)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->model->update($request->only($this->model->getModel()->fillable), $id);

         return response()->json(User::with(['account_provider_facebook', 'account_provider_google'])
                            ->withCount('demandes_apprentissages') ->find($id), 200);   
    }

    public function updateStatus($id){
        $user = User::find($id);

        $user->active = !$user->active;

        $user->save();
    }

    public function toggleAdmin($id){
        $user = User::find($id);

        $user->isAdmin = !$user->isAdmin;

        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->model->delete($id);

    }
}
