import React, { useEffect, useState, useRef } from 'react';
import { 
  Stethoscope, Palette, Type, BookOpen, FileCheck, 
  Search, Zap, Layers, RefreshCcw, CheckCircle2,
  ArrowRight, ClipboardList, Clock, Calendar, ChevronRight, Sparkles
} from 'lucide-react';

/* ───────────────────────────────────────────────
   ScrollReveal – fade-in + slide-up on scroll
   (ported from OMara project)
   ─────────────────────────────────────────────── */
const ScrollReveal = ({ children, className = '', delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ───────────────────────────────────────────────
   Section wrapper – consistent spacing
   (ported from OMara project)
   ─────────────────────────────────────────────── */
const Section = ({ id, className = '', children }) => (
  <section
    id={id}
    className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 ${className}`}
  >
    {children}
  </section>
);

/* ═══════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════ */
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
      desc: 'In this phase you complete a full brand questionnaire. This is the most important step, where you'll share all the details about Anatomia and your preferences.',
      status: "Discovery"
    },
    { 
      phase: "02",
      title: 'Creative Kickoff', 
      icon: Search,
      tag: "ALIGNMENT",
      desc: 'Once I review your answers, we'll align on the exact visual direction, vibe, and references to ensure we are on the same page.',
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
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">

      {/* ── Floating gradient blobs (from OMara) ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/60 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/60 blur-[150px] rounded-full mix-blend-multiply opacity-50" />
      </div>

      {/* ── Navigation (glassmorphic – OMara style) ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 md:bg-white/70 backdrop-blur-md md:backdrop-blur-xl border-b border-blue-900/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-semibold tracking-widest text-gray-800">
            KOLLE<span className="text-blue-600">STUDIO</span>
          </span>
          <button className="group relative inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:-translate-y-1 transition-all duration-300 shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Accept Proposal</span>
          </button>
        </div>
      </nav>

      {/* ── Hero (OMara layout: centered, gradient text, pill badge) ── */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center min-h-[90vh] relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-900/10 mb-8 shadow-sm">
            <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">Visual Identity Proposal</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[1.05] mb-8 text-gray-900">
            Anatomia.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
              Specialty Branding.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Building a cohesive, professional visual identity that resonates with <strong className="text-gray-900 font-semibold">medical specialists</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href="#designer"
            className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              View the Proposal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </ScrollReveal>
      </section>

      {/* ── Designer section (OMara rounded container + glassmorphic bg) ── */}
      <div
        id="designer"
        className="relative z-10 bg-white md:bg-white/80 md:backdrop-blur-3xl border-t border-blue-900/5 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] rounded-t-[3rem] md:rounded-t-[4rem]"
      >
        <Section>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="order-2 md:order-1">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-gray-900">Meet your designer.</h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="space-y-6 text-lg text-gray-500 font-light leading-relaxed">
                  <p><strong className="text-black font-bold">Hi! I'm Nicole.</strong> The chaotic mind behind Kolle Studio. Coming from marketing, I fell in love with design while building my own brand.</p>
                  <p>I quickly realized my passion wasn't having a brand of my own, it was <span className="text-black font-medium underline decoration-blue-500 underline-offset-4">bringing them to life</span>.</p>
                  <p className="text-blue-600 font-medium pt-4">I'm incredibly excited to work with you!</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Image (grayscale hover from OMara) */}
            <ScrollReveal className="order-1 md:order-2" delay={200}>
              <div className="aspect-[4/5] md:aspect-square bg-blue-50 rounded-[2.5rem] p-2 relative group shadow-xl max-w-md mx-auto border border-blue-100 overflow-hidden md:overflow-visible">
                <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-indigo-500/20 blur-xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="https://uc7c4bdabb34e770343088a35a59.dl.dropboxusercontent.com/cd/0/inline/C_E_6qU7FnMiUFCWKAtw1TieVZMj4g7OVPHTdQ5CAWn_7Y7gu3rr52Zt3QO3hKQJJYf1leH0lgfF9qoAekbN6_PHggpS9P_24wvWBmpnl7A4AvSchInw7KWpesvXUZ5cFlN6I0leoDdq-buS-bDz7_Dl/file"
                  alt="Nicole"
                  className="w-full h-full object-cover rounded-[2rem] filter grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10 border border-white"
                />
              </div>
            </ScrollReveal>
          </div>
        </Section>
      </div>

      {/* ── Brand Foundation Pack (OMara card hover style) ── */}
      <div className="relative bg-blue-50/20">
        <Section>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">The Brand Foundation Pack.</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">Essential tools for a premium brand launch.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Logo Suite */}
            <ScrollReveal delay={100} className="bg-white p-10 rounded-[2rem] border border-blue-900/5 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Layers className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Logo Suite</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Refining the primary logo and creating versatile secondary marks for tags and pins.</p>
              <div className="flex gap-2 mt-10">
                {['AI', 'SVG', 'PNG'].map(f => (
                  <span key={f} className="bg-blue-50 px-3 py-1.5 rounded-lg text-[10px] font-black text-blue-400 tracking-tighter">{f}</span>
                ))}
              </div>
            </ScrollReveal>

            {/* Color Palette */}
            <ScrollReveal delay={200} className="bg-white p-10 rounded-[2rem] border border-blue-900/5 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Palette className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Color Palette</h3>
              <p className="text-gray-500 leading-relaxed text-sm">A unified scheme chosen to balance medical trustworthiness with clean aesthetics.</p>
              <div className="flex gap-2 mt-10">
                {['HEX', 'RGB', 'CMYK'].map(f => (
                  <span key={f} className="bg-blue-50 px-3 py-1.5 rounded-lg text-[10px] font-black text-blue-400 tracking-tighter">{f}</span>
                ))}
              </div>
            </ScrollReveal>

            {/* Typography */}
            <ScrollReveal delay={300} className="bg-white p-10 rounded-[2rem] border border-blue-900/5 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Type className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Typography</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Strategic primary and secondary fonts that perfectly complement your brand aesthetic.</p>
              <div className="flex gap-2 mt-10">
                {['OTF', 'TTF', 'WEB'].map(f => (
                  <span key={f} className="bg-blue-50 px-3 py-1.5 rounded-lg text-[10px] font-black text-blue-400 tracking-tighter">{f}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom dark banner */}
          <ScrollReveal delay={400}>
            <div className="bg-black text-white p-10 sm:p-12 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8 border border-white/5">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Brand Guidelines</h3>
                  <p className="text-gray-500 text-sm">Usage document for logos, colors, and fonts.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">High Quality Files</h3>
                  <p className="text-gray-500 text-sm">Scalable production-ready vector assets.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Section>
      </div>

      {/* ── The Journey (OMara layout with scroll reveals) ── */}
      <div className="relative bg-white">
        <Section>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8 border-b border-gray-100 pb-16">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-black">The Journey.</h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed">An asynchronous and structured workflow, focused on visual detail and strategic clarity.</p>
              </div>
              <div className="flex items-center gap-4 bg-blue-50 px-8 py-5 rounded-[2rem] shadow-sm border border-blue-100">
                <Clock className="w-7 h-7 text-blue-600 shrink-0" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Estimated Time</div>
                  <div className="text-2xl font-bold whitespace-nowrap">3-4 Weeks</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="relative space-y-6">
            {workflowSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="group relative bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row gap-10">
                  <div className="flex flex-row md:flex-col items-center md:items-start gap-4 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-sm">
                      {React.createElement(step.icon, { className: "w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" })}
                    </div>
                    <div className="text-4xl md:text-6xl font-black text-gray-50 group-hover:text-blue-50 transition-colors md:mt-4 leading-none">{step.phase}</div>
                  </div>
                  <div className="flex-grow space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-widest uppercase">{step.tag}</span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-3 py-1 border border-gray-100 rounded-full">{step.status}</span>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">{step.title}</h3>
                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                  <div className="hidden lg:flex items-center text-gray-100 group-hover:text-blue-200 transition-colors">
                    <ChevronRight className="w-10 h-10" strokeWidth={3} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </div>

      {/* ── Investment (dark section with OMara styling) ── */}
      <div className="relative bg-black text-white overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-800/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-[-10%] w-96 h-96 bg-indigo-800/20 blur-[120px] rounded-full" />

        <Section>
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">Total Investment</span>
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter mb-16">450€</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            <ScrollReveal delay={100} className="bg-white/5 p-10 rounded-[2rem] border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors" /> 50% Deposit
              </h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm">To secure your spot in the calendar and officially begin the Brand Discovery phase on May 18th.</p>
            </ScrollReveal>

            <ScrollReveal delay={200} className="bg-white/5 p-10 rounded-[2rem] border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors" /> 50% Final
              </h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm">Payable upon delivery of all final production-ready assets and the brand guidelines document.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 rounded-full border border-white/10 text-gray-400">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>Next Availability: <strong className="text-white ml-1">May 18th</strong></span>
              </div>
            </div>
          </ScrollReveal>
        </Section>
      </div>

      {/* ── CTA (OMara full-height centered style) ── */}
      <div className="relative bg-white overflow-hidden">
        {/* Subtle background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 blur-[150px] rounded-full opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 blur-[120px] rounded-full opacity-60" />

        <section className="py-32 md:py-48 px-6 flex flex-col items-center text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter mb-10 leading-[1.05] text-black max-w-5xl">
              Let's build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">Anatomia.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
              Give me the green light, and I will send over the invoice and brand questionnaire to officially kick off the creative process on <strong className="text-black font-semibold">May 18th</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col items-center gap-10">
              <button className="group relative bg-black text-white rounded-full px-12 py-6 text-2xl font-bold transition-all hover:-translate-y-1 hover:shadow-2xl active:scale-95 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3 text-white">
                  Approve Proposal <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <div className="mt-12 space-y-2 text-center">
                <p className="text-gray-400 font-medium tracking-widest uppercase text-[10px]">Nicole | Kolle Studio</p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 bg-white border-t border-gray-50 text-center relative z-10">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 Kolle Studio x Anatomia</p>
      </footer>
    </div>
  );
}
