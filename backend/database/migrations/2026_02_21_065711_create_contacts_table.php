<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
    $table->id();
    $table->string('title');       // Email, Telepon, Lokasi
    $table->string('text');        // Deskripsi singkat
    $table->string('link');        // mailto, tel, url
    $table->string('icon');        // nama ikon (mail, phone, map-pin)
    $table->string('color');       // warna bg
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
