import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Download } from 'lucide-react';
import { Link } from 'wouter';
import { Analytics } from '@/lib/analytics';

export default function SmartCrawlPage() {
  const handleWatchDemo = () => {
    Analytics.trackButtonClick('Watch Demo', 'smartcrawl-page');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="border-b border-slate-200/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Ecosystem</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🕷️</span>
              </div>
              <span className="font-manrope font-bold text-xl">SmartCrawl</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-brand-accent-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium">
                Intelligent Web Crawling Engine
              </div>
              <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight">
                SmartCrawl: Transform Web Data into Insights
              </h1>
              <p className="text-xl text-brand-charcoal leading-relaxed">
                Enterprise platform designed to transform web data into structured insights using a modular, scalable, and API-first microservices architecture. Supports RAG and CAG for enhanced reasoning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWatchDemo}
                  className="bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-brand-secondary"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
                <Button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-gray-900">
                  Get Started
                </Button>
              </div>
            </div>
            
            {/* Video Player */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-brand-accent-light to-brand-accent-highlight rounded-2xl border border-slate-200/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform">
                    <Play className="text-white w-8 h-8 ml-1" />
                  </div>
                  <p className="text-brand-charcoal font-medium">SmartCrawl Engine Demo</p>
                  <p className="text-brand-light-gray text-sm">4:15 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-4xl text-black mb-6">Key Features & Capabilities</h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              Advanced web crawling and data extraction capabilities with unmatched accuracy and semantic understanding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Scalable Recursive Crawling</h3>
              <p className="text-brand-charcoal">Up to 10 levels deep crawling with intelligent link discovery and filtering</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Dynamic Content Handling</h3>
              <p className="text-brand-charcoal">Handle JavaScript-heavy sites and dynamic content with advanced rendering</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-trust-green/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Automated Data Extraction</h3>
              <p className="text-brand-charcoal">Up to 92% accuracy in extracting structured data from web pages</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-security-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Semantic Understanding & Analysis</h3>
              <p className="text-brand-charcoal">99.7% semantic accuracy in understanding page content and context</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-warning-amber/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Structured Data Export</h3>
              <p className="text-brand-charcoal">Export to JSON, CSV, Markdown, and other formats for easy integration</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">API-First Architecture</h3>
              <p className="text-brand-charcoal">Modular microservices design for seamless integration and scaling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-24 bg-gradient-to-br from-brand-accent-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-4xl text-black mb-6">Business Impact & Benefits</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-primary mb-4">92%</div>
              <div className="text-xl font-semibold mb-2">Extraction Accuracy</div>
              <div className="text-brand-charcoal">Industry-leading precision in data extraction</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-secondary mb-4">99.7%</div>
              <div className="text-xl font-semibold mb-2">Semantic Precision</div>
              <div className="text-brand-charcoal">Unmatched understanding of content context</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-trust-green mb-4">10x</div>
              <div className="text-xl font-semibold mb-2">Faster Processing</div>
              <div className="text-brand-charcoal">Compared to traditional crawling methods</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50">
            <h3 className="font-manrope font-bold text-2xl text-black mb-6 text-center">Target Audience</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <div className="font-semibold mb-2">Market Research Firms</div>
                <div className="text-brand-charcoal text-sm">Companies analyzing market trends and competitor data</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <div className="font-semibold mb-2">Enterprise Intelligence</div>
                <div className="text-brand-charcoal text-sm">Organizations needing comprehensive web data analysis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔍</div>
                <div className="font-semibold mb-2">Due Diligence Teams</div>
                <div className="text-brand-charcoal text-sm">Financial and legal teams conducting research</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📰</div>
                <div className="font-semibold mb-2">Media & Publishing</div>
                <div className="text-brand-charcoal text-sm">Content aggregators and news organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl mb-6">
            Ready to Transform Web Data into Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations leveraging SmartCrawl for competitive intelligence and market research
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-brand-secondary">
              Schedule Demo
            </Button>
            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-white hover:text-black">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}