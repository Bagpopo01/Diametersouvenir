<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contacts')->insert([
    [
        'title' => 'Email',
        'text' => 'Kirim pertanyaan via email',
        'link' => 'mailto:info@diametersouvenir.com',
        'icon' => 'mail',
        'color' => 'bg-blue-600'
    ],
    [
        'title' => 'Telepon',
        'text' => 'Hubungi langsung tim kami',
        'link' => 'tel:+628123456789',
        'icon' => 'phone',
        'color' => 'bg-green-600'
    ],
    [
        'title' => 'Lokasi',
        'text' => 'Kunjungi showroom kami',
        'link' => 'https://maps.google.com?q=diameter+souvenir',
        'icon' => 'map-pin',
        'color' => 'bg-red-600'
    ]
]);
    }
}
