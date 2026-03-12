import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 z-10" />
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486427944544-d2c6e33ff6f7?w=1920')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="text-accent-gold font-medium tracking-[0.3em] uppercase mb-4 animate-fadeIn">
            Welcome to
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-dark mb-6 animate-fadeIn delay-100">
            Elle&apos;s <span className="text-accent-gold">Bakery</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto animate-fadeIn delay-200">
            Artisan cakes, scones, and biscuits crafted with love in Pretoria. 
            Every bite is a taste of warmth and sweetness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
            <Link
              href="/menu"
              className="px-8 py-4 bg-primary-dark text-white font-medium rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary-dark font-medium rounded-full border-2 border-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-accent-gold tracking-[0.2em] uppercase text-sm mb-2">What We Offer</p>
            <h2 className="font-display text-4xl font-bold text-gray-800">Our Specialties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-3">Custom Cakes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beautiful bespoke cakes for birthdays, weddings, and special occasions. 
                Starting from R300.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-3">Fresh Scones</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Homemade scones in various sizes. Perfect for afternoon tea. 
                From R200 for 5L.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-3">Artisan Biscuits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Handcrafted biscuits and treats. Great for gifting or satisfying 
                your sweet tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
            Made with Love
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Every item is freshly baked with the finest ingredients, 
            bringing you the warmth of homemade goodness in every bite.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary-dark font-medium hover:text-accent-gold transition-colors"
          >
            Learn our story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
