import { useState } from 'react';
import { 
  Award, Calendar, ExternalLink, ShieldCheck, CheckCircle2, X, Building2, 
  KeyRound, Sparkles, FileText, Check, Download, ZoomIn, Eye, ArrowRight
} from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

const categories = ["All", "Internships", "ECE & Hardware", "Programming", "Professional"];

export default function Certifications({ onShowToast, onNavigateToCertificate }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCerts = certificationsData.filter((c) => {
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOpenCertificate = (cert) => {
    if (cert.route && onNavigateToCertificate) {
      onNavigateToCertificate(cert.route);
    } else {
      setSelectedCert(cert);
      onShowToast?.(`Viewing certificate: ${cert.title}`);
    }
  };

  return (
    <section className="py-24 relative bg-slate-50/50" id="certifications">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Accredited Credentials &amp; Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Certificates &amp; <span className="gradient-text">Verified Achievements</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Officially accredited certifications and industrial internship credentials in enterprise workflow automation, embedded systems, VLSI logic, and full-stack programming.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by topic, skill, or issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-800"
            />
          </div>
        </div>

        {/* ========================================================
            FEATURED HERO CARD: Pega National Internship Program
            ======================================================== */}
        {activeCategory === "All" || activeCategory === "Internships" ? (
          <div className="mb-12">
            <div className="bg-white rounded-3xl border-2 border-blue-300/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
              {/* Highlight ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                {/* Left: Certificate Visual Thumbnail Frame */}
                <div className="lg:col-span-5 relative">
                  <div 
                    onClick={() => onNavigateToCertificate?.('/certificates/pega-internship')}
                    className="cursor-pointer group/thumb rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 relative aspect-[4/3] flex items-center justify-center transition-transform hover:scale-[1.01]"
                  >
                    <img
                      src="/certificates/pega-internship-preview.svg"
                      alt="National Level Internship Program - Sponsored by Pega"
                      className="w-full h-full object-cover block"
                      loading="eager"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-xs">
                      <Eye className="w-4 h-4" />
                      <span>Click to Open Certificate Viewer</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
                    <span>ID: SMARTBRIDGE-PEGA-2024</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Verified Credential
                    </span>
                  </div>
                </div>

                {/* Right: Certificate Information & Action Buttons */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold font-mono">
                        National Level Internship Program
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                        Pega &amp; SmartBridge
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                        Completed 2024
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                      National Level Internship Program – Sponsored by Pega
                    </h3>
                    <h4 className="text-sm font-semibold text-blue-700 mb-3">
                      Enterprise Workflow Automation &amp; Low-Code Architecture
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Completed the prestigious National Level Internship Program sponsored by Pegasystems (Pega) in partnership with SmartBridge. Mastered enterprise low-code application development, case life cycle management, business rule automation, and cloud system integration on the Pega Infinity architecture.
                    </p>

                    {/* Key Competencies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {[
                        "Pega Systems", 
                        "Low-Code Architecture", 
                        "Workflow Automation", 
                        "Case Lifecycle", 
                        "System Integration"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-medium border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    {/* View Certificate (Navigates to dedicated page) */}
                    <button
                      type="button"
                      onClick={() => onNavigateToCertificate ? onNavigateToCertificate('/certificates/pega-internship') : setSelectedCert(certificationsData[0])}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer hover:gap-3"
                    >
                      <span>View Certificate</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Download / Open PDF */}
                    <a
                      href="/certificates/pega-internship.pdf"
                      download="Dharun_SJ_Pega_National_Internship_Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition-all shadow-xs"
                    >
                      <Download className="w-4 h-4 text-blue-600" />
                      <span>Download PDF</span>
                    </a>

                    {/* Verify on LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/dharun-jaganathan-b8ab43379"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs sm:text-sm transition-all shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      <span>LinkedIn Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* ========================================================
            GRID OF ALL OTHER CERTIFICATES & CREDENTIALS
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts
            .filter(c => c.id !== 'pega-internship')
            .map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-mono font-bold border border-blue-200">
                      {cert.badge || cert.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <Check className="w-3 h-3" /> Verified
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                    {cert.title}
                  </h4>
                  {cert.subtitle && (
                    <p className="text-xs text-blue-600 font-semibold mb-3">
                      {cert.subtitle}
                    </p>
                  )}

                  {/* Issuer */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>
                  )}

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-[11px] text-slate-700 font-mono font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-[11px] font-mono text-slate-400 truncate max-w-[130px]">
                    {cert.credentialId}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View Modal Details */}
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                    >
                      Details
                    </button>

                    {/* LinkedIn Verify */}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold transition-all"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      Verify
                      <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Award className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-semibold text-sm">No certifications found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              type="button"
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

        {/* ========================================================
            MODAL DRAWER PREVIEW FOR OTHER CERTIFICATES
            ======================================================== */}
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" 
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold">
                  <Check className="w-3.5 h-3.5" /> Verified Credential
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Digital Certificate Preview Frame */}
              <div className="border-2 border-slate-200 rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden text-center mb-6">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"></div>

                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500">
                  Certificate of Achievement &amp; Coursework
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-1">
                  {selectedCert.title}
                </h3>

                {selectedCert.subtitle && (
                  <p className="text-xs text-blue-600 font-semibold mb-4">
                    {selectedCert.subtitle}
                  </p>
                )}

                <p className="text-xs text-slate-600 mb-1">This certifies that</p>
                <h4 className="text-xl font-extrabold text-slate-900 mb-1">
                  {personalInfo.name}
                </h4>
                <p className="text-xs text-slate-500 mb-4">{personalInfo.institution}</p>

                <p className="text-xs text-slate-700 leading-relaxed max-w-lg mx-auto mb-5">
                  {selectedCert.description || `Successfully fulfilled all curriculum requirements, evaluations, and practical implementations accredited by ${selectedCert.issuer}.`}
                </p>

                {/* Skills tags in modal */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {selectedCert.skills.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded bg-blue-50 text-[11px] text-blue-700 font-mono border border-blue-200 font-medium">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Credential Details Row */}
                <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-2 text-left font-mono text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">ISSUING AUTHORITY</span>
                    <span className="font-semibold text-slate-800">{selectedCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">CREDENTIAL ID</span>
                    <span className="font-semibold text-blue-600">{selectedCert.credentialId}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block text-[10px]">VERIFICATION STATUS</span>
                    <span className="font-semibold text-emerald-600">Active &amp; Verified 🟢</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#004182] transition-all w-full sm:w-auto justify-center shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    Verify on LinkedIn
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-all w-full sm:w-auto justify-center"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Resume (PDF)
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-200 transition-all w-full sm:w-auto cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
