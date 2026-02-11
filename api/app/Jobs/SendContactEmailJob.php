<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendContactEmailJob implements ShouldQueue
{
    use Queueable;

    protected array $data;

    /**
     * Create a new job instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        \Illuminate\Support\Facades\Log::info("📧 [JOB STARTED] Sending email to Admin from: " . $this->data['email']);
        
        // Simulation of heavy lifting (SMTP connection, template rendering)
        sleep(2); 

        // Here we would use Mail::to('admin@portfolio.dev')->send(new ContactMail($this->data));
        
        \Illuminate\Support\Facades\Log::info("✅ [JOB FINISHED] Email sent successfully!");
    }
}
