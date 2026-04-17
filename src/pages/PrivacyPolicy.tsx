import { motion } from "framer-motion";
import { Shield, ArrowLeft, Mail, Clock, Trash2, Server, Globe, ExternalLink, HelpCircle, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IsometricCubes from "@/components/IsometricCubes";

const PrivacyPolicy = () => {
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
                  <Shield size={32} className="text-[#ffffff]" />
               </div>
               
               <h1 className="text-4xl sm:text-6xl font-dmSerif text-[#061731] mb-6 leading-tight">
                 Privacy <br />
                 <span className="font-berkshire bg-[#ffcd00] text-[#061731] px-4 mt-2 inline-block border-2 border-[#061731] rotate-1">Policy</span>
               </h1>
               
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#061731] text-[#ffffff] border-2 border-[#061731] text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,205,0,1)]">
                    <Clock size={14} />
                    Last Updated: April 09, 2026
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#ffffff] text-[#061731] border-2 border-[#061731] text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(6,23,49,1)]">
                    <Shield size={14} />
                    Enforced Region: California, USA
                  </div>
               </div>
            </div>

            {/* Content Container */}
            <div className="space-y-12 bg-[#ffffff] border-4 border-[#061731] p-8 sm:p-12 shadow-[16px_16px_0px_0px_rgba(6,23,49,1)] relative">
               
               <section>
                 <p className="text-lg font-bold text-[#061731] leading-relaxed mb-6">
                   This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                 </p>
                 <p className="text-[#061731]/80 leading-relaxed italic">
                   We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                 </p>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <HelpCircle size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Interpretation and Definitions</h2>
                 </div>
                 <div className="space-y-6 text-[#061731]/90 font-medium leading-relaxed">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731]">Interpretation</h3>
                    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    
                    <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731] mt-8">Definitions</h3>
                    <p className="mb-4">For the purposes of this Privacy Policy:</p>
                    <div className="grid gap-4 mt-4">
                       {[
                         { term: "Account", desc: "A unique account created for You to access our Service or parts of our Service." },
                         { term: "Affiliate", desc: "An entity that controls, is controlled by, or is under common control with a party, where 'control' means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                         { term: "Company", desc: "Refers to ElyntisTec, 101 Second Street, San Francisco, CA 94105, USA." },
                         { term: "Cookies", desc: "Small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." },
                         { term: "Country", desc: "Refers to: California, United States" },
                         { term: "Device", desc: "Any device that can access the Service such as a computer, a cell phone or a digital tablet." },
                         { term: "Personal Data", desc: "Any information that relates to an identified or identifiable individual." },
                         { term: "Service", desc: "Refers to the Website." },
                         { term: "Service Provider", desc: "Any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service." },
                         { term: "Usage Data", desc: "Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself." },
                         { term: "Website", desc: "Refers to Elyntistec, accessible from https://elyntistec.com" },
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
                    <Server size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Collecting and Using Your Personal Data</h2>
                 </div>
                 
                 <div className="space-y-8">
                    <div>
                       <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731] mb-4">Types of Data Collected</h3>
                       <div className="bg-[#53586b] p-6 border-4 border-[#061731] text-[#ffffff] shadow-[6px_6px_0px_0px_rgba(6,23,49,1)] mb-6">
                          <h4 className="font-dmSerif text-xl mb-4 text-[#ffcd00]">Personal Data</h4>
                          <p className="mb-4 text-sm opacity-90">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You:</p>
                          <ul className="list-none space-y-2">
                             {["Email address", "First name and last name", "Address, State, Province, ZIP/Postal code, City"].map((t, i) => (
                               <li key={i} className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-[#ffcd00] border border-[#061731]" />
                                  <span className="font-mono text-sm">{t}</span>
                               </li>
                             ))}
                          </ul>
                       </div>

                       <div className="p-6 border-4 border-[#061731] bg-[#f8fafc] shadow-[6px_6px_0px_0px_rgba(6,23,49,1)] mb-6">
                          <h4 className="font-dmSerif text-xl text-[#061731] mb-4">Usage Data</h4>
                          <div className="text-sm text-[#061731]/80 space-y-4">
                             <p>Usage Data is collected automatically when using the Service. It may include information such as Your Device's IP address, browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, and other diagnostic data.</p>
                             <p>When You access the Service via a mobile device, We may collect specific information including the type of device, device unique ID, IP address, and operating system.</p>
                          </div>
                       </div>
                    </div>

                    <div>
                       <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731] mb-4">Tracking Technologies and Cookies</h3>
                       <div className="p-6 border-4 border-[#061731] bg-[#ffffff] space-y-6">
                          <p className="text-sm text-[#061731]/90">We use Cookies and similar tracking technologies (beacons, tags, and scripts) to track activity on Our Service and store certain information.</p>
                          
                          <div className="grid sm:grid-cols-2 gap-4">
                             <div className="p-4 border-2 border-dashed border-[#061731]">
                                <h5 className="font-bold text-xs uppercase mb-2">Cookies / Browser Cookies</h5>
                                <p className="text-xs">A small file placed on Your Device. You can instruct Your browser to refuse all Cookies, however, some parts of our Service may not function correctly.</p>
                             </div>
                             <div className="p-4 border-2 border-dashed border-[#061731]">
                                <h5 className="font-bold text-xs uppercase mb-2">Web Beacons</h5>
                                <p className="text-xs">Small electronic files used to count users who have visited pages or opened emails for website statistics and server integrity verify.</p>
                             </div>
                          </div>

                          <div className="space-y-4 pt-4 border-t-2 border-[#061731]/10">
                              <p className="text-sm font-bold">We use both Session and Persistent Cookies for:</p>
                              {[
                                { title: "Necessary / Essential Cookies", type: "Session", desc: "Essential to provide You with services available through the Website and enable authentication." },
                                { title: "Cookies Policy Acceptance", type: "Persistent", desc: "Identify if users have accepted the use of cookies on the Website." },
                                { title: "Functionality Cookies", type: "Persistent", desc: "Allow us to remember choices You make, such as login details or language preferences." }
                              ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start p-3 bg-[#f8fafc]">
                                   <div className="w-1.5 h-1.5 bg-[#ffcd00] mt-1.5 shrink-0" />
                                   <div>
                                      <span className="text-xs font-black uppercase text-[#061731]">{item.title} ({item.type})</span>
                                      <p className="text-xs text-[#061731]/70">{item.desc}</p>
                                   </div>
                                </div>
                              ))}
                          </div>
                       </div>
                    </div>
                 </div>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <Shield size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Use of Your Personal Data</h2>
                 </div>
                 <div className="space-y-4 text-[#061731]/90 font-medium leading-relaxed">
                    <p>The Company may use Personal Data for the following purposes:</p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                       {[
                         { title: "Service Maintenance", desc: "To provide and maintain our Service, including usage monitoring." },
                         { title: "Account Management", desc: "To manage Your registration as a user of the Service." },
                         { title: "Contract Performance", desc: "Development and undertaking of purchase contracts for products or services." },
                         { title: "Communication", desc: "To contact You by email, calls, SMS, or equivalent electronic forms." },
                         { title: "News & Offers", desc: "To provide general information about news, special offers, and similar goods." },
                         { title: "Request Management", desc: "To attend and manage Your requests to Us." },
                         { title: "Business Transfers", desc: "To evaluate or conduct mergers, divestitures, or asset sales." },
                         { title: "Other Purposes", desc: "Data analysis, usage trends, and service improvement." }
                       ].map((u, i) => (
                         <li key={i} className="p-4 bg-muted/10 border-2 border-[#061731] text-sm group hover:bg-[#ffcd00]/5 transition-colors">
                            <span className="block font-black uppercase text-[10px] tracking-[0.2em] mb-1 text-[#061731]">{u.title}</span>
                            {u.desc}
                         </li>
                       ))}
                    </ul>
                 </div>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <Clock size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Retention of Your Personal Data</h2>
                 </div>
                 <div className="space-y-6 text-[#061731]/90 font-medium leading-relaxed">
                    <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We apply shorter retention periods where possible:</p>
                    
                    <div className="space-y-4">
                       {[
                         { cat: "Account Information", detail: "Retained for the duration of account relationship plus up to 24 months post-closure." },
                         { cat: "Customer Support Data", detail: "Tickets and correspondence: up to 24 months. Chat transcripts: up to 24 months." },
                         { cat: "Usage Data", detail: "Website analytics and server logs: up to 24 months from collection date." }
                       ].map((item, i) => (
                         <div key={i} className="p-4 border-l-8 border-[#061731] bg-[#f8fafc]">
                            <h4 className="font-bold text-[#061731] mb-1">{item.cat}</h4>
                            <p className="text-sm">{item.detail}</p>
                         </div>
                       ))}
                    </div>

                    <div className="p-6 bg-[#061731] text-[#ffffff] border-4 border-[#061731]">
                       <h4 className="font-dmSerif text-xl mb-4">Secure Deletion Procedures</h4>
                       <ul className="space-y-3 text-sm opacity-90">
                          <li><strong>Deletion:</strong> Data is removed from Our systems and no longer actively processed.</li>
                          <li><strong>Backup Retention:</strong> Residual copies may remain in encrypted backups for a limited period consistent with our restore schedule.</li>
                          <li><strong>Anonymization:</strong> We may convert Data into anonymous statistical records for research.</li>
                       </ul>
                    </div>
                 </div>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-6">
                    <Globe size={28} className="text-[#ffcd00]" />
                    <h2 className="text-3xl font-dmSerif text-[#061731] border-b-4 border-[#ffcd00] inline-block pb-1">Transfer and Disclosure</h2>
                 </div>
                 <div className="space-y-6 text-[#061731]/90 font-medium leading-relaxed">
                    <div className="p-6 border-4 border-[#061731] bg-[#ffffff] shadow-[8px_8px_0px_0px_rgba(255,188,0,1)]">
                       <h3 className="text-xl font-bold uppercase tracking-wider text-[#061731] mb-4">Transfer of Personal Data</h3>
                       <p className="text-sm">Your information is processed at the Company's operating offices. It may be transferred to computers located outside of Your jurisdiction where data protection laws may differ. We take all steps reasonably necessary to ensure Your data is treated securely.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                       <div className="p-6 border-4 border-[#061731] bg-[#f8fafc]">
                          <h3 className="font-dmSerif text-xl text-[#061731] mb-4 text-center">Delete Your Data</h3>
                          <p className="text-xs mb-4">You have the right to request deletion of Personal Data We have collected about You. You can update or delete information via Your Account settings or by contacting Us.</p>
                          <div className="flex justify-center">
                             <div className="w-12 h-12 bg-[#ffcd00] border-2 border-[#061731] flex items-center justify-center">
                                <Trash2 size={24} className="text-[#061731]" />
                             </div>
                          </div>
                       </div>
                       <div className="p-6 border-4 border-[#061731] bg-[#f8fafc]">
                          <h3 className="font-dmSerif text-xl text-[#061731] mb-4 text-center">Data Disclosure</h3>
                          <p className="text-xs mb-4">Under certain circumstances, We may be required to disclose Your Personal Data by law (court orders, Business Transactions, or Law Enforcement requests).</p>
                          <div className="flex justify-center">
                             <div className="w-12 h-12 bg-[#061731] border-2 border-[#061731] flex items-center justify-center">
                                <Lock size={24} className="text-[#ffffff]" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
               </section>

               <section>
                 <h2 className="text-3xl font-dmSerif text-[#061731] mb-6 border-b-4 border-[#ffcd00] inline-block pb-1">Children's Privacy & Third Parties</h2>
                 <div className="space-y-6 text-[#061731]/90 font-medium leading-relaxed">
                    <p>Our Service does not address anyone under the age of 16. We do not knowingly collect information from anyone under 16. If You are a parent and aware that Your child has provided Us with Data, please contact Us.</p>
                    <div className="p-6 border-2 border-[#061731] bg-[#f8fafc] flex items-center gap-6">
                       <ExternalLink size={32} className="text-[#061731] shrink-0" />
                       <p className="text-sm italic">Our Service may contain links to other websites. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                    </div>
                 </div>
               </section>

               <section>
                 <h2 className="text-3xl font-dmSerif text-[#061731] mb-6 border-b-4 border-[#ffcd00] inline-block pb-1">Changes to this Policy</h2>
                 <p className="text-[#061731]/90 font-medium leading-relaxed mb-4">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top.</p>
               </section>

               <section>
                 <div className="bg-[#ffcd00] p-8 border-4 border-[#061731] text-[#061731] relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(6,23,49,1)]">
                    <Mail className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 rotate-12" />
                    <h2 className="text-3xl font-dmSerif mb-6">Contact Us</h2>
                    <p className="text-lg font-bold mb-6">If you have any questions about this Privacy Policy, you can contact us:</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                       <a 
                         href="mailto:support@elyntistec.com"
                         className="flex items-center gap-3 bg-[#061731] text-[#ffffff] px-6 py-3 border-2 border-[#061731] font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:shadow-none transition-all"
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

export default PrivacyPolicy;
