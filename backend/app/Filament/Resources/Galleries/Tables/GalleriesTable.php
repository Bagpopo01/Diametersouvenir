<?php

namespace App\Filament\Resources\Galleries\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Actions\ActionGroup;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class GalleriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('rowNumber')
                    ->label('No')
                    ->rowIndex(),

                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable(),

                ImageColumn::make('url')
                    ->disk('public')
                    ->label('Foto')
                    ->square(),

                TextColumn::make('type')
                    ->label('Kategori')
                    ->formatStateUsing(fn($state) => $state === 'produksi' ? 'Produksi' : 'Produk'),

                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->date(),
            ])
            ->filters([
                // bisa ditambah filter kalau perlu
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