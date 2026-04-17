import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  Database,
  MessageSquare,
  Workflow,
  BarChart3,
  Server,
  ArrowRight
} from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ElyntisTecProductPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.key === "default") {
      navigate('/');
    }
  }, [navigate, location.key]);

  return (
    <div className="min-h-screen bg-[#ffffff] font-['Inter'] text-[#061731] relative overflow-x-hidden">
      <Navbar />
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#061731_1px,transparent_1px),linear-gradient(to_bottom,#061731_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#ffcd00] rounded-full rotate-12"></div>
        <div className="absolute top-2/3 right-10 w-64 h-64 bg-[#061731]/10 rounded-sm -rotate-45"></div>
      </div>

      <div className="relative z-10 selection:bg-[#ffcd00]/30">
        {/* SECTION 1: HERO & CORE VALUE PROPOSITION */}
        <section className="relative pt-32 lg:pt-40 pb-32 border-b border-gray-100">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ffcd00] rounded-full bg-[#ffcd00]/10 text-[#061731] font-bold text-xs tracking-widest mb-10">
                <Cpu size={14} className="text-[#ffcd00]" /> NVIDIA H100 ACCELERATED
              </div>
              <h1 className="font-['Space_Grotesk'] text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-10 uppercase italic">
                Turn Data <br />
                <span className="text-white bg-[#061731] px-3 not-italic">Into Smart</span> <br />
                Actions
              </h1>
              <p className="text-xl text-[#53586b] mb-12 max-w-lg leading-relaxed">
                Turn complex data into clear, actionable intelligence. Streamlining workflows, improving efficiency, and enabling smarter decisions with AI-driven automation.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 font-bold">
                <button 
                  onClick={() => navigate('/#contact')}
                  className="w-full sm:w-auto bg-[#ffcd00] text-[#061731] px-6 py-4 sm:px-10 sm:py-5 flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] sm:shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95"
                >
                  REQUEST DEMO <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => window.open('https://app.elyntistec.com/', '_blank')}
                  className="w-full sm:w-auto border-2 border-[#061731] px-6 py-4 sm:px-10 sm:py-5 text-[#061731] hover:bg-[#061731] hover:text-white transition-colors active:scale-95 text-center"
                >
                  CORE PLATFORM
                </button>
              </div>
            </div>

            <div className="relative group mt-10 lg:mt-0">
              <div className="absolute -inset-4 sm:-inset-10 bg-[#ffcd00] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-white border-2 border-[#061731] p-2 sm:p-4 shadow-[8px_8px_0px_0px_rgba(255,205,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(255,205,0,1)]">
                <div className="bg-[#061731] p-6 sm:p-10 aspect-square sm:aspect-video flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute inset-0 opacity-5"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div className="font-['JetBrains_Mono'] text-[#ffcd00] text-xs sm:text-sm tracking-tight leading-tight">
                      {`> STATUS: OPTIMIZING_PIPELINE`} <br />
                      {`> LATENCY: 0.002ms`} <br />
                      {`> MODEL: H100_TRANSFORMER`}
                    </div>
                    <Activity className="text-[#ffcd00] animate-pulse w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex items-end gap-1 sm:gap-1.5 h-24 sm:h-32 relative z-10 mt-6">
                    {[60, 40, 85, 30, 95, 70, 55, 80, 40, 90, 65, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#ffcd00]" style={{ height: `${h}%`, transition: 'height 0.8s ease-in-out' }} />
                    ))}
                  </div>
                </div>
                <div className="bg-[#ffcd00] p-4 sm:p-5 -mx-2 sm:-mx-4 -mb-2 sm:-mb-4 mt-2">
                  <div className="flex justify-between items-center text-[#061731] font-black italic">
                    <span className="text-xs sm:text-sm tracking-wider uppercase">DATA FLOW RATE</span>
                    <span className="text-xl sm:text-3xl">1.2 TB/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE NVIDIA STACK INTEGRATION */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-['Space_Grotesk'] text-4xl font-black uppercase tracking-tight mb-4">
                Accelerated <span className="text-[#ffcd00]">NVIDIA</span> AI Engine
              </h2>
              <div className="h-2 w-24 bg-[#061731]"></div>
              <p className="text-[#53586b] mt-5 max-w-xl">Integration of NVIDIA’s AI acceleration technologies enables transformative advancements in industrial data intelligence.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
              {[
                {
                  title: "NVIDIA Riva",
                  desc: "Conversational AI interfaces for querying IoT systems using natural language.",
                  icon: <MessageSquare className="text-[#ffcd00]" />
                },
                {
                  title: "NVIDIA TensorRT",
                  desc: "High-performance deep learning inference for ultra-low latency alerts.",
                  icon: <Zap className="text-[#ffcd00]" />
                },
                {
                  title: "Triton Server",
                  desc: "Scalable model orchestration across distributed enterprise systems.",
                  icon: <Server className="text-[#ffcd00]" />
                },
                {
                  title: "NVIDIA CUDA",
                  desc: "Accelerated parallel processing for large-scale sensor data fusion.",
                  icon: <Cpu className="text-[#ffcd00]" />
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-10 hover:bg-[#061731] group transition-all duration-300">
                  <div className="mb-6 p-4 bg-gray-100 group-hover:bg-white/10 w-fit transition-colors">{item.icon}</div>
                  <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-[#53586b] group-hover:text-gray-400 text-sm sm:text-base leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: INDUSTRIAL INTELLIGENCE FEATURES */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute top-10 right-0 w-1/3 h-1/2 bg-gray-50 -z-10 rounded-l-full hidden lg:block"></div>
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 opacity-10 hidden sm:block">
                  <svg width="100%" height="100%"><line x1="10%" y1="10%" x2="90%" y2="90%" stroke="#061731" strokeWidth="2"/></svg>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 relative z-10">
                  <div className="p-6 sm:p-9 border-2 border-[#061731] bg-white shadow-lg">
                    <BarChart3 size={32} className="sm:w-10 sm:h-10 mb-4 text-[#ffcd00]" />
                    <h4 className="font-bold mb-2">Predictive Modeling</h4>
                    <p className="text-sm text-[#53586b]">Time-series forecasting with transformer-based accuracy.</p>
                  </div>
                  <div className="p-6 sm:p-9 bg-[#061731] text-white sm:mt-12 shadow-xl border border-[#ffcd00]/30">
                    <ShieldCheck size={32} className="sm:w-10 sm:h-10 mb-4 text-[#ffcd00]" />
                    <h4 className="font-bold mb-2 text-[#ffcd00]">Failure Prevention</h4>
                    <p className="text-sm text-gray-400">Predict system failures before they occur to minimize downtime.</p>
                  </div>
                  <div className="p-6 sm:p-9 bg-[#ffcd00] text-[#061731] shadow-xl">
                    <Workflow size={32} className="sm:w-10 sm:h-10 mb-4" />
                    <h4 className="font-bold mb-2">Workflow Optimization</h4>
                    <p className="text-sm text-[#061731]/80">Dynamic resource allocation and automated orchestration.</p>
                  </div>
                  <div className="p-6 sm:p-9 border-2 border-[#061731] bg-white sm:mt-12 shadow-lg">
                    <Database size={32} className="sm:w-10 sm:h-10 mb-4 text-[#ffcd00]" />
                    <h4 className="font-bold mb-2">Sensor Fusion</h4>
                    <p className="text-sm text-[#53586b]">Merging high-volume IoT streams into actionable intelligence.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-['Space_Grotesk'] text-5xl lg:text-6xl font-black mb-10 uppercase leading-[1] italic">
                  Industrial <br /> Automation, <br /> <span className="text-[#ffcd00] bg-[#061731] px-3 not-italic">Redefined.</span>
                </h2>
                <p className="text-[#53586b] text-lg mb-10 leading-relaxed">
                  Our AI engine continuously analyzes high-volume IoT sensor streams. By utilizing the NVIDIA H100 Tensor Core GPU, we drastically reduce training time for predictive models and improve forecasting accuracy for enterprise-scale deployments.
                </p>
                <ul className="space-y-4 font-['JetBrains_Mono'] text-sm font-bold uppercase tracking-tight text-[#061731]">
                  <li className="flex items-center gap-3"><Zap size={16} className="text-[#ffcd00]"/> ULTRA-LOW LATENCY ANOMALY DETECTION</li>
                  <li className="flex items-center gap-3"><Zap size={16} className="text-[#ffcd00]"/> TRANSFORMER-BASED FORECASTING</li>
                  <li className="flex items-center gap-3"><Zap size={16} className="text-[#ffcd00]"/> SECURE & SCALABLE INFRASTRUCTURE</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: AWS & SCALABILITY */}
        <section className="py-28 bg-[#061731] text-white relative overflow-hidden border-t-8 border-[#ffcd00]">
          <div className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(45deg,#ffcd00_25%,transparent_25%),linear-gradient(-45deg,#ffcd00_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#ffcd00_75%),linear-gradient(-45deg,transparent_75%,#ffcd00_75%)] bg-[size:20px_20px]"></div>

          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 break-words leading-tight">AWS Infrastructure</h2>
              <p className="text-gray-300 mb-12 text-base sm:text-lg leading-relaxed max-w-xl">
                ElyntisTec is deployed on GPU-optimized Amazon EC2 instances to ensure high-performance AI processing and global scalability.
              </p>

              <div className="space-y-5">
                <div className="bg-white/5 p-8 border-l-4 border-[#ffcd00] flex gap-5 items-start">
                  <Server size={32} className="text-[#ffcd00] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#ffcd00] mb-1.5 text-xl">Amazon EC2 P5 Instances (NVIDIA H100)</h4>
                    <p className="text-base text-gray-400 leading-relaxed">Designed for advanced AI training workloads and deep learning on high-volume datasets.</p>
                  </div>
                </div>
                <div className="bg-white/5 p-8 border-l-4 border-white/20 flex gap-5 items-start">
                  <Server size={32} className="text-white/40 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1.5 text-xl">Amazon EC2 P4 Instances (NVIDIA A100)</h4>
                    <p className="text-base text-gray-400 leading-relaxed">Optimized for scalable, real-time inference systems.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center bg-[#ffcd00] text-[#061731] p-8 sm:p-16 italic shadow-2xl relative">
              <div className="absolute bottom-5 right-5 font-black text-6xl sm:text-9xl text-[#061731]/10 uppercase leading-none opacity-20">ELYNTIS</div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase tracking-tight relative z-10">Scalability <span className="not-italic opacity-40">/</span> Performance</h3>
              <p className="font-bold text-lg sm:text-xl leading-snug relative z-10">
                "Securing NVIDIA H100 GPU credits will allow us to dramatically accelerate our AI development lifecycle, optimize predictive intelligence models, and scale our platform with enterprise-grade reliability."
              </p>
              <div className="mt-8 sm:mt-10 font-['JetBrains_Mono'] text-xs sm:text-sm font-bold uppercase tracking-tighter relative z-10 p-2 border border-[#061731]/30 w-fit">
                // Deployment Layer Verified
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TECHNICAL CALL TO ACTION */}
        <section className="py-20 sm:py-32 flex justify-center items-center relative">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-50 -z-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-8 sm:mb-12 uppercase leading-[0.9] italic">
                Empower your <br className="hidden sm:block" /> <span className="text-[#ffcd00] bg-[#061731] px-4 not-italic">Data Engine</span>
              </h2>
              <p className="text-[#53586b] text-base sm:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
                Build a secure, scalable, and high-performance AI infrastructure with ElyntisTec, accelerated by NVIDIA GPUs and AWS scalability.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 font-['JetBrains_Mono'] text-sm sm:text-lg">
                <button 
                  onClick={() => navigate('/#contact')}
                  className="w-full sm:w-auto bg-[#ffcd00] text-[#061731] px-8 py-5 sm:px-14 sm:py-6 font-black hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                >
                  REQUEST DEMO ACCESS
                </button>
                <button 
                  onClick={() => window.open('https://app.elyntistec.com/', '_blank')}
                  className="w-full sm:w-auto bg-[#061731] text-white px-8 py-5 sm:px-14 sm:py-6 font-black border-2 border-[#061731] hover:bg-transparent hover:text-[#061731] transition-all active:scale-95"
                >
                  CORE PLATFORM SPECS
                </button>
              </div>
              <div className="mt-16 sm:mt-24 pt-8 sm:pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-6 sm:gap-14 opacity-20 grayscale text-[#061731] font-['Space_Grotesk'] font-bold text-sm sm:text-lg">
                <span>NVIDIA CERTIFIED</span>
                <span>AWS PARTNER</span>
                <span>IOT COMPLIANT</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ElyntisTecProductPage;
