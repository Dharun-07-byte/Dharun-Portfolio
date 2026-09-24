import { useState, useEffect } from 'react';
import { 
  User, Briefcase, Wrench, FolderGit2, Award, Trophy, Mail, 
  Menu, X, Terminal, ExternalLink, ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Sidebar({ onOpenTerminal, activeSection, onNavigate, isDetailPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
    { id: 'skills', label: 'SKILLS', icon: Wrench },
    { id: 'projects', label: 'PROJECTS', icon: FolderGit2 },
    { id: 'certificates', label: 'CERTIFICATES', icon: Award },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: Trophy },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    if (isDetailPage) {
      onNavigate?.(`/#${id}`);
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* ========================================================
          MOBILE TOP NAVBAR (Visible on screens < 1024px)
          ======================================================== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#168FE5] text-white z-50 px-4 flex items-center justify-between shadow-md">
        <a 
          href={isDetailPage ? "/" : "#home"}
          onClick={(e) => {
            if (isDetailPage) {
              e.preventDefault();
              onNavigate?.('/');
            }
          }}
          className="flex items-center gap-3"
        >
          <img
            src="/profile.jpg"
            alt={personalInfo.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white/80 shadow-xs"
          />
          <div>
            <div className="font-extrabold text-sm tracking-wider uppercase">{personalInfo.name}</div>
            <div className="text-[11px] text-blue-100 font-medium tracking-tight">ECE Student • Developer</div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Open CLI"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ========================================================
          FIXED VERTICAL SIDEBAR
          (Fixed left sidebar on desktop; Slide-out drawer on mobile)
          ======================================================== */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-64 xl:w-72 bg-[#168FE5] text-white z-50 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Section: Profile Picture, Name & Title */}
        <div className="p-6 sm:p-7 text-center border-b border-white/15">
          <div className="relative inline-block mx-auto mb-4 group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-white shadow-lg mx-auto bg-blue-100">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#168FE5]" title="Available for opportunities"></span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider uppercase text-white mb-1">
            {personalInfo.name}
          </h2>
          <p className="text-xs sm:text-[13px] text-blue-100 font-semibold tracking-wide uppercase">
            ECE <span className="opacity-60">•</span> Developer
          </p>
        </div>

        {/* Middle Navigation Menu */}
        <nav className="flex-1 px-4 py-5 overflow-y-auto space-y-1.5 font-sans">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-[#168FE5] shadow-sm translate-x-1'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#168FE5]' : 'text-blue-200'}`} />
                <span>{item.label}</span>
                {item.id === 'certificates' && (
                  <span className={`ml-auto text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-blue-100 text-[#168FE5]' : 'bg-white/20 text-white'
                  }`}>
                    PEGA
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Social Media Links & CLI Mode */}
        <div className="p-5 border-t border-white/15 bg-black/10">
          <div className="flex items-center justify-around gap-2 mb-3">
            {/* LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#168FE5] transition-all shadow-xs"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.socials.githubProfile}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#168FE5] transition-all shadow-xs"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#168FE5] transition-all shadow-xs"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* CLI Mode */}
            <button
              type="button"
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#168FE5] transition-all shadow-xs"
              title="Interactive Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center text-[11px] text-blue-100/80 font-medium">
            © 2026 {personalInfo.name}
          </div>
        </div>
      </aside>
    </>
  );
}
