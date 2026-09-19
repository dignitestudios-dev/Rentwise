import React, { useContext, useRef, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import emailjs from "@emailjs/browser";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import { HiSparkles } from "react-icons/hi";
import { Reveal } from "./ScrollReveal";

const Contact = () => {
  const { theme } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all the required fields.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm("service_pco3thq", "template_h78rwtp", form.current, {
        publicKey: "F1HTwoHP_ZGxroSbJ",
      })
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error.text);
          setIsError(true);
        }
      );
  };

  const closeModal = () => {
    setSuccess(false);
  };

  const closeErrorModal = () => {
    setIsError(false);
  };

  return (
    <section
      id="contactus"
      className={`py-16 sm:py-24 lg:py-32 relative transition-colors duration-300 overflow-hidden ${
        theme === "dark" ? "bg-[#080B11]" : "bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF]"
      }`}
    >
      {/* Ambient Blue Glow behind the contact block */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-[#2438D8]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two Column Container with Scale Scroll Reveal */}
        <Reveal direction="scale" duration={600}>
          <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl sm:shadow-2xl flex flex-col lg:flex-row border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111726]">
            
            {/* Left Dark Column */}
            <div className="bg-[#0F172A] text-white p-6 sm:p-10 lg:p-14 lg:w-5/12 flex flex-col justify-between relative overflow-hidden">
              {/* Ambient Lighting Orbs */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#2438D8]/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-[#3B4EF8]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#2438D8]/20 text-[#EEF1FF] text-xs font-semibold mb-5 sm:mb-6 border border-[#2438D8]/40">
                  <HiSparkles className="text-sm text-[#8CA0FF]" />
                  <span>Get In Touch</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
                  Rentwiser is Coming—<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CA0FF] via-[#A5B4FC] to-[#3B4EF8]">
                    Are You Ready?
                  </span>
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-7 sm:mb-10">
                  Join the Waitlist and gain early access to the only platform empowering renters with complete transparency.
                </p>

                {/* Contact Info Items */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3.5 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#2438D8]/25 border border-[#2438D8]/40 flex items-center justify-center text-[#8CA0FF] shrink-0 group-hover:scale-110 group-hover:bg-[#2438D8] group-hover:text-white transition-all duration-300">
                      <FaMapMarkerAlt className="text-base sm:text-lg" />
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                        Our Location
                      </h4>
                      <p className="text-white font-medium text-sm sm:text-base">Tampa, Florida</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#2438D8]/25 border border-[#2438D8]/40 flex items-center justify-center text-[#8CA0FF] shrink-0 group-hover:scale-110 group-hover:bg-[#2438D8] group-hover:text-white transition-all duration-300">
                      <FaEnvelope className="text-base sm:text-lg" />
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                        Email Us
                      </h4>
                      <a
                        href="mailto:info@rentwiser.com"
                        className="text-white hover:text-[#8CA0FF] transition-colors font-medium text-sm sm:text-base break-all sm:break-normal"
                      >
                        info@rentwiser.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 sm:pt-10 text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>We usually respond within 24 business hours.</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div
              className={`p-6 sm:p-10 lg:p-14 lg:w-7/12 flex flex-col justify-center transition-colors ${
                theme === "dark" ? "bg-[#111726]" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1.5 sm:mb-2 ${
                  theme === "dark" ? "text-white" : "text-[#0F172A]"
                }`}
              >
                Closer Than a Click Away
              </h3>
              <p
                className={`text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Send us your thoughts or early access inquiry.
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="e.g. John Doe"
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border text-sm transition-all focus:outline-none focus:ring-4 focus:ring-[#2438D8]/15 focus:border-[#2438D8] ${
                      theme === "dark"
                        ? "bg-[#1A2234] border-slate-700 text-white placeholder-slate-500"
                        : "bg-[#F8FAFC] border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="e.g. john@example.com"
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border text-sm transition-all focus:outline-none focus:ring-4 focus:ring-[#2438D8]/15 focus:border-[#2438D8] ${
                      theme === "dark"
                        ? "bg-[#1A2234] border-slate-700 text-white placeholder-slate-500"
                        : "bg-[#F8FAFC] border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Write your message here..."
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border text-sm transition-all resize-none focus:outline-none focus:ring-4 focus:ring-[#2438D8]/15 focus:border-[#2438D8] ${
                      theme === "dark"
                        ? "bg-[#1A2234] border-slate-700 text-white placeholder-slate-500"
                        : "bg-[#F8FAFC] border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2438D8] to-[#1726A8] hover:from-[#1726A8] hover:to-[#2438D8] text-white font-semibold px-8 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-lg shadow-[#2438D8]/30 hover:shadow-xl hover:shadow-[#2438D8]/50 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>{loading ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>

      </div>

      <SuccessModal open={success} onclick={closeModal} />
      <ErrorModal open={isError} onclick={closeErrorModal} />
    </section>
  );
};

export default Contact;
