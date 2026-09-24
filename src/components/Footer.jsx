import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <div className="font-bold text-slate-800 text-sm mb-0.5">
            © 2026 {personalInfo.name}
          </div>
          <div className="text-slate-400">
            ECE Student <span className="opacity-60">•</span> Developer
          </div>
        </div>

        <div className="flex items-center gap-5 font-semibold text-slate-600">
          <a
            href={personalInfo.socials.githubProfile}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#168FE5] transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#168FE5] transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#168FE5] transition-colors"
          >
            Email
          </a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
