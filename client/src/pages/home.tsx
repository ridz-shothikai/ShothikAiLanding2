import { useEffect, useState, lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import MindMap from '@/components/mind-map';
import { Analytics } from '@/lib/analytics';
import { usePreloadResources, useOptimizedScrollTracking } from '@/lib/performance';

// Lazy load components below the fold
const B2CDetails = lazy(() => import('@/components/b2c-details'));
const B2BDetails = lazy(() => import('@/components/b2b-details'));
const SuccessStories = lazy(() => import('@/components/success-stories'));
const VideoShowcase = lazy(() => import('@/components/video-showcase'));
const TeamSection = lazy(() => import('@/components/team-section'));
const ContactSection = lazy(() => import('@/components/contact-section'));
const Roadmap = lazy(() => import('@/components/roadmap'));
const Footer = lazy(() => import('@/components/footer'));

// Loading skeletons
const SectionSkeleton = () => (
  <div className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-80 mx-auto mb-4" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Enable resource preloading for better performance
  usePreloadResources();

  // Use optimized scroll tracking
  useOptimizedScrollTracking((percentage) => {
    Analytics.trackScrollDepth(percentage);
  });

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
                {activeSection === 'b2c' ? 'Shothik Studio' : 'Enterprise Solutions'}
              </span>
            </nav>
          </div>
        </div>
      )}
      
      {/* Conditional rendering based on active section */}
      {activeSection === 'b2c' && !isLoading && (
        <Suspense fallback={<SectionSkeleton />}>
          <B2CDetails />
        </Suspense>
      )}
      {activeSection === 'b2b' && !isLoading && (
        <Suspense fallback={<SectionSkeleton />}>
          <B2BDetails />
        </Suspense>
      )}
      
      <Suspense fallback={<SectionSkeleton />}>
        <SuccessStories />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <VideoShowcase />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Roadmap />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}
