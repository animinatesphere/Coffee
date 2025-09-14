import React, { useState, useEffect } from 'react';

const SectionNavigationDots = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const sections = [
    { id: 'experience', target: '#hero', label: 'Experience' },
    { id: 'story', target: '#story', label: 'Story' },
    { id: 'coffee', target: '#coffee', label: 'Coffee' },
    { id: 'subscribe', target: '#subscribe', label: 'Subscribe' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections?.map(section => ({
        id: section?.id,
        element: document.querySelector(section?.target)
      }));

      const currentSection = sectionElements?.find(section => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= window.innerHeight / 2 && rect?.bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
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

  const scrollToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-80 hidden md:flex flex-col space-y-4">
      {sections?.map((section) => (
        <div key={section?.id} className="relative group">
          <button
            onClick={() => scrollToSection(section?.target)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
              activeSection === section?.id
                ? 'bg-primary border-primary shadow-coffee-cta'
                : 'bg-transparent border-muted-foreground hover:border-primary'
            }`}
            aria-label={`Navigate to ${section?.label}`}
          />
          
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-inter whitespace-nowrap shadow-coffee-card">
              {section?.label}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-foreground" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionNavigationDots;