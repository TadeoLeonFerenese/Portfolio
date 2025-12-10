<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Services\ProjectService;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    protected ProjectService $projectService;

    public function __construct(ProjectService $projectService)
    {
        $this->projectService = $projectService;
    }

    public function index(): JsonResponse
    {
        $projects = $this->projectService->getAll();
        
        return response()->json([
            'data' => ProjectResource::collection($projects),
            'meta' => [
                'count' => $projects->count(),
                'api_version' => 'v1'
            ]
        ]);
    }
}
