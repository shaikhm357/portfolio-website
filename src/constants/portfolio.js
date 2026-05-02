export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  role: "MERN Stack Developer",
  headline: [
    "Architecting Systems That Scale.",
    "Shipping Platforms, Not Just Features.",
    "Building SaaS. Integrating AI. Owning Outcomes.",
    "Turning Ideas Into Production-Ready Platforms.",
    "Crafting Scalable Systems From Zero to Production.",
    "Solving Complex Problems, One System at a Time.",
    "Delivering Enterprise SaaS With AI at the Core.",
    "Engineered for Scale. Built for Startups.",
    "Transforming Startup Ideas Into Scalable Products.",
    "Shipping Clean Code. Owning the Full Stack.",
  ],
  accentWords: { Architecting: "accent", Scale: "accent2", AI: "accent2" },
  subtitle:
    "Full-stack developer with 4+ years building enterprise SaaS platforms across InsurTech and FinTech — spanning multi-tenant architectures, dynamic form engines, subscription systems, and LLM-powered workflows. Deep hands-on experience across React, Angular, Node.js, and PostgreSQL, with a consistent track record of owning complex features end-to-end in fast-moving product teams.",
  tags: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "DSA"],
};

export const ABOUT_DATA = {
  paragraphs: [
    [
      "Hey — I'm a ",
      "MERN stack developer",
      " with 4+ years of experience building production-grade full-stack applications. I specialize in clean system architecture, performant APIs, and thoughtful UX that scales.",
    ],
    [
      "I run ",
      "WeebCoders",
      " — a YouTube channel at the intersection of anime culture and software engineering. The tagline says it all: ",
      '"Where Otakus Become Engineers."',
    ],
    [
      "I believe in compounding over rushing. Every data structure I learn, every component I build, every video I ship — it's all part of a longer arc toward mastery.",
    ],
  ],
  specs: [
    { key: "Role", value: "Full-Stack Developer" },
    { key: "Stack", value: "MERN" },
    { key: "Experience", value: "4+ Years" },
    { key: "Channel", value: "WeebCoders" },
    { key: "Focus", value: "DSA + Product Interviews" },
    { key: "Timeline", value: "6–8 Month Roadmap" },
    { key: "Status", value: "◉ Open to Work", green: true },
  ],
};

export const PROJECTS_DATA = [
  {
    num: "001",
    name: "Dev Camper",
    desc: "A bootcamp discovery platform with authentication, listings, reviews, and location-aware browsing for developer education programs.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://dev-camper.onrender.com/",
  },
  {
    num: "002",
    name: "Pro Shop",
    desc: "A full-stack ecommerce storefront with product browsing, cart flows, checkout, and order management built for a production-style retail experience.",
    stack: ["React", "Redux", "Node.js", "MongoDB"],
    demo: "https://myecom-1cz0.onrender.com/",
  },
  {
    num: "003",
    name: "Coming Soon...",
    desc: "A larger automation and GenAI platform focused on agentic workflows, business process orchestration, intelligent document handling, and AI-assisted operations from idea to execution.",
    stack: ["Automation", "GenAI", "LLMs", "Workflow Engine", "SaaS"],
    featured: true,
    status: "In Progress",
  },
];

export const SKILLS_DATA = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", pct: 85 },
      { name: "JavaScript", pct: 80 },
      { name: "HTML / CSS", pct: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", pct: 78 },
      { name: "Express.js", pct: 75 },
      { name: "REST APIs", pct: 80 },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", pct: 72 },
      { name: "Git / GitHub", pct: 82 },
      { name: "DSA (JS)", pct: 50 },
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
  email: "hello@weebcoders.dev",
  github: "github.com/weebcoders",
  linkedin: "linkedin.com/in/weebcoders",
  youtube: "youtube.com/@WeebCoders",
  resume: "#",
};
