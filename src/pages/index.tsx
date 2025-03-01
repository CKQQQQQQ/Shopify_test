import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>新会陈皮 - 传承百年工艺，品味岭南文化</title>
        <meta name="description" content="新会陈皮 - 传承百年工艺，品味岭南文化，提供优质新会陈皮、柑普茶及衍生产品" />
      </Head>

      {/* 英雄区域 */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://placehold.co/1920x1080?text=新会陈皮背景图" 
              alt="新会陈皮背景" 
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="text-center z-20 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">新会陈皮</h1>
            <p className="text-xl md:text-2xl text-white mb-8">传承百年工艺，品味岭南文化</p>
            <Link href="/products" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              探索产品
            </Link>
          </div>
        </div>
      </section>

      {/* 产品分类区域 */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">传承百年，匠心臻品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image 
                  src="https://placehold.co/600x400?text=陈皮精品" 
                  alt="陈皮精品" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">陈皮精品</h3>
                <p className="text-gray-600 mb-4">臻选优质新会柑，传统工艺精制而成</p>
                <Link href="/products?category=chenpi" className="inline-block text-amber-600 font-medium hover:text-amber-800">
                  查看详情
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image 
                  src="https://placehold.co/600x400?text=柑普茶" 
                  alt="柑普茶" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">柑普茶</h3>
                <p className="text-gray-600 mb-4">新会柑与云南普洱的完美结合，香气馥郁</p>
                <Link href="/products?category=ganpu" className="inline-block text-amber-600 font-medium hover:text-amber-800">
                  查看详情
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image 
                  src="https://placehold.co/600x400?text=文创礼品" 
                  alt="文创礼品" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">文创礼品</h3>
                <p className="text-gray-600 mb-4">融合传统与现代的陈皮文化创意产品</p>
                <Link href="/products?category=gifts" className="inline-block text-amber-600 font-medium hover:text-amber-800">
                  查看详情
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特色产品展示 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">精选臻品</h2>
          <p className="text-center text-gray-600 mb-12">每一款产品都凝聚着新会陈皮的百年匠心</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <Image 
                    src={`https://placehold.co/300x300?text=精选产品${item}`}
                    alt={`精选产品${item}`}
                    width={300}
                    height={300}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/products/${item}`} className="bg-white text-amber-600 py-2 px-4 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      查看详情
                    </Link>
                  </div>
                </div>
                <h3 className="font-medium text-lg">特级新会陈皮 {item}年陈</h3>
                <div className="flex items-center mt-1">
                  <span className="text-amber-600 font-bold">¥{298 + item * 100}</span>
                  <span className="ml-2 text-gray-400 line-through text-sm">¥{398 + item * 100}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/products" className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-2 px-6 rounded-full transition duration-300">
              查看全部产品
            </Link>
          </div>
        </div>
      </section>

      {/* 新会陈皮文化 */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative rounded-lg overflow-hidden h-80">
                <Image 
                  src="https://placehold.co/800x600?text=新会陈皮文化" 
                  alt="新会陈皮文化" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">新会陈皮文化</h2>
              <p className="text-gray-700 mb-4">
                新会陈皮，源于广东江门市新会区，是以新会柑的果皮制成的中药材，具有理气健脾、燥湿化痰的功效。
              </p>
              <p className="text-gray-700 mb-4">
                新会陈皮的制作工艺独特，需经过采摘、去瓤、晾晒、存放等多道工序。陈皮越陈越香，&quot;一年药，三年宝，七年才为良药&quot;。
              </p>
              <p className="text-gray-700 mb-6">
                我们致力于传承和发扬新会陈皮文化，每一款产品都严格遵循传统工艺，确保品质卓越。
              </p>
              <Link href="/about" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 顾客评价 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">顾客心声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "张先生",
                location: "广州",
                comment: "家里常备新会陈皮，泡水、煲汤都很好。这家的陈皮品质很好，香气浓郁，服务也很周到。"
              },
              {
                name: "李女士",
                location: "北京",
                comment: "朋友推荐的店铺，买了几款柑普茶，口感醇厚，茶香与陈皮香完美融合，很满意。"
              },
              {
                name: "王先生",
                location: "上海",
                comment: "送长辈的礼物，包装精美，产品质量上乘，老人家很喜欢，会继续支持。"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
                <div className="mt-4 flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 博客文章 */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">陈皮知识</h2>
          <p className="text-center text-gray-600 mb-12">了解更多关于新会陈皮的历史、功效与品鉴方法</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "新会陈皮的历史渊源",
                excerpt: "新会陈皮有着悠久的历史，自唐代起就被列为贡品...",
                image: "https://placehold.co/600x400?text=陈皮历史"
              },
              {
                title: "如何鉴别优质新会陈皮",
                excerpt: "优质的新会陈皮应具备色泽橙红、油点饱满、香气浓郁...",
                image: "https://placehold.co/600x400?text=陈皮鉴别"
              },
              {
                title: "陈皮与健康养生",
                excerpt: "中医认为陈皮性温、味辛、苦，入脾、肺经，具有理气健脾...",
                image: "https://placehold.co/600x400?text=陈皮养生"
              }
            ].map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <Link href="/blog" className="inline-block text-amber-600 font-medium hover:text-amber-800">
                    阅读更多
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">我们的品牌理念</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            传承百年工艺，弘扬岭南文化。我们致力于将新会陈皮的传统魅力与现代生活方式相结合，
            为您带来健康、品质与文化的多重体验。
          </p>
          <Link href="/about" className="inline-block bg-white text-amber-800 hover:bg-amber-100 font-bold py-3 px-8 rounded-full transition duration-300">
            了解我们的故事
          </Link>
        </div>
      </section>
    </div>
  );
} 