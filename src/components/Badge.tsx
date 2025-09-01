import React from 'react';
export const Badge: React.FC = () => {
  return <div className="flex items-center mt-2">
      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/20">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center text-xs font-bold text-white">
          ✓
        </div>
      </div>
    </div>;
};