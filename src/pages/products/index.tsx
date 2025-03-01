import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

// 产品数据
const products = [
  {
    id: '1',
    name: '特级新会陈皮 5年陈',
    price: 298,
    originalPrice: 358,
    image: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=600&auto=format&fit=crop',
    category: '陈皮精品',
    tags: ['5年陈', '特级', '礼盒'],
    description: '精选广东江门新会柑，传统工艺制作，存放5年，香气浓郁，口感醇厚。',
    stock: 50
  },
  {
    id: '2',
    name: '特级新会陈皮 10年陈',
    price: 598,
    originalPrice: 698,
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop',
    category: '陈皮精品',
    tags: ['10年陈', '特级', '礼盒'],
    description: '精选广东江门新会柑，传统工艺制作，存放10年，香气浓郁，口感醇厚。',
    stock: 30
  },
  {
    id: '3',
    name: '新会小青柑普洱茶 3年陈',
    price: 188,
    originalPrice: 228,
    image: 'https://images.unsplash.com/photo-1627483262769-04d0a1401487?q=80&w=600&auto=format&fit=crop',
    category: '柑普茶',
    tags: ['小青柑', '普洱', '3年陈'],
    description: '精选新会小青柑与云南普洱茶，存放3年，茶香柑韵，回甘持久。',
    stock: 100
  },
  {
    id: '4',
    name: '新会小青柑普洱茶 5年陈',
    price: 288,
    originalPrice: 328,
    image: 'https://images.unsplash.com/photo-1593543294918-ca3634edf3b7?q=80&w=600&auto=format&fit=crop',
    category: '柑普茶',
    tags: ['小青柑', '普洱', '5年陈'],
    description: '精选新会小青柑与云南普洱茶，存放5年，茶香柑韵，回甘持久。',
    stock: 80
  },
  {
    id: '5',
    name: '新会陈皮碎片 100g装',
    price: 88,
    originalPrice: 108,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=600&auto=format&fit=crop',
    category: '陈皮精品',
    tags: ['碎片', '泡茶', '日常'],
    description: '精选新会陈皮碎片，便于冲泡，日常饮用，健康养生。',
    stock: 200
  },
  {
    id: '6',
    name: '新会柑普茶礼盒装',
    price: 368,
    originalPrice: 428,
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=600&auto=format&fit=crop',
    category: '柑普茶',
    tags: ['礼盒', '送礼', '高档'],
    description: '精美礼盒包装，内含优质柑普茶，送礼自用两相宜。',
    stock: 60
  },
  {
    id: '7',
    name: '新会陈皮茶具套装',
    price: 498,
    originalPrice: 598,
    image: 'https://images.unsplash.com/photo-1556679343-c1c4b8e4fdce?q=80&w=600&auto=format&fit=crop',
    category: '文创礼品',
    tags: ['茶具', '套装', '礼品'],
    description: '传统手工制作茶具，搭配优质陈皮，品味传统文化。',
    stock: 40
  },
  {
    id: '8',
    name: '新会陈皮手工香囊',
    price: 128,
    originalPrice: 158,
    image: 'https://images.unsplash.com/photo-1611162458324-a17a636c5f24?q=80&w=600&auto=format&fit=crop',
    category: '文创礼品',
    tags: ['香囊', '手工', '礼品'],
    description: '采用新会陈皮制作的传统香囊，香气持久，驱邪避秽。',
    stock: 70
  }
];

// 分类数据
const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'chenpi', name: '陈皮精品' },
  { id: 'ganpu', name: '柑普茶' },
  { id: 'gifts', name: '文创礼品' }
];

export default function ProductsPage() {
  const router = useRouter();
  const { category: categoryParam, sort: sortParam } = router.query;
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // 处理URL参数
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam as string);
    }
    if (sortParam) {
      setSortOption(sortParam as string);
    }
  }, [categoryParam, sortParam]);
  
  // 过滤和排序产品
  useEffect(() => {
    let result = [...products];
    
    // 按分类过滤
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'chenpi': '陈皮精品',
        'ganpu': '柑普茶',
        'gifts': '文创礼品'
      };
      const categoryName = categoryMap[selectedCategory as keyof typeof categoryMap];
      result = result.filter(product => product.category === categoryName);
    }
    
    // 排序
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // 默认排序，保持原顺序
        break;
    }
    
    setFilteredProducts(result);
    
    // 更新URL参数
    const query: any = {};
    if (selectedCategory !== 'all') query.category = selectedCategory;
    if (sortOption !== 'default') query.sort = sortOption;
    
    router.push({
      pathname: router.pathname,
      query
    }, undefined, { shallow: true });
    
  }, [selectedCategory, sortOption]);
  
  // 处理分类变更
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };
  
  // 处理排序变更
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  // 重置过滤器
  const resetFilters = () => {
    setSelectedCategory('all');
    setSortOption('default');
  };

  return (
    <>
      <Head>
        <title>产品列表 - 新会陈皮</title>
        <meta name="description" content="探索我们的新会陈皮和柑普茶产品，传承百年工艺，品味岭南文化。" />
      </Head>
      
      <div className="kailash-page-header">
        <div className="kailash-container">
          <h1 className="kailash-page-title">我们的产品</h1>
          <p className="kailash-page-description">
            精选新会陈皮和柑普茶，传承百年工艺，品味岭南文化
          </p>
        </div>
      </div>
      
      <div className="kailash-container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 侧边栏过滤器 */}
          <div className="w-full md:w-1/4">
            <div className="kailash-filter-card">
              <h3 className="kailash-filter-title">产品分类</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      className={`kailash-filter-option ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                      {selectedCategory === category.id && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* 产品列表 */}
          <div className="w-full md:w-3/4">
            {/* 排序和结果计数 */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                显示 <span className="font-medium">{filteredProducts.length}</span> 个产品
              </p>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-gray-600">排序方式:</label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="kailash-select"
                >
                  <option value="default">默认排序</option>
                  <option value="price-asc">价格: 从低到高</option>
                  <option value="price-desc">价格: 从高到低</option>
                  <option value="name-asc">名称: A-Z</option>
                  <option value="name-desc">名称: Z-A</option>
                </select>
              </div>
            </div>
            
            {/* 产品网格 */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="kailash-product-card">
                    <Link href={`/products/${product.id}`} className="block">
                      <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {product.originalPrice > product.price && (
                          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            优惠
                          </span>
                        )}
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[var(--primary-color)]">¥{product.price}</p>
                          {product.originalPrice > product.price && (
                            <p className="text-sm text-gray-500 line-through">¥{product.originalPrice}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-1">
                        {product.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="kailash-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="kailash-button-sm">
                        加入购物车
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-900 mb-2">没有找到符合条件的产品</h3>
                <p className="text-gray-600 mb-6">请尝试更改筛选条件或重置筛选器</p>
                <button onClick={resetFilters} className="kailash-button">
                  重置筛选器
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
} 