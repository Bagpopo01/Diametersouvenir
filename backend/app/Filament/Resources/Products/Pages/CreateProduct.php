<?php

namespace App\Filament\Resources\Products\Pages;

use App\Filament\Resources\Products\ProductResource;
use Filament\Resources\Pages\CreateRecord;

class CreateProduct extends CreateRecord
{
    protected static string $resource = ProductResource::class;
       protected function getRedirectUrl(): string
    {
        // setelah create, langsung kembali ke halaman index (list categories)
        return $this->getResource()::getUrl('index');
    }
}
