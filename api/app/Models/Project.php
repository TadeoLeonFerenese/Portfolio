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
        'tags',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'tags' => 'array',
    ];
}
