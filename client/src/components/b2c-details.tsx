import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

export default function B2CDetails() {
  const handleTryStudio = () => {
    Analytics.trackButtonClick('Try Studio Free', 'b2c-details');
  };

  const products = [
    {
      name: "Doclyze",
      description: "AI-powered document management with smart categorization and instant chat interaction",
      impact: "80% faster document access, 50% fewer errors",
      icon: "📄"
    },
    {
      name: "Teleport",
      description: "AI-powered doctor-patient conversation platform with real-time transcription",
      impact: "99% transcription accuracy, multilingual support",
      icon: "🩺"
    },
    {
      name: "SmartCrawl",
      description: "Intelligent web crawling engine with semantic understanding and structured data export",
      impact: "92% extraction accuracy, 99.7% semantic precision",
      icon: "🕷️"
    },
    {
      name: "Engineering Insights",
      description: "AI-powered platform for engineering drawings analysis and collaboration",
      impact: "Smart diagram understanding, instant BOM extraction",
      icon: "🏗️"
    }
  ];

  return (
    <section id="b2c-details" className="py-24 bg-gradient-to-br from-brand-accent-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Professional Solutions
          </div>
          <h2 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight mb-6">
            Shothik AI Studio
          </h2>
          <p className="text-xl text-brand-charcoal leading-relaxed max-w-3xl mx-auto">
            Comprehensive AI-powered tools designed for professionals across healthcare, legal, engineering, and business sectors
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{product.icon}</div>
                <div>
                  <h3 className="font-manrope font-bold text-2xl text-black mb-2">{product.name}</h3>
                  <p className="text-brand-charcoal leading-relaxed mb-4">{product.description}</p>
                  <div className="inline-block bg-brand-trust-green/10 text-brand-trust-green px-3 py-1 rounded-full text-sm font-medium">
                    {product.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200/50 mb-12">
          <h3 className="font-manrope font-bold text-2xl text-black mb-6 text-center">Universal Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="text-white w-3 h-3" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Intelligent Automation</h4>
              <p className="text-brand-charcoal text-sm">Reduce manual work by up to 80% with smart AI processing</p>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="text-white w-3 h-3" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Multi-Industry Support</h4>
              <p className="text-brand-charcoal text-sm">Tailored solutions for healthcare, legal, engineering, and more</p>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 bg-brand-trust-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="text-white w-3 h-3" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Seamless Integration</h4>
              <p className="text-brand-charcoal text-sm">Connect with existing tools and workflows effortlessly</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleTryStudio}
            className="bg-black text-white px-12 py-4 rounded-xl text-lg font-light hover-scale hover:bg-gray-900"
          >
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
