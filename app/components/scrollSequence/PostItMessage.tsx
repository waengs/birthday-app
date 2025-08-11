import React from 'react';

interface PostItMessageProps {
  onClose: () => void;
}

export const PostItMessage: React.FC<PostItMessageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-pink-200 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-yellow-200 rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl transform rotate-2">
        <div className="text-center">
          <div className="text-6xl mb-4">💝</div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'cursive' }}>
            Again Happy Birthday, mylove!
          </h2>
          
          <div className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'cursive' }}>
            <p className="mb-3">
              I am wishing you all the best, God Bless you. I hope you know just how much you mean to me. 
              You make my world complete. I hope you can rely on me when things get tough, because I truly am here for you.
            </p>
            <p className="mb-3">
              Thank you for being my best friend, my partner, and my everything. Even though times get tough, having you by my side to solve issues is what makes me positive that this will work.
              I can't wait to spend the rest of my life loving you more and more each day.
            </p>
          </div>
          
          <div className="text-sm text-gray-600 mb-4">
            Forever yours,<br />
            With all my heart ❤️<br />
            Cindy Reginia Wang
          </div>
          
          <button
            onClick={onClose}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}; 