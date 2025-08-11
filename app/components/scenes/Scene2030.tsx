import React, { useState } from 'react';
import { ThingPopup } from '../common/ThingPopup';
import { MessageModal } from '../common/MessageModal';

interface Scene2030Props {
  onTimeskip: () => void;
  onGoBack?: () => void;
}

export const Scene2030: React.FC<Scene2030Props> = ({ onTimeskip, onGoBack }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showTimeskipPrompt, setShowTimeskipPrompt] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showMouse, setShowMouse] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showTablet, setShowTablet] = useState(false);
  const [showWindow, setShowWindow] = useState(false);

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
      {/* 2030bg - Background image */}
      <img 
        src="/2030bg.PNG" 
        alt="2030 Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* 2030laptop - Laptop image */}
      <div className="absolute top-[29%] left-1/4 transform -translate-x-1/2 z-20">
        <img 
          src="/2030laptop.PNG" 
          alt="2030 Laptop" 
          className="w-80 scale-215 cursor-pointer transform hover:scale-220 transition-transform duration-200"
          onClick={() => {
            console.log('Laptop clicked!');
            setShowMessage(true);
          }}
        />
      </div>

      {/* 2030cal - Calendar image */}
      <div className="absolute bottom-[30.4%] right-[32%] z-20">
        <img 
          src="/2030cal.PNG" 
          alt="2030 Calendar" 
          className="w-40 scale-260 cursor-pointer transform hover:scale-265 transition-transform duration-200"
          onClick={() => {
            console.log('Calendar clicked!');
            handleCalendarClick();
          }}
        />
      </div>

      {/* 2030keyboard - Keyboard image */}
      <div className="absolute bottom-[5%] left-[28%] transform -translate-x-1/2 z-20">
        <img 
          src="/2030keyboard.PNG" 
          alt="2030 Keyboard" 
          className="w-96 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Keyboard clicked!');
            setShowKeyboard(true);
          }}
        />
      </div>

      {/* 2030mouse - Mouse image */}
      <div className="absolute bottom-[5%] left-[59%] z-20">
        <img 
          src="/2030mouse.PNG" 
          alt="2030 Mouse" 
          className="w-24 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Mouse clicked!');
            setShowMouse(true);
          }}
        />
      </div>

      {/* 2030photo - Photo image */}
      <div className="absolute bottom-[10%] left-[83%] z-20">
        <img 
          src="/2030photo.PNG" 
          alt="2030 Photo" 
          className="w-48 scale-170 cursor-pointer transform hover:scale-175 transition-transform duration-200"
          onClick={() => {
            console.log('Photo clicked!');
            setShowPhoto(true);
          }}
        />
      </div>

      {/* 2030window - Window image */}
      <div className="absolute bottom-[64.79%] right-[41%] z-10">
        <img 
          src="/2030window.PNG" 
          alt="2030 Window" 
          className="w-64 scale-570 cursor-pointer transform hover:scale-575 transition-transform duration-200"
          onClick={() => {
            console.log('Window clicked!');
            setShowWindow(true);
          }}
        />
      </div>

      {/* 2030skip - Timeskip prompt modal */}
      {showTimeskipPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <img 
              src="/2030skip.PNG" 
              alt="2030 Skip Prompt" 
              className="w-screen h-screen object-contain"
            />
            <div className="absolute top-[10%] right-[10%]">
              <div className="flex space-x-4">
                {onGoBack && (
                  <button
                    onClick={onGoBack}
                    className="px-6 py-3 bg-gradient-to-r from-pink-300 to-rose-400 text-white font-semibold rounded-full hover:from-pink-400 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Back to 2027
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
          message="Wah timeskip kita ud nikah aja ya, cepet sekali. heheh, I lovee youu so much. I wanna spend my life with youu.
          Kl nikahh, serumaa we get to spend sooooo muchh timee togetherr, unlimitedd cuddless. We can take our time tapi koo, just being with you is enough."
          title="A Message from 2030"
          onClose={handleMessageClose}
        />
      )}

      {/* 2030keyboard - Keyboard popup */}
      {showKeyboard && (
        <ThingPopup
          title="Keyboard"
          description="By this time ud upgrade ygy keyboardnya with screen and knob, just how my bb likes it, nantii syyy ngassii keycaps yg lain jugaa, hopefully by this time uda bnyk yg lucu lucu yg bisa dipilih."
          emoji="⌨️"
          image="/2030keyboard.PNG"
          onClose={() => setShowKeyboard(false)}
        />
      )}

      {/* 2030mouse - Mouse popup */}
      {showMouse && (
        <ThingPopup
          title="Mouse"
          description="Ini jg kykny uda ganti mouse bru, ioonlnow which one my bb is gonna pick but is gonna be kewl."
          emoji="🖱️"
          image="/2030mouse.PNG"
          onClose={() => setShowMouse(false)}
        />
      )}

      {/* 2030photo - Photo popup */}
      {showPhoto && (
        <ThingPopup
          title="Foto Nikah"
          description="Ciee nikaah. hehe I don't know what I'm gonna end up wearing or what you are gonna  wear, or even where we'll end up marrying,
          ,but I know, I'm gonna be suuuperr happy when I marry you."
          emoji="📸"
          image="/2030photo.PNG"
          onClose={() => setShowPhoto(false)}
        />
      )}

      {/* 2030window - Window popup */}
      {showWindow && (
        <ThingPopup
          title="Apartment view"
          description="Citylights Jakarta cakep, tp cowo saya lebihh cakep tuuw."
          emoji="🪟"
          image="/2030window.PNG"
          onClose={() => setShowWindow(false)}
        />
      )}
    </div>
  );
}; 