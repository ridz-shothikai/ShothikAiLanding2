import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Download } from 'lucide-react';
import { Link } from 'wouter';
import { Analytics } from '@/lib/analytics';
import { YouTubeEmbed } from '@/components/ui/youtube-embed';

export default function EngineeringPage() {
  const handleWatchDemo = () => {
    Analytics.trackButtonClick('Watch Demo', 'engineering-page');
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
                <span className="text-white text-lg">🏗️</span>
              </div>
              <span className="font-manrope font-bold text-xl">Engineering Insights</span>
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
                AI-Powered Engineering Platform
              </div>
              <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight">
                Engineering Insights Platform
              </h1>
              <p className="text-xl text-brand-charcoal leading-relaxed">
                AI-powered engineering platform for engineers and EPC firms to manage, analyze, and collaborate on engineering drawings within secure, project-based workspaces.
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
              <YouTubeEmbed
                videoId="nSM89PTFTCQ"
                title="Engineering Insight Platform - Comprehensive Engineering Solutions"
                className="shadow-2xl"
              />
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
              Comprehensive engineering platform designed for modern engineering workflows and collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Smart Diagram Understanding</h3>
              <p className="text-brand-charcoal">Detects and labels components automatically in engineering drawings</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Instant BOM & Material Extraction</h3>
              <p className="text-brand-charcoal">Automatically generate Bills of Materials from engineering drawings</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-trust-green/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Essential Reports</h3>
              <p className="text-brand-charcoal">Structural summaries, load distribution analysis, and compliance reports</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-security-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Code Compliance Checker</h3>
              <p className="text-brand-charcoal">US, UK, and Indian engineering standards compliance verification</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-warning-amber/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Diagram Comparison Tool</h3>
              <p className="text-brand-charcoal">Compare different versions and highlight changes automatically</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">CAD Integration</h3>
              <p className="text-brand-charcoal">AutoCAD, Revit, Jira, and Google Drive integration</p>
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
              <div className="font-manrope font-thin text-6xl text-brand-primary mb-4">70%</div>
              <div className="text-xl font-semibold mb-2">Faster Analysis</div>
              <div className="text-brand-charcoal">Reduce time spent on drawing analysis and review</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-secondary mb-4">95%</div>
              <div className="text-xl font-semibold mb-2">Compliance Accuracy</div>
              <div className="text-brand-charcoal">Automated code compliance checking</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-trust-green mb-4">3x</div>
              <div className="text-xl font-semibold mb-2">Productivity Boost</div>
              <div className="text-brand-charcoal">Enhanced collaboration and workflow efficiency</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50">
            <h3 className="font-manrope font-bold text-2xl text-black mb-6 text-center">Target Audience</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏗️</div>
                <div className="font-semibold mb-2">EPC Firms</div>
                <div className="text-brand-charcoal text-sm">Engineering, procurement, and construction companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <div className="font-semibold mb-2">Engineering Consultancies</div>
                <div className="text-brand-charcoal text-sm">Design and consulting engineering firms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏭</div>
                <div className="font-semibold mb-2">Manufacturing</div>
                <div className="text-brand-charcoal text-sm">Industrial and manufacturing organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <div className="font-semibold mb-2">Educational Institutions</div>
                <div className="text-brand-charcoal text-sm">Engineering schools and research institutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Display Section */}
      <section className="py-24 bg-gradient-to-br from-brand-accent-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-4xl text-black mb-6">
              Engineering Insight Platform Overview
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              Comprehensive engineering solutions and technical insights
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200/50">
              <img 
                src="/brochures/153B6CC9-06CA-4861-BFD9-8AE147FD179A_1750662741539.jpeg" 
                alt="Engineering Platform Brochure"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="mt-6 text-center">
                <Button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/brochures/153B6CC9-06CA-4861-BFD9-8AE147FD179A_1750662741539.jpeg';
                    link.download = 'Engineering-Platform-Brochure.jpg';
                    link.click();
                  }}
                  className="bg-brand-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-brand-secondary transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download High Resolution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl mb-6">
            Ready to Revolutionize Your Engineering Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading engineering firms leveraging AI for smarter, faster project delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-brand-secondary">
              Schedule Demo
            </Button>
            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-white hover:text-black">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}