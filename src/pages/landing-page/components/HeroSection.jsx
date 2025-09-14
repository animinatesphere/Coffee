import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const { scrollY } = useScroll();
  
  const steamOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const cupScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  const metrics = [
    { label: "Cups Brewed Today", value: "2,847", icon: "Coffee" },
    { label: "Satisfied Customers", value: "15,000+", icon: "Users" },
    { label: "Partner Farms", value: "47", icon: "MapPin" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#problem');
    if (nextSection) {
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            style={{ y: textY }}
          >
            <motion.h1 
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience Coffee
              <span className="block text-primary">Like Never Before</span>
            </motion.h1>

            <motion.p 
              className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium beans meet digital artistry in the world's most immersive coffee journey. 
              Discover flavors that tell stories of distant lands and passionate farmers.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                variant="default" 
                size="lg"
                className="shadow-coffee-cta"
                iconName="Coffee"
                iconPosition="left"
              >
                Start Your Coffee Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                Watch Our Story
              </Button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div 
              className="bg-card/50 backdrop-blur-coffee rounded-2xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex items-center space-x-2">
                  <Icon name={metrics?.[currentMetric]?.icon} size={20} color="var(--color-primary)" />
                  <div>
                    <div className="font-inter font-semibold text-foreground">
                      {metrics?.[currentMetric]?.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metrics?.[currentMetric]?.label}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {metrics?.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentMetric ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Coffee Cup Animation */}
          <motion.div 
            className="relative flex items-center justify-center"
            style={{ scale: cupScale }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Coffee Cup */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&crop=center"
                  alt="Premium Coffee Cup"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Steam Animation */}
              <motion.div 
                className="absolute top-8 left-1/2 transform -translate-x-1/2"
                style={{ opacity: steamOpacity }}
              >
                {[...Array(3)]?.map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 bg-gradient-to-t from-muted-foreground/30 to-transparent rounded-full"
                    style={{
                      height: '60px',
                      left: `${i * 8 - 8}px`,
                    }}
                    animate={{
                      y: [-20, -80],
                      opacity: [0.7, 0],
                      scaleX: [1, 1.5, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating Coffee Beans */}
              {[...Array(5)]?.map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full opacity-60"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer"
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="font-inter text-sm text-muted-foreground mb-2">
            Scroll to brew your perfect cup
          </div>
          <Icon name="ChevronDown" size={24} color="var(--color-muted-foreground)" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;