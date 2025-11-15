import Link from 'next/link';

/**
 * Footer component with company info and links
 */
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              ABOUT
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Handcrafted jewelry made with love and attention to detail. Each piece tells a story.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              SHOP
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/necklaces" className="text-sm text-gray-600 hover:text-gray-900">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/collections/bracelets" className="text-sm text-gray-600 hover:text-gray-900">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link href="/collections/all" className="text-sm text-gray-600 hover:text-gray-900">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              CUSTOMER CARE
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-600 hover:text-gray-900">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-600 hover:text-gray-900">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-sm text-gray-600 hover:text-gray-900">
                  Product Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-4">
              NEWSLETTER
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Sign up for exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Joyas Claudette. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
