import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  Eye, 
  Calendar, 
  Share2, 
  Heart,
  Play,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  ShoppingCart,
  Check,
  X,
  Youtube,
  Instagram,
  Twitter
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Mock product data - in real app, fetch from API
  const productData = {
    1: {
      id: 1,
      title: 'iPhone 15 Pro Max Review',
      category: 'Smartphones',
      thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800'
      ],
      rating: 4.5,
      views: '2.1M',
      likes: '45K',
      reviewDate: '2024-01-15',
      price: '₹1,59,900',
      buyLinks: [
        { name: 'Apple Store', url: 'https://apple.com', price: '₹1,59,900' },
        { name: 'Amazon', url: 'https://amazon.in', price: '₹1,55,999' },
        { name: 'Flipkart', url: 'https://flipkart.com', price: '₹1,57,900' }
      ],
      videoUrl: 'https://youtube.com/watch?v=example',
      description: 'The iPhone 15 Pro Max represents Apple\'s latest flagship smartphone, featuring the new A17 Pro chip, titanium design, and advanced camera system. In this comprehensive review, we explore every aspect of this premium device.',
      specifications: {
        'Display': '6.7" Super Retina XDR OLED',
        'Processor': 'A17 Pro chip',
        'RAM': '8GB',
        'Storage': '256GB/512GB/1TB',
        'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
        'Battery': '4441 mAh',
        'OS': 'iOS 17',
        'Build': 'Titanium frame, Ceramic Shield front'
      },
      pros: [
        'Excellent camera system with 5x optical zoom',
        'Premium titanium build quality',
        'Outstanding performance with A17 Pro',
        'Great battery life',
        'USB-C finally arrives',
        'Action Button replaces mute switch'
      ],
      cons: [
        'Very expensive pricing',
        'No charger in the box',
        'Limited customization options',
        'Still no always-on display improvements'
      ],
      verdict: 'The iPhone 15 Pro Max is Apple\'s best smartphone yet, offering incredible cameras, premium build quality, and excellent performance. However, the high price makes it a luxury purchase that may not be justified for everyone.',
      score: {
        design: 9,
        performance: 10,
        camera: 9,
        battery: 8,
        value: 6,
        overall: 8.4
      }
    }
  };

  useEffect(() => {
    const productInfo = productData[id];
    if (productInfo) {
      setProduct(productInfo);
    }
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareLinks = [
    { name: 'Twitter', icon: Twitter, url: `https://twitter.com/intent/tweet?text=Check out this review: ${product?.title}` },
    { name: 'Facebook', icon: Instagram, url: `https://facebook.com/sharer/sharer.php?u=${window.location.href}` },
    { name: 'WhatsApp', icon: Share2, url: `https://wa.me/?text=Check out this review: ${window.location.href}` }
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-tech-orange hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-tech-orange text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1 text-white">
                      <Star className="fill-current text-yellow-400" size={16} />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    {product.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{product.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(product.reviewDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg mb-8"
            >
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'overview', name: 'Overview' },
                    { id: 'specs', name: 'Specifications' },
                    { id: 'pros-cons', name: 'Pros & Cons' },
                    { id: 'verdict', name: 'Verdict' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-tech-orange text-tech-orange'
                          : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        About this Review
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Video Player */}
                    <div className="relative bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                      <div className="aspect-video flex items-center justify-center">
                        <button className="flex items-center space-x-3 bg-tech-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors">
                          <Play size={20} fill="currentColor" />
                          <span className="font-medium">Watch Full Review</span>
                        </button>
                      </div>
                    </div>

                    {/* Score Breakdown */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Review Scores
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(product.score).map(([category, score]) => (
                          <div key={category} className="text-center">
                            <div className="text-2xl font-bold text-tech-orange mb-1">
                              {score}/10
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                              {category}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specs' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                          <span className="font-medium text-gray-900 dark:text-white">{key}</span>
                          <span className="text-gray-600 dark:text-gray-400">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'pros-cons' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                        <ThumbsUp size={20} className="mr-2" />
                        Pros
                      </h3>
                      <ul className="space-y-2">
                        {product.pros.map((pro, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                        <ThumbsDown size={20} className="mr-2" />
                        Cons
                      </h3>
                      <ul className="space-y-2">
                        {product.cons.map((con, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <X size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'verdict' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Final Verdict
                    </h3>
                    <div className="bg-gradient-to-r from-tech-orange/10 to-red-500/10 rounded-lg p-6 border-l-4 border-tech-orange">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {product.verdict}
                      </p>
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="text-3xl font-bold text-tech-orange">
                          {product.score.overall}/10
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Overall Score
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price & Buy Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Price & Availability
                </h3>
                <div className="text-2xl font-bold text-tech-orange mb-4">
                  {product.price}
                </div>
                <div className="space-y-3">
                  {product.buyLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-tech-orange transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {link.name}
                        </div>
                        <div className="text-sm text-tech-orange font-semibold">
                          {link.price}
                        </div>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-tech-orange" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Actions
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
                      isLiked
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20'
                    }`}
                  >
                    <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                    <span>{isLiked ? 'Liked' : 'Like'} ({product.likes})</span>
                  </button>

                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <Share2 size={18} />
                      <span>Share Review</span>
                    </button>

                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 z-10"
                      >
                        {shareLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
                          >
                            <social.icon size={16} />
                            <span className="text-sm">{social.name}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  <a
                    href={product.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Youtube size={18} />
                    <span>Watch on YouTube</span>
                  </a>
                </div>
              </motion.div>

              {/* Related Products */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Related Reviews
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Samsung Galaxy S24 Ultra', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200' },
                    { title: 'OnePlus 12 Review', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=200' }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={`/product/${index + 2}`}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                          {item.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
