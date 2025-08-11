import React, { useState } from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleEnvelopeClick = () => {
    setEnvelopeOpened(true);
  };

  const handleMessageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBackgroundClick = () => {
    setEnvelopeOpened(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback SVG envelope (larger)
  const envelopeSvg = (
    <svg 
      width="384" 
      height="256" 
      viewBox="0 0 100 60" 
      className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
      onClick={handleEnvelopeClick}
    >
      <rect x="5" y="15" width="90" height="40" fill="white" stroke="#e5e7eb" strokeWidth="2" rx="3"/>
      <polygon points="5,15 50,35 95,15" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
      <rect x="10" y="20" width="80" height="30" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-pink-200 relative overflow-hidden">
      {!envelopeOpened ? (
        /* Envelope - Clean white background like the image */
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {!imageError ? (
            <img 
              src="envelope.png"
              alt="Envelope"
              className="w-96 h-64 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={handleEnvelopeClick}
              onError={handleImageError}
            />
          ) : (
            envelopeSvg
          )}
        </div>
      ) : (
        /* Message and Start Button */
        <div 
          className="absolute inset-0 flex items-center justify-center bg-pink-200"
          onClick={handleBackgroundClick}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md shadow-2xl border-2 border-gray-200"
            onClick={handleMessageClick}
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">💌</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ahemm Ahemm</h2>
            </div>
            
            <div className="text-gray-700 leading-relaxed mb-6 text-sm">
              Haaloooww sayaangkuuu, so this took so much longer than expected, but here it is hehe. 
              I really wish I could be there with you to celebrate your birthday in real life, 
              butt I'm all the wayy heree in Jakarta. But it's okaaay.
              This is just a little something that I made for you! 
              I miss youu lotss! I hope you like it my lovee &lt;3
            </div>
            
            <div className="text-center">
              <button
                onClick={onStart}
                className="px-8 py-3 bg-gradient-to-r from-pink-200 to-pink-300 text-pink-900 font-semibold rounded-lg hover:from-pink-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let's Goo~! →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 