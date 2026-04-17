import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import IsometricCubes from "./IsometricCubes";

const articles = [
  { 
    title: "AI in Industrial Automation: A Technical Overview", 
    tag: "AI", 
    date: "Mar 2026", 
    desc: "How GPU-accelerated machine learning is transforming factory floor operations and predictive maintenance. We explore the architectural shifts required for real-time edge inference and automated decision systems.",
    content: "The integration of AI into industrial environments marks a monumental shift from reactive to proactive operations. At the core of this transformation are GPU-accelerated architectures powered by the NVIDIA SDK. By deploying deep neural networks at the edge, facilities are now capable of executing sub-millisecond inferencing directly on the factory floor.\n\nThis localized processing eliminates the traditional latency bottleneck of cloud roundtripping, allowing robotic systems, PLCs, and SCADA architectures to immediately correct anomalies. Predictive maintenance models parse millions of high-frequency vibrational and thermal data points continuously, identifying microscopic fatigue patterns months before a catastrophic failure occurs.\n\nFurthermore, the implementation of these high-density AI clusters introduces unprecedented operational sovereignty. Facilities no longer rely purely on deterministic logic but can orchestrate 'Smart Systems' capable of continuous reinforcement learning, autonomously optimizing energy consumption, precision tolerances, and supply chain throughput.",
    img: "/graphics/31.png",
    featured: true
  },
  { 
    title: "IoT Data Optimization Strategies for Scale", 
    tag: "IoT", 
    date: "Feb 2026", 
    desc: "Best practices for managing millions of data points from distributed sensor networks in real time without bottlenecks.",
    content: "As industrial IoT deployments scale from thousands to millions of data nodes, traditional data ingestion pipelines inevitably fracture. Distributed sensor networks generating high-frequency time-series telemetry require an overhaul of standard REST-based architectures. \n\nModern scale demands decoupled MQTT brokers acting alongside high-throughput stream processing frameworks like Apache Kafka. By pushing aggregation and data normalization directly to the edge gateway, unnecessary bandwidth consumption is aggressively mitigated. Real-time deduplication and packet validation ensure that the central AI data warehouse only processes clean, actionable signals, drastically reducing cloud infrastructure overhead while preserving systemic agility and reaction speed.",
    img: "/graphics/32.png"
  },
  { 
    title: "Real-Time Workflow Intelligence Systems", 
    tag: "Workflows", 
    date: "Jan 2026", 
    desc: "Building event-driven automation pipelines that respond to operational anomalies in milliseconds.",
    content: "Operational workflows can no longer afford the latency of human intervention or batched cron jobs. Designing true Real-Time Workflow Intelligence begins with a strictly event-driven architecture. \n\nBy unifying siloed manufacturing execution systems (MES), ERPs, and localized PLCs under a singular, high-speed message bus, any localized operational anomaly instantly triggers an organizational cascade. An over-temperature read on an industrial lathe doesn't just trigger an alarm; the event-driven workflow automatically throttles the machine, reroutes parallel production queues, schedules a maintenance ticket, and re-calculates downstream shift impacts—all within milliseconds of the initial sensor flag.",
    img: "/graphics/33.png"
  },
  { 
    title: "The Future of Smart Infrastructure", 
    tag: "Industry", 
    date: "Dec 2025", 
    desc: "How connected systems and AI-analytics are reshaping cities and energy grids.",
    content: "Smart infrastructure is transitioning from experimental implementations into necessary structural backbones. The future of energy grids relies on dynamically routing loads via AI-driven load forecasting, drastically stabilizing the network against erratic renewable generation inputs.\n\nBy leveraging high-resolution IoT data, municipalities and large industrial complexes can deploy closed-loop grid balancing. These systems preemptively calculate micro-climate shifts and demand surges, distributing stored battery reserves exactly where needed. This is the cornerstone of sustainable infrastructure: extreme, computationally-driven efficiency.",
    img: "/graphics/34.png"
  },
  { 
    title: "Predictive Maintenance: From Theory to Profit", 
    tag: "Maintenance", 
    date: "Nov 2025", 
    desc: "Reducing downtime by 40% through advanced failure-prediction heatmaps and sensor fusion.",
    content: "Predictive maintenance has evolved from statistical estimations to highly accurate, physics-informed neural networks. By deploying sensor fusion—layering acoustic, thermal, and electrical signatures—models can construct perfect digital twins of mechanical assets.\n\nThis multi-variate modeling identifies failing bearings or hydraulic leaks long before human detection is possible. By integrating this directly into procurement and scheduling workflows, facilities are observing up to a 40% reduction in unplanned downtime, converting maintenance from a sunk cost into a highly optimized profit-preserving operation.",
    img: "/graphics/35.png"
  },
  { 
    title: "Edge AI: Processing at the Source", 
    tag: "Edge", 
    date: "Oct 2025", 
    desc: "Why low-latency edge computing is essential for the next generation of industrial robotics.",
    content: "To achieve human-equivalent reaction parity in industrial robotics, inferencing must move to the extreme edge. Cloud architecture, burdened by network routing delays, is fundamentally incompatible with the microsecond response times required for active, high-speed robotic safety and precision.\n\nDeploying localized GPU or TPU accelerators directly onto the machinery isolates critical automation loops from external network dependencies. This ensures that computer vision modules identifying structural defects or sudden obstructions can sever power and initiate emergency braking organically, guaranteeing operational safety even in total network isolation scenarios.",
    img: "/graphics/36.png"
  },
  { 
    title: "Securing the Decentralized IoT Ecosystem", 
    tag: "Security", 
    date: "Sep 2025", 
    desc: "Implementing multi-layered digital shields for secure neural network communications.",
    content: "With the proliferation of localized edge compute nodes, the attack surface of an industrial facility expands exponentially. Securing a decentralized IoT ecosystem requires zero-trust architecture at the hardware level.\n\nEvery PLC, sensor, and gateway must utilize cryptographic token validation and mutual TLS encapsulation for all data transit. Furthermore, network segmentation strategies driven by AI behavioral monitoring analyze packet trajectories in real-time, instantly isolating any node exhibiting rogue connection attempts before lateral network traversal can commence.",
    img: "/graphics/37.png"
  }
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<typeof articles[0] | null>(null);
  const featuredPost = articles.find(a => a.featured);
  const secondaryPosts = articles.filter(a => !a.featured).slice(0, 2);
  const recentPosts = articles.filter(a => !a.featured).slice(2);

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#ffffff]">
      <IsometricCubes />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-xs font-bold text-[#061731] tracking-widest uppercase px-4 py-2 border-2 border-[#061731] bg-[#ffcd00] shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]">Insights</span>
          <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#061731]">
            Comprehensive Resources
          </h2>
          <p className="mt-4 text-[#53586b] font-medium max-w-2xl mx-auto text-justify">
            Deep dives into artificial intelligence, industrial connectivity, and the future of automated operational intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Featured Post */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="bg-[#ffffff] border-4 border-[#061731] h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] transition-transform hover:-translate-y-1">
              <div className="aspect-[16/9] overflow-hidden relative border-b-4 border-[#061731]">
                <img 
                  src={featuredPost?.img} 
                  alt={featuredPost?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 text-xs font-bold bg-[#ffcd00] border-2 border-[#061731] text-[#061731] uppercase">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border-2 border-[#061731] bg-[#53586b] text-[#ffffff]">{featuredPost?.tag}</span>
                    <span className="text-[10px] text-[#53586b] font-bold uppercase">{featuredPost?.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#061731] mb-4 leading-tight">
                    {featuredPost?.title}
                  </h3>
                  <p className="text-[#53586b] font-medium leading-relaxed mb-6 text-justify">
                    {featuredPost?.desc}
                  </p>
                </div>
                <button 
                  onClick={() => featuredPost && setSelectedPost(featuredPost)}
                  className="self-start px-6 py-3 bg-[#ffcd00] text-[#061731] font-bold tracking-widest uppercase border-2 border-[#061731] transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] flex items-center gap-2"
                >
                  READ MORE <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Posts */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {secondaryPosts.map((post, i) => (
              <div key={i} className="bg-[#ffffff] flex-1 flex flex-col border-4 border-[#061731] shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] transition-transform hover:-translate-y-1">
                <div className="aspect-[16/8] overflow-hidden border-b-4 border-[#061731]">
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                   <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase border-2 border-[#061731] bg-[#ffffff] text-[#061731]">{post.tag}</span>
                        <span className="text-[10px] text-[#53586b] font-bold uppercase">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#061731] mb-4 leading-snug">
                        {post.title}
                      </h3>
                   </div>
                   <button 
                     onClick={() => setSelectedPost(post)}
                     className="self-start px-4 py-2 bg-[#ffffff] text-[#061731] font-bold text-xs tracking-wider uppercase border-2 border-[#061731] transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] hover:bg-[#ffcd00] flex items-center gap-1"
                   >
                     READ MORE <ArrowUpRight size={14} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
          {recentPosts.map((post, i) => (
            <div key={i} className="bg-[#ffffff] border-4 border-[#061731] p-6 shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] flex flex-col transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-0.5 text-[9px] font-bold uppercase bg-[#061731] text-[#ffffff]">{post.tag}</span>
                <span className="text-[10px] text-[#53586b] font-bold uppercase">{post.date}</span>
              </div>
              <h4 className="text-sm font-bold text-[#061731] mb-3 leading-snug">
                {post.title}
              </h4>
              <p className="text-[11px] text-[#53586b] font-medium line-clamp-2 leading-relaxed mb-4 flex-1 text-justify">
                {post.desc}
              </p>
              <button 
                onClick={() => setSelectedPost(post)}
                className="self-start text-[10px] text-[#061731] font-bold border-b-2 border-[#061731] hover:text-[#ffcd00] hover:bg-[#061731] transition-colors p-1 flex items-center gap-1 uppercase"
              >
                READ MORE <ArrowUpRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Brutalist Modal */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-3xl bg-[#ffffff] border-4 border-[#061731] shadow-[12px_12px_0px_0px_rgba(6,23,49,1)] rounded-none p-0 overflow-hidden">
          {selectedPost && (
            <div className="flex flex-col max-h-[85vh] overflow-y-auto">
               <div className="aspect-[21/9] w-full border-b-4 border-[#061731] relative">
                 <img src={selectedPost.img} alt={selectedPost.title} className="w-full h-full object-cover" />
                 <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#ffcd00] border-2 border-[#061731] font-bold text-xs text-[#061731] uppercase shadow-[2px_2px_0px_0px_rgba(6,23,49,1)]">
                       {selectedPost.tag}
                    </span>
                 </div>
               </div>
               <div className="p-8 sm:p-12">
                  <DialogHeader>
                    <DialogTitle className="text-3xl sm:text-4xl font-bold text-[#061731] leading-tight mb-4 tracking-tight">
                       {selectedPost.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm font-bold text-[#53586b] uppercase tracking-widest border-b-2 border-[#061731] pb-6 mb-6">
                       PUBLISHED: {selectedPost.date}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="prose prose-lg max-w-none prose-p:text-[#061731] prose-p:font-medium prose-p:leading-relaxed prose-strong:text-[#061731]">
                     <p className="text-lg italic font-bold text-[#53586b] border-l-4 border-[#ffcd00] pl-4 mb-8 text-justify">
                       {selectedPost.desc}
                     </p>
                     <div className="space-y-6 text-[15px] text-justify">
                       <p>{selectedPost.content.split('\n\n')[0]}</p>
                     </div>
                  </div>
                  <div className="mt-12 pt-8 border-t-4 border-[#061731] text-center">
                     <button 
                       onClick={() => setSelectedPost(null)}
                       className="px-8 py-4 bg-[#061731] text-[#ffffff] border-4 border-[#061731] font-bold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,205,0,1)]"
                     >
                       CLOSE ARTICLE
                     </button>
                  </div>
               </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogSection;
