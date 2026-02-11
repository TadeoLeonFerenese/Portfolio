<?php

namespace App\Services;

use App\Models\Project;
use Illuminate\Support\Collection;

use Illuminate\Support\Facades\Cache;

class ProjectService
{
    /**
     * Get all projects ordered by newest.
     */
    public function getAll(): Collection
    {
        return Cache::remember('projects_all', 60 * 60, function () {
            return Project::with('techStack')
                ->orderBy('created_at', 'desc')
                ->get();
        });
    }

    /**
     * Get only featured projects.
     */
    public function getFeatured(): Collection
    {
        return Cache::remember('projects_featured', 60 * 60, function () {
            return Project::with('techStack')
                ->where('is_featured', true)
                ->orderBy('created_at', 'desc')
                ->get();
        });
    }
}
