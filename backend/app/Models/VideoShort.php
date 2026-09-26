<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoShort extends Model
{
    protected $fillable = ['title', 'thumbnail', 'video_url'];

    protected $appends = ['thumbnail_url', 'video_full_url'];

    public function getThumbnailUrlAttribute()
    {
        return asset('storage/' . $this->thumbnail);
    }

    public function getVideoFullUrlAttribute()
    {
        return asset('storage/' . $this->video_url);
    }
}
