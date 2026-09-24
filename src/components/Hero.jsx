import { ArrowRight, Download, Mail, ExternalLink, Award, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenTerminal, onShowToast }) {
  const handleDownloadResume = () => {
    onShowToast?.("Downloading S.J Dharun's Resume (PDF)... 📄");
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dharun_SJ_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-[90vh] lg:min-h-screen flex items-center justify-center py-12 lg:py-20 relative bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Introduction & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Small Pre-heading */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#168FE5]">
                HELLO, I'M
              </span>
              <span className="w-8 h-0.5 bg-[#168FE5] rounded-full"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#17202A] tracking-tight leading-[1.08] mb-4">
              S.J DHARUN
            </h1>

            {/* Subheading */}
            <h2 className="text-sm sm:text-base lg:text-lg font-bold text-[#168FE5] tracking-wide uppercase mb-6 flex flex-wrap items-center gap-2">
              <span>ECE STUDENT</span>
              <span className="text-slate-300">•</span>
              <span>DEVELOPER</span>
              <span className="text-slate-300">•</span>
              <span>TECHNOLOGY ENTHUSIAST</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              I am an Electronics and Communication Engineering student passionate about software development, emerging technologies, cybersecurity, and building practical digital solutions.
            </p>

            {/* Quick Metadata Snippet */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-500 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-slate-700 font-semibold">{personalInfo.institution}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="text-[#168FE5] font-semibold">
                CGPA: {personalInfo.cgpa}
              </div>
            </div>

            {/* Two Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#168FE5] hover:bg-[#0D74BE] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-[#168FE5] text-[#17202A] hover:text-[#168FE5] font-bold text-sm tracking-wide shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#168FE5]" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>

            {/* Subtle Social Media Links */}
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Connect:</span>
              
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-[#168FE5] transition-colors p-1"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

              <a
                href={personalInfo.socials.githubProfile}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-[#168FE5] transition-colors p-1"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-[#168FE5] transition-colors p-1"
                aria-label="LeetCode Profile"
                title="LeetCode"
              >
                <span className="font-mono text-xs font-bold">LC</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-600 hover:text-[#168FE5] transition-colors p-1"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Large Rectangular Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle Blue Underlay Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-[#168FE5]/10 -rotate-1 hidden sm:block"></div>
              
              {/* Portrait Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="S.J Dharun"
                  className="w-full h-auto object-cover block aspect-[3/4]"
                  loading="eager"
                />
                
                {/* Subtle Bottom Information Tag */}
                <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-extrabold text-[#17202A]">{personalInfo.name}</div>
                    <div className="text-slate-500 font-medium">B.E. ECE • Batch of 2028</div>
                  </div>
                  <a
                    href="#certificates"
                    className="inline-flex items-center gap-1 text-[#168FE5] font-bold hover:underline"
                  >
                    <span>Pega Verified</span>
                    <Award className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
