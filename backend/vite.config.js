import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js', 
                'resources/css/filament/admin/theme.css' // Pastikan file ini ada di folder backend
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    // Tambahkan blok build ini agar manifest.json tidak tersembunyi di folder .vite
    build: {
        manifest: 'manifest.json',
    }
});
