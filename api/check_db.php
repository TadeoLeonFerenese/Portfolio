<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$projects = \App\Models\Project::all();
echo "Projects count: " . $projects->count() . "\n";
echo "TechStacks count: " . \App\Models\TechStack::count() . "\n";
if ($projects->count() > 0) {
    echo json_encode($projects->first()->load('techStack'), JSON_PRETTY_PRINT);
}
