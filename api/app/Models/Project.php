<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_url',
        'link_repo',
        'link_demo',
        'is_featured',
        'type', // 'main' or 'inventory'
        'tags',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'tags' => 'array',
    ];

    public function techStack(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(TechStack::class);
    }
}
