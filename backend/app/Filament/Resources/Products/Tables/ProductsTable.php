<?php

namespace App\Filament\Resources\Products\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Table;
use Filament\Actions\ActionGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;


class ProductsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('rowNumber')
                    ->label('No')
                    ->rowIndex(),

                TextColumn::make('name')
                    ->label('Nama')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('sku')
                    ->label('SKU'),

                TextColumn::make('price')
                    ->label('Harga')
                    ->money('idr')
                    ->sortable(),

                TextColumn::make('description')
                    ->label('Deskripsi')
                    ->limit(50),

                TextColumn::make('category.name')
                    ->label('Kategori')
                    ->sortable()
                    ->searchable(),

ImageColumn::make('images.0')
    ->label('Gambar Utama')
    ->getStateUsing(function ($record) {
        $image = $record->images[0] ?? null;
        if (! $image) return null;

        // Jika gambar sudah ada di public frontend, arahkan langsung ke URL-nya
        return asset('storage/' . $image); 
    })
    ->square(),

                TextColumn::make('size')->label('Ukuran'),
                TextColumn::make('material')->label('Material'),
                TextColumn::make('technique')->label('Teknik'),
                TextColumn::make('box')->label('Box'),

                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime()
                    ->sortable(),

                TextColumn::make('updated_at')
                    ->label('Diubah')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('category_id')
                    ->relationship('category', 'name')
                    ->label('Kategori'),
            ])
            ->recordActions([
                ActionGroup::make([
                    ViewAction::make(),
                    EditAction::make(),
                    DeleteAction::make(),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}