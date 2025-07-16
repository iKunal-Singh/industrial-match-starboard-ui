import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Search, 
  BarChart3, 
  MapPin, 
  TrendingUp, 
  Zap, 
  Target, 
  Database,
  ArrowRight,
  CheckCircle,
  Cpu,
  Brain,
  Sparkles
} from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';
import ParticleBackground from '@/components/animations/ParticleBackground';
import TypingAnimation from '@/components/animations/TypingAnimation';
import { FloatingGeometry } from '@/components/animations/FloatingElements';
import MagneticCard from '@/components/animations/MagneticCard';
import { ScrollReveal, StaggerContainer } from '@/components/animations/ScrollReveal';
import CircuitLines from '@/components/animations/CircuitLines';

const Index = () => {
  const navigate = useNavigate();
  const [typingComplete, setTypingComplete] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Building,
      title: "Industrial Focus",
      description: "Specialized algorithms designed specifically for industrial properties and zoning requirements",
      color: "text-primary",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: Brain,
      title: "AI-Powered Scoring", 
      description: "Advanced machine learning algorithms provide precise compatibility scores for better decisions",
      color: "text-secondary",
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Geographic proximity analysis with transportation, infrastructure, and market accessibility",
      color: "text-accent",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: Cpu,
      title: "Market Insights",
      description: "Comprehensive property analytics with detailed breakdowns and comparison metrics",
      color: "text-primary",
      gradient: "from-primary/20 to-secondary/20"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Properties Analyzed", color: "primary" },
    { number: "95%", label: "Accuracy Rate", color: "secondary" },
    { number: "50+", label: "Cities Covered", color: "accent" },
    { number: "2.5s", label: "Average Search Time", color: "primary" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary-dark/20 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground className="opacity-30" />
      
      {/* Circuit Lines */}
      <CircuitLines className="opacity-20" animated />
      
      {/* Floating Geometry */}
      <FloatingGeometry shapes={8} className="opacity-40" />
      
      {/* Header */}
      <motion.header 
        className="border-b border-white/10 backdrop-blur-sm relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div 
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Building className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text-primary">Starboard</span>
            </motion.div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="magnetic-hover">Features</Button>
              <Button variant="ghost" className="magnetic-hover">About</Button>
              <Button 
                variant="starboard" 
                onClick={() => navigate('/search')}
                className="energy-pulse"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img 
            src={heroImage} 
            alt="Modern industrial complex" 
            className="w-full h-full object-cover opacity-20"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary-dark/80"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <ScrollReveal direction="up" delay={0.2}>
              <Badge variant="outline" className="mb-4 text-secondary border-secondary neon-glow cyber-border">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Property Analysis
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <TypingAnimation 
                  text="Find Comparable"
                  speed={100}
                  onComplete={() => setTypingComplete(true)}
                />
                {typingComplete && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <br />
                    <span className="gradient-text-secondary glitch-text" data-text="Industrial Properties">
                      Industrial Properties
                    </span> 
                    <br />
                    <span className="hologram-effect">with AI</span>
                  </motion.span>
                )}
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.8}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover the best property matches using advanced algorithms and comprehensive market data. 
                Get precise compatibility scores in seconds.
              </p>
            </ScrollReveal>
            
            <AnimatePresence>
              {showButtons && (
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Button 
                    variant="starboard" 
                    size="lg" 
                    className="text-lg px-8 py-6 energy-pulse cyber-border"
                    onClick={() => navigate('/search')}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Start Property Search
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="glass" size="lg" className="text-lg px-8 py-6 magnetic-hover">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    View Demo
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced floating geometric shapes */}
          <motion.div className="relative">
            <motion.div 
              className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -top-32 -right-16 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"
              animate={{
                y: [20, -20, 20],
                x: [10, -10, 10],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="absolute -bottom-16 left-1/2 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="container mx-auto px-6 py-16 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <MagneticCard key={index} className="glass-card text-center neon-glow cyber-border">
                <CardContent className="pt-6">
                  <div className={`text-3xl md:text-4xl font-bold gradient-text-${stat.color} mb-2 energy-pulse`}>
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </MagneticCard>
            ))}
          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for <span className="gradient-text-secondary hologram-effect">Smart Decisions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced platform combines artificial intelligence with comprehensive market data 
              to deliver unmatched accuracy in property comparisons.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <MagneticCard key={index} className="glass-card group neon-glow cyber-border">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 energy-pulse`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </MagneticCard>
          ))}
        </StaggerContainer>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text-secondary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get comparable properties in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Enter Property Details",
              description: "Input your property's location, size, year built, and zoning information"
            },
            {
              step: "02", 
              title: "AI Analysis",
              description: "Our advanced algorithms analyze thousands of properties to find the best matches"
            },
            {
              step: "03",
              title: "Get Results",
              description: "Receive detailed compatibility scores and comprehensive property comparisons"
            }
          ].map((step, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="glass-card glow-primary animate-scale-in">
          <CardContent className="text-center py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Find Your Perfect <span className="gradient-text-secondary">Match?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust Starboard for accurate industrial property analysis
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="starboard" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/search')}
              >
                <Search className="w-5 h-5 mr-2" />
                Start Your Search Now
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Instant results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No signup required</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Building className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold gradient-text-primary">Starboard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Starboard. Powered by AI for industrial property analysis.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
