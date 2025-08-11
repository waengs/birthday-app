import React, { useState } from 'react';
import { ThingPopup } from '../common/ThingPopup';
import { MessageModal } from '../common/MessageModal';

interface Scene2040Props {
  onTimeskip: () => void;
  onGoBack?: () => void;
}

export const Scene2040: React.FC<Scene2040Props> = ({ onTimeskip, onGoBack }) => {
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
      {/* 2040bg - Background image */}
             <img 
         src="2040bg.PNG" 
         alt="2040 Background" 
         className="absolute inset-0 w-full h-full object-cover"
       />
      
      {/* 2040laptop - Laptop image */}
      <div className="absolute top-[34%] left-[27%] transform -translate-x-1/2 z-20">
                 <img 
           src="2040laptop.PNG" 
           alt="2040 Laptop" 
           className="w-80 scale-230 cursor-pointer transform hover:scale-235 transition-transform duration-200"
          onClick={() => {
            console.log('Laptop clicked!');
            setShowMessage(true);
          }}
        />
      </div>

      {/* 2040cal - Calendar image */}
      <div className="absolute top-[14.5%] right-[15%] z-20">
                 <img 
           src="2040cal.PNG" 
           alt="2040 Calendar" 
           className="w-40 scale-220 cursor-pointer transform hover:scale-225 transition-transform duration-200"
          onClick={() => {
            console.log('Calendar clicked!');
            handleCalendarClick();
          }}
        />
      </div>

      {/* 2040keyboard - Keyboard image */}
      <div className="absolute bottom-[5%] left-[28%] transform -translate-x-1/2 z-20">
                 <img 
           src="2040keyboard.PNG" 
           alt="2040 Keyboard" 
           className="w-96 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Keyboard clicked!');
            setShowKeyboard(true);
          }}
        />
      </div>

      {/* 2040mouse - Mouse image */}
      <div className="absolute bottom-[5%] left-[59%] z-20">
                 <img 
           src="2040mouse.PNG" 
           alt="2040 Mouse" 
           className="w-24 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Mouse clicked!');
            setShowMouse(true);
          }}
        />
      </div>

      {/* 2040photo - Photo image */}
      <div className="absolute bottom-[4%] left-[80%] z-20">
                 <img 
           src="2040photo.PNG" 
           alt="2040 Photo" 
           className="w-48 scale-140 cursor-pointer transform hover:scale-145 transition-transform duration-200"
          onClick={() => {
            console.log('Photo clicked!');
            setShowPhoto(true);
          }}
        />
      </div>

      {/* 2040window - Window image */}
      <div className="absolute bottom-[64.9%] right-[70%] z-10">
                 <img 
           src="2040window.PNG" 
           alt="2040 Window" 
           className="w-64 scale-400 cursor-pointer transform hover:scale-405 transition-transform duration-200"
          onClick={() => {
            console.log('Window clicked!');
            setShowWindow(true);
          }}
        />
      </div>

      {/* 2040skip - Timeskip prompt modal */}
      {showTimeskipPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
                         <img 
               src="2040skip.PNG" 
               alt="2040 Skip Prompt" 
               className="w-screen h-screen object-contain"
             />
            <div className="absolute top-[10%] right-[10%]">
              <div className="flex space-x-4">
                {onGoBack && (
                  <button
                    onClick={onGoBack}
                    className="px-6 py-3 bg-gradient-to-r from-pink-300 to-rose-400 text-white font-semibold rounded-full hover:from-pink-400 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                    Back to 2030
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
                  Proceed?
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message modal */}
      {showMessage && (
        <MessageModal
          message="Wahh ini ceritaanya kita udaa tuaa, I don't know what life has in store for us jd ini kita sm kucing-kucing kita saja.
          I'm happy to have the chance to get to know such an amazing person such as yourself. Thankyou, mylovee.
          I know life will be okay when I have you with me."
          title="A Message from 2040"
          onClose={handleMessageClose}
        />
      )}

      {/* 2040keyboard - Keyboard popup */}
      {showKeyboard && (
        <ThingPopup
          title="Keyboard"
          description="hehehe hopefully kucinggnya ndaa banyakk ganggu andaa pas lagii mainn."
          emoji="⌨️"
          image="2040keyboard.PNG"
          onClose={() => setShowKeyboard(false)}
        />
      )}

      {/* 2040mouse - Mouse popup */}
      {showMouse && (
        <ThingPopup
          title="Mouse"
          description="Wah sayaangkuu, mouseenyaa dimakann kuciing."
          emoji="🖱️"
          image="2040mouse.PNG"
          onClose={() => setShowMouse(false)}
        />
      )}

      {/* 2040photo - Photo popup */}
      {showPhoto && (
        <ThingPopup
          title="Growing Together"
          description="This us at the beach, I don't know why it's a beach again, 
          Jkt doesn't even have a good beach, jd mungkin ini pas liburan gt, good beach, good vibes, even better company."
          emoji="📸"
          image="2040photo.PNG"
          onClose={() => setShowPhoto(false)}
        />
      )}

      {/* 2040window - Window popup */}
      {showWindow && (
        <ThingPopup
          title="Our Window View"
          description="Ini ceritaanya sudaa dirumahh and this window overlooks our backyardd, ada hammock, we're successful like that reall."
          emoji="🪟"
          image="2040window.PNG"
          onClose={() => setShowWindow(false)}
        />
      )}
    </div>
  );
}; 
