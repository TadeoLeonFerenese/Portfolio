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
                'title' => 'Poder Judicial Legacy Refactor',
                'description' => 'Reingeniería de infraestructura crítica para el Poder Judicial. Migración de monolitos a servicios optimizados, reduciendo tiempos de respuesta en un 40%.',
                'image_url' => 'https://placehold.co/600x400/1a1a1a/fafafa?text=Infrastructure',
                'link_repo' => '', // Confidential
                'link_demo' => '',
                'is_featured' => true,
                'tags' => ['Docker', 'Linux', 'Legacy Systems', 'Monitoring'],
            ],
            [
                'title' => 'Portfolio Sensei',
                'description' => 'Portfolio personal diseñado con Clean Architecture y estética Dark/Diablo. Construido para demostrar maestría en el stack Laravel + React.',
                'image_url' => 'https://placehold.co/600x400/bb0a1e/ffffff?text=Portfolio',
                'link_repo' => 'https://github.com/tadeoleon/portfolio',
                'link_demo' => 'https://tadeoleon.dev',
                'is_featured' => true,
                'tags' => ['Laravel', 'React', 'Vite', 'Clean Architecture'],
            ],
            [
                'title' => 'E-comm Microservices',
                'description' => 'Demo de arquitectura de microservicios para retail masivo. Implementación de CQRS y Event Sourcing.',
                'image_url' => 'https://placehold.co/600x400/18181b/fbbf24?text=E-comm',
                'link_repo' => 'https://github.com/tadeoleon/ecomm-demo',
                'link_demo' => '',
                'is_featured' => false,
                'tags' => ['Microservices', 'Event Sourcing', 'Kafka', 'Go'],
            ]
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
