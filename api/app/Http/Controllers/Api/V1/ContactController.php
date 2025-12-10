<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request): JsonResponse
    {
        Contact::create($request->validated());

        return response()->json([
            'message' => '¡Gracias! Te responderé pronto.',
        ], 201);
    }
}
