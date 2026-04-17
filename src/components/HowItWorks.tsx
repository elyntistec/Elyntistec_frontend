import { motion } from "framer-motion";
import { Cpu, Database, BrainCircuit, Activity, Zap, BarChart3 } from "lucide-react";
import IsometricCubes from "./IsometricCubes";

const steps = [
  { icon: Cpu, title: "Connect IoT Devices & Systems", desc: "Integrate sensors, controllers, and enterprise systems through secure APIs and edge connectors.", color: "primary", image: "/graphics/5.png" },
  { icon: Database, title: "Collect & Clean Data", desc: "Ingest real-time data streams with automated validation, deduplication, and normalization.", color: "primary", image: "/graphics/6.png" },
  { icon: BrainCircuit, title: "Process with AI Engine", desc: "Run GPU-accelerated ML models powered by NVIDIA SDK for pattern recognition and anomaly detection.", color: "accent", image: "/graphics/7.png" },
  { icon: Activity, title: "Monitor Workflows in Real-Time", desc: "Track every process node, pipeline stage, and system metric with sub-second refresh rates.", color: "primary", image: "/graphics/8.png" },
  { icon: Zap, title: "Automate & Optimize", desc: "Trigger automated responses, optimize resource allocation, and reduce operational overhead.", color: "accent", image: "/graphics/9.png" },
  { icon: BarChart3, title: "Generate Insights & Reports", desc: "Produce actionable dashboards, compliance reports, and predictive forecasts on demand.", color: "primary", image: "/graphics/10.png" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <IsometricCubes />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Technical Diagram</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A seamless flow of collecting, refining, and transforming data into intelligent actions through AI & IoT-driven workflow optimization.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-primary/10 hidden sm:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 sm:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ffffff] border-2 border-primary z-10" />

                <div className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className={`glass-card rounded-xl p-6 inline-block ${isLeft ? "md:ml-auto" : ""}`}>
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        step.color === "accent" ? "bg-accent/10 border border-accent/30" : "bg-primary/10 border border-primary/30"
                      }`}>
                        <Icon size={20} className={step.color === "accent" ? "text-accent" : "text-primary"} />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">STEP {i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="flex-1 hidden md:block">
                  <div className={`relative w-full h-full min-h-[220px] flex items-center justify-center ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto object-contain scale-110 drop-shadow-lg" 
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
