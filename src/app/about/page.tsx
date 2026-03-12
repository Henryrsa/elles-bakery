export const metadata = {
  title: "About | Elle's Bakery",
  description: "Learn about Elle's Bakery story and passion for baking",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-accent-gold tracking-[0.2em] uppercase text-sm mb-2">Our Story</p>
            <h1 className="font-display text-5xl font-bold text-primary-dark mb-6">
              Baking with Love Since Day One
            </h1>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Welcome to Elle&apos;s Bakery, where every creation is made with 
                passion and the finest ingredients. Located in the heart of Pretoria, 
                we take pride in crafting delicious cakes, scones, and biscuits that 
                bring joy to every celebration.
              </p>
              <p>
                What started as a love for baking has grown into a beloved local bakery 
                serving the community with homemade treats. Each item that leaves our 
                kitchen is made with attention to detail and a touch of love.
              </p>
              <p>
                We believe that every occasion deserves a special cake, and we&apos;re 
                here to make your sweet moments even sweeter.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-gold/20 rounded-3xl transform rotate-3" />
            <div className="relative bg-secondary rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-display text-6xl font-bold text-primary-dark mb-2">Elle&apos;s</div>
                <div className="text-accent-gold text-2xl">Bakery</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
            <p className="text-gray-500 text-sm">
              Every creation is baked with care and passion
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Quality Ingredients</h3>
            <p className="text-gray-500 text-sm">
              We use only the finest ingredients for the best taste
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Fresh Daily</h3>
            <p className="text-gray-500 text-sm">
              Baked fresh every day for maximum freshness
            </p>
          </div>
        </div>

        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you have a question about our products, want to place an order, 
            or just want to say hello, we&apos;re here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-dark text-white font-medium rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
