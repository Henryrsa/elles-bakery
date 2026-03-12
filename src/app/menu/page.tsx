export const metadata = {
  title: "Menu | Elle's Bakery",
  description: "View our selection of artisan cakes, scones, and biscuits",
};

export default function MenuPage() {
  const menuItems = {
    cakes: [
      { name: "Custom Celebration Cake", description: "Personalized cakes for birthdays, weddings & special events", price: "From R300" },
      { name: "Wedding Cake", description: "Elegant multi-tier cakes designed to your specifications", price: "Custom Quote" },
      { name: "Cupcake Tower", description: "Assorted cupcakes perfect for parties", price: "From R250" },
    ],
    scones: [
      { name: "5L Scone Box", description: "Perfect for 2-4 people", price: "R200" },
      { name: "10L Scone Box", description: "Great for small gatherings", price: "R300" },
      { name: "20L Scone Box", description: "Ideal for parties & events", price: "R500" },
    ],
    biscuits: [
      { name: "Biscuit Selection Box", description: "Assorted handcrafted biscuits", price: "R300" },
      { name: "Large Biscuit Box", description: "Generous selection for sharing", price: "R500" },
      { name: "Premium Biscuit Gift Set", description: "Luxury assortment in a gift box", price: "R800" },
    ],
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-accent-gold tracking-[0.2em] uppercase text-sm mb-2">What We Bake</p>
          <h1 className="font-display text-5xl font-bold text-primary-dark mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Freshly baked goods made with love using only the finest ingredients. 
            Prices may vary based on customization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-gray-800">Cakes</h2>
            </div>
            <ul className="space-y-6">
              {menuItems.cakes.map((item, index) => (
                <li key={index} className="border-b border-secondary last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-accent-gold font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-gray-800">Scones</h2>
            </div>
            <ul className="space-y-6">
              {menuItems.scones.map((item, index) => (
                <li key={index} className="border-b border-secondary last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-accent-gold font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-gray-800">Biscuits</h2>
            </div>
            <ul className="space-y-6">
              {menuItems.biscuits.map((item, index) => (
                <li key={index} className="border-b border-secondary last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-accent-gold font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need something custom? We&apos;d love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-dark text-white font-medium rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Place an Order
          </a>
        </div>
      </div>
    </main>
  );
}
