import { useState } from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, CheckCircle2, X, Building2, KeyRound } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications({ onShowToast }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
    onShowToast?.(`Viewing ${cert.title}`);
  };

  return (
    <section className="py-24 relative" id="certifications">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none pulse-circle"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5" /> Qualifications & Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-slate-600 text-base">
            Verified course certifications from NIELIT, CISCO Networking Academy, Infosys Springboard, Salesforce, and HP Foundation.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card Top / Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuing Organization */}
                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-semibold mb-4">
                  <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded bg-blue-50 text-[11px] text-blue-700 font-mono border border-blue-200 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Footer (Credential ID & View Certificate Button) */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 truncate max-w-[240px]">
                  <KeyRound className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{cert.credentialId}</span>
                </div>

                {/* View Certificate Button */}
                <button
                  type="button"
                  onClick={() => handleViewCertificate(cert)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all w-full sm:w-auto justify-center cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Drawer Preview */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setSelectedCert(null)}>
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      Verified Certificate
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedCert.title}</h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Issuer:</span>
                    <span className="font-bold text-slate-900">{selectedCert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Credential ID:</span>
                    <span className="font-bold text-blue-600">{selectedCert.credentialId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-bold text-emerald-600">Verified 🟢</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-200 cursor-pointer"
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
