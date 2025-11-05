<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSocialProfile extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'platform',
        'profile_url',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
