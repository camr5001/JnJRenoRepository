export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#2b4a8c] to-[#1e3870] rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Not Sure Which Service You Need?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Schedule a free consultation and we'll help you determine the best approach for your home renovation goals.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-[#2b4a8c] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl"
        >
          Schedule Free Consultation
        </a>
      </div>
    </section>
  );
}
