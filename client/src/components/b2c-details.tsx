import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

export default function B2CDetails() {
  const handleTryStudio = () => {
    Analytics.trackButtonClick('Try Studio Free', 'b2c-details');
  };

  return (
    <section id="b2c-details" className="py-24 bg-gradient-to-br from-brand-accent-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium">
              B2C Solution
            </div>
            <h2 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight">
              Shothik AI Studio
            </h2>
            <p className="text-xl text-brand-charcoal leading-relaxed">
              Empower your creativity with our suite of AI-powered tools designed for content creators, artists, and entrepreneurs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">AI Content Generation</h4>
                  <p className="text-brand-charcoal">Create compelling content across multiple formats</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Smart Design Assistant</h4>
                  <p className="text-brand-charcoal">AI-powered design recommendations and automation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Collaborative Workspace</h4>
                  <p className="text-brand-charcoal">Share and collaborate with team members seamlessly</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleTryStudio}
              className="bg-black text-white px-12 py-4 rounded-xl text-lg font-light hover-scale hover:bg-gray-900"
            >
              Try Studio Free
            </Button>
          </div>
          
          <div className="relative">
            {/* Creative workspace mockup */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="AI-powered creative workspace with modern interface" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Floating feature cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-secondary rounded-full"></div>
                <span className="text-sm font-medium">AI Magic</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-trust-green rounded-full"></div>
                <span className="text-sm font-medium">Team Collab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
