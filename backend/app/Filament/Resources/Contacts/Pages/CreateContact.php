<?php

namespace App\Filament\Resources\Contacts\Pages;

use App\Filament\Resources\Contacts\ContactResource;
use Filament\Resources\Pages\CreateRecord;

class CreateContact extends CreateRecord
{
    protected static string $resource = ContactResource::class;
       protected function getRedirectUrl(): string
    {
        // setelah create, langsung kembali ke halaman index (list categories)
        return $this->getResource()::getUrl('index');
    }
}
