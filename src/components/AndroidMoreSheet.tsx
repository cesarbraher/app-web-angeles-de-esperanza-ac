import {
  Briefcase,
  ChevronRight,
  ExternalLink,
  FileText,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Video,
  X,
} from 'lucide-react';
import { INSTITUTION_INFO, type PageRoute } from '../data/aeacData';
import { GOOGLE_PLACE_INFO } from '../data/googlePlaceData';
import { PWAInstallButton } from './PWAInstallButton';

interface AndroidMoreSheetProps {
  isOpen: boolean;
  activeRoute: PageRoute;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

const SECONDARY_ROUTES: {
  route: PageRoute;
  label: string;
  subtitle: string;
  Icon: typeof Landmark;
}[] = [
  {
    route: 'institucion',
    label: 'Institución y Registros',
    subtitle: 'Misión, valores, SAT, CLUNI, COFEPRIS y Protección Civil',
    Icon: Landmark,
  },
  {
    route: 'bolsa-trabajo',
    label: 'Bolsa de Trabajo',
    subtitle: 'Vinculación laboral y oportunidades profesionales',
    Icon: Briefcase,
  },
  {
    route: 'consejeria-linea',
    label: 'Consejería en Línea',
    subtitle: 'Orientación digital certificada en adicciones',
    Icon: Video,
  },
  {
    route: 'expedientes-clinicos',
    label: 'Expedientes Clínicos',
    subtitle: 'Seguimiento médico y terapéutico digital',
    Icon: FileText,
  },
  {
    route: 'privacidad',
    label: 'Política de Privacidad',
    subtitle: 'Aviso LFPDPPP y derechos ARCO',
    Icon: ShieldCheck,
  },
];

export function AndroidMoreSheet({
  isOpen,
  activeRoute,
  onClose,
  onNavigate,
}: AndroidMoreSheetProps) {
  if (!isOpen) return null;

  const handleSelect = (route: PageRoute) => {
    onNavigate(route);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menú de la aplicación"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl bg-white border border-slate-200 shadow-xl max-h-[88vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-3 pb-2 px-5 border-b border-slate-200 space-y-2 shrink-0">
          <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto sm:hidden" />
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src="/pwa-192x192.png"
                alt="Logotipo Ángeles de Esperanza"
                className="w-9 h-9 rounded-lg border border-slate-200 shrink-0"
              />
              <div className="min-w-0">
                <p className="font-display text-base font-bold text-slate-900 truncate">
                  Ángeles de Esperanza, A.C.
                </p>
                <p className="text-xs text-slate-500 truncate">
                  Irapuato, Guanajuato · Atención Residencial
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-4 space-y-5">
          {/* Primary External Platform CTA */}
          <a
            href={INSTITUTION_INFO.sistemaAngelesUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full min-h-[60px] flex items-center justify-between gap-3 rounded-2xl bg-[#DC2626] hover:bg-red-700 active:scale-[0.99] px-5 py-3.5 text-white shadow-md shadow-red-600/25 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
          >
            <div className="min-w-0">
              <p className="font-display text-xl font-bold tracking-wider uppercase leading-tight">
                SISTEMA ÁNGELES
              </p>
              <p className="text-xs text-red-100 font-mono truncate">
                braher.org/angeles
              </p>
            </div>
            <ExternalLink className="w-5 h-5 shrink-0" />
          </a>

          {/* Quick Direct Android Intents */}
          <div className="grid grid-cols-3 gap-2.5">
            <a
              href={`https://wa.me/${INSTITUTION_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[56px] flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-[#FAF9F6] p-2.5 text-center hover:border-[#25D366] transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#16A34A]" />
              <span className="text-xs font-semibold text-slate-900">WhatsApp</span>
            </a>

            <a
              href={`tel:${INSTITUTION_INFO.phoneFixedRaw}`}
              className="min-h-[56px] flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-[#FAF9F6] p-2.5 text-center hover:border-[#1D4ED8] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#1D4ED8]" />
              <span className="text-xs font-semibold text-slate-900">Llamar</span>
            </a>

            <a
              href={GOOGLE_PLACE_INFO.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[56px] flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-[#FAF9F6] p-2.5 text-center hover:border-[#DC2626] transition-colors"
            >
              <MapPin className="w-5 h-5 text-[#DC2626]" />
              <span className="text-xs font-semibold text-slate-900">Ubicación</span>
            </a>
          </div>

          {/* Institutional Sections List */}
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1 pb-1">
              Secciones Institucionales
            </p>
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
              {SECONDARY_ROUTES.map(({ route, label, subtitle, Icon }) => {
                const isActive = activeRoute === route;
                return (
                  <button
                    key={route}
                    type="button"
                    onClick={() => handleSelect(route)}
                    className={`w-full min-h-[60px] px-4 py-3 flex items-center gap-3.5 text-left transition-colors cursor-pointer ${
                      isActive ? 'bg-blue-50/70' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-[#1D4ED8] text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-semibold truncate ${
                          isActive ? 'text-[#1D4ED8]' : 'text-slate-900'
                        }`}
                      >
                        {label}
                      </p>
                      <p className="text-xs text-slate-500 truncate">{subtitle}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Install Android App CTA */}
          <div className="pt-1 pb-2">
            <PWAInstallButton variant="full" />
          </div>
        </div>
      </div>
    </div>
  );
}
