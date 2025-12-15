<?php

namespace App\Services;

class ServerStatsService
{
    /**
     * Get simulated server statistics for the Warcraft-style dashboard.
     *
     * @return array
     */
    public function getStats(): array
    {
        // In a real production environment, you might use `sys_getloadavg()` or `exec('uptime')`.
        // For this portfolio showcase, we'll simulate "living" stats to ensure the UI has data to animate.
        
        return [
            'cpu_load' => rand(15, 65), // Random Load between 15% and 65%
            'memory_usage' => '16GB',   // Fixed for now, or could be dynamic
            'uptime' => $this->getFormattedUptime(),
            'status' => 'ONLINE',       // API Status
            'server_name' => 'Azeroth-1',
            'active_quests' => rand(3, 10), // Represents active sessions or visitors
        ];
    }

    /**
     * Generate a cool RPG-style uptime string.
     *
     * @return string
     */
    private function getFormattedUptime(): string
    {
        // Static start date tailored for the "Server" start
        $start = \Carbon\Carbon::now()->subDays(152)->subHours(7);
        $now = \Carbon\Carbon::now();
        
        $diff = $start->diff($now);
        
        return "{$diff->days}d {$diff->h}h (Blood Oath)";
    }
}
