import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Youtube, Instagram, Twitter, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@TechnicalGuruji', color: 'text-red-500' },
    { icon: Instagram, href: 'https://instagram.com/technicalguruji', color: 'text-pink-500' },
    { icon: Twitter, href: 'https://twitter.com/technicalguruji', color: 'text-blue-400' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-tech-orange to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TG</span>
            </div>
            <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
              Technical Guruji
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-tech-orange'
                    : 'text-gray-700 dark:text-gray-300 hover:text-tech-orange'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-tech-orange"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Links & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-110 transition-transform duration-200`}
              >
                <social.icon size={20} />
              </a>
            ))}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
            {currentUser ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <User size={16} />
                  <span>{currentUser.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="btn-primary text-sm"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-tech-orange transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-tech-orange bg-orange-50 dark:bg-orange-900/20 rounded-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-tech-orange'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:scale-110 transition-transform duration-200`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-600"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-sm"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
