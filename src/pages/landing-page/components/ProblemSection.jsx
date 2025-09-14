import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeComparison, setActiveComparison] = useState(0);

  const comparisons = [
    {
      aspect: "Flavor Profile",
      commercial: { value: 2, label: "Bland & Bitter" },
      artisanal: { value: 9, label: "Rich & Complex" }
    },
    {
      aspect: "Bean Quality",
      commercial: { value: 3, label: "Mass Produced" },
      artisanal: { value: 10, label: "Single Origin" }
    },
    {
      aspect: "Freshness",
      commercial: { value: 4, label: "Months Old" },
      artisanal: { value: 10, label: "Roasted Weekly" }
    },
    {
      aspect: "Sustainability",
      commercial: { value: 2, label: "Unknown Source" },
      artisanal: { value: 9, label: "Fair Trade Certified" }
    }
  ];

  return (
    <section id="problem" ref={ref} className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tired of <span className="text-destructive">Disappointing</span> Coffee?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Most coffee experiences are forgettable. Mass-produced beans, stale flavors, 
            and zero connection to the craft behind your cup. You deserve better.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Commercial Coffee */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Icon name="X" size={24} color="var(--color-destructive)" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Commercial Coffee
              </h3>
              
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center"
                  alt="Commercial Coffee"
                  className="w-full h-48 object-cover rounded-lg grayscale"
                />
                <div className="absolute inset-0 bg-destructive/20 rounded-lg" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} color="var(--color-destructive)" />
                  <span className="text-sm text-muted-foreground">Months old beans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Frown" size={16} color="var(--color-destructive)" />
                  <span className="text-sm text-muted-foreground">Bitter, one-dimensional taste</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="HelpCircle" size={16} color="var(--color-destructive)" />
                  <span className="text-sm text-muted-foreground">Unknown origin & ethics</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Artisanal Coffee */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card border border-primary/20 rounded-2xl p-8 relative overflow-hidden shadow-coffee-card">
              <div className="absolute top-4 right-4">
                <Icon name="Check" size={24} color="var(--color-success)" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Artisanal Experience
              </h3>
              
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop&crop=center"
                  alt="Artisanal Coffee"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" size={16} color="var(--color-success)" />
                  <span className="text-sm text-muted-foreground">Freshly roasted weekly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Smile" size={16} color="var(--color-success)" />
                  <span className="text-sm text-muted-foreground">Complex, nuanced flavors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={16} color="var(--color-success)" />
                  <span className="text-sm text-muted-foreground">Ethically sourced & traceable</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Comparison Sliders */}
        <motion.div
          className="mt-16 bg-card rounded-2xl p-8 border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-playfair text-2xl font-bold text-center text-foreground mb-8">
            See The Difference Yourself
          </h3>

          <div className="space-y-6">
            {comparisons?.map((comparison, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeComparison === index
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
                onClick={() => setActiveComparison(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-inter font-semibold text-foreground">
                    {comparison?.aspect}
                  </h4>
                  <Icon 
                    name={activeComparison === index ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    color="var(--color-muted-foreground)" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Commercial</span>
                      <span className="text-sm font-medium text-destructive">
                        {comparison?.commercial?.label}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-destructive h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={activeComparison === index ? { width: `${comparison?.commercial?.value * 10}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Artisanal</span>
                      <span className="text-sm font-medium text-success">
                        {comparison?.artisanal?.label}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-success h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={activeComparison === index ? { width: `${comparison?.artisanal?.value * 10}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;