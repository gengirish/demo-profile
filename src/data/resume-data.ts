export const personalInfo = {
  name: "Girish Hiremath",
  title: "Principal Software Engineer & AI Architect",
  tagline: "14 Years · Banking · Pharma · Telecom · Compliance · Now Building AI MVPs",
  summary:
    "Full-stack software engineer with 14 years of experience building scalable enterprise systems across banking, pharmaceuticals, telecommunications, and compliance. AI enthusiast since 2012 — long before it was mainstream. Currently running BuildwithAiGiri: 25 AI MVPs in 25 weeks, completely free.",
  aiSummary:
    "I'm the AI assistant in Girish's portfolio. Ask me about his 14-year career across banking, pharma, telecom & compliance, his BuildwithAiGiri initiative (25 free AI MVPs!), or his projects on GitHub.",
  currentPursuit: {
    title: "M.Tech in Data Science & Artificial Intelligence",
    institution: "IIIT Dharwad Online",
    institutionFull: "Indian Institute of Information Technology Dharwad",
    status: "Currently Pursuing",
    startDate: "2023",
    specializations: ["Deep Learning", "NLP", "Computer Vision", "Generative AI"],
    url: "https://www.iiitdwd.ac.in/",
  },
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/girish-b-hiremath/",
  github: "https://github.com/gengirish",
  email: "gengirish@gmail.com",
};

export const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "86+", label: "GitHub Repos" },
  { value: "4", label: "Industry Domains" },
  { value: "25", label: "AI MVPs Building" },
];

export const skillCategories = [
  {
    name: "Backend Engineering",
    icon: "⚙️",
    color: "#00d4ff",
    skills: ["Java", "Spring Boot", "Microservices", "Node.js", "Python", "REST APIs", "Apache Kafka", "RabbitMQ"],
  },
  {
    name: "Frontend & UI",
    icon: "🎨",
    color: "#7c3aed",
    skills: ["Angular", "React", "TypeScript", "RxJS", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "AI & Machine Learning",
    icon: "🧠",
    color: "#f472b6",
    skills: ["LangChain", "LangGraph", "Generative AI", "NLP", "Deep Learning", "Computer Vision", "OpenRouter", "TensorFlow"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    color: "#34d399",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Linux", "Git", "Terraform"],
  },
  {
    name: "Data & Architecture",
    icon: "🗄️",
    color: "#fbbf24",
    skills: ["System Design", "SQL", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Data Modeling", "Event-Driven"],
  },
];

export const experience = [
  {
    epoch: 0,
    phase: "Foundation",
    title: "Software Engineer",
    company: "Semiconductor & IT Services Company",
    companyType: "Technology Services",
    period: "Jul 2011 – Dec 2013",
    domain: "Technology",
    domainColor: "#34d399",
    accuracy: 55,
    loss: 0.45,
    description:
      "Began career building enterprise Java applications and embedded systems. A standout early project: a Hindi Reader using neural networks — in 2012, before 'AI' was a buzzword. This early AI work set the trajectory for the next decade.",
    highlights: [
      "Built a Hindi Reader using neural networks in 2012 — pioneering AI before it was mainstream",
      "Delivered core Java modules for enterprise clients across banking and manufacturing verticals",
      "Established strong foundations in J2EE, design patterns, and agile development",
      "Achieved OCJP certification while working full-time",
    ],
    tech: ["Java", "J2EE", "Spring MVC", "Hibernate", "Neural Networks", "Oracle SQL", "Maven", "SVN"],
  },
  {
    epoch: 1,
    phase: "Specialization",
    title: "Senior Software Engineer",
    company: "Banking Technology Firm",
    companyType: "Banking & FinTech",
    period: "Jan 2014 – Dec 2015",
    domain: "Banking",
    domainColor: "#00d4ff",
    accuracy: 68,
    loss: 0.32,
    description:
      "Specialized in core banking and payment systems, building high-volume transaction processing modules and introducing modern Angular frontends to replace legacy JSP-based UIs.",
    highlights: [
      "Architected payment processing module handling 500K+ daily transactions at 99.9% uptime",
      "Led migration of legacy COBOL modules to Java microservices, cutting maintenance cost by 40%",
      "Implemented PCI-DSS compliant data handling across 5 critical banking services",
      "Introduced Angular frontend, improving UX scores by 60% over legacy JSP pages",
    ],
    tech: ["Java", "Spring Boot", "Angular", "Oracle DB", "REST APIs", "RabbitMQ", "Jenkins", "Microservices"],
  },
  {
    epoch: 2,
    phase: "Leadership",
    title: "Technical Lead",
    company: "Telecom Solutions Company",
    companyType: "Telecommunications",
    period: "Jan 2016 – Mar 2018",
    domain: "Telecom",
    domainColor: "#7c3aed",
    accuracy: 80,
    loss: 0.20,
    description:
      "First leadership role — led microservices architecture for a major telecom operator in 2016, building customer intelligence platforms for 2M+ subscribers. Introduced ML-based churn prediction and CI/CD practices.",
    highlights: [
      "Led microservices architecture design and delivery for a 2M+ subscriber telecom operator",
      "Designed event-driven Kafka-based platform reducing real-time processing latency by 70%",
      "Reduced churn prediction error by 25% with ML-based propensity models",
      "Cut release cycles from 6 weeks to 2 weeks via CI/CD pipelines and automated testing",
    ],
    tech: ["Java", "Spring Cloud", "Apache Kafka", "Angular", "Python", "Scikit-learn", "AWS", "Docker", "PostgreSQL"],
  },
  {
    epoch: 3,
    phase: "Growth",
    title: "Principal Engineer",
    company: "Pharmaceutical Technology Company",
    companyType: "Pharmaceuticals",
    period: "Apr 2018 – Dec 2020",
    domain: "Pharma",
    domainColor: "#f472b6",
    accuracy: 88,
    loss: 0.12,
    description:
      "Designed FDA/EMA-compliant clinical trial data platforms processing millions of patient records. Applied NLP to automate adverse event detection, reducing regulatory submission timelines from months to weeks.",
    highlights: [
      "Architected CDISC-compliant clinical trial data platform processing 10M+ patient records",
      "Reduced regulatory submission preparation from 3 months to 3 weeks through automation",
      "Built NLP-based adverse event detection achieving 92% precision on clinical notes",
      "Scaled engineering team from 5 to 18 engineers while maintaining delivery velocity",
    ],
    tech: ["Java", "Spring Boot", "Python", "TensorFlow", "NLP", "AWS", "Kubernetes", "MongoDB", "Angular"],
  },
  {
    epoch: 4,
    phase: "Innovation",
    title: "Staff Software Engineer",
    company: "RegTech & Compliance Platform",
    companyType: "Compliance & RegTech",
    period: "Jan 2021 – Dec 2023",
    domain: "Compliance",
    domainColor: "#fbbf24",
    accuracy: 93,
    loss: 0.07,
    description:
      "Joined a fast-growing RegTech startup to build LLM-powered regulatory monitoring platforms for financial institutions. Combined 10 years of enterprise depth with cutting-edge GenAI to automate compliance workflows.",
    highlights: [
      "Built AI-powered regulatory change management system reducing manual review by 80%",
      "Designed multi-tenant SaaS architecture serving 50+ financial institutions across 3 continents",
      "Implemented LLM-based document classification pipeline for 10K+ daily regulatory documents",
      "Achieved ISO 27001 and SOC 2 Type II certification for the platform",
    ],
    tech: ["Python", "LangChain", "OpenAI API", "Java", "Spring Boot", "React", "AWS", "Kubernetes", "PostgreSQL", "Redis"],
  },
  {
    epoch: 5,
    phase: "Mastery",
    title: "AI Architect & Builder",
    company: "BuildwithAiGiri Initiative",
    companyType: "Independent AI Research & Building",
    period: "Jan 2024 – Present",
    domain: "Generative AI",
    domainColor: "#00d4ff",
    accuracy: 96,
    loss: 0.04,
    description:
      "Running the BuildwithAiGiri initiative — a 25-week commitment to build and give away 25 AI-powered MVPs completely free. Each: 1-hour brainstorm, 7 days build, full code handover. No fees. No equity. Just building things that matter.",
    highlights: [
      "Launched BuildwithAiGiri: 25 AI MVPs in 25 weeks — complete code handover, zero cost",
      "Built multi-agent deep research platform (4 LangGraph agents: Retriever→Analyzer→Insight→Report)",
      "Developed PR Analyzer: AI-powered code review tool with contextual diff analysis",
      "Pursuing M.Tech in Data Science & AI at IIIT Dharwad while shipping production AI systems",
    ],
    tech: ["Python", "LangChain", "LangGraph", "Streamlit", "Next.js", "OpenRouter", "FastAPI", "Groq", "TensorFlow", "PyTorch"],
  },
];

export const featuredProjects = [
  {
    title: "Multi-Agent Deep Research Platform",
    client: "BuildwithAiGiri MVP #1",
    domain: "Generative AI",
    domainColor: "#00d4ff",
    description:
      "A 4-agent orchestration system for autonomous deep research. Agents: Contextual Retriever (web + ArXiv + news), Critical Analyzer, Insight Generator, and Report Builder — collaborating via LangGraph to produce structured research reports.",
    impact: "Produces professional research reports in minutes; 46 commits, 2 forks on GitHub",
    tech: ["Python", "LangGraph", "LangChain", "Streamlit", "OpenRouter", "Tavily Search", "ArXiv API"],
    github: "https://github.com/gengirish/multi-agent-deep-research",
  },
  {
    title: "PR Analyzer — AI Code Review",
    client: "BuildwithAiGiri MVP #2",
    domain: "Developer Tools",
    domainColor: "#7c3aed",
    description:
      "AI-powered pull request analyzer that understands code context, detects anti-patterns, suggests refactors, and provides line-level review comments integrated with GitHub.",
    impact: "Reduces manual code review time significantly with contextual, actionable AI feedback",
    tech: ["Python", "Claude API", "GitHub API", "FastAPI", "React", "TypeScript"],
    github: "https://github.com/gengirish/pr_analyser",
  },
  {
    title: "Hindi Reader — Neural Network (2012)",
    client: "Semiconductor Company",
    domain: "AI / NLP",
    domainColor: "#f472b6",
    description:
      "Built a Hindi text reader using neural networks in 2012 — before 'AI' was a household term. This project, done at a semiconductor firm, marked the beginning of a 12+ year journey into applied machine learning.",
    impact: "Proof that Girish's AI journey started a decade before the GenAI wave",
    tech: ["Neural Networks", "NLP", "Java", "C++"],
  },
  {
    title: "Banking Core Microservices Migration",
    client: "Banking Technology Firm",
    domain: "Banking & FinTech",
    domainColor: "#00d4ff",
    description:
      "End-to-end migration of a monolithic core banking system to event-driven microservices, enabling independent deployment and eliminating single points of failure for a 500K+ daily transaction platform.",
    impact: "40% reduction in maintenance cost, 99.9% uptime, 3× faster feature delivery",
    tech: ["Java", "Spring Boot", "Apache Kafka", "Docker", "Kubernetes", "Oracle DB", "Jenkins"],
  },
  {
    title: "Clinical Trial Data Intelligence Platform",
    client: "Global Pharmaceutical Company",
    domain: "Pharmaceuticals",
    domainColor: "#f472b6",
    description:
      "CDISC-compliant clinical trial data management and regulatory submission automation platform with NLP-based adverse event detection processing 10M+ patient records.",
    impact: "Submission prep time reduced from 3 months to 3 weeks; 92% NLP precision",
    tech: ["Python", "TensorFlow", "NLP", "Java", "Spring Boot", "AWS", "Kubernetes", "MongoDB"],
  },
  {
    title: "AI Regulatory Change Management",
    client: "RegTech & Compliance Startup",
    domain: "Compliance",
    domainColor: "#fbbf24",
    description:
      "LLM-powered regulatory monitoring that automatically classifies, summarizes, and routes 10K+ regulatory documents daily for 50+ financial institutions across 3 continents.",
    impact: "80% reduction in manual regulatory review; ISO 27001 + SOC 2 Type II certified",
    tech: ["Python", "LangChain", "OpenAI API", "AWS", "Kubernetes", "PostgreSQL", "React"],
  },
];

export const certifications = [
  {
    title: "M.Tech in Data Science & Artificial Intelligence",
    issuer: "IIIT Dharwad Online",
    date: "2023 – Present",
    description: "Postgraduate program in Deep Learning, NLP, Computer Vision, and Generative AI.",
    isCurrent: true,
    url: "https://www.iiitdwd.ac.in/",
  },
  {
    title: "Oracle Certified Java Programmer (OCJP)",
    issuer: "Oracle",
    date: "2013",
    description: "Advanced Java programming, concurrency, collections, and OOP design.",
    isCurrent: false,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2020",
    description: "AWS cloud services, architecture, security, and pricing fundamentals.",
    isCurrent: false,
  },
  {
    title: "B.E. in Computer Science Engineering",
    issuer: "Gogte Institute of Technology, Belgaum (VTU)",
    date: "2007 – 2011",
    description: "Bachelor's degree in CS&E — algorithms, data structures, software engineering.",
    isCurrent: false,
  },
];

export const testimonials = [
  {
    text: "'Genuine Expert' is the phrase that comes to mind when I think about Girish. I had the pleasure of working with him for 1.5 years. His ability to handle multiple tasks was unlike any I've seen before. He has very good problem solving and debugging skills. He has guided me like a mentor and I have learnt a lot from him. As a team member or a leader, Girish earns my highest recommendation. He would be an asset to any company.",
    author: "Phalani Medavarapu",
    relationship: "Colleague · 1.5 years together",
    linkedin: "https://www.linkedin.com/in/girish-b-hiremath/",
  },
  {
    text: "Girish is an amazing colleague to work with. He always keeps the team motivated and progressive with his proactiveness towards problem-solving. His core technical skills in Java, Angular JS, and functional skills in managing Agile projects stands exemplary for his team(s). He would be a great asset to any organization!",
    author: "Bharadwaj Sista",
    relationship: "Colleague",
    linkedin: "https://www.linkedin.com/in/girish-b-hiremath/",
  },
  {
    text: "The BuildwithAiGiri initiative is remarkable — Girish genuinely gives away complete AI MVPs for free, with full code and zero strings attached. His technical depth combined with his commitment to the community is rare and inspiring.",
    author: "Community Collaborator",
    relationship: "BuildwithAiGiri Community",
    linkedin: "https://www.linkedin.com/in/girish-b-hiremath/",
  },
];

export const domains = [
  { name: "Banking & FinTech", icon: "🏦" },
  { name: "Pharmaceuticals", icon: "🧬" },
  { name: "Telecommunications", icon: "📡" },
  { name: "Compliance & RegTech", icon: "⚖️" },
  { name: "Generative AI", icon: "🤖" },
  { name: "AI since 2012", icon: "🧠" },
];

export const skillJourney = [
  {
    skill: "Java",
    color: "#00d4ff",
    milestones: [
      { company: "Tech Services", year: 2011, level: 30 },
      { company: "Banking Firm", year: 2014, level: 70 },
      { company: "Telecom Co", year: 2016, level: 88 },
      { company: "Pharma Tech", year: 2018, level: 93 },
      { company: "RegTech", year: 2021, level: 95 },
      { company: "BuildwithAiGiri", year: 2024, level: 95 },
    ],
  },
  {
    skill: "Python / AI",
    color: "#34d399",
    milestones: [
      { company: "Tech Services", year: 2011, level: 10 },
      { company: "Banking Firm", year: 2014, level: 20 },
      { company: "Telecom Co", year: 2016, level: 50 },
      { company: "Pharma Tech", year: 2018, level: 72 },
      { company: "RegTech", year: 2021, level: 88 },
      { company: "BuildwithAiGiri", year: 2024, level: 96 },
    ],
  },
  {
    skill: "Angular",
    color: "#f472b6",
    milestones: [
      { company: "Tech Services", year: 2011, level: 5 },
      { company: "Banking Firm", year: 2014, level: 55 },
      { company: "Telecom Co", year: 2016, level: 80 },
      { company: "Pharma Tech", year: 2018, level: 85 },
      { company: "RegTech", year: 2021, level: 80 },
      { company: "BuildwithAiGiri", year: 2024, level: 75 },
    ],
  },
  {
    skill: "GenAI / LLMs",
    color: "#fbbf24",
    milestones: [
      { company: "Tech Services", year: 2011, level: 8 },
      { company: "Banking Firm", year: 2014, level: 10 },
      { company: "Telecom Co", year: 2016, level: 20 },
      { company: "Pharma Tech", year: 2018, level: 40 },
      { company: "RegTech", year: 2021, level: 70 },
      { company: "BuildwithAiGiri", year: 2024, level: 95 },
    ],
  },
];

export const projectConnections = [
  { from: "Tech Services", to: "Banking Firm", sharedSkills: ["Java", "Spring", "SQL"], strength: 3 },
  { from: "Banking Firm", to: "Telecom Co", sharedSkills: ["Java", "Angular", "Microservices", "REST APIs"], strength: 5 },
  { from: "Telecom Co", to: "Pharma Tech", sharedSkills: ["Java", "Python", "AWS", "Microservices"], strength: 6 },
  { from: "Pharma Tech", to: "RegTech", sharedSkills: ["Python", "NLP", "LLMs", "AWS", "Kubernetes"], strength: 7 },
  { from: "RegTech", to: "BuildwithAiGiri", sharedSkills: ["Python", "LangChain", "LLMs", "APIs", "React"], strength: 8 },
];

export const graphNodes = [
  { id: "Tech Services", domain: "Technology", color: "#34d399", years: "2011-2014", size: 2 },
  { id: "Banking Firm", domain: "Banking", color: "#00d4ff", years: "2014-2016", size: 3 },
  { id: "Telecom Co", domain: "Telecom", color: "#7c3aed", years: "2016-2018", size: 3 },
  { id: "Pharma Tech", domain: "Pharma", color: "#f472b6", years: "2018-2021", size: 4 },
  { id: "RegTech", domain: "Compliance", color: "#fbbf24", years: "2021-2024", size: 4 },
  { id: "BuildwithAiGiri", domain: "Generative AI", color: "#00d4ff", years: "2024-Now", size: 5 },
];
