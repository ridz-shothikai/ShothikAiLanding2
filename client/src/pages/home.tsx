import { useEffect, useState } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import MindMap from '@/components/mind-map';
import B2CDetails from '@/components/b2c-details';
import B2BDetails from '@/components/b2b-details';
import SuccessStories from '@/components/success-stories';
import TeamSection from '@/components/team-section';
import Roadmap from '@/components/roadmap';
import Footer from '@/components/footer';
import { Analytics } from '@/lib/analytics';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize analytics tracking
    Analytics.initScrollTracking();
  }, []);

  const handleNodeClick = (nodeType: string) => {
    setIsLoading(true);
    setActiveSection(nodeType);
    
    // Scroll to the appropriate section with loading state
    setTimeout(() => {
      const sectionId = nodeType === 'b2c' ? 'b2c-details' : 'b2b-details';
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsLoading(false);
    }, 300);
  };

  const resetToEcosystem = () => {
    setActiveSection(null);
    const element = document.getElementById('ecosystem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MindMap onNodeClick={handleNodeClick} />
      
      {/* Loading state */}
      {isLoading && (
        <div className="py-16 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-brand-charcoal">Loading platform details...</p>
        </div>
      )}
      
      {/* Breadcrumb navigation */}
      {activeSection && !isLoading && (
        <div className="bg-brand-accent-light py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <button 
                onClick={resetToEcosystem}
                className="text-brand-primary hover:text-brand-secondary transition-colors"
              >
                Ecosystem
              </button>
              <span className="text-brand-light-gray">/</span>
              <span className="text-brand-charcoal font-medium">
                {activeSection === 'b2c' ? 'Individual Solutions' : 'Enterprise Solutions'}
              </span>
            </nav>
          </div>
        </div>
      )}
      
      {/* Conditional rendering based on active section */}
      {activeSection === 'b2c' && !isLoading && <B2CDetails />}
      {activeSection === 'b2b' && !isLoading && <B2BDetails />}
      
      <SuccessStories />
      <TeamSection />
      <Roadmap />
      <Footer />
    </div>
  );
}
