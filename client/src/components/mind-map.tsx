import { useState } from 'react';
import { Analytics } from '@/lib/analytics';

interface MindMapProps {
  onNodeClick: (nodeType: string) => void;
}

interface PanelData {
  title: string;
  description: string;
  features: string[];
}

export default function MindMap({ onNodeClick }: MindMapProps) {
  const [panelData, setPanelData] = useState<PanelData | null>(null);

  const updatePanel = (data: PanelData) => {
    setPanelData(data);
  };

  const showCentralHub = () => {
    Analytics.trackMindMapInteraction('central_hub');
    updatePanel({
      title: 'Shothik AI Ecosystem',
      description: 'Our comprehensive AI platform serves both individual creators and enterprise organizations with cutting-edge intelligent solutions.',
      features: [
        'Unified AI Infrastructure',
        'Cross-Platform Integration', 
        'Scalable Architecture',
        'Advanced Security'
      ]
    });
  };

  const showB2CDetails = () => {
    Analytics.trackMindMapInteraction('b2c');
    onNodeClick('b2c');
    updatePanel({
      title: 'B2C - Shothik AI Studio',
      description: 'Empower your creativity with AI-powered tools designed for content creators, artists, and entrepreneurs.',
      features: [
        'AI Content Generation',
        'Smart Design Assistant',
        'Collaborative Workspace',
        'Creative Analytics'
      ]
    });
  };

  const showB2BDetails = () => {
    Analytics.trackMindMapInteraction('b2b');
    onNodeClick('b2b');
    updatePanel({
      title: 'B2B - Enterprise Solutions',
      description: 'Scale your business with enterprise-grade AI solutions designed for security, compliance, and performance.',
      features: [
        'Enterprise Security',
        'Custom Integrations',
        'Advanced Analytics',
        'Dedicated Support'
      ]
    });
  };

  const showFeature = (featureName: string) => {
    Analytics.trackMindMapInteraction(`feature_${featureName}`);
    const featureData: Record<string, PanelData> = {
      'creative': {
        title: 'Creative AI Tools',
        description: 'Advanced creative capabilities powered by cutting-edge AI models.',
        features: ['Image Generation', 'Content Writing', 'Design Automation', 'Style Transfer']
      },
      'analytics': {
        title: 'AI Analytics',
        description: 'Deep insights and predictive analytics to drive business decisions.',
        features: ['Predictive Modeling', 'Data Visualization', 'Performance Tracking', 'Custom Reports']
      },
      'automation': {
        title: 'Process Automation',
        description: 'Streamline workflows with intelligent automation capabilities.',
        features: ['Workflow Automation', 'Task Scheduling', 'Integration Hub', 'Smart Triggers']
      },
      'security': {
        title: 'Security & Compliance',
        description: 'Enterprise-grade security with comprehensive compliance support.',
        features: ['Data Encryption', 'Access Control', 'Audit Logging', 'Compliance Reporting']
      }
    };
    
    updatePanel(featureData[featureName]);
  };

  return (
    <section id="ecosystem" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-manrope font-bold text-4xl lg:text-6xl tracking-tight text-black mb-6">
            Our AI Ecosystem
          </h2>
          <p className="font-inter text-xl text-brand-charcoal max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI solutions designed for both individual creators and enterprise organizations
          </p>
        </div>

        {/* Interactive Mind Map */}
        <div className="relative bg-gradient-to-br from-brand-accent-light to-white rounded-3xl p-8 lg:p-16 border border-slate-200/50">
          <svg className="w-full h-96 lg:h-[600px]" viewBox="0 0 1000 600">
            {/* Connection lines */}
            <line x1="500" y1="300" x2="250" y2="200" stroke="hsl(174, 100%, 33%)" strokeWidth="2" className="mind-map-connection" />
            <line x1="500" y1="300" x2="750" y2="200" stroke="hsl(174, 100%, 33%)" strokeWidth="2" className="mind-map-connection" />
            
            {/* Feature connection lines */}
            <line x1="250" y1="200" x2="150" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="250" y1="200" x2="350" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="750" y1="200" x2="650" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="750" y1="200" x2="850" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            
            {/* Central hub */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={showCentralHub}>
              <circle cx="500" cy="300" r="80" fill="hsl(175, 100%, 16%)" />
              <text x="500" y="295" textAnchor="middle" fill="white" className="text-lg font-bold">Shothik AI</text>
              <text x="500" y="315" textAnchor="middle" fill="white" className="text-sm">Ecosystem</text>
            </g>
            
            {/* B2C Node */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={showB2CDetails}>
              <circle cx="250" cy="200" r="60" fill="hsl(174, 100%, 33%)" />
              <text x="250" y="195" textAnchor="middle" fill="white" className="text-base font-semibold">B2C</text>
              <text x="250" y="210" textAnchor="middle" fill="white" className="text-sm">Studio</text>
            </g>
            
            {/* B2B Node */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={showB2BDetails}>
              <circle cx="750" cy="200" r="60" fill="hsl(213, 94%, 68%)" />
              <text x="750" y="195" textAnchor="middle" fill="white" className="text-base font-semibold">B2B</text>
              <text x="750" y="210" textAnchor="middle" fill="white" className="text-sm">Enterprise</text>
            </g>
            
            {/* Feature nodes */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('creative')}>
              <circle cx="150" cy="120" r="30" fill="hsl(142, 71%, 45%)" />
              <text x="150" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Creative</text>
            </g>
            
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('analytics')}>
              <circle cx="350" cy="120" r="30" fill="hsl(38, 92%, 50%)" />
              <text x="350" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Analytics</text>
            </g>
            
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('automation')}>
              <circle cx="650" cy="120" r="30" fill="hsl(258, 90%, 66%)" />
              <text x="650" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Automation</text>
            </g>
            
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('security')}>
              <circle cx="850" cy="120" r="30" fill="hsl(0, 84%, 60%)" />
              <text x="850" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Security</text>
            </g>
          </svg>
          
          {/* Interactive panel */}
          <div className={`mt-12 p-8 bg-white rounded-2xl border border-slate-200/50 transition-all duration-500 ${
            panelData ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'
          }`}>
            {panelData ? (
              <div>
                <div className="text-center mb-6">
                  <h3 className="font-manrope font-bold text-2xl text-black mb-3">{panelData.title}</h3>
                  <p className="text-brand-charcoal text-lg">{panelData.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {panelData.features.map((feature, index) => (
                    <div key={index} className="bg-brand-accent-light p-4 rounded-xl text-center">
                      <div className="text-brand-primary font-medium">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-brand-light-gray">Click on any node above to explore our solutions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
