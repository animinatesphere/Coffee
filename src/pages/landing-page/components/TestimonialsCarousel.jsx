import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Coffee Connoisseur",
      company: "Tech Startup Founder",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      content: `Coffee Drop completely transformed my morning routine. The Ethiopian single-origin they sent last month had notes of blueberry and chocolate that I've never experienced before. The freshness is unmatched - you can actually taste the difference.`,
      journey: "3 months subscriber",
      linkedin: "https://linkedin.com/in/sarahchen",
      videoThumbnail: "https://images.unsplash.com/photo-1494790108755-2616c9c0e6e3?w=400&h=300&fit=crop&crop=center",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Professional Barista",
      company: "Blue Bottle Coffee",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      content: `As a professional barista, I'm incredibly picky about coffee quality. Coffee Drop's curation rivals what we serve at our shop. The detailed tasting notes and brewing guides help me perfect each cup. My customers always ask what I'm drinking during breaks!`,
      journey: "8 months subscriber",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      location: "Portland, OR"
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Food & Beverage Director",
      company: "Michelin Star Restaurant",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      content: `We've started featuring Coffee Drop's beans in our restaurant's coffee program. The traceability and quality stories resonate with our guests who appreciate artisanal products. The Colombian Geisha variety was absolutely exceptional.`,
      journey: "1 year subscriber",
      linkedin: "https://linkedin.com/in/emilywatson",
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=center",
      location: "New York, NY"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Coffee Blogger",
      company: "The Daily Grind Blog",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      content: `I've reviewed over 200 coffee subscriptions for my blog, and Coffee Drop stands out for their educational approach. Each shipment feels like a masterclass in coffee appreciation. The farmer stories and processing details add so much depth to the experience.`,
      journey: "2 years subscriber",
      linkedin: "https://linkedin.com/in/davidkim",
      videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=center",
      location: "Seattle, WA"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Coffee Lovers <span className="text-primary">Say</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who've discovered their perfect cup. 
            Real stories from real coffee enthusiasts.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-coffee-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Left - Avatar & Info */}
                <div className="text-center md:text-left">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={testimonials?.[currentTestimonial]?.avatar}
                      alt={testimonials?.[currentTestimonial]?.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                      <Icon name="Check" size={12} color="var(--color-primary-foreground)" />
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                    {testimonials?.[currentTestimonial]?.name}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground mb-1">
                    {testimonials?.[currentTestimonial]?.title}
                  </p>
                  <p className="font-inter text-xs text-muted-foreground mb-2">
                    {testimonials?.[currentTestimonial]?.company}
                  </p>
                  <p className="font-inter text-xs text-primary font-medium">
                    {testimonials?.[currentTestimonial]?.journey}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start space-x-1 mt-3">
                    {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                    ))}
                  </div>
                </div>

                {/* Center - Content */}
                <div className="md:col-span-2">
                  <div className="relative">
                    <Icon 
                      name="Quote" 
                      size={32} 
                      className="text-primary/20 absolute -top-4 -left-4" 
                    />
                    <blockquote className="font-inter text-lg text-foreground leading-relaxed pl-8">
                      {testimonials?.[currentTestimonial]?.content}
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={14} />
                        <span>{testimonials?.[currentTestimonial]?.location}</span>
                      </div>
                      <a
                        href={testimonials?.[currentTestimonial]?.linkedin}
                        className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="Linkedin" size={14} />
                        <span>LinkedIn</span>
                      </a>
                    </div>

                    {/* Video Play Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Play"
                      iconPosition="left"
                      className="text-xs"
                    >
                      Watch Video
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-coffee border border-border rounded-full flex items-center justify-center hover:border-primary transition-all duration-300 shadow-coffee-card"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} color="var(--color-foreground)" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-coffee border border-border rounded-full flex items-center justify-center hover:border-primary transition-all duration-300 shadow-coffee-card"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} color="var(--color-foreground)" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary scale-125' :'bg-muted hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Floating Testimonial Cards */}
        <div className="hidden lg:block">
          {testimonials?.map((testimonial, index) => {
            if (index === currentTestimonial) return null;
            
            const positions = [
              { top: '20%', left: '5%' },
              { top: '60%', right: '5%' },
              { bottom: '20%', left: '10%' }
            ];
            
            const position = positions?.[index % positions?.length];
            
            return (
              <motion.div
                key={testimonial?.id}
                className="absolute bg-card/80 backdrop-blur-coffee border border-border rounded-lg p-4 max-w-xs cursor-pointer hover:bg-card transition-all duration-300"
                style={position}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-inter text-sm font-medium text-foreground">
                      {testimonial?.name}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={10} className="text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-inter text-xs text-muted-foreground line-clamp-3">
                  {testimonial?.content?.substring(0, 100)}...
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 text-sm"
          >
            <Icon 
              name={isAutoPlaying ? "Pause" : "Play"} 
              size={14} 
              color="var(--color-muted-foreground)" 
            />
            <span className="text-muted-foreground">
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;