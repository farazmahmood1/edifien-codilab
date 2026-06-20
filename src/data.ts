import { ServiceItem, CaseStudy, ProcessStep, TechItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    description: "Architecting multi-agent networks, responsive RAG frameworks, and advanced workflows to automate core operational friction.",
    longDescription: "We build self-orchestrating AI agents and multi-agent systems designed to perform complex business tasks. Using advanced retrieval-augmented generation (RAG) and Model Context Protocol (MCP) integrations, we turn LLMs from simple chat widgets into proactive, autonomous workers integrated directly into your databases and software stacks.",
    features: [
      "Multi-Agent Swarms & Orchestration (LangGraph / CrewAI)",
      "High-Precision RAG Applications with Semantic Routing",
      "Model Context Protocol (MCP) & REST Tool Integrations",
      "Automated Executive Workflow Pipelines",
      "Localized LLM deployment & Fine-Tuning Consulting"
    ],
    techStack: ["Gemini 2.5", "LangGraph", "Claude 3.5 Sonnet", "FastAPI", "Pinecone"],
    iconName: "Cpu",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "saas-dev",
    title: "SaaS Product Development",
    description: "Engineering secure, scalable MVPs and multi-tenant SaaS architectures modeled for modern venture financing and rapid growth.",
    longDescription: "We aren't simple freelancers; we are product builders. We engineer your SaaS from blank-canvas MVP all the way to enterprise scale. We implement secure multi-tenant database partitioning, customized subscription layers, dynamic onboarding flows, and analytical tracking, keeping your software ready for enterprise evaluation.",
    features: [
      "Multi-Tenant Database & API Architectures",
      "Modular Microservices & Serverless Deployments",
      "Dynamic Subscription Billing & Metered Charging Systems",
      "Custom Client Collaboration Dashboards",
      "Rapid Prototype MVP Frameworks (Launch in 6 Weeks)"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    iconName: "Sparkles",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software & Systems",
    description: "Upgrading high-load business backbones, customized internal control rooms, and heavy-duty automation systems.",
    longDescription: "We build robust internal instruments that centralize operations, drive critical insights, and synchronize offline-online business tasks. We replace Excel or legacy portals with lightning-fast unified platforms that connect your CRM, ERP, and communication hubs with AI intelligence layers.",
    features: [
      "Custom ERP & CRM Operational Platforms",
      "High-Density Interactive Analytical Dashboards",
      "Automated Cloud Infrastructure & CI/CD Pipelines",
      "Secure RBAC (Role-Based Access Control)",
      "Legacy Database Migration & REST/GraphQL Wrappers"
    ],
    techStack: ["Node.js", "NestJS", "AWS Suite", "D3.js", "Cloud SQL"],
    iconName: "Briefcase",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "apps-dev",
    title: "High-Scale Web & Mobile",
    description: "Designing sleek, immersive interface systems and native high-performance mobile components with responsive styling.",
    longDescription: "We shape clean, high-performance web ecosystems and native mobile applications that capture users and simplify complex operations. We prioritize responsive desktop-first precision combined with optimized mobile-first layouts, leveraging rich interactive frameworks.",
    features: [
      "Interactive Single Page Apps (SPA) & SSR Pages",
      "Cross-Platform Native Mobile Apps (React Native)",
      "Sleek Hardware-Accelerated 3D Web UI Elements",
      "Tailwind-Powered Atomic Design Systems",
      "Optimized Core Web Vitals (Sub-100ms Interactions)"
    ],
    techStack: ["React Native", "Tailwind CSS", "Motion API", "Vite", "Three.js"],
    iconName: "Smartphone",
    color: "from-cyan-400 to-indigo-500"
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "health-copilot",
    clientName: "Aurea Health Inc. (Healthcare)",
    industry: "Healthcare AI",
    title: "AI-Powered Patient Co-Pilot & Clinical Documentation Engine",
    problem: "Clinicians wasted over 4.2 hours per day on manual EHR documentation, leading to practitioner fatigue and high operational error rates during patient transitions.",
    solution: "We engineered an ambient voice AI Co-Pilot that records and contextualizes clinical visits. It automatically structures natural medical dialogues into compliant FHIR JSON schemas, updating patient histories securely.",
    results: [
      "Eliminated 82% of clinician manual charting time",
      "Increased daily patient consult capacity by 35% per clinic",
      "Achieved 99.4% accuracy in professional terminology recognition",
      "Fully compliant HIPAA-secure isolated data flow"
    ],
    metrics: [
      { label: "Charting Time Cut", value: "82%", performanceGrow: 82 },
      { label: "Consult Capacity", value: "+35%", performanceGrow: 35 },
      { label: "Transcription Accuracy", value: "99.4%", performanceGrow: 99.4 }
    ],
    technologies: ["OpenAI Whisper API", "Gemini Pro", "LangGraph Routing", "React", "PostgreSQL", "AWS KMS"]
  },
  {
    id: "arbitrage-fintech",
    clientName: "Apex Capital (Fintech)",
    industry: "Fintech Systems",
    title: "Autonomous Multi-Agent Asset Risk Arbitrage & Compliance Platform",
    problem: "Manual review of multi-market global arbitrage transactions was slow, exposing the firm to critical capital exposure gaps and non-compliance fines.",
    solution: "We built a multi-agent system (utilizing LangGraph) where specialist agents review real-time transactions, perform semantic searches across global regulatory changes, and preemptively flag high-risk portfolios.",
    results: [
      "Reduced transaction processing auditing latency from hours to 85 milliseconds",
      "Identified and mitigated $2.4M in potential bad-compliance exposures",
      "Saved 600+ executive compliance officer search hours monthly",
      "System operates at 99.99% critical uptime"
    ],
    metrics: [
      { label: "Audit Latency", value: "<85ms", performanceGrow: 98 },
      { label: "Compliance Savings", value: "$2.4M+", performanceGrow: 75 },
      { label: "Uptime SLA", value: "99.99%", performanceGrow: 99.99 }
    ],
    technologies: ["Python", "FastAPI", "Claude 3.5 Sonnet", "Pinecone Vector DB", "Docker", "Svelte"]
  },
  {
    id: "ecommerce-oms",
    clientName: "CartMesh Solutions (E-Commerce)",
    industry: "Logistics Automation",
    title: "AI-Driven Intelligent Inventory & Dynamic Supply Chain Orchestration Suite",
    problem: "Global supply chain volatility and delayed tracking resulted in $420k+ annual losses due to sudden out-of-stock events and expensive micro-shipments.",
    solution: "We deployed an intelligent predictive ERP system that models future supply shocks, automatically communicates with supplier portals via custom AI agents, and reroutes shipments dynamically.",
    results: [
      "Reduced stockouts by 91.5% using predictive order systems",
      "Decreased international freight overheads by 22.4%",
      "Automated 85% of standard supplier communications",
      "Synced unified CRM & ERP layers covering 14 fulfillment centers"
    ],
    metrics: [
      { label: "Stockout Reduction", value: "91.5%", performanceGrow: 91.5 },
      { label: "Freight Savings", value: "22.4%", performanceGrow: 22.4 },
      { label: "Auto Communication", value: "85%", performanceGrow: 85 }
    ],
    technologies: ["TypeScript", "NestJS", "LangChain", "Azure OpenAI", "React", "AWS Lambda"]
  }
];

export const processStepsData: ProcessStep[] = [
  {
    phase: "01",
    title: "Discover",
    subtitle: "Domain Deep-Dive",
    duration: "Week 1",
    deliverables: ["Technical Scope Spec", "Infrastructure Evaluation", "AI Feasibility Matrix"],
    description: "We analyze your technological landscape, current user metrics, and business bottlenecks to map out precisely where AI and product architecture will yield the highest performance."
  },
  {
    phase: "02",
    title: "Strategy",
    subtitle: "Architecture Definition",
    duration: "Week 2",
    deliverables: ["Component Diagrams", "API & Database Blueprints", "Secured Budget Options"],
    description: "Our engineers architect the software foundations: defining database schemas, choosing optimal large language models (LLMs), outlining agent pipelines, and ensuring scalability parameters."
  },
  {
    phase: "03",
    title: "Design",
    subtitle: "High-Fidelity Systems",
    duration: "Weeks 3-4",
    deliverables: ["Interactive Prototypes", "Accessible Design System", "User Flows"],
    description: "We build intuitive, lightning-fast interfaces. No generic templates here — we craft responsive, bespoke product layouts that streamline complex operational parameters."
  },
  {
    phase: "04",
    title: "Build",
    subtitle: "Elite Development",
    duration: "Weeks 5-10",
    deliverables: ["Clean Monitored Codebase", "Daily CI/CD Builds", "Automated QA Protocols"],
    description: "We construct the core services utilizing Clean Architecture. Every module undergoes rigorous unit and integration testing, and you get continuous visual updates via private staging environments."
  },
  {
    phase: "05",
    title: "Launch",
    subtitle: "Zero-Downtime Deployment",
    duration: "Week 11",
    deliverables: ["Production Handover", "Telemetry Monitors", "Compliance Sign-off"],
    description: "Our team deploys your systems into hardened cloud nodes. We verify SSL configs, hook up automatic logging telemetry (SENTRY / Google Cloud Logging), and ensure complete compliance."
  },
  {
    phase: "06",
    title: "Scale",
    subtitle: "AI Operations",
    duration: "Ongoing",
    deliverables: ["Continuous Optimizations", "Vector Index Tuning", "System Iterations"],
    description: "Continuous evolution. We tune prompt models, optimize database indexing for cost savings, keep fine-tuning LLM pipelines, and implement feature upgrades as your business scales."
  }
];

export const techStackData: TechItem[] = [
  // AI
  { name: "Gemini 2.5", category: "AI", iconType: "BrainCircuit", description: "Primary model for server-side reasoning & high-speed token ingestion." },
  { name: "Claude 3.5 Sonnet", category: "AI", iconType: "Cpu", description: "Specialized model for complex math, engineering, & layout tasks." },
  { name: "OpenAI API", category: "AI", iconType: "Layers", description: "Robust tools for audio processing, embedding, and fallback logic." },
  { name: "LangGraph", category: "AI", iconType: "GitNetwork", description: "Stateful orchestration system for resilient multi-agent environments." },
  { name: "LangChain", category: "AI", iconType: "Workflow", description: "Standard utility integrations for tool-calling and document ingestions." },
  { name: "CrewAI", category: "AI", iconType: "Users", description: "Autonomous task execution framework with roles and delegation." },

  // Frontend
  { name: "React 19", category: "Frontend", iconType: "Layout", description: "Immersive UI design system leveraging new Server Component paradigms." },
  { name: "Next.js", category: "Frontend", iconType: "Globe", description: "Production scale SEO rendering framework and fluid serverless paths." },
  { name: "TypeScript", category: "Frontend", iconType: "ShieldCheck", description: "Strict static type system ensuring clean integration across data paths." },
  { name: "Tailwind CSS", category: "Frontend", iconType: "Palette", description: "Atomic utility design system driving stunning user aesthetics." },
  { name: "Motion API", category: "Frontend", iconType: "Tv", description: "Hardware-accelerated dynamic viewport animations at 60fps." },
  { name: "Three.js", category: "Frontend", iconType: "Box", description: "Immersive WebGL canvas rendering for futuristic interactive nodes." },

  // Backend
  { name: "Node.js", category: "Backend", iconType: "Terminal", description: "High-performance event-driven JavaScript environment for scale APIs." },
  { name: "NestJS", category: "Backend", iconType: "Hexagon", description: "Enterprise-grade architectural TypeScript scaffolding for APIs." },
  { name: "Python", category: "Backend", iconType: "SquareCode", description: "Primary backbone for massive data operations and mathematical setups." },
  { name: "FastAPI", category: "Backend", iconType: "Zap", description: "High-speed, automatic open-API typed gateway for model services." },
  { name: "PostgreSQL / SQLite", category: "Backend", iconType: "Database", description: "Clean relational tables with powerful JSON storage capability." },

  // Cloud
  { name: "Google Cloud (GCP)", category: "Cloud", iconType: "Cloud", description: "Hardened serverless deployments, AI pipelines, and DB setups." },
  { name: "Amazon Web Services", category: "Cloud", iconType: "Server", description: "Enterprise file-storage, load-balancers, and global route relays." },
  { name: "Microsoft Azure", category: "Cloud", iconType: "Cpu", description: "Managed private models, compliance keys, and secure vaults." }
];

export const whyChooseForrof = [
  {
    title: "AI-First",
    description: "We don't tack AI on as an afterthought. We build your systems with modern LLM-orchestration, vector databases, and agent pipelines at the center of the architecture.",
    bulletPoints: ["Stateful memory", "MCP-driven tool loops", "Context-optimized RAG Systems"]
  },
  {
    title: "Product Mindset",
    description: "We act as your dedicated engineering and product management co-founders, not just passive contractors. We refine user experiences, cut overheads, and build for retention.",
    bulletPoints: ["Comprehensive product specs", "Frictionless UI/UX Flows", "Conversion funnel analysis"]
  },
  {
    title: "Scale Ready",
    description: "We engineer systems with Enterprise-compliant standards, zero-downtime microservices, and absolute database integrity from Day One.",
    bulletPoints: ["HIPAA & SOC 2 blueprinting", "Predictive load scaling", "Sub-100ms response targets"]
  },
  {
    title: "Business Focused",
    description: "We align coding structures with business objectives. We look at serverless API costs, token payloads, and operations efficiency to drive clear investor ROI.",
    bulletPoints: ["Model execution cost-audits", "Documented source handovers", "Autonomous staff replacements"]
  }
];

export const blogPosts = [
  {
    id: "mcp-guide",
    title: "Understanding Model Context Protocol (MCP): The Future of Connected AI Agents",
    summary: "How agencies are using Anthropic's new protocol to connect LLMs directly to secure databases & development terminals securely.",
    author: "Forrof Engineering",
    readTime: "6 min read",
    tag: "AI Architecture"
  },
  {
    id: "saas-mvp-6weeks",
    title: "How to Architect a Scale-Ready SaaS MVP inside of 6 Weeks without Technical Debt",
    summary: "Tactical guidelines choosing between Serverless Node.js, NextJS pages, and PostgreSQL schemas to present clean architectures to venture auditors.",
    author: "Product Strategy team",
    readTime: "9 min read",
    tag: "SaaS Scaling"
  }
];
