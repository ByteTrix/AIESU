
import React from 'react';
import { Zap } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse-glow"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-xl tracking-tight">AIESU</span>
        <span className="text-gray-400 text-xs">Powered by ByteTrix</span>
      </div>
    </div>
  );
};
