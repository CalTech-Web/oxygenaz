"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "oxygenaz.com",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: "contact-page",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-brand-gold mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-brand-white mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-brand-muted">
          Thank you for reaching out. We will get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-brand-gold font-medium hover:text-brand-gold-light transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8 space-y-5">
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <p className="text-red-300 text-sm">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-brand-white mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg bg-brand-elevated border border-brand-border px-4 py-3 text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-white mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg bg-brand-elevated border border-brand-border px-4 py-3 text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-brand-white mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg bg-brand-elevated border border-brand-border px-4 py-3 text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-white mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg bg-brand-elevated border border-brand-border px-4 py-3 text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors resize-vertical"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-gold px-6 py-3 text-lg font-semibold text-brand-bg hover:bg-brand-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <svg
              className="animate-spin w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
