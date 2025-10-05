export function GallerySection() {
  const projects = [
    { image: '/assets/Kitchen/image000000.JPG', title: 'Modern Kitchen Renovation', category: 'Kitchen' },
    { image: '/assets/Bathroom/image000000.JPG', title: 'Luxury Bathroom Remodel', category: 'Bathroom' },
    { image: '/assets/Basement/image000000.JPG', title: 'Finished Basement', category: 'Basement' },
    { image: '/assets/Bathroom/image000001.JPG', title: 'Master Bath Suite', category: 'Bathroom' },
    { image: '/assets/Kitchen/image000003.JPG', title: 'Contemporary Kitchen', category: 'Kitchen' },
    { image: '/assets/Bathroom/image000002.JPG', title: 'Spa Bathroom', category: 'Bathroom' },
    { image: '/assets/Basement/image000001.JPG', title: 'Entertainment Basement', category: 'Basement' },
    { image: '/assets/Bathroom/image000003.JPG', title: 'Guest Bathroom', category: 'Bathroom' },
    { image: '/assets/Kitchen/image000004.JPG', title: 'Gourmet Kitchen', category: 'Kitchen' },
    { image: '/assets/Bathroom/image000004.JPG', title: 'Powder Room', category: 'Bathroom' },
    { image: '/assets/Basement/image000002.JPG', title: 'Home Office Basement', category: 'Basement' },
    { image: '/assets/Bathroom/image000005.JPG', title: 'Designer Bathroom', category: 'Bathroom' },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our <span className="text-[#2b4a8c]">Project Photos</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of completed renovation projects. Each photo represents quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                  <p className="text-xs sm:text-sm font-semibold">{project.category}</p>
                  <p className="text-xs text-white/90 hidden sm:block">{project.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#2b4a8c] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#1e3870] transition-all font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
