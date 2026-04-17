import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import IsometricCubes from "./IsometricCubes";

declare global {
  interface Window {
    turnstile: any;
  }
}

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdapredz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        // Fallback to submitted state for user experience, or could show an error toast
        setSubmitted(true); 
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitted(true);
    }
  };

  useEffect(() => {
    // Function to render turnstile
    const renderTurnstile = () => {
      if (window.turnstile) {
        window.turnstile.render("#turnstile-container", {
          sitekey: "0x4AAAAAAC4DUF6otRUKtH3B",
          callback: (token: string) => {
            console.log("Turnstile token generated");
          },
        });
      }
    };

    // Check if script is loaded, otherwise wait for it
    if (window.turnstile) {
      renderTurnstile();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderTurnstile();
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-32 lg:py-48 relative bg-[#061731] border-b-8 border-[#061731] overflow-hidden scroll-mt-20">
      <IsometricCubes />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-50" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-xs font-bold text-[#ffffff] border-2 border-[#ffffff] bg-[#061731] px-4 py-2 uppercase tracking-widest shadow-none sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mb-6">Get in Touch</span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-dmSerif font-bold tracking-tight text-[#ffffff] flex flex-col sm:flex-row gap-4 items-center">
            <span>Request a</span>
            <span className="font-berkshire bg-[#ffcd00] text-[#061731] px-4 py-1 border-4 border-[#ffffff] shadow-none sm:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rotate-0 sm:rotate-3">Demo</span>
          </h2>
          <p className="mt-8 text-base sm:text-lg font-bold text-[#061731] max-w-full sm:max-w-xl mx-auto bg-[#ffffff] border-2 border-[#061731] p-4 shadow-none sm:shadow-[4px_4px_0px_0px_rgba(83,88,107,1)]">
            See how ElyntisTec AI can transform your operations. Our team will walk you through a personalized demo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-[#ffffff] border-4 border-[#061731] p-10 text-center shadow-none sm:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] lg:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] h-full flex flex-col justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#53586b] border-4 border-[#061731] flex items-center justify-center mx-auto mb-6 shadow-none sm:shadow-[6px_6px_0px_0px_rgba(6,23,49,1)]">
                  <Send size={28} className="text-[#ffffff] ml-1 sm:size-[32px]" />
                </div>
                <h3 className="text-3xl font-dmSerif text-[#061731] mb-4">Message Sent</h3>
                <p className="text-lg font-bold text-[#061731]/70">Our team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#ffffff] border-4 border-[#061731] p-5 sm:p-10 space-y-6 shadow-none sm:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] lg:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] h-full">
                <div>
                  <label className="block text-sm font-bold text-[#061731] mb-2 uppercase tracking-wider">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border-4 border-[#061731] bg-[#ffffff] text-[#061731] font-medium focus:outline-none focus:ring-4 focus:ring-[#ffcd00] transition-all shadow-none sm:shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#061731] mb-2 uppercase tracking-wider">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border-4 border-[#061731] bg-[#ffffff] text-[#061731] font-medium focus:outline-none focus:ring-4 focus:ring-[#ffcd00] transition-all shadow-none sm:shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]"
                    placeholder="work@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#061731] mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border-4 border-[#061731] bg-[#ffffff] text-[#061731] font-medium focus:outline-none focus:ring-4 focus:ring-[#ffcd00] transition-all resize-none shadow-none sm:shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]"
                    placeholder="Tell us about your use case..."
                  />
                </div>
                
                <div id="turnstile-container" className="flex justify-center my-4 overflow-hidden rounded-lg w-full max-w-[300px] mx-auto"></div>

                <button
                  type="submit"
                  className="w-full py-4 mt-4 border-4 border-[#061731] bg-[#ffcd00] text-[#061731] font-bold text-lg hover:bg-[#061731] hover:text-[#ffffff] transition-colors flex items-center justify-center gap-3 shadow-none sm:shadow-[6px_6px_0px_0px_rgba(6,23,49,1)] group"
                >
                  REQUEST DEMO <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex items-start gap-4 sm:gap-6 bg-[#ffffff] border-4 border-[#061731] p-5 sm:p-6 shadow-none sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#53586b] border-4 border-[#061731] flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#ffffff] sm:size-[24px]" />
              </div>
              <div className="pt-1 sm:pt-2">
                <h4 className="text-lg sm:text-xl font-dmSerif text-[#061731]">Email Us</h4>
                <p className="text-xs sm:text-sm font-bold text-[#061731]/70 mt-1">support@elyntistec.com</p>
              </div>
            </div>

            <a href="tel:+13527611677" className="flex items-start gap-4 sm:gap-6 bg-[#ffffff] border-4 border-[#061731] p-5 sm:p-6 shadow-none sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ffcd00] border-4 border-[#061731] flex items-center justify-center shrink-0 group-hover:bg-[#061731] transition-colors">
                <Phone size={20} className="text-[#061731] group-hover:text-[#ffffff] sm:size-[24px] transition-colors" />
              </div>
              <div className="pt-1 sm:pt-2">
                <h4 className="text-lg sm:text-xl font-dmSerif text-[#061731]">Call Us</h4>
                <p className="text-xs sm:text-sm font-bold text-[#061731]/70 mt-1">+1 352 761 1677</p>
              </div>
            </a>
            
            <div className="flex items-start gap-4 sm:gap-6 bg-[#ffffff] border-4 border-[#061731] p-5 sm:p-6 shadow-none sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ffcd00] border-4 border-[#061731] flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#061731] sm:size-[24px]" />
              </div>
              <div className="pt-1 sm:pt-2">
                <h4 className="text-lg sm:text-xl font-dmSerif text-[#061731]">Visit Us</h4>
                <p className="text-xs sm:text-sm font-bold text-[#061731]/70 mt-1">101 Second Street, San Francisco, CA 94105, USA</p>
              </div>
            </div>

            <div className="bg-[#53586b] border-4 border-[#061731] p-6 sm:p-8 shadow-none sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mt-4">
              <p className="text-xl text-[#ffffff] leading-relaxed font-dmSerif">
                "ElyntisTec AI reduced our production line downtime by 47% in the first quarter. The real-time monitoring and predictive alerts transformed how we operate."
              </p>
              <p className="mt-6 text-xs text-[#ffffff] font-bold tracking-widest uppercase">— VP Operations, Fortune 500 Manufacturer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
