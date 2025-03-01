import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

// 产品数据
const products = [
  {
    id: '1',
    name: '特级新会陈皮 5年陈',
    price: 598,
    originalPrice: 698,
    image: 'https://placehold.co/600x600?text=陈皮5年',
    category: 'chenpi',
    tags: ['特级', '5年陈', '礼盒装'],
  },
  {
    id: '2',
    name: '特级新会陈皮 10年陈',
    price: 998,
    originalPrice: 1198,
    image: 'https://placehold.co/600x600?text=陈皮10年',
    category: 'chenpi',
    tags: ['特级', '10年陈', '收藏级'],
  },
  {
    id: '3',
    name: '新会小青柑普洱茶 3年陈',
    price: 398,
    originalPrice: 458,
    image: 'https://placehold.co/600x600?text=小青柑3年',
    category: 'ganpu',
    tags: ['小青柑', '普洱', '送礼'],
  },
  {
    id: '4',
    name: '新会小青柑普洱茶 5年陈',
    price: 598,
    originalPrice: 698,
    image: 'https://placehold.co/600x600?text=小青柑5年',
    category: 'ganpu',
    tags: ['小青柑', '普洱', '高端'],
  },
  {
    id: '5',
    name: '新会陈皮碎片 100g装',
    price: 128,
    originalPrice: 158,
    image: 'https://placehold.co/600x600?text=陈皮碎片',
    category: 'chenpi',
    tags: ['泡茶', '煲汤', '实惠装'],
  },
  {
    id: '6',
    name: '新会柑普茶礼盒装',
    price: 498,
    originalPrice: 598,
    image: 'https://placehold.co/600x600?text=柑普茶礼盒',
    category: 'ganpu',
    tags: ['礼盒', '送礼', '高档'],
  },
  {
    id: '7',
    name: '新会陈皮茶具套装',
    price: 698,
    originalPrice: 898,
    image: 'https://placehold.co/600x600?text=茶具套装',
    category: 'gifts',
    tags: ['茶具', '套装', '文创'],
  },
  {
    id: '8',
    name: '新会陈皮手工香囊',
    price: 98,
    originalPrice: 128,
    image: 'https://placehold.co/600x600?text=陈皮香囊',
    category: 'gifts',
    tags: ['香囊', '手工', '文创'],
  },
];

// 分类数据
const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'chenpi', name: '陈皮精品' },
  { id: 'ganpu', name: '柑普茶' },
  { id: 'gifts', name: '文创礼品' },
];

export default function ProductsPage() {
  const router = useRouter();
  const { category: categoryParam } = router.query;
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [sortBy, setSortBy] = useState('default');
  
  // 根据分类和排序过滤产品
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  ).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // default sorting
  });

  // 当URL参数改变时更新选中的分类
  React.useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam as string);
    }
  }, [categoryParam]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>产品列表 - 新会陈皮</title>
        <meta name="description" content="探索我们的新会陈皮、柑普茶和文创礼品系列，传承百年工艺，品味岭南文化" />
      </Head>

      {/* 页面标题 */}
      <div className="bg-amber-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">产品列表</h1>
          <p className="text-lg max-w-2xl mx-auto">
            每一款产品都凝聚着新会陈皮的百年匠心，传承经典，品味健康
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* 筛选和排序 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-100'
                }`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  router.push({
                    pathname: '/products',
                    query: category.id === 'all' ? {} : { category: category.id }
                  }, undefined, { shallow: true });
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* 排序选项 */}
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">排序:</span>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">默认排序</option>
              <option value="price-asc">价格从低到高</option>
              <option value="price-desc">价格从高到低</option>
            </select>
          </div>
        </div>

        {/* 产品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link href={`/products/${product.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h2>
                  <div className="flex items-center">
                    <span className="text-amber-600 font-bold text-lg">¥{product.price}</span>
                    <span className="ml-2 text-gray-400 line-through text-sm">¥{product.originalPrice}</span>
                  </div>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-md transition-colors">
                  加入购物车
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">没有找到符合条件的产品</p>
            <button 
              className="mt-4 text-amber-600 font-medium"
              onClick={() => {
                setSelectedCategory('all');
                setSortBy('default');
                router.push('/products', undefined, { shallow: true });
              }}
            >
              查看所有产品
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 