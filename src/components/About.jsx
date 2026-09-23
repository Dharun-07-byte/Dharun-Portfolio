import { Cpu, Code, Shield, Brain, Compass, Sparkles } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

export default function About() {
  const interests = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "ECE Academic Background",
      desc: "Studying Electronics and Communication Engineering (ECE), developing strong fundamentals in digital logic circuits, microcontrollers, embedded C/C++, and signal processing."
    },
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: "Software Development",
      desc: "Creating web applications with React 19, Vite, and Tailwind CSS. Passionate about clean code structure, modular reusable components, and responsive UI design."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "Cybersecurity & Defense",
      desc: "Enthusiastic about network security, secure application development, threat analysis, and understanding modern cryptographic protocols."
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      title: "AI & Emerging Technologies",
      desc: "Fascinated by artificial intelligence, machine learning concepts, autonomous agent workflows, and emerging technological trends shaping the future."
    },
    {
      icon: <Compass className="w-5 h-5 text-pink-400" />,
      title: "Technology & Innovation",
      desc: "Continuously exploring new developer tools, open-source projects, and hardware-software integration to build impactful technological solutions."
    }
  ];

  return (
    <section className="py-24 relative" id="about">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none pulse-circle"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Bridging Hardware Engineering & <span className="gradient-text">Software Innovation</span>
          </h2>
          <p className="text-slate-600 text-base">
            An overview of my academic foundation, technical passions, and core domains of interest.
          </p>
        </div>

        {/* Top Layout: Introduction Card + Placeholder Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Main Biography Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-slate-200 border-l-4 border-l-blue-600 shadow-md">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hello, I'm <span className="text-blue-600">{personalInfo.name}</span>
              </h3>

              <p className="text-slate-700 text-base leading-relaxed mb-4">
                I am an <strong className="text-slate-900 font-semibold">Electronics and Communication Engineering (ECE)</strong> student with a deep interest in <strong className="text-blue-600 font-semibold">software development</strong>, <strong className="text-emerald-600 font-semibold">cybersecurity</strong>, and <strong className="text-indigo-600 font-semibold">artificial intelligence</strong>.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                My academic journey provides a solid foundation in electronics logic and systems engineering, while my self-driven passion leads me to engineer web applications, explore security practices, and stay ahead with emerging technologies.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-200">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
                🎓 ECE Student
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-medium">
                💻 Web & Software Developer
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium">
                🛡️ Security & AI Enthusiast
              </span>
            </div>
          </div>

          {/* Placeholder Statistics Grid Area */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {statsData.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
                <span className="font-mono text-xl sm:text-2xl font-extrabold mb-2 group-hover:scale-105 transition-transform text-slate-900">
                  {stat.value}
                </span>
                <span className="text-slate-600 text-xs font-semibold tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests & Domains Grid */}
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Core Domains of Interest</h3>
          <p className="text-slate-500 text-xs font-mono">Key areas driving my technical exploration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 w-fit mb-4 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
