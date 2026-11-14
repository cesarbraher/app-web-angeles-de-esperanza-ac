import { Download, ExternalLink, Share, Smartphone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'compact' | 'full';
}

export function PWAInstallButton({ variant = 'compact' }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('/');

  useEffect(() => {
    try {
      setIsInIframe(window.self !== window.top);
      setCurrentUrl(window.location.href);
    } catch {
      setIsInIframe(true);
    }
  }, []);

  if (isInstalled) {
    return null;
  }

  const handleAction = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (!accepted) return;
      return;
    }
    setShowGuide(true);
  };

  return (
    <>
      {variant === 'full' ? (
        <button
          type="button"
          onClick={handleAction}
          className="w-full min-h-[48px] flex items-center justify-center gap-2.5 rounded-xl bg-[#1D4ED8] px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 active:scale-[0.98] transition-all cursor-pointer"
        >
          <Download className="w-4 h-4 shrink-0" />
          <span>{isIOS ? 'Instalar en iPhone / iPad' : 'Instalar App en Android'}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleAction}
          aria-label="Instalar aplicación en Android"
          className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 text-xs font-semibold hover:border-[#1D4ED8] hover:text-[#1D4ED8] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          <Download className="w-3.5 h-3.5 shrink-0 text-[#1D4ED8]" />
          <span className="hidden sm:inline">Instalar App</span>
          <span className="sm:hidden">App</span>
        </button>
      )}

      {showGuide && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-install-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4"
        >
          <div className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-white p-6 pb-8 sm:pb-6 shadow-xl border border-slate-200 space-y-5">
            <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto sm:hidden" />

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/pwa-192x192.png"
                  alt="Ícono de app Ángeles de Esperanza"
                  className="w-12 h-12 rounded-xl border border-slate-200 shrink-0"
                />
                <div>
                  <h3
                    id="pwa-install-title"
                    className="font-display text-xl font-bold text-slate-900"
                  >
                    {isIOS ? 'Instalar en iPhone / iPad' : 'Instalar App Android'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ángeles de Esperanza, A.C. · Acceso directo sin navegador
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowGuide(false)}
                aria-label="Cerrar ventana"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isIOS ? (
              <ol className="space-y-3 text-sm text-slate-700 bg-[#FAF9F6] border border-slate-200 rounded-xl p-4">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#1D4ED8] mt-0.5">01.</span>
                  <span>
                    Toca el botón <strong className="font-semibold text-slate-900">Compartir</strong>{' '}
                    <Share className="inline w-3.5 h-3.5 text-[#1D4ED8]" /> en la barra inferior de Safari.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#1D4ED8] mt-0.5">02.</span>
                  <span>
                    Desliza y selecciona{' '}
                    <strong className="font-semibold text-slate-900">Agregar a pantalla de inicio</strong>.
                  </span>
                </li>
              </ol>
            ) : (
              <ol className="space-y-3 text-sm text-slate-700 bg-[#FAF9F6] border border-slate-200 rounded-xl p-4">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#1D4ED8] mt-0.5">01.</span>
                  <span>
                    Abre esta aplicación en{' '}
                    <strong className="font-semibold text-slate-900">Google Chrome</strong> en tu teléfono Android.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#1D4ED8] mt-0.5">02.</span>
                  <span>
                    Toca el menú <strong className="font-semibold text-slate-900">⋮</strong> en la esquina superior derecha.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#1D4ED8] mt-0.5">03.</span>
                  <span>
                    Selecciona{' '}
                    <strong className="font-semibold text-slate-900">Instalar aplicación</strong> o{' '}
                    <strong className="font-semibold text-slate-900">Agregar a la pantalla principal</strong>.
                  </span>
                </li>
              </ol>
            )}

            <div className="space-y-2.5">
              {isInIframe && (
                <a
                  href={currentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Abrir fuera de vista previa para instalar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
