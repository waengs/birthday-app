import React, { useState } from 'react';
import { ThingPopup } from '../common/ThingPopup';
import { MessageModal } from '../common/MessageModal';

interface Scene2025Props {
  onTimeskip: () => void;
}

export const Scene2025: React.FC<Scene2025Props> = ({ onTimeskip }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showTimeskipPrompt, setShowTimeskipPrompt] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
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
      {/* 2025bg - Background image */}
      <img 
        src="2025bg.png" 
        alt="2025 Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* 2025laptop - Laptop image */}
      <div className="absolute top-[27%] left-1/4 transform -translate-x-1/2 z-20">
        <img 
          src="2025laptop.png" 
          alt="2025 Laptop" 
          className="w-80 scale-215 cursor-pointer transform hover:scale-220 transition-transform duration-200"
          onClick={() => {
            console.log('Laptop clicked!');
            setShowMessage(true);
          }}
        />
      </div>

      {/* 2025cal - Calendar image */}
      <div className="absolute bottom-[30%] right-[32%] z-20">
        <img 
          src="2025cal.png" 
          alt="2025 Calendar" 
          className="w-40 scale-260 cursor-pointer transform hover:scale-265 transition-transform duration-200"
          onClick={() => {
            console.log('Calendar clicked!');
            handleCalendarClick();
          }}
        />
      </div>

      {/* 2025keyboard - Keyboard image */}
      <div className="absolute bottom-[5%] left-[28%] transform -translate-x-1/2 z-20">
        <img 
          src="2025keyboard.png" 
          alt="2025 Keyboard" 
          className="w-96 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Keyboard clicked!');
            setShowKeyboard(true);
          }}
        />
      </div>

      {/* 2025mouse - Mouse image */}
      <div className="absolute bottom-[5%] left-[55%] z-20">
        <img 
          src="2025mouse.png" 
          alt="2025 Mouse" 
          className="w-24 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Mouse clicked!');
            setShowMouse(true);
          }}
        />
      </div>

      {/* 2025photo - Photo image */}
      <div className="absolute top-[13%] left-[60%] z-20">
        <img 
          src="2025photo.png" 
          alt="2025 Photo" 
          className="w-48 scale-170 cursor-pointer transform hover:scale-175 transition-transform duration-200"
          onClick={() => {
            console.log('Photo clicked!');
            setShowPhoto(true);
          }}
        />
      </div>

      {/* 2025tab - Tablet image */}
      <div className="absolute bottom-[10%] right-[7%] z-20">
        <img 
          src="2025tab.png" 
          alt="2025 Tablet" 
          className="w-36 scale-200 cursor-pointer transform hover:scale-205 transition-transform duration-200"
          onClick={() => {
            console.log('Tablet clicked!');
            setShowTablet(true);
          }}
        />
      </div>

      {/* 2025skip - Timeskip prompt modal */}
      {showTimeskipPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <img 
              src="2025skip.png" 
              alt="2025 Skip Prompt" 
              className="w-screen h-screen object-contain"
            />
            <div className="absolute top-[10%] right-[10%]">
              <div className="flex space-x-4">
              <button
                onClick={handleTimeskipCancel}
                className="px-6 py-3 bg-gradient-to-r from-rose-200 to-pink-200 text-pink-900 font-semibold rounded-full hover:from-rose-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Stay Here
              </button>
              <button
                onClick={handleTimeskipConfirm}
                className="px-6 py-3 bg-gradient-to-r from-pink-300 to-rose-400 text-white font-semibold rounded-full hover:from-pink-400 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-md ml-4"
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
          message="I wish you the happiest of birthdays my lovee. Hopefully today (and every day after this) will be filled
          with happiness and joy!
          I can't believe it's just been over year since we met each other, I feel like I've known you for much longer.
          I can't imagine a life without you, nor do I want to. Let me stay by your side always. 
          Thankyou for being you. 
          "
          title="A Message from 2025"
          onClose={handleMessageClose}
        />
      )}

      {/* 2025keyboard - Keyboard popup */}
      {showKeyboard && (
        <ThingPopup
          title="Keyboard"
          description="This is your keyboard, hehe I got you your keycaps already but I think ur gonna have to wait untill you come back to Jakarta to have them."
          emoji="⌨️"
          image="2025keyboard.png"
          onClose={() => setShowKeyboard(false)}
        />
      )}

      {/* 2025mouse - Mouse popup */}
      {showMouse && (
        <ThingPopup
          title="Mouse"
          description="Okay so this one I probably got it wrong, I don't remember which one you decided to get but look razer wireless mouse REALL."
          emoji="🖱️"
          image="2025mouse.png"
          onClose={() => setShowMouse(false)}
        />
      )}

      {/* 2025photo - Photo popup */}
      {showPhoto && (
        <ThingPopup
          title="This is us celebrating"
          description="Even when we're far apart, I want you to know that I'll always be there with you. 
          I'll always love spending time with you my lovee. And I really do love youu so muchh."
          emoji="📸"
          image="2025photo.png"
          onClose={() => setShowPhoto(false)}
        />
      )}

      {/* 2025tab - Tablet popup */}
      {showTablet && (
        <ThingPopup
          title="Tab (SAMSUNG)"
          description="Hehe, whatever tab you end up getting, I know you'll put it to good use, ayoo mabarr genshinn cintakuuw."
          emoji="📱"
          image="2025tab.png"
          onClose={() => setShowTablet(false)}
        />
      )}
    </div>
  );
}; 