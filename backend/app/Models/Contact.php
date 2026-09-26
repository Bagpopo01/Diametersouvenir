<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'title',
        'text',
        'link',
        'icon',
        'color',
        'image', // kalau kamu pakai upload gambar
    ];
}