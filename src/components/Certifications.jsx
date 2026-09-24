import { useState } from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, CheckCircle2, X, Building2, KeyRound, Sparkles, FileText, Check } from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

const categories = ["All", "Internships", "ECE & Hardware", "Programming", "Professional"];

export default function Certifications({ onShowToast }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCerts = activeCategory === "All"
    ? certificationsData
    : certificationsData.filter(c => c.category === activeCategory);

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
    onShowToast?.(`Viewing certificate: ${cert.title}`);
  };

  return (
    <section className="py-24 relative" id="certifications">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none pulse-circle"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5" /> Qualifications & Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-slate-600 text-base">
            Verified course certifications from Pega / SmartBridge, NIELIT, CISCO Networking Academy, Infosys Springboard, Salesforce, and HP Foundation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden group ${
                cert.featured
                  ? 'border-blue-400 shadow-md ring-2 ring-blue-500/10 hover:border-blue-500 hover:shadow-lg'
                  : 'border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300'
              }`}
            >
              {/* Card Top / Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    {cert.badge && (
                      <span className="font-mono text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                        {cert.badge}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 font-mono text-xs text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>

                {/* Subtitle */}
                {cert.subtitle && (
                  <p className="text-xs text-slate-500 font-semibold mb-3">
                    {cert.subtitle}
                  </p>
                )}

                {/* Issuing Organization */}
                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-semibold mb-3">
                  <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Description */}
                {cert.description && (
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                )}

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded bg-blue-50 text-[11px] text-blue-700 font-mono border border-blue-200 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Footer */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 truncate max-w-[200px]">
                  <KeyRound className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{cert.credentialId}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* Digital Certificate Preview Modal Button */}
                  <button
                    type="button"
                    onClick={() => handleViewCertificate(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-all cursor-pointer"
                  >
                    Preview
                  </button>

                  {/* Direct Verify on LinkedIn */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold shadow-xs hover:shadow transition-all justify-center"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Drawer Preview */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setSelectedCert(null)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold">
                  <Check className="w-3.5 h-3.5" /> Verified Credential
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Digital Certificate Preview Frame */}
              <div className="border-2 border-slate-200 rounded-xl p-6 sm:p-8 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden text-center mb-6">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"></div>

                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500">
                  Certificate of Achievement & Coursework
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
                    <span className="font-semibold text-emerald-600">Active & Verified 🟢</span>
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#004182] transition-all w-full sm:w-auto justify-center shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    Verify on LinkedIn
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-all w-full sm:w-auto justify-center"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Resume (PDF)
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-200 transition-all w-full sm:w-auto cursor-pointer"
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
