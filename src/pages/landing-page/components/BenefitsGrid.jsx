import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BenefitsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      id: 'sourcing',
      title: 'Ethical Sourcing',
      description: 'Direct trade relationships with farmers',
      story: `We work directly with 47 coffee farms across Ethiopia, Colombia, and Guatemala. Our partnerships ensure farmers receive 40% above fair trade prices, supporting sustainable farming practices and community development. Each purchase helps fund education programs and infrastructure improvements in coffee-growing regions.`,
      icon: 'Handshake',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center',
      stats: { farms: 47, premium: '40%', communities: 12 }
    },
    {
      id: 'sustainability',
      title: 'Carbon Neutral',
      description: 'Certified sustainable practices',
      story: `Our entire supply chain is carbon neutral, from farm to cup. We offset 120% of our carbon footprint through reforestation projects and renewable energy investments. Our packaging is 100% compostable, and we've planted over 50,000 trees in coffee-growing regions since 2020.`,icon: 'Leaf',image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center',
      stats: { offset: '120%', trees: '50K+', packaging: '100%' }
    },
    {
      id: 'quality',title: 'Expert Curation',description: 'Curated by certified Q-graders',
      story: `Our team of 8 certified Q-graders travels the world to source exceptional beans. Each coffee undergoes rigorous cupping sessions, scoring 85+ on the Specialty Coffee Association scale. We taste over 1,000 samples annually to select only the top 3% for our customers.`,
      icon: 'Award',image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center',
      stats: { graders: 8, score: '85+', selection: '3%' }
    },
    {
      id: 'freshness',title: 'Peak Freshness',description: 'Roasted weekly, shipped within 48 hours',
      story: `Freshness is non-negotiable. We roast in small batches every Tuesday and Friday, ensuring your coffee is never more than 7 days old when it arrives. Our proprietary packaging with one-way valves preserves peak flavor for up to 4 weeks after roasting.`,
      icon: 'Zap',image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop&crop=center',
      stats: { roasting: '2x/week', shipping: '48hrs', freshness: '7 days' }
    },
    {
      id: 'customization',title: 'Personal Profiles',description: 'Tailored to your taste preferences',
      story: `Our AI-powered taste profiling system learns your preferences through feedback and cupping notes. After 3 shipments, we achieve 94% satisfaction in flavor matching. Choose from 12 roast profiles and 8 grind options, with detailed brewing guides for each selection.`,
      icon: 'User',image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop&crop=center',
      stats: { satisfaction: '94%', profiles: 12, options: 8 }
    },
    {
      id: 'community',title: 'Coffee Community',description: 'Join 15,000+ coffee enthusiasts',
      story: `Connect with fellow coffee lovers through our exclusive community platform. Share tasting notes, participate in virtual cuppings, and get early access to limited releases. Our monthly coffee education webinars feature guest roasters and origin stories from farmers.`,
      icon: 'Users',image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop&crop=center',
      stats: { members: '15K+', webinars: 'Monthly', releases: 'Early Access' }
    }
  ];

  return (
    <section id="benefits" ref={ref} className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Coffee Drop</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Every aspect of our coffee journey is designed to deliver an exceptional experience. 
            From ethical sourcing to expert curation, discover what makes us different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => (
            <motion.div
              key={benefit?.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-coffee-card hover:border-primary/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(benefit?.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={benefit?.image}
                  alt={benefit?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-coffee rounded-full">
                  <Icon name={benefit?.icon} size={20} color="var(--color-primary)" />
                </div>

                {/* Animated Coffee Beans */}
                <div className="absolute inset-0 pointer-events-none">
                  {hoveredCard === benefit?.id && (
                    <>
                      {[...Array(3)]?.map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary rounded-full"
                          style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 25}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  {benefit?.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-4">
                  {benefit?.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm mb-4">
                  {Object.entries(benefit?.stats)?.map(([key, value], i) => (
                    <div key={key} className="text-center">
                      <div className="font-semibold text-primary">{value}</div>
                      <div className="text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Expandable Story */}
                <motion.div
                  initial={false}
                  animate={{
                    height: hoveredCard === benefit?.id ? 'auto' : 0,
                    opacity: hoveredCard === benefit?.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border">
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                      {benefit?.story}
                    </p>
                  </div>
                </motion.div>

                {/* Hover Indicator */}
                <div className="flex items-center justify-between mt-4">
                  <span className="font-inter text-sm text-primary font-medium">
                    {hoveredCard === benefit?.id ? 'Hide Details' : 'Learn More'}
                  </span>
                  <motion.div
                    animate={{ rotate: hoveredCard === benefit?.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name="ChevronDown" size={16} color="var(--color-primary)" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 pointer-events-none"
                animate={{
                  opacity: hoveredCard === benefit?.id ? 0.3 : 0,
                  scale: hoveredCard === benefit?.id ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Join thousands of coffee enthusiasts who've discovered their perfect cup. 
              Start your journey with our curated selection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter font-medium transition-all duration-300 hover:bg-primary/90 shadow-coffee-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Subscription
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-border text-foreground rounded-lg font-inter font-medium transition-all duration-300 hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Sample Pack
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsGrid;