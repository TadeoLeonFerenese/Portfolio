<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'cover_image' => $this->image_url, // API response mapping example
            'links' => [
                'repo' => $this->link_repo,
                'demo' => $this->link_demo,
            ],
            'is_featured' => $this->is_featured,
            'tags' => $this->tags,
            'created_at' => $this->created_at->format('Y-m-d'),
        ];
    }
}
