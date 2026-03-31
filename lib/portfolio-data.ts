export const portfolioData = {
  person: {
    name: "Kushagra Rohatgi",
    role: "Senior Backend Developer",
    lead: "I build backend systems that stay reliable, readable, and fast as products scale.",
    currentFocus:
      "Currently building Node.js and TypeScript platform services for onboarding, content, and AI-driven workflows at Unlimits.",
    location: "Noida, India",
    email: "kushagra746@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/kushagra746/",
    linkedinLabel: "linkedin.com/in/kushagra746",
    resumeUrl: "/resume/kushagra-rohatgi-resume.pdf",
    status: "Senior Backend Developer",
    summary:
      "I design backend systems around clean API contracts, secure authentication, low-latency data access, and operational clarity. My work spans Node.js, TypeScript, PostgreSQL, Redis, cloud automation, real-time systems, and AI retrieval pipelines.",
    codeSnippet: `const backendProfile = {\n  runtime: [\"Node.js\", \"TypeScript\", \"Express\"],\n  data: [\"PostgreSQL\", \"Redis\", \"MongoDB\", \"Cosmos DB\"],\n  auth: [\"AWS Cognito\", \"JWT\", \"RBAC\"],\n  cloud: [\"Azure\", \"Docker\", \"Ansible\", \"GitHub Actions\"],\n  ai: [\"RAG\", \"OpenAI APIs\", \"Vector Search\"],\n  principle: \"make the system easier to reason about before making it clever\"\n};`,
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
  impactMetrics: [
    {
      value: "40%",
      label: "Latency Reduction",
      detail:
        "Improved API performance through schema tuning, indexing strategy, and Redis-backed caching.",
    },
    {
      value: "10k+",
      label: "Daily API Requests",
      detail:
        "Handled sustained production traffic for a secure investor-facing data platform.",
    },
    {
      value: "15+",
      label: "Azure VMs Automated",
      detail:
        "Reduced manual ops through Ansible-driven provisioning and repeatable deployment workflows.",
    },
  ],
  principles: [
    {
      title: "Clarity First",
      description:
        "I prefer backend designs that are easy to trace, review, and extend over abstractions that only look impressive in isolation.",
    },
    {
      title: "Performance With Purpose",
      description:
        "Latency work matters when it improves the product experience, so I focus on indexes, cache placement, and simpler request paths before over-engineering.",
    },
    {
      title: "Operational Discipline",
      description:
        "Deployment automation, secure defaults, and stable contracts are part of product quality, not afterthoughts after the code ships.",
    },
  ],
  capabilities: [
    {
      title: "Platform APIs",
      headline: "Designing backends that hold steady as products evolve",
      focus: "Core services",
      description:
        "I build service layers for onboarding, content operations, payments, notifications, and asynchronous workflows with an emphasis on maintainable contracts and predictable behavior.",
      stack: ["Node.js", "TypeScript", "Express", "REST", "WebSockets"],
    },
    {
      title: "Data Systems",
      headline: "Making data access fast enough to feel invisible",
      focus: "Persistence",
      description:
        "My backend work leans on practical data modeling, index design, cache placement, and query shaping across PostgreSQL, Redis, MongoDB, and Cosmos DB.",
      stack: ["PostgreSQL", "Redis", "MongoDB", "Cosmos DB", "Apache Solr"],
    },
    {
      title: "Auth and Security",
      headline: "Securing products without slowing teams down",
      focus: "Access control",
      description:
        "I implement Cognito and JWT-based authentication, role-based access control, rate limiting, and payment flows that keep the security model clear and production-friendly.",
      stack: ["AWS Cognito", "JWT", "RBAC", "Razorpay", "Stripe"],
    },
    {
      title: "AI Workflows",
      headline: "Turning LLM features into backend infrastructure",
      focus: "Retrieval",
      description:
        "I build RAG pipelines, vector-search-backed retrieval, document ingestion services, and context-aware APIs that give AI features a stable operational backbone.",
      stack: ["OpenAI APIs", "RAG", "Supabase", "Redis Vectors", "Semantic Search"],
    },
  ],
  projects: [
    {
      name: "PDF AI Helper",
      type: "Document Intelligence Platform",
      liveUrl: "https://www.pdfaihelper.com/",
      summary:
        "Built a full-stack platform for uploading PDFs and querying them with natural language. The backend handled ingestion, extraction, semantic retrieval, vector search, and low-latency answer generation for large document sets.",
      outcome:
        "Created a production-ready document intelligence workflow with scalable file processing, RAG-backed Q&A, and faster retrieval for large PDFs.",
      stack: ["Node.js", "PostgreSQL", "RAG", "Vector Search", "OpenAI APIs"],
    },
    {
      name: "Data Portal - Startup Investors",
      type: "Secure Data Platform",
      liveUrl: null,
      summary:
        "Developed a secure backend with high-volume API handling, PCI-conscious payment integration, JWT-driven auth, and server-side protection strategies such as rate limiting and timeout control.",
      outcome:
        "Supported 10,000+ API requests daily, achieved 99.9% transaction success, and reduced latency by 35% while maintaining strong data security.",
      stack: ["Node.js", "Express", "Razorpay", "JWT", "Rate Limiting"],
    },
    {
      name: "Natural Language to SQL Query API",
      type: "AI Query Interface",
      liveUrl: null,
      summary:
        "Built an API that translates natural language prompts into PostgreSQL queries using OpenAI, making structured data accessible to non-technical users through a backend-first interface.",
      outcome:
        "Improved database accessibility with AI-assisted querying while keeping the integration centered around clean API boundaries and structured results.",
      stack: ["Node.js", "Express", "PostgreSQL", "OpenAI GPT-4", "API Design"],
    },
  ],
  experience: [
    {
      company: "Unlimits",
      role: "Senior Backend Developer",
      location: "Gurugram, India",
      period: "May 2025 - Present",
      highlights: [
        "Designed and built a scalable Node.js and TypeScript backend platform for onboarding, content management, and AI-driven workflows.",
        "Implemented AWS Cognito and JWT-based authentication with role-aware access control across multiple environments.",
        "Delivered low-latency REST and real-time APIs with Express and WebSockets for event-driven product features.",
        "Built data-intensive services on PostgreSQL and Redis and improved API latency by more than 40% through schema, index, and caching work.",
        "Implemented RAG workflows with vector stores and OpenAI APIs to power semantic search, contextual memory, and recommendations.",
      ],
    },
    {
      company: "Factacy Private Limited",
      role: "Backend Developer",
      location: "Gurugram, India",
      period: "Oct 2023 - May 2025",
      highlights: [
        "Shipped a scalable backend architecture on Node.js, Express, TypeScript, Azure VMs, and Azure Apps with GitHub Actions based CI/CD.",
        "Used Azure Functions, Cosmos DB triggers, and HTTP triggers to support a SaaS workflow while reducing operational costs.",
        "Integrated Apache Solr for cloud-agnostic text search and reduced search-related costs by 15%.",
        "Dockerized services for isolated environments and smoother inter-container communication.",
        "Automated deployment and management of 15+ Azure VMs with Ansible, cutting manual intervention significantly.",
      ],
    },
    {
      company: "Technocraft Solution",
      role: "Software Developer",
      location: "Agra, India",
      period: "Jul 2020 - Jul 2021",
      highlights: [
        "Developed and maintained backend services in JavaScript, TypeScript, and Node.js with an emphasis on robust API creation.",
        "Contributed to full-stack delivery with React, HTML, CSS, and JavaScript when product needs required it.",
        "Improved runtime performance by combining Redis caching with MongoDB-backed persistence.",
      ],
    },
  ],
  skillGroups: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "C++", "HTML5", "CSS"],
    },
    {
      label: "Frameworks",
      items: ["Node.js", "Express", "React.js", "Deno", "FastAPI", "Flask"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "Redis", "MongoDB", "Cosmos DB", "GraphQL"],
    },
    {
      label: "Cloud and Ops",
      items: [
        "Azure",
        "Docker",
        "Kubernetes",
        "Ansible",
        "GitHub Actions",
        "Terraform",
      ],
    },
    {
      label: "Search and AI",
      items: ["Apache Solr", "Elastic Search", "RAG", "OpenAI APIs", "Semantic Search"],
    },
    {
      label: "Payments and Tools",
      items: ["AWS Cognito", "Stripe", "Razorpay", "Firebase", "Git", "GitHub"],
    },
  ],
  education: [
    {
      degree: "MCA in Cloud Computing",
      school: "Galgotias University",
      period: "Sep 2022 - Jun 2024",
      detail: "CGPA: 8.2/10",
    },
    {
      degree: "BSc in Food Technology",
      school: "Banaras Hindu University",
      period: "2017 - 2020",
      detail: "CGPA: 7.8/10",
    },
  ],
} as const;
