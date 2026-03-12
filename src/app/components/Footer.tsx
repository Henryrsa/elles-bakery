import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-4">
              Elle&apos;s <span className="text-accent-gold">Bakery</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Artisan cakes, scones, and biscuits baked with love and the finest ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gray-700 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-primary-dark text-sm transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-primary-dark text-sm transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-dark text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-dark text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gray-700 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>32 Pygmy Goose Street, Danville, Elandspoort, Pretoria, 0183</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+27768109168" className="hover:text-primary-dark transition-colors">
                  +27 76 810 9168
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@ellesbakery.co.za" className="hover:text-primary-dark transition-colors">
                  hello@ellesbakery.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Elle&apos;s Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
