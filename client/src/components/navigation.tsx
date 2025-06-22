import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleGetStarted = () => {
    Analytics.trackButtonClick('Get Started', 'navigation');
    scrollToSection('ecosystem');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-slate-200/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Brain className="text-white w-4 h-4" />
            </div>
            <span className="font-manrope font-bold text-xl">Shothik AI</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-brand-charcoal hover:text-brand-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('ecosystem')}
              className="text-brand-charcoal hover:text-brand-primary transition-colors"
            >
              Ecosystem
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="text-brand-charcoal hover:text-brand-primary transition-colors"
            >
              Success
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-brand-charcoal hover:text-brand-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-brand-charcoal hover:text-brand-primary transition-colors"
            >
              Roadmap
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleGetStarted}
              className="bg-black text-white px-6 py-2 rounded-xl font-light hover-scale hover:bg-gray-900"
            >
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200/50 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-brand-charcoal hover:text-brand-primary transition-colors px-4"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('ecosystem')}
                className="text-left text-brand-charcoal hover:text-brand-primary transition-colors px-4"
              >
                Ecosystem
              </button>
              <button 
                onClick={() => scrollToSection('success-stories')}
                className="text-left text-brand-charcoal hover:text-brand-primary transition-colors px-4"
              >
                Success
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-brand-charcoal hover:text-brand-primary transition-colors px-4"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="text-left text-brand-charcoal hover:text-brand-primary transition-colors px-4"
              >
                Roadmap
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
