import React, { useState } from "react";
import { CaseStudy } from "../types";
import { ArrowUpRight, ShieldCheck, Database, Key, HelpCircle, Activity } from "lucide-react";
import { motion } from "motion/react";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const [activeTab, setActiveTab] = useState<"problems" | "solutions" | "architecture">("solutions");

  return (
    <div 
      className="glass-panel rounded-2xl p-6 md:p-10 border border-white/5 bg-[#0a1028]/40 hover:border-indigo-500/20 transition-all duration-400"
      id={`case-study-detail-${caseStudy.id}`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between mb-8 pb-6 border-b border-white/5">
        
        {/* Title Stack */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-xs font-mono text-indigo-300 border border-indigo-500/20">
              {caseStudy.industry}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              {caseStudy.clientName}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
            {caseStudy.title}
          </h3>
        </div>

        {/* Live Metrics Grid */}
        <div className="flex gap-4 self-start lg:self-center">
          {caseStudy.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-black/30 px-4 py-3 rounded-xl border border-white/5 flex flex-col justify-center text-center shadow-inner min-w-[90px]"
            >
              <span className="text-xl md:text-2xl font-bold font-display text-glow-cyan text-secondary-brand tracking-tight">
                {metric.value}
              </span>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Interactive Nav columns */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0">
          {(["solutions", "problems", "architecture"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-xl cursor-pointer text-xs font-mono tracking-wider uppercase transition-all shrink-0 text-left ${
                activeTab === tab
                  ? "bg-gradient-to-r from-primary-brand/20 to-accent-brand/10 border border-primary-brand/30 text-white shadow-md font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {tab === "solutions" && "✓ The Solution"}
              {tab === "problems" && "⚠ The Challenge"}
              {tab === "architecture" && "⚙ System Stack"}
            </button>
          ))}
        </div>

        {/* Center Tabbed content blocks */}
        <div className="lg:col-span-9 bg-black/20 p-5 md:p-8 rounded-xl border border-white/5">
          <div className="min-h-[160px]">
            {activeTab === "problems" && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 flex items-center gap-1.5 font-semibold">
                  <HelpCircle className="w-4 h-4" />
                  <span>The Enterprise Bottleneck</span>
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {caseStudy.problem}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-gray-500">
                    DIAGNOSED CORE FAILURE: 420K ESTIMATED ANNUAL OPERATING GAP & SCALE CAP LIMITS
                  </span>
                </div>
              </div>
            )}

            {activeTab === "solutions" && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>System Architecture Transformation</span>
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
                
                <h5 className="text-xs font-mono font-semibold text-gray-400 pt-2">
                  EMPIRICAL METRIC HIGHLIGHTS:
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex gap-2 items-start text-xs text-gray-300">
                      <div className="w-4 h-4 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 text-emerald-400 mt-0.5 text-[10px]">
                        ✓
                      </div>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-secondary-brand flex items-center gap-1.5 font-semibold">
                  <Database className="w-4 h-4" />
                  <span>Configured Technologies</span>
                </h4>
                <p className="text-xs text-gray-400">
                  Secure integration parameters with no legacy technical debt. Built on premium micro-services:
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {caseStudy.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white flex items-center gap-1.5 hover:bg-white/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-4 p-4 rounded bg-white/2 border border-white/5 flex gap-3 items-center">
                  <Activity className="w-5 h-5 text-accent-brand shrink-0 animate-pulse" />
                  <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
                    Automatic CI/CD coverage pipeline synced directly with AWS & GCP nodes, preserving standard HIPAA/SOC2 requirements.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
