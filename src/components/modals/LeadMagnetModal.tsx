import { useState } from 'react';
import { X, Download, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { supabase, LeadMagnet } from '../../lib/supabase';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<LeadMagnet>({
    full_name: '',
    email: '',
    resource_type: 'renovation_planning_guide',
    interests: []
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('lead_magnets')
        .insert([formData]);

      if (error) throw error;

      setSubmitted(true);

      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({
          full_name: '',
          email: '',
          resource_type: 'renovation_planning_guide',
          interests: []
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting lead magnet:', error);
      alert('There was an error. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const toggleInterest = (interest: string) => {
    const currentInterests = formData.interests || [];
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest];

    setFormData({ ...formData, interests: newInterests });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6 border-b border-neutral-200">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary-900" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800">Free Planning Guide</h3>
              <p className="text-neutral-600">Your Complete Renovation Resource</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {!submitted ? (
            <>
              <div className="mb-6 bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-800 mb-2">What You'll Get:</h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-900 mt-0.5">✓</span>
                    <span>Step-by-step renovation planning checklist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-900 mt-0.5">✓</span>
                    <span>Budget estimation worksheet with real costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-900 mt-0.5">✓</span>
                    <span>Timeline planning templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-900 mt-0.5">✓</span>
                    <span>Questions to ask your contractor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-900 mt-0.5">✓</span>
                    <span>Material selection guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-900 mt-0.5">✓</span>
                    <span>Exclusive tips from our expert designers</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  type="text"
                  required
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  placeholder="John Smith"
                />

                <Input
                  label="Email Address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  helperText="We'll send the guide to this email"
                />

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-3">
                    Which renovations are you interested in?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Kitchen', 'Bathroom', 'Basement', 'Whole Home'].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest.toLowerCase())}
                        className={`px-4 py-3 rounded-lg border-2 font-medium transition-all duration-200 ${
                          formData.interests?.includes(interest.toLowerCase())
                            ? 'border-primary-900 bg-primary-50 text-primary-900'
                            : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" fullWidth disabled={loading}>
                  <Download className="w-5 h-5 mr-2 inline" />
                  {loading ? 'Sending...' : 'Download Free Guide'}
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  By downloading, you'll also receive helpful renovation tips and exclusive offers. Unsubscribe anytime.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-800 mb-2">Check Your Email!</h4>
              <p className="text-neutral-600 mb-4">
                Your free renovation planning guide is on its way to <span className="font-semibold">{formData.email}</span>
              </p>
              <p className="text-sm text-neutral-500">
                Don't see it? Check your spam folder or contact us for help.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
