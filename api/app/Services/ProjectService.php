<?php

namespace App\Services;

use App\Models\Project;
use Illuminate\Support\Collection;

class ProjectService
{
    /**
     * Get all projects ordered by newest.
     */
    public function getAll(): Collection
    {
        return Project::orderBy('created_at', 'desc')->get();
    }

    /**
     * Get only featured projects.
     */
    public function getFeatured(): Collection
    {
        return Project::where('is_featured', true)
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
