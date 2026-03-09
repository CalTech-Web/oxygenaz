"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

interface ContactFormProps {
  source?: string;
}

export default function ContactForm({ source = "contact-page" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
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
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          message: formData.reason,
          source,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", reason: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="bg-white rounded-2xl p-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-[#00B4D8]/25 to-[#00B4D8]/10 rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_6px_rgba(0,180,216,0.08)]">
          <svg className="w-8 h-8 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-[#0B2447] mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-[#6B7B8D]">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#00B4D8] font-bold hover:text-[#0096B7] transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  const inputClasses =
    "border border-gray-200 rounded-xl px-5 py-4 text-[#0B2447] font-medium w-full focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 focus:shadow-[0_0_0_4px_rgba(0,180,216,0.08)] outline-none transition-all duration-200 bg-gray-50/30 hover:border-gray-300 hover:bg-white placeholder:text-gray-400";

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-display)] text-[#0B2447] mb-2 tracking-tight">
        Not Sure Where to Start?
      </h2>
      <p className="text-[#6B7B8D] mb-8">
        Fill out your information and we&apos;ll give you a call.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-sm font-medium">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-[#0B2447] text-xs font-black uppercase tracking-wider mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="First name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-[#0B2447] text-xs font-black uppercase tracking-wider mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-[#0B2447] text-xs font-black uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[#0B2447] text-xs font-black uppercase tracking-wider mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-[#0B2447] text-xs font-black uppercase tracking-wider mb-2">
            Reason for being here (optional)
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            value={formData.reason}
            onChange={handleChange}
            className={`${inputClasses} resize-vertical`}
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,180,216,0.3)] w-full transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_4px_15px_rgba(0,180,216,0.2)]"
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
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
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}
