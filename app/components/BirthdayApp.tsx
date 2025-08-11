import React, { useState } from 'react';
import { WelcomeScreen } from './common/WelcomeScreen';
import { Scene2025 } from './scenes/Scene2025';
import { Scene2027 } from './scenes/Scene2027';
import { Scene2030 } from './scenes/Scene2030';
import { Scene2040 } from './scenes/Scene2040';
import { WallScroll } from './scrollSequence/WallScroll';
import { PostItMessage } from './scrollSequence/PostItMessage';


type Scene = 'welcome' | '2025' | '2027' | '2030' | '2040' | 'wallScroll' | 'finalMessage';

export const BirthdayApp: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<Scene>('welcome');
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [showPuzzleComplete, setShowPuzzleComplete] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleStart = () => {
    setCurrentScene('2025');
  };

  const handleTimeskip = () => {
    switch (currentScene) {
      case '2025':
        setCurrentScene('2027');
        break;
      case '2027':
        setCurrentScene('2030');
        break;
      case '2030':
        setCurrentScene('2040');
        break;
      case '2040':
        setCurrentScene('wallScroll');
        break;
      default:
        break;
    }
  };

  const handleGoBack = () => {
    switch (currentScene) {
      case '2027':
        setCurrentScene('2025');
        break;
      case '2030':
        setCurrentScene('2027');
        break;
      case '2040':
        setCurrentScene('2030');
        break;
      default:
        break;
    }
  };

  const handleWallScrollComplete = () => {
    setShowFinalMessage(true);
  };

  const handleFinalMessageClose = () => {
    setShowFinalMessage(false);
    setCurrentScene('welcome');
  };


  const renderScene = () => {
    switch (currentScene) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case '2025':
        return <Scene2025 onTimeskip={handleTimeskip} />;
      case '2027':
        return <Scene2027 onTimeskip={handleTimeskip} onGoBack={handleGoBack} />;
      case '2030':
        return <Scene2030 onTimeskip={handleTimeskip} onGoBack={handleGoBack} />;
      case '2040':
        return <Scene2040 onTimeskip={handleTimeskip} onGoBack={handleGoBack} />;
      case 'wallScroll':
        return <WallScroll onComplete={handleWallScrollComplete} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderScene()}
      
      {showFinalMessage && (
        <PostItMessage onClose={handleFinalMessageClose} />
      )}
    </div>
  );
}; 