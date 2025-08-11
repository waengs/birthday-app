import React from 'react';

interface MessageModalProps {
  message: string;
  title?: string;
  onClose: () => void;
  className?: string;
}

export const MessageModal: React.FC<MessageModalProps> = ({ 
  message, 
  title = "A Special Message", 
  onClose,
  className = ''
}) => {
  return (
    <div className="fixed inset-0 bg-pink-100/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className={`bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl border border-pink-200 ${className}`}>
        <div className="text-center">
          <div className="text-5xl mb-4 animate-bounce">💌</div>
          <h2 className="text-3xl font-bold text-rose-600 mb-4">{title}</h2>
          
          <div className="bg-white/80 rounded-xl p-5 mb-6 shadow-inner border border-pink-200">
            <p className="text-gray-700 leading-relaxed text-lg">
              {message}
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