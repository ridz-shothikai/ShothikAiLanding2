import { Button } from '@/components/ui/button';
import { Shield, Settings, TrendingUp } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

export default function B2BDetails() {
  const handleScheduleDemo = () => {
    Analytics.trackButtonClick('Schedule Demo', 'b2b-details');
  };

  const enterprisePlatforms = [
    {
      name: "Doclyze",
      subtitle: "Intelligent Document Management",
      description: "AI-powered platform for managing digital and scanned documents with smart categorization and conversational AI assistant",
      impact: "80% faster document access, 50% fewer errors",
      features: ["Smart File Reading & Auto-Categorization", "Unique Document IDs & Version Control", "Conversational AI Assistant", "Google Drive Integration"],
      icon: "📄"
    },
    {
      name: "SmartCrawl", 
      subtitle: "Intelligent Web Crawling Engine",
      description: "Transform web data into structured insights using scalable, API-first microservices architecture with RAG and CAG capabilities",
      impact: "92% extraction accuracy, 99.7% semantic precision",
      features: ["Scalable Recursive Crawling", "Dynamic Content Handling", "Semantic Understanding", "Structured Data Export"],
      icon: "🕷️"
    },
    {
      name: "Engineering Insights",
      subtitle: "AI-Powered Engineering Platform", 
      description: "Comprehensive platform for engineers and EPC firms to manage, analyze, and collaborate on engineering drawings within secure workspaces",
      impact: "Smart diagram understanding, instant BOM extraction",
      features: ["Smart Diagram Understanding", "BOM & Material Extraction", "Code Compliance Checker", "Integration with AutoCAD/Revit"],
      icon: "🏗️"
    },
    {
      name: "Police Investigation Suite",
      subtitle: "AI-Driven Investigation Platform",
      description: "Modern solution for police departments to accelerate investigative work, streamline workflows, and optimize case management",
      impact: "Automated report generation, comprehensive case management",
      features: ["Smart Report Drafting", "Case File Management", "Investigation File Editing", "Cross-Case Search"],
      icon: "🚔"
    },
    {
      name: "Teleport",
      subtitle: "Doctor-Patient Conversation Platform",
      description: "AI-powered platform to record, transcribe, and analyze medical conversations with real-time insights and multilingual support",
      impact: "99% transcription accuracy, multilingual support",
      features: ["Real-time Transcription", "AI Medical Insights", "Organized History", "HIPAA Compliance"],
      icon: "🩺"
    }
  ];

  return (
    <section id="b2b-details" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-security-blue/10 text-brand-security-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            Enterprise Solutions
          </div>
          <h2 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight mb-6">
            AI-Powered Enterprise Platforms
          </h2>
          <p className="text-xl text-brand-charcoal leading-relaxed max-w-4xl mx-auto">
            Comprehensive AI solutions designed for organizations across healthcare, law enforcement, engineering, legal, and business sectors
          </p>
        </div>

        {/* Enterprise Platforms Grid */}
        <div className="space-y-12 mb-16">
          {enterprisePlatforms.map((platform, index) => (
            <div key={index} className={`platform-card bg-white p-8 rounded-2xl ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{platform.icon}</div>
                    <div>
                      <h3 className="font-manrope font-bold text-3xl text-black">{platform.name}</h3>
                      <p className="text-brand-security-blue font-medium text-lg">{platform.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-brand-charcoal leading-relaxed">{platform.description}</p>
                  
                  <div className="inline-block bg-brand-trust-green/10 text-brand-trust-green px-4 py-2 rounded-full font-medium">
                    {platform.impact}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-security-blue rounded-full flex-shrink-0"></div>
                        <span className="text-brand-charcoal text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-brand-accent-light to-brand-accent-highlight p-8 rounded-2xl border border-slate-200/50">
                    <div className="aspect-video bg-white rounded-xl shadow-inner flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{platform.icon}</div>
                        <div className="text-brand-charcoal font-medium">{platform.name} Dashboard</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Benefits */}
        <div className="bg-gradient-to-br from-brand-security-blue/5 to-brand-primary/5 p-12 rounded-2xl border border-slate-200/50 mb-12">
          <h3 className="font-manrope font-bold text-3xl text-black mb-8 text-center">Enterprise-Grade Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-security-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-brand-security-blue w-8 h-8" />
              </div>
              <h4 className="font-manrope font-bold text-xl mb-3">Enterprise Security</h4>
              <p className="text-brand-charcoal">SOC 2, GDPR, HIPAA compliant with advanced encryption and access controls</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-trust-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="text-brand-trust-green w-8 h-8" />
              </div>
              <h4 className="font-manrope font-bold text-xl mb-3">Custom Integration</h4>
              <p className="text-brand-charcoal">Seamless integration with existing enterprise systems and workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-warning-amber/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-brand-warning-amber w-8 h-8" />
              </div>
              <h4 className="font-manrope font-bold text-xl mb-3">Scalable Performance</h4>
              <p className="text-brand-charcoal">Built for enterprise scale with 99.9% uptime and dedicated support</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleScheduleDemo}
            className="bg-black text-white px-12 py-4 rounded-xl text-lg font-light hover-scale hover:bg-gray-900"
          >
            Schedule Enterprise Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
