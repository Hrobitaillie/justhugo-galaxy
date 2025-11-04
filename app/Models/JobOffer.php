<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class JobOffer extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'title',
        'description',
        'duration',
        'salary',
        'datetime',
        'is_sponsored',
        'location',
        'status_id',
        'author_id',
        'main_category_id',
        'secondary_category_id',
        'visibility_id',
        'address_id',
        'is_volunteer',
        'uuid', // Ajouter UUID aux fillable
    ];

    protected $casts = [
        'is_sponsored' => 'boolean',
        'is_volunteer' => 'boolean',
        'salary' => 'decimal:10',
        'datetime' => 'datetime',
    ];

    /**
     * Boot function pour générer automatiquement l'UUID
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }

    /**
     * Scope pour rechercher par UUID
     */
    public function scopeByUuid($query, $uuid)
    {
        return $query->where('uuid', $uuid);
    }

    /**
     * Obtenir le route key pour les routes model binding
     */
    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function mainCategory()
    {
        return $this->belongsTo(Category::class, 'main_category_id');
    }

    public function secondaryCategory()
    {
        return $this->belongsTo(Category::class, 'secondary_category_id');
    }

    public function visibility()
    {
        return $this->belongsTo(Visibility::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function criteria()
    {
        return $this->belongsToMany(Criteria::class, 'job_offer_criteria');
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}
