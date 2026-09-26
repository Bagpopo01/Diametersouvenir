<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\VideoShort;
use Illuminate\Http\Request;

class VideoShortController extends Controller
{
    // Ambil semua video dengan pagination
 public function index()
{
    return VideoShort::paginate(10);
}
    // Tambah video baru
    public function store(Request $request)
    {
        $video = VideoShort::create($request->validate([
            'title' => 'required|string|max:255',
            'thumbnail' => 'required|string',
            'video_url' => 'nullable|string',
        ]));

        return response()->json($video, 201);
    }

    // Detail video
    public function show($id)
    {
        return response()->json(VideoShort::findOrFail($id));
    }

    // Update video
    public function update(Request $request, $id)
    {
        $video = VideoShort::findOrFail($id);
        $video->update($request->validate([
            'title' => 'required|string|max:255',
            'thumbnail' => 'required|string',
            'video_url' => 'nullable|string',
        ]));

        return response()->json($video);
    }

    // Hapus video
    public function destroy($id)
    {
        $video = VideoShort::findOrFail($id);
        $video->delete();

        return response()->json(['message' => 'Video deleted successfully']);
    }
}