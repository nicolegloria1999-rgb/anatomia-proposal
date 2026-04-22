import React, { useEffect, useState } from 'react';
import { 
  Stethoscope, Palette, Type, BookOpen, FileCheck, 
  Search, Zap, Layers, RefreshCcw, CheckCircle2,
  ArrowRight, ClipboardList, Clock, Calendar, ChevronRight
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workflowSteps = [
    { 
      phase: "01",
      title: 'Brand Discovery', 
      icon: ClipboardList,
      tag: "THE FOUNDATION",
      desc: 'In this phase you complete a full brand questionnaire. This is the most important step, where you’ll share all the details about Anatomia and your preferences.',
      status: "Discovery"
    },
    { 
      phase: "02",
      title: 'Creative Kickoff', 
      icon: Search,
      tag: "ALIGNMENT",
      desc: 'Once I review your answers, we’ll align on the exact visual direction, vibe, and references to ensure we are on the same page.',
      status: "Concept"
    },
    { 
      phase: "03",
      title: 'Identity Draft', 
      icon: Zap,
      tag: "CREATION",
      desc: 'I will design and present the logo suite, color palette, and typography as a unified concept, showing you how they work together for your brand.',
      status: "Design"
    },
    { 
      phase: "04",
      title: 'Refinement', 
      icon: RefreshCcw,
      tag: "ITERATION",
      desc: 'You tell me what you love and what you want to tweak. I will refine the designs based on your feedback (up to 2 rounds of revisions).',
      status: "Revision"
    },
    { 
      phase: "05",
      title: 'Final Delivery', 
      icon: CheckCircle2,
      tag: "LAUNCH READY",
      desc: 'Once approved, I organize and send you the brand guidelines and all the final files. Everything you need to start rocking your pieces.',
      status: "Handover"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-left">
          <div className="font-semibold tracking-tighter text-xl">Kolle<span className="text-blue-600">Studio</span></div>
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-sm">Accept Proposal</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-48 pb-24 px-6 max-w-6xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-50 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-50 rounded-full blur-[120px]"></div>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
          <Stethoscope className="w-3 h-3" /> Visual Identity Proposal
        </div>
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 text-balance leading-[0.9]">Anatomia.<br/><span className="text-gray-200 italic font-medium">Specialty Branding.</span></h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light text-balance leading-relaxed text-center">Building a cohesive, professional visual identity that resonates with medical specialists.</p>
      </section>

      {/* Designer */}
      <section className="py-32 bg-[#fbfbfd] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center text-left">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Meet your designer.</h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              <p><strong className="text-black font-semibold">Hi! I’m Nicole.</strong> The chaotic mind behind Kolle Studio. Coming from marketing, I fell in love with design while building my own brand.</p>
              <p>I quickly realized my passion wasn't having a brand of my own, it was <span className="text-black font-medium underline decoration-blue-500 underline-offset-4 text-left">bringing them to life</span>.</p>
              <p className="text-blue-600 font-medium">I’m incredibly excited to work with you!</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-transparent opacity-30 rounded-full blur-2xl group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white rounded-[3rem] aspect-square shadow-sm border border-gray-100 overflow-hidden">
              <img src="https://uc7c4bdabb34e770343088a35a59.dl.dropboxusercontent.com/cd/0/inline/C_E_6qU7FnMiUFCWKAtw1TieVZMj4g7OVPHTdQ5CAWn_7Y7gu3rr52Zt3QO3hKQJJYf1leH0lgfF9qoAekbN6_PHggpS9P_24wvWBmpnl7A4AvSchInw7KWpesvXUZ5cFlN6I0leoDdq-buS-bDz7_Dl/file" alt="Nicole" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Kit */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">The Brand Foundation Pack.</h2>
            <p className="text-xl text-gray-400 font-light">Essential tools for a premium brand launch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-gray-100 text-left">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors shadow-sm"><Layers className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Logo Suite</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Refining the primary logo and creating versatile secondary marks for tags and pins.</p>
              </div>
              <div className="flex gap-2 mt-10">{['AI', 'SVG', 'PNG'].map(f => (<span key={f} className="bg-white px-3 py-1.5 rounded-lg text-[10px] font-black text-gray-400 tracking-tighter shadow-sm">{f}</span>))}</div>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-gray-100 text-left">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors shadow-sm"><Palette className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Color Palette</h3>
                <p className="text-gray-500 leading-relaxed text-sm">A unified scheme chosen to balance medical trustworthiness with clean aesthetics.</p>
              </div>
              <div className="flex gap-2 mt-10">{['HEX', 'RGB', 'CMYK'].map(f => (<span key={f} className="bg-white px-3 py-1.5 rounded-lg text-[10px] font-black text-gray-400 tracking-tighter shadow-sm">{f}</span>))}</div>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-gray-100 text-left">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors shadow-sm"><Type className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Typography</h3>
                <p className="text-gray-500 leading-relaxed text-sm">Strategic primary and secondary fonts that perfectly complement your brand aesthetic.</p>
              </div>
              <div className="flex gap-2 mt-10">{['OTF', 'TTF', 'WEB'].map(f => (<span key={f} className="bg-white px-3 py-1.5 rounded-lg text-[10px] font-black text-gray-400 tracking-tighter shadow-sm">{f}</span>))}</div>
            </div>
          </div>
          <div className="bg-black text-white p-12 rounded-[3rem] grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <div className="flex items-center gap-6"><div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center"><BookOpen className="w-8 h-8 text-white" /></div><div><h3 className="text-2xl font-bold tracking-tight">Brand Guidelines</h3><p className="text-gray-500 text-sm">Usage document for logos, colors, and fonts.</p></div></div>
            <div className="flex items-center gap-6"><div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center"><FileCheck className="w-8 h-8 text-white" /></div><div><h3 className="text-2xl font-bold tracking-tight">High Quality Files</h3><p className="text-gray-500 text-sm">Scalable production-ready vector assets.</p></div></div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-40 bg-[#fbfbfd] px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8 border-b border-gray-100 pb-16 text-left">
            <div className="max-w-2xl"><h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black">The Journey.</h2><p className="text-xl text-gray-500 font-light leading-relaxed text-left">An asynchronous and structured workflow, focused on visual detail and strategic clarity.</p></div>
            <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-3xl shadow-sm border border-gray-100"><Clock className="w-7 h-7 text-blue-600" /><div><div className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-left">Estimated Time</div><div className="text-2xl font-bold text-left whitespace-nowrap">3-4 Weeks</div></div></div>
          </div>
          <div className="relative space-y-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="group relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-10 text-left">
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-inner">
                    {React.createElement(step.icon, { className: "w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-500" })}
                  </div>
                  <div className="text-4xl md:text-6xl font-black text-gray-50 group-hover:text-blue-50 transition-colors md:mt-4 leading-none">{step.phase}</div>
                </div>
                <div className="flex-grow space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-widest uppercase">{step.tag}</span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-3 py-1 border border-gray-100 rounded-full">{step.status}</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-left">{step.title}</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl text-left">{step.desc}</p>
                </div>
                <div className="hidden lg:flex items-center text-gray-100 group-hover:text-blue-100 transition-colors"><ChevronRight className="w-10 h-10" strokeWidth={3} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-blue-500 font-bold tracking-widest uppercase text-[10px] mb-8 text-center">Total Investment</div>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-16 text-center">450€</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left mb-20">
            <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all text-left">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-left"><div className="w-2 h-2 rounded-full bg-blue-600"></div> 50% Deposit</h4>
              <p className="text-gray-500 font-light leading-relaxed text-left text-sm">To secure your spot in the calendar and officially begin the Brand Discovery phase on May 18th.</p>
            </div>
            <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all text-left">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-left"><div className="w-2 h-2 rounded-full bg-blue-600"></div> 50% Final</h4>
              <p className="text-gray-500 font-light leading-relaxed text-left text-sm">Payable upon delivery of all final production-ready assets and the brand guidelines document.</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 rounded-full border border-white/10 text-gray-400">
            <Calendar className="w-5 h-5 text-blue-500" />
            <span>Next Availability: <strong className="text-white ml-1">May 18th</strong></span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9] text-center text-black">Let's build Anatomia.</h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16 max-w-2xl mx-auto text-balance text-center">
            Give me the green light, and I will send over the invoice and brand questionnaire to officially kick off the creative process on May 18th.
          </p>
          <div className="flex flex-col items-center gap-10">
            <button className="group relative bg-black text-white rounded-full px-12 py-6 text-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="flex items-center gap-3 text-white">Approve Proposal <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /></span>
            </button>
            <div className="mt-20 space-y-2 text-center"><p className="text-gray-400 font-medium tracking-widest uppercase text-[10px] text-center">Nicole | Kolle Studio</p></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-50 text-center">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] text-center">© 2024 Kolle Studio x Anatomia</p>
      </footer>
    </div>
  );
}
