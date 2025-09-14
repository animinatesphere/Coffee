import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BrewingGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [selectedGrind, setSelectedGrind] = useState('medium');
  const [selectedTemp, setSelectedTemp] = useState(200);
  const [selectedTime, setSelectedTime] = useState(4);
  const [isBrewingActive, setIsBrewingActive] = useState(false);

  const grindOptions = [
    { id: 'coarse', label: 'Coarse', description: 'French Press', icon: 'Circle' },
    { id: 'medium', label: 'Medium', description: 'Pour Over', icon: 'CircleDot' },
    { id: 'fine', label: 'Fine', description: 'Espresso', icon: 'Dot' }
  ];

  const flavorProfile = {
    coarse: { acidity: 6, body: 8, sweetness: 7, aroma: 6 },
    medium: { acidity: 8, body: 6, sweetness: 8, aroma: 9 },
    fine: { acidity: 9, body: 9, sweetness: 6, aroma: 8 }
  };

  const getFlavorIntensity = () => {
    const tempFactor = (selectedTemp - 180) / 20; // 0-1 scale
    const timeFactor = selectedTime / 6; // 0-1 scale
    return Math.min(tempFactor * timeFactor * 100, 100);
  };

  const startBrewing = () => {
    setIsBrewingActive(true);
    setTimeout(() => setIsBrewingActive(false), 3000);
  };

  return (
    <section id="brewing" ref={ref} className="py-20 bg-gradient-to-b from-card to-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Master Your <span className="text-primary">Brewing</span> Technique
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how different brewing parameters affect your coffee's flavor profile. 
            Experiment with our interactive guide to find your perfect cup.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Controls */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Grind Size Selection */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center">
                <Icon name="Settings" size={20} className="mr-2 text-primary" />
                Grind Size
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {grindOptions?.map((option) => (
                  <button
                    key={option?.id}
                    onClick={() => setSelectedGrind(option?.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-center ${
                      selectedGrind === option?.id
                        ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-muted-foreground'
                    }`}
                  >
                    <Icon name={option?.icon} size={24} className="mx-auto mb-2" />
                    <div className="font-inter font-medium text-sm">{option?.label}</div>
                    <div className="text-xs opacity-70">{option?.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Water Temperature */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center">
                <Icon name="Thermometer" size={20} className="mr-2 text-warning" />
                Water Temperature: {selectedTemp}°F
              </h3>
              <div className="relative">
                <input
                  type="range"
                  min="180"
                  max="212"
                  value={selectedTemp}
                  onChange={(e) => setSelectedTemp(parseInt(e?.target?.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #EF4444 ${((selectedTemp - 180) / 32) * 100}%, #E5E7EB ${((selectedTemp - 180) / 32) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>180°F</span>
                  <span>212°F</span>
                </div>
              </div>
            </div>

            {/* Brewing Time */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center">
                <Icon name="Clock" size={20} className="mr-2 text-accent" />
                Brewing Time: {selectedTime} minutes
              </h3>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTime(Math.max(1, selectedTime - 0.5))}
                  iconName="Minus"
                />
                <div className="flex-1 bg-muted rounded-full h-2 relative">
                  <motion.div
                    className="bg-accent h-2 rounded-full"
                    animate={{ width: `${(selectedTime / 6) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTime(Math.min(6, selectedTime + 0.5))}
                  iconName="Plus"
                />
              </div>
            </div>

            {/* Start Brewing Button */}
            <Button
              variant="default"
              size="lg"
              onClick={startBrewing}
              disabled={isBrewingActive}
              className="w-full shadow-coffee-cta"
              iconName={isBrewingActive ? "Loader2" : "Play"}
              iconPosition="left"
            >
              {isBrewingActive ? 'Brewing...' : 'Start Brewing Process'}
            </Button>
          </motion.div>

          {/* Right Side - Animation & Results */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Brewing Animation */}
            <div className="bg-background rounded-2xl p-8 border border-border text-center relative overflow-hidden">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-6">
                Brewing Visualization
              </h3>
              
              <div className="relative w-48 h-64 mx-auto">
                {/* Coffee Maker/Pour Over */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-16 border-2 border-primary rounded-t-full" />
                
                {/* Water Drops */}
                {isBrewingActive && (
                  <>
                    {[...Array(5)]?.map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-3 bg-blue-400 rounded-full"
                        style={{
                          left: `${45 + i * 2}%`,
                          top: '20%'
                        }}
                        animate={{
                          y: [0, 100, 150],
                          opacity: [1, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Coffee Cup */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-32 border-2 border-primary rounded-b-lg">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-primary/60 rounded-b-lg"
                    animate={isBrewingActive ? { height: '80%' } : { height: '20%' }}
                    transition={{ duration: 3 }}
                  />
                </div>

                {/* Steam Effect */}
                {isBrewingActive && (
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    {[...Array(3)]?.map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-gradient-to-t from-muted-foreground/30 to-transparent rounded-full"
                        style={{ left: `${i * 4 - 4}px` }}
                        animate={{
                          y: [-10, -30],
                          opacity: [0.7, 0],
                          scaleX: [1, 1.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6">
                <div className="text-sm text-muted-foreground">
                  Flavor Intensity: {Math.round(getFlavorIntensity())}%
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    animate={{ width: `${getFlavorIntensity()}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Flavor Profile Chart */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                Flavor Profile
              </h3>
              <div className="space-y-4">
                {Object.entries(flavorProfile?.[selectedGrind])?.map(([attribute, value]) => (
                  <div key={attribute} className="flex items-center justify-between">
                    <span className="font-inter text-sm text-muted-foreground capitalize">
                      {attribute}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          animate={{ width: `${value * 10}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground w-6">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrewingGuide;