<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Api\VideoShortController;
use App\Models\Client;
use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ContactController;
use App\Models\Contact;
use App\Http\Controllers\Api\CategoryController;


Route::apiResource('video-shorts', VideoShortController::class);
Route::get('/video-shorts', [VideoShortController::class, 'index']);
// routes/api.php
Route::get('/categories', function () {
    return \App\Models\Category::withCount('products')
        ->select('id','name','image')
        ->get();
});
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/clients', function () {
    return Client::all();
});

Route::apiResource('products', ProductController::class);
Route::apiResource('galleries', GalleryController::class);
Route::get('/contacts', [ContactController::class, 'index']);
Route::get('/contacts', function () {
    return Contact::all();
});
// Tambahkan baris ini di routes/api.php
// routes/api.php

Route::get('/categories', function () {
    // Hapus ->select(...) agar relasi bisa dimuat dengan benar
    return \App\Models\Category::with(['subCategories' => function($q) {
            $q->withCount('products');
        }])
        ->withCount('products')
        ->get();
});

// routes/api.php
Route::get('/products', function () {
    return \App\Models\Product::all(); // Pastikan mengambil semua kolom termasuk sub_category_id
});

Route::get('/categories-with-sub', [CategoryController::class, 'index']);