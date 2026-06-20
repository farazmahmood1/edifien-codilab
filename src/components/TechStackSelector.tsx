import React, { useState } from "react";
import { techStackData } from "../data";
import { Brain, LayoutGrid, Terminal, Cloud, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type CategoryType = "AI" | "Frontend" | "Backend" | "Cloud";

export default function TechStackSelector() {
  const [activeCategory, setActiveCategory] = useState<CategoryType | "All">("All");

  const categories = [
    { id: "All", label: "Full Stack", icon: LayoutGrid, color: "text-white" },
    { id: "AI", label: "AI & Agents", icon: Brain, color: "text-purple-400" },
    { id: "Frontend", label: "Frontend", icon: LayoutGrid, color: "text-cyan-400" },
    { id: "Backend", label: "Backend Core", icon: Terminal, color: "text-indigo-400" },
    { id: "Cloud", label: "Cloud & DevOps", icon: Cloud, color: "text-emerald-400" },
  ];

  const filteredTechnologies = activeCategory === "All" 
    ? techStackData 
    : techStackData.filter(tech => tech.category === activeCategory);

  return (
    <div className="w-full font-sans text-left" id="interactive-tech-stack-widget">
      
      {/* Category Selection Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl cursor-pointer text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border transition-all ${
                isActive 
                  ? "bg-gradient-to-tr from-primary-brand/30 via-[#0c163e] to-secondary-brand/10 border-cyan-500/30 text-white shadow-md shadow-primary-brand/10" 
                  : "bg-black/30 text-gray-400 hover:text-white hover:bg-white/5 border-white/5"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${cat.color}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid distribution of categorized technologies */}
      <motion.div 
        layout 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 ml-px mr-px"
      >
        <AnimatePresence mode="popLayout">
          {filteredTechnologies.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              key={tech.name}
              className="glass-panel p-4 rounded-xl border border-white/5 bg-[#0a1028]/40 hover:bg-[#0c163a]/80 hover:border-secondary-brand/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[9px] font-mono uppercase tracking-wider font-semibold ${
                    tech.category === "AI" ? "text-purple-400" :
                    tech.category === "Frontend" ? "text-cyan-400" :
                    tech.category === "Backend" ? "text-indigo-400" :
                    "text-emerald-400"
                  }`}>
                    {tech.category}
                  </span>
                  
                  {/* Category bullet indicator */}
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    tech.category === "AI" ? "bg-purple-500" :
                    tech.category === "Frontend" ? "bg-cyan-500" :
                    tech.category === "Backend" ? "bg-indigo-500" :
                    "bg-emerald-500"
                  } shadow-pulse`} />
                </div>

                <h4 className="text-sm font-bold font-display text-white group-hover:text-secondary-brand transition-colors">
                  {tech.name}
                </h4>
              </div>

              <p className="text-[10.5px] text-gray-500 leading-relaxed mt-2 pt-2 border-t border-white/2 group-hover:text-gray-400 transition-colors">
                {tech.description}
              </p>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
