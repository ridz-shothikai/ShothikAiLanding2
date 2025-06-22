import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, ChevronDown } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExploreEcosystem = () => {
    Analytics.trackButtonClick('Explore Our Ecosystem', 'hero');
    const element = document.getElementById('ecosystem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-light via-white to-brand-accent-highlight"></div>
      
      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="space-y-8 lg:space-y-12">
          {/* Trust badges */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200/50">
              <Shield className="w-4 h-4 text-brand-security-blue" />
              <span className="text-sm font-medium text-brand-charcoal">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200/50">
              <Lock className="w-4 h-4 text-brand-trust-green" />
              <span className="text-sm font-medium text-brand-charcoal">GDPR Compliant</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="font-manrope font-thin text-7xl sm:text-8xl lg:text-9xl tracking-ultra-tight leading-none text-black">
            Intelligent
            <br />
            <span className="text-brand-primary">Solutions</span>
            <br />
            for Everyone
          </h1>
          
          {/* Subheadline */}
          <p className="font-inter font-light text-2xl lg:text-3xl text-brand-charcoal leading-relaxed max-w-4xl mx-auto">
            Democratizing AI through powerful tools for creators and enterprise-grade solutions for businesses
          </p>
          
          {/* Primary CTA */}
          <div className="pt-8">
            <Button 
              onClick={handleExploreEcosystem}
              className="bg-black text-white px-20 py-6 rounded-xl text-2xl font-light hover-scale transition-all duration-300 hover:bg-gray-900"
            >
              Explore Our Ecosystem
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-brand-light-gray w-8 h-8" />
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-brand-secondary/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '-3s' }}>
        <div className="w-16 h-16 bg-brand-primary/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
