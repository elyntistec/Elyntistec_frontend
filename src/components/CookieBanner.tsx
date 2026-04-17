import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Shield, BarChart2 } from "lucide-react";

const COOKIE_CONSENT_KEY = "elyntistec_cookie_consent";

type ConsentState = "accepted" | "declined" | null;

const CookieBanner = () => {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,   // always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      setConsent(stored as ConsentState);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ essential: true, analytics: true, marketing: true });
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    localStorage.setItem(
      "elyntistec_cookie_prefs",
      JSON.stringify({ essential: true, analytics: true, marketing: true })
    );
    setConsent("accepted");
  };

  const handleDecline = () => {
    setPreferences({ essential: true, analytics: false, marketing: false });
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    localStorage.setItem(
      "elyntistec_cookie_prefs",
      JSON.stringify({ essential: true, analytics: false, marketing: false })
    );
    setConsent("declined");
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    localStorage.setItem("elyntistec_cookie_prefs", JSON.stringify(preferences));
    setConsent("accepted");
  };

  // Don't render if already consented
  if (consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cookie-banner"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
      >
        <div className="max-w-5xl mx-auto bg-[#061731] border-4 border-[#ffcd00] shadow-[8px_8px_0px_0px_rgba(255,205,0,0.4)]">
          {/* Main Banner */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Icon + Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-[#ffcd00] p-3 border-2 border-[#061731] flex-shrink-0 mt-1">
                  <Cookie size={22} className="text-[#061731]" />
                </div>
                <div>
                  <h3 className="text-[#ffcd00] font-bold uppercase tracking-widest text-sm mb-2">
                    Cookie Preferences
                  </h3>
                  <p className="text-[#ffffff]/80 text-sm leading-relaxed max-w-2xl">
                    We use cookies to enhance your experience, analyze performance, and deliver personalized content.
                    By clicking <strong className="text-white">"Accept All"</strong>, you agree to our use of cookies.
                    You can customize your preferences or{" "}
                    <a href="/privacy" className="text-[#ffcd00] underline hover:text-white transition-colors">
                      read our Privacy Policy
                    </a>{" "}
                    for more details.
                  </p>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="mt-3 text-[#ffcd00] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors underline"
                  >
                    {showDetails ? "Hide Preferences ↑" : "Customize Preferences ↓"}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-[#ffcd00] text-[#061731] font-bold text-xs uppercase tracking-widest border-2 border-[#ffffff]/30 hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="px-6 py-3 bg-transparent text-[#ffffff] font-bold text-xs uppercase tracking-widest border-2 border-[#ffffff]/30 hover:border-[#ffcd00] hover:text-[#ffcd00] transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>

            {/* Expanded Cookie Preferences */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t-2 border-[#ffffff]/10">
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {/* Essential */}
                      <div className="bg-[#ffffff]/5 border-2 border-[#ffffff]/10 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Shield size={14} className="text-green-400" />
                            <span className="text-white font-bold text-xs uppercase tracking-wider">Essential</span>
                          </div>
                          <span className="text-[10px] text-green-400 font-bold uppercase bg-green-400/10 px-2 py-0.5">Always On</span>
                        </div>
                        <p className="text-[#ffffff]/60 text-xs leading-relaxed">
                          Required for core platform functionality, security, and authentication. Cannot be disabled.
                        </p>
                      </div>

                      {/* Analytics */}
                      <div className="bg-[#ffffff]/5 border-2 border-[#ffffff]/10 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <BarChart2 size={14} className="text-[#ffcd00]" />
                            <span className="text-white font-bold text-xs uppercase tracking-wider">Analytics</span>
                          </div>
                          <button
                            onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                            className={`relative w-10 h-5 rounded-full border-2 transition-all ${
                              preferences.analytics
                                ? "bg-[#ffcd00] border-[#ffcd00]"
                                : "bg-[#ffffff]/10 border-[#ffffff]/20"
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${
                                preferences.analytics ? "left-5" : "left-0.5"
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-[#ffffff]/60 text-xs leading-relaxed">
                          Help us understand how users interact with our platform to improve the experience.
                        </p>
                      </div>

                      {/* Marketing */}
                      <div className="bg-[#ffffff]/5 border-2 border-[#ffffff]/10 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Cookie size={14} className="text-[#ffcd00]" />
                            <span className="text-white font-bold text-xs uppercase tracking-wider">Marketing</span>
                          </div>
                          <button
                            onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                            className={`relative w-10 h-5 rounded-full border-2 transition-all ${
                              preferences.marketing
                                ? "bg-[#ffcd00] border-[#ffcd00]"
                                : "bg-[#ffffff]/10 border-[#ffffff]/20"
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${
                                preferences.marketing ? "left-5" : "left-0.5"
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-[#ffffff]/60 text-xs leading-relaxed">
                          Enable personalized recommendations and relevant content based on your usage.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleSavePreferences}
                      className="px-8 py-3 bg-[#53586b] text-white font-bold text-xs uppercase tracking-widest border-2 border-[#ffffff]/20 hover:bg-[#ffcd00] hover:text-[#061731] hover:border-[#ffcd00] transition-colors"
                    >
                      Save My Preferences
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
