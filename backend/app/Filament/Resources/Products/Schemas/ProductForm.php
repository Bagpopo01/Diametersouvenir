<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Forms\Components\TextInput::make('name')
                ->label('Name')
                ->required(),

            Forms\Components\TextInput::make('sku')
                ->label('SKU'),

            // ❌ field price dihapus

            Forms\Components\Textarea::make('description')
                ->label('Description'),

            // kategori induk
            Forms\Components\Select::make('category_id')
                ->label('Category')
                ->relationship('category', 'name')
                ->searchable()
                ->preload()
                ->required(),

            // sub kategori
            Forms\Components\Select::make('sub_category_id')
                ->label('Sub Category')
                ->relationship('subCategory', 'name')
                ->searchable()
                ->preload()
                ->required(),

            Forms\Components\TextInput::make('size')->label('Size'),
            Forms\Components\TextInput::make('material')->label('Material'),
            Forms\Components\TextInput::make('technique')->label('Technique'),
            Forms\Components\TextInput::make('box')->label('Box'),

            FileUpload::make('images')
                ->label('Gambar Produk')
                ->multiple()
                ->image()
                ->disk('public')
                ->directory('products/images')
                ->visibility('public')
                ->formatStateUsing(fn ($state) => $state)
                ->reorderable(),
        ]);
    }
}
