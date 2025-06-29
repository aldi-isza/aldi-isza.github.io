import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import { SocialLink } from '../types';

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/aldiisza",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aldiisza",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/aldiisza",
      icon: "twitter"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/aldiisza",
      icon: "instagram"
    }
  ];

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Aldi Isza</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mobile Developer passionate about creating exceptional user experiences 
              and building high-performance applications that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow on ${social.name}`}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <p>📧 aldi.isza@example.com</p>
              <p>📱 +62 812 3456 7890</p>
              <p>📍 Jakarta, Indonesia</p>
            </div>
            
            <div className="mt-6">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                💬 WhatsApp Me
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Aldi Isza. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="mx-2 text-red-500" size={16} />
              <span>using React & TypeScript</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm rounded-lg transition-all duration-200"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;