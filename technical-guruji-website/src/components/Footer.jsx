import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Youtube, 
      href: 'https://youtube.com/@TechnicalGuruji', 
      color: 'hover:text-red-500',
      label: '23.7M Subscribers'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/technicalguruji', 
      color: 'hover:text-pink-500',
      label: '2.1M Followers'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/technicalguruji', 
      color: 'hover:text-blue-400',
      label: '1.2M Followers'
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    'Smartphones',
    'Laptops',
    'Gadgets',
    'Tech Reviews',
    'Unboxing',
    'Comparisons'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-tech-orange to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <span className="font-display font-bold text-xl">
                Technical Guruji
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's most trusted tech reviewer. Bringing you honest reviews, 
              unboxings, and tech insights in Hindi.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-slate-800 rounded-lg transition-colors duration-200 ${social.color}`}
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-tech-orange transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink 
                      size={14} 
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-tech-orange" />
                <span>contact@technicalguruji.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-tech-orange" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} className="text-tech-orange" />
                <span>New Delhi, India</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-tech-orange text-sm"
                />
                <button className="px-4 py-2 bg-tech-orange hover:bg-orange-600 rounded-r-lg transition-colors duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span> {currentYear} Technical Guruji. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for tech enthusiasts.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tech-orange via-red-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;
