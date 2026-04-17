import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import IsometricCubes from "./IsometricCubes";

const testimonials = [
  {
    name: "Maya Steffani",
    role: "Head of Ops, Nexora Manufacturing",
    content: "ElyntisTec completely changed how we handle operational data. We moved from delayed reports to real-time decision-making across all production lines.",
    image: "/testi/24.png",
    color: "bg-[#061731]",
    textColor: "text-[#ffffff]"
  },
  {
    name: "Liora Bennett",
    role: "Director of Supply Chain Intelligence, Gravitas Logistics",
    content: "The platform unified our IoT data streams and removed 70% of manual data cleaning work. Our forecasting accuracy improved almost instantly.",
    image: "/testi/25.png",
    color: "bg-[#53586b]",
    textColor: "text-[#ffffff]"
  },
  {
    name: "Meera Saadi",
    role: "Chief Digital Ops, UrbanGrid Infrastructure",
    content: "What impressed us most is the workflow automation layer. It seamlessly connects data insights directly to operational actions.",
    image: "/testi/29.png",
    color: "bg-[#061731]",
    textColor: "text-[#ffffff]"
  },
  {
    name: "Darius Kwon",
    role: "Ops Technology Manager, Helix Energy Solutions",
    content: "We now detect anomalies in equipment behavior before failures occur. ElyntisTec's AI engine has significantly reduced downtime in our facilities.",
    image: "/testi/27.png",
    color: "bg-[#53586b]",
    textColor: "text-[#ffffff]"
  },
  {
    name: "Sienna Lee",
    role: "Enterprise Systems Lead, Vireon Global Enterprises",
    content: "Before ElyntisTec, our data was scattered across systems. Now everything is centralized, cleaned, and actionable in real time.",
    image: "/testi/28.png",
    color: "bg-[#061731]",
    textColor: "text-[#ffffff]"
  },
  {
    name: "Sanae Rithvik",
    role: "Program Manager, Aetronix Industries",
    content: "The combination of AI-driven analytics and IoT integration gave us complete visibility into our smart factory ecosystem.",
    image: "/testi/26.png",
    color: "bg-[#53586b]",
    textColor: "text-[#ffffff]"
  },
  {
    name: "Elara Tomić",
    role: "VP of Digital Transformation, Crestline Dynamics",
    content: "ElyntisTec helped us bridge the gap between legacy systems and modern AI. The onboarding was seamless, and the ROI was visible within weeks.",
    image: "/testi/30.png",
    color: "bg-[#061731]",
    textColor: "text-[#ffffff]"
  }
];

const TestimonialCard = ({ t }: { t: any }) => (
  <div className="w-[350px] sm:w-[450px] shrink-0 px-4 py-4">
    <div className={`p-6 border-4 border-[#061731] h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(6,23,49,1)] ${t.color}`}>
      <div className={`flex items-center gap-4 mb-4 pb-4 border-b-4 ${t.color === 'bg-[#53586b]' ? 'border-[#ffffff]' : 'border-[#53586b]'}`}>
        <img
          src={t.image}
          alt={t.name}
          className="w-14 h-14 rounded-full object-cover border-3 border-[#ffcd00] shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]"
        />
        <div>
          <h4 className={`text-xl font-dmSerif font-bold ${t.textColor}`}>{t.name}</h4>
          <p className={`text-[10px] ${t.textColor} font-bold uppercase tracking-widest opacity-80`}>{t.role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className={`fill-[#ffcd00] text-[#ffcd00]`} />
          ))}
        </div>
      </div>
      
      <div className="relative mt-2">
        <Quote className={`absolute -top-4 -left-2 ${t.textColor} opacity-20`} size={40} />
        <p className={`text-sm font-bold ${t.textColor} leading-relaxed relative z-10 p-2 text-justify`}>
          "{t.content}"
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#ffffff] border-t-8 border-[#061731]">
      <IsometricCubes />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        {/* Polka dot background variant */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, #061731 2px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#53586b] border-2 border-[#061731] shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] mb-6">
          <span className="text-[10px] font-bold text-[#ffffff] uppercase tracking-widest">Social Proof</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dmSerif font-bold tracking-tight text-[#061731] flex flex-col items-center">
          <span>Modern Infrastructure</span>
          <span className="font-berkshire bg-[#ffcd00] text-[#061731] px-4 py-1 mt-2 rotate-[-2deg] border-2 border-[#061731] inline-block">Trusted by Leaders</span>
        </h2>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-4">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].reverse().map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fade Overlays (updated to light color) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#ffffff] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#ffffff] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Testimonials;
