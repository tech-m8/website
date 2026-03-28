'use client';

import { useState } from 'react';

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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Get <span className="text-blue-600">in Touch</span>
        </h1>
        <p className="text-center text-gray-500 text-sm mb-10">
          Let&#39;s build something amazing together
        </p>

        {submitted ? (
          <div className="bg-indigo-50 rounded-2xl p-10 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Message Sent!</h2>
            <p className="text-gray-500 text-sm">Thank you for reaching out. We&apos;ll get back to you soon.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 px-6 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-indigo-50 rounded-2xl p-8 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white rounded-xl px-5 py-4 text-sm text-gray-700 placeholder-gray-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
