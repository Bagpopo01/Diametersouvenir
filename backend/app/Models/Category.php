<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // Kolom yang bisa diisi lewat mass assignment
    protected $fillable = ['name', 'image'];

    /**
     * Relasi ke Product
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function subCategories()
{
    return $this->hasMany(SubCategory::class);
}

}