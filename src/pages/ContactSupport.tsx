import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactSupport() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 md:px-6 py-16 text-[var(--color-ca-text-primary)]">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-[var(--color-ca-mint)] hover:underline mb-8">
        <ArrowLeft size={14} /> Back
      </button>
      <h1 className="ca-heading-gradient text-3xl font-bold mb-6">Contact Support</h1>
      <p className="text-[var(--color-ca-text-secondary)] mb-8">
        If you have any questions, feedback, or need assistance with your carbon assessment, please reach out to our team.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-[var(--color-ca-elevated)] rounded-xl border border-[#23382D]">
          <Mail className="text-[var(--color-ca-lime)] mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-[var(--color-ca-text-primary)]">Email</h3>
            <p className="text-sm text-[var(--color-ca-text-secondary)]">rafiulmicrosoft2025@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-[var(--color-ca-elevated)] rounded-xl border border-[#23382D]">
          <Phone className="text-[var(--color-ca-lime)] mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-[var(--color-ca-text-primary)]">Phone</h3>
            <p className="text-sm text-[var(--color-ca-text-secondary)]">01814-924640</p>
            <p className="text-xs text-[var(--color-ca-text-secondary)] mt-1">Available: Sunday - Thursday, 9:00 AM - 5:00 PM (BST)</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-[var(--color-ca-elevated)] rounded-xl border border-[#23382D]">
          <MapPin className="text-[var(--color-ca-lime)] mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-[var(--color-ca-text-primary)]">Office</h3>
            <p className="text-sm text-[var(--color-ca-text-secondary)]">IUT, Boardbazar, Gazipur, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}