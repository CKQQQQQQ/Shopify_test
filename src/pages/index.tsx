import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // 模拟数据
  const featuredProducts = [
    {
      id: '1',
      name: 'Classic T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: '2',
      name: 'Denim Jeans',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: '3',
      name: 'Leather Jacket',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: '4',
      name: 'Running Shoes',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60',
    },
  ]

  const categories = [
    {
      id: '1',
      name: 'Clothing',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: '2',
      name: 'Shoes',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: '3',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&q=60',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=60"
            alt="Hero background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">Discover our latest collection</p>
          <Link
            href="/products"
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <div className="group relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 