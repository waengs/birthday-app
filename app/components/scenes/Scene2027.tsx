import React, { useState } from 'react';
import { ThingPopup } from '../common/ThingPopup';
import { MessageModal } from '../common/MessageModal';

interface Scene2027Props {
  onTimeskip: () => void;
  onGoBack?: () => void;
}

export const Scene2027: React.FC<Scene2027Props> = ({ onTimeskip, onGoBack }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showTimeskipPrompt, setShowTimeskipPrompt] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [showMouse, setShowMouse] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showTablet, setShowTablet] = useState(false);
  

  const handleCalendarClick = () => {
    setShowTimeskipPrompt(true);
  };

  const handleMessageClose = () => {
    setShowMessage(false);
  };

  const handleTimeskipConfirm = () => {
    setShowTimeskipPrompt(false);
    onTimeskip();
  };

  const handleTimeskipCancel = () => {
    setShowTimeskipPrompt(false);
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* 2027bg - Background image */}
      <img 
        src="2027bg.PNG" 
        alt="2027 Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* 2027laptop - Laptop image */}
      <div className="absolute top-[27%] left-1/4 transform -translate-x-1/2 z-20">
        <img 
          src="2027laptop.PNG" 
          alt="2027 Laptop" 
          className="w-80 scale-215 cursor-pointer transform hover:scale-220 transition-transform duration-200"
          onClick={() => {
            console.log('Laptop clicked!');
            setShowMessage(true);
          }}
        />
      </div>

      {/* 2027cal - Calendar image */}
      <div className="absolute bottom-[30%] right-[32%] z-20">
        <img 
          src="2027cal.PNG" 
          alt="2027 Calendar" 
          className="w-40 scale-260 cursor-pointer transform hover:scale-265 transition-transform duration-200"
          onClick={() => {
            console.log('Calendar clicked!');
            handleCalendarClick();
          }}
        />
      </div>

      {/* 2027keyboard - Keyboard image */}
      <div className="absolute bottom-[5%] left-[28%] transform -translate-x-1/2 z-20">
        <img 
          src="2027keyboard.PNG" 
          alt="2027 Keyboard" 
          className="w-96 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Keyboard clicked!');
            setShowKeyboard(true);
          }}
        />
      </div>

      {/* 2027mouse - Mouse image */}
      <div className="absolute bottom-[5%] left-[55%] z-20">
        <img 
          src="2027mouse.PNG" 
          alt="2027 Mouse" 
          className="w-24 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Mouse clicked!');
            setShowMouse(true);
          }}
        />
      </div>

      {/* 2027photo - Photo image */}
      <div className="absolute bottom-[31%] left-[83%] z-20">
        <img 
          src="2027photo.PNG" 
          alt="2027 Photo" 
          className="w-48 scale-120 cursor-pointer transform hover:scale-125 transition-transform duration-200"
          onClick={() => {
            console.log('Photo clicked!');
            setShowPhoto(true);
          }}
        />
      </div>

      {/* 2027tab - Tablet image */}
      <div className="absolute bottom-[8%] right-[7%] z-20">
        <img 
          src="2027tab.PNG" 
          alt="2027 Tablet" 
          className="w-36 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Tablet clicked!');
            setShowTablet(true);
          }}
        />
      </div>

      {/* 2027window - Window image */}
      <div className="absolute top-[20%] right-[15%] z-10">
        <img 
          src="2027window.PNG" 
          alt="2027 Window" 
          className="w-64 scale-180 cursor-pointer transform hover:scale-185 transition-transform duration-200"
          onClick={() => {
            console.log('Window clicked!');
            setShowWindow(true);
          }}
        />
      </div>

      {/* 2027skip - Timeskip prompt modal */}
      {showTimeskipPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <img 
              src="2027skip.PNG" 
              alt="2027 Skip Prompt" 
              className="w-screen h-screen object-contain"
            />
            <div className="absolute top-[10%] right-[10%]">
            <div className="flex space-x-4">
              {onGoBack && (
                <button
                  onClick={onGoBack}
                  className="px-6 py-3 bg-gradient-to-r from-pink-300 to-rose-400 text-white font-semibold rounded-full hover:from-pink-400 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Back to 2025
                </button>
              )}
              <button
                onClick={handleTimeskipCancel}
                className="px-6 py-3 bg-gradient-to-r from-rose-200 to-pink-200 text-pink-900 font-semibold rounded-full hover:from-rose-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Stay Here
              </button>
              <button
                onClick={handleTimeskipConfirm}
                className="px-6 py-3 bg-gradient-to-r from-pink-300 to-rose-400 text-white font-semibold rounded-full hover:from-pink-400 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Timeskip?
              </button>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Message modal */}
      {showMessage && (
        <MessageModal
          message="Ini wallpapernya ceritanya kita abis beach date real, hehe, 2027, you're already gonna be in Aussie,
          I'll be here waiting for youu. The distance won't change how much I love you. 3 hour time diffrence, 
          sy bangun pagi biar bisa ngomong sm cowo sy rill (kerja jg bkl bangun pagi, so i really will)."
          title="A Message from 2027"
          onClose={handleMessageClose}
        />
      )}

      {/* 2027keyboard - Keyboard popup */}
      {showKeyboard && (
        <ThingPopup
          title="Keyboard"
          description="Keyboardnyaa dibawaa ke aussiee yaa caayangg, biar jd pro gamerz."
          emoji="⌨️"
          image="2027keyboard.PNG"
          onClose={() => setShowKeyboard(false)}
        />
      )}

      {/* 2027mouse - Mouse popup */}
      {showMouse && (
        <ThingPopup
          title="Mouse"
          description="razer mouse is good, dibawaa jugaa cayangg."
          emoji="🖱️"
          image="2027mouse.PNG"
          onClose={() => setShowMouse(false)}
        />
      )}

      {/* 2027photo - Photo popup */}
      {showPhoto && (
        <ThingPopup
          title="Our Promise Rings"
          description="Sebelum ke aussie, kita bakal beli promise rings dlu kan yaa. Is a symbol, a commitment, that I will always stay loyal.
          I will love youu and onlyy youu!"
          emoji="📸"
          image="2027photo.PNG"
          onClose={() => setShowPhoto(false)}
        />
      )}

      {/* 2027tab - Tablet popup */}
      {showTablet && (
        <ThingPopup
          title="Tablet (SAMSUNG)"
          description="Real getting use out of the tablet, my bb be vv productive."
          emoji="📱"
          image="2027tab.PNG"
          onClose={() => setShowTablet(false)}
        />
      )}

      {/* 2027window - Window popup */}
      {showWindow && (
        <ThingPopup
          title="Aussie window"
          description="Ini gambar university wolonggong si cayaang, 
          I don't know where you'll end up going but I know that wherever you go, you'll go do some amazing things."
          emoji="🪟"
          image="2027window.PNG"
          onClose={() => setShowWindow(false)}
        />
      )}
    </div>
  );
}; 