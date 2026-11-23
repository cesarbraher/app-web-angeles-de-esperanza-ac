import { ArrowLeft, Menu } from 'lucide-react';
import type { PageRoute } from '../data/aeacData';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  activeRoute: PageRoute;
  canGoBack: boolean;
  onBack: () => void;
  onNavigate: (route: PageRoute) => void;
  onOpenMenu: () => void;
}

const DESKTOP_NAV_ITEMS: { route: PageRoute; label: string }[] = [
  { route: 'inicio', label: 'Inicio' },
  { route: 'institucion', label: 'Institución' },
  { route: 'programa', label: 'Programa' },
  { route: 'equipo', label: 'Equipo' },
  { route: 'comunidad', label: 'Comunidad' },
];

const MOBILE_SCREEN_TITLES: Record<PageRoute, string> = {
  inicio: 'Ángeles de Esperanza',
  institucion: 'Institución y Registros',
  programa: 'Programa 6 Meses',
  equipo: 'Equipo Clínico',
  comunidad: 'Comunidad y Guías',
  'bolsa-trabajo': 'Bolsa de Trabajo',
  'consejeria-linea': 'Consejería en Línea',
  'expedientes-clinicos': 'Expedientes Clínicos',
  contacto: 'Contacto Directo',
  privacidad: 'Política de Privacidad',
};

const ROOT_TAB_ROUTES = new Set<PageRoute>([
  'inicio',
  'programa',
  'equipo',
  'comunidad',
  'contacto',
]);

export function Header({
  activeRoute,
  canGoBack,
  onBack,
  onNavigate,
  onOpenMenu,
}: HeaderProps) {
  const showMobileBack = !ROOT_TAB_ROUTES.has(activeRoute) && canGoBack;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 lg:h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Left Zone: Mobile Back or Brand Mark */}
        <div className="flex items-center gap-2 min-w-0">
          {showMobileBack ? (
            <button
              type="button"
              onClick={onBack}
              aria-label="Volver atrás"
              className="lg:hidden min-w-[44px] min-h-[44px] -ml-1.5 inline-flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => onNavigate('inicio')}
            className="inline-flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap min-w-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            {!showMobileBack && (
              <img
                src="/assets/aistudio/LOGOTIPO_TRANSPARENTE_13f56971.png"
                alt="Logotipo Ángeles de Esperanza A.C."
                className="h-8 w-8 lg:h-9 lg:w-9 object-contain shrink-0"
              />
            )}
            <span className="lg:hidden truncate">{MOBILE_SCREEN_TITLES[activeRoute]}</span>
            <span className="hidden lg:inline">ÁNGELES DE ESPERANZA A.C.</span>
          </button>
        </div>

        {/* Center Zone: Desktop Navigation (5 concise links) */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6">
          {DESKTOP_NAV_ITEMS.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => onNavigate(item.route)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] ${
                  isActive ? 'text-[#1D4ED8]' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1D4ED8]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: Install App + Primary CTA / Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <PWAInstallButton variant="compact" />

          <button
            type="button"
            onClick={() => onNavigate('contacto')}
            className={`hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626] ${
              activeRoute === 'contacto'
                ? 'bg-slate-900 text-white'
                : 'bg-[#DC2626] text-white hover:bg-red-700'
            }`}
          >
            Contacto
          </button>

          <button
            type="button"
            aria-label="Abrir menú de secciones"
            onClick={onOpenMenu}
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
