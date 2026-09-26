<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        // Mengambil kategori + sub_categories + jumlah produk per sub
        $categories = Category::with(['subCategories' => function($query) {
            $query->withCount('products');
        }])->get();

        return response()->json($categories);
    }
}
