import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "How fresh is the coffee when it arrives?",
      answer: `Our coffee is roasted in small batches twice weekly (Tuesdays and Fridays) and shipped within 48 hours of roasting. This means your coffee is never more than 7 days old when it arrives at your door.\n\nWe use proprietary packaging with one-way valves that preserve peak flavor for up to 4 weeks after roasting. Each bag includes the exact roast date, so you always know how fresh your coffee is.`,
      icon: "Clock",
      category: "Freshness"
    },
    {
      id: 1,
      question: "Can I customize my coffee preferences?",
      answer: `Absolutely! Our AI-powered taste profiling system learns your preferences through feedback and cupping notes. After your first 3 shipments, we achieve 94% satisfaction in flavor matching.\n\nYou can choose from:\n• 12 different roast profiles (light to dark)\n• 8 grind options (whole bean to espresso fine)\n• Origin preferences (single origin vs blends)\n• Flavor profile preferences (fruity, nutty, chocolatey, etc.)\n• Caffeine level preferences (regular, decaf, half-caff)`,
      icon: "Settings",
      category: "Customization"
    },
    {
      id: 2,
      question: "Where do you source your coffee beans?",
      answer: `We work directly with 47 coffee farms across Ethiopia, Colombia, Guatemala, and other premium coffee regions. Our partnerships ensure farmers receive 40% above fair trade prices.\n\nEvery coffee includes detailed traceability information:\n• Specific farm and farmer names\n• Exact coordinates and altitude\n• Processing method details\n• Harvest date and lot numbers\n• Sustainability certifications\n\nWe visit each farm annually to maintain relationships and ensure quality standards.`,
      icon: "MapPin",
      category: "Sourcing"
    },
    {
      id: 3,
      question: "What if I don't like a coffee I receive?",
      answer: `We stand behind every coffee we send. If you're not satisfied with any shipment, we offer several options:\n\n• Full refund for that shipment (keep the coffee)\n• Free replacement with a different coffee\n• Adjust your taste profile for better future matches\n• Pause your subscription while we find better options\n\nOur customer satisfaction rate is 96%, and we're committed to finding your perfect cup.`,
      icon: "Heart",
      category: "Satisfaction"
    },
    {
      id: 4,
      question: "How does shipping work and what does it cost?",
      answer: `All subscriptions include free shipping within the continental US. We ship via FedEx and USPS with tracking provided.\n\nShipping details:\n• Standard shipping: 3-5 business days\n• Expedited shipping: 1-2 business days (Roastmaster plan)\n• International shipping: Available to 25+ countries\n• Packaging: 100% compostable materials\n• Delivery: Signature not required, safe drop-off\n\nYou can modify delivery dates, pause shipments, or change addresses anytime through your account.`,
      icon: "Truck",
      category: "Shipping"
    },
    {
      id: 5,
      question: "Can I pause or cancel my subscription?",
      answer: `Yes, you have complete control over your subscription. You can:\n\n• Pause for up to 3 months (perfect for vacations)\n• Skip individual shipments\n• Change delivery frequency (weekly, bi-weekly, monthly)\n• Cancel anytime with no fees or penalties\n• Reactivate paused subscriptions anytime\n\nChanges can be made through your online account or by contacting our customer service team. All changes take effect with your next scheduled shipment.`,
      icon: "Pause",
      category: "Flexibility"
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" ref={ref} className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our coffee subscriptions, sourcing, 
            and commitment to quality.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <motion.div
              key={faq?.id}
              className={`bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-coffee-card ${
                openFAQ === faq?.id ? 'border-primary/30 shadow-coffee-card' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    openFAQ === faq?.id ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    <Icon 
                      name={faq?.icon} 
                      size={20} 
                      color={openFAQ === faq?.id ? "var(--color-primary)" : "var(--color-muted-foreground)"} 
                    />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground">
                      {faq?.question}
                    </h3>
                    <span className="text-xs text-muted-foreground font-inter">
                      {faq?.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Steam Animation for Open FAQ */}
                  {openFAQ === faq?.id && (
                    <div className="flex space-x-1">
                      {[...Array(3)]?.map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-4 bg-gradient-to-t from-primary/30 to-transparent rounded-full"
                          animate={{
                            scaleY: [1, 1.5, 1],
                            opacity: [0.3, 0.7, 0.3]
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

                  <motion.div
                    animate={{ rotate: openFAQ === faq?.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon 
                      name="ChevronDown" 
                      size={20} 
                      color="var(--color-muted-foreground)" 
                    />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === faq?.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <div className="prose prose-sm max-w-none">
                          {faq?.answer?.split('\n')?.map((paragraph, pIndex) => {
                            if (paragraph?.trim() === '') return null;
                            
                            if (paragraph?.startsWith('•')) {
                              return (
                                <motion.div
                                  key={pIndex}
                                  className="flex items-start space-x-2 mb-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: pIndex * 0.1 }}
                                >
                                  <Icon 
                                    name="Coffee" 
                                    size={12} 
                                    className="text-primary mt-1 flex-shrink-0" 
                                  />
                                  <span className="font-inter text-sm text-muted-foreground">
                                    {paragraph?.substring(2)}
                                  </span>
                                </motion.div>
                              );
                            }
                            
                            return (
                              <motion.p
                                key={pIndex}
                                className="font-inter text-sm text-muted-foreground mb-3 leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: pIndex * 0.1 }}
                              >
                                {paragraph}
                              </motion.p>
                            );
                          })}
                        </div>

                        {/* Additional Info for Specific FAQs */}
                        {faq?.id === 0 && (
                          <motion.div
                            className="mt-4 p-3 bg-success/10 border border-success/20 rounded-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                          >
                            <div className="flex items-center space-x-2">
                              <Icon name="Check" size={16} className="text-success" />
                              <span className="font-inter text-sm text-success font-medium">
                                Freshness Guarantee: If your coffee isn't fresh, we'll replace it free.
                              </span>
                            </div>
                          </motion.div>
                        )}

                        {faq?.id === 2 && (
                          <motion.div
                            className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                          >
                            <div className="flex items-center space-x-2">
                              <Icon name="Award" size={16} className="text-primary" />
                              <span className="font-inter text-sm text-primary font-medium">
                                All our coffees score 85+ on the SCA scale (Specialty Grade)
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Our coffee experts are here to help you find your perfect cup. 
              Get in touch and we'll respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter font-medium transition-all duration-300 hover:bg-primary/90 shadow-coffee-cta flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="MessageCircle" size={16} />
                <span>Live Chat</span>
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-border text-foreground rounded-lg font-inter font-medium transition-all duration-300 hover:border-primary hover:text-primary flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Mail" size={16} />
                <span>Email Support</span>
              </motion.button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Average response time: 2 hours • Available 7 days a week
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;