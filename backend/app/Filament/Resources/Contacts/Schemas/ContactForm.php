<?php

namespace App\Filament\Resources\Contacts\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;

class ContactForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\TextInput::make('title')
                    ->label('Judul Kontak')
                    ->required()
                    ->unique(ignoreRecord: true),

                Forms\Components\TextInput::make('text')
                    ->label('Deskripsi')
                    ->required(),
                    Forms\Components\TextInput::make('phone')
    ->label('Nomor WhatsApp / Telepon')
    ->tel()
    ->required(),


                Forms\Components\TextInput::make('link')
                    ->label('Link (mailto/tel/url)')
                    ->required(),

                Forms\Components\TextInput::make('icon')
                    ->label('Icon (mail, phone, map-pin)')
                    ->required(),
                    

                Forms\Components\TextInput::make('color')
                    ->label('Warna Tailwind (bg-blue-600)')
                    ->required(),

                FileUpload::make('image')
                    ->label('Gambar/Icon Kontak')
                    ->disk('public')
                    ->directory('contacts')
                    ->visibility('public')
                    ->image()
                    ->imagePreviewHeight('150')
                    ->downloadable()
                    ->openable(),
            ]);
    }
}