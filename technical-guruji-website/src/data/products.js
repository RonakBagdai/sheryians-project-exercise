export const products = [
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
  },
  {
    id: 7,
    title: 'Nothing Phone (2a) Review',
    category: 'Smartphones',
    thumbnail: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500',
    rating: 4.1,
    views: '1.5M',
    reviewDate: '2023-12-28',
    price: '₹25,999',
    pros: ['Unique design', 'Good performance', 'Clean software'],
    cons: ['Average cameras', 'Build quality concerns'],
    verdict: 'Stylish mid-range phone with unique appeal'
  },
  {
    id: 8,
    title: 'iPad Pro M4 Review',
    category: 'Tablets',
    thumbnail: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    rating: 4.4,
    views: '900K',
    reviewDate: '2023-12-25',
    price: '₹99,900',
    pros: ['Powerful M4 chip', 'Excellent display', 'Great for creativity'],
    cons: ['Expensive', 'Limited by iPadOS'],
    verdict: 'Most powerful tablet but software limitations remain'
  }
];

export const categories = [
  { name: 'All', icon: 'Grid3X3', count: products.length },
  { name: 'Smartphones', icon: 'Smartphone', count: products.filter(p => p.category === 'Smartphones').length },
  { name: 'Laptops', icon: 'Laptop', count: products.filter(p => p.category === 'Laptops').length },
  { name: 'Audio', icon: 'Headphones', count: products.filter(p => p.category === 'Audio').length },
  { name: 'Tablets', icon: 'Tablet', count: products.filter(p => p.category === 'Tablets').length },
];

export const featuredProducts = products.filter(product => product.featured);

export const latestProducts = products.slice(0, 3);

export const topRatedProducts = products
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);
