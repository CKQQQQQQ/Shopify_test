import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

// 定义产品类型
type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  features: string[];
  stock: number;
}

// 产品数据
const products: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'Classic T-Shirt',
    price: 29.99,
    description: 'A comfortable and stylish t-shirt made from 100% cotton. Perfect for everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    features: [
      'Premium cotton material',
      'Comfortable fit',
      'Machine washable',
      'Available in multiple colors',
    ],
    stock: 50,
  },
  '2': {
    id: '2',
    name: 'Denim Jeans',
    price: 79.99,
    description: 'Classic denim jeans with a modern fit. Made from high-quality denim that lasts.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['30x30', '32x32', '34x34', '36x34'],
    colors: ['Blue', 'Black', 'Gray'],
    features: [
      'Premium denim material',
      'Modern fit',
      'Durable construction',
      'Multiple washes available',
    ],
    stock: 35,
  },
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(products).map((id) => ({
    params: { id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const product = products[id] || products['1']

  return {
    props: {
      product,
    },
  }
}

type Props = {
  product: Product
}

export default function ProductPage({ product }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 产品图片 */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <div className="relative h-96">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="relative h-32">
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 2}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 产品信息 */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* 尺码选择 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="border rounded-md py-2 text-sm font-medium hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* 颜色选择 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="border rounded-md py-2 text-sm font-medium hover:border-black"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* 库存信息 */}
          <p className="text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </p>

          {/* 添加到购物车按钮 */}
          <button className="w-full bg-black text-white py-4 rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-gray-800">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>

          {/* 产品特点 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 