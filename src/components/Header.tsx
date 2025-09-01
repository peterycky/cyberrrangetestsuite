import React from 'react';
import { BellIcon, UserIcon, DatabaseIcon, ZapIcon } from 'lucide-react';
interface HeaderProps {
  level: number;
  reputation: number;
}
export const Header: React.FC<HeaderProps> = ({
  level,
  reputation
}) => {
  return <header className="w-full bg-[#0c0c20] border-b border-cyan-500/30 p-2 flex flex-col sm:flex-row justify-between relative">
      {/* Yellow highlight line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-cyan-400">{level}</span>
          <span className="text-sm uppercase tracking-wider">LEVEL</span>
        </div>
        <div className="h-4 w-px bg-pink-500/50"></div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-cyan-400">{reputation}</span>
          <span className="text-sm uppercase tracking-wider">REPUTATION</span>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <ZapIcon size={16} className="text-yellow-400" />
          <span className="text-sm text-yellow-400 font-bold">ONLINE</span>
        </div>
      </div>
      <nav className="flex items-center gap-4 mt-2 sm:mt-0">
        <button className="px-3 py-1 uppercase text-xs tracking-wider hover:bg-yellow-500/20 transition-colors">
          Tasks
        </button>
        <button className="px-3 py-1 uppercase text-xs tracking-wider hover:bg-cyan-500/20 transition-colors">
          Inventory
        </button>
        <button className="px-3 py-1 uppercase text-xs tracking-wider hover:bg-pink-500/20 transition-colors">
          Map
        </button>
        <button className="px-3 py-1 uppercase text-xs tracking-wider bg-cyan-500/20 text-cyan-300">
          Terminal
        </button>
      </nav>
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex items-center gap-1">
          <BellIcon size={16} className="text-pink-400" />
          <span className="text-sm">170/345</span>
        </div>
        <div className="flex items-center gap-1">
          <DatabaseIcon size={16} className="text-yellow-400" />
          <span className="text-sm text-yellow-300">9759</span>
        </div>
        <div className="flex items-center gap-1">
          <UserIcon size={16} className="text-cyan-400" />
        </div>
      </div>
    </header>;
};