import { useState, useEffect } from 'react';
import { 
  ArrowLeft, Download, ExternalLink, ZoomIn, ZoomOut, RotateCcw, 
  ShieldCheck, Award, Building2, Calendar, CheckCircle2, Copy, Check, FileText
} from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

export default function CertificateDetailPage({ onBack }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);

  // Find Pega certificate details
  const cert = certificationsData.find(c => c.id === 'pega-internship') || certificationsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${cert.title} | ${personalInfo.name} Portfolio`;
    return () => {
      document.title = `${personalInfo.name} — ECE Student & Developer Portfolio`;
    };
  }, [cert]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  const handleZoomReset = () => setZoomLevel(1);

  const handleCopyId = () => {
    navigator.clipboard?.writeText(cert.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Back to Portfolio"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download Certificate PDF */}
            <a
              href={cert.pdfUrl}
              download="Dharun_SJ_Pega_National_Internship_Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download Certificate</span>
              <span className="sm:hidden">Download</span>
            </a>

            {/* LinkedIn Verification */}
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm transition-all shadow-sm active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span className="hidden sm:inline">Verify on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Certificate Title & Status Header */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wide">
              <Award className="w-4 h-4 text-blue-600" />
              <span>{cert.programType}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Credential • Active</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            {cert.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mb-6">
            {cert.subtitle}
          </p>

          {/* Quick Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100 text-sm">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-xs font-semibold text-slate-500 block mb-1">ISSUING ORGANIZATION</span>
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>{cert.issuer}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-xs font-semibold text-slate-500 block mb-1">COLLABORATION PARTNER</span>
              <div className="font-bold text-slate-900">SmartBridge</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-xs font-semibold text-slate-500 block mb-1">CANDIDATE</span>
              <div className="font-bold text-slate-900">{personalInfo.name}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-1">CREDENTIAL ID</span>
                <span className="font-mono text-xs font-bold text-blue-700">{cert.credentialId}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyId}
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 cursor-pointer transition-colors"
                title="Copy Credential ID"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Certificate Viewer Frame */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          {/* Viewer Toolbar */}
          <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Official Certificate Canvas Preview</span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="font-mono text-slate-600 px-2 min-w-[50px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomReset}
                className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 cursor-pointer transition-colors flex items-center gap-1 ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Canvas Scroll Area */}
          <div className="p-4 sm:p-8 bg-slate-100/60 overflow-auto flex items-center justify-center min-h-[460px] max-h-[750px]">
            <div 
              className="transition-transform duration-200 ease-out origin-center max-w-full shadow-xl rounded-xl overflow-hidden bg-white border border-slate-200"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={cert.previewImage}
                alt="National Level Internship Program Sponsored by Pega Certificate"
                className="w-full max-w-[1000px] h-auto object-contain block"
                loading="eager"
              />
            </div>
          </div>

          {/* Viewer Footer Callout */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Vector document asset hosted locally at <code className="px-1.5 py-0.5 rounded bg-slate-200 font-mono text-[11px] text-slate-800">{cert.previewImage}</code></span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <FileText className="w-3.5 h-3.5" />
                Open PDF in Dedicated Tab
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Program Overview & Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Program Overview &amp; Curriculum Focus
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
              {cert.description}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Key Competencies Mastered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {cert.competencies?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Core Technologies &amp; Architecture Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-mono text-xs font-semibold border border-blue-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Side Verification Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Authenticity Verification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                This certification has been cryptographically referenced and verified through SmartBridge and Pegasystems university program workflows.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-700 mb-6">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">INSTITUTION</span>
                  <span className="font-semibold text-slate-900">{personalInfo.institution}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">DATE OF COMPLETION</span>
                  <span className="font-semibold text-slate-900">{cert.date}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={cert.pdfUrl}
                download="Dharun_SJ_Pega_National_Internship_Certificate.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                Download Official Certificate
              </a>

              <button
                type="button"
                onClick={onBack}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Portfolio
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
