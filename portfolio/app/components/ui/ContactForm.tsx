"use client";

import { Send } from "lucide-react";
import React, { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };
  return (
    <>
      <div>
        <form
          onSubmit={(e) => handleSubmit(e as unknown as SubmitEvent)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                required
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  handleChange(
                    e.target.name as string,
                    e.target.value as string,
                  )
                }
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                required
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  handleChange(
                    e.target.name as string,
                    e.target.value as string,
                  )
                }
                placeholder="mail@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              required
              id="subject"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) =>
                handleChange(e.target.name as string, e.target.value as string)
              }
              placeholder="Project Inquiry"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              required
              id="message"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border"
              rows={5}
              name="message"
              value={formData.message}
              onChange={(e) =>
                handleChange(e.target.name as string, e.target.value as string)
              }
              placeholder="Tell me about your project..."
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600  dark:text-green-400">
              <p> Your Message Sent Successfully.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600  dark:text-red-400">
              <p>
                {" "}
                Message Didn't Sent. An Unexpected Occur Please Try Again Later.
              </p>
            </div>
          )}

          <button
            disabled={isSubmitting}
            className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-50 "
            type="submit"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h4" />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
