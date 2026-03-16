"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { scaleIn } from "@/lib/animations";

const RECAPTCHA_SITE_KEY = "6Leu6u0pAAAAAMMsysKjs7OFb-TYDyaJhyEOADrU";

/* Extend window for reCAPTCHA */
declare global {
  interface Window {
    grecaptcha: {
      render: (
        container: HTMLElement,
        params: { sitekey: string; theme?: string; callback?: (token: string) => void; "expired-callback"?: () => void }
      ) => number;
      reset: (widgetId: number) => void;
      getResponse: (widgetId: number) => string;
    };
    onRecaptchaLoad: () => void;
  }
}

interface ContactFormProps {
  source?: string;
  variant?: "light" | "dark";
}

export default function ContactForm({ source = "contact-page", variant = "light" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const isDark = variant === "dark";

  const renderRecaptcha = useCallback(() => {
    if (
      recaptchaRef.current &&
      window.grecaptcha &&
      widgetIdRef.current === null
    ) {
      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        theme: isDark ? "dark" : "light",
        callback: (token: string) => setRecaptchaToken(token),
        "expired-callback": () => setRecaptchaToken(""),
      });
      setRecaptchaReady(true);
    }
  }, [isDark]);

  useEffect(() => {
    /* Load reCAPTCHA script if not already loaded */
    if (document.getElementById("recaptcha-script")) {
      if (window.grecaptcha) {
        renderRecaptcha();
      }
      return;
    }

    window.onRecaptchaLoad = () => {
      renderRecaptcha();
    };

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [renderRecaptcha]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

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
          recaptchaToken,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", reason: "" });
      setRecaptchaToken("");
    } catch {
      setStatus("error");
      /* Reset reCAPTCHA on error */
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current);
        setRecaptchaToken("");
      }
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className={`rounded-2xl p-10 text-center ${
          isDark
            ? "bg-white/[0.06] border border-white/[0.1] backdrop-blur-md"
            : "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        }`}
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 ${
          isDark
            ? "bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/25"
            : "bg-gradient-to-br from-[#0066B3]/25 to-[#0066B3]/10 shadow-[0_0_0_6px_rgba(0,180,216,0.08)]"
        }`}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-[#061527]"}`}>
          Message Sent Successfully
        </h3>
        <p className={isDark ? "text-white/50" : "text-[#718096]"}>
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            widgetIdRef.current = null;
            setTimeout(() => renderRecaptcha(), 100);
          }}
          className="mt-6 text-[#4A90CC] font-bold hover:text-[#0066B3] transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  const inputClasses = isDark
    ? "rounded-xl px-5 py-4 font-medium w-full outline-none transition-all duration-300 bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-white/30 focus:border-[#4A90CC]/50 focus:bg-white/[0.1] focus:ring-2 focus:ring-[#4A90CC]/20 hover:border-white/[0.2] hover:bg-white/[0.08] backdrop-blur-sm"
    : "border border-gray-200 rounded-xl px-5 py-4 text-[#061527] font-medium w-full focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20 focus:shadow-[0_0_0_4px_rgba(0,180,216,0.08)] outline-none transition-all duration-200 bg-gray-50/30 hover:border-gray-300 hover:bg-white placeholder:text-gray-400";

  const labelClasses = isDark
    ? "block text-white/60 text-xs font-black uppercase tracking-wider mb-2"
    : "block text-[#061527] text-xs font-black uppercase tracking-wider mb-2";

  return (
    <div>
      {isDark && (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
          <Sparkles className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
            Get in Touch
          </span>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold font-[var(--font-display)] mb-2 tracking-tight ${
        isDark ? "text-white" : "text-[#061527]"
      }`}>
        Not Sure Where to Start?
      </h2>
      <div className={`h-1 w-20 rounded-full mb-4 ${
        isDark
          ? "bg-gradient-to-r from-[#0066B3] to-[#4A90CC]"
          : "bg-gradient-to-r from-[#0066B3] to-[#061527]"
      }`} />
      <p className={`mb-8 ${isDark ? "text-white/50" : "text-[#718096]"}`}>
        Fill out your information and we&apos;ll give you a call.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {status === "error" && (
          <div className={`rounded-xl p-4 ${
            isDark
              ? "bg-red-500/10 border border-red-500/20"
              : "bg-red-50 border border-red-200"
          }`}>
            <p className={`text-sm font-medium ${isDark ? "text-red-400" : "text-red-600"}`}>
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelClasses}>
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
            <label htmlFor="lastName" className={labelClasses}>
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
          <label htmlFor="email" className={labelClasses}>
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
          <label htmlFor="phone" className={labelClasses}>
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
          <label htmlFor="reason" className={labelClasses}>
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

        {/* Google reCAPTCHA v2 - inline */}
        <div className="flex justify-center">
          <div ref={recaptchaRef} />
        </div>

        <button
          type="submit"
          disabled={status === "submitting" || !recaptchaToken}
          className="bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] w-full transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_4px_15px_rgba(0,180,216,0.2)]"
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
