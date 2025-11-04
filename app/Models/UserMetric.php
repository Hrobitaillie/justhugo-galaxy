<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserMetric extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'association_id',
        'offers_executed',
    ];

    protected $casts = [
        'offers_executed' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function association()
    {
        return $this->belongsTo(User::class, 'association_id');
    }
}
