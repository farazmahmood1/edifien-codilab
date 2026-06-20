import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, Database, Network, GitPullRequest, ArrowRight, Activity, Terminal } from "lucide-react";

export default function ArchitectureCenterpiece() {
  const [activeStep, setActiveStep] = useState(0);
  const [tokensProcessed, setTokensProcessed] = useState(1382400);
  const [activeLatency, setActiveLatency] = useState(82);

  // Dynamic values simulator to resemble genuine computational telemetry indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
      setTokensProcessed((prev) => prev + Math.floor(Math.random() * 410) + 100);
      setActiveLatency((prev) => {
        const change = Math.floor(Math.random() * 11) - 5;
        const target = prev + change;
        return target < 65 ? 65 : target > 110 ? 110 : target;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="w-full max-w-4xl h-auto md:h-[280px] relative mt-10 text-left" 
      id="immersive-architecture-centerpiece"
    >
      <div className="border border-white/10 rounded-2xl bg-slate-900/40 backdrop-blur-sm overflow-hidden flex flex-col md:flex-row shadow-2xl relative z-10">
        
        {/* Left Sidebar Mock */}
        <div className="w-full md:w-52 border-b md:border-b-0 md:border-r border-white/5 p-5 flex flex-col justify-between gap-4 bg-slate-950/20">
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-mono text-cyan-400 tracking-wider">SYSTEM_ROUTING</span>
            </div>

            <div className="space-y-2">
              <div className="h-2.5 w-3/4 bg-white/10 rounded animate-pulse" />
              <div className="h-2 w-1/2 bg-white/5 rounded" />
              <div className="h-2 w-2/3 bg-white/5 rounded" />
            </div>

            <div className="bg-black/30 p-2.5 rounded-lg border border-white/5 space-y-1">
              <div className="flex justify-between text-[8.5px] font-mono text-gray-500">
                <span>KPI TARGET</span>
                <span className="text-emerald-400">PASSED</span>
              </div>
              <p className="text-[10.5px] font-mono text-white font-semibold flex items-center gap-1">
                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>LATENCY: {activeLatency}ms</span>
              </p>
            </div>
          </div>

          <div className="pt-2 md:mt-auto">
            <div className="p-2 border border-primary-brand/30 rounded bg-primary-brand/10 text-center flex items-center justify-center gap-1.5 cursor-pointer hover:bg-primary-brand/20 transition-colors">
              <Terminal className="w-3.5 h-3.5 text-secondary-brand" />
              <span className="text-[10px] font-mono text-white font-semibold">COMS_TUNNEL_A1</span>
            </div>
          </div>
        </div>

        {/* Center Logic Flow Mock */}
        <div className="flex-1 p-6 flex flex-col justify-between gap-6">
          
          {/* Active Flow Pipeline Display */}
          <div className="flex items-center justify-between gap-2.5 bg-black/10 p-4 rounded-xl border border-white/2">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ rotate: activeStep === 0 ? 360 : 0 }}
                transition={{ duration: 1 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg ${
                  activeStep === 0 
                  ? "bg-[#4F46E5] text-white shadow-[#4F46E5]/20 border border-[#4F46E5]" 
                  : "bg-white/5 border border-white/10 text-slate-500"
                }`}
              >
                ◈
              </motion.div>
              <div className="hidden sm:block">
                <p className="text-[10.5px] font-mono text-slate-400">INGESTION</p>
                <p className="text-xs font-semibold text-white">Client Context</p>
              </div>
            </div>

            <div className={`h-0.5 flex-1 bg-gradient-to-r duration-1000 ${
              activeStep === 0 ? "from-[#4F46E5] to-[#8B5CF6]" : 
              activeStep === 1 ? "from-[#8B5CF6] to-[#06B6D4]" : 
              "from-[#06B6D4] to-transparent opacity-20"
            }`} />

            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ scale: activeStep === 1 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg ${
                  activeStep === 1 
                  ? "bg-[#8B5CF6] text-white shadow-[#8B5CF6]/20 border border-[#8B5CF6]" 
                  : "bg-white/5 border border-white/10 text-slate-500"
                }`}
              >
                ◇
              </motion.div>
              <div className="hidden sm:block">
                <p className="text-[10.5px] font-mono text-slate-400">COGNITION</p>
                <p className="text-xs font-semibold text-white">Multi-Agent RAG</p>
              </div>
            </div>

            <div className={`h-0.5 flex-1 bg-dashed border-t border-white/20 duration-1000 ${
              activeStep === 2 ? "border-cyan-500 opacity-80" : "opacity-30"
            }`} />

            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ scale: activeStep === 2 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg ${
                  activeStep === 2 
                  ? "bg-[#06B6D4] text-white shadow-[#06B6D4]/20 border border-[#06B6D4]" 
                  : "bg-white/5 border border-white/10 text-slate-500"
                }`}
              >
                ⌘
              </motion.div>
              <div className="hidden sm:block">
                <p className="text-[10.5px] font-mono text-slate-400">DISPATCH</p>
                <p className="text-xs font-semibold text-white">Scale Deployment</p>
              </div>
            </div>
          </div>

          {/* Module Nodes Grid */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 0, label: "MODULE_RAG", color: "text-indigo-400", bg: "bg-indigo-400" },
              { id: 1, label: "LLM_ORCHESTRATOR", color: "text-purple-400", bg: "bg-purple-400" },
              { id: 2, label: "AGENT_AUTO_SCALE", color: "text-cyan-400", bg: "bg-cyan-400" }
            ].map((node) => {
              const isSelected = activeStep === node.id;
              return (
                <div 
                  key={node.id} 
                  className={`rounded-xl border p-3 transition-all duration-500 ${
                    isSelected 
                      ? "bg-white/5 border-secondary-brand/40 shadow-inner scale-[1.01]" 
                      : "bg-white/2 border-white/10 opacity-70"
                  }`}
                >
                  <p className={`text-[9.5px] font-mono font-bold tracking-tight truncate ${node.color}`}>
                    {node.label}
                  </p>
                  <div className="w-full bg-white/5 h-1 rounded overflow-hidden mt-2">
                    <motion.div 
                      className={`h-full ${node.bg}`} 
                      initial={{ width: "30%" }}
                      animate={{ width: isSelected ? "100%" : "30%" }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Decorative Blur Backdrops directly backing this component for Immersive depth */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 blur-2xl -z-10" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 blur-2xl -z-10" />
    </div>
  );
}
