<?php

namespace App\Filament\Resources\Contacts\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\ViewAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\ActionGroup;

class ContactsTable
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
                    ->sortable()
                    ->searchable(),

                TextColumn::make('text')
                    ->label('Deskripsi')
                    ->limit(40),

                TextColumn::make('link')
                    ->label('Link')
                    ->limit(30),
           TextColumn::make('phone')
    ->label('Nomor WA')
    ->searchable(),


                TextColumn::make('icon')
                    ->label('Icon'),

                TextColumn::make('color')
                    ->label('Warna'),
            ])
            ->filters([
                // Tambahkan filter jika perlu
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