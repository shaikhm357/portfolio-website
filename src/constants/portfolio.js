export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  role: "Senior Full-Stack Developer",
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
  tags: ["React", "Angular", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker", "AWS"],
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
      "Architected a multi-tenant SaaS assets and will management platform with Logto OIDC authentication, RBAC across 3 roles, 90+ PostgreSQL models, dual Prisma schemas, and 32 REST API modules.",
      "Built a schema-driven dynamic form builder with 20+ field types, conditional visibility, lookup auto-population, drag-and-drop ordering, and visual navigation management.",
      "Engineered subscription lifecycle flows with Razorpay payments, invoicing, webhooks, tiered plan gates, usage tracking, coupon validation, and BullMQ scheduled jobs.",
      "Shipped a RAG-powered AI chatbot with Pinecone vector search, OpenRouter model fallback, admin-managed knowledge base, prompt templates, SSE streaming, and conversation history.",
      "Implemented AES-256-GCM field-level encryption, Redis rate limiting, Socket.IO notifications, CSV import pipelines, and CI/CD with GitHub Actions, Docker, GHCR, and Nginx.",
    ],
  },
  {
    role: "Software Developer",
    company: "Alwrite",
    period: "Jan 2024 - Sep 2025",
    location: "Mumbai, India",
    stack: ["Angular", "Node.js", "PostgreSQL", "Docker", "AWS", "GPT-4", "Gemini", "LangChain"],
    points: [
      "Engineered a B2B SaaS underwriting platform for Health, Marine, and Property insurance workflows across broker partner channels.",
      "Built quick quote and dynamic form systems for configurable policy data capture, real-time premium calculations, and reduced manual underwriting effort.",
      "Developed REST APIs for underwriting lifecycle workflows, underwriter responses, partner onboarding, import/export pipelines, and policy binding flows.",
      "Implemented LLM-powered document understanding, claims processing, and customer support features using GPT-4, Gemini, and LangChain.",
      "Optimized MongoDB queries with indexing and tuning across underwriting, policy search, and analytics workloads.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Finclusion Solutions Pvt Ltd",
    period: "Jul 2021 - Oct 2023",
    location: "Mumbai, India",
    stack: ["Node.js", "Fastify", "FeathersJS", "Microservices", "Keycloak", "Camunda 8", "Docker"],
    points: [
      "Designed Node.js microservices using Fastify and FeathersJS for distributed insurance product platforms.",
      "Owned booking and dynamic form services for configurable workflows across Health, Life, and General insurance products.",
      "Built transformation and orchestration layers for third-party insurer, regulatory, and client-specific API integrations.",
      "Implemented Keycloak SSO, RBAC, token management, centralized user provisioning, and consistent inter-service error handling.",
      "Delivered a Camunda 8 BPMN MVP for claims and underwriting automation and containerized services with Docker Compose.",
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
    category: "Frontend",
    items: [
      { name: "React.js", pct: 90 },
      { name: "Angular", pct: 82 },
      { name: "TypeScript", pct: 84 },
      { name: "HTML / CSS", pct: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", pct: 92 },
      { name: "Express / Fastify", pct: 88 },
      { name: "REST APIs", pct: 90 },
      { name: "Microservices", pct: 82 },
    ],
  },
  {
    category: "Data & DevOps",
    items: [
      { name: "PostgreSQL", pct: 86 },
      { name: "MongoDB", pct: 84 },
      { name: "Redis", pct: 76 },
      { name: "Docker / AWS", pct: 78 },
    ],
  },
  {
    category: "AI & Security",
    items: [
      { name: "LangChain / RAG", pct: 80 },
      { name: "Pinecone", pct: 74 },
      { name: "JWT / OAuth2 / RBAC", pct: 88 },
      { name: "Keycloak / Logto", pct: 78 },
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
