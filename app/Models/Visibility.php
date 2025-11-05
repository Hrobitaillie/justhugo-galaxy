<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visibility extends Model
{
    public $timestamps = false;

    protected $table = 'visibility';

    protected $fillable = [
        'type',
    ];

    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }
}
