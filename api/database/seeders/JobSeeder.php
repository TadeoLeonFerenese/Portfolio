<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Job;

class JobSeeder extends Seeder
{
    public function run(): void
    {
        $jobs = [
            [
                'company' => 'Poder Judicial de la Nación',
                'title' => 'PHP/Laravel Developer',
                'start_date' => '2025-06-01',
                'end_date' => null,
                'description' => [
                    'Desarrollo backend con Laravel y PHP.',
                    'Refactorización de sistemas legados.',
                    'Gestión de bases de datos y migraciones.'
                ],
            ],
            [
                'company' => 'Consultor de Infraestructura & Soporte',
                'title' => 'SysAdmin / Support Lead',
                'start_date' => '2015-01-01',
                'end_date' => '2025-05-31',
                'description' => [
                    '10 años de experiencia en resolución de incidentes críticos.',
                    'Administración de servidores Linux/Windows.',
                    'Liderazgo técnico en ambientes de alta disponibilidad.'
                ],
            ],
        ];

        foreach ($jobs as $job) {
            Job::create($job);
        }
    }
}
