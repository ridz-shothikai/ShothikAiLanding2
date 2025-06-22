import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Download } from 'lucide-react';
import { Link } from 'wouter';
import { Analytics } from '@/lib/analytics';

export default function TeleportPage() {
  const handleWatchDemo = () => {
    Analytics.trackButtonClick('Watch Demo', 'teleport-page');
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
                <span className="text-white text-lg">🩺</span>
              </div>
              <span className="font-manrope font-bold text-xl">Teleport</span>
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
                AI-Powered Medical Platform
              </div>
              <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-black leading-tight">
                Teleport: Doctor-Patient Conversation Platform
              </h1>
              <p className="text-xl text-brand-charcoal leading-relaxed">
                AI-powered platform to record, transcribe, and analyze doctor-patient conversations, aiming to reduce time spent on manual note-taking and documentation.
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
                  <p className="text-brand-charcoal font-medium">Teleport Medical Demo</p>
                  <p className="text-brand-light-gray text-sm">4:52 minutes</p>
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
              Revolutionary medical documentation platform designed to enhance patient care through intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Speech Recognition</h3>
              <p className="text-brand-charcoal">Real-time transcription with speaker identification and 99% accuracy</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">AI Medical Insights</h3>
              <p className="text-brand-charcoal">Automatic summaries, symptom detection, and treatment suggestions</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-trust-green/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Organized History</h3>
              <p className="text-brand-charcoal">Saved, searchable, and exportable patient session records</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-security-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Multilingual Support</h3>
              <p className="text-brand-charcoal">English and Bengali language support with expanding language options</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-warning-amber/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">HIPAA Compliance</h3>
              <p className="text-brand-charcoal">Full healthcare data protection and privacy compliance</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-4">Real-time Processing</h3>
              <p className="text-brand-charcoal">Instant transcription and analysis during patient consultations</p>
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
              <div className="font-manrope font-thin text-6xl text-brand-primary mb-4">99%</div>
              <div className="text-xl font-semibold mb-2">Transcription Accuracy</div>
              <div className="text-brand-charcoal">Industry-leading precision in medical conversation capture</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-secondary mb-4">3</div>
              <div className="text-xl font-semibold mb-2">Hours Saved Daily</div>
              <div className="text-brand-charcoal">Per doctor through automated documentation</div>
            </div>
            <div className="text-center">
              <div className="font-manrope font-thin text-6xl text-brand-trust-green mb-4">100%</div>
              <div className="text-xl font-semibold mb-2">HIPAA Compliant</div>
              <div className="text-brand-charcoal">Full healthcare data protection and security</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/50">
            <h3 className="font-manrope font-bold text-2xl text-black mb-6 text-center">Target Audience</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏥</div>
                <div className="font-semibold mb-2">Hospitals</div>
                <div className="text-brand-charcoal text-sm">Large healthcare systems and medical centers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👨‍⚕️</div>
                <div className="font-semibold mb-2">Private Practices</div>
                <div className="text-brand-charcoal text-sm">Independent physicians and specialist clinics</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <div className="font-semibold mb-2">Telehealth Platforms</div>
                <div className="text-brand-charcoal text-sm">Remote healthcare service providers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌍</div>
                <div className="font-semibold mb-2">Global Healthcare</div>
                <div className="text-brand-charcoal text-sm">International medical organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl mb-6">
            Ready to Transform Medical Documentation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join healthcare providers worldwide who are enhancing patient care with Teleport
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