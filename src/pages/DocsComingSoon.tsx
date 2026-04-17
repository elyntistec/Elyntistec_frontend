import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IsometricCubes from "@/components/IsometricCubes";

const DocsComingSoon = () => {

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#061731] flex flex-col font-sans antialiased overflow-x-hidden relative">
      <Navbar />
      <IsometricCubes />
      
      <main className="flex-1 relative flex items-center justify-center pt-24 pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center border-4 border-[#061731] bg-[#ffffff] p-8 sm:p-12 shadow-[16px_16px_0px_0px_rgba(6,23,49,1)]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-[#53586b] border-4 border-[#061731] mb-8 shadow-[6px_6px_0px_0px_rgba(6,23,49,1)] -rotate-3"
            >
              <FileText size={48} className="text-[#ffffff]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-xs font-bold text-[#ffffff] tracking-[0.2em] uppercase mb-4 block inline-block p-2 border-2 border-[#061731] bg-[#061731] shadow-[2px_2px_0px_0px_rgba(83,88,107,1)]">
                Technical Resources
              </span>
              <h1 className="text-4xl sm:text-6xl font-dmSerif text-[#061731] mb-6 leading-tight">
                Documentation <br />
                <span className="font-berkshire bg-[#ffcd00] text-[#061731] px-4 mt-2 inline-block border-2 border-[#061731] rotate-1">Coming Soon</span>
              </h1>
              <p className="text-lg font-bold text-[#061731]/80 mb-10 max-w-md mx-auto leading-relaxed">
                We're building a comprehensive library of technical guides, API references, 
                and implementation tutorials for the ElyntisTec platform.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#061731] hover:text-[#ffcd00] transition-colors group px-4 py-2 border-2 border-transparent hover:border-[#061731] hover:bg-[#ffffff] hover:shadow-[2px_2px_0px_0px_rgba(6,23,49,1)]"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Homepage
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DocsComingSoon;
