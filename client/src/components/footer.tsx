import { Brain } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Shothik Studio", href: "#" },
        { name: "Enterprise Solutions", href: "#" },
        { name: "DocLyze", href: "/platforms/doclyze" },
        { name: "SmartCrawl", href: "/platforms/smartcrawl" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" },
        { name: "Community", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Global Offices",
      offices: [
        { 
          country: "United States", 
          address: "1412 Broadway, New York, NY 10118",
          type: "Head Office"
        },
        { 
          country: "United Kingdom", 
          address: "2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE",
          type: "Corporate Office"
        },
        { 
          country: "India", 
          address: "L2, 23 BLOCK L2, JYANGRA KRISHNAPUR, New Town, West Bengal, 700059",
          type: "Corporate Office"
        },
        { 
          country: "Bangladesh", 
          address: "Tropical Alauddin Tower, Plot No. 32/C, Road-2, Sector-3, Uttara, Dhaka 1230",
          type: "Corporate Office"
        }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaDiscord, href: "#", label: "Discord" }
  ];

  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
              <Brain className="text-white w-6 h-6" />
            </div>
            <span className="font-manrope font-bold text-3xl">Shothik AI</span>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Democratizing AI through intelligent solutions for creators and enterprises worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-manrope font-bold text-lg mb-4">{section.title}</h4>
              {section.links ? (
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : section.offices ? (
                <div className="space-y-4 text-gray-400">
                  {section.offices.map((office, officeIndex) => (
                    <div key={officeIndex} className="text-sm">
                      <div className="font-semibold text-white mb-1">{office.country}</div>
                      <div className="text-xs text-gray-500 mb-1">{office.type}</div>
                      <div className="leading-relaxed">{office.address}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Shothik AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
