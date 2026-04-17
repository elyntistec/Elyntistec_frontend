import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Zap, Database, BarChart3, MessageSquare, Shield, Infinity, Globe } from "lucide-react";
import IsometricCubes from "./IsometricCubes";

const plans = [
  {
    name: "Starter",
    price: { monthly: 499, yearly: 399 },
    desc: "For small teams getting started with IoT data.",
    features: [
      { text: "Up to 50 IoT devices", icon: Cpu },
      { text: "Basic data processing", icon: Zap },
      { text: "3 automated workflows", icon: Database },
      { text: "Standard dashboards", icon: BarChart3 },
      { text: "Email support", icon: MessageSquare },
      { text: "7-day data retention", icon: Shield },
    ],
    cta: "Buy Starter",
    href: "https://buy.stripe.com/test_aFa28l7xqgqqh2xc0M6EU00",
    highlighted: false,
    color: "bg-[#ffffff]",
    text: "text-[#061731]",
    border: "border-[#061731]"
  },
  {
    name: "Professional",
    price: { monthly: 1499, yearly: 1199 },
    desc: "For growing operations requiring advanced automation.",
    features: [
      { text: "Up to 500 IoT devices", icon: Cpu },
      { text: "Real-time AI processing", icon: Zap },
      { text: "Unlimited workflows", icon: Infinity },
      { text: "Custom dashboards", icon: BarChart3 },
      { text: "Priority support + SLA", icon: MessageSquare },
      { text: "90-day data retention", icon: Shield },
      { text: "Predictive analytics", icon: BarChart3 },
      { text: "Full API access", icon: Globe },
    ],
    cta: "Buy Professional",
    href: "https://buy.stripe.com/test_7sYfZbaJCeiicMhc0M6EU01",
    highlighted: true,
    color: "bg-[#061731]",
    text: "text-[#ffffff]",
    border: "border-[#061731]"
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    desc: "Full-scale industrial intelligence with dedicated infrastructure.",
    features: [
      { text: "Unlimited devices", icon: Infinity },
      { text: "GPU-accelerated processing", icon: Zap },
      { text: "Custom ML models", icon: Cpu },
      { text: "White-label dashboards", icon: BarChart3 },
      { text: "Dedicated account team", icon: MessageSquare },
      { text: "Unlimited data retention", icon: Database },
      { text: "On-premise deployment", icon: Globe },
      { text: "Custom integrations", icon: Database },
    ],
    cta: "Custom Pricing",
    href: "#contact",
    highlighted: false,
    color: "bg-[#53586b]",
    text: "text-[#ffffff]",
    border: "border-[#061731]"
  },
];

const PricingCard = ({ plan, isYearly }: { plan: any, isYearly: boolean }) => {
  const currentPrice = typeof plan.price === 'string' ? plan.price : (isYearly ? plan.price.yearly : plan.price.monthly);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group p-8 flex flex-col border-4 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] h-full ${plan.border} ${plan.color} ${plan.text} ${
        plan.highlighted ? `-translate-y-4` : "hover:-translate-y-2"
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#ffcd00] text-[#061731] text-xs font-bold uppercase tracking-widest border-2 border-[#061731]">
          Most Scalable
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-3xl font-dmSerif ${plan.text} mb-2`}>{plan.name}</h3>
        <p className={`text-sm ${plan.text} opacity-80 font-medium h-10`}>{plan.desc}</p>
        <div className="mt-8 flex items-baseline gap-1">
          <span className={`text-5xl font-black ${plan.text}`}>
            {typeof currentPrice === 'number' ? `$${currentPrice}` : currentPrice}
          </span>
          {typeof currentPrice === 'number' && (
            <span className={`${plan.text} opacity-70 font-bold`}>/mo</span>
          )}
        </div>
        {isYearly && typeof currentPrice === 'number' && (
          <span className="text-[10px] font-bold text-[#061731] uppercase tracking-wider block mt-2 bg-[#ffcd00] inline-block px-2 border-2 border-[#061731]">
            Billed annually — Save 20%
          </span>
        )}
      </div>

      <div className={`space-y-4 mb-8 flex-1 border-t-2 ${plan.highlighted || plan.name === 'Enterprise' ? 'border-[#ffffff]' : 'border-[#061731]'} pt-6`}>
        {plan.features.map((f: any, j: number) => (
          <li key={j} className="flex items-center gap-3 list-none">
            <div className={`p-1 border-2 border-[#061731] bg-[#ffffff] shrink-0`}>
              <f.icon size={16} className="text-[#061731]" />
            </div>
            <span className={`text-sm ${plan.text} font-bold`}>{f.text}</span>
          </li>
        ))}
      </div>

      <a
        href={plan.href}
        target={plan.href.startsWith('http') ? "_blank" : undefined}
        rel={plan.href.startsWith('http') ? "noopener noreferrer" : undefined}
        className={`mt-auto block text-center py-4 border-4 border-[#061731] font-bold text-sm tracking-widest uppercase transition-transform hover:-translate-y-1 ${
          plan.highlighted ? "bg-[#ffffff] text-[#061731] shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" : plan.name==='Enterprise' ? "bg-[#061731] text-[#ffffff] shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]" : "bg-[#53586b] text-[#ffffff] shadow-[4px_4px_0px_0px_rgba(83,88,107,1)]"
        }`}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
};

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-[#ffffff]">
      <IsometricCubes />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #061731 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#061731] bg-[#ffcd00] mb-6 shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]">
            <span className="text-[10px] font-bold text-[#061731] uppercase tracking-[0.2em]">Tiered Infrastructure</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-dmSerif text-[#061731] tracking-tight leading-tight">
            Built to Scale <br />
            <span className="font-berkshire bg-[#53586b] text-[#ffffff] px-4 inline-block mt-2">Without Friction</span>
          </h2>
        </motion.div>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-20">
          <span className={`text-sm font-bold ${!isYearly ? 'text-[#061731]' : 'text-[#061731]/50'}`}>MONTHLY</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 bg-[#ffffff] border-4 border-[#061731] p-1 relative flex items-center shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]"
          >
            <motion.div 
              animate={{ x: isYearly ? 24 : 0 }}
              className="w-4 h-4 bg-[#ffcd00] border-2 border-[#061731]"
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold ${isYearly ? 'text-[#061731]' : 'text-[#061731]/50'}`}>ANNUALLY</span>
            <span className="px-2 py-1 bg-[#53586b] border-2 border-[#061731] text-[#ffffff] text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(6,23,49,1)]">SAVE 20%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={i === 1 ? "md:-mt-8 md:mb-8" : ""}>
               <PricingCard plan={plan} isYearly={isYearly} />
            </div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-24 text-center">
           <div className="inline-block border-2 border-[#061731] bg-[#ffffff] p-6 shadow-[6px_6px_0px_0px_rgba(6,23,49,1)] max-w-2xl">
             <p className="text-sm text-[#061731] font-bold">
               All plans include 24/7 core system monitoring and multi-regional availability. 
               <br className="hidden sm:block" />
               Need a custom configuration? <a href="#contact" className="text-[#ffcd00] bg-[#061731] px-1 hover:underline">Speak with a Solution Architect.</a>
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
