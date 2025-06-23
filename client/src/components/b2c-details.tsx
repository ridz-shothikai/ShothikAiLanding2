import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

export default function B2CDetails() {
  const handleTryStudio = () => {
    Analytics.trackButtonClick('Try Individual Solutions', 'b2c-details');
  };

  return (
    <section id="b2c-details" className="py-24 bg-gradient-to-br from-brand-accent-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Shothik Studio
          </div>
          <h2 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight mb-6">
            Creative AI Studio
          </h2>
          <p className="text-xl text-brand-charcoal leading-relaxed max-w-3xl mx-auto">
            Professional creative tools and AI-powered platforms for individual creators and small teams
          </p>
        </div>

        {/* Individual Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 hover-scale text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="font-manrope font-bold text-xl text-black mb-3">Smart Writing</h3>
            <p className="text-brand-charcoal text-sm">AI-powered content creation and editing assistance</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 hover-scale text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-manrope font-bold text-xl text-black mb-3">Creative Tools</h3>
            <p className="text-brand-charcoal text-sm">Design assistance and creative content generation</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 hover-scale text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-manrope font-bold text-xl text-black mb-3">Research Assistant</h3>
            <p className="text-brand-charcoal text-sm">Intelligent research and information gathering</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 hover-scale text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-manrope font-bold text-xl text-black mb-3">Data Insights</h3>
            <p className="text-brand-charcoal text-sm">Simple analytics and performance tracking</p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200/50 mb-12">
          <h3 className="font-manrope font-bold text-2xl text-black mb-6 text-center">Perfect for Individuals</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="text-white w-3 h-3" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Easy to Use</h4>
              <p className="text-brand-charcoal text-sm">Intuitive interface designed for quick adoption</p>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="text-white w-3 h-3" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Affordable Pricing</h4>
              <p className="text-brand-charcoal text-sm">Cost-effective solutions for individual professionals</p>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="text-white w-3 h-3" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Quick Setup</h4>
              <p className="text-brand-charcoal text-sm">Get started in minutes with minimal configuration</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleTryStudio}
            className="bg-black text-white px-12 py-4 rounded-xl text-lg font-light hover-scale hover:bg-gray-900"
          >
            Try Individual Tools
          </Button>
        </div>
      </div>
    </section>
  );
}
