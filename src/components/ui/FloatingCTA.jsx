import React, { useState, useEffect } from 'react';

import Button from './Button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroBottom = heroSection?.getBoundingClientRect()?.bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll);
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const throttle = (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func?.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func?.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  const scrollToSubscribe = () => {
    const subscribeSection = document.querySelector('#subscribe');
    if (subscribeSection) {
      const headerOffset = 80;
      const elementPosition = subscribeSection?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-90 md:bottom-8 md:right-8">
      <div className="relative">
        <Button
          variant="default"
          size="lg"
          onClick={scrollToSubscribe}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className={`shadow-coffee-cta hover:shadow-coffee-hover transition-all duration-300 ${
            isExpanded ? 'pr-6' : ''
          }`}
          iconName="Coffee"
          iconPosition="left"
          iconSize={20}
        >
          <span className={`transition-all duration-300 ${
            isExpanded ? 'opacity-100 max-w-xs ml-2' : 'opacity-0 max-w-0 overflow-hidden'
          }`}>
            Subscribe Now
          </span>
          <span className={`${isExpanded ? 'hidden' : 'block'} md:hidden`}>
            Subscribe
          </span>
        </Button>

        {isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-background text-sm font-inter rounded-lg shadow-coffee-card whitespace-nowrap">
            Start Your Coffee Journey
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCTA;