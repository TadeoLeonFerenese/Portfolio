<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\ServerStatsService;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    protected $statsService;

    public function __construct(ServerStatsService $statsService)
    {
        $this->statsService = $statsService;
    }

    /**
     * Get the server stats for the dashboard.
     * 
     * @return JsonResponse
     */
    public function stats(): JsonResponse
    {
        $data = $this->statsService->getStats();
        return response()->json($data);
    }
}
