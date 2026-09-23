import { useState, useRef, useEffect } from 'react';
import { Terminal, X } from 'lucide-react';
import { personalInfo, projectsData, skillCategories, educationData, certificationsData, terminalHelpText } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: `Welcome to ${personalInfo.name}'s ECE Developer CLI v2.4.0!`, type: "info" },
    { text: "Type 'help' to see available commands.", type: "system" }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = inputVal.trim();
      if (!rawCmd) return;

      const newHistory = [...history, { text: `dharun@ece-portfolio:~$ ${rawCmd}`, type: "command" }];
      setCommandHistory(prev => [...prev, rawCmd]);
      setHistoryIndex(-1);

      const parts = rawCmd.split(' ');
      const mainCmd = parts[0].toLowerCase();
      const args = parts.slice(1).join(' ');

      switch (mainCmd) {
        case 'help':
          newHistory.push({ text: terminalHelpText, type: "output" });
          break;

        case 'about':
          newHistory.push({
            text: `[BIOGRAPHY]\nName: ${personalInfo.name}\nDept: ${personalInfo.department}\nRole: ${personalInfo.role}\nBio: ${personalInfo.bio}`,
            type: "output"
          });
          break;

        case 'skills': {
          let text = "[TECHNICAL SKILLS]\n";
          skillCategories.forEach(cat => {
            text += `\n✦ ${cat.name}:\n`;
            cat.skills.forEach(s => {
              text += `  - ${s.name} [${s.level}%]\n`;
            });
          });
          newHistory.push({ text, type: "output" });
          break;
        }

        case 'projects': {
          let text = "[ENGINEERING PROJECTS]\n";
          projectsData.forEach(p => {
            text += `\n• ${p.title} (${p.category})\n  Desc: ${p.shortDesc}\n  Tech: ${p.tech.join(', ')}\n`;
          });
          newHistory.push({ text, type: "output" });
          break;
        }

        case 'education': {
          let text = "[ACADEMIC TIMELINE]\n";
          educationData.forEach(e => {
            text += `\n• ${e.degree}\n  Period: ${e.period}\n  Institution: ${e.institution}\n`;
          });
          newHistory.push({ text, type: "output" });
          break;
        }

        case 'certs': {
          let text = "[CERTIFICATIONS (PLACEHOLDERS)]\n";
          certificationsData.forEach(c => {
            text += `\n• ${c.title}\n  Issuer: ${c.issuer}\n  Credential ID: ${c.credentialId}\n`;
          });
          newHistory.push({ text, type: "output" });
          break;
        }

        case 'leetcode':
          newHistory.push({
            text: `[LEETCODE PROFILE]\nUsername: dharun_02082006\nURL: ${personalInfo.socials.leetcode}\nFocus: Data Structures, Algorithms & Problem Solving`,
            type: "output"
          });
          break;

        case 'contact':
          newHistory.push({
            text: `[CONTACT INFO]\nEmail: ${personalInfo.email}\nGitHub: ${personalInfo.socials.github}\nLinkedIn: ${personalInfo.socials.linkedin}\nLeetCode: ${personalInfo.socials.leetcode}`,
            type: "output"
          });
          break;

        case 'clear':
          setHistory([]);
          setInputVal('');
          return;

        case 'echo':
          newHistory.push({ text: args || '', type: "output" });
          break;

        default:
          newHistory.push({
            text: `command not found: ${mainCmd}. Type 'help' for available commands.`,
            type: "error"
          });
          break;
      }

      setHistory(newHistory);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div className="glass-card max-w-3xl w-full h-[540px] flex flex-col overflow-hidden border border-cyan-500/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="px-4 py-3 bg-[#040810]/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            dharun@ece-portfolio: ~ (zsh)
          </span>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Console Content Body */}
        <div className="p-5 flex-grow overflow-y-auto font-mono text-xs leading-relaxed" onClick={() => inputRef.current?.focus()}>
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`mb-2 whitespace-pre-wrap ${
                item.type === 'info'
                  ? 'text-cyan-400 font-bold'
                  : item.type === 'system'
                  ? 'text-slate-500'
                  : item.type === 'command'
                  ? 'text-white font-bold'
                  : item.type === 'error'
                  ? 'text-red-400'
                  : 'text-slate-300'
              }`}
            >
              {item.text}
            </div>
          ))}

          <div className="flex items-center gap-2 mt-2">
            <span className="text-emerald-400 font-bold">dharun@ece-portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="flex-grow bg-transparent border-none outline-none text-white font-mono text-xs"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>
          <div ref={terminalEndRef} />
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-[#040810]/90 border-t border-white/10 flex justify-between text-[11px] font-mono text-slate-500">
          <span>Type <code className="text-cyan-400">help</code> or <code className="text-cyan-400">certs</code></span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
