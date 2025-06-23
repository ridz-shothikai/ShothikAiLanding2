import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Download, Check } from 'lucide-react';
import { Link } from 'wouter';
import { Analytics } from '@/lib/analytics';
import { YouTubeEmbed } from '@/components/ui/youtube-embed';

export default function DoclyzePage() {
  const handleWatchDemo = () => {
    Analytics.trackButtonClick('Watch Demo', 'doclyze-page');
  };

  const handleGetStarted = () => {
    Analytics.trackButtonClick('Get Started', 'doclyze-page');
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
                <span className="text-white text-lg">📄</span>
              </div>
              <span className="font-manrope font-bold text-xl">Doclyze</span>
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
                Enterprise Document Management
              </div>
              <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight">
                Doclyze: Intelligent Document Management
              </h1>
              <p className="text-xl text-brand-charcoal leading-relaxed">
                AI-powered platform for managing digital and scanned documents, organizing them into "bins," assigning unique IDs, and enabling instant interaction via a smart chat system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWatchDemo}
                  className="bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-brand-secondary"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
                <Button 
                  onClick={handleGetStarted}
                  className="bg-black text-white px-8 py-4 rounded-xl text-lg font-light hover-scale hover:bg-gray-900"
                >
                  Get Started
                </Button>
              </div>
            </div>
            
            {/* Video Player */}
            <div className="relative">
              <YouTubeEmbed
                videoId="YOUR_DOCLYZE_VIDEO_ID" // Replace with your actual DocLyze demo video ID
                title="DocLyze Platform Demo - AI-Powered Document Management"
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
              Comprehensive document management solution designed to eliminate manual sorting and provide instant access to information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Smart File Reading & Auto-Categorization</h3>
              <p className="text-brand-charcoal">Automatically reads and categorizes documents using advanced AI algorithms</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔖</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Unique Document IDs & Version Control</h3>
              <p className="text-brand-charcoal">Every document gets a unique identifier with comprehensive version tracking</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-trust-green/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Conversational AI Assistant</h3>
              <p className="text-brand-charcoal">Chat with your documents to find information instantly</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-security-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Automated Compliance & Validation</h3>
              <p className="text-brand-charcoal">Ensure documents meet compliance requirements automatically</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-warning-amber/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Google Drive Integration</h3>
              <p className="text-brand-charcoal">Seamless integration with existing Google Drive workflows</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Advanced Search & Retrieval</h3>
              <p className="text-brand-charcoal">Find any document instantly with intelligent search capabilities</p>
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
              <div className="font-manrope font-thin text-6xl text-brand-primary mb-4">80%</div>
              <div className="text-xl font-semibold mb-2">Faster Document Access</div>
              <div className="text-brand-charcoal">Reduce time spent searching for documents</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-secondary mb-4">50%</div>
              <div className="text-xl font-semibold mb-2">Fewer Errors</div>
              <div className="text-brand-charcoal">Eliminate manual filing and categorization mistakes</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-trust-green mb-4">24/7</div>
              <div className="text-xl font-semibold mb-2">AI Assistant</div>
              <div className="text-brand-charcoal">Always available to help with document queries</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50">
            <h3 className="font-manrope font-bold text-2xl text-black mb-6 text-center">Target Audience</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <div className="font-semibold mb-2">Enterprise Organizations</div>
                <div className="text-brand-charcoal text-sm">Large corporations with extensive document workflows</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚖️</div>
                <div className="font-semibold mb-2">Legal Firms</div>
                <div className="text-brand-charcoal text-sm">Law firms managing case files and legal documents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏥</div>
                <div className="font-semibold mb-2">Healthcare Systems</div>
                <div className="text-brand-charcoal text-sm">Medical facilities with patient records and compliance needs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏦</div>
                <div className="font-semibold mb-2">Financial Services</div>
                <div className="text-brand-charcoal text-sm">Banks and financial institutions with regulatory requirements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl mb-6">
            Ready to Transform Your Document Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations who have streamlined their document workflows with Doclyze
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