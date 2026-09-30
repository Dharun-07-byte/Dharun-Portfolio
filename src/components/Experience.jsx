import { Building2, MapPin, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#168FE5]">
              CAREER &amp; TRAINING
            </span>
            <span className="w-8 h-0.5 bg-[#168FE5] rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight">
            Work Experience &amp; Internships
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-2">
            Practical industry exposure encompassing national low-code development, telecommunication systems, and industrial manufacturing workflows.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[#168FE5]/30 ml-4 sm:ml-8 space-y-10">
          {experienceData.map((exp, idx) => {
            const isPega = exp.company.toLowerCase().includes('pega');
            return (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Node Dot */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  isPega 
                    ? 'bg-[#168FE5] border-white shadow-sm' 
                    : 'bg-white border-[#168FE5]'
                }`} />

                {/* Experience Card */}
                <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 ${
                  isPega
                    ? 'bg-[#F5F8FC] border-[#168FE5]/40 shadow-xs'
                    : 'bg-white border-slate-200 shadow-2xs hover:shadow-xs'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#168FE5]/10 text-[#168FE5] text-xs font-mono font-bold">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#17202A] mb-1">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#168FE5] mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  {isPega && (
                    <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">Pega Systems</span>
                        <span className="px-2.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">Low-Code Architecture</span>
                        <span className="px-2.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">Workflow Automation</span>
                      </div>
                      <a
                        href="#certificates"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#168FE5] hover:underline"
                      >
                        <span>View Verified Certificate</span>
                        <Award className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
