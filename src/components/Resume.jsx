import { FileText, Download, ExternalLink, CheckCircle2, FileCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Resume({ onShowToast }) {
  const handleDownload = () => {
    onShowToast?.("Downloading S.J Dharun's Resume (PDF)... 📄");
  };

  const handleView = () => {
    onShowToast?.("Opening S.J Dharun's Resume in a new tab... 👁️");
  };

  return (
    <section className="py-24 relative" id="resume">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none pulse-circle"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-xs">
            <FileText className="w-3.5 h-3.5" /> Professional Document
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Resume & <span className="gradient-text">Profile Summary</span>
          </h2>
          <p className="text-slate-700 font-semibold text-base">
            Review my professional background or download/view my official resume document.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Short Professional Summary */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-slate-200 border-l-4 border-l-blue-600 shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 border border-indigo-300 text-indigo-900 text-xs font-mono font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-indigo-700" /> Executive Overview
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                {personalInfo.name} — <span className="text-blue-600">Professional Summary</span>
              </h3>

              <p className="text-slate-800 font-medium text-base leading-relaxed mb-6">
                Electronics and Communication Engineering (ECE) student with a strong passion for <strong className="text-blue-700 font-extrabold">software development</strong>, <strong className="text-indigo-700 font-extrabold">cybersecurity</strong>, <strong className="text-purple-700 font-extrabold">AI</strong>, and <strong className="text-emerald-700 font-extrabold">emerging technologies</strong>. Demonstrated capability in building modular web applications, logic design, and system architecture.
              </p>

              {/* Core Skill Summary Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <span><strong className="font-extrabold text-slate-900">ECE Core:</strong> Digital Electronics, Microprocessors, Microcontrollers, and Embedded Logic.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong className="font-extrabold text-slate-900">Software Engineering:</strong> React 19, Vite, JavaScript, Tailwind CSS, Python, C, and C++.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-1" />
                  <span><strong className="font-extrabold text-slate-900">Internship & Experience:</strong> National Internship Program (Pega / SmartBridge), BSNL In-Plant Training, and Coral Engineering.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                  <span><strong className="font-extrabold text-slate-900">Technology Domains:</strong> Artificial Intelligence workflows, Cybersecurity principles, and Git/GitHub version control.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs font-mono font-bold text-slate-700">
              <span>Path: </span>
              <code className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-extrabold">/public/resume.pdf</code>
            </div>
          </div>

          {/* Right Column: Resume Card & Action Buttons */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 flex flex-col justify-between border border-slate-200 shadow-md group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-blue-100 border border-blue-300 text-blue-700">
                  <FileCheck className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-extrabold">
                  PDF Format Ready
                </span>
              </div>

              <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Curriculum Vitae Document
              </h4>
              <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                Official resume containing comprehensive details on coursework, projects, engineering skills, and contact details.
              </p>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 font-mono text-xs text-slate-900 space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-bold">File Name:</span>
                  <span className="text-slate-950 font-extrabold">S.J_Dharun_Resume.pdf</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-bold">File Path:</span>
                  <span className="text-blue-700 font-extrabold">/public/resume.pdf</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-bold">Status:</span>
                  <span className="text-emerald-700 font-extrabold">Active PDF Document</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Download Resume & View Resume */}
            <div className="space-y-3">
              <a
                href="/resume.pdf"
                download="S.J_Dharun_Resume.pdf"
                onClick={handleDownload}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={handleView}
                className="w-full py-3.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 font-extrabold text-sm hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-blue-600" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
