import React, { useState } from "react";
import { processStepsData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Milestone, Calendar, ArrowDown } from "lucide-react";

export default function ProcessTimeline() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const currentStep = processStepsData[activePhaseIndex];

  return (
    <div className="w-full bg-[#050816] py-4" id="process-timeline-widget">
      
      {/* Step Buttons (Interlocking Sequence Flow) */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8 bg-[#090f2b]/40 p-2 rounded-2xl border border-white/5">
        {processStepsData.map((step, idx) => {
          const isActive = idx === activePhaseIndex;
          const isCompleted = idx < activePhaseIndex;
          
          return (
            <button
              key={step.phase}
              onClick={() => setActivePhaseIndex(idx)}
              className={`relative py-3.5 px-3 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                isActive 
                  ? "bg-gradient-to-b from-primary-brand/20 to-secondary-brand/10 border border-secondary-brand/40 shadow-lg" 
                  : "bg-transparent border border-transparent hover:bg-white/5"
              }`}
            >
              <span className={`text-[10px] font-mono font-bold tracking-widest ${
                isActive ? "text-secondary-brand" : "text-gray-500"
              }`}>
                PHASE {step.phase}
              </span>
              <span className={`text-xs font-semibold mt-1 font-display tracking-tight truncate max-w-full ${
                isActive ? "text-white" : "text-gray-400"
              }`}>
                {step.title}
              </span>

              {/* Little completed check circle indicator */}
              <div className="absolute top-2 right-2">
                {isCompleted && (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 opacity-60" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Focus Detail Display Card with animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhaseIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="glass-panel rounded-2xl p-6 md:p-10 border border-white/5 bg-[#0a1028]/50 relative overflow-hidden"
        >
          {/* Faint phase indicator background */}
          <div className="absolute right-0 bottom-0 text-[180px] font-bold font-mono text-white/2 select-none pointer-events-none translate-y-12 translate-x-4">
            {currentStep.phase}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left side summary */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-secondary-brand/10 border border-secondary-brand/20 text-xs font-mono text-secondary-brand">
                  SYSTEM ENGINEERING PIPELINE
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-primary-brand" />
                  <span>{currentStep.duration}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
                {currentStep.title}: <span className="text-gray-400">{currentStep.subtitle}</span>
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                {currentStep.description}
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-gray-400">Continuous Syncs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span className="text-xs font-mono text-gray-400">Github Transparencies</span>
                </div>
              </div>
            </div>

            {/* Right side deliverables checklist */}
            <div className="lg:col-span-5 bg-black/40 p-5 md:p-6 rounded-xl border border-white/5">
              <h4 className="text-xs font-mono font-semibold text-secondary-brand uppercase tracking-wider mb-4 flex items-center gap-2">
                <Milestone className="w-4 h-4 text-primary-brand" />
                <span>Phase Deliverables Handover</span>
              </h4>

              <div className="space-y-3">
                {currentStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white/2 p-2.5 rounded-lg border border-white/5">
                    <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {item}
                      </p>
                      <p className="text-[10px] text-gray-500 font-mono">
                        VERIFIED SPEC SIGN-OFF
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Down arrow indicator leading to the next step */}
      <div className="flex justify-center mt-6">
        <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono text-gray-500">PIPELINE CONTINUOUS FLOW</span>
          <ArrowDown className="w-4 h-4 text-secondary-brand animate-bounce" />
        </div>
      </div>

    </div>
  );
}
