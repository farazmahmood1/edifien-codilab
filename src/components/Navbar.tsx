import React, { useState } from "react";
import { Terminal, Cpu, Share2, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "why-choose", label: "Philosophy" },
    { id: "process", label: "Pipeline" },
    { id: "case-studies", label: "Case Studies" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "diagnostic-booker", label: "ROI Strategy" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/75 backdrop-blur-xl border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleLinkClick("hero")} 
            className="flex items-center gap-3 cursor-pointer group"
            id="brand-logo"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-brand via-accent-brand to-secondary-brand flex items-center justify-center shadow-lg shadow-primary-brand/20 group-hover:scale-105 transition-transform">
              <Cpu className="w-5.5 h-5.5 text-white animate-pulse" />
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-primary-brand via-accent-brand to-secondary-brand opacity-30 blur-sm group-hover:opacity-70 transition-opacity" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                FORROF
              </span>
              <span className="text-[10px] font-mono text-secondary-brand tracking-widest font-semibold">
                PRODUCT STUDIO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-medium transition-all relative py-2 cursor-pointer ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-brand to-secondary-brand"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Connected Node Telemetry Indicator */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-[11px] font-mono text-emerald-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>NODE_ACTIVE_3000</span>
            </div>

            <button
              onClick={() => handleLinkClick("diagnostic-booker")}
              className="relative group overflow-hidden rounded-xl p-[1px] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-brand to-secondary-brand rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-4 py-2 bg-[#050816] rounded-[11px] text-xs font-semibold text-white flex items-center gap-2 group-hover:bg-[#050816]/90 transition-colors">
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 text-secondary-brand group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/5 text-[10px] font-mono text-emerald-400 border border-emerald-500/10 mr-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>ONLINE</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-white/5 bg-[#050816]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? "bg-gradient-to-r from-primary-brand/10 to-secondary-brand/10 text-white border-l-2 border-secondary-brand" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between px-4 text-xs font-mono text-gray-500">
                  <span>ENVIRONMENT</span>
                  <span className="text-emerald-400">SECURE SHELL</span>
                </div>
                
                <button
                  onClick={() => handleLinkClick("diagnostic-booker")}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-brand to-secondary-brand text-xs font-semibold text-white flex items-center justify-center gap-2"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
