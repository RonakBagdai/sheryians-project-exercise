import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Eye, 
  Calendar,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Grid3X3,
  List
} from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = [
    { name: 'All', icon: Grid3X3, count: 24 },
    { name: 'Smartphones', icon: Smartphone, count: 12 },
    { name: 'Laptops', icon: Laptop, count: 6 },
    { name: 'Audio', icon: Headphones, count: 4 },
    { name: 'Wearables', icon: Watch, count: 2 },
  ];

  const products = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max Review',
      category: 'Smartphones',
      thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      rating: 4.5,
      views: '2.1M',
      reviewDate: '2024-01-15',
      price: '₹1,59,900',
      pros: ['Excellent camera', 'Premium build', 'Great performance'],
      cons: ['Expensive', 'No charger included'],
      verdict: 'Best premium iPhone with excellent cameras and performance',
      featured: true
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra',
      category: 'Smartphones',
      thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      rating: 4.7,
      views: '1.8M',
      reviewDate: '2024-01-10',
      price: '₹1,29,999',
      pros: ['S Pen functionality', 'Great display', 'Versatile cameras'],
      cons: ['Battery life could be better'],
      verdict: 'Excellent flagship with unique S Pen features'
    },
    {
      id: 3,
      title: 'MacBook Air M3 Review',
      category: 'Laptops',
      thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      rating: 4.6,
      views: '1.2M',
      reviewDate: '2024-01-08',
      price: '₹1,14,900',
      pros: ['Excellent performance', 'Great battery life', 'Silent operation'],
      cons: ['Limited ports', 'Expensive storage upgrades'],
      verdict: 'Perfect laptop for students and professionals'
    },
    {
      id: 4,
      title: 'OnePlus 12 Review',
      category: 'Smartphones',
      thumbnail: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500',
      rating: 4.3,
      views: '950K',
      reviewDate: '2024-01-05',
      price: '₹64,999',
      pros: ['Fast charging', 'Good performance', 'Value for money'],
      cons: ['Average cameras', 'No wireless charging'],
      verdict: 'Great flagship killer with excellent value'
    },
    {
      id: 5,
      title: 'Sony WH-1000XM5 Review',
      category: 'Audio',
      thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      rating: 4.8,
      views: '800K',
      reviewDate: '2024-01-03',
      price: '₹29,990',
      pros: ['Excellent noise cancellation', 'Great sound quality', 'Comfortable'],
      cons: ['Expensive', 'Not foldable'],
      verdict: 'Best noise-cancelling headphones in the market'
    },
    {
      id: 6,
      title: 'Dell XPS 13 Plus Review',
      category: 'Laptops',
      thumbnail: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      rating: 4.2,
      views: '650K',
      reviewDate: '2024-01-01',
      price: '₹1,25,000',
      pros: ['Premium design', 'Great display', 'Good performance'],
      cons: ['Poor battery life', 'Limited ports'],
      verdict: 'Beautiful laptop with some compromises'
    }
  ];

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'views':
        filtered.sort((a, b) => {
          const aViews = parseFloat(a.views.replace(/[KM]/g, '')) * (a.views.includes('M') ? 1000000 : 1000);
          const bViews = parseFloat(b.views.replace(/[KM]/g, '')) * (b.views.includes('M') ? 1000000 : 1000);
          return bViews - aViews;
        });
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Tech Reviews & Products
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Honest reviews of the latest gadgets and tech products
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-orange dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-orange dark:bg-slate-700 dark:text-white"
              >
                <option value="latest">Latest First</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-tech-orange text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-tech-orange'
                  }`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-tech-orange text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-tech-orange'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4 flex items-center">
                <Filter className="mr-2" size={20} />
                Categories
              </h3>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-tech-orange text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <category.icon size={18} className="mr-3" />
                      <span>{category.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.name
                        ? 'bg-white/20'
                        : 'bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-400'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products Grid/List */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-sm text-gray-600 dark:text-gray-400"
            >
              Showing {filteredProducts.length} products
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${viewMode}-${selectedCategory}-${sortBy}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-6'
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`card group cursor-pointer ${
                      viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                    }`}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className={`relative overflow-hidden rounded-lg ${
                        viewMode === 'list' ? 'md:w-64 md:flex-shrink-0' : ''
                      }`}>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                            viewMode === 'list' ? 'w-full h-48 md:h-full' : 'w-full h-48'
                          }`}
                        />
                        {product.featured && (
                          <div className="absolute top-2 left-2 bg-tech-orange text-white text-xs px-2 py-1 rounded-full font-medium">
                            Featured
                          </div>
                        )}
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {product.price}
                        </div>
                      </div>

                      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-tech-orange bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="text-yellow-400 fill-current" size={16} />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {product.rating}
                            </span>
                          </div>
                        </div>

                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-tech-orange transition-colors">
                          {product.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                          {product.verdict}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Eye size={14} />
                              <span>{product.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{formatDate(product.reviewDate)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
