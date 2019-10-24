<?php

namespace App\Http\Controllers;

use App\DemandeApprentissage;
use Illuminate\Http\Request;
use App\Repositories\Repository;
use Auth;

class DemandeApprentissageController extends Controller
{
    protected $model;

    public function __construct(DemandeApprentissage $demande){
        $this->model = new Repository($demande);
       // $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $demandes = DemandeApprentissage::orderBy('date_proposee', 'desc')
                                        ->with('user')    
                                        ->get();

        return response()->json($demandes);

       // return $this->model->with(['user'] )->get(); ne peut pas ordonner par date

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('reservation');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $demande = new DemandeApprentissage;
            $demande->date_proposee = $request->get('date_proposee');
            $demande->date_fin_reservation = $request->get('date_fin_reservation');
            $demande->reference = substr(Auth::user()->name, 0, 10) . time();

            $demande->heure_debut_reservation = $request->get('heure_debut_reservation');
            $demande->heure_fin_reservation = $request->get('heure_fin_reservation');
            $demande->type_utilisation = $request->get('type_utilisation');
            $demande->type_conduite_chauffeur = $request->get('type_conduite_chauffeur');
            $demande->lieu_utilisation = $request->get('lieu_utilisation');
            $demande->coord_numero_tel = $request->get('coord_numero_tel');
            $demande->user = Auth::user()->id;
            $demande->save();

        return response()->json(DemandeApprentissage::with(['user'])
                                     ->find($demande->id), 201);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DemandeApprentissage  $demandeApprentissage
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $demande = DemandeApprentissage::find($id);

        // return response()->json($demande);

        // return $this->model->show($id);
         return $this->model->with(['user'] )->show($id); 


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\DemandeApprentissage  $demandeApprentissage
     * @return \Illuminate\Http\Response
     */
    public function edit(DemandeApprentissage $demandeApprentissage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DemandeApprentissage  $demandeApprentissage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->model->update($request->only($this->model->getModel()->fillable), $id);

         return response()->json(DemandeApprentissage::with(['user'])->find($id));   
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DemandeApprentissage  $demandeApprentissage
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->model->delete($id);

    }
}
