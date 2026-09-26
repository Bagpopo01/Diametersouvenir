<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (! Schema::hasColumn('products', 'views_count')) {
                // Set default 1000 untuk setiap produk baru
                $table->unsignedBigInteger('views_count')->default(1000)->after('id');
            }
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'views_count')) {
                $table->dropColumn('views_count');
            }
        });
    }
};