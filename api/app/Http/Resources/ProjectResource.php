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
            'type' => $this->type,
            'cover_image' => $this->image_url,
            'links' => [
                'repo' => $this->link_repo,
                'demo' => $this->link_demo,
            ],
            'is_featured' => $this->is_featured,
            'tech_stack' => $this->techStack->map(fn($t) => [
                'name' => $t->name,
                'icon' => $t->icon_url,
            ]),
            'tags' => $this->tags, // @deprecated: Use tech_stack
            'created_at' => $this->created_at->format('Y-m-d'),
        ];
    }
}
