import { useState } from 'react';
import { Mail, MapPin, Clock, Copy, Check, Send, AlertCircle, CheckCircle2, Server } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'success' | null

  // Email format regex validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast?.("Email address copied to clipboard! 📋");
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. alex@example.com).";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      onShowToast?.("Validation failed. Please check the form errors. ⚠️");
      return;
    }

    // Form UI ready for backend integration (No fake backend claim)
    console.log("[Contact Form - Client Validation Passed]", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "(No Subject)",
      message: formData.message,
      timestamp: new Date().toISOString()
    });

    setSubmittedStatus('success');
    onShowToast?.("Frontend validation passed! Ready for backend API handler. 🚀");
  };

  return (
    <section className="py-24 relative" id="contact">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none pulse-circle"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Mail className="w-3.5 h-3.5" /> Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-700 font-semibold text-base">
            Have a project idea, internship opportunity, or technical inquiry? Reach out via contact details or form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 flex flex-col justify-between border border-slate-200 shadow-md">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Contact Information</h3>
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-8">
                Feel free to email directly or connect on social platforms.
              </p>

              <div className="space-y-6 mb-10">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 border border-blue-300 text-blue-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-700 block mb-1">Direct Email</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-extrabold text-slate-950 hover:text-blue-600 transition-colors">
                        {personalInfo.email}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-2.5 py-1 rounded bg-blue-100 border border-blue-300 text-blue-800 font-mono text-[11px] font-bold hover:bg-blue-200 transition-all flex items-center gap-1 cursor-pointer"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 border border-indigo-300 text-indigo-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-700 block mb-1">Location</span>
                    <span className="text-sm font-extrabold text-slate-950">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Response Time Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-700 block mb-1">Availability</span>
                    <span className="text-sm font-extrabold text-slate-950">Student & Intern Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row (Email, GitHub, LinkedIn, LeetCode) */}
            <div className="pt-6 border-t border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-700 block mb-3">Social Media Profiles:</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 text-xs font-bold hover:text-blue-600 hover:border-blue-400 transition-all"
                >
                  <Mail className="w-4 h-4 text-blue-600" /> Email
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 text-xs font-bold hover:text-blue-600 hover:border-blue-400 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 text-xs font-bold hover:text-blue-600 hover:border-blue-400 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 text-xs font-bold hover:text-amber-600 hover:border-amber-400 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 24 24"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.178 1.824.645l2.697 2.607c.507.493 1.343.493 1.85 0 .507-.494.507-1.297 0-1.79l-2.697-2.607c-1.026-1.026-2.42-1.488-3.974-1.488s-2.948.462-3.974 1.488l-4.319 4.38c-1.026 1.026-1.536 2.446-1.536 4.001 0 1.554.51 2.975 1.536 4.001l4.332 4.363c1.026 1.026 2.42 1.488 3.974 1.488s2.948-.462 3.974-1.488l2.697-2.607c.507-.494.507-1.297 0-1.791-.507-.493-1.343-.493-1.85 0zM21.5 12h-8c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25S22.19 12 21.5 12z"/></svg> LeetCode
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Frontend Validation */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-md">
            {/* Backend Readiness Note */}
            <div className="flex items-center gap-2 mb-6 px-3.5 py-2 rounded-lg bg-indigo-100 border border-indigo-300 text-indigo-900 font-mono text-xs font-bold">
              <Server className="w-4 h-4 text-indigo-700 shrink-0" />
              <span>Form UI ready for backend API integration (e.g. EmailJS / Formspree / API endpoint)</span>
            </div>

            {submittedStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-mono space-y-2">
                <div className="flex items-center gap-2 font-extrabold text-sm text-emerald-800">
                  <CheckCircle2 className="w-4 h-4" /> Frontend Validation Passed!
                </div>
                <p className="font-semibold">Form payload logged to console. Form is ready to connect to your preferred mail backend handler.</p>
                <button
                  type="button"
                  onClick={() => setSubmittedStatus(null)}
                  className="mt-2 text-blue-700 underline font-bold cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-extrabold text-slate-900 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    className={`w-full bg-slate-50 border ${
                      errors.name ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-blue-600 focus:bg-white'
                    } rounded-xl px-4 py-3 text-sm text-slate-950 font-semibold focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-red-600 text-xs font-mono font-bold mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-extrabold text-slate-900 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full bg-slate-50 border ${
                      errors.email ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-blue-600 focus:bg-white'
                    } rounded-xl px-4 py-3 text-sm text-slate-950 font-semibold focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-red-600 text-xs font-mono font-bold mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-extrabold text-slate-900 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry / Academic opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-950 font-semibold focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-extrabold text-slate-900 mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  className={`w-full bg-slate-50 border ${
                    errors.message ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-blue-600 focus:bg-white'
                  } rounded-xl px-4 py-3 text-sm text-slate-950 font-semibold focus:outline-none transition-colors resize-y`}
                ></textarea>
                {errors.message && (
                  <span className="flex items-center gap-1 text-red-600 text-xs font-mono font-bold mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
