import {
  Clock,
  ExternalLink,
  Globe,
  MapPin,
  MessageCircle,
  MessageSquarePlus,
  Navigation,
  Phone,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { INSTITUTION_INFO, type PageRoute } from '../data/aeacData';
import { GOOGLE_PLACE_INFO } from '../data/googlePlaceData';

interface GooglePlaceSectionProps {
  onNavigate?: (route: PageRoute) => void;
}

export function GooglePlaceSection({ onNavigate }: GooglePlaceSectionProps) {
  return (
    <section
      id="ubicacion-google-maps"
      aria-labelledby="google-place-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-[#1D4ED8]">
              Ubicación Verificada · Google Maps Place
            </p>
            <h2
              id="google-place-heading"
              className="font-display text-3xl font-bold text-slate-900 tracking-tight text-balance"
            >
              Encuéntranos en Google Maps, consulta estrellas y opiniones
            </h2>
          </div>

          <a
            href={GOOGLE_PLACE_INFO.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:underline whitespace-nowrap shrink-0"
          >
            Abrir ficha oficial en Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Unified Split Place Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-200 bg-white rounded-lg overflow-hidden shadow-xs">
          {/* Left Column: Place General Info + Stars & Reviews Access */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 p-6 sm:p-7 space-y-6">
            <div className="space-y-5">
              {/* Place Identity Header */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-semibold text-[#1D4ED8]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Google Place Activo
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    {GOOGLE_PLACE_INFO.hoursLabel}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                    {GOOGLE_PLACE_INFO.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {GOOGLE_PLACE_INFO.category} · Irapuato, Guanajuato
                  </p>
                </div>
              </div>

              {/* Google Stars & Reviews Block */}
              <div className="bg-[#FAF9F6] border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="flex items-center gap-1"
                    aria-label="Calificación en estrellas de Google Maps"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-amber-400 text-amber-500"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-500">
                    Google Reviews
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">
                    Estrellas y opiniones de nuestra comunidad
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consulta en vivo las calificaciones y referencias publicadas por familias y usuarios en Google Maps, o comparte tu propia experiencia.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <a
                    href={GOOGLE_PLACE_INFO.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md bg-[#1D4ED8] hover:bg-blue-800 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    Ver opiniones
                  </a>
                  <a
                    href={GOOGLE_PLACE_INFO.writeReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    <MessageSquarePlus className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    Escribir opinión
                  </a>
                </div>
              </div>

              {/* General Place Data */}
              <dl className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <dt className="text-[11px] uppercase tracking-wider font-medium text-slate-500">
                      Dirección oficial
                    </dt>
                    <dd className="text-slate-800 leading-snug mt-0.5">
                      {GOOGLE_PLACE_INFO.address}
                    </dd>
                    <dd className="font-mono text-[11px] text-slate-500 mt-0.5">
                      Plus Code: {GOOGLE_PLACE_INFO.plusCode}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 pt-3">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider font-medium text-slate-500">
                      Horario en Google Maps
                    </dt>
                    <dd className="text-slate-900 font-medium mt-0.5">
                      {GOOGLE_PLACE_INFO.hoursLabel}
                    </dd>
                    <dd className="text-xs text-slate-500">{GOOGLE_PLACE_INFO.hoursDetail}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 pt-3">
                  <Phone className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider font-medium text-slate-500">
                        Teléfono fijo
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={`tel:${GOOGLE_PLACE_INFO.phoneRaw}`}
                          className="font-mono text-sm font-semibold text-slate-900 hover:text-[#1D4ED8] tabular-nums"
                        >
                          {GOOGLE_PLACE_INFO.phone}
                        </a>
                      </dd>
                    </div>

                    <div className="border-l border-slate-200 pl-4">
                      <dt className="text-[11px] uppercase tracking-wider font-medium text-slate-500">
                        WhatsApp directo
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={`https://wa.me/${INSTITUTION_INFO.whatsappRaw}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-[#16A34A] hover:underline tabular-nums"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          {INSTITUTION_INFO.whatsapp}
                        </a>
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-100 pt-3">
                  <Globe className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider font-medium text-slate-500">
                      Sitio web verificado
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href={GOOGLE_PLACE_INFO.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs sm:text-sm text-[#1D4ED8] hover:underline"
                      >
                        {GOOGLE_PLACE_INFO.websiteDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Bottom Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2.5">
              <a
                href={GOOGLE_PLACE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>

              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('contacto')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Solicitar valoración
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Official Interactive Google Maps Place Embed */}
          <div className="lg:col-span-7 flex flex-col bg-slate-100">
            <div className="px-5 py-3 bg-slate-900 text-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 min-w-0">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                <span className="font-medium text-white truncate">
                  {GOOGLE_PLACE_INFO.name} · Col. Guerrero, Irapuato, Gto.
                </span>
              </div>
              <a
                href={GOOGLE_PLACE_INFO.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-300 hover:text-white hover:underline shrink-0"
              >
                Ampliar en Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] bg-slate-100">
              <iframe
                title={`Mapa de Google Maps — ${GOOGLE_PLACE_INFO.name}, Irapuato, Guanajuato`}
                src={GOOGLE_PLACE_INFO.embedUrl}
                className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] border-0 block"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="px-5 py-2.5 bg-[#FAF9F6] border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600">
              <span>
                La tarjeta superior izquierda del mapa muestra en vivo la ficha oficial, ruta y valoraciones de Google Maps.
              </span>
              <span className="font-mono tabular-nums text-slate-500">
                {GOOGLE_PLACE_INFO.coordinates.lat.toFixed(4)}° N,{' '}
                {Math.abs(GOOGLE_PLACE_INFO.coordinates.lng).toFixed(4)}° O
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
