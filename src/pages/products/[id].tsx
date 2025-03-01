import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// 产品数据
const products = [
  {
    id: '1',
    name: '特级新会陈皮 5年陈',
    price: 598,
    originalPrice: 698,
    image: 'https://placehold.co/600x600?text=陈皮5年',
    images: [
      'https://placehold.co/600x600?text=陈皮5年-1',
      'https://placehold.co/600x600?text=陈皮5年-2',
      'https://placehold.co/600x600?text=陈皮5年-3',
    ],
    category: 'chenpi',
    tags: ['特级', '5年陈', '礼盒装'],
    stock: 50,
    description: '特级新会陈皮，采用优质新会柑果皮，经传统工艺精制而成，存放5年，香气浓郁，口感醇厚，具有理气健脾、燥湿化痰的功效。',
    details: [
      '产地: 广东江门新会区',
      '规格: 100g/盒',
      '存放年份: 5年',
      '适宜人群: 大众人群',
      '保质期: 长期保存',
      '存放方法: 避光、通风、干燥处',
    ],
    features: [
      '传统手工制作，保留原汁原味',
      '精选优质新会柑，果皮厚实油点饱满',
      '陈化5年，香气浓郁持久',
      '礼盒精美包装，送礼佳品',
    ],
  },
  {
    id: '2',
    name: '特级新会陈皮 10年陈',
    price: 998,
    originalPrice: 1198,
    image: 'https://placehold.co/600x600?text=陈皮10年',
    images: [
      'https://placehold.co/600x600?text=陈皮10年-1',
      'https://placehold.co/600x600?text=陈皮10年-2',
      'https://placehold.co/600x600?text=陈皮10年-3',
    ],
    category: 'chenpi',
    tags: ['特级', '10年陈', '收藏级'],
    stock: 30,
    description: '特级新会陈皮，采用优质新会柑果皮，经传统工艺精制而成，存放10年，香气馥郁，药用价值极高，是收藏和品鉴的上佳之选。',
    details: [
      '产地: 广东江门新会区',
      '规格: 50g/盒',
      '存放年份: 10年',
      '适宜人群: 大众人群',
      '保质期: 长期保存',
      '存放方法: 避光、通风、干燥处',
    ],
    features: [
      '传统手工制作，保留原汁原味',
      '精选优质新会柑，果皮厚实油点饱满',
      '陈化10年，香气馥郁，药用价值高',
      '高档礼盒包装，收藏级品质',
    ],
  },
];

// 相关产品推荐
const getRelatedProducts = (currentId: string) => {
  return products.filter(product => product.id !== currentId).slice(0, 4);
};

interface ProductProps {
  product: typeof products[0];
}

export default function ProductDetail({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const relatedProducts = getRelatedProducts(product.id);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{product.name} - 新会陈皮</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* 面包屑导航 */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-gray-500 hover:text-amber-600">
                  首页
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="flex items-center">
                <Link href="/products" className="text-gray-500 hover:text-amber-600">
                  产品列表
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-amber-600">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 产品详情 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* 产品图片 */}
            <div className="md:w-1/2 p-6">
              <div className="relative h-80 md:h-96 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src={product.images[activeImage] || product.image} 
                  alt={product.name} 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex space-x-2 mt-4">
                {product.images.map((img, index) => (
                  <div 
                    key={index} 
                    className={`relative w-20 h-20 cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-amber-500' : 'border-transparent'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image 
                      src={img} 
                      alt={`${product.name} thumbnail ${index + 1}`} 
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 产品信息 */}
            <div className="md:w-1/2 p-6 md:border-l border-gray-200">
              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="text-amber-600 text-2xl font-bold">¥{product.price}</span>
                <span className="ml-2 text-gray-400 line-through">¥{product.originalPrice}</span>
                <span className="ml-3 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                  省 ¥{product.originalPrice - product.price}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-gray-700 w-20">库存:</span>
                  <span className={product.stock > 10 ? 'text-green-600' : 'text-amber-600'}>
                    {product.stock > 10 ? '现货充足' : `仅剩 ${product.stock} 件`}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 w-20">配送:</span>
                  <span className="text-gray-600">全国包邮</span>
                </div>
              </div>
              
              {/* 数量选择 */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">数量:</label>
                <div className="flex items-center">
                  <button 
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    className="w-16 text-center border-t border-b border-gray-200 py-1"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                    max={product.stock}
                  />
                  <button 
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* 购买按钮 */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                  立即购买
                </button>
                <button className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold py-3 px-6 rounded-md transition duration-300">
                  加入购物车
                </button>
              </div>
            </div>
          </div>

          {/* 产品详细信息标签页 */}
          <div className="border-t border-gray-200 mt-8">
            <div className="flex border-b border-gray-200">
              <button 
                className={`py-4 px-6 font-medium ${activeTab === 'description' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
                onClick={() => setActiveTab('description')}
              >
                产品详情
              </button>
              <button 
                className={`py-4 px-6 font-medium ${activeTab === 'features' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
                onClick={() => setActiveTab('features')}
              >
                产品特点
              </button>
              <button 
                className={`py-4 px-6 font-medium ${activeTab === 'reviews' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
                onClick={() => setActiveTab('reviews')}
              >
                用户评价
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">产品规格</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">产品特点</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">用户评价</h3>
                  <div className="space-y-6">
                    {[
                      {
                        name: "张先生",
                        date: "2023-10-15",
                        rating: 5,
                        comment: "品质非常好，香气浓郁，泡水后味道醇厚，包装也很精美，很满意的一次购物体验。"
                      },
                      {
                        name: "李女士",
                        date: "2023-09-28",
                        rating: 4,
                        comment: "陈皮质量不错，送长辈很合适，就是价格稍贵，希望能有更多优惠活动。"
                      }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-gray-500 text-sm">{review.date}</div>
                        </div>
                        <div className="flex text-amber-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 相关产品推荐 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">相关产品推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Link href={`/products/${relatedProduct.id}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{relatedProduct.name}</h3>
                    <div className="flex items-center">
                      <span className="text-amber-600 font-bold">¥{relatedProduct.price}</span>
                      <span className="ml-2 text-gray-400 line-through text-sm">¥{relatedProduct.originalPrice}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}; 