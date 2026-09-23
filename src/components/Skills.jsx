import { Code2, Layout, Cpu, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  code: <Code2 className="w-6 h-6 text-cyan-400" />,
  layout: <Layout className="w-6 h-6 text-blue-400" />,
  cpu: <Cpu className="w-6 h-6 text-purple-400" />,
  globe: <Globe2 className="w-6 h-6 text-emerald-400" />
};

export default function Skills() {
  return (
    <section className="py-24 relative" id="skills">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none pulse-circle"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-600 text-base">
            Categorized technical capabilities across Programming, Web Engineering, ECE Hardware, and Emerging Technologies.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 group-hover:bg-blue-100 transition-colors">
                  {categoryIcons[category.iconKey] || <Code2 className="w-6 h-6 text-blue-600" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {category.skills.length} Core Skills
                  </span>
                </div>
              </div>

              {/* Skills Cards Grid inside Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-mono border border-blue-200 font-medium">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
