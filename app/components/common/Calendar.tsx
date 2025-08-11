import React from 'react';

interface CalendarProps {
  onTimeskipClick: () => void;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({ onTimeskipClick, className = '' }) => {
  return (
    <div 
      className={`w-20 h-28 bg-white border-2 border-gray-300 rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-200 shadow-md ${className}`}
      onClick={onTimeskipClick}
    >
      {/* Calendar header */}
      <div className="w-full h-6 bg-red-500 rounded-t-sm flex items-center justify-center">
        <span className="text-white text-xs font-bold">CALENDAR</span>
      </div>
      
      {/* Calendar body */}
      <div className="p-2 h-20 flex flex-col justify-between">
        {/* Month display */}
        <div className="text-center">
          <div className="text-lg font-bold text-gray-800">DEC</div>
          <div className="text-2xl font-bold text-red-600">25</div>
        </div>
        
        {/* Decorative flowers */}
        <div className="flex justify-center items-end space-x-1">
          <div className="text-lg">🌼</div>
          <div className="text-lg">🌼</div>
        </div>
      </div>
    </div>
  );
}; 