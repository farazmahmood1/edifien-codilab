import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ThreeCanvas from "./components/ThreeCanvas";
import ServiceCard from "./components/ServiceCard";
import ProcessTimeline from "./components/ProcessTimeline";
import CaseStudyDetail from "./components/CaseStudyDetail";
import RoiCalculatorCallBook from "./components/RoiCalculatorCallBook";
import TechStackSelector from "./components/TechStackSelector";
import ArchitectureCenterpiece from "./components/ArchitectureCenterpiece";
import { servicesData, caseStudiesData, whyChooseForrof, blogPosts } from "./data";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  Bot, 
  Layers, 
  Code2, 
  PhoneCall, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  BookOpen
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Auto-track the scroll position to highlight the appropriate navigation link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ["hero", "services", "why-choose", "process", "case-studies", "tech-stack", "diagnostic-booker"];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const industries = [
    { label: "SaaS", icon: "⚡" },
    { label: "Healthcare", icon: "🩺" },
    { label: "Fintech", icon: "🏛" },
    { label: "E-Commerce", icon: "🛒" },
    { label: "Logistics", icon: "📦" },
    { label: "Education", icon: "🎓" },
    { label: "Real Estate", icon: "🏢" }
  ];

  const faqs = [
    {
      q: "How does Forrof differ from a standard software agency?",
      a: "Typical agencies build static templates or simple online stores. We are AI-First Product Builders. We architect intelligent systems utilizing stateful neural swarms, customizable retrieval models (RAG), and integrated databases. We function as technical partners, analyzing client ROI and system payloads to build durable assets."
    },
    {
      q: "What is your typical development timeline from concept to launch?",
      a: "Our agile blueprint pipeline typically runs from 6 to 12 weeks. We specialize in launching fully qualified multi-tenant SaaS platforms or production AI automation swarms inside of 8 weeks, backed by clean code handovers."
    },
    {
      q: "Who owns the code and intellectual property (IP)?",
      a: "You do, entirely. All software architectural models, compiled assets, specialized vector index configurations, and database integrations are committed directly to your private company Github repository under complete ownership specs."
    },
    {
      q: "Do you integrate with legacy ERP or CRM services?",
      a: "Yes. Our engineering division creates secure REST, GraphQL, or Model Context Protocol (MCP) wrappers around legacy databases, linking older databases seamlessly to newer LLM nodes."
    }
  ];

  return (
    <div className="relative bg-[#050816] min-h-screen text-white overflow-x-hidden selection:bg-secondary-brand selection:text-[#050816]">
      
      {/* 1. Super Smooth WebGL Floating Canvas Network Backdrop */}
      <ThreeCanvas />

      {/* Background Orbs (Immersive Depth) */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#4F46E5] rounded-full blur-[180px] opacity-20 pointer-events-none -z-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#8B5CF6] rounded-full blur-[180px] opacity-15 pointer-events-none -z-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06B6D4] rounded-full blur-[250px] opacity-10 pointer-events-none -z-20"></div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] -z-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      {/* 2. Sleek Fixed Header Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleSmoothScroll} />

      {/* Hero Container */}
      <main className="relative z-10 pt-20">

        {/* 3. Hero Screen Section */}
        <section 
          id="hero" 
          className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
        >
          {/* Subtle glowing radial background */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-4xl space-y-8 z-10 py-12">
            
            {/* Custom high-end badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono text-indigo-300 tracking-wider shadow-inner hover:bg-indigo-500/15 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary-brand animate-spin" style={{ animationDuration: '3s' }} />
              <span className="font-semibold uppercase text-[10.5px]">AI-First Product & Systems Studio</span>
            </motion.div>

            {/* Massive Display Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.1] max-w-3xl mx-auto"
            >
              Build <span className="bg-gradient-to-r from-secondary-brand via-accent-brand to-[#9f85ff] bg-clip-text text-transparent">AI-Powered Products</span> That Scale
            </motion.h1>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed"
            >
              We help startups and growth-stage companies design, build, and launch AI-powered SaaS products, intelligent business systems, and enterprise software.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={() => handleSmoothScroll("diagnostic-booker")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-brand to-secondary-brand text-sm font-semibold hover:shadow-lg shadow-primary-brand/35 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 relative group overflow-hidden"
              >
                {/* Simulated dynamic hover sheen */}
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleSmoothScroll("case-studies")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Case Studies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-brand text-glow-cyan animate-pulse" />
              </button>
            </motion.div>

            {/* Custom interactive visual centerpiece: AI Architecture Visualization Mock */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center pt-8"
            >
              <ArchitectureCenterpiece />
            </motion.div>

            {/* 4. Industries served rolling list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="pt-12 border-t border-white/5"
            >
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center mb-6">
                Active Industry Integrations
              </p>
              
              <div id="industries-slider" className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {industries.map((ind) => (
                  <div
                    key={ind.label}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1028]/60 border border-white/5 text-[11px] font-semibold text-gray-400 hover:text-white hover:border-secondary-brand/20 transition-all cursor-crosshair shadow-inner"
                  >
                    <span>{ind.icon}</span>
                    <span className="font-mono">{ind.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Core confidence stat grid overlays */}
          <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
            <div className="grid grid-cols-4 gap-4 py-4 rounded-xl bg-black/10 border-t border-white/5">
              {[
                { val: "AI-First", label: "Architectures" },
                { val: "22+", label: "Products Launched" },
                { val: "99.99%", label: "System SLA" },
                { val: "100%", label: "IP Ownership Spec" }
              ].map((st, i) => (
                <div key={i} className="text-center font-sans border-r last:border-r-0 border-white/5">
                  <p className="text-lg font-bold font-display text-white">{st.val}</p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{st.label}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* 5. Services Grid Screen */}
        <section 
          id="services" 
          className="py-24 sm:py-32 border-t border-white/5 relative bg-[#050816]"
        >
          {/* Neon background orbs */}
          <div className="absolute bottom-1/4 right-[5%] w-[24rem] h-[24rem] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header Title Stack */}
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-secondary-brand tracking-widest uppercase">
                // System Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
                AI Product Engineering Services
              </h2>
              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                Rather than building simple websites, we construct intelligent cloud backbones, RAG models, autonomous developer systems, and high-performance user interfaces.
              </p>
            </div>

            {/* Elegant 4 Capability Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
              {servicesData.map((svc) => (
                <ServiceCard key={svc.id} service={svc} colorScheme="Option1" />
              ))}
            </div>

          </div>
        </section>

        {/* 6. Why Forrof (Philosophy Section) */}
        <section 
          id="why-choose" 
          className="py-24 sm:py-32 border-t border-white/5 bg-[#030612]/90 relative"
        >
          {/* Radial grid line background */}
          <div className="absolute inset-0 bg-[#050816]/30 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.06),transparent_70%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold text-indigo-400 tracking-widest uppercase bg-indigo-500/5 px-3 py-1.5 rounded-full border border-indigo-500/10">
                OUR ENGINEERING PILLARS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Designed for Founders and Enterprise Integrators
              </h2>
              <p className="text-[#94a3b8] text-sm">
                We replace simple freelance contracting with structured engineering specifications, ensuring absolute execution standards.
              </p>
            </div>

            {/* Custom 4 column list of pillars */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {whyChooseForrof.map((pil, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0a1028]/20 hover:border-secondary-brand/10 transition-colors space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold text-secondary-brand">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">
                      {pil.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pil.description}
                    </p>
                  </div>

                  {/* Core specifications items checklist */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    {pil.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] font-mono text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-secondary-brand shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. Strategic Pipeline Section (01 Discover -> 06 Scale) */}
        <section 
          id="process" 
          className="py-24 sm:py-32 border-t border-white/5 bg-[#050816]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-accent-brand tracking-widest uppercase">
                // System Operations
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
                The Product Delivery Pipeline
              </h2>
              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                We align development with strict timing commitments. Our 6-step lifecycle ensures that you audit progress, deliverables, and architecture blueprints at every milestone.
              </p>
            </div>

            {/* Render dynamic Process Timeline widget */}
            <ProcessTimeline />

          </div>
        </section>

        {/* 8. Portfolio & Case Studies Section */}
        <section 
          id="case-studies" 
          className="py-24 sm:py-32 border-t border-white/5 bg-[#030612]/95 relative"
        >
          <div className="absolute top-[30%] left-[8%] w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <span className="text-xs font-mono font-bold text-secondary-brand tracking-widest uppercase">
                  // Portfolio Transparencies
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
                  Selected Enterprise Case Studies
                </h2>
                <p className="text-[#94a3b8] text-sm">
                  Review how we constructed client solutions, designed robust databases, and drove concrete cost efficiency.
                </p>
              </div>

              {/* Minimal study switcher tab buttons */}
              <div id="case-studies-quick-switcher" className="flex gap-2 self-start md:self-end overflow-x-auto pb-2 md:pb-0 shrink-0">
                {caseStudiesData.map((cs, idx) => (
                  <button
                    key={cs.id}
                    onClick={() => setActiveCaseStudyIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-lg cursor-pointer text-[11px] font-mono tracking-widest uppercase transition-colors shrink-0 ${
                      activeCaseStudyIndex === idx
                        ? "bg-secondary-brand/10 text-secondary-brand border border-secondary-brand/35"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    CASE_0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Renders of Custom high fidelity detail card */}
            <CaseStudyDetail caseStudy={caseStudiesData[activeCaseStudyIndex]} />

          </div>
        </section>

        {/* 9. Technologies Selector Section */}
        <section 
          id="tech-stack" 
          className="py-24 sm:py-32 border-t border-white/5 bg-[#050816]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold text-indigo-400 tracking-widest uppercase bg-indigo-500/5 px-2.5 py-1 rounded border border-white/5">
                ENGINEERING PREREQUISITES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Our Qualified Technology Stack
              </h2>
              <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl mx-auto">
                No legacy technology, no outdated conventions. We build on hardened backbones configured specifically for model-latency targets, async queues, and automated scaling bounds.
              </p>
            </div>

            {/* Renders Category Tech Selector Grid */}
            <TechStackSelector />

          </div>
        </section>

        {/* 10. Dynamic ROI strategist and booking tool */}
        <section 
          id="diagnostic-booker" 
          className="py-24 sm:py-32 border-t border-white/5 bg-[#030612]/80 relative"
        >
          {/* Subtle star elements or glowing meshes */}
          <div className="absolute right-10 bottom-10 w-[28rem] h-[28rem] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-secondary-brand tracking-widest uppercase bg-emerald-500/5 px-3 py-1.5 rounded-full border border-emerald-500/10 inline-block">
                ★ CO-FOUNDER DIAGNOSTIC TOOL
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
                Construct Your Custom ROI Blueprint
              </h2>
              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                Input your required features to instantly calculate estimated development metrics. Use our Smart Consultation Planner to book your simulated diagnostic briefing with our directors.
              </p>
            </div>

            {/* Interactive scope calculator & scheduler widget */}
            <RoiCalculatorCallBook />

          </div>
        </section>

        {/* 11. FAQ Screen */}
        <section className="py-24 bg-[#050816] border-t border-white/5 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                VERIFIED ARCHITECTURE FAQs
              </span>
              <h2 className="text-3xl font-bold font-display text-white tracking-tight">
                Common Operational Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = activeFaqIndex === i;
                return (
                  <div 
                    key={i}
                    className="glass-panel rounded-xl border border-white/5 bg-[#0a1028]/20 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : i)}
                      className="w-full text-left px-6 py-4.5 font-display font-semibold text-white text-sm md:text-base flex justify-between items-center cursor-pointer select-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-secondary-brand transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-white/2 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 12. Complete Professional Footer */}
        <footer className="border-t border-white/5 bg-[#02050f] py-16 text-[#94a3b8] font-sans relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
              
              {/* Brand Summary */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-brand to-secondary-brand flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold font-display tracking-tight text-white">FORROF</span>
                </div>
                
                <p className="text-xs text-gray-500 leading-relaxed">
                  The AI-First Product & Systems Studio. Helping ambitious startups, SaaS founders, and growth businesses engineer resilient, intelligent software architectures with zero technical debt.
                </p>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/5 text-[10px] font-mono text-emerald-400 border border-emerald-500/10 w-fit">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  <span>NODE SECURITY: ACTIVE SECURE COMS</span>
                </div>
              </div>

              {/* Page Shortcuts */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">STUDIO VECTORS</h4>
                <ul className="space-y-2 text-xs">
                  {["Services", "Philosophy", "Pipeline", "Case Studies", "Tech Stack"].map((item) => (
                    <li key={item}>
                      <button 
                        onClick={() => {
                          const mapping: Record<string, string> = {
                            "Services": "services",
                            "Philosophy": "why-choose",
                            "Pipeline": "process",
                            "Case Studies": "case-studies",
                            "Tech Stack": "tech-stack"
                          };
                          handleSmoothScroll(mapping[item]);
                        }}
                        className="hover:text-white transition-colors cursor-pointer text-gray-500"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">INTELLIGENCE PLATFORMS</h4>
                <ul className="space-y-1.5 text-xs text-gray-500">
                  <li>🤖 Multi-Agent Orchestrations (LangGraph)</li>
                  <li>💬 Gemini 2.5 & Claude 3.5 Sonnet</li>
                  <li>📦 Multi-Tenant PostgreSQL Schema Isolation</li>
                  <li>🔬 Structured Semantic Vector Directories</li>
                  <li>⚡ Serverless Node.js Microservices</li>
                </ul>
              </div>

              {/* External contact info */}
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">ESTABLISH CHANNEL</h4>
                <p className="text-xs text-gray-500">
                  Ready to attract premium valuation and launch in 8 weeks?
                </p>
                
                <button
                  onClick={() => handleSmoothScroll("diagnostic-booker")}
                  className="w-full py-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-secondary-brand animate-pulse" />
                  <span>Call Booker</span>
                </button>
              </div>

            </div>

            {/* Bottom Credits Block */}
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-gray-500 gap-4">
              <div>
                © 2026 FORROF AI Systems Studio. All rights reserved on absolute client source handovers.
              </div>
              <div className="flex gap-4">
                <span>LICENSE: APACHE-2.0 SYSTEM SPECS</span>
                <span>SECURITY: TELEMETRY ENCRYPTED</span>
              </div>
            </div>

          </div>
        </footer>

      </main>

    </div>
  );
}
