'use client';

import { useState } from 'react';

const contactInfo = [
  {
    label: 'Email',
    value: 'masnun@tech-m8.solutions',
    href: 'mailto:masnun@tech-m8.solutions',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+8801711 960803',
    href: 'tel:+8801711960803',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '84, Abu Ahmed Road, Gollamari, Khulna - 9100',
    href: null,
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work Together</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or want to learn more about what we do? We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 text-sm hover:text-white transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center gap-4 text-center h-full justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">Message Sent!</h2>
                  <p className="text-gray-400 text-sm">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
