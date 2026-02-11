<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\ProjectController;

use App\Http\Controllers\Api\V1\ContactController;

Route::prefix('v1')->group(function () {
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:3,1');
    Route::get('/dashboard/stats', [App\Http\Controllers\Api\V1\DashboardController::class, 'stats']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
