<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->query('type'); // ?type=produksi atau ?type=produk

        $query = Gallery::query();
        if ($type && in_array($type, ['produksi', 'produk'])) {
            $query->where('type', $type);
        }

        return response()->json($query->get());
    }

    public function show($id)
    {
        $gallery = Gallery::find($id);
        if (!$gallery) {
            return response()->json(['message' => 'Data galeri tidak ditemukan'], 404);
        }
        return response()->json($gallery);
    }
}