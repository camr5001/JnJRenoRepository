import { Clock, Phone, Calendar, MessageSquare, MapPin, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<'consultation' | 'quote'>('consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.us2.make.com/dj8pjkdtslv4fwybrcll3lvxm61kl9t4', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceInterest: '',
          preferredDate: '',
          preferredTime: '',
          address: '',
          budget: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Start Your <span className="text-[#2b4a8c]">Transformation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project. No obligations, just expert advice and a detailed estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex border-b">
                <button
                  type="button"
                  onClick={() => setActiveTab('consultation')}
                  className={`flex-1 px-6 py-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
                    activeTab === 'consultation'
                      ? 'bg-[#2b4a8c] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  Free Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('quote')}
                  className={`flex-1 px-6 py-4 font-semibold flex items-center justify-center gap-2 transition-colors ${
                    activeTab === 'quote'
                      ? 'bg-[#2b4a8c] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  Request Quote
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all hover:border-gray-400"
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all hover:border-gray-400"
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all hover:border-gray-400"
                    placeholder="(647) 780-4433"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4a8c] focus:border-transparent outline-none transition-all hover:border-gray-400 cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="whole-home">Whole-Home Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
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

              <div className="mb-6">
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

              <div className="mb-6">
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

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                  <p className="font-semibold">Thank you for your request!</p>
                  <p className="text-sm mt-1">We'll contact you within 24 hours.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2b4a8c] text-white px-8 py-4 rounded-lg hover:bg-[#1e3870] transition-all font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Request...
                  </span>
                ) : (
                  'Schedule Free Consultation'
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to be contacted by JNJ Renovations regarding your project.
              </p>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2b4a8c] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:6477804433" className="text-gray-600 hover:text-[#2b4a8c]">
                      (647) 780-4433
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#2b4a8c] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:jnjrenovation@yahoo.com" className="text-gray-600 hover:text-[#2b4a8c]">
                      jnjrenovation@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2b4a8c] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Service Area</p>
                    <p className="text-gray-600">Greater Toronto Area & Surrounding Communities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#2b4a8c] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Office Hours</p>
                    <p className="text-gray-600">Mon-Sat: 6am - 5pm</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Response Time</h4>
                <div className="text-4xl font-bold text-[#2b4a8c] mb-2">24 Hours</div>
                <p className="text-sm text-gray-600">
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
