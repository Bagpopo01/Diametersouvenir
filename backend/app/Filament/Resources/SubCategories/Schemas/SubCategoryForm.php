<?php

namespace App\Filament\Resources\SubCategories\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;

class SubCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->label('Kategori Induk')
                    ->required(),

                Forms\Components\TextInput::make('name')
                    ->label('Nama Sub Kategori')
                    ->required()
                    ->unique(ignoreRecord: true),
            ]);
    }
}
