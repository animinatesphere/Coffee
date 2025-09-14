import React, { useEffect } from 'react';
import NavigationHeader from '../../components/ui/NavigationHeader';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';
import FloatingCTA from '../../components/ui/FloatingCTA';
import SectionNavigationDots from '../../components/ui/SectionNavigationDots';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BrewingGuide from './components/BrewingGuide';
import BenefitsGrid from './components/BenefitsGrid';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ProductShowcase from './components/ProductShowcase';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation & Progress */}
      <NavigationHeader />
      <ScrollProgressIndicator />
      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BrewingGuide />
        <BenefitsGrid />
        <TestimonialsCarousel />
        <ProductShowcase />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      {/* Floating Elements */}
      <FloatingCTA />
      <SectionNavigationDots />
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-foreground rounded-full" />
                </div>
                <span className="font-playfair font-bold text-xl">Coffee Drop</span>
              </div>
              <p className="font-inter text-sm text-background/80 max-w-md mb-4">
                Bringing you the world's finest coffee through an immersive digital experience. 
                From bean to cup, every drop tells a story.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'Youtube']?.map((social) => (
                  <button
                    key={social}
                    className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={`Follow us on ${social}`}
                  >
                    <div className="w-4 h-4 bg-background rounded-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 font-inter text-sm">
                {['About Us', 'Our Coffee', 'Subscriptions', 'Gift Cards', 'Contact']?.map((link) => (
                  <li key={link}>
                    <button className="text-background/80 hover:text-background transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-playfair font-semibold mb-4">Support</h3>
              <ul className="space-y-2 font-inter text-sm">
                {['Help Center', 'Shipping Info', 'Returns', 'Track Order', 'FAQ']?.map((link) => (
                  <li key={link}>
                    <button className="text-background/80 hover:text-background transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-sm text-background/60">
              © {new Date()?.getFullYear()} Coffee Drop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy']?.map((link) => (
                <button
                  key={link}
                  className="font-inter text-sm text-background/60 hover:text-background/80 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;