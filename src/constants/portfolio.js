export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  role: "MERN Stack Developer",
  headline: ["Building the", "Web, One", "Component at a Time.", "fdevdsfdsf"],
  accentWords: { "Web,": "accent", Component: "accent2" },
  subtitle:
    "Full-stack developer with 4+ years of experience. DSA enthusiast. Anime aficionado. Crafting scalable digital systems where precision meets creativity — where otakus become engineers.",
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
    name: "WeebWallet",
    desc: "A personal finance tracker for creators — manage irregular income from YouTube, sponsorships & merch all in one dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Chart.js"],
    demo: "#",
    github: "#",
  },
  {
    num: "002",
    name: "DSA Visualizer",
    desc: "Interactive visualizations of sorting algorithms and data structures — built to learn and teach DSA concepts with anime-themed UX.",
    stack: ["React", "D3.js", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    num: "003",
    name: "OtakuAuth",
    desc: "Full-stack authentication system with JWT, refresh tokens, role-based access, and secure REST APIs. Production-ready boilerplate.",
    stack: ["Express", "MongoDB", "JWT", "bcrypt"],
    demo: "#",
    github: "#",
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
