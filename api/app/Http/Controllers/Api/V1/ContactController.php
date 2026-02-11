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
        $contact = Contact::create($request->validated());

        // Dispatch async job to send email
        \App\Jobs\SendContactEmailJob::dispatch($contact->toArray());

        return response()->json([
            'message' => '¡Gracias! Te responderé pronto (Procesando envio...).',
        ], 201);
    }
}
