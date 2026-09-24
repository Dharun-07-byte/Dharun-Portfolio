import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal, onNavigate, isDetailPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certifications" },
    { name: "Achievements", href: "#education" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    if (isDetailPage) {
      e.preventDefault();
      onNavigate?.(`/${href}`);
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs'
          : 'py-4 sm:py-5 bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href={isDetailPage ? "/" : "#"} 
          onClick={(e) => {
            if (isDetailPage) {
              e.preventDefault();
              onNavigate?.('/');
            }
          }}
          className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight group"
        >
          <div className="p-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-slate-900">
            {personalInfo.shortName}<span className="text-blue-600">.ece</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Quick Certificate Highlight Link */}
          <button
            type="button"
            onClick={() => onNavigate?.('/certificates/pega-internship')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold transition-all cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Pega Credential</span>
          </button>

          {/* CLI Mode button */}
          <button
            type="button"
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-100 hover:bg-slate-800 font-mono text-xs font-semibold transition-all hover:scale-105 shadow-xs cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            CLI
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-blue-600 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[62px] right-0 w-72 h-[calc(100vh-62px)] bg-white/98 backdrop-blur-2xl border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
              Menu Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.name === "Certificates" && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">New</span>
                )}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigate?.('/certificates/pega-internship');
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold cursor-pointer"
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span>Pega Certificate Page</span>
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs font-semibold cursor-pointer shadow-md"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
              CLI Terminal (Ctrl+K)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
