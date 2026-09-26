import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 md:px-6 py-16 text-[var(--color-ca-text-primary)]">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-[var(--color-ca-mint)] hover:underline mb-8">
        <ArrowLeft size={14} /> Back
      </button>
      <h1 className="ca-heading-gradient text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-6 text-sm text-[var(--color-ca-text-secondary)] leading-relaxed">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">1. Acceptance of Terms</h2>
        <p>By accessing and using Carbon Atlas, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use this tool.</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">2. Estimation and Accuracy</h2>
        <p>Carbon Atlas provides estimations based on the data you input. The calculations are for informational and educational purposes only. We do not guarantee the accuracy, completeness, or usefulness of the carbon calculations. This tool should not be used as the sole basis for regulatory compliance or legal reporting.</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">3. User Responsibilities</h2>
        <p>You are responsible for ensuring the accuracy of the data you input. You agree not to use this tool for any unlawful purpose or in any way that could damage the Carbon Atlas project.</p>
        <h2 className="text-lg font-semibold text-[var(--color-ca-text-primary)] mt-6">4. Limitation of Liability</h2>
        <p>In no event shall Carbon Atlas or its developers be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this tool.</p>
      </div>
    </div>
  );
}