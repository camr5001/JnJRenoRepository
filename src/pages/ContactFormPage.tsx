import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MessageSquare, MapPin, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { supabase, ConsultationRequest } from '../lib/supabase';

export function ContactFormPage() {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState<'consultation' | 'quote'>('consultation');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [consultationData, setConsultationData] = useState<Partial<ConsultationRequest>>({
    full_name: '',
    email: '',
    phone: '',
    service_type: '',
    preferred_date: '',
    preferred_time: '',
    address: '',
    budget_range: '',
    message: ''
  });

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('consultation_requests')
        .insert([consultationData]);

      if (error) throw error;

      await fetch('https://hook.us2.make.com/dj8pjkdtslv4fwybrcll3lvxm61kl9t4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consultationData),
      });

      setSubmitted(true);
      setConsultationData({
        full_name: '',
        email: '',
        phone: '',
        service_type: '',
        preferred_date: '',
        preferred_time: '',
        address: '',
        budget_range: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      alert('There was an error submitting your request. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    { value: 'kitchen', label: 'Kitchen Remodeling' },
    { value: 'bathroom', label: 'Bathroom Renovation' },
    { value: 'basement', label: 'Basement Finishing' },
    { value: 'whole-home', label: 'Whole-Home Renovation' },
    { value: 'other', label: 'Other / Not Sure' }
  ];

  const budgetOptions = [
    { value: '$15,000 - $30,000', label: '$15,000 - $30,000' },
    { value: '$30,000 - $50,000', label: '$30,000 - $50,000' },
    { value: '$50,000 - $75,000', label: '$50,000 - $75,000' },
    { value: '$75,000 - $100,000', label: '$75,000 - $100,000' },
    { value: '$100,000+', label: '$100,000+' },
    { value: 'Not sure', label: 'Not Sure Yet' }
  ];

  const timeOptions = [
    { value: 'morning', label: 'Morning (8am - 12pm)' },
    { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
    { value: 'evening', label: 'Evening (4pm - 7pm)' },
    { value: 'anytime', label: 'Anytime / Not Sure Yet' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white mb-6 hover:text-primary-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Start Your <span className="text-primary-100">Transformation</span>
            </h1>
            <p className="text-xl text-primary-50 max-w-3xl mx-auto">
              Schedule a free consultation to discuss your project. No obligations, just expert advice and a detailed estimate.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveForm('consultation')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      activeForm === 'consultation'
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Free Consultation
                  </button>
                  <button
                    onClick={() => setActiveForm('quote')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      activeForm === 'quote'
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Request Quote
                  </button>
                </div>
              </CardHeader>

              <CardBody>
                {submitted && (
                  <div className="mb-6 bg-success-50 border border-success-400 text-success-600 rounded-lg p-4">
                    <p className="font-semibold">Thank you for your request!</p>
                    <p className="text-sm mt-1">We'll contact you within 24 hours to schedule your consultation. Redirecting you to the homepage...</p>
                  </div>
                )}

                {activeForm === 'consultation' ? (
                  <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        type="text"
                        required
                        value={consultationData.full_name}
                        onChange={(e) => setConsultationData({ ...consultationData, full_name: e.target.value })}
                        placeholder="John Smith"
                      />
                      <Input
                        label="Email"
                        type="email"
                        required
                        value={consultationData.email}
                        onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Phone Number"
                        type="tel"
                        required
                        value={consultationData.phone}
                        onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                        placeholder="(647) 780-4433"
                      />
                      <Select
                        label="Service Interested In"
                        required
                        value={consultationData.service_type}
                        onChange={(e) => setConsultationData({ ...consultationData, service_type: e.target.value })}
                        options={serviceOptions}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Preferred Date"
                        type="date"
                        value={consultationData.preferred_date}
                        onChange={(e) => setConsultationData({ ...consultationData, preferred_date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <Select
                        label="Preferred Time"
                        value={consultationData.preferred_time}
                        onChange={(e) => setConsultationData({ ...consultationData, preferred_time: e.target.value })}
                        options={timeOptions}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Property Address"
                        type="text"
                        value={consultationData.address}
                        onChange={(e) => setConsultationData({ ...consultationData, address: e.target.value })}
                        placeholder="123 Main St, Toronto, ON"
                        helperText="Optional - helps us prepare for your consultation"
                      />
                      <Select
                        label="Estimated Budget"
                        value={consultationData.budget_range}
                        onChange={(e) => setConsultationData({ ...consultationData, budget_range: e.target.value })}
                        options={budgetOptions}
                      />
                    </div>

                    <Textarea
                      label="Tell Us About Your Project"
                      value={consultationData.message}
                      onChange={(e) => setConsultationData({ ...consultationData, message: e.target.value })}
                      placeholder="Describe your vision, any specific requirements, or questions you have..."
                      helperText="Optional - any details you can provide help us prepare better"
                    />

                    <Button type="submit" size="lg" fullWidth disabled={loading}>
                      {loading ? 'Submitting...' : 'Schedule Free Consultation'}
                    </Button>

                    <p className="text-sm text-neutral-500 text-center">
                      By submitting this form, you agree to be contacted by JNJ Renovations regarding your project.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-neutral-600 mb-4">
                      For detailed quote requests, please schedule a consultation first so we can better understand your needs.
                    </p>
                    <Button onClick={() => setActiveForm('consultation')}>
                      Switch to Consultation Form
                    </Button>
                  </div>
                )}
              </CardBody>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-neutral-800">Contact Information</h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-neutral-800">Phone</div>
                    <a href="tel:(647) 780-4433" className="text-neutral-600 hover:text-primary-900 transition-colors">
                      (647) 780-4433
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-neutral-800">Email</div>
                    <a href="mailto:jnjrenovation@yahoo.com" className="text-neutral-600 hover:text-primary-900 transition-colors break-all">
                      jnjrenovation@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-neutral-800">Service Area</div>
                    <p className="text-neutral-600">Greater Toronto Area & Surrounding Communities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-neutral-800">Office Hours</div>
                    <p className="text-neutral-600">Mon-Fri: 8am - 6pm</p>
                    <p className="text-neutral-600">Sat: 9am - 4pm</p>
                    <p className="text-neutral-600">Sun: Closed</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
                <h4 className="text-xl font-bold mb-3">Emergency Services</h4>
                <p className="text-primary-100 mb-4">
                  Have an urgent renovation issue? We offer priority scheduling for emergency repairs and critical projects.
                </p>
                <a
                  href="tel:(647) 780-4433"
                  className="block w-full bg-white text-primary-900 text-center font-semibold py-3 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Call for Emergency Service
                </a>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center">
                <h4 className="text-lg font-bold text-neutral-800 mb-2">Response Time</h4>
                <p className="text-3xl font-bold text-primary-900 mb-2">24 Hours</p>
                <p className="text-sm text-neutral-600">
                  We respond to all consultation requests within one business day
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
