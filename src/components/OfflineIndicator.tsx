import React, { useState } from 'react';
import { WifiOff, Wifi, Sparkles, CheckCircle2 } from 'lucide-react';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const [dismissed, setDismissed] = useState(false);

  if (isOnline && !dismissed) return null;

  return (
    <div className="fixed bottom-20 left-4 sm:left-6 z-40 max-w-sm pointer-events-auto animate-in slide-in-from-bottom-4 duration-300">
      <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-medium shadow-xl border backdrop-blur-md transition-all ${
        !isOnline 
          ? 'bg-amber-950/90 border-amber-600/40 text-amber-200' 
          : 'bg-emerald-950/90 border-emerald-600/40 text-emerald-200'
      }`}>
        <div className="relative flex items-center justify-center">
          {!isOnline ? (
            <>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping absolute opacity-75" />
              <WifiOff className="w-4 h-4 text-amber-400 shrink-0 relative" />
            </>
          ) : (
            <Wifi className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
        </div>

        <div className="flex-1">
          <p className="font-semibold text-[11px] leading-tight">
            {!isOnline ? '100% Offline Mode Active' : 'Back Online'}
          </p>
          <p className="text-[10px] opacity-80 leading-tight">
            {!isOnline 
              ? 'All courses, past papers, uploads & AI tutor work offline.'
              : 'Connected to network.'}
          </p>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded hover:bg-slate-800/60"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
