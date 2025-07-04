import { Suspense, useEffect, useState } from 'react';

const DelayedSuspense = ({ children, fallback, delay = 1000 }) => {
  const [showContent, setShowContent] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      requestAnimationFrame(() => setFadeIn(true));
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Suspense fallback={fallback}>
      {!showContent
        ? fallback
        : <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      }
    </Suspense>
  );
};

export default DelayedSuspense;
