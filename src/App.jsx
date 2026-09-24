import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import CertificateDetailPage from './components/CertificateDetailPage';
import { X } from 'lucide-react';
import './App.css';

const getInitialRoute = () => {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname;
  const hash = window.location.hash;
  if (path.includes('/certificates/pega-internship') || hash.includes('/certificates/pega-internship')) {
    return '/certificates/pega-internship';
  }
  return '/';
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  const navigateTo = (route) => {
    if (route.startsWith('/#')) {
      window.history.pushState({}, '', '/');
      setCurrentRoute('/');
      setTimeout(() => {
        const id = route.replace('/#', '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.history.pushState({}, '', route);
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const isDetailPage = currentRoute === '/certificates/pega-internship';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans relative selection:bg-blue-100 selection:text-blue-900">
      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 border border-blue-500/30 text-white shadow-2xl px-5 py-3.5 rounded-2xl flex items-center gap-4 backdrop-blur-xl animate-in slide-in-from-bottom duration-300">
          <span className="text-sm font-semibold">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)} 
        onNavigate={navigateTo}
        isDetailPage={isDetailPage}
      />

      {/* Main Content: Either Dedicated Certificate Detail Page or Full Portfolio */}
      {isDetailPage ? (
        <CertificateDetailPage onBack={() => navigateTo('/#certifications')} />
      ) : (
        <main>
          <Hero onOpenTerminal={() => setTerminalOpen(true)} onShowToast={showToast} />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Certifications 
            onShowToast={showToast} 
            onNavigateToCertificate={navigateTo} 
          />
          <Resume onShowToast={showToast} />
          <Contact onShowToast={showToast} />
        </main>
      )}

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Developer CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
