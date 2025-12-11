<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Stockeate',
                'description' => 'Sistema de gestión de stock offline-first. Arquitectura compleja con sincronización diferida.',
                'image_url' => 'https://via.placeholder.com/600x400',
                'link_repo' => '',
                'link_demo' => '',
                'is_featured' => true,
                'tags' => ['React Native', 'NestJS', 'Prisma'],
            ],
            [
                'title' => 'Portfolio RPG',
                'description' => 'Portfolio personal con arquitectura escalable y diseño temático.',
                'image_url' => 'https://via.placeholder.com/600x400',
                'link_repo' => '',
                'link_demo' => '',
                'is_featured' => true,
                'tags' => ['React', 'Laravel', 'Clean Arch'],
            ],
            [
                'title' => 'Discord Music Bot',
                'description' => 'Bot de música experimental.',
                'image_url' => 'https://via.placeholder.com/600x400',
                'link_repo' => '',
                'link_demo' => '',
                'is_featured' => false,
                'tags' => ['Node.js'],
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
