<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Filament\Navigation\NavigationGroup;
use Filament\View\PanelsRenderHook;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

// 1. IMPORT WIDGET ANALITIK & REALTIME
use App\Filament\Widgets\LiveAnalyticsOverview;
use App\Filament\Widgets\AdvancedAnalyticsChart;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            
            // Branding & Tema
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->brandName('Diameter Souvenir')
            ->brandLogo(asset('images/LOGO.png'))
            ->brandLogoHeight('2.5rem')     
            ->favicon(asset('images/LOGO.png'))
            
            // Subtitle Logo
            ->renderHook(
                PanelsRenderHook::SIDEBAR_NAV_START,
                fn (): \Illuminate\Support\HtmlString => new \Illuminate\Support\HtmlString('
                    <div class="px-6 py-5 mb-4 border-b border-gray-100/50 bg-gradient-to-br from-slate-50/50 to-transparent">
                        <div class="flex flex-col">
                            <p style="font-size: 11px; font-weight: 900; letter-spacing: 0.3em; background: linear-gradient(to right, #0284c7, #38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-transform: uppercase;">
                                Diameter Souvenir
                            </p>
                            <p style="font-size: 8px; font-weight: 600; letter-spacing: 0.15em; color: #94a3b8; text-transform: uppercase; margin-top: 4px; display: flex; align-items: center; gap: 6px;">
                                <span style="height: 1px; width: 12px; background: #cbd5e1;"></span>
                                Portfolio Management
                            </p>
                        </div>
                    </div>
                '),
            )

            // Warna Tema
            ->colors([
                'primary' => [
                    50 => '#f0f7ff',
                    100 => '#e0effe',
                    200 => '#bae0fd',
                    300 => '#7cc2fc',
                    400 => '#38a3f8',
                    500 => '#0ea5e9',
                    600 => '#0284c7',
                    700 => '#0369a1',
                    800 => '#075985',
                    900 => '#0c4a6e',
                    950 => '#082f49',
                ],
                'gray' => Color::Slate, 
            ])
            ->font('Inter')

            // Navigasi Sidebar
            ->sidebarCollapsibleOnDesktop()
            ->sidebarWidth('18rem')
            ->navigationGroups([
                'Product Management',
                'Customer Service',
                'Media Management',
                'Content Management',
                'Pengaturan',
            ])

            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->resources([
                \App\Filament\Resources\Categories\CategoryResource::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')

            // 2. DI SINI TEMPAT MENARUH KEDUA WIDGET BARU:
            ->widgets([
                \App\Filament\Widgets\CustomGreeting::class,       // Ucapan Selamat Datang
                LiveAnalyticsOverview::class,                     // 3 Kartu Metrik Realtime
                AdvancedAnalyticsChart::class,                    // Grafik Analitik (Filter Hari/Bulan/Tahun)
            ])

            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}