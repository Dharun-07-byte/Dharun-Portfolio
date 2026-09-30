import { Code2, Layout, Cpu, Globe2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  code: Code2,
  layout: Layout,
  cpu: Cpu,
  globe: Globe2
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-24 bg-[#F5F8FC] border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#168FE5]">
              TECHNICAL COMPETENCIES
            </span>
            <span className="w-8 h-0.5 bg-[#168FE5] rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight">
            Skills &amp; Capabilities
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-2">
            A comprehensive overview of programming languages, hardware foundations, web technologies, and engineering tools.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[category.iconKey] || Code2;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#168FE5]/40 hover:shadow-sm transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FE] text-[#168FE5] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#17202A]">
                      {category.name}
                    </h3>
                    <span className="text-xs font-medium text-slate-400">
                      {category.skills.length} Competencies
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-[#168FE5]/50 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-sm text-[#17202A]">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-[#168FE5] border border-blue-100">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
