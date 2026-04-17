import { motion } from "framer-motion";
import { FileText, ArrowLeft, Mail, Clock, Gavel, Scale, AlertTriangle, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IsometricCubes from "@/components/IsometricCubes";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#061731] flex flex-col font-sans antialiased overflow-x-hidden relative">
      <Navbar />
      <IsometricCubes />
      
      <main className="flex-1 relative pt-32 pb-24 z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header Section */}
            <div className="mb-16 text-center lg:text-left border-4 border-[#061731] bg-[#ffffff] p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(6,23,49,1)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcd00]/10 border-l-4 border-b-4 border-[#061731] -translate-y-8 translate-x-8 rotate-12" />
               
               <div className="inline-flex items-center justify-center w-16 h-16 bg-[#53586b] border-4 border-[#061731] mb-8 shadow-[4px_4px_0px_0px_rgba(6,23,49,1)] -rotate-3">
                  <FileText size={32} className="text-[#ffffff]" />
               </div>
               
               <h1 className="text-4xl sm:text-6xl font-dmSerif text-[#061731] mb-6 leading-tight">
                 Terms & <br />
                 <span className="font-berkshire bg-[#ffcd00] text-[#061731] px-4 mt-2 inline-block border-2 border-[#061731] rotate-1">Conditions</span>
               </h1>
               
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#061731] text-[#ffffff] border-2 border-[#061731] text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,205,0,1)]">
                    <Clock size={14} />
                    Last Updated: April 09, 2026
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#ffffff] text-[#061731] border-2 border-[#061731] text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]">
                    <Gavel size={14} />
                    Governing Law: California, USA
                  </div>
               </div>
            </div>

            {/* Content Container */}
            <div className="space-y-12 bg-[#ffffff] border-4 border-[#061731] p-8 sm:p-12 shadow-[16px_16px_0px_0px_rgba(6,23,49,1)] relative">
               
               <section>
                 <p className="text-lg font-bold text-[#061731] leading-relaxed mb-6">
                   Please read these terms and conditions carefully before using Our Service.
                 </p>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <Scale size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Interpretation and Definitions</h2>
                 </div>
                 <div className="space-y-6 text-[#061731]/90 font-medium leading-relaxed">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731]">Interpretation</h3>
                    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    
                    <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731] mt-8">Definitions</h3>
                    <div className="grid gap-4 mt-4">
                       {[
                         { term: "Affiliate", desc: "An entity that controls, is controlled by, or is under common control with a party, where 'control' means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                         { term: "Company", desc: "Refers to ElyntisTec, 101 Second Street, San Francisco, CA 94105, USA." },
                         { term: "Device", desc: "Any device that can access the Service such as a computer, a cell phone or a digital tablet." },
                         { term: "Service", desc: "Refers to the Website." },
                         { term: "Terms and Conditions", desc: "These Terms and Conditions which govern Your access to and use of the Service and form the entire agreement between You and the Company." },
                         { term: "Third-Party Social Media Service", desc: "Any services or content (including data, information, products or services) provided by a third party displayed through the Service." },
                         { term: "Website", desc: "Refers to ElyntisTec, accessible from https://elyntistec.com" },
                         { term: "You", desc: "The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service." }
                       ].map((item, i) => (
                         <div key={i} className="p-4 border-2 border-[#061731] bg-[#f8fafc] hover:bg-[#ffcd00]/10 transition-colors">
                            <span className="block font-black uppercase text-xs tracking-widest mb-2 text-[#061731]">{item.term}</span>
                            <p className="text-sm">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Acknowledgment</h2>
                 </div>
                 <div className="space-y-6 text-[#061731]/90 font-medium leading-relaxed">
                    <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                    <div className="p-6 bg-[#061731] text-[#ffffff] border-4 border-[#061731] shadow-[8px_8px_0px_0px_rgba(255,205,0,1)]">
                       <p className="font-bold">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                    </div>
                    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                 </div>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <Zap size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Service & Limitations</h2>
                 </div>
                 <div className="space-y-8">
                    <div className="p-6 border-4 border-[#061731] bg-[#f8fafc]">
                       <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731] mb-4">Links to Other Websites</h3>
                       <p className="text-sm mb-4">Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
                       <p className="text-sm font-bold">We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>
                    </div>

                    <div className="p-6 border-4 border-[#061731] bg-[#ffffff] shadow-[6px_6px_0px_0px_rgba(6,23,49,1)]">
                       <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731] mb-4">Termination</h3>
                       <p className="text-sm">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.</p>
                    </div>
                 </div>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Disclaimers & Liability</h2>
                 </div>
                 <div className="space-y-6">
                    <div className="p-6 border-4 border-[#061731] bg-[#53586b] text-[#ffffff] shadow-[8px_8px_0px_0px_rgba(6,23,49,1)]">
                       <h3 className="text-xl font-dmSerif text-[#ffcd00] mb-4 uppercase">Limitation of Liability</h3>
                       <p className="text-sm mb-4 opacity-90">Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                       <p className="text-sm opacity-90 italic">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever.</p>
                    </div>

                    <div className="p-6 border-4 border-[#061731] bg-[#ffffff] shadow-[8px_8px_0px_0px_rgba(6,23,49,1)]">
                       <h3 className="text-xl font-dmSerif text-[#061731] mb-4 uppercase">"AS IS" and "AS AVAILABLE" Disclaimer</h3>
                       <p className="text-sm mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.</p>
                       <p className="text-xs text-[#061731]/70 bg-[#ffcd00]/10 p-4 border border-[#061731]">
                         Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind: (i) as to the operations/availability of the service; (ii) that it will be uninterrupted/error-free; (iii) as to the accuracy/reliability of content; or (iv) that it is free of viruses or harmful components.
                       </p>
                    </div>
                 </div>
               </section>

               <section>
                 <h2 className="text-3xl font-dmSerif text-[#061731] mb-6 border-b-4 border-[#ffcd00] inline-block pb-1">Legal Provisions</h2>
                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-4 border-2 border-[#061731] bg-[#f8fafc]">
                       <h4 className="font-black uppercase text-xs mb-2 tracking-widest">Governing Law</h4>
                       <p className="text-sm">The laws of California, United States, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.</p>
                    </div>
                    <div className="p-4 border-2 border-[#061731] bg-[#f8fafc]">
                       <h4 className="font-black uppercase text-xs mb-2 tracking-widest">Dispute Resolution</h4>
                       <p className="text-sm">If You have any concern or dispute, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                    </div>
                    <div className="p-4 border-2 border-[#061731] bg-[#f8fafc]">
                       <h4 className="font-black uppercase text-xs mb-2 tracking-widest">EU & US Compliance</h4>
                       <p className="text-sm">EU consumers benefit from mandatory provisions of their resident country. You represent that You are not located in a country subject to US government embargo.</p>
                    </div>
                    <div className="p-4 border-2 border-[#061731] bg-[#f8fafc]">
                       <h4 className="font-black uppercase text-xs mb-2 tracking-widest">Severability & Waiver</h4>
                       <p className="text-sm">If any provision is held unenforceable, remaining provisions continue in effect. Failure to exercise a right does not constitute a waiver.</p>
                    </div>
                 </div>
               </section>

               <section>
                 <h2 className="text-3xl font-dmSerif text-[#061731] mb-6 border-b-4 border-[#ffcd00] inline-block pb-1">Changes & Translation</h2>
                 <div className="space-y-4 text-[#061731]/90 font-medium leading-relaxed">
                    <p>We reserve the right to modify these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days' notice. By continuing to access the service after revisions, You agree to be bound by the new terms.</p>
                    <p className="text-xs italic">These Terms may have been translated. The original English text shall prevail in case of a dispute.</p>
                 </div>
               </section>

               <section>
                 <div className="bg-[#061731] p-8 border-4 border-[#061731] text-[#ffffff] relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,205,0,1)]">
                    <Mail className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 rotate-12" />
                    <h2 className="text-3xl font-dmSerif mb-6 text-[#ffcd00]">Contact Us</h2>
                    <p className="text-lg font-bold mb-6">If you have any questions about these Terms and Conditions, you can contact us:</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                       <a 
                         href="mailto:support@elyntistec.com"
                         className="flex items-center gap-3 bg-[#ffffff] text-[#061731] px-6 py-3 border-2 border-[#061731] font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(255,205,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
                       >
                         <Mail size={16} />
                         support@elyntistec.com
                       </a>
                    </div>
                 </div>
               </section>

               {/* Back to Home Button */}
               <div className="pt-12 border-t-4 border-[#061731]">
                  <Link 
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#061731] hover:text-[#ffcd00] transition-colors group px-6 py-3 border-4 border-[#061731] bg-[#ffffff] shadow-[6px_6px_0px_0px_rgba(6,23,49,1)]"
                  >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Platform Index
                  </Link>
               </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
