<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\Auth;

class CustomGreeting extends BaseWidget
{
    protected function getStats(): array
    {
        $hour = date('H');
        $greeting = match(true) {
            $hour < 12 => 'Selamat Pagi',
            $hour < 15 => 'Selamat Siang',
            $hour < 18 => 'Selamat Sore',
            default => 'Selamat Malam',
        };

        $name = Auth::user()->name;

        return [
            Stat::make($greeting . ', ' . $name . '!', 'Siap mengelola Diameter Souvenir?')
                ->description('Pantau portofolio Anda hari ini secara real-time.')
                ->descriptionIcon('heroicon-m-sparkles')
                ->color('primary'),
        ];
    }
}
