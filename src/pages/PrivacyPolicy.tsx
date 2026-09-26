import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 md:px-6 py-16 text-[var(--color-ca-text-primary)]">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-[var(--color-ca-mint)] hover:underline mb-8">
        <ArrowLeft size={14} /> Back
      </button>
      <h1 className="ca-heading-gradient text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-[var(--color-ca-text-secondary)] leading-relaxed">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">1. Information We Collect</h2>
        <p>Carbon Atlas is an assessment tool designed to help your organization track and reduce its carbon footprint. We collect the energy consumption data you input into the assessment forms (e.g., fuel usage, electricity consumption, refrigerant leakage). We do not collect personal identifiable information (PII) unless voluntarily provided.</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">2. How We Use Your Data</h2>
        <p>The data you provide is used solely to generate your Carbon Report, including the source contribution charts, top contributing activities, and improvement recommendations. Your data is not sold or shared with third-party advertisers.</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">3. Data Security</h2>
        <p>We implement industry-standard security measures to protect your assessment data. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">4. Your Rights</h2>
        <p>You have the right to access, correct, or delete your assessment data at any time by using the "Start again from scratch" button in the Carbon Report or by contacting our support team.</p>
      </div>
    </div>
  );
}