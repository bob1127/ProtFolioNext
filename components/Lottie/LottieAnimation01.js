// components/LottieAnimation.js
import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from './Animation01.json'; // Updated path

const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        animationData,
        renderer: 'canvas',
        loop: true,
        autoplay: true,
      });

      return () => animation.destroy();
    }
  }, []);

  return <div ref={container} style={{ width: '100%', height: '100%' }} />;
};

export default LottieAnimation;
