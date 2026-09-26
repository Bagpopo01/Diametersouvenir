<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Tag;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sku',
        'price',
        'description',
        'category_id',
        'images',
        'size',
        'material',
        'technique',
        'box',
    ];

    protected $casts = [
        'images' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function getMainImageAttribute()
{
    if (is_array($this->images)) {
        return $this->images[0] ?? null;
    }

    return $this->images;
}
public function subCategory()
{
    return $this->belongsTo(SubCategory::class);
}



   
}