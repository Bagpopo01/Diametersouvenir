<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('category_id')->nullable()->constrained('categories');
            $table->json('tags')->nullable();
            $table->json('images')->nullable();
            $table->string('sku')->nullable();
            $table->string('size')->nullable();
            $table->string('material')->nullable();
            $table->text('technique')->nullable();
            $table->string('box')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropColumn([
                'category_id','tags','images','sku',
                'size','material','technique','box'
            ]);
        });
    }
};