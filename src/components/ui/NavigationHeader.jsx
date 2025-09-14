import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const NavigationHeader = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'experience', label: 'Experience', target: '#hero' },
    { id: 'story', label: 'Story', target: '#story' },
    { id: 'coffee', label: 'Coffee', target: '#coffee' },
    { id: 'subscribe', label: 'Subscribe', target: '#subscribe' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sections = navigationItems?.map(item => ({
        id: item?.id,
        element: document.querySelector(item?.target)
      }));

      const currentSection = sections?.find(section => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-coffee shadow-coffee-card' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Coffee" size={20} color="var(--color-primary-foreground)" />
              </div>
              <span className="font-playfair font-bold text-xl text-foreground">
                Coffee Drop
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <button
                key={item?.id}
                onClick={() => scrollToSection(item?.target)}
                className={`font-inter font-medium text-sm transition-colors duration-250 hover:text-primary ${
                  activeSection === item?.id 
                    ? 'text-primary' :'text-foreground'
                }`}
              >
                {item?.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu 
              navigationItems={navigationItems}
              activeSection={activeSection}
              onNavigate={scrollToSection}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

const MobileMenu = ({ navigationItems, activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (target) => {
    onNavigate(target);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-foreground hover:text-primary transition-colors duration-250"
        aria-label="Toggle menu"
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} />
      </button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-12 z-50 w-48 bg-background border border-border rounded-lg shadow-coffee-card">
            <div className="py-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => handleNavigate(item?.target)}
                  className={`w-full text-left px-4 py-3 font-inter font-medium text-sm transition-colors duration-250 hover:bg-muted ${
                    activeSection === item?.id 
                      ? 'text-primary bg-muted' :'text-foreground'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavigationHeader;