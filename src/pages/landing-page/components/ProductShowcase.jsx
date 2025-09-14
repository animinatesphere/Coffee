import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedAromaNote, setSelectedAromaNote] = useState(null);

  const products = [
    {
      id: 'ethiopian-yirgacheffe',
      name: 'Ethiopian Yirgacheffe',
      origin: 'Gedeb, Ethiopia',
      altitude: '2000m',
      process: 'Washed',
      roastLevel: 'Light-Medium',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&crop=center',
      description: 'Bright and floral with notes of bergamot, lemon zest, and jasmine. This exceptional coffee showcases the terroir of the Gedeb region.',
      flavorNotes: ['Bergamot', 'Lemon Zest', 'Jasmine', 'Black Tea', 'Honey'],
      aromaWheel: [
        { note: 'Floral', intensity: 9, angle: 0, color: '#FF6B9D' },
        { note: 'Citrus', intensity: 8, angle: 72, color: '#FFA726' },
        { note: 'Tea-like', intensity: 7, angle: 144, color: '#66BB6A' },
        { note: 'Sweet', intensity: 6, angle: 216, color: '#42A5F5' },
        { note: 'Clean', intensity: 8, angle: 288, color: '#AB47BC' }
      ],
      farmStory: 'Grown by the Gedeb cooperative, this coffee supports 1,200 smallholder farmers.',
      certifications: ['Organic', 'Fair Trade', 'Rainforest Alliance']
    },
    {
      id: 'colombian-huila',
      name: 'Colombian Huila',
      origin: 'Huila, Colombia',
      altitude: '1750m',
      process: 'Honey',
      roastLevel: 'Medium',
      price: '$22.99',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop&crop=center',
      description: 'Rich and balanced with chocolate and caramel sweetness. The honey process adds complexity and body to this exceptional Colombian coffee.',
      flavorNotes: ['Dark Chocolate', 'Caramel', 'Orange', 'Almond', 'Brown Sugar'],
      aromaWheel: [
        { note: 'Chocolate', intensity: 9, angle: 0, color: '#8D4E85' },
        { note: 'Caramel', intensity: 8, angle: 72, color: '#D4A574' },
        { note: 'Nutty', intensity: 7, angle: 144, color: '#A67C52' },
        { note: 'Fruity', intensity: 6, angle: 216, color: '#FF8A65' },
        { note: 'Sweet', intensity: 8, angle: 288, color: '#FFB74D' }
      ],
      farmStory: 'Sourced from family farms in the Huila region, known for their meticulous processing methods.',
      certifications: ['Fair Trade', 'Shade Grown']
    },
    {
      id: 'guatemalan-antigua',
      name: 'Guatemalan Antigua',
      origin: 'Antigua, Guatemala',
      altitude: '1500m',
      process: 'Fully Washed',
      roastLevel: 'Medium-Dark',
      price: '$26.99',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=center',
      description: 'Full-bodied with smoky undertones and spicy complexity. Grown in volcanic soil that imparts unique mineral characteristics.',
      flavorNotes: ['Dark Cocoa', 'Spice', 'Smoke', 'Vanilla', 'Cedar'],
      aromaWheel: [
        { note: 'Smoky', intensity: 8, angle: 0, color: '#5D4E75' },
        { note: 'Spicy', intensity: 7, angle: 72, color: '#D32F2F' },
        { note: 'Cocoa', intensity: 9, angle: 144, color: '#6D4C41' },
        { note: 'Woody', intensity: 6, angle: 216, color: '#8D6E63' },
        { note: 'Vanilla', intensity: 7, angle: 288, color: '#FFF3E0' }
      ],
      farmStory: 'Cultivated on volcanic slopes, this coffee benefits from rich mineral soil and ideal climate.',
      certifications: ['Organic', 'Bird Friendly']
    }
  ];

  const handleProductRotation = (direction) => {
    setRotationAngle(prev => prev + (direction === 'left' ? -90 : 90));
  };

  const currentProduct = products?.[selectedProduct];

  return (
    <section id="products" ref={ref} className="py-20 bg-gradient-to-b from-card to-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our <span className="text-primary">Premium Selection</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Each coffee tells a unique story. Discover the origins, flavors, and craftsmanship 
            behind our carefully curated selection of single-origin coffees.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Product Display */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-background rounded-2xl p-8 border border-border shadow-coffee-card">
              {/* 3D Coffee Bag */}
              <div className="relative w-80 h-80 mx-auto mb-6">
                <motion.div
                  className="w-full h-full relative"
                  animate={{ rotateY: rotationAngle }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={currentProduct?.image}
                    alt={currentProduct?.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  {/* Floating Particles */}
                  {[...Array(6)]?.map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 12}%`,
                        left: `${15 + (i % 2) * 70}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Rotation Controls */}
              <div className="flex justify-center space-x-4 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleProductRotation('left')}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Rotate Left
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleProductRotation('right')}
                  iconName="RotateCw"
                  iconPosition="left"
                >
                  Rotate Right
                </Button>
              </div>

              {/* Product Selector */}
              <div className="flex justify-center space-x-2">
                {products?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProduct(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === selectedProduct
                        ? 'bg-primary scale-125' :'bg-muted hover:bg-muted-foreground'
                    }`}
                    aria-label={`Select product ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Product Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Product Info */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    {currentProduct?.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} />
                    <span>{currentProduct?.origin}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-playfair text-2xl font-bold text-primary">
                    {currentProduct?.price}
                  </div>
                  <div className="text-sm text-muted-foreground">per 12oz bag</div>
                </div>
              </div>

              <p className="font-inter text-muted-foreground mb-4">
                {currentProduct?.description}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Mountain" size={16} color="var(--color-muted-foreground)" />
                  <span className="text-sm text-muted-foreground">
                    {currentProduct?.altitude} altitude
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Droplets" size={16} color="var(--color-muted-foreground)" />
                  <span className="text-sm text-muted-foreground">
                    {currentProduct?.process} process
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Flame" size={16} color="var(--color-muted-foreground)" />
                  <span className="text-sm text-muted-foreground">
                    {currentProduct?.roastLevel} roast
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} color="var(--color-muted-foreground)" />
                  <span className="text-sm text-muted-foreground">
                    {currentProduct?.certifications?.length} certifications
                  </span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProduct?.certifications?.map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 bg-success/10 text-success text-xs rounded-full border border-success/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Flavor Notes */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-playfair text-lg font-bold text-foreground mb-4 flex items-center">
                <Icon name="Coffee" size={18} className="mr-2 text-primary" />
                Flavor Profile
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProduct?.flavorNotes?.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Aroma Wheel */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-playfair text-lg font-bold text-foreground mb-4 flex items-center">
                <Icon name="Target" size={18} className="mr-2 text-accent" />
                Aroma Wheel
              </h4>
              <div className="relative w-48 h-48 mx-auto">
                <svg width="192" height="192" className="transform -rotate-90">
                  {currentProduct?.aromaWheel?.map((aroma, index) => {
                    const radius = 70;
                    const centerX = 96;
                    const centerY = 96;
                    const startAngle = (aroma?.angle - 30) * (Math.PI / 180);
                    const endAngle = (aroma?.angle + 30) * (Math.PI / 180);
                    
                    const x1 = centerX + radius * Math.cos(startAngle);
                    const y1 = centerY + radius * Math.sin(startAngle);
                    const x2 = centerX + radius * Math.cos(endAngle);
                    const y2 = centerY + radius * Math.sin(endAngle);
                    
                    const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
                    
                    return (
                      <motion.path
                        key={aroma?.note}
                        d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={aroma?.color}
                        opacity={selectedAromaNote === aroma?.note ? 0.8 : 0.6}
                        className="cursor-pointer transition-opacity duration-300"
                        onClick={() => setSelectedAromaNote(
                          selectedAromaNote === aroma?.note ? null : aroma?.note
                        )}
                        whileHover={{ opacity: 0.9 }}
                      />
                    );
                  })}
                </svg>
                
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                  <Icon name="Coffee" size={20} color="var(--color-primary)" />
                </div>
              </div>
              
              {selectedAromaNote && (
                <motion.div
                  className="mt-4 p-3 bg-card rounded-lg border border-border text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="font-inter font-medium text-foreground">
                    {selectedAromaNote}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Intensity: {currentProduct?.aromaWheel?.find(a => a?.note === selectedAromaNote)?.intensity}/10
                  </div>
                </motion.div>
              )}
            </div>

            {/* Farm Story */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-playfair text-lg font-bold text-foreground mb-3 flex items-center">
                <Icon name="Heart" size={18} className="mr-2 text-destructive" />
                Farm Story
              </h4>
              <p className="font-inter text-sm text-muted-foreground">
                {currentProduct?.farmStory}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="flex-1 shadow-coffee-cta"
                iconName="ShoppingCart"
                iconPosition="left"
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Heart"
                iconPosition="left"
              >
                Save for Later
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;