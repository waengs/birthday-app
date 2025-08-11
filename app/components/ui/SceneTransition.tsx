import React, { useState, useEffect } from 'react';

interface SceneTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  onTransitionComplete?: () => void;
  type?: 'fade' | 'slide' | 'zoom';
  duration?: number;
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({ 
  children, 
  isVisible, 
  onTransitionComplete,
  type = 'fade',
  duration = 500
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        onTransitionComplete?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onTransitionComplete]);

  const getTransitionClasses = () => {
    switch (type) {
      case 'fade':
        return isVisible 
          ? 'opacity-100 transition-opacity duration-500' 
          : 'opacity-0 transition-opacity duration-500';
      case 'slide':
        return isVisible 
          ? 'translate-x-0 transition-transform duration-500' 
          : 'translate-x-full transition-transform duration-500';
      case 'zoom':
        return isVisible 
          ? 'scale-100 transition-transform duration-500' 
          : 'scale-0 transition-transform duration-500';
      default:
        return isVisible 
          ? 'opacity-100 transition-opacity duration-500' 
          : 'opacity-0 transition-opacity duration-500';
    }
  };

  return (
    <div className={`${getTransitionClasses()} ${isTransitioning ? 'pointer-events-none' : ''}`}>
      {children}
    </div>
  );
}; 