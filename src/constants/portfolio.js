export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  role: "Sr. Full-Stack Developer",
  headline: [
    "Building Enterprise SaaS Platforms.",
    "Shipping Multi-Tenant Systems.",
    "Engineering RAG Chatbots And APIs.",
    "Owning Products From Zero To Production.",
    "Scaling MERN And MEAN Applications.",
    "Designing Secure Full-Stack Workflows.",
  ],
  accentWords: { Architecting: "accent", Scale: "accent2", AI: "accent2" },
  subtitle:
    "Full-stack developer with 4+ years building enterprise SaaS platforms from scratch, including multi-tenant systems, robust API modules, dynamic form engines, subscription lifecycles, and RAG-powered chatbots. Expert across MERN and MEAN stacks with hands-on ownership from architecture to production deployment.",
  tags: [
    { label: "React", color: "#BF5AF2" },
    { label: "Angular", color: "#FF2D95" },
    { label: "Node.js", color: "#00FF88" },
    { label: "TypeScript", color: "#00E5FF" },
    { label: "PostgreSQL", color: "#2979FF" },
    { label: "MongoDB", color: "#FFD600" },
    { label: "Docker", color: "#A3E635" },
    { label: "AWS", color: "#FF1A40" },
  ],
};

export const ABOUT_DATA = {
  paragraphs: [
    [
      "I'm ",
      "Mahboob Shaikh",
      ", a Mumbai-based full-stack developer specializing in MERN and MEAN applications, enterprise SaaS platforms, secure APIs, and AI-assisted product workflows.",
    ],
    [
      "My journey started outside software as a ",
      "VMC operator",
      ". I moved into development through self-learning, hands-on projects, and a BSc IT degree, then grew into roles building production systems for InsurTech and SaaS teams.",
    ],
    [
      "I focus on ",
      "clean architecture",
      ", reliable integrations, practical automation, and product engineering that can survive real users, changing requirements, and production pressure.",
    ],
  ],
  specs: [
    { key: "Role", value: "Senior Full-Stack Developer" },
    { key: "Stack", value: "MERN / MEAN" },
    { key: "Experience", value: "4+ Years" },
    { key: "Location", value: "Mumbai, India" },
    { key: "Focus", value: "Enterprise SaaS + AI" },
    { key: "Education", value: "BSc IT, Mumbai University" },
    { key: "Status", value: "Open to senior roles", green: true },
  ],
};

export const EXPERIENCE_DATA = [
  {
    role: "Senior Software Developer",
    company: "AdsCult",
    period: "Sep 2025 - Apr 2026",
    location: "Mumbai, India",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS"],
    points: [
      { text: "Architected a multi-tenant SaaS assets and will management platform with Logto OIDC authentication, RBAC across 3 roles, 90+ PostgreSQL models, dual Prisma schemas, and 32 REST API modules.", color: "#00E5FF" },
      { text: "Built a schema-driven dynamic form builder with 20+ field types, conditional visibility, lookup auto-population, drag-and-drop ordering, and visual navigation management.", color: "#BF5AF2" },
      { text: "Engineered subscription lifecycle flows with Razorpay payments, invoicing, webhooks, tiered plan gates, usage tracking, coupon validation, and BullMQ scheduled jobs.", color: "#00FF88" },
      { text: "Shipped a RAG-powered AI chatbot with Pinecone vector search, OpenRouter model fallback, admin-managed knowledge base, prompt templates, SSE streaming, and conversation history.", color: "#FFD600" },
      { text: "Implemented AES-256-GCM field-level encryption, Redis rate limiting, Socket.IO notifications, CSV import pipelines, and CI/CD with GitHub Actions, Docker, GHCR, and Nginx.", color: "#FF2D95" },
    ],
  },
  {
    role: "Software Developer",
    company: "Alwrite",
    period: "Jan 2024 - Sep 2025",
    location: "Mumbai, India",
    stack: ["Angular", "Node.js", "PostgreSQL", "Docker", "AWS", "GPT-4", "Gemini", "LangChain"],
    points: [
      { text: "Engineered a B2B SaaS underwriting platform for Health, Marine, and Property insurance workflows across broker partner channels.", color: "#00E5FF" },
      { text: "Built quick quote and dynamic form systems for configurable policy data capture, real-time premium calculations, and reduced manual underwriting effort.", color: "#00FF88" },
      { text: "Developed REST APIs for underwriting lifecycle workflows, underwriter responses, partner onboarding, import/export pipelines, and policy binding flows.", color: "#FFD600" },
      { text: "Implemented LLM-powered document understanding, claims processing, and customer support features using GPT-4, Gemini, and LangChain.", color: "#FF1A40" },
      { text: "Optimized MongoDB queries with indexing and tuning across underwriting, policy search, and analytics workloads.", color: "#A3E635" },
    ],
  },
  {
    role: "Backend Developer",
    company: "Finclusion Solutions Pvt Ltd",
    period: "Jul 2021 - Oct 2023",
    location: "Mumbai, India",
    stack: ["Node.js", "Fastify", "FeathersJS", "Microservices", "Keycloak", "Camunda 8", "Docker"],
    points: [
      { text: "Designed Node.js microservices using Fastify and FeathersJS for distributed insurance product platforms.", color: "#00E5FF" },
      { text: "Owned booking and dynamic form services for configurable workflows across Health, Life, and General insurance products.", color: "#FF2D95" },
      { text: "Built transformation and orchestration layers for third-party insurer, regulatory, and client-specific API integrations.", color: "#00FF88" },
      { text: "Implemented Keycloak SSO, RBAC, token management, centralized user provisioning, and consistent inter-service error handling.", color: "#FFD600" },
      { text: "Delivered a Camunda 8 BPMN MVP for claims and underwriting automation and containerized services with Docker Compose.", color: "#BF5AF2" },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    num: "001",
    name: "E-Commerce Platform",
    desc: "Full-stack retail platform with product catalog, cart, JWT authentication, order flows, and Razorpay payment integration.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    demo: "https://myecom-1cz0.onrender.com/",
  },
  {
    num: "002",
    name: "DevCamper",
    desc: "RESTful API platform for coding bootcamp listings with JWT authentication, role-based authorization, enrollment management, and MongoDB-backed resources.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    demo: "https://dev-camper.onrender.com/",
  },
  {
    num: "003",
    name: "Agentic AI Systems (Coming Soon...)",
    desc: "Next-generation SaaS powered by autonomous agents, contextual knowledge pipelines, and scalable architecture.",
    stack: ["SaaS", "RAG", "Pinecone", "Prisma", "BullMQ", "Socket.IO", "Docker"],
    featured: true,
    status: "Comming Soon...",
  },
];

export const SKILLS_DATA = [
  {
    id: 1,
    category: "Languages",
    icon: "Code2",
    color: "#00E5FF",
    items: [
      { id: "lang-1", name: "JavaScript (ES6+)", pct: 94, level: "Expert", years: 4 },
      { id: "lang-2", name: "TypeScript", pct: 86, level: "Advanced", years: 3 },
      { id: "lang-3", name: "Python", pct: 72, level: "Intermediate", years: 2 },
      { id: "lang-4", name: "SQL", pct: 88, level: "Advanced", years: 4 },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    icon: "Monitor",
    color: "#BF5AF2",
    items: [
      { id: "fe-1", name: "React.js", pct: 90, level: "Expert", years: 4 },
      { id: "fe-2", name: "Redux", pct: 85, level: "Advanced", years: 3 },
      { id: "fe-3", name: "Angular", pct: 84, level: "Advanced", years: 2 },
      { id: "fe-4", name: "RxJS", pct: 80, level: "Advanced", years: 2 },
      { id: "fe-5", name: "TanStack Query", pct: 82, level: "Advanced", years: 2 },
      { id: "fe-6", name: "SSE Streaming", pct: 78, level: "Intermediate", years: 1 },
      { id: "fe-7", name: "HTML | CSS", pct: 90, level: "Expert", years: 4 },
    ],
  },
  {
    id: 3,
    category: "Backend",
    icon: "Server",
    color: "#00FF88",
    items: [
      { id: "be-1", name: "Node.js", pct: 92, level: "Expert", years: 4 },
      { id: "be-2", name: "Express.js", pct: 90, level: "Expert", years: 4 },
      { id: "be-3", name: "REST APIs", pct: 92, level: "Expert", years: 4 },
      { id: "be-4", name: "Prisma ORM", pct: 86, level: "Advanced", years: 2 },
      { id: "be-5", name: "Fastify", pct: 85, level: "Advanced", years: 2 },
      { id: "be-6", name: "Microservices", pct: 84, level: "Advanced", years: 3 },
      { id: "be-7", name: "Socket.IO", pct: 82, level: "Advanced", years: 2 },
      { id: "be-8", name: "BullMQ", pct: 80, level: "Advanced", years: 1 },
      { id: "be-9", name: "FeathersJS", pct: 78, level: "Intermediate", years: 2 },
    ],
  },
  {
    id: 4,
    category: "Databases & Caching",
    icon: "Database",
    color: "#FFD600",
    items: [
      { id: "db-1", name: "PostgreSQL", pct: 88, level: "Advanced", years: 3 },
      { id: "db-2", name: "MongoDB", pct: 86, level: "Advanced", years: 4 },
      { id: "db-3", name: "Redis", pct: 80, level: "Advanced", years: 2 },
      { id: "db-4", name: "Pinecone (Vector DB)", pct: 76, level: "Intermediate", years: 1 },
    ],
  },
  {
    id: 5,
    category: "Auth & Payments",
    icon: "ShieldCheck",
    color: "#FF1A40",
    items: [
      { id: "auth-1", name: "JWT | OAuth2", pct: 90, level: "Expert", years: 4 },
      { id: "auth-2", name: "RBAC", pct: 88, level: "Advanced", years: 3 },
      { id: "auth-3", name: "Razorpay", pct: 84, level: "Advanced", years: 2 },
      { id: "auth-4", name: "Logto", pct: 82, level: "Advanced", years: 1 },
      { id: "auth-5", name: "OIDC | SSO", pct: 82, level: "Advanced", years: 2 },
      { id: "auth-6", name: "Keycloak", pct: 80, level: "Advanced", years: 2 },
    ],
  },
  {
    id: 6,
    category: "AI & Automation",
    icon: "BrainCircuit",
    color: "#FF2D95",
    items: [
      { id: "ai-1", name: "RAG Pipelines", pct: 78, level: "Intermediate", years: 1 },
      { id: "ai-2", name: "LangChain", pct: 76, level: "Intermediate", years: 1 },
      { id: "ai-3", name: "GPT-4 | Gemini", pct: 76, level: "Intermediate", years: 1 },
      { id: "ai-4", name: "OpenRouter | LLM Routing", pct: 74, level: "Intermediate", years: 1 },
      { id: "ai-5", name: "Camunda 8 (BPMN)", pct: 72, level: "Intermediate", years: 1 },
      { id: "ai-6", name: "Claude Code", pct: 80, level: "Advanced", years: 1 },
    ],
  },
  {
    id: 7,
    category: "DevOps & Tooling",
    icon: "Wrench",
    color: "#00FFFF",
    items: [
      { id: "dev-1", name: "Git", pct: 92, level: "Expert", years: 4 },
      { id: "dev-2", name: "Docker", pct: 82, level: "Advanced", years: 3 },
      { id: "dev-3", name: "GitHub Actions | CI/CD", pct: 80, level: "Advanced", years: 2 },
      { id: "dev-4", name: "Jest", pct: 82, level: "Advanced", years: 2 },
      { id: "dev-5", name: "Nginx", pct: 78, level: "Intermediate", years: 2 },
      { id: "dev-6", name: "AWS", pct: 76, level: "Intermediate", years: 2 },
      { id: "dev-7", name: "Maestro (E2E)", pct: 72, level: "Intermediate", years: 1 },
    ],
  },
  {
    id: 8,
    category: "System Design & Problem Solving",
    icon: "LayoutTemplate",
    color: "#A3E635",
    items: [
      { id: "sys-1", name: "Multi-Tenant Architecture", pct: 82, level: "Advanced", years: 2 },
      { id: "sys-2", name: "Event-Driven Systems", pct: 78, level: "Intermediate", years: 2 },
      { id: "sys-3", name: "Low Level Design (LLD)", pct: 76, level: "Intermediate", years: 2 },
      { id: "sys-4", name: "High Level Design (HLD)", pct: 74, level: "Intermediate", years: 2 },
      { id: "sys-5", name: "DSA", pct: 70, level: "Intermediate", years: 1 },
    ],
  },
];

export const YOUTUBE_DATA = {
  channel: {
    name: "WeebCoders",
    tagline:
      "Where Otakus Become Engineers — Anime-themed coding tutorials, DSA breakdowns & MERN stack deep dives.",
    url: "#",
  },
  videos: [
    {
      badge: "DSA",
      title: "Binary Search Explained With Naruto's Training Arc",
      meta: "12K views · 8 min",
      url: "#",
    },
    {
      badge: "MERN",
      title: "Build a Full Auth System in Node.js From Scratch",
      meta: "8.4K views · 22 min",
      url: "#",
    },
    {
      badge: "DSA",
      title: "Sliding Window Pattern — Every Problem Solved",
      meta: "15K views · 18 min",
      url: "#",
    },
    {
      badge: "React",
      title: "State Management: Context vs Redux vs Zustand",
      meta: "6.1K views · 14 min",
      url: "#",
    },
  ],
};

export const CONTACT_DATA = {
  email: "shaikhm357@gmail.com",
  phone: "720-816-8601",
  github: "github.com/shaikhm357",
  linkedin: "linkedin.com/in/mahboobshaikh-248139120",
  location: "Mumbai, Maharashtra, India",
  resume: "/Sr_Developer_Mahboob.pdf",
};
