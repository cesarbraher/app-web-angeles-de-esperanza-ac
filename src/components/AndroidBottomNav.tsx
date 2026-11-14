import { Building2, HeartPulse, Home, MessageCircle, Users } from 'lucide-react';
import type { PageRoute } from '../data/aeacData';

interface AndroidBottomNavProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const BOTTOM_TABS: {
  route: PageRoute;
  label: string;
  Icon: typeof Home;
}[] = [
  { route: 'inicio', label: 'Inicio', Icon: Home },
  { route: 'programa', label: 'Programa', Icon: HeartPulse },
  { route: 'equipo', label: 'Equipo', Icon: Users },
  { route: 'comunidad', label: 'Comunidad', Icon: Building2 },
  { route: 'contacto', label: 'Contacto', Icon: MessageCircle },
];

export function AndroidBottomNav({ activeRoute, onNavigate }: AndroidBottomNavProps) {
  return (
    <nav
      aria-label="Navegación principal móvil"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-safe"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-xl mx-auto px-1">
        {BOTTOM_TABS.map(({ route, label, Icon }) => {
          const isActive = activeRoute === route;
          return (
            <button
              key={route}
              type="button"
              onClick={() => onNavigate(route)}
              aria-current={isActive ? 'page' : undefined}
              className="min-h-[48px] flex flex-col items-center justify-center gap-0.5 px-1 rounded-lg active:scale-95 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              <span
                className={`px-3.5 py-1 rounded-full transition-colors duration-150 flex items-center justify-center ${
                  isActive
                    ? route === 'contacto'
                      ? 'bg-red-50 text-[#DC2626]'
                      : 'bg-blue-50 text-[#1D4ED8]'
                    : 'text-slate-500'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.25 : 1.75} />
              </span>
              <span
                className={`text-[11px] leading-none tracking-tight whitespace-nowrap ${
                  isActive
                    ? route === 'contacto'
                      ? 'font-semibold text-[#DC2626]'
                      : 'font-semibold text-[#1D4ED8]'
                    : 'font-medium text-slate-600'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
