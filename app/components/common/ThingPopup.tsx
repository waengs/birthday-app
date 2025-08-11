import React from 'react';

interface ThingPopupProps {
  title: string;
  description: string;
  emoji: string;
  onClose: () => void;
  image?: string;
}

export const ThingPopup: React.FC<ThingPopupProps> = ({ 
  title, 
  description, 
  emoji, 
  onClose,
  image
}) => {
  return (
    <div className="fixed inset-0 bg-pink-100/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-pink-200">
        <div className="text-center">
          {image && (
            <div className="mb-4">
              <img 
                src={image} 
                alt={title}
                className="w-full max-w-xs mx-auto rounded-xl"
              />
            </div>
          )}
          <h3 className="text-2xl font-bold text-rose-600 mb-3">{title}</h3>
          
          <div className="bg-white/80 rounded-xl p-5 mb-6 shadow-inner border border-pink-200">
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-pink-300 to-pink-400 text-white font-semibold rounded-full hover:from-pink-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
