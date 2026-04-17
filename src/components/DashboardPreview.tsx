import { motion } from "framer-motion";
import { Activity, Cpu, HardDrive, Network, Thermometer, Zap } from "lucide-react";
import IsometricCubes from "./IsometricCubes";

const metrics = [
  { label: "GPU Utilization", value: "87%", icon: Cpu, trend: "+2.1%" },
  { label: "Throughput", value: "1.2M/s", icon: Zap, trend: "+5.4%" },
  { label: "Avg Latency", value: "12ms", icon: Activity, trend: "-3.2%" },
  { label: "Active Nodes", value: "2,847", icon: Network, trend: "+12" },
];

const nodes = [
  { name: "Sensor Array A1", status: "active", type: "IoT Sensor" },
  { name: "Edge Gateway 07", status: "active", type: "Gateway" },
  { name: "ML Pipeline #3", status: "processing", type: "AI Engine" },
  { name: "Data Lake East", status: "active", type: "Storage" },
  { name: "Alert Engine", status: "idle", type: "Automation" },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      <IsometricCubes />
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">ElyntisTec AI Dashboard</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Interactive <span className="text-primary">Dashboard</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A unified operations view designed for industrial-scale monitoring and control.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl border border-primary/20 overflow-hidden max-w-6xl mx-auto"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border/50 bg-card/80">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">ElyntisTec AI Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-xs font-mono text-accent">LIVE</span>
            </div>
          </div>

          <div className="p-6">
            {/* Metrics row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-secondary/50 rounded-xl p-4 border border-border/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon size={16} className="text-primary" />
                      <span className="text-xs font-mono text-accent">{m.trend}</span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-foreground">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Data flow visualization */}
              <div className="lg:col-span-2 bg-secondary/30 rounded-xl p-5 border border-border/30 relative overflow-hidden">
                <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Activity size={14} className="text-primary" />
                  Data Pipeline Activity
                </h4>
                {/* Simulated chart bars */}
                <div className="flex items-end gap-1 h-32">
                  {[40, 65, 50, 80, 70, 90, 60, 85, 75, 95, 55, 70, 88, 62, 78, 92, 68, 82, 58, 74, 86, 64, 76, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.5 }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary/80 min-w-[4px]"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                  <span>00:00</span>
                  <span>12:00</span>
                  <span>24:00</span>
                </div>
                {/* Data flow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                  <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow" />
                </div>
              </div>

              {/* Node list */}
              <div className="bg-secondary/30 rounded-xl p-5 border border-border/30">
                <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Network size={14} className="text-accent" />
                  Active Nodes
                </h4>
                <div className="space-y-3">
                  {nodes.map((node, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-card/40">
                      <div className={`w-2 h-2 rounded-full ${
                        node.status === "active" ? "bg-accent" :
                        node.status === "processing" ? "bg-primary animate-pulse-glow" : "bg-muted-foreground"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-foreground truncate">{node.name}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">{node.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 border-t border-border/30 flex items-center justify-center gap-2 bg-card/40">
            <Cpu size={12} className="text-accent" />
            <span className="text-[10px] font-mono text-muted-foreground">Powered by NVIDIA SDK Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
