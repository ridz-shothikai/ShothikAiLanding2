import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const offices = [
    {
      country: "United States",
      type: "Head Office",
      address: "1412 Broadway, New York, NY 10118, USA",
      phone: "+1 (555) 123-4567",
      email: "us@shothik.ai",
      flag: "🇺🇸"
    },
    {
      country: "United Kingdom", 
      type: "Corporate Office",
      address: "2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE",
      phone: "+44 20 1234 5678",
      email: "uk@shothik.ai",
      flag: "🇬🇧"
    },
    {
      country: "India",
      type: "Corporate Office", 
      address: "L2, 23 BLOCK L2, JYANGRA KRISHNAPUR, Jio Associate Agent, Jyanagra, New Town, North Twenty Four Parganas, West Bengal, 700059",
      phone: "+91 33 1234 5678",
      email: "india@shothik.ai",
      flag: "🇮🇳"
    },
    {
      country: "Bangladesh",
      type: "Corporate Office",
      address: "Tropical Alauddin Tower, Plot No. 32/C, Road-2, sector-3, Uttara, Dhaka 1230",
      phone: "+880 2 1234 5678", 
      email: "bd@shothik.ai",
      flag: "🇧🇩"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
            Connect with our global team. We're here to help you transform your business with AI.
          </p>
        </div>

        {/* Global Offices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="bg-gradient-to-br from-brand-accent-light to-white p-6 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{office.flag}</div>
                <h3 className="font-manrope font-bold text-xl text-black">{office.country}</h3>
                <div className="text-sm text-brand-secondary font-medium">{office.type}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-brand-charcoal leading-relaxed">{office.address}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <a href={`tel:${office.phone}`} className="text-brand-charcoal hover:text-brand-primary transition-colors">
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <a href={`mailto:${office.email}`} className="text-brand-charcoal hover:text-brand-primary transition-colors">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-brand-accent-light to-white p-8 rounded-2xl border border-slate-200/50">
          <div className="text-center mb-8">
            <h3 className="font-manrope font-bold text-2xl text-black mb-2">
              Start Your AI Journey
            </h3>
            <p className="text-brand-charcoal">
              Ready to transform your business? Let's discuss your needs.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-charcoal mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-charcoal mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-charcoal mb-2">
                How can we help?
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                placeholder="Tell us about your AI needs and goals..."
              ></textarea>
            </div>

            <Button className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3 text-lg font-medium rounded-lg transition-colors">
              Send Message
            </Button>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-black text-white px-8 py-4 rounded-2xl">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span className="font-medium">Global Support</span>
            </div>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@shothik.ai" className="hover:text-brand-primary transition-colors">
                hello@shothik.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}