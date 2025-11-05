<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Criteria extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
    ];

    public function jobOffers()
    {
        return $this->belongsToMany(JobOffer::class, 'job_offer_criteria');
    }
}
