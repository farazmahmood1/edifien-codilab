import React, { useState } from "react";
import { Cpu, Calendar, DollarSign, ArrowRight, Lightbulb, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ScopeOptions {
  vector: "ai" | "saas" | "enterprise" | "apps";
  stage: "idea" | "prototype" | "legacy-rebuild";
  complexity: "standard" | "high-scale" | "multi-agent-system";
}

export default function RoiCalculatorCallBook() {
  const [scope, setScope] = useState<ScopeOptions>({
    vector: "ai",
    stage: "idea",
    complexity: "high-scale"
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    objective: "",
    preferredDate: "2026-06-25",
    preferredTime: "14:00"
  });

  const [bookingStatus, setBookingStatus] = useState<"idle" | "calibrating" | "success">("idle");
  const [diagnosticsPayload, setDiagnosticsPayload] = useState<any>(null);

  // Dynamic system metrics calculation based on clients inputs
  const calculateMetrics = () => {
    let baseTimelineWeeks = 8;
    let priceEstimate = "$15k - $25k";
    let efficiencyMultiplyGain = 4500; // potential operational savings / month

    // Vector Multipliers
    if (scope.vector === "ai") {
      baseTimelineWeeks = 8;
      efficiencyMultiplyGain = 8500;
      priceEstimate = "$20k - $35k";
    } else if (scope.vector === "saas") {
      baseTimelineWeeks = 10;
      efficiencyMultiplyGain = 6000;
      priceEstimate = "$25k - $45k";
    } else if (scope.vector === "enterprise") {
      baseTimelineWeeks = 12;
      efficiencyMultiplyGain = 12000;
      priceEstimate = "$40k - $75k";
    } else {
      baseTimelineWeeks = 6;
      efficiencyMultiplyGain = 4000;
      priceEstimate = "$12k - $18k";
    }

    // Complexity Adjusters
    if (scope.complexity === "standard") {
      baseTimelineWeeks = Math.max(4, baseTimelineWeeks - 2);
      efficiencyMultiplyGain = Math.round(efficiencyMultiplyGain * 0.75);
    } else if (scope.complexity === "multi-agent-system") {
      baseTimelineWeeks = baseTimelineWeeks + 3;
      efficiencyMultiplyGain = Math.round(efficiencyMultiplyGain * 1.6);
      priceEstimate = priceEstimate.replace(/(\d+)k/g, (m, val) => `${parseInt(val) + 10}k`);
    }

    // Stage Adjusters
    if (scope.stage === "prototype") {
      baseTimelineWeeks = Math.max(4, baseTimelineWeeks - 1);
    } else if (scope.stage === "legacy-rebuild") {
      baseTimelineWeeks = baseTimelineWeeks + 2;
      efficiencyMultiplyGain = Math.round(efficiencyMultiplyGain * 1.25);
    }

    return {
      weeks: baseTimelineWeeks,
      savings: efficiencyMultiplyGain.toLocaleString(),
      range: priceEstimate,
      multiplier: Math.round((efficiencyMultiplyGain * 12) / 250) + "%" // mock annual percentage rate returns
    };
  };

  const currentMetrics = calculateMetrics();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) {
      alert("Please provide at least a name and contact email to generate strategy.");
      return;
    }

    setBookingStatus("calibrating");

    // Simulate real enterprise computational calculation
    setTimeout(() => {
      setDiagnosticsPayload({
        ...contactForm,
        timeline: currentMetrics.weeks,
        savings: currentMetrics.savings,
        vectorText: scope.vector === "ai" ? "AI Neural Agent" : scope.vector === "saas" ? "SaaS Engine" : scope.vector === "enterprise" ? "Enterprise Database" : "Web Mobile Stack",
        complexityText: scope.complexity === "standard" ? "Agile Blueprint" : scope.complexity === "high-scale" ? "Autonomous Cloud Scale" : "Distributed Intelligence"
      });
      setBookingStatus("success");
    }, 2500);
  };

  return (
    <div className="w-full font-sans text-white text-left" id="roi-diagnostic-call-booker">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Parameters Customizer & Dynamic Metrics */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a1028]/60 space-y-6">
            <h3 className="text-lg md:text-xl font-bold font-display tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-4">
              <Cpu className="text-secondary-brand w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>1. Formulate Product Diagnostics</span>
            </h3>

            {/* Vector selection */}
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                PROJECT ARCHITECTURE VECTOR:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { id: "ai", label: "AI & Agents" },
                  { id: "saas", label: "SaaS Product" },
                  { id: "enterprise", label: "Enterprise Engine" },
                  { id: "apps", label: "Mobile / Web" }
                ].map((vec) => (
                  <button
                    key={vec.id}
                    onClick={() => setScope({ ...scope, vector: vec.id as any })}
                    className={`py-3 px-2 rounded-xl text-xs font-semibold cursor-pointer border transition-all truncate text-center ${
                      scope.vector === vec.id
                        ? "bg-gradient-to-tr from-primary-brand/35 to-secondary-brand/10 border-secondary-brand text-white shadow-md shadow-primary-brand/10"
                        : "bg-black/30 border-white/5 text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {vec.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage selection */}
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                CURRENT DEVELOPMENT VECTOR PHASING:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[
                  { id: "idea", label: "Draft Concept / Spec" },
                  { id: "prototype", label: "Active Prototype / MVP" },
                  { id: "legacy-rebuild", label: "Legacy Core Overhaul" }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope({ ...scope, stage: s.id as any })}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold cursor-pointer border transition-all text-center ${
                      scope.stage === s.id
                        ? "bg-gradient-to-tr from-primary-brand/35 to-secondary-brand/10 border-secondary-brand text-white"
                        : "bg-black/30 border-white/5 text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity tier selection */}
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                ARCHITECTURE SCALE COMPLEXITY:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[
                  { id: "standard", label: "Standard Agile Spec" },
                  { id: "high-scale", label: "High-Scale Autoscale" },
                  { id: "multi-agent-system", label: "Autonomous AI System" }
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setScope({ ...scope, complexity: c.id as any })}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold cursor-pointer border transition-all text-center ${
                      scope.complexity === c.id
                        ? "bg-gradient-to-tr from-primary-brand/35 to-secondary-brand/10 border-secondary-brand text-white"
                        : "bg-black/30 border-white/5 text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric calculations readout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-panel p-5 rounded-2xl bg-gradient-to-br from-[#0c132f] to-[#060a16] border border-white/5 shadow-md flex items-center gap-4">
              <Clock className="w-8 h-8 text-secondary-brand shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  ESTIMATED TIMELINE
                </p>
                <p className="text-2xl font-bold font-display text-white">
                  ~{currentMetrics.weeks} Weeks
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl bg-gradient-to-br from-[#0c132f] to-[#060a16] border border-white/5 shadow-md flex items-center gap-4">
              <DollarSign className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  MAPPED OPERATIONAL ROI
                </p>
                <p className="text-2xl font-bold font-display text-glow-cyan text-emerald-400">
                  +${currentMetrics.savings}/Mo
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl bg-gradient-to-br from-[#0c132f] to-[#060a16] border border-white/5 shadow-md flex items-center gap-4">
              <TrendingUp className="w-8 h-8 text-accent-brand shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  VALUE CLASS RANGE
                </p>
                <p className="text-2xl font-bold font-display text-[#ce9dfc]">
                  {currentMetrics.range}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Smart simulated Consultation Form / Status Displays */}
        <div className="lg:col-span-5 h-full">
          <AnimatePresence mode="wait">
            
            {/* Idle Formulation form */}
            {bookingStatus === "idle" && (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleBookSession}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a1028]/60 space-y-4 shadow-xl"
              >
                <h3 className="text-lg font-bold font-display tracking-tight text-white flex items-center gap-2 border-b border-white/5 pb-4">
                  <Calendar className="text-primary-brand w-5 h-5" />
                  <span>2. Schedule Architecture Session</span>
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">YOUR EXECUTIVE NAME</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g., Sarah Jenkins"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">ENTERPRISE INBOX EMAIL</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="e.g., s.jenkins@company.com"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">COMPANY NAME / STARTUP</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="e.g., QuantumSaaS Inc."
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" 
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">INTELLIGENT BUSINESS OBJECTIVE</label>
                    <textarea 
                      name="objective"
                      rows={2}
                      placeholder="e.g., We need to automate vendor ticketing and CRM synchronization using RAG."
                      value={contactForm.objective}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 resize-none" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">DATE PREFERENCE</label>
                      <input 
                        type="date" 
                        name="preferredDate"
                        value={contactForm.preferredDate}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">TIME (GMT-7)</label>
                      <input 
                        type="time" 
                        name="preferredTime"
                        value={contactForm.preferredTime}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none" 
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-primary-brand to-accent-brand text-xs font-semibold text-white cursor-pointer select-none flex items-center justify-center gap-2 group hover:shadow-lg shadow-accent-brand/20 hover:scale-[1.01] transition-all"
                >
                  <span>Build AI Strategy Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            )}

            {/* Calculating Blueprint Loader */}
            {bookingStatus === "calibrating" && (
              <motion.div
                key="booking-calculating"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="glass-panel p-8 rounded-2xl border border-secondary-brand/20 bg-[#0a1028]/80 flex flex-col items-center justify-center text-center py-20 min-h-[460px]"
              >
                <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-secondary-brand animate-spin mb-6" />
                
                <p className="text-sm font-mono text-secondary-brand uppercase tracking-widest font-semibold animate-pulse">
                  CALIBRATING ENTERPRISE FORMULA
                </p>
                <h4 className="text-xl font-bold font-display text-white mt-3">
                  Generating Operational Blueprint...
                </h4>
                <p className="text-xs text-gray-400 mt-2 max-w-xs">
                  Reviewing optimal vectors, pipeline steps, and timeline indices targeting sub-100ms load specs.
                </p>

                <div className="w-48 bg-white/5 h-1 rounded-full overflow-hidden mt-6">
                  <div className="bg-secondary-brand w-1/3 h-full rounded-full animate-shimmer" style={{ width: '40%' }} />
                </div>
              </motion.div>
            )}

            {/* Successfully Booked blueprint report */}
            {bookingStatus === "success" && diagnosticsPayload && (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-emerald-500/20 bg-[#071d17]/40 relative overflow-hidden space-y-6 shadow-2xl min-h-[460px] flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/5 px-2 py-0.5 rounded">
                        RESERVED NODE CONFIRMED
                      </span>
                      <h4 className="text-base font-bold font-display text-white mt-0.5">
                        Blueprint Sync Initialized!
                      </h4>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-secondary-brand pl-3 italic text-xs text-gray-400 py-1">
                    “Targeting ${diagnosticsPayload.savings}/Mo gains over a strict {diagnosticsPayload.timeline}-week build sequence.”
                  </blockquote>

                  {/* Summary voucher details list */}
                  <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-3.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-mono text-[10px]">REPRESENTATIVE:</span>
                      <span className="text-white font-semibold">{diagnosticsPayload.name}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-mono text-[10px]">COMPANY:</span>
                      <span className="text-white font-semibold">{diagnosticsPayload.company || "N/A"}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-mono text-[10px]">DESIGNATION:</span>
                      <span className="text-secondary-brand font-mono font-semibold">{diagnosticsPayload.vectorText}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-mono text-[10px]">ARCHITECTURE:</span>
                      <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-glow-indigo text-indigo-300 border border-white/5">
                        {diagnosticsPayload.complexityText}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-mono text-[10px]">DATE / TIME (PREFER):</span>
                      <span className="text-white font-mono">{diagnosticsPayload.preferredDate} ({diagnosticsPayload.preferredTime})</span>
                    </div>
                  </div>

                  <p className="text-[10.5px] text-gray-400 leading-relaxed text-center">
                    A secure invite and diagnostic brief has been synced with your email <strong className="text-glow-cyan text-secondary-brand">{diagnosticsPayload.email}</strong>. Let's engineering the next generation.
                  </p>
                </div>

                <button
                  onClick={() => setBookingStatus("idle")}
                  className="w-full py-2.5 rounded-xl border border-semibold border-white/5 bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300 transition-colors cursor-pointer text-center"
                >
                  Configure Another Architecture Spec
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
