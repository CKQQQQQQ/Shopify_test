import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/about" className="text-base text-gray-500 hover:text-gray-900 block">
                About
              </Link>
              <Link href="/careers" className="text-base text-gray-500 hover:text-gray-900 block">
                Careers
              </Link>
              <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900 block">
                Blog
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Shop
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/products" className="text-base text-gray-500 hover:text-gray-900 block">
                All Products
              </Link>
              <Link href="/categories" className="text-base text-gray-500 hover:text-gray-900 block">
                Categories
              </Link>
              <Link href="/featured" className="text-base text-gray-500 hover:text-gray-900 block">
                Featured
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900 block">
                Contact
              </Link>
              <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900 block">
                FAQ
              </Link>
              <Link href="/shipping" className="text-base text-gray-500 hover:text-gray-900 block">
                Shipping
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900 block">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900 block">
                Terms of Service
              </Link>
              <Link href="/returns" className="text-base text-gray-500 hover:text-gray-900 block">
                Returns Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Your Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 