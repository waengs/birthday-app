import React, { useState, useEffect } from 'react';

interface WallScrollProps {
  onComplete: () => void;
}

export const WallScroll: React.FC<WallScrollProps> = ({ onComplete }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [allPhotosShown, setAllPhotosShown] = useState(false);

  const photos = [
    { src: '/photo1.JPG', title: 'Happy Birthday', year: '2025', alt: 'Birthday Photo' },
    { src: '/photo2.JPG', title: 'Promise Rings', year: '2027', alt: 'Promise Rings Photo' },
    { src: '/photo3.PNG', title: 'Graduation', year: '2028', alt: 'Graduation Photo' },
    { src: '/photo4.JPG', title: 'Wedding', year: '2030', alt: 'Wedding Photo' },
    { src: '/photo5.PNG', title: 'Beach Vacay', year: '2040', alt: 'Beach Vacay Photo' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhotoIndex < photos.length - 1) {
        setCurrentPhotoIndex((prev) => prev + 1);
      } else {
        setAllPhotosShown(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentPhotoIndex, photos.length]);

  const handleProceedToFinal = () => setShowFinalMessage(true);
  const handleContinueToPostIt = () => onComplete();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 flex flex-col items-center justify-center p-8">
      
      {/* Photo wall */}
      <div className="grid grid-cols-5 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative transition-all duration-1000 ${
              index === currentPhotoIndex
                ? 'scale-110 z-10'
                : index < currentPhotoIndex
                ? 'scale-90 opacity-60'
                : 'scale-75 opacity-30'
            }`}
          >
            <div className="bg-white rounded-lg shadow-lg p-4 text-center border-4 border-gray-200">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto max-h-80 object-contain rounded-lg mb-2"
              />
              <div className="text-sm font-semibold text-gray-800">{photo.title}</div>
              <div className="text-xs text-gray-500">{photo.year}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="mt-6 flex space-x-2">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index <= currentPhotoIndex ? 'bg-pink-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Proceed to final message button */}
      {allPhotosShown && !showFinalMessage && (
        <button
          onClick={handleProceedToFinal}
          className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
        >
          Continue
        </button>
      )}

      {/* Final message overlay */}
      {showFinalMessage && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white rounded-lg p-8 max-w-md text-center">
            <div className="text-6xl mb-4">💖</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              To my love, 
              Vickelsteins August Santoso
            </h2>
            <p className="text-gray-600 mb-6">
              I love and adore you so so much. Here's to many more years of love and laughter!
            </p>
            <button
              onClick={handleContinueToPostIt}
              className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
