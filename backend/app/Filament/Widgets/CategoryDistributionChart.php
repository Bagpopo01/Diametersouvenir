<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class CategoryDistributionChart extends ChartWidget
{
    protected ?string $heading = 'Proporsi Portofolio Berdasarkan Kategori';
    protected ?string $pollingInterval = '30s'; // Realtime update otomatis
    protected static ?int $sort = 3;

    protected int | string | array $columnSpan = [
        'md' => 1,
        'xl' => 1,
    ];

    protected function getData(): array
    {
        // 1. QUERY RIIL DATABASE: Ambil kategori yang memiliki produk
        $categories = Category::query()
            ->withCount('products')
            ->having('products_count', '>', 0)
            ->orderByDesc('products_count')
            ->get();

        // 2. Ekstraksi label & total produk asli dari database
        $labels = $categories->pluck('name')->toArray();
        $counts = $categories->pluck('products_count')->toArray();

        // Palet warna modern untuk membedakan tiap kategori
        $colors = [
            '#0284c7', // Sky Blue
            '#0d9488', // Teal
            '#eab308', // Amber
            '#8b5cf6', // Indigo / Purple
            '#ec4899', // Pink
            '#f97316', // Orange
            '#10b981', // Emerald
            '#64748b', // Slate
        ];

        // Sesuaikan jumlah warna dengan jumlah kategori riil
        $backgroundColors = array_slice($colors, 0, count($labels));

        return [
            'datasets' => [
                [
                    'label' => 'Total Produk Riil',
                    'data' => $counts,
                    'backgroundColor' => $backgroundColors,
                    'borderWidth' => 2,
                    'borderColor' => '#0f172a', // Pembatas kontras warna gelap
                    'hoverOffset' => 6,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }

    public function getDescription(): ?string
    {
        $totalCategoriesWithProducts = Category::has('products')->count();
        return "Menampilkan sebaran produk riil dari {$totalCategoriesWithProducts} kategori aktif di katalog.";
    }
}