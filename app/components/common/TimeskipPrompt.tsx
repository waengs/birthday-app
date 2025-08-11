import React from 'react';

interface TimeskipPromptProps {
  currentYear: number;
  nextYear: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export const TimeskipPrompt: React.FC<TimeskipPromptProps> = ({ 
  currentYear, 
  nextYear, 
  onConfirm, 
  onCancel 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center">
          <div className="text-5xl mb-4">⏰</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Time Skip</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-gray-700 text-lg">
              Do you want to skip from <span className="font-bold">{currentYear}</span> to <span className="font-bold">{nextYear}</span>?
            </p>
            <p className="text-gray-600 text-sm mt-2">
              You'll discover new memories and experiences...
            </p>
          </div>
          
          <div className="flex space-x-4 justify-center">
            <button
              onClick={onConfirm}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Yes, Skip Time
            </button>
            
            <button
              onClick={onCancel}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Stay Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 