import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Wifi, Gauge, Workflow, BrainCircuit, LayoutDashboard, TrendingUp, Hexagon, Activity } from "lucide-react";
import { useState, useRef } from "react";
import IsometricCubes from "./IsometricCubes";

const features = [
  { 
    icon: Wifi, 
    iconImage: "/graphics/13.png",
    title: "IoT Device Integration & Collection", 
    desc: "Connect thousands of sensors, PLCs, and edge devices through standardized protocols to establish a secure data collection system.", 
    size: "large",
    tag: "CONNECTIVITY",
    color: "text-blue-400",
    image: "/graphics/12.png"
  },
  { 
    icon: Gauge, 
    iconImage: "/graphics/14.png",
    title: "Automated Data Processing Engine", 
    desc: "Ingest and process data streams with an automated engine designed for real-time cleaning, validation, and deduplication.", 
    size: "small",
    tag: "PROCESSING",
    color: "text-amber-400"
  },
  { 
    icon: LayoutDashboard, 
    iconImage: "/graphics/15.png",
    title: "Real-Time Monitoring", 
    desc: "A unified command center for real-time monitoring and workflow management across all operational nodes.", 
    size: "small",
    tag: "MONITORING",
    color: "text-emerald-400"
  },
  { 
    icon: Workflow, 
    iconImage: "/graphics/16.png",
    title: "Workflow Automation & Optimization", 
    desc: "Advanced logic building and task orchestration tools for closed-loop industrial workflow automation and continuous optimization.", 
    size: "medium",
    tag: "AUTOMATION",
    color: "text-rose-400"
  },
  { 
    icon: TrendingUp, 
    iconImage: "/graphics/17.png",
    title: "Analytics & Reporting Dashboard", 
    desc: "Comprehensive analytics and performance reporting dashboard highlighting system-level insights and efficiency gains.", 
    size: "medium",
    tag: "ANALYTICS",
    color: "text-indigo-400"
  },
  { 
    icon: Hexagon, 
    iconImage: "/graphics/18.png",
    title: "Scalable AI Architecture", 
    desc: "A modular, scalable architecture specifically engineered for industrial data systems and future IoT ecosystem expansion.", 
    size: "full",
    tag: "INFRASTRUCTURE",
    color: "text-cyan-400",
    image: "/graphics/43.png"
  },
];

const FeatureCard = ({ f, i }: { f: any, i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 20;
    const yPct = (mouseY / height - 0.5) * 20;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const currentSize = (size: string) => {
    switch (size) {
      case "large": return "md:col-span-8 md:row-span-2";
      case "medium": return "md:col-span-6 md:row-span-1";
      case "small": return "md:col-span-4 md:row-span-1";
      case "full": return "md:col-span-12 md:row-span-1";
      default: return "md:col-span-4";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${currentSize(f.size)} group relative`}
    >
      <motion.div 
        style={{ rotateX: mouseYSpring, rotateY: mouseXSpring, transformStyle: "preserve-3d" }}
        className="h-full bg-[#ffffff] border-4 border-[#061731] p-8 transition-all duration-300 flex flex-col relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,205,0,1)] hover:-translate-y-1 hover:-translate-x-1"
      >
        
        {/* Background Hex Pattern (Visible on large cards) */}
        {f.size === 'large' && (
           <div className="absolute top-0 right-0 p-8 opacity-10 text-[#061731]">
              <Hexagon size={200} strokeWidth={1} />
           </div>
        )}

        <div className={`flex flex-col h-full ${f.size === 'full' ? 'lg:flex-row lg:items-center lg:gap-12' : ''}`}>
          
          {f.size === 'full' && f.image && (
            <div className="lg:w-1/2 mb-8 lg:mb-0 relative z-10">
              <img 
                src={f.image} 
                alt={f.title} 
                className="w-full h-[380px] object-contain"
              />
            </div>
          )}

          <div className={f.size === 'full' ? 'lg:w-1/2' : 'flex-1 flex flex-col'}>
            {/* Icon: top-left absolute for full card, inline for others */}
            {f.size === 'full' && (
              <div className="absolute top-8 left-8 w-14 h-14 bg-[#ffffff] border-4 border-[#061731] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] transition-transform duration-300 group-hover:scale-105 p-1 z-20">
                <img src={f.iconImage} alt={f.title} className="w-full h-full object-contain" />
              </div>
            )}
            <div className="flex items-start justify-between mb-8 relative z-10">
              {f.size !== 'full' && (
                <div className="w-14 h-14 bg-[#ffffff] border-4 border-[#061731] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] transition-transform duration-300 group-hover:scale-105 p-1">
                   <img src={f.iconImage} alt={f.title} className="w-full h-full object-contain" />
                </div>
              )}
              <div className={`flex flex-col items-end gap-2 ${f.size === 'full' ? 'ml-auto' : ''}`}>
                <span className="text-xs font-black text-[#061731] tracking-[0.2em] px-3 py-1 bg-[#ffcd00] border-2 border-[#061731]">
                  {f.tag}
                </span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#ffffff] border-2 border-[#061731]">
                   <div className="w-2 h-2 bg-[#ffcd00] animate-pulse border border-[#061731]" />
                   <span className="text-[10px] font-mono text-[#061731] font-bold uppercase tracking-widest">Active</span>
                </div>
              </div>
            </div>

            <h3 className={`font-dmSerif leading-tight tracking-tighter mb-4 text-[#061731] relative z-10 ${f.size === 'large' ? 'text-4xl' : f.size === 'full' ? 'text-3xl' : 'text-2xl'}`}>
              {f.title}
            </h3>
            
            <p className="text-[15px] font-sans text-muted-foreground font-medium leading-relaxed mb-8 relative z-10 max-w-md text-justify">
              {f.desc}
            </p>

            {f.size !== 'full' && f.image && (
              <div className="mt-auto mb-4 relative z-10 w-full">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className={`w-full h-[380px] ${f.image.includes('12.png') ? 'object-contain' : 'object-cover border-4 border-[#061731] shadow-[8px_8px_0px_0px_rgba(6,23,49,1)]'}`}
                />
              </div>
            )}

            <div className="mt-auto flex items-center justify-between relative z-10">
               <span className="text-[10px] font-mono text-[#061731] font-bold uppercase tracking-widest bg-[#ffcd00] px-2 py-1 border border-[#061731]">System_Ready</span>
               <Activity size={18} className="text-[#061731] animate-[pulse_1s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CoreFeatures = () => {
  return (
    <section id="features" className="py-32 relative bg-[#ffffff] overflow-hidden">
      <IsometricCubes />
      {/* Decorative Atmosphere */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-24"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-muted border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] font-heading font-bold text-muted-foreground uppercase tracking-widest">Operational Modules</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tighter leading-[0.9]">
            Enterprise Core <br />
            <span className="text-primary glow-text-primary">Architecture</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl italic font-heading text-justify">
            Decentralized processing and unified intelligence for the most demanding industrial workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
