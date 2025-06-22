import { Brain } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Studio", href: "#" },
        { name: "Enterprise", href: "#" },
        { name: "API", href: "#" },
        { name: "Mobile", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" }
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
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
        { name: "Cookies", href: "#" }
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
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
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
