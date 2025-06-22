import { Button } from '@/components/ui/button';
import { Shield, Settings, TrendingUp } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

export default function B2BDetails() {
  const handleScheduleDemo = () => {
    Analytics.trackButtonClick('Schedule Demo', 'b2b-details');
  };

  return (
    <section id="b2b-details" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Enterprise dashboard */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Enterprise dashboard with business analytics and AI insights" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Enterprise metrics */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-4 rounded-xl">
              <div className="text-2xl font-bold text-black">99.9%</div>
              <div className="text-sm text-brand-charcoal">Uptime SLA</div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl">
              <div className="text-2xl font-bold text-brand-security-blue">24/7</div>
              <div className="text-sm text-brand-charcoal">Support</div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block bg-brand-security-blue/10 text-brand-security-blue px-4 py-2 rounded-full text-sm font-medium">
              B2B Solution
            </div>
            <h2 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-brand-charcoal leading-relaxed">
              Scale your business with enterprise-grade AI solutions designed for security, compliance, and performance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-security-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="text-white w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Enterprise Security</h4>
                  <p className="text-brand-charcoal">SOC 2, GDPR compliant with advanced encryption</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-security-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Settings className="text-white w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Custom Integrations</h4>
                  <p className="text-brand-charcoal">Seamless integration with existing enterprise systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-security-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="text-white w-3 h-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Advanced Analytics</h4>
                  <p className="text-brand-charcoal">Real-time insights and predictive intelligence</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleScheduleDemo}
              className="bg-black text-white px-12 py-4 rounded-xl text-lg font-light hover-scale hover:bg-gray-900"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
