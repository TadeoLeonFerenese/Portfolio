<?php

namespace Database\Seeders;

use App\Models\TechStack;
use Illuminate\Database\Seeder;

class TechStackSeeder extends Seeder
{
    public function run(): void
    {
        $stacks = [
            ['name' => 'Laravel', 'slug' => 'laravel', 'category' => 'Backend', 'icon_url' => 'https://laravel.com/img/logomark.min.svg'],
            ['name' => 'React', 'slug' => 'react', 'category' => 'Frontend', 'icon_url' => 'https://reactjs.org/favicon.ico'],
            ['name' => 'Vue', 'slug' => 'vue', 'category' => 'Frontend', 'icon_url' => 'https://vuejs.org/images/logo.png'],
            ['name' => 'Tailwind', 'slug' => 'tailwind', 'category' => 'Frontend', 'icon_url' => 'https://tailwindcss.com/favicons/favicon.ico'],
            ['name' => 'Docker', 'slug' => 'docker', 'category' => 'DevOps', 'icon_url' => 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png'],
            ['name' => 'MySQL', 'slug' => 'mysql', 'category' => 'Database', 'icon_url' => 'https://labs.mysql.com/common/logos/mysql-logo.svg'],
        ];

        foreach ($stacks as $stack) {
            TechStack::updateOrCreate(['slug' => $stack['slug']], $stack);
        }
    }
}
