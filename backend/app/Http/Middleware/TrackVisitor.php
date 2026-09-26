<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Visitor;
use Carbon\Carbon;

class TrackVisitor
{
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Abaikan pelacakan jika yang dibuka adalah admin panel (/admin) atau file aset internal
        if ($request->is('admin*') || $request->is('livewire*')) {
            return $next($request);
        }

        // 2. Ambil IP pengunjung & tanggal hari ini
        $ip = $request->ip();
        $today = Carbon::today();

        // 3. Catat hanya jika IP ini belum pernah berkunjung hari ini
        $alreadyVisitedToday = Visitor::where('ip_address', $ip)
            ->whereDate('created_at', $today)
            ->exists();

        if (! $alreadyVisitedToday) {
            Visitor::create([
                'ip_address'   => $ip,
                'user_agent'   => substr($request->userAgent() ?? '', 0, 255),
                'page_visited' => $request->path(),
                'referer'      => substr($request->header('referer') ?? '', 0, 255),
            ]);
        }

        return $next($request);
    }
}