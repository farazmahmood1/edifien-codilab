import React, { useState } from "react";
import { ServiceItem } from "../types";
import { Cpu, Sparkles, Briefcase, Smartphone, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceCardProps {
  key?: string;
  service: ServiceItem;
  colorScheme: string;
}

const IconMapper: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu: Cpu,
  Sparkles: Sparkles,
  Briefcase: Briefcase,
  Smartphone: Smartphone,
};

export default function ServiceCard({ service, colorScheme }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = IconMapper[service.iconName] || Cpu;

  return (
    <div 
      className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full relative group transition-all duration-400 border border-white/5 bg-[#0a1028]/40 hover:bg-[#0c163a]/70 hover:border-secondary-brand/20 shadow-md"
      id={`service-card-${service.id}`}
    >
      {/* Light gradient highlight behind icon */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity`} />
      
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-tr ${service.color} bg-opacity-20 flex items-center justify-center text-white shadow-lg`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono text-gray-400 tracking-wider bg-white/5 px-2 py-1 rounded">
            VECTOR SPEC
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-secondary-brand transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Feature Highlights (Brief) */}
        {!isExpanded && (
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feat, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-gray-300">
                <Check className="w-3.5 h-3.5 text-secondary-brand shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Detailed Expandable Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-4 border-t border-white/5">
                <p className="text-xs text-secondary-brand font-mono uppercase tracking-wider mb-2">
                  System Architecture
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {service.longDescription}
                </p>

                <p className="text-xs text-primary-brand font-mono uppercase tracking-wider mb-2">
                  Key Vector Deliverables
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1 h-1 rounded-full bg-secondary-brand shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-accent-brand font-mono uppercase tracking-wider mb-2">
                  Specialized Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono bg-white/5 hover:bg-white/10 text-gray-300 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-secondary-brand cursor-pointer hover:text-white flex items-center gap-1 group/btn transition-colors"
        >
          <span>{isExpanded ? "Collapse Details" : "Read Architecture"}</span>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-90 text-white" : "group-hover:translate-x-0.5"}`} />
        </button>
        
        <span className="text-[10px] font-mono text-gray-500 font-semibold tracking-widest uppercase">
          01 SPEC
        </span>
      </div>
    </div>
  );
}
