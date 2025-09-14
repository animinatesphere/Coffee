import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 0,
      name: 'Explorer',
      description: 'Perfect for coffee curious beginners',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      savings: 20,
      features: [
        '1 bag per month (12oz)',
        'Curated single origins',
        'Basic tasting notes',
        'Email brewing guides',
        'Free shipping',
        'Cancel anytime'
      ],
      popular: false,
      color: 'border-border',
      bgColor: 'bg-card',
      buttonVariant: 'outline'
    },
    {
      id: 1,
      name: 'Connoisseur',
      description: 'Most popular choice for coffee lovers',
      monthlyPrice: 34.99,
      yearlyPrice: 349.99,
      savings: 25,
      features: [
        '2 bags per month (12oz each)',
        'Premium single origins',
        'Detailed tasting notes',
        'Video brewing tutorials',
        'Priority customer support',
        'Exclusive farm stories',
        'First access to limited releases',
        'Free shipping & returns'
      ],
      popular: true,
      color: 'border-primary',
      bgColor: 'bg-primary/5',
      buttonVariant: 'default'
    },
    {
      id: 2,
      name: 'Roastmaster',
      description: 'Ultimate experience for true enthusiasts',
      monthlyPrice: 54.99,
      yearlyPrice: 549.99,
      savings: 30,
      features: [
        '3 bags per month (12oz each)',
        'Rare & exclusive origins',
        'Professional cupping notes',
        '1-on-1 virtual tastings',
        'Custom roast profiles',
        'Direct farmer connections',
        'Quarterly surprise selections',
        'VIP customer concierge',
        'Free expedited shipping'
      ],
      popular: false,
      color: 'border-accent',
      bgColor: 'bg-accent/5',
      buttonVariant: 'outline'
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan?.monthlyPrice : plan?.yearlyPrice / 12;
  };

  const getSavings = (plan) => {
    if (billingCycle === 'yearly') {
      return Math.round(((plan?.monthlyPrice * 12) - plan?.yearlyPrice) / (plan?.monthlyPrice * 12) * 100);
    }
    return 0;
  };

  return (
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Background Elements */}
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
            Choose Your <span className="text-primary">Coffee Journey</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From curious beginner to coffee connoisseur, we have the perfect subscription 
            to match your passion and palate.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-inter text-sm ${billingCycle === 'monthly' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm"
                animate={{
                  x: billingCycle === 'yearly' ? 32 : 4
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <span className={`font-inter text-sm ${billingCycle === 'yearly' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full border border-success/20">
                Save up to 30%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans?.map((plan, index) => (
            <motion.div
              key={plan?.id}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-coffee-card ${
                plan?.popular 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : selectedPlan === plan?.id
                    ? `${plan?.color} ${plan?.bgColor}`
                    : 'border-border bg-card hover:border-primary/30'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedPlan(plan?.id)}
            >
              {/* Popular Badge */}
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-inter font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  {plan?.name}
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  {plan?.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="font-playfair text-4xl font-bold text-foreground">
                    ${getPrice(plan)?.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                {billingCycle === 'yearly' && (
                  <div className="mt-2">
                    <span className="text-sm text-muted-foreground line-through">
                      ${plan?.monthlyPrice}/month
                    </span>
                    <span className="ml-2 text-sm text-success font-medium">
                      Save {getSavings(plan)}%
                    </span>
                  </div>
                )}

                {/* Coffee Bean Animation */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(plan?.id + 1)]?.map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
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

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan?.features?.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                  >
                    <Icon 
                      name="Check" 
                      size={16} 
                      className="text-success mt-0.5 flex-shrink-0" 
                    />
                    <span className="font-inter text-sm text-foreground">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan?.buttonVariant}
                size="lg"
                className="w-full shadow-coffee-cta"
                iconName="Coffee"
                iconPosition="left"
              >
                {selectedPlan === plan?.id ? 'Selected Plan' : 'Choose Plan'}
              </Button>

              {/* Value Indicator */}
              <div className="mt-4 text-center">
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    animate={{ width: `${((plan?.id + 1) / 3) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">
                  Value Level: {plan?.id === 0 ? 'Good' : plan?.id === 1 ? 'Better' : 'Best'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Limited Time Offer */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(5)]?.map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-primary rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
                🎉 Limited Time: First Month 50% Off
              </h3>
              <p className="font-inter text-muted-foreground mb-6 max-w-2xl mx-auto">
                New subscribers get their first month at half price. Plus, if you're not completely 
                satisfied, we'll refund your money and let you keep the coffee.
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center space-x-4 mb-6">
                {[
                  { label: 'Days', value: '07' },
                  { label: 'Hours', value: '14' },
                  { label: 'Minutes', value: '32' },
                  { label: 'Seconds', value: '18' }
                ]?.map((time, index) => (
                  <div key={time?.label} className="text-center">
                    <div className="bg-background border border-border rounded-lg p-3 min-w-16">
                      <div className="font-playfair text-2xl font-bold text-primary">
                        {time?.value}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {time?.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="shadow-coffee-cta"
                  iconName="Zap"
                  iconPosition="left"
                >
                  Claim 50% Off Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Gift"
                  iconPosition="left"
                >
                  Gift a Subscription
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                * Offer valid for new subscribers only. Discount applies to first month of any plan.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 text-muted-foreground">
            <Icon name="Shield" size={20} color="var(--color-success)" />
            <span className="font-inter text-sm">30-day money-back guarantee</span>
            <Icon name="Truck" size={20} color="var(--color-success)" />
            <span className="font-inter text-sm">Free shipping on all orders</span>
            <Icon name="RotateCcw" size={20} color="var(--color-success)" />
            <span className="font-inter text-sm">Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;