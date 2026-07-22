import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", description: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="px-4 py-12 text-slate-900 dark:text-slate-100 transition-colors duration-300 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="fade-in-up text-sm font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">Contact</p>
          <h1 className="fade-in-up animate-delay-1 display-font mt-3 text-4xl font-bold sm:text-5xl dark:text-white">Let&apos;s Build Something Useful</h1>
          <p className="fade-in-up animate-delay-2 mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            Available for frontend, MERN, and full-stack collaboration. Feel free to reach out via the form below or directly by email/phone.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Left Side: Contact Cards */}
          <div className="flex flex-col gap-6">
            <a href="mailto:m.tahaqaisrani@gmail.com" className="fade-in-up rounded-3xl bg-slate-950 dark:bg-slate-900 p-6 text-white shadow-2xl shadow-slate-950/10 dark:shadow-black/20 border dark:border-slate-800 transition duration-300 hover:-translate-y-1 hover:shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Email</p>
              <h2 className="display-font mt-3 text-2xl font-bold text-white">m.tahaqaisrani@gmail.com</h2>
              <p className="mt-2 leading-7 text-slate-300">Best for project inquiries and professional opportunities.</p>
            </a>

            <a href="tel:+923306721738" className="glass-card fade-in-up animate-delay-1 rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">Phone</p>
              <h2 className="display-font mt-3 text-2xl font-bold text-slate-950 dark:text-white">+92 330 6721738</h2>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">Pakistan-based availability for direct communication.</p>
            </a>

            <div className="glass-card fade-in-up animate-delay-2 rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400">Location</p>
              <h2 className="display-font mt-3 text-2xl font-bold text-slate-950 dark:text-white">Pakistan</h2>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">Open to remote client work and software house opportunities.</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="glass-card fade-in-up animate-delay-2 rounded-3xl p-8 shadow-xl">
            <h2 className="display-font text-2xl font-bold text-slate-950 dark:text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 px-5 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 px-5 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Description / Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 px-5 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition resize-none"
                />
              </div>

              {status === "success" && (
                <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/30 p-4 text-emerald-800 dark:text-emerald-400 text-sm">
                  🎉 Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/30 p-4 text-rose-800 dark:text-rose-400 text-sm">
                  ⚠️ {errorMessage || "Something went wrong. Please try again."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 font-bold transition shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
