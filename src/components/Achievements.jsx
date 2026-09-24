import { Trophy, Award, HeartHandshake, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { extraCurricularData } from '../data/portfolioData';

const achievementIcons = {
  "Technical Competition": Trophy,
  "Academic Quiz": Award,
  "Environmental Quiz": Award,
  "National Campus Quiz": Trophy,
  "Community Service": HeartHandshake,
  "Wellness & Discipline": Shield,
  "Sports Achievement": Trophy,
  "Olympiad / Competition": Award
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#168FE5]">
              HONORS &amp; PARTICIPATION
            </span>
            <span className="w-8 h-0.5 bg-[#168FE5] rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight">
            Academic &amp; Extracurricular Achievements
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-2">
            Verified co-curricular competitions, national campus quizzes, sports milestones, and long-standing community volunteering.
          </p>
        </div>

        {/* Minimal Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extraCurricularData.map((item, idx) => {
            const Icon = achievementIcons[item.type] || Trophy;
            return (
              <div
                key={idx}
                className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#168FE5]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EBF5FE] text-[#168FE5] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#17202A] mb-2 leading-snug">
                    {item.event}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#168FE5]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.type}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
