<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Visitor;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AdvancedAnalyticsChart extends ChartWidget
{
    protected ?string $heading = 'Analisa Trafik & Kunjungan Portofolio';
    protected ?string $pollingInterval = '15s';
    protected static ?int $sort = 2;
    protected int | string | array $columnSpan = 'full';

    public ?string $filter = 'month';

    protected function getFilters(): ?array
    {
        return [
            'today' => 'Hari Ini (Per Jam)',
            'week'  => '7 Hari Terakhir',
            'month' => 'Bulan Ini (Harian)',
            'year'  => 'Tahun Ini (Bulanan)',
        ];
    }

    protected function getData(): array
    {
        $activeFilter = $this->filter;
        $labels = [];
        $viewsData = [];

        switch ($activeFilter) {
            case 'today':
                $hours = range(0, 23);
                $records = Visitor::select(DB::raw('HOUR(created_at) as hour'), DB::raw('count(*) as count'))
                    ->whereDate('created_at', Carbon::today())
                    ->groupBy('hour')
                    ->pluck('count', 'hour')
                    ->toArray();

                foreach ($hours as $h) {
                    $labels[] = sprintf('%02d:00', $h);
                    $viewsData[] = $records[$h] ?? 0;
                }
                break;

            case 'week':
                for ($i = 6; $i >= 0; $i--) {
                    $date = Carbon::today()->subDays($i);
                    $labels[] = $date->translatedFormat('D, d M');
                    $viewsData[] = Visitor::whereDate('created_at', $date)->count();
                }
                break;

            case 'year':
                for ($m = 1; $m <= 12; $m++) {
                    $labels[] = Carbon::create(null, $m)->translatedFormat('M');
                    $viewsData[] = Visitor::whereYear('created_at', Carbon::now()->year)
                        ->whereMonth('created_at', $m)
                        ->count();
                }
                break;

            case 'month':
            default:
                $daysInMonth = Carbon::now()->daysInMonth;
                for ($d = 1; $d <= $daysInMonth; $d++) {
                    $labels[] = (string)$d;
                    $viewsData[] = Visitor::whereYear('created_at', Carbon::now()->year)
                        ->whereMonth('created_at', Carbon::now()->month)
                        ->whereDay('created_at', $d)
                        ->count();
                }
                break;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Pengunjung Unik Riil',
                    'data' => $viewsData,
                    'borderColor' => '#38bdf8',
                    'backgroundColor' => 'rgba(56, 189, 248, 0.15)',
                    'fill' => 'start',
                    'tension' => 0.4,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    public function getDescription(): ?string
    {
        $totalThisMonth = Visitor::whereMonth('created_at', Carbon::now()->month)->count();
        return "Total pengunjung tercatat bulan ini: {$totalThisMonth} orang.";
    }
    protected function getOptions(): array
{
    return [
        'scales' => [
            'y' => [
                'beginAtZero' => true,
                'ticks' => [
                    'precision' => 0, // Hanya menampilkan angka bulat (1, 2, 3, dst.)
                ],
            ],
        ],
    ];
}
}