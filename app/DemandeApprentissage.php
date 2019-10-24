<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DemandeApprentissage extends Model
{
    protected $table = 'demandes_apprentissages';

    protected $guarded = ['id'];

   // protected $date = ['date_proposee'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user');
    }
}
