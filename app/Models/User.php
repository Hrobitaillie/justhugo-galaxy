<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'uuid',
        'first_name',
        'last_name',
        'phone',
        'avatar_url',
        'birth_date',
        'gender',
        'bio',
        'current_address_id',
        'is_active',
        'role_id',
        'is_association',
        'last_login_at',
        'social_status_id',
        'gender_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'birth_date' => 'date',
            'is_active' => 'boolean',
            'is_association' => 'boolean',
            'last_login_at' => 'datetime',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'deleted_at' => 'datetime',
        ];
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function currentAddress()
    {
        return $this->belongsTo(Address::class, 'current_address_id');
    }

    public function addresses()
    {
        return $this->belongsToMany(Address::class, 'user_addresses')
            ->withPivot('is_active');
    }

    public function socialStatus()
    {
        return $this->belongsTo(SocialStatus::class);
    }

    public function genderRelation()
    {
        return $this->belongsTo(Gender::class, 'gender_id');
    }

    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class, 'author_id');
    }

    public function applications()
    {
        return $this->hasMany(Application::class, 'applicant_id');
    }

    public function socialProfiles()
    {
        return $this->hasMany(UserSocialProfile::class);
    }

    public function metrics()
    {
        return $this->hasOne(UserMetric::class);
    }

    public function associationMetrics()
    {
        return $this->hasMany(UserMetric::class, 'association_id');
    }
}
