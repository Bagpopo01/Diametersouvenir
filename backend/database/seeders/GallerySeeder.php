<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
    \App\Models\Gallery::insert([
        ['title' => 'Mesin Laser CO2', 'url' => 'products/images/laser.jpg', 'type' => 'produksi'],
        ['title' => 'Plakat Akrilik Premium', 'url' => 'products/images/plakat.jpg', 'type' => 'produk'],
        // dst...
    ]);
}
}
