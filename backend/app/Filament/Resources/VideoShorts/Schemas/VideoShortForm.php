<?php

namespace App\Filament\Resources\VideoShorts\Schemas;

use Filament\Forms;
use Filament\Schemas\Schema;

class VideoShortForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->schema([
            Forms\Components\TextInput::make('title')
                ->label('Judul Video')
                ->required()
                ->columnSpan(1), // hanya ambil setengah lebar

            Forms\Components\FileUpload::make('thumbnail')
                ->label('Thumbnail')
                ->disk('public')
                ->image()
                ->directory('shorts')
                ->required()
                ->columnSpan(5), // thumbnail juga setengah lebar

            Forms\Components\FileUpload::make('video_url')
                ->label('Video File')
                ->disk('public')
                ->directory('videos')
                ->visibility('public')
                ->acceptedFileTypes([
                    'video/mp4',
                    'video/webm',
                    'video/avi',
                    'video/mov',
                    'application/octet-stream',
                ])
                ->maxSize(102400)
                ->preserveFilenames()
                ->columnSpan(2), // form upload video lebih kecil
        ])->columns(4); // atur grid jadi 2 kolom
    }
}