<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'icon',
    ];

    public function mainJobOffers()
    {
        return $this->hasMany(JobOffer::class, 'main_category_id');
    }

    public function secondaryJobOffers()
    {
        return $this->hasMany(JobOffer::class, 'secondary_category_id');
    }
}
