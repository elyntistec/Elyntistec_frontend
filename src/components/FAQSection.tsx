import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cpu, Shield, Zap, Layers, Users, Activity } from "lucide-react";
import IsometricCubes from "./IsometricCubes";

const faqs = [
  { 
    q: "How Does ElyntisTec AI integrate with IoT devices?", 
    a: "Our systems support industry-standard protocols including MQTT, OPC-UA, Modbus, BACnet, and REST APIs. Our edge connectors can interface with virtually any sensor, PLC, or controller. Setup typically takes minutes through our guided device onboarding flow.",
    image: "/graphics/38.png",
    category: "Connectivity",
    color: "bg-[#53586b]"
  },
  { 
    q: "Is real-time data processing truly low-latency?", 
    a: "Yes. Our stream processing engine handles millions of events per second with sub-50ms end-to-end latency. GPU-accelerated pipelines powered by NVIDIA SDK ensure even complex ML inference runs in real time.",
    image: "/graphics/39.png",
    category: "Performance",
    color: "bg-[#061731]"
  },
  { 
    q: "Data Security and Sovereignty?", 
    a: "Enterprise-grade AES-256 encryption at rest and in transit. We support multi-tenant isolation, VPC peering, and on-premises deployments for complete data sovereignty.",
    image: "/graphics/40.png",
    category: "Security",
    color: "bg-[#ffcd00]"
  },
  { 
    q: "Custom Workflow Logic?", 
    a: "Our visual workflow builder supports conditional branching, event-driven triggers, and custom Python/Node.js script execution for limitless flexibility.",
    image: "/graphics/41.png",
    category: "Automation",
    color: "bg-[#53586b]"
  },
  { 
    q: "Global Enterprise Scalability?", 
    a: "Our Kubernetes-native architecture auto-scales from 50 to 50,000+ devices seamlessly across global regions.",
    image: "/graphics/42.png",
    category: "Scale",
    color: "bg-[#061731]"
  }
];

const FAQItem = ({ faq, index, activeIndex, setActiveIndex }: { faq: any, index: number, activeIndex: number, setActiveIndex: (i: number) => void }) => {
  const isOpen = activeIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 mb-4 border-4 border-[#061731] transition-all duration-300 cursor-pointer ${isOpen ? 'bg-[#ffffff] shadow-[6px_6px_0px_0px_rgba(6,23,49,1)]' : 'bg-[#ffffff]/10 hover:bg-[#ffffff]/20'}`}
      onClick={() => setActiveIndex(isOpen ? -1 : index)}
    >
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className={`inline-block px-3 py-0.5 border-2 border-[#061731] font-bold text-[10px] uppercase tracking-widest text-[#ffffff] ${faq.color}`}>
            {faq.category}
          </span>
          <h3 className={`text-xl sm:text-2xl font-dmSerif leading-tight transition-colors ${isOpen ? 'text-[#061731]' : 'text-[#ffffff]'}`}>
            {faq.q}
          </h3>
        </div>
        <div className={`w-8 h-8 border-2 border-[#061731] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#ffcd00] rotate-180' : 'bg-[#ffffff] rotate-0'}`}>
          <div className="w-4 h-0.5 bg-[#061731] relative">
            <div className={`w-4 h-0.5 bg-[#061731] absolute transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'}`} />
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="text-base text-[#061731] font-medium leading-relaxed pt-4 mt-4 border-t-2 border-[#061731] text-justify">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFaq = faqs[activeIndex] || faqs[0];
  const containerRef = useRef(null);

  return (
    <section id="faq" className="relative py-20 bg-[#53586b] overflow-hidden border-t-8 border-[#061731] border-b-8 scroll-mt-20" ref={containerRef}>
      <IsometricCubes />
      <div className="container mx-auto px-4">
        {/* Modern Section Header - Compact */}
        <div className="mb-12 relative flex flex-col items-start bg-[#ffffff] p-6 border-4 border-[#061731] shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] max-w-2xl mx-auto text-center transform -rotate-1">
           <span className="text-[10px] font-bold text-[#ffffff] uppercase tracking-widest mb-2 bg-[#061731] px-3 py-1 border-2 border-[#061731] inline-block mx-auto">Knowledge Architecture</span>
           <h2 className="text-4xl sm:text-5xl font-dmSerif text-[#061731] tracking-tighter leading-none mx-auto">
             Operational <br />
             <span className="font-berkshire bg-[#ffcd00] text-[#061731] px-3 inline-block mt-1">Intelligence</span> 
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column: Enhanced Sticky Visual Hub - More compact */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-[300px] lg:h-[450px] flex items-center justify-center">
            <div className={`w-full h-full p-2 lg:p-4 flex flex-col items-center justify-center border-4 border-[#061731] transition-colors duration-500 shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] ${activeFaq.color}`}>
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.8, rotate: 15, opacity: 0 }}
                    className="w-full flex items-center justify-center relative z-20"
                  >
                    <img src={activeFaq.image} alt={activeFaq.category} className="w-full object-contain max-h-[360px]" />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  key={`category-${activeIndex}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-[#061731] text-[#ffffff] px-4 py-2 border-2 border-[#061731] w-full text-center"
                >
                  <h4 className="text-xl font-black uppercase tracking-widest">
                    {activeFaq.category}
                  </h4>
                </motion.div>
              </div>

            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:w-2/3">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                faq={faq} 
                index={i} 
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} 
              />
            ))}
            
            {/* Final CTA Block - Compact */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="py-8 mt-8 bg-[#061731] border-4 border-[#061731] p-8 text-center relative shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            >
               <Activity size={32} className="mx-auto mb-4 text-[#ffcd00]" />
               <h4 className="text-2xl font-dmSerif text-[#ffffff] mb-3">Research Required?</h4>
               <p className="text-[#ffffff]/90 text-sm mb-6 max-w-sm mx-auto font-medium text-justify">
                 Get a specialized technical audit for your operational data infrastructure.
               </p>
               <a 
                 href="#contact" 
                 className="inline-block bg-[#ffcd00] px-8 py-3 text-[#061731] font-bold text-sm uppercase tracking-widest border-2 border-[#061731] hover:bg-[#ffffff] hover:text-[#061731] transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
               >
                 GET STARTED
               </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
