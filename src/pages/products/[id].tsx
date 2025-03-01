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
    price: 298,
    originalPrice: 358,
    images: [
      'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=600&auto=format&fit=crop'
    ],
    category: '陈皮精品',
    tags: ['5年陈', '特级', '礼盒'],
    stock: 50,
    description: '精选广东江门新会柑，传统工艺制作，存放5年，香气浓郁，口感醇厚。新会陈皮是以新会柑的果皮制成的一种中药材，具有理气健脾、燥湿化痰的功效。5年陈皮香气馥郁，口感醇厚，回甘持久，是馈赠亲友、自己品饮的上佳选择。',
    features: [
      '产地: 广东江门新会区',
      '存放年份: 5年',
      '规格: 150g/盒',
      '等级: 特级',
      '包装: 高档礼盒装',
      '保质期: 长期保存'
    ],
    usage: '可用于泡茶、煲汤、制作甜品等，每次取3-5g，开水冲泡即可。',
    reviews: [
      { id: 1, user: '陈先生', rating: 5, comment: '香气浓郁，口感醇厚，送礼倍有面子！', date: '2023-10-15' },
      { id: 2, user: '李女士', rating: 4, comment: '包装精美，陈皮品质不错，家人很喜欢。', date: '2023-09-28' }
    ]
  },
  {
    id: '2',
    name: '特级新会陈皮 10年陈',
    price: 598,
    originalPrice: 698,
    images: [
      'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=600&auto=format&fit=crop'
    ],
    category: '陈皮精品',
    tags: ['10年陈', '特级', '礼盒'],
    stock: 30,
    description: '精选广东江门新会柑，传统工艺制作，存放10年，香气浓郁，口感醇厚。新会陈皮是以新会柑的果皮制成的一种中药材，具有理气健脾、燥湿化痰的功效。10年陈皮香气更为馥郁，药用价值更高，是收藏和品饮的极佳选择。',
    features: [
      '产地: 广东江门新会区',
      '存放年份: 10年',
      '规格: 100g/盒',
      '等级: 特级',
      '包装: 高档礼盒装',
      '保质期: 长期保存'
    ],
    usage: '可用于泡茶、煲汤、制作甜品等，每次取3-5g，开水冲泡即可。',
    reviews: [
      { id: 1, user: '王先生', rating: 5, comment: '10年陈皮果然不同，香气醇厚，回甘持久，值得收藏！', date: '2023-11-05' },
      { id: 2, user: '张女士', rating: 5, comment: '送给长辈的礼物，他们非常喜欢，说是近年来喝过最好的陈皮。', date: '2023-10-18' }
    ]
  }
];

// 获取相关产品
function getRelatedProducts(currentId: string) {
  return products.filter(product => product.id !== currentId).slice(0, 3);
}

interface ProductDetailProps {
  product: typeof products[0];
  relatedProducts: typeof products;
}

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Head>
        <title>{product.name} - 新会陈皮</title>
        <meta name="description" content={product.description.substring(0, 160)} />
      </Head>

      <div className="kailash-container py-8">
        {/* 面包屑导航 */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-[var(--primary-color)]">首页</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/products" className="text-gray-500 hover:text-[var(--primary-color)]">产品</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* 产品详情 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* 产品图片 */}
          <div>
            <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === index ? 'border-[var(--primary-color)]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - 图片 ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 产品信息 */}
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 5 ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {product.reviews.length} 条评价
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-[var(--primary-color)]">
                  ¥{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="ml-3 text-gray-500 line-through">
                    ¥{product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                含税价格，免运费
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {product.description.split('.')[0]}. {/* 只显示第一句话作为简短描述 */}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-gray-700 w-24">分类:</span>
                <span className="text-gray-900">{product.category}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 w-24">标签:</span>
                <div className="flex flex-wrap gap-1">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="kailash-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 w-24">库存状态:</span>
                <span className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `有货 (${product.stock})` : '缺货'}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center">
                <span className="text-gray-700 w-24">数量:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-1 text-gray-600 hover:text-[var(--primary-color)]"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x border-gray-300 min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-1 text-gray-600 hover:text-[var(--primary-color)]"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="kailash-button-primary flex-1">
                立即购买
              </button>
              <button className="kailash-button flex-1">
                加入购物车
              </button>
            </div>
          </div>
        </div>

        {/* 产品详情选项卡 */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap -mb-px">
              <button
                className={`mr-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'description'
                    ? 'border-[var(--primary-color)] text-[var(--primary-color)]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('description')}
              >
                产品详情
              </button>
              <button
                className={`mr-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'features'
                    ? 'border-[var(--primary-color)] text-[var(--primary-color)]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('features')}
              >
                规格参数
              </button>
              <button
                className={`mr-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-[var(--primary-color)] text-[var(--primary-color)]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                用户评价 ({product.reviews.length})
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="mb-4 leading-relaxed">{product.description}</p>
                <h3 className="text-lg font-medium mb-2">使用方法</h3>
                <p className="mb-4 leading-relaxed">{product.usage}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} 细节图`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={product.images[2]}
                      alt={`${product.name} 细节图`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary-color)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                {product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center mr-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="font-medium text-gray-900">{review.user}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">暂无评价</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 相关产品 */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="kailash-section-title mb-8">相关产品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="kailash-product-card">
                  <Link href={`/products/${relatedProduct.id}`} className="block">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          优惠
                        </span>
                      )}
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{relatedProduct.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{relatedProduct.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-[var(--primary-color)]">¥{relatedProduct.price}</p>
                        {relatedProduct.originalPrice > relatedProduct.price && (
                          <p className="text-sm text-gray-500 line-through">¥{relatedProduct.originalPrice}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
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
  const relatedProducts = getRelatedProducts(params?.id as string);

  return {
    props: {
      product,
      relatedProducts,
    },
  };
}; 