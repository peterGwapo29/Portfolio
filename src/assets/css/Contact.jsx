import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      alert(
        "Email sending isn't configured yet. Create a free form at formspree.io, then paste your endpoint into FORMSPREE_ENDPOINT at the top of Contact.jsx."
      );
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="page-section">
      
      {/* Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-white">
          contact
        </h1>
        <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
          Have an interesting project, partnership proposal, or just want to discuss web engineering? Get in touch!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        
        {/* Left Side: Contact Cards / Info */}
        <div className="w-full md:w-5/12 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white font-mono">
              Let's connect
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              I'm always open to new software development opportunities, open-source collaborations, or consulting projects. Feel free to shoot me an email or find me on social platforms.
            </p>
          </div>

          {/* Contact Methods list */}
          <div className="flex flex-col gap-3 font-mono text-xs text-zinc-400">
            
            <a 
              href="mailto:peterolanolan@gmail.com" 
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-900 bg-[#0c0c0d] hover:border-zinc-800 hover:text-white transition-all duration-200"
            >
              <i className="fa-solid fa-envelope text-[#fca311] text-base shrink-0"></i>
              <span className="break-all">peterolanolan@gmail.com</span>
            </a>

            <a 
              href="https://www.facebook.com/petergwapo.292004" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-900 bg-[#0c0c0d] hover:border-zinc-800 hover:text-white transition-all duration-200"
            >
              <i className="fa-brands fa-facebook text-[#fca311] text-base shrink-0"></i>
              <span>facebook.com/petergwapo.292004</span>
            </a>

            <a 
              href="https://github.com/peterGwapo29" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-900 bg-[#0c0c0d] hover:border-zinc-800 hover:text-white transition-all duration-200"
            >
              <i className="fa-brands fa-github text-[#fca311] text-base shrink-0"></i>
              <span>github.com/peterGwapo29</span>
            </a>

          </div>

          <div className="text-[11px] text-zinc-600 font-mono hidden md:block">
            Response average latency: &lt; 24 hours
          </div>

        </div>

        {/* Right Side: Form */}
        <form 
          onSubmit={handleSubmitMessage}
          className="w-full md:w-7/12 bg-[#121214] border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 hover:border-zinc-800 transition-colors"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold text-white font-mono">
              Send a direct message
            </h3>
            <span className="text-[10px] text-zinc-500 font-mono">
              * required fields
            </span>
          </div>

          <div className="flex flex-col gap-4">
            
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name *"
                className="w-full p-3.5 bg-[#0c0c0d] text-white rounded-xl border border-zinc-900 focus:outline-none focus:border-[#fca311] transition-colors placeholder:text-zinc-600 text-sm font-sans"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email *"
                className="w-full p-3.5 bg-[#0c0c0d] text-white rounded-xl border border-zinc-900 focus:outline-none focus:border-[#fca311] transition-colors placeholder:text-zinc-600 text-sm font-sans"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3.5 bg-[#0c0c0d] text-white rounded-xl border border-zinc-900 focus:outline-none focus:border-[#fca311] transition-colors placeholder:text-zinc-600 text-sm font-sans"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message *"
                rows="4"
                className="w-full p-3.5 bg-[#0c0c0d] text-white rounded-xl border border-zinc-900 focus:outline-none focus:border-[#fca311] transition-colors placeholder:text-zinc-600 text-sm font-sans resize-none"
              />
            </div>

          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3.5 bg-[#fca311] text-black rounded-xl font-mono font-bold hover:bg-[#e39110] transition-colors cursor-pointer text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Submit Message"}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 text-xs font-mono text-center">
              ✓ Message sent — thanks for reaching out, I'll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-xs font-mono text-center">
              Something went wrong. Please fill in all required fields, or email me directly instead.
            </p>
          )}
        </form>

      </div>

    </section>
  );
}

export default Contact;
