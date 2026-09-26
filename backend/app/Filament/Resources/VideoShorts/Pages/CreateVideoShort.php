<?php

namespace App\Filament\Resources\VideoShorts\Pages;

use App\Filament\Resources\VideoShorts\VideoShortResource;
use Filament\Resources\Pages\CreateRecord;

class CreateVideoShort extends CreateRecord
{
    protected static string $resource = VideoShortResource::class;
       protected function getRedirectUrl(): string
    {
        // setelah create, langsung kembali ke halaman index (list categories)
        return $this->getResource()::getUrl('index');
    }
}
