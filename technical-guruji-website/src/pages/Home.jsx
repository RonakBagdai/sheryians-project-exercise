import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Users, 
  Award, 
  TrendingUp, 
  Star,
  ArrowRight,
  Youtube,
  Smartphone,
  Laptop,
  Headphones
} from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, value: '23.7M', label: 'YouTube Subscribers' },
    { icon: Play, value: '2.5B+', label: 'Total Views' },
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: TrendingUp, value: '500+', label: 'Products Reviewed' },
  ];

  const latestVideos = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max Review - Is It Worth ₹1,59,900?',
      thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      views: '2.1M',
      duration: '12:45',
      uploadedAt: '2 days ago'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max',
      thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      views: '1.8M',
      duration: '15:30',
      uploadedAt: '5 days ago'
    },
    {
      id: 3,
      title: 'Best Budget Smartphones Under ₹20,000 in 2024',
      thumbnail: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
      views: '3.2M',
      duration: '18:20',
      uploadedAt: '1 week ago'
    }
  ];

  const categories = [
    { icon: Smartphone, name: 'Smartphones', count: '150+ Reviews' },
    { icon: Laptop, name: 'Laptops', count: '80+ Reviews' },
    { icon: Headphones, name: 'Audio', count: '60+ Reviews' },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      text: 'Technical Guruji helped me choose the perfect smartphone. His reviews are honest and detailed!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      text: 'Best tech channel in Hindi. Gaurav bhai explains everything so clearly!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      text: 'Trusted reviews, no nonsense. Been following for 5+ years!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              India's Most Trusted
              <span className="block gradient-text">
                Tech Reviewer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Honest reviews, detailed unboxings, and tech insights in Hindi. 
              Helping millions make better tech decisions since 2015.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/products" className="btn-primary text-lg px-8 py-4">
                Explore Reviews
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <a 
                href="https://youtube.com/@TechnicalGuruji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 flex items-center"
              >
                <Youtube className="mr-2" size={20} />
                Subscribe Now
              </a>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-tech-orange/20 rounded-lg mb-3">
                  <stat.icon className="text-tech-orange" size={24} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Latest Videos Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Latest Tech Reviews
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay updated with the newest gadgets and honest reviews
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-tech-orange rounded-full flex items-center justify-center">
                      <Play className="text-white ml-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{video.views}</span>
                    <span>{video.uploadedAt}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://youtube.com/@TechnicalGuruji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              View All Videos
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Review Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive reviews across all tech categories
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center p-8 group hover:bg-tech-orange hover:text-white transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-orange/10 group-hover:bg-white/20 rounded-lg mb-4 transition-colors duration-300">
                  <category.icon className="text-tech-orange group-hover:text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 group-hover:text-white/80">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              What Viewers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Trusted by millions of tech enthusiasts
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-orange to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Stay Updated with Latest Tech
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get notified about new reviews and tech insights
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-white text-tech-orange font-semibold rounded-r-lg sm:rounded-l-none hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
