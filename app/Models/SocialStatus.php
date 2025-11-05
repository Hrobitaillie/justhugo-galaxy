<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialStatus extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
