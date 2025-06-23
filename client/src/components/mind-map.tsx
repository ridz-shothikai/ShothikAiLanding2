import { useState } from 'react';
import { useLocation } from 'wouter';
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
  const [, setLocation] = useLocation();

  const updatePanel = (data: PanelData) => {
    setPanelData(data);
  };

  const showCentralHub = () => {
    try {
      Analytics.trackMindMapInteraction('central_hub');
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
    
    updatePanel({
      title: 'Shothik AI Ecosystem',
      description: 'Two comprehensive divisions serving different market segments with cutting-edge intelligent solutions.',
      features: [
        'Enterprise Solutions',
        'Shothik Studio',
        'Unified AI Infrastructure',
        'Cross-Platform Integration'
      ]
    });
  };

  const showEnterpriseDetails = () => {
    try {
      Analytics.trackMindMapInteraction('enterprise');
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
    
    onNodeClick('b2b');
    updatePanel({
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI platforms designed for large organizations and businesses.',
      features: [
        'DocLyze - Document Management',
        'SmartCrawl - Data Extraction',
        'Engineering Insight - Technical Solutions',
        'Investigation Platform - Law Enforcement',
        'Teleport - Remote Access Solutions'
      ]
    });
  };

  const showStudioDetails = () => {
    try {
      Analytics.trackMindMapInteraction('studio');
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
    
    onNodeClick('b2c');
    updatePanel({
      title: 'Shothik Studio',
      description: 'Creative AI tools and platforms for individual creators and small teams.',
      features: [
        'Creative Content Tools',
        'Personal AI Assistant',
        'Smart Automation',
        'Creative Workflows'
      ]
    });
  };

  const showB2CDetails = () => {
    showStudioDetails();
  };

  const showB2BDetails = () => {
    showEnterpriseDetails();
  };

  const showFeature = (featureName: string) => {
    Analytics.trackMindMapInteraction(`feature_${featureName}`);
    
    // Navigation to dedicated platform pages
    const platformRoutes: Record<string, string> = {
      'doclyze': '/platforms/doclyze',
      'smartcrawl': '/platforms/smartcrawl',
      'engineering': '/platforms/engineering',
      'teleport': '/platforms/teleport',
      'police': '/platforms/police'
    };

    if (platformRoutes[featureName]) {
      setLocation(platformRoutes[featureName]);
      return;
    }

    // For individual solution features, show panel data
    const featureData: Record<string, PanelData> = {
      'writing': {
        title: 'Smart Writing Tools',
        description: 'AI-powered writing assistance for content creation and editing.',
        features: ['Content Generation', 'Grammar Correction', 'Style Enhancement', 'Multi-language Support']
      },
      'research': {
        title: 'Research Assistant',
        description: 'Intelligent research and information gathering capabilities.',
        features: ['Data Collection', 'Source Verification', 'Summary Generation', 'Citation Management']
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
            
            {/* Feature connection lines for Individual Solutions */}
            <line x1="250" y1="200" x2="150" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="250" y1="200" x2="350" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            
            {/* Feature connection lines for Enterprise Solutions */}
            <line x1="750" y1="200" x2="580" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="750" y1="200" x2="680" y2="80" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="750" y1="200" x2="820" y2="80" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="750" y1="200" x2="890" y2="120" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            <line x1="750" y1="200" x2="780" y2="400" stroke="hsl(174, 100%, 33%)" strokeWidth="1" opacity="0.5" className="mind-map-connection" />
            
            {/* Central hub */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={showCentralHub}>
              <circle cx="500" cy="300" r="80" fill="hsl(175, 100%, 16%)" />
              <text x="500" y="295" textAnchor="middle" fill="white" className="text-lg font-bold">Shothik AI</text>
              <text x="500" y="315" textAnchor="middle" fill="white" className="text-sm">Ecosystem</text>
            </g>
            
            {/* Shothik Studio Node */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={showStudioDetails}>
              <circle cx="250" cy="200" r="60" fill="hsl(174, 100%, 33%)" />
              <text x="250" y="192" textAnchor="middle" fill="white" className="text-sm font-semibold">Shothik</text>
              <text x="250" y="208" textAnchor="middle" fill="white" className="text-sm">Studio</text>
            </g>
            
            {/* Enterprise Solutions Node */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={showB2BDetails}>
              <circle cx="750" cy="200" r="60" fill="hsl(213, 94%, 68%)" />
              <text x="750" y="192" textAnchor="middle" fill="white" className="text-sm font-semibold">Enterprise</text>
              <text x="750" y="208" textAnchor="middle" fill="white" className="text-sm">Solutions</text>
            </g>
            
            {/* Individual Solution Features */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('writing')}>
              <circle cx="150" cy="120" r="30" fill="hsl(142, 71%, 45%)" />
              <text x="150" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Writing</text>
            </g>
            
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('research')}>
              <circle cx="350" cy="120" r="30" fill="hsl(38, 92%, 50%)" />
              <text x="350" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Research</text>
            </g>
            
            {/* Enterprise Platform Nodes */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('doclyze')}>
              <circle cx="580" cy="120" r="28" fill="hsl(258, 90%, 66%)" />
              <text x="580" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Doclyze</text>
            </g>
            
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('smartcrawl')}>
              <circle cx="680" cy="80" r="28" fill="hsl(0, 84%, 60%)" />
              <text x="680" y="85" textAnchor="middle" fill="white" className="text-xs font-medium">SmartCrawl</text>
            </g>
            
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('engineering')}>
              <circle cx="820" cy="80" r="28" fill="hsl(45, 93%, 47%)" />
              <text x="820" y="85" textAnchor="middle" fill="white" className="text-xs font-medium">Engineering</text>
            </g>
            
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('teleport')}>
              <circle cx="890" cy="120" r="28" fill="hsl(195, 85%, 41%)" />
              <text x="890" y="125" textAnchor="middle" fill="white" className="text-xs font-medium">Teleport</text>
            </g>
            
            {/* Police Investigation Suite Node */}
            <g className="mind-map-node cursor-pointer hover:opacity-80" onClick={() => showFeature('police')}>
              <circle cx="780" cy="400" r="28" fill="hsl(280, 85%, 60%)" />
              <text x="780" y="405" textAnchor="middle" fill="white" className="text-xs font-medium">Police</text>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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
