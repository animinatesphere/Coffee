import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isPouring, setIsPouring] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    preferences: {
      roastLevel: 'medium',
      flavorProfile: 'balanced',
      grindType: 'whole-bean',
      intensity: 'medium'
    }
  });

  const flavorProfiles = [
    { id: 'fruity', label: 'Fruity & Bright', icon: 'Apple', color: 'bg-orange-100 text-orange-600' },
    { id: 'nutty', label: 'Nutty & Smooth', icon: 'Nut', color: 'bg-amber-100 text-amber-600' },
    { id: 'chocolatey', label: 'Rich & Chocolatey', icon: 'Coffee', color: 'bg-brown-100 text-brown-600' },
    { id: 'balanced', label: 'Balanced & Classic', icon: 'Scale', color: 'bg-blue-100 text-blue-600' }
  ];

  const roastLevels = [
    { id: 'light', label: 'Light', color: 'bg-yellow-200' },
    { id: 'medium', label: 'Medium', color: 'bg-amber-400' },
    { id: 'dark', label: 'Dark', color: 'bg-amber-800' }
  ];

  const handlePreferenceChange = (category, value) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev?.preferences,
        [category]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsPouring(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsPouring(false);
      // Handle success state
    }, 3000);
  };

  return (
    <section id="final-cta" ref={ref} className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(20)]?.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-6xl font-bold text-foreground mb-6">
            Start Your <span className="text-primary">Perfect</span> Coffee Journey
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Tell us your taste preferences and we'll craft the perfect coffee experience just for you. 
            Join thousands of satisfied coffee lovers today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Coffee Pouring Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-96 bg-gradient-to-b from-background to-card rounded-2xl border border-border overflow-hidden">
              {/* Coffee Pour Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Coffee Pot */}
                  <motion.div
                    className="relative z-20 mb-8"
                    animate={isPouring ? { rotate: [0, -15, 0] } : {}}
                    transition={{ duration: 2, repeat: isPouring ? Infinity : 0 }}
                  >
                    <div className="w-24 h-16 bg-gradient-to-b from-muted to-muted-foreground rounded-t-full relative">
                      <div className="absolute -right-2 top-4 w-6 h-8 bg-muted-foreground rounded-r-full" />
                      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-4 bg-muted-foreground rounded-b-full" />
                    </div>
                  </motion.div>

                  {/* Coffee Stream */}
                  {isPouring && (
                    <motion.div
                      className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-primary/60 rounded-full z-10"
                      initial={{ height: 0 }}
                      animate={{ height: '120px' }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  {/* Coffee Cup */}
                  <div className="relative z-20">
                    <div className="w-32 h-24 bg-gradient-to-b from-card to-muted border-2 border-border rounded-b-2xl relative">
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-primary/60 rounded-b-2xl"
                        animate={isPouring ? { height: '80%' } : { height: '20%' }}
                        transition={{ duration: 2 }}
                      />
                      <div className="absolute -right-3 top-4 w-4 h-8 border-2 border-border rounded-r-full bg-card" />
                    </div>
                  </div>

                  {/* Steam Effect */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    {[...Array(4)]?.map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-gradient-to-t from-muted-foreground/30 to-transparent rounded-full"
                        style={{ left: `${i * 3 - 6}px` }}
                        animate={{
                          y: [-10, -30],
                          opacity: [0.7, 0],
                          scaleX: [1, 1.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Coffee Beans */}
              {[...Array(8)]?.map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full opacity-40"
                  style={{
                    top: `${20 + (i * 10)}%`,
                    left: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Preference Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                  Get Started
                </h3>
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="your@email.com"
                  value={formData?.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e?.target?.value }))}
                  required
                  className="mb-4"
                />
              </div>

              {/* Flavor Profile Selection */}
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center">
                  <Icon name="Palette" size={20} className="mr-2 text-primary" />
                  Flavor Profile
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {flavorProfiles?.map((profile) => (
                    <button
                      key={profile?.id}
                      type="button"
                      onClick={() => handlePreferenceChange('flavorProfile', profile?.id)}
                      className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                        formData?.preferences?.flavorProfile === profile?.id
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name={profile?.icon} size={16} />
                        <span className="font-inter font-medium text-sm">
                          {profile?.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Roast Level Selection */}
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center">
                  <Icon name="Flame" size={20} className="mr-2 text-warning" />
                  Roast Level
                </h3>
                <div className="flex space-x-3">
                  {roastLevels?.map((roast) => (
                    <button
                      key={roast?.id}
                      type="button"
                      onClick={() => handlePreferenceChange('roastLevel', roast?.id)}
                      className={`flex-1 p-4 rounded-lg border transition-all duration-300 ${
                        formData?.preferences?.roastLevel === roast?.id
                          ? 'border-primary bg-primary/10' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className={`w-full h-4 rounded-full mb-2 ${roast?.color}`} />
                      <span className="font-inter font-medium text-sm text-foreground">
                        {roast?.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Grind Type */}
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center">
                  <Icon name="Settings2" size={20} className="mr-2 text-accent" />
                  Grind Preference
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'whole-bean', label: 'Whole Bean', desc: 'Maximum freshness' },
                    { id: 'coarse', label: 'Coarse Grind', desc: 'French press ready' },
                    { id: 'medium', label: 'Medium Grind', desc: 'Pour over ready' },
                    { id: 'fine', label: 'Fine Grind', desc: 'Espresso ready' }
                  ]?.map((grind) => (
                    <button
                      key={grind?.id}
                      type="button"
                      onClick={() => handlePreferenceChange('grindType', grind?.id)}
                      className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                        formData?.preferences?.grindType === grind?.id
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-muted-foreground'
                      }`}
                    >
                      <div className="font-inter font-medium text-sm">
                        {grind?.label}
                      </div>
                      <div className="text-xs opacity-70">
                        {grind?.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full shadow-coffee-cta"
                disabled={isPouring}
                loading={isPouring}
                iconName={isPouring ? "Loader2" : "Coffee"}
                iconPosition="left"
                onClick={() => setIsPouring(true)}
              >
                {isPouring ? 'Brewing Your Perfect Match...' : 'Start My Coffee Journey'}
              </Button>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>30-day guarantee</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Truck" size={16} className="text-success" />
                  <span>Free shipping</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="RotateCcw" size={16} className="text-success" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '15,000+', label: 'Happy Customers', icon: 'Users' },
            { number: '96%', label: 'Satisfaction Rate', icon: 'Heart' },
            { number: '47', label: 'Partner Farms', icon: 'MapPin' },
            { number: '4.9/5', label: 'Average Rating', icon: 'Star' }
          ]?.map((metric, index) => (
            <motion.div
              key={metric?.label}
              className="bg-card border border-border rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name={metric?.icon} size={20} className="text-primary" />
                </div>
              </div>
              <div className="font-playfair text-2xl font-bold text-foreground mb-1">
                {metric?.number}
              </div>
              <div className="font-inter text-sm text-muted-foreground">
                {metric?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;