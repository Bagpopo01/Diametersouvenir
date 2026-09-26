<?php

namespace App\Filament\Resources\Categories\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Facades\Storage;

class CategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\TextInput::make('name')
                    ->label('Nama Kategori')
                    ->required()
                    ->unique(ignoreRecord: true),

            FileUpload::make('image')
    ->label('Foto Kategori')
    ->disk('public')
    ->directory('products/categories')
    ->visibility('public')
    ->image()
    ->imagePreviewHeight('150')
    ->downloadable() // ✅ tombol download otomatis
    ->openable(),
    
    // ✅ tombol open otomatis
            ]);
            
    }
   
}