"use client";

import { useState } from "react";

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
      <div className="bg-white rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#10173E] mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-[#7A7A7A]">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#004AAD] font-semibold hover:text-[#0053DA] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-[40px] font-extrabold text-[#10173E] mb-2">
        Not Sure Where to Start?
      </h2>
      <p className="text-[#7A7A7A] mb-8">
        Fill out your information and we&apos;ll give you a call.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-[#10173E] text-sm font-semibold mb-1.5">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="border border-[#C3C3C4] rounded-lg px-4 py-3 text-[#10173E] w-full focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD] outline-none transition-colors"
              placeholder="First name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-[#10173E] text-sm font-semibold mb-1.5">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="border border-[#C3C3C4] rounded-lg px-4 py-3 text-[#10173E] w-full focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD] outline-none transition-colors"
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-[#10173E] text-sm font-semibold mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-[#C3C3C4] rounded-lg px-4 py-3 text-[#10173E] w-full focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD] outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[#10173E] text-sm font-semibold mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="border border-[#C3C3C4] rounded-lg px-4 py-3 text-[#10173E] w-full focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD] outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-[#10173E] text-sm font-semibold mb-1.5">
            Reason for being here (optional)
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            value={formData.reason}
            onChange={handleChange}
            className="border border-[#C3C3C4] rounded-lg px-4 py-3 text-[#10173E] w-full focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD] outline-none transition-colors resize-vertical"
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[#004AAD] text-white rounded-full px-8 py-3 font-bold text-sm uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] w-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
            "SUBMIT"
          )}
        </button>
      </form>
    </div>
  );
}
