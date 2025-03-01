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
      <section className="kailash-hero">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1920&auto=format&fit=crop" 
              alt="新会陈皮背景" 
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="kailash-hero-content animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">新会陈皮</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">传承百年工艺，品味岭南文化</p>
            <Link href="/products" className="btn-primary">
              探索产品
            </Link>
          </div>
        </div>
      </section>

      {/* 品牌介绍 */}
      <section className="kailash-section-spacing kailash-gradient-bg">
        <div className="kailash-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="section-title">匠心传承，百年臻品</h2>
              <p className="text-lg text-gray-700 mb-6">
                新会陈皮，源于广东江门市新会区，是以新会柑的果皮制成的中药材，具有理气健脾、燥湿化痰的功效。自古以来，新会陈皮便是岭南地区的珍贵特产，被誉为&quot;南国珍品&quot;。
              </p>
              <p className="text-lg text-gray-700 mb-6">
                新会陈皮的制作工艺独特，需经过采摘、去瓤、晾晒、存放等多道工序。陈皮越陈越香，&quot;一年药，三年宝，七年才为良药&quot;。
              </p>
              <Link href="/about" className="btn-primary inline-block">
                了解更多
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=800&auto=format&fit=crop" 
                  alt="新会陈皮制作工艺" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品分类区域 */}
      <section className="kailash-section-spacing bg-white">
        <div className="kailash-container">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">传承百年，匠心臻品</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              每一款产品都凝聚着新会陈皮的百年匠心，传承经典，品味健康
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="kailash-product-card group">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop" 
                  alt="陈皮精品" 
                  layout="fill"
                  objectFit="cover"
                  className="kailash-product-image"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/products?category=chenpi" className="bg-white text-[var(--primary-color)] py-3 px-6 font-medium uppercase tracking-wider">
                    查看详情
                  </Link>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-3">陈皮精品</h3>
                <p className="text-gray-600">臻选优质新会柑，传统工艺精制而成</p>
              </div>
            </div>
            
            <div className="kailash-product-card group">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1547825407-2d060104b7f8?q=80&w=600&auto=format&fit=crop" 
                  alt="柑普茶" 
                  layout="fill"
                  objectFit="cover"
                  className="kailash-product-image"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/products?category=ganpu" className="bg-white text-[var(--primary-color)] py-3 px-6 font-medium uppercase tracking-wider">
                    查看详情
                  </Link>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-3">柑普茶</h3>
                <p className="text-gray-600">新会柑与云南普洱的完美结合，香气馥郁</p>
              </div>
            </div>
            
            <div className="kailash-product-card group">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=600&auto=format&fit=crop" 
                  alt="文创礼品" 
                  layout="fill"
                  objectFit="cover"
                  className="kailash-product-image"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/products?category=gifts" className="bg-white text-[var(--primary-color)] py-3 px-6 font-medium uppercase tracking-wider">
                    查看详情
                  </Link>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-3">文创礼品</h3>
                <p className="text-gray-600">融合传统与现代的陈皮文化创意产品</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特色产品展示 */}
      <section className="kailash-section-spacing kailash-gradient-bg">
        <div className="kailash-container">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">精选臻品</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              每一款产品都凝聚着新会陈皮的百年匠心
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: "特级新会陈皮 5年陈",
                price: 398,
                originalPrice: 498,
                image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=300&auto=format&fit=crop"
              },
              {
                id: 2,
                name: "特级新会陈皮 10年陈",
                price: 598,
                originalPrice: 698,
                image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=300&auto=format&fit=crop"
              },
              {
                id: 3,
                name: "新会小青柑普洱茶",
                price: 498,
                originalPrice: 598,
                image: "https://images.unsplash.com/photo-1547825407-2d060104b7f8?q=80&w=300&auto=format&fit=crop"
              },
              {
                id: 4,
                name: "新会陈皮礼盒装",
                price: 698,
                originalPrice: 798,
                image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=300&auto=format&fit=crop"
              }
            ].map((product) => (
              <div key={product.id} className="kailash-product-card group">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="kailash-product-image"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/products/${product.id}`} className="bg-white text-[var(--primary-color)] py-2 px-4 font-medium uppercase tracking-wider">
                      查看详情
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium">{product.name}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-[var(--primary-color)] font-bold">¥{product.price}</span>
                    <span className="ml-2 text-gray-400 line-through text-sm">¥{product.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline">
              查看全部产品
            </Link>
          </div>
        </div>
      </section>

      {/* 新会陈皮文化 */}
      <section className="kailash-section-spacing bg-white">
        <div className="kailash-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="section-title">新会陈皮文化</h2>
              <p className="text-lg text-gray-700 mb-6">
                新会陈皮，源于广东江门市新会区，是以新会柑的果皮制成的中药材，具有理气健脾、燥湿化痰的功效。
              </p>
              <p className="text-lg text-gray-700 mb-6">
                新会陈皮的制作工艺独特，需经过采摘、去瓤、晾晒、存放等多道工序。陈皮越陈越香，&quot;一年药，三年宝，七年才为良药&quot;。
              </p>
              <p className="text-lg text-gray-700 mb-8">
                我们致力于传承和发扬新会陈皮文化，每一款产品都严格遵循传统工艺，确保品质卓越。
              </p>
              <Link href="/about" className="btn-primary inline-block">
                了解更多
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=800&auto=format&fit=crop" 
                  alt="新会陈皮文化" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 顾客评价 */}
      <section className="kailash-section-spacing kailash-gradient-bg">
        <div className="kailash-container">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">顾客心声</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              听听我们的客户怎么说
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "张先生",
                location: "广州",
                comment: "家里常备新会陈皮，泡水、煲汤都很好。这家的陈皮品质很好，香气浓郁，服务也很周到。",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
              },
              {
                name: "李女士",
                location: "北京",
                comment: "朋友推荐的店铺，买了几款柑普茶，口感醇厚，茶香与陈皮香完美融合，很满意。",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
              },
              {
                name: "王先生",
                location: "上海",
                comment: "送长辈的礼物，包装精美，产品质量上乘，老人家很喜欢，会继续支持。",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
              }
            ].map((review, index) => (
              <div key={index} className="kailash-card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={review.avatar}
                      alt={review.name}
                      width={64}
                      height={64}
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-lg">{review.name}</h3>
                    <p className="text-gray-500">{review.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{review.comment}</p>
                <div className="mt-6 flex text-[var(--primary-color)]">
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
      <section className="kailash-section-spacing bg-white">
        <div className="kailash-container">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">陈皮知识</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              了解更多关于新会陈皮的历史、功效与品鉴方法
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "新会陈皮的历史渊源",
                excerpt: "新会陈皮有着悠久的历史，自唐代起就被列为贡品，是岭南地区的珍贵特产...",
                image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "如何鉴别优质新会陈皮",
                excerpt: "优质的新会陈皮应具备色泽橙红、油点饱满、香气浓郁、滋味醇厚等特点...",
                image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "陈皮与健康养生",
                excerpt: "中医认为陈皮性温、味辛、苦，入脾、肺经，具有理气健脾、燥湿化痰的功效...",
                image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop"
              }
            ].map((blog, index) => (
              <div key={index} className="kailash-product-card group">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    layout="fill"
                    objectFit="cover"
                    className="kailash-product-image"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href="/blog" className="bg-white text-[var(--primary-color)] py-2 px-4 font-medium uppercase tracking-wider">
                      阅读更多
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="py-20 bg-[var(--dark-bg)] text-white">
        <div className="kailash-container text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">我们的品牌理念</h2>
          <p className="max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
            传承百年工艺，弘扬岭南文化。我们致力于将新会陈皮的传统魅力与现代生活方式相结合，
            为您带来健康、品质与文化的多重体验。
          </p>
          <Link href="/about" className="inline-block bg-white text-[var(--dark-bg)] hover:bg-gray-100 font-bold py-3 px-8 uppercase tracking-wider transition duration-300">
            了解我们的故事
          </Link>
        </div>
      </section>
    </div>
  );
} 