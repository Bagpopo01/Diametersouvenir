<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Visitor;
use Illuminate\Support\Facades\Schema;

class LeadAcquisitionChart extends ChartWidget
{
    protected ?string $heading = 'Kanal Penetrasi Minat Pasar (Lead Sources)';
    protected ?string $pollingInterval = '30s';
    protected static ?int $sort = 6;

    protected int | string | array $columnSpan = [
        'md' => 1,
        'xl' => 1,
    ];

    protected function getData(): array
    {
        // 1. Cek keberadaan tabel visitors
        if (! Schema::hasTable('visitors')) {
            return $this->getDefaultData(0, 0, 0);
        }

        // 2. Deteksi otomatis nama kolom rujukan yang tersedia di database
        $possibleColumns = ['referrer', 'referer', 'source', 'utm_source', 'origin'];
        $refColumn = null;

        foreach ($possibleColumns as $col) {
            if (Schema::hasColumn('visitors', $col)) {
                $refColumn = $col;
                break;
            }
        }

        // 3. Jika kolom sumber/rujukan tidak ditemukan, tampilkan total kunjungan secara aman
        if (! $refColumn) {
            $total = Visitor::count();
            return $this->getDefaultData(0, 0, $total);
        }

        // 4. Query dinamis sesuai kolom yang valid
        $google = Visitor::where($refColumn, 'LIKE', '%google%')->count();
        $instagram = Visitor::where(function ($q) use ($refColumn) {
            $q->where($refColumn, 'LIKE', '%instagram%')
              ->orWhere($refColumn, 'LIKE', '%t.co%')
              ->orWhere($refColumn, 'LIKE', '%tiktok%');
        })->count();
        $direct = Visitor::whereNull($refColumn)->orWhere($refColumn, '')->count();

        return $this->getDefaultData($google, $instagram, $direct);
    }

    private function getDefaultData(int $google, int $instagram, int $direct): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Total Jejak Audiens',
                    'data' => [$google, $instagram, $direct],
                    'backgroundColor' => [
                        '#38bdf8', // Cyan (Google Search / SEO)
                        '#ec4899', // Pink (Instagram / Medsos)
                        '#34d399', // Emerald (Direct / WhatsApp Link)
                    ],
                    'borderRadius' => 6,
                ],
            ],
            'labels' => ['Google Search (SEO)', 'Instagram / Medsos', 'Direct / WhatsApp Link'],
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }

    public function getDescription(): ?string
    {
        return 'Memetakan asal kanal calon klien menemukan katalog portofolio studio.';
    }
}