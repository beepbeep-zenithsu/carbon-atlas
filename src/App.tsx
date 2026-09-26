import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AmbientBackdrop from './components/ambient/AmbientBackdrop';
import CustomCursor from './components/ambient/CustomCursor';
import PageLoader from './components/ambient/PageLoader';

import LandingFeature from './features/landing/LandingFeature';
import AssessmentFlow from './features/assessment/AssessmentFlow';
import CarbonReport from './features/results/CarbonReport';
import CarbonChatbot from './features/chatbot/CarbonChatbot.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactSupport from './pages/ContactSupport';
import { AssessmentProvider } from './features/assessment/AssessmentContext';

function ErrorFallback({ error }: { error: unknown }) {
  const message = error instanceof Error ? error.message : String(error);
  return (
    <div role="alert" className="p-8 text-[var(--color-ca-error)] bg-[var(--color-ca-panel)] rounded-xl m-8">
      <h2 className="text-xl font-heading mb-4">Something went wrong:</h2>
      <pre className="font-mono text-sm whitespace-pre-wrap">{message}</pre>
    </div>
  );
}

function App() {
  const [reduceMotion, setReduceMotion] = useState(false);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <PageLoader reduceMotion={reduceMotion} />
      <CustomCursor reduceMotion={reduceMotion} />
      <HashRouter>
        <AssessmentProvider>
          <div className={`min-h-screen flex flex-col relative ${reduceMotion ? 'reduce-motion' : ''}`}>
            <AmbientBackdrop reduceMotion={reduceMotion} />
            <Header reduceMotion={reduceMotion} setReduceMotion={setReduceMotion} />

            <main className="flex-1 w-full relative z-10">
              <Routes>
                <Route path="/" element={<LandingFeature reduceMotion={reduceMotion} />} />
                <Route path="/assessment/:categoryId" element={<AssessmentFlow />} />
                <Route path="/report" element={<CarbonReport />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactSupport />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />
            <CarbonChatbot />
          </div>
        </AssessmentProvider>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;