import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 lg:bottom-5 left-4 right-4 sm:right-auto z-50 flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-medium text-white shadow-lg border border-slate-700"
    >
      <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
      <span>Sin conexión · Mostrando contenido clínico en caché</span>
    </div>
  );
}
