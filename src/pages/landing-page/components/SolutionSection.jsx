import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [expandedCard, setExpandedCard] = useState(null);

  // Coffee drop animation based on scroll
  const dropY = useTransform(scrollYProgress, [0, 0.5], [-100, 200]);
  const dropOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 0]);

  const qualityAttributes = [
    {
      id: 'origin',
      title: 'Single Origin',
      description: 'Traceable to specific farms and regions',
      detail: `Our beans come from carefully selected farms in Ethiopia, Colombia, and Guatemala. Each batch includes detailed information about the farmer, altitude, processing method, and harvest date. We maintain direct relationships with growers, ensuring fair compensation and sustainable practices.`,
      icon: 'MapPin',
      color: 'text-accent'
    },
    {
      id: 'roast',
      title: 'Expert Roasting',
      description: 'Small-batch roasted to perfection',
      detail: `Our master roasters use traditional drum roasting techniques combined with modern temperature control. Each batch is roasted in small quantities (maximum 50kg) to ensure consistency. We track first crack, development time, and cooling curves for optimal flavor extraction.`,
      icon: 'Flame',
      color: 'text-warning'
    },
    {
      id: 'flavor',
      title: 'Complex Flavors',
      description: 'Tasting notes that tell a story',
      detail: `Every coffee undergoes professional cupping by certified Q-graders. We identify unique flavor notes ranging from bright citrus and floral hints to deep chocolate and nutty undertones. Our flavor wheels help you discover your perfect taste profile.`,
      icon: 'Star',
      color: 'text-primary'
    }
  ];

  return (
    <section id="solution" ref={ref} className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-primary">Perfect</span> Coffee Experience
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch as each element of our premium coffee comes together. 
            Scroll to see the magic happen, one drop at a time.
          </p>
        </motion.div>

        {/* Coffee Drop Animation Container */}
        <div className="relative h-96 mb-16 flex items-center justify-center">
          {/* Coffee Cup */}
          <motion.div
            className="relative z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop&crop=center"
              alt="Premium Coffee Cup"
              className="w-48 h-48 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Animated Coffee Drops */}
          {qualityAttributes?.map((attribute, index) => (
            <motion.div
              key={attribute?.id}
              className="absolute z-10"
              style={{
                y: dropY,
                opacity: dropOpacity,
                left: `${40 + index * 10}%`,
                top: '10%'
              }}
            >
              <motion.div
                className="w-4 h-6 bg-gradient-to-b from-primary to-primary/80 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}

          {/* Floating Quality Indicators */}
          {qualityAttributes?.map((attribute, index) => (
            <motion.div
              key={`indicator-${attribute?.id}`}
              className={`absolute z-30 ${
                index === 0 ? 'top-16 left-8' :
                index === 1 ? 'top-8 right-8': 'bottom-16 left-1/2 transform -translate-x-1/2'
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <div className="bg-background/90 backdrop-blur-coffee border border-border rounded-full p-3 shadow-coffee-card">
                <Icon name={attribute?.icon} size={20} className={attribute?.color} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Attribute Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {qualityAttributes?.map((attribute, index) => (
            <motion.div
              key={attribute?.id}
              className={`bg-card border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-coffee-card hover:border-primary/30 ${
                expandedCard === attribute?.id ? 'ring-2 ring-primary/20' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              onClick={() => setExpandedCard(expandedCard === attribute?.id ? null : attribute?.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-primary/10`}>
                  <Icon name={attribute?.icon} size={24} className={attribute?.color} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  {attribute?.title}
                </h3>
              </div>

              <p className="font-inter text-muted-foreground mb-4">
                {attribute?.description}
              </p>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCard === attribute?.id ? 'auto' : 0,
                  opacity: expandedCard === attribute?.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border">
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {attribute?.detail}
                  </p>
                </div>
              </motion.div>

              <div className="flex items-center justify-between mt-4">
                <span className="font-inter text-sm text-primary font-medium">
                  Learn More
                </span>
                <Icon 
                  name={expandedCard === attribute?.id ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                  color="var(--color-primary)" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coffee Bean Transformation Animation */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-center space-x-8 mb-8">
            {['Bean', 'Roast', 'Grind', 'Brew', 'Enjoy']?.map((step, index) => (
              <motion.div
                key={step}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-2"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </motion.div>
                <span className="font-inter text-xs text-muted-foreground">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            From carefully selected green beans to your perfect cup, every step is crafted 
            with precision and passion. Experience the journey that transforms simple beans 
            into extraordinary moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;