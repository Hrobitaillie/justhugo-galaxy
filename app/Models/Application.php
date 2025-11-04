<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'job_offer_id',
        'application_date',
        'status_id',
        'applicant_id',
        'description',
    ];

    protected $casts = [
        'application_date' => 'datetime',
    ];

    public function jobOffer()
    {
        return $this->belongsTo(JobOffer::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function applicant()
    {
        return $this->belongsTo(User::class, 'applicant_id');
    }
}
