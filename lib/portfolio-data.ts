export const portfolioData = {
  person: {
    name: "Kushagra Rohatgi",
    displayRole: "Full-stack developer",
    introduction: "I'm Kushagra. I build thoughtful interfaces, reliable APIs, and the systems connecting them.",
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
  home: {
    headline: ["Built to feel good.", "Engineered", "to last."],
    workTitle: "Things I've shipped.",
    approachTitle: "Good on the surface. Solid underneath.",
    approachDescription: "From a useful browser extension to a production API, I care about the whole experience: how it feels, how it works, and how it holds up.",
    stackLine: ["React / Next.js", "Node.js / TypeScript", "APIs / Data / AI"],
    featured: ["chatbot", "qr-contact-locker", "linkedin-automation", "notepad"],
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
      name: "QR Contact Locker",
      slug: "qr-contact-locker",
      shortDescription: "One scan. A simpler way to share a contact.",
      tone: "butter",
      previewKind: "screenshot",
      type: "QR Contact Workflow App",
      liveUrl: null,
      repoUrl: "https://github.com/kus123123/qrcode-contact-form-generator",
      imageUrl: "/projects/qr-contact-locker.png",
      imageAlt: "QR Contact Locker product interface screenshot",
      summary:
        "Built a QR-driven contact sharing app where contacts are created from an admin screen, shared via QR, and locked into read-only mode after the first save. The app is backed by Postgres and structured for server deployment.",
      outcome:
        "Turned a one-scan contact flow into a deployable product with Postgres-backed persistence, lock-after-save behavior, and Docker-friendly deployment.",
      stack: ["JavaScript", "Postgres", "QR Code", "HTML", "Docker"],
    },
    {
      name: "Chatbot",
      slug: "chatbot",
      shortDescription: "Conversations with context. Answers grounded in your files.",
      tone: "apricot",
      previewKind: "screenshot",
      type: "Full-Stack AI Chat App",
      liveUrl: null,
      repoUrl: "https://github.com/kus123123/chatbot",
      imageUrl: "/projects/chatbot.png",
      imageAlt: "Chatbot application screenshot",
      summary:
        "Built a Node and React chatbot with Express APIs, Gemini-powered file search, and Firebase-backed chat persistence to support interactive, file-aware conversations.",
      outcome:
        "Delivered a full-stack chatbot experience with persisted chat history, file-search capability, and a production-facing frontend deployment.",
      stack: ["Node.js", "React", "Express", "Gemini API", "Firebase", "Vite"],
    },
    {
      name: "LinkedIn Automation with n8n",
      slug: "linkedin-automation",
      shortDescription: "From a fresh idea to a published post. Automatically.",
      tone: "mint",
      previewKind: "workflow",
      type: "AI Content and Posting Automation",
      liveUrl: null,
      repoUrl: null,
      imageUrl: "/projects/linkedin-n8n.svg",
      imageAlt: "LinkedIn automation workflow preview in n8n",
      summary:
        "Built an n8n workflow that schedules LinkedIn content generation, creates backend-focused posts with OpenRouter, parses structured output, generates supporting visuals with Gemini, and publishes directly to LinkedIn.",
      outcome:
        "Delivered an end-to-end content pipeline from topic/theme generation to image-backed post publishing, reducing manual drafting and posting effort while keeping technical tone consistent.",
      stack: [
        "n8n",
        "OpenRouter",
        "Gemini Image Generation",
        "LinkedIn API",
        "Workflow Automation",
        "JavaScript (Code Nodes)",
      ],
    },
    {
      name: "Resume Autofill Chrome Extension",
      slug: "resume-autofill",
      shortDescription: "Less form filling. More time for the next opportunity.",
      tone: "blue",
      previewKind: "abstract",
      type: "Chrome Extension for Job Applications",
      liveUrl: null,
      repoUrl: null,
      imageUrl: "/projects/placeholder.svg",
      imageAlt: "Resume autofill extension preview placeholder",
      summary:
        "Built a Chrome extension that stores a reusable application profile, learns answers from focused fields, uploads locally stored resumes, drafts open-ended responses with OpenAI, and syncs structured data through Chrome storage.",
      outcome:
        "Combined profile sync, heuristic field matching, local resume storage, AI-assisted drafting, and reusable form learning into a practical autofill workflow for job applications.",
      stack: [
        "Chrome Extension",
        "JavaScript",
        "chrome.storage",
        "OpenAI API",
        "Google Identity",
      ],
    },
    {
      name: "Notepad",
      slug: "notepad",
      shortDescription: "A home for your next idea, right beside your browser.",
      tone: "blue",
      previewKind: "notes",
      type: "Chrome Side Panel Extension",
      liveUrl: null,
      repoUrl: null,
      imageUrl: "/projects/notepad.avif",
      imageAlt: "Notepad Chrome extension visual",
      summary:
        "Built a Chrome side-panel notepad extension with Google sign-in, per-user multi-page notes in Firestore, rich text editing, and inline flow-diagram support for quick ideation inside the browser.",
      outcome:
        "Shipped a persistent browser-native workspace with debounced autosave, page management, and image paste/upload so notes and diagrams stay organized without leaving active tabs.",
      stack: [
        "Chrome Extension (MV3)",
        "JavaScript",
        "HTML/CSS",
        "Firebase Auth",
        "Cloud Firestore",
        "Chrome Side Panel API",
      ],
    },
    {
      name: "PDF AI Helper",
      slug: "pdf-ai-helper",
      shortDescription: "Ask your documents. Find the answer that matters.",
      tone: "butter",
      previewKind: "screenshot",
      type: "Document Intelligence Platform",
      liveUrl: "https://www.pdfaihelper.com/",
      repoUrl: null,
      imageUrl: "/projects/pdf-ai-helper.png",
      imageAlt: "PDF AI Helper product screenshot",
      summary:
        "Built a full-stack platform for uploading PDFs and querying them with natural language. The backend handled ingestion, extraction, semantic retrieval, vector search, and low-latency answer generation for large document sets.",
      outcome:
        "Created a production-ready document intelligence workflow with scalable file processing, RAG-backed Q&A, and faster retrieval for large PDFs.",
      stack: ["Node.js", "PostgreSQL", "RAG", "Vector Search", "OpenAI APIs"],
    },
    {
      name: "Data Portal - Startup Investors",
      slug: "data-portal",
      shortDescription: "Secure data access, built for real production traffic.",
      tone: "mint",
      previewKind: "abstract",
      type: "Secure Data Platform",
      liveUrl: null,
      repoUrl: null,
      imageUrl: "/projects/placeholder.svg",
      imageAlt: "Secure data platform preview placeholder",
      summary:
        "Developed a secure backend with high-volume API handling, PCI-conscious payment integration, JWT-driven auth, and server-side protection strategies such as rate limiting and timeout control.",
      outcome:
        "Supported 10,000+ API requests daily, achieved 99.9% transaction success, and reduced latency by 35% while maintaining strong data security.",
      stack: ["Node.js", "Express", "Razorpay", "JWT", "Rate Limiting"],
    },
    {
      name: "Natural Language to SQL Query API",
      slug: "natural-language-sql",
      shortDescription: "A question in plain English. An answer from your database.",
      tone: "apricot",
      previewKind: "abstract",
      type: "AI Query Interface",
      liveUrl: null,
      repoUrl: null,
      imageUrl: "/projects/placeholder.svg",
      imageAlt: "Natural language to SQL API preview placeholder",
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
