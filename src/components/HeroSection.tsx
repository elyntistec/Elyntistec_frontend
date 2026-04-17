import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IsometricCubes from "./IsometricCubes";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#ffffff] pt-24 lg:pt-32">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <IsometricCubes />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
        <div className="relative min-h-[600px] flex items-center">

          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left relative z-20 max-w-3xl">
    
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
               className="text-5xl sm:text-6xl lg:text-8xl font-dmSerif text-[#061731] leading-[1.1] tracking-tight max-w-2xl drop-shadow-sm"
            >
              TURN DATA <br />
              <span className="font-exo2 italic text-4xl sm:text-5xl lg:text-7xl bg-[#ffcd00] px-4 py-1 inline-block mt-2 rotate-[-1deg] border-2 border-[#061731] shadow-[5px_5px_0px_0px_rgba(6,23,49,1)] tracking-[0.1em] [word-spacing:0.4em]">INTO SMART ACTIONS</span>
            </motion.h1>
    
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 text-lg sm:text-xl text-[#53586b] max-w-xl font-medium font-heading tracking-wide leading-loose text-justify"
            >
              Turn complex data into clear, actionable intelligence streamlining workflows, improving efficiency, and enabling smarter decisions with AI-driven automation.
            </motion.p>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-6"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-[#ffcd00] text-[#061731] font-bold tracking-widest uppercase border-4 border-[#061731] transition-transform hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(6,23,49,1)]"
              >
                REQUEST DEMO
              </a>
              <Link
                to="/product"
                className="px-8 py-4 bg-[#061731] text-[#ffffff] font-bold tracking-widest uppercase border-4 border-[#061731] transition-transform hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(83,88,107,1)] hover:bg-[#53586b]"
              >
                Launch ElyntisTec AI
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Visual Graphic as Background */}
          <div className="absolute top-1/2 right-4 xl:right-12 -translate-y-1/2 w-[65%] xl:w-[60%] hidden lg:block opacity-100 pointer-events-none select-none z-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10"
            >
              <img 
                src="/graphics/3.png" 
                alt="AI Intelligence Hub" 
                className="w-full h-auto drop-shadow-2xl"
              />

              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-4 border-4 border-[#061731] shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#061731]">SYSTEM HEALTHY</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-24 bg-[#061731] p-5 border-4 border-[#ffcd00] shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] z-20"
              >
                <div className="text-xs font-mono font-bold text-[#ffcd00] mb-1">DATA FLOW RATE</div>
                <div className="text-2xl font-bold text-white font-mono">1.2 TB/s</div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-0 bg-[#ffcd00] p-4 border-4 border-[#061731] shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] z-20"
              >
                <div className="text-[10px] font-bold text-[#061731] uppercase tracking-tighter">Optimization</div>
                <div className="text-sm font-bold text-[#061731]">AI PIPELINE ACTIVE</div>
              </motion.div>
            </motion.div>

            {/* Background decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[40px] border-[#f0f0f0] rounded-full opacity-60 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
