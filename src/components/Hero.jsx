import { useState, useEffect } from 'react';
import { ArrowRight, Download, Cpu, Mail, Shield, Brain, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const techFocusList = [
  "Software Development",
  "Cybersecurity",
  "Artificial Intelligence",
  "Emerging Technologies"
];

export default function Hero({ onOpenTerminal, onShowToast }) {
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % techFocusList.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    // Simulated resume download feedback
    onShowToast?.("Downloading S.J Dharun's Resume (PDF)... 📄");
    
    // Create an anchor element to trigger download or open placeholder
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'S.J_Dharun_ECE_Resume.pdf');
    document.body.appendChild(link);
    setTimeout(() => {
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <section className="relative min-h-screen pt-36 pb-20 flex items-center overflow-hidden" id="hero">
      {/* Subtle Animated Background Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none pulse-circle"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-600/15 blur-[140px] pointer-events-none pulse-circle"></div>
      
      {/* Floating subtle tech grid node elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* ECE Department Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wide mb-6 shadow-xs">
            <Cpu className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>Electronics and Communication Engineering Student</span>
          </div>

          {/* Headline Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Changing Tech Focus Subtitle */}
          <div className="flex items-center text-lg sm:text-xl font-mono font-bold text-slate-800 mb-6">
            <span className="text-blue-600 mr-2">&gt;</span>
            <span className="text-slate-500 mr-2">Focusing on:</span>
            <span className="gradient-text-emerald min-h-[32px] flex items-center">
              {techFocusList[focusIndex]}
            </span>
            <span className="text-blue-600 animate-pulse ml-1">|</span>
          </div>

          {/* Professional Introduction Paragraph */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            I am an Electronics and Communication Engineering (ECE) student passionate about <strong className="text-slate-900 font-semibold">software development</strong>, <strong className="text-blue-600 font-semibold">cybersecurity</strong>, <strong className="text-indigo-600 font-semibold">AI</strong>, and <strong className="text-emerald-600 font-semibold">emerging technologies</strong>. I focus on connecting core hardware principles with modern web applications and secure logic design.
          </p>

          {/* Two Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-blue-500 hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-600" />
              Download Resume
            </button>
          </div>

          {/* Social Links Row (GitHub, LinkedIn, LeetCode, Email) */}
          <div className="w-full pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
              <span className="font-semibold text-slate-400 uppercase tracking-wider">Connect:</span>
              
              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>

              {/* LeetCode */}
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-300 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 24 24"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.178 1.824.645l2.697 2.607c.507.493 1.343.493 1.85 0 .507-.494.507-1.297 0-1.79l-2.697-2.607c-1.026-1.026-2.42-1.488-3.974-1.488s-2.948.462-3.974 1.488l-4.319 4.38c-1.026 1.026-1.536 2.446-1.536 4.001 0 1.554.51 2.975 1.536 4.001l4.332 4.363c1.026 1.026 2.42 1.488 3.974 1.488s2.948-.462 3.974-1.488l2.697-2.607c.507-.494.507-1.297 0-1.791-.507-.493-1.343-.493-1.85 0zM21.5 12h-8c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25S22.19 12 21.5 12z"/></svg>
                <span>LeetCode</span>
              </a>

              {/* Email */}
              <a
                href={personalInfo.socials.email}
                aria-label="Send Email"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Email</span>
              </a>
            </div>

            {/* Quick CLI mode link */}
            <button
              type="button"
              onClick={onOpenTerminal}
              className="text-xs font-mono text-indigo-600 hover:text-blue-700 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>$_ Terminal CLI</span>
            </button>
          </div>
        </div>

        {/* Right Column Professional Developer & Technology Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/80 border border-slate-200 group">
            {/* Window Top Bar */}
            <div className="px-4 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
              </div>
              <span className="font-mono text-xs text-slate-500 font-medium">s_j_dharun_profile.ts</span>
            </div>

            {/* Body Visual */}
            <div className="p-6 flex flex-col gap-5">
              {/* Developer Avatar Image - Full Image on Pristine White Background */}
              <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white p-2 flex items-center justify-center shadow-inner">
                <img
                  src="/profile.jpg"
                  alt="Dharun S.J - ECE Engineer Profile"
                  className="w-full h-auto max-h-[460px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              {/* Four Interest Pillars Cards */}
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700">
                  <Code className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Web Dev</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700">
                  <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">Cybersecurity</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700">
                  <Brain className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="truncate">AI Tech</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700">
                  <Cpu className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="truncate">ECE Logic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
