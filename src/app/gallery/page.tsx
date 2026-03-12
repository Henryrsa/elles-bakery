export const metadata = {
  title: "Gallery | Elle's Bakery",
  description: "Browse our collection of beautiful cakes and baked goods",
};

export default function GalleryPage() {
  const images = [
    { id: 1, alt: "Beautiful birthday cake" },
    { id: 2, alt: "Elegant wedding cake" },
    { id: 3, alt: "Colorful celebration cake" },
    { id: 4, alt: "Custom designed cake" },
    { id: 5, alt: "Floral decorated cake" },
    { id: 6, alt: "Birthday surprise cake" },
    { id: 7, alt: "Beautiful cake centerpiece" },
    { id: 8, alt: "Special occasion cake" },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-accent-gold tracking-[0.2em] uppercase text-sm mb-2">Our Work</p>
          <h1 className="font-display text-5xl font-bold text-primary-dark mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of our favorite creations. Each cake is uniquely designed 
            to make your special occasion memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-secondary cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={`/../Assets/Cakes/${image.id}.jpeg`}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-display text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more? Follow us on social media!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-dark text-white font-medium rounded-full hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Order Your Cake
          </a>
        </div>
      </div>
    </main>
  );
}
