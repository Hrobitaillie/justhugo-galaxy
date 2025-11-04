<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'street',
        'city',
        'state',
        'postal_code',
        'country',
        'is_active',
        'latitude',
        'longitude',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'latitude' => 'decimal:10',
        'longitude' => 'decimal:10',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_addresses')
            ->withPivot('is_active');
    }

    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }
}
