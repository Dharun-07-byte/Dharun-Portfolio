import { useState } from 'react';
import { GraduationCap, MapPin, Award, Briefcase, Trophy, HeartHandshake } from 'lucide-react';
import { educationData, experienceData, extraCurricularData } from '../data/portfolioData';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="py-24 relative" id="education">
      <div id="achievements" className="absolute -top-16"></div>
      <div id="experience" className="absolute -top-16"></div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" /> Education & Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Academic & <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-slate-600 text-base">
            Timeline of my B.E. ECE degree at V.S.B. Engineering College, industrial training, and extra-curricular highlights.
          </p>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "education"
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-2xs'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Education
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "experience"
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-2xs'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Experience & Internships
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("activities")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "activities"
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-2xs'
            }`}
          >
            <Trophy className="w-4 h-4" /> Extra-Curriculars
          </button>
        </div>

        {/* Tab 1: Education */}
        {activeTab === "education" && (
          <div className="max-w-4xl mx-auto relative animate-in fade-in duration-300">
            <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent -translate-x-1/2"></div>
            <div className="space-y-12">
              {educationData.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md z-10">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                    </div>

                    <div className="w-full sm:w-[calc(50%-2.5rem)] pl-16 sm:pl-0">
                      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                            {item.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                        <h4 className="text-sm font-semibold text-blue-600 mb-3">{item.institution}</h4>
                        <p className="text-slate-600 text-xs leading-relaxed mb-4">{item.desc}</p>

                        <div className="pt-3 border-t border-slate-200">
                          <span className="text-[11px] font-mono font-bold text-slate-500 block mb-2">Highlights:</span>
                          <ul className="space-y-1">
                            {item.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Industrial Experience */}
        {activeTab === "experience" && (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start justify-between gap-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 font-medium">
                      {exp.type || "Industrial Exposure"}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{exp.role}</h3>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">{exp.company}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed max-w-2xl">{exp.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 shrink-0 self-start sm:self-center">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{exp.location}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Extra-Curricular Activities */}
        {activeTab === "activities" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {extraCurricularData.map((act, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                  {act.type.includes("Service") ? (
                    <HeartHandshake className="w-5 h-5" />
                  ) : (
                    <Trophy className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {act.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{act.year}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-1">{act.event}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
