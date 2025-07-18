import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Play, 
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  MessageSquare,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2015',
      event: 'Started Technical Guruji YouTube Channel',
      description: 'Gaurav Chaudhary embarked on his journey to make tech simple for India.',
      icon: Play,
    },
    {
      year: '2017',
      event: 'Crossed 1 Million Subscribers',
      description: 'A major milestone, becoming one of the fastest-growing tech channels globally.',
      icon: Users,
    },
    {
      year: '2018',
      event: 'Featured in Forbes 30 Under 30 Asia',
      description: 'Recognized for his influence and entrepreneurial success in the media industry.',
      icon: Award,
    },
    {
      year: '2020',
      event: 'Reached 20 Million Subscribers',
      description: 'Solidified his position as India\'s largest tech YouTuber.',
      icon: Users,
    },
    {
      year: 'Present',
      event: 'Leading Tech Influencer',
      description: 'Continues to provide valuable tech insights to millions of viewers worldwide.',
      icon: Briefcase,
    },
  ];

  const values = [
    { 
      icon: Heart,
      title: 'Honesty & Trust',
      description: 'Providing unbiased, transparent, and reliable reviews to build a foundation of trust.' 
    },
    { 
      icon: MessageSquare,
      title: 'Simplicity',
      description: 'Breaking down complex technical topics into easy-to-understand content for everyone.'
    },
    { 
      icon: Users,
      title: 'Community First',
      description: 'Fostering a supportive and engaging community of tech enthusiasts.'
    },
  ];

  const testimonials = [
    {
      name: 'Aarav Singh',
      role: 'Long-time Subscriber',
      text: 'Gaurav Chaudhary is a true inspiration. His journey shows that with passion and hard work, anything is possible. His reviews are my go-to before any tech purchase.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Meera Iyer',
      role: 'Tech Enthusiast',
      text: 'I\'ve been following Technical Guruji for years. The clarity and honesty in his videos are unmatched. He makes technology accessible to everyone in India.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
  ];

  const socialLinks = [
      { name: 'YouTube', url: 'https://youtube.com/@TechnicalGuruji', icon: Youtube },
      { name: 'Twitter', url: 'https://twitter.com/technicalguruji', icon: Twitter },
      { name: 'Instagram', url: 'https://instagram.com/technicalguruji', icon: Instagram },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-bold mb-4">About Technical Guruji</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">The journey of Gaurav Chaudhary, India's most trusted tech guide.</motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726a?w=500&q=80" alt="Gaurav Chaudhary" className="rounded-lg shadow-2xl"/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-display mb-4 text-tech-orange">From Dubai to the World</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Gaurav Chaudhary, known as Technical Guruji, started his YouTube channel in 2015 from Dubai. With a passion for technology and a unique way of explaining things in Hindi, he quickly connected with millions of viewers across India and the world.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              His mission has always been to make technology accessible and understandable for everyone. Today, he is a leading voice in the tech community, known for his honest reviews and in-depth analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Journey & Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-tech-orange mb-2">{item.event}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-tech-orange rounded-full flex items-center justify-center text-white">
                  <item.icon size={24} />
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                   <p className="text-2xl font-bold">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-orange/10 rounded-lg mb-4">
                  <value.icon className="text-tech-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">From the Community</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="card p-6 flex items-start space-x-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full"/>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{testimonial.text}"</p>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Connect with Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Follow Technical Guruji on social media for the latest updates.</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-tech-orange transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <link.icon size={32} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
