import { GraduationCap, Cpu, Code2, Target, CheckCircle2 } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

export default function About() {
  const infoCards = [
    {
      icon: GraduationCap,
      label: "EDUCATION",
      title: personalInfo.institution,
      desc: `Bachelor of Engineering in ECE (2024–2028). Maintaining an academic CGPA of ${personalInfo.cgpa}.`
    },
    {
      icon: Cpu,
      label: "DEPARTMENT",
      title: "Electronics & Communication",
      desc: "Strong core foundation in digital electronics, microcontrollers, embedded C/C++, and VLSI principles."
    },
    {
      icon: Code2,
      label: "TECHNICAL INTERESTS",
      title: "Software & Digital Systems",
      desc: "Passionate about full-stack web applications, cybersecurity fundamentals, and workflow automation."
    },
    {
      icon: Target,
      label: "CURRENT FOCUS",
      title: "Enterprise Architecture & Logic",
      desc: "National Level Pega Internship graduate focusing on scalable low-code architecture and real-world system design."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F5F8FC] border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#168FE5]">
              GET TO KNOW ME
            </span>
            <span className="w-8 h-0.5 bg-[#168FE5] rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-2">
            Electronics and Communication Engineering student at V.S.B. Engineering College, bridging foundational hardware principles with modern software applications.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-base">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-[#17202A] mb-3">
                Disciplined Engineering &amp; Problem Solving
              </h3>
              <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
                I am a disciplined ECE student at V.S.B. Engineering College with a proven academic record (<strong className="text-[#17202A]">8.40 CGPA</strong>). My engineering journey is built on combining low-level hardware understanding with high-level software development.
              </p>
              <p className="text-slate-600 mb-5 text-sm sm:text-base leading-relaxed">
                Beyond my academic coursework, I have completed the National Level Internship Program sponsored by Pega, alongside verified certifications from NIELIT, CISCO, and Infosys. I thrive on translating theoretical principles into reliable, functional digital products.
              </p>

              {/* Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>Continuous Learner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>Time Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>Practical System Logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>Clean Code Standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#168FE5]/50 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FE] text-[#168FE5] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400 block mb-1">
                    {card.label}
                  </span>
                  <h4 className="text-sm font-bold text-[#17202A] mb-1.5 leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Academic Score Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#168FE5] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
