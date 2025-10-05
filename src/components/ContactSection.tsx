import { Clock, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Free Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your home? Fill out the form below and we'll get back to you within 24 hours to discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all"
                  placeholder="(416) 123-4567"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    <option value="evening">Evening (4pm - 7pm)</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all"
                    placeholder="123 Main St, Peterborough, ON"
                  />
                  <p className="text-sm text-gray-500 mt-1">Optional - helps us prepare for your consultation</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Describe your vision, any specific requirements, or questions you have..."
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">Optional - any details you can provide help us prepare better</p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2b4a8c] text-white px-8 py-4 rounded-lg hover:bg-[#1e3870] transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to be contacted by JNJ Renovations regarding your project.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#2b4a8c]" />
                <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Mon-Sat: 6am - 5pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            <div className="bg-[#2b4a8c] text-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Emergency Services</h3>
              <p className="mb-6 leading-relaxed">
                Have an urgent renovation issue? We offer priority scheduling for emergency repairs and critical projects.
              </p>
              <a
                href="tel:6477804433"
                className="block w-full bg-white text-[#2b4a8c] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center"
              >
                Call for Emergency Service
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#2b4a8c] mb-2">24 Hours</div>
                <p className="text-gray-600">
                  We respond to all consultation requests within one business day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
