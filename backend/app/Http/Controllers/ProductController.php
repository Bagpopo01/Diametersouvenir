<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get()->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'description' => $product->description,
                'images' => is_array($product->images) ? $product->images : json_decode($product->images, true),
                'sku' => $product->sku,
                'size' => $product->size,
                'material' => $product->material,
                'technique' => $product->technique,
                'box' => $product->box,
                'views_count' => (int) ($product->views_count ?? 1000),
                'category_id' => $product->category_id,
                'category_name' => $product->category ? $product->category->name : null,
                'created_at' => $product->created_at,
            ];
        });

        return response()->json($products);
    }

    public function show($id)
    {
        $product = Product::with('category')->find($id);

        if (!$product) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }

        // Tambah 1 tayangan riil setiap kali detail diakses (tanpa mengubah updated_at)
        $product->incrementQuietly('views_count');

        return response()->json([
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'description' => $product->description,
            'images' => is_array($product->images) ? $product->images : json_decode($product->images, true),
            'sku' => $product->sku,
            'size' => $product->size,
            'material' => $product->material,
            'technique' => $product->technique,
            'box' => $product->box,
            'views_count' => (int) ($product->views_count ?? 1000),
            'category_id' => $product->category_id,
            'category_name' => $product->category ? $product->category->name : null,
            'created_at' => $product->created_at,
        ]);
    }
}