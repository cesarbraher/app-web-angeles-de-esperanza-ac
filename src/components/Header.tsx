import { ArrowLeft, ExternalLink, Menu } from 'lucide-react';
import { INSTITUTION_INFO, type PageRoute } from '../data/aeacData';
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
  { route: 'contacto', label: 'Contacto' },
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 lg:h-16 flex items-center justify-between gap-3 lg:gap-6">
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
            <span className="hidden lg:inline xl:hidden">ÁNGELES DE ESPERANZA</span>
            <span className="hidden xl:inline">ÁNGELES DE ESPERANZA A.C.</span>
          </button>
        </div>

        {/* Center Zone: Desktop Navigation */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-4 xl:gap-6">
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

        {/* Right Zone: Install App + Primary SISTEMA ÁNGELES CTA + Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <PWAInstallButton variant="compact" />

          <a
            href={INSTITUTION_INFO.sistemaAngelesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-lg bg-[#DC2626] hover:bg-red-700 active:scale-[0.98] text-white font-display text-sm xl:text-base font-bold tracking-wider uppercase shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
          >
            <span>SISTEMA ÁNGELES</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </a>

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

      {/* Mobile Prominent Quick Access Bar (< sm) */}
      <div className="sm:hidden border-t border-slate-200 bg-[#FAF9F6] px-3 py-2">
        <a
          href={INSTITUTION_INFO.sistemaAngelesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-red-700 active:scale-[0.99] text-white font-display text-base font-bold tracking-wider uppercase shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
        >
          <span>SISTEMA ÁNGELES</span>
          <ExternalLink className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </header>
  );
}
