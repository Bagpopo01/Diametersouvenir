<?php

namespace App\Filament\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use App\Models\Product;

class TopViewedProductsTable extends BaseWidget
{
    // Judul & tata letak widget di dashboard
    protected static ?string $heading = 'Top 5 Portofolio Paling Diminati (Screening Pasar)';
    protected static ?int $sort = 5;
    protected int | string | array $columnSpan = 'full';
    
    // Polling otomatis setiap 30 detik untuk mendeteksi kenaikan views secara riil
    protected ?string $pollingInterval = '30s';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                // Mengambil portofolio berdasarkan urutan views_count tertinggi (1000, 1001, 1002, dst.)
                Product::query()
                    ->orderByDesc('views_count')
                    ->latest('id')
                    ->limit(5)
            )
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Portofolio / Karya')
                    ->weight('bold')
                    ->searchable(),

                Tables\Columns\TextColumn::make('category.name')
                    ->label('Kategori')
                    ->badge()
                    ->color('info'),

                Tables\Columns\TextColumn::make('views_count')
                    ->label('Total Tayangan')
                    ->badge()
                    ->color('success')
                    ->formatStateUsing(fn ($state) => number_format((int)($state ?? 1000), 0, ',', '.') . 'x tayang')
                    ->sortable(),

                Tables\Columns\TextColumn::make('sku')
                    ->label('Kode / SKU')
                    ->color('gray'),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Tanggal Publikasi')
                    ->date('d M Y')
                    ->sortable(),
            ])
            ->paginated(false);
    }
}