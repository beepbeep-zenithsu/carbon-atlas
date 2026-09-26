import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-ca-panel)] bg-[var(--color-ca-main)] py-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-ca-text-secondary)]">
        <p>&copy; {new Date().getFullYear()} Carbon Atlas Project. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-[var(--color-ca-lime)] transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[var(--color-ca-lime)] transition-colors">Terms of Service</Link>
          <Link to="/contact" className="hover:text-[var(--color-ca-lime)] transition-colors">Contact Support</Link>
        </div>
      </div>
    </footer>
  );
}