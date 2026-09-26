<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoShortSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
    \App\Models\VideoShort::create([
        'title' => 'Miniatur Crane',
        'thumbnail' => 'shorts/crane.jpg',
        'video_url' => null,
    ]);

    \App\Models\VideoShort::create([
        'title' => 'Emergency Vehicle',
        'thumbnail' => 'shorts/emergency.jpg',
        'video_url' => null,
    ]);
}
}
