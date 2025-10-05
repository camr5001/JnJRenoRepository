export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#2b4a8c]">Project Photos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of completed renovation projects. Each photo represents quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            '/assets/Kitchen/image000000.JPG',
            '/assets/Bathroom/image000000.JPG',
            '/assets/Basement/image000000.JPG',
            '/assets/Bathroom/image000001.JPG',
            '/assets/Kitchen/image000003.JPG',
            '/assets/Bathroom/image000002.JPG',
            '/assets/Basement/image000001.JPG',
            '/assets/Bathroom/image000003.JPG',
            '/assets/Kitchen/image000004.JPG',
            '/assets/Bathroom/image000004.JPG',
            '/assets/Basement/image000002.JPG',
            '/assets/Bathroom/image000005.JPG',
          ].map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <img
                src={image}
                alt={`Renovation project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#2b4a8c] text-white px-8 py-3 rounded-lg hover:bg-[#1e3870] transition-colors font-medium"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
