import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
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
  const [activeSection, setActiveSection] = useState('about');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync route on popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut Ctrl+K
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

  // Scrollspy to highlight active section in sidebar
  useEffect(() => {
    if (currentRoute !== '/') return;

    const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'certificates', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

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
    <div className="min-h-screen bg-[#F5F8FC] text-[#1F2937] font-sans antialiased selection:bg-[#168FE5]/20 selection:text-[#0D74BE]">
      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#17202A] text-white shadow-2xl px-5 py-3.5 rounded-2xl flex items-center gap-4 animate-in slide-in-from-bottom duration-300">
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

      {/* When on Certificate Detail Page, show full-page dedicated viewer */}
      {isDetailPage ? (
        <CertificateDetailPage onBack={() => navigateTo('/#certificates')} />
      ) : (
        <div className="flex min-h-screen flex-col lg:flex-row">
          {/* Left Vertical Fixed Sidebar */}
          <Sidebar
            onOpenTerminal={() => setTerminalOpen(true)}
            activeSection={activeSection}
            onNavigate={navigateTo}
            isDetailPage={isDetailPage}
          />

          {/* Main Content Area (Offset on desktop for fixed sidebar; offset on mobile for topbar) */}
          <div className="flex-1 lg:ml-64 xl:ml-72 pt-16 lg:pt-0 min-w-0">
            <main>
              <Hero onOpenTerminal={() => setTerminalOpen(true)} onShowToast={showToast} />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Certifications onShowToast={showToast} onNavigateToCertificate={navigateTo} />
              <Achievements />
              <Contact onShowToast={showToast} />
            </main>

            <Footer />
          </div>
        </div>
      )}

      {/* Developer CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
