<?php

namespace App\Filament\Resources\VideoShorts;

use App\Filament\Resources\VideoShorts\Pages\CreateVideoShort;
use App\Filament\Resources\VideoShorts\Pages\EditVideoShort;
use App\Filament\Resources\VideoShorts\Pages\ListVideoShorts;
use App\Filament\Resources\VideoShorts\Schemas\VideoShortForm;
use App\Filament\Resources\VideoShorts\Tables\VideoShortsTable;
use App\Models\VideoShort;
use BackedEnum;
use unitenum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class VideoShortResource extends Resource
{
    protected static ?string $model = VideoShort::class;
    protected static UnitEnum|string|null $navigationGroup = 'Vidio Shorts';
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return VideoShortForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return VideoShortsTable::configure($table);
    }
public static function shouldRegisterNavigation(): bool
{
    return true;
}

public static function getNavigationGroup(): ?string
{
    return 'Content Management';
}

public static function getNavigationLabel(): string
{
    return 'Video Shorts';
}
    public static function getRelations(): array
    {
        return [
            //
        ];
    }
public function index()
{
    return response()->json(VideoShort::paginate(10)->through(function ($video) {
        return [
            'id' => $video->id,
            'title' => $video->title,
            'thumbnail' => asset('storage/' . $video->thumbnail),
            'video_url' => $video->video_url ? asset('storage/' . $video->video_url) : null,
        ];
    }));
}
    public static function getPages(): array
    {
        return [
            'index' => ListVideoShorts::route('/'),
            'create' => CreateVideoShort::route('/create'),
            'edit' => EditVideoShort::route('/{record}/edit'),
        ];
    }
}
