<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Client;
use Illuminate\Support\Facades\Schema;

class ClientSegmentationChart extends ChartWidget
{
  // Judul yang menegaskan portofolio kemitraan resmi
protected ?string $heading = 'Sebaran Kemitraan Klien (Pernah Bekerja Sama)';
    protected ?string $pollingInterval = '30s';
    protected static ?int $sort = 4;

    protected int | string | array $columnSpan = [
        'md' => 1,
        'xl' => 1,
    ];

    protected function getData(): array
    {
        if (! class_exists(Client::class)) {
            return [
                'datasets' => [['data' => [0, 0, 0]]],
                'labels' => ['B2B (Swasta)', 'B2G (Instansi)', 'Personal / Komunitas'],
            ];
        }

        // Deteksi kolom nama yang tersedia di tabel clients
        $column = 'name';
        if (Schema::hasColumn('clients', 'company_name')) {
            $column = 'company_name';
        } elseif (Schema::hasColumn('clients', 'client_name')) {
            $column = 'client_name';
        }

        // Query data riil berdasarkan nama badan usaha
        $b2bCount = Client::where(function ($q) use ($column) {
            $q->where($column, 'LIKE', '%PT%')
              ->orWhere($column, 'LIKE', '%CV%')
              ->orWhere($column, 'LIKE', '%TBK%')
              ->orWhere($column, 'LIKE', '%CORP%')
              ->orWhere($column, 'LIKE', '%STUDIO%');
        })->count();

        $b2gCount = Client::where(function ($q) use ($column) {
            $q->where($column, 'LIKE', '%DINAS%')
              ->orWhere($column, 'LIKE', '%KEMENTERIAN%')
              ->orWhere($column, 'LIKE', '%BUMN%')
              ->orWhere($column, 'LIKE', '%PEMDA%')
              ->orWhere($column, 'LIKE', '%KAB%')
              ->orWhere($column, 'LIKE', '%KOTA%');
        })->count();

        $totalClients = Client::count();
        $personalCount = max(0, $totalClients - ($b2bCount + $b2gCount));

        return [
            'datasets' => [
                [
                    'label' => 'Total Akun Klien Riil',
                    'data' => [$b2bCount, $b2gCount, $personalCount],
                    'backgroundColor' => [
                        '#38bdf8', // Sky Blue (B2B)
                        '#fbbf24', // Amber (B2G)
                        '#34d399', // Emerald (Personal)
                    ],
                    'borderRadius' => 6,
                ],
            ],
            'labels' => ['B2B (Swasta/Vendor)', 'B2G (Pemerintah/BUMN)', 'Personal / Komunitas'],
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }

    protected function getOptions(): array
    {
        return [
            'scales' => [
                'y' => [
                    'beginAtZero' => true,
                    'ticks' => [
                        'precision' => 0,
                    ],
                ],
            ],
        ];
    }
public function getDescription(): ?string
{
    return 'Komposisi sektor mitra resmi yang telah mempercayakan pembuatan proyek di studio kami.';
}
}