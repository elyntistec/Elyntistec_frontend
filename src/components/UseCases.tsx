import { motion } from "framer-motion";
import { Factory, Truck, Lightbulb, Building2, Workflow } from "lucide-react";
import IsometricCubes from "./IsometricCubes";

const cases = [
  { iconImage: "/graphics/19.png", title: "Smart Manufacturing", desc: "Predictive maintenance, quality control automation, and production line optimization with real-time sensor analytics.", color: "bg-[#53586b]" },
  { iconImage: "/graphics/20.png", title: "Logistics & Supply Chain", desc: "End-to-end visibility, route optimization, warehouse automation, and demand forecasting across global supply networks.", color: "bg-[#061731]" },
  { iconImage: "/graphics/21.png", title: "Energy & Utilities", desc: "Grid monitoring, consumption forecasting, renewable integration, and automated load balancing for utility operators.", color: "bg-[#53586b]" },
  { iconImage: "/graphics/22.png", title: "Smart Cities", desc: "Traffic management, environmental monitoring, public safety analytics, and infrastructure health tracking at city scale.", color: "bg-[#061731]" },
  { iconImage: "/graphics/23.png", title: "Enterprise Workflow", desc: "Cross-department process automation, compliance monitoring, and operational efficiency optimization for large organizations.", color: "bg-[#53586b]" },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 relative bg-[#ffffff] border-b-8 border-[#061731] overflow-hidden">
      <IsometricCubes />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #061731 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-xs font-bold text-[#ffffff] border-2 border-[#061731] bg-[#53586b] px-4 py-2 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] mb-6">Applications</span>
          <h2 className="text-4xl sm:text-6xl font-dmSerif font-bold tracking-tight text-[#061731] flex flex-wrap justify-center gap-4">
            Industry <span className="font-berkshire bg-[#ffcd00] text-[#061731] px-4 border-4 border-[#061731] inline-block shadow-[6px_6px_0px_0px_rgba(6,23,49,1)] -rotate-2">Use Cases</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-[#ffffff] border-4 border-[#061731] p-6 shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] hover:-translate-y-2 transition-transform group flex flex-col lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "lg:col-start-4" : ""}`}
              >
                <div className={`w-14 h-14 bg-[#ffffff] border-4 border-[#061731] flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] group-hover:bg-[#ffcd00] transition-colors p-1`}>
                  <img src={c.iconImage} alt={c.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-dmSerif font-bold text-[#061731] mb-3">{c.title}</h3>
                <p className="text-sm font-medium text-[#061731]/80 leading-relaxed pb-4 flex-1 text-justify">{c.desc}</p>
                
                <div className="pt-4 border-t-4 border-[#061731]">
                   <span className="text-xs font-bold uppercase tracking-widest text-[#ffffff] bg-[#061731] px-2 py-1">Discover</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
