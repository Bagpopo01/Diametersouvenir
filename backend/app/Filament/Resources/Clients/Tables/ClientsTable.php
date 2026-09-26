<?php

namespace App\Filament\Resources\Clients\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Actions\ViewAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\ActionGroup;

class ClientsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('rowNumber')
                    ->label('No')
                    ->rowIndex(),

                TextColumn::make('name')
                    ->label('Nama'),

                ImageColumn::make('image') // gunakan 'logo' sesuai field di DB
                    ->disk('public')
                    ->label('Foto')
                    ->square(),

                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->date(),
            ])
            ->filters([
                //
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