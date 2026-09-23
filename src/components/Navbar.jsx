import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-200/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight group">
          <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-105 transition-transform shadow-xs">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-slate-900">
            {personalInfo.shortName}<span className="text-blue-600">.ece</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}

          <button
            type="button"
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-100 hover:bg-slate-800 font-mono text-xs font-semibold transition-all hover:scale-105 shadow-md cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            CLI Mode
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-blue-600"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[60px] right-0 w-64 h-[calc(100vh-60px)] bg-white/95 backdrop-blur-2xl border-l border-slate-200 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-right duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenTerminal();
            }}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs font-semibold cursor-pointer shadow-md"
          >
            <Terminal className="w-4 h-4 text-blue-400" />
            CLI Mode (Ctrl+K)
          </button>
        </div>
      )}
    </header>
  );
}
