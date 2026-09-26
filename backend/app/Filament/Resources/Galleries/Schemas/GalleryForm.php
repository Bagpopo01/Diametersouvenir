<?php

namespace App\Filament\Resources\Galleries\Schemas;

use Filament\Forms;
use Filament\Schemas\Schema;

class GalleryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->schema([
            Forms\Components\TextInput::make('title')
                ->label('Judul')
                ->required(),

            Forms\Components\FileUpload::make('url')
                ->label('Gambar')
                ->disk('public')
                ->directory('galleries')
                ->image()
                ->required(),

            Forms\Components\Select::make('type')
                ->label('Kategori')
                ->options([
                    'produksi' => 'Produksi',
                    'produk'   => 'Produk',
                ])
                ->required(),
        ]);
    }
}