import Image from 'next/image'
import Link from 'next/link'

// 模拟产品数据
const products = [
  {
    id: '1',
    name: 'Classic T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
    category: 'Clothing',
  },
  {
    id: '2',
    name: 'Denim Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60',
    category: 'Clothing',
  },
  {
    id: '3',
    name: 'Leather Jacket',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60',
    category: 'Clothing',
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60',
    category: 'Shoes',
  },
  {
    id: '5',
    name: 'Casual Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
    category: 'Accessories',
  },
  {
    id: '6',
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60',
    category: 'Accessories',
  }
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 筛选侧边栏 */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2">Clothing</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2">Shoes</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2">Accessories</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2">Under $50</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2">$50 - $100</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2">$100 - $200</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2">Over $200</span>
              </label>
            </div>
          </div>
        </div>

        {/* 产品列表 */}
        <div className="flex-1">
          {/* 排序和布局选项 */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <span className="mr-2">Sort by:</span>
              <select className="form-select border rounded-md py-1 px-2">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span>{products.length} Products</span>
            </div>
          </div>

          {/* 产品网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 