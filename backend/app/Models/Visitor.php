<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    // Mengizinkan pengisian data otomatis
    protected $fillable = ['ip_address', 'user_agent'];
}
