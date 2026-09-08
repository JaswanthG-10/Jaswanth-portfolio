export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "ClaimProof", href: "#claimproof" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Jaswanth G.",
  fullName: "Jaswanth G",
  headline: "Computer Science Student | Software Development & AI/ML",
  subheadline: "Python • React • FastAPI • RAG • SQL",
  shortBio: "CSE student at Rajalakshmi Engineering College actively building toward Software Engineering & AI/ML Engineering—combining production software engineering, RAG pipelines, REST APIs, and full-stack web applications.",
  location: "Chennai, Tamil Nadu, India",
  institution: "Rajalakshmi Engineering College, Chennai",
  graduationYear: "2029",
  degree: "B.E. Computer Science and Engineering",
  photoUrl: "/jaswanth_photo.jpg",
  github: "https://github.com/JaswanthG-10",
  githubUsername: "JaswanthG-10",
  linkedin: "https://www.linkedin.com/in/jaswanth-g10",
  email: "jaswanthg274@gmail.com",
};

export const aboutData = {
  headline: "Building Software Engineering & Applied AI Solutions",
  bio: [
    "I am a Computer Science Engineering student at Rajalakshmi Engineering College, Chennai, specializing in software development, backend APIs, and applied AI systems.",
    "My focus spans conventional software engineering and applied AI—building production-ready Retrieval-Augmented Generation (RAG) applications, document verification systems, recommendation engines, and relational database applications.",
    "As a Technical Board Member at InovX Club and open-source contributor, I practice modern GitHub team workflows (PRs, code reviews, feature branching) and contribute to community software development."
  ],
  stats: [
    { label: "Core Projects Built", value: "5+" },
    { label: "Specialization", value: "Software & AI/ML" },
    { label: "Degree Expected", value: "2029" },
    { label: "Core Stack", value: "Python / React / FastAPI / SQL" }
  ]
};

export const claimProofData = {
  id: "claimproof-ai",
  title: "ClaimProof AI — Flagship Evidence Reviewer",
  subtitle: "AI-Assisted Insurance Claim Evidence Verification Engine",
  category: "Flagship Applied AI / RAG",
  problem: "Motor insurance claim processing requires laborious manual verification of submitted evidence documents against complex policy rules.",
  engineeringApproach: "Engineered an AI-assisted claim evidence reviewer that parses submitted claim documents against policy rules, identifies missing or conflicting evidence, and generates cited recommendations with full auditability.",
  role: "Lead Systems Architect & Full-Stack Developer",
  techStack: ["Next.js 14", "React", "TypeScript", "Supabase", "AI / LLM", "RAG Pipeline", "PDF Processing"],
  capabilityDemonstrated: "LLM integration, document evidence evaluation, RAG pipeline architecture, Supabase auth/storage, and Next.js full-stack development.",
  links: {
    github: "https://github.com/JaswanthG-10/claimproof-ai",
    demo: "#"
  },
  highlights: [
    "Automated document evidence evaluation against complex policy rulesets",
    "Generates evidence gap flags and cited policy recommendations",
    "Production stack using Next.js 14, Supabase Auth/Storage, and RAG evaluation"
  ]
};

export const independentProjects = [
  {
    id: "iris-ai",
    title: "Iris AI / DocuMind AI — Document Intelligence",
    tagline: "RAG-based document intelligence app with grounded page citations",
    glyph: "FileText",
    category: "AI/ML & RAG",
    engineeringApproach: "Engineered a RAG-based document intelligence application that lets users upload documents and ask questions with document-grounded answers and page citations.",
    techStack: ["Python", "FastAPI", "Next.js", "React", "ChromaDB", "Embeddings", "RAG", "OCR", "SQLAlchemy", "JWT"],
    capabilityDemonstrated: "Vector embeddings, ChromaDB vector store, FastAPI REST backend, document OCR parsing, and page-level citation search.",
    links: {
      github: "https://github.com/JaswanthG-10/iris-ai",
      demo: "https://iris-ai-document-reade.vercel.app"
    }
  },
  {
    id: "lumina-ai",
    title: "Lumina AI — Movie Recommendation System",
    tagline: "Content-based movie recommendation system via cosine similarity",
    glyph: "Film",
    category: "AI/ML",
    engineeringApproach: "Developed a content-based movie recommendation system that recommends similar movies using cosine similarity and provides movie information, posters, ratings, and trailers.",
    techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Cosine Similarity", "React/Next.js"],
    capabilityDemonstrated: "Machine Learning fundamentals, cosine similarity feature vectors, Pandas data preprocessing, and React frontend integration.",
    links: {
      github: "https://github.com/JaswanthG-10/AI_MOVIE_RECOMMENDATION_PROJECT",
      demo: "https://ai-movie-recommendation-project.vercel.app"
    }
  },
  {
    id: "fixit",
    title: "FixIt — Campus Issue-Reporting Platform",
    tagline: "Collaborative campus issue reporting and resolution workflow",
    glyph: "CheckSquare",
    category: "Full-Stack & Backend",
    engineeringApproach: "Created a collaborative campus issue-reporting platform where students can report and track issues while administrators manage their resolution workflow.",
    techStack: ["Backend APIs", "Database", "Authentication", "Git/GitHub", "Web Development"],
    capabilityDemonstrated: "Collaborative Git/GitHub development, backend REST APIs, multi-role user workflows, and issue lifecycle management.",
    links: {
      github: "https://github.com/JaswanthG-10/fixit-backend",
      demo: "#"
    }
  },
  {
    id: "bank-mgmt",
    title: "Bank Management System",
    tagline: "Desktop banking app with persistent database transaction storage",
    glyph: "Landmark",
    category: "Desktop & Database",
    engineeringApproach: "Developed a desktop banking application implementing core account and transaction operations with persistent database storage.",
    techStack: ["Python", "Tkinter", "MySQL"],
    capabilityDemonstrated: "Desktop GUI development, relational MySQL schema design, transactional integrity, and CRUD implementation.",
    links: {
      github: "https://github.com/JaswanthG-10/bank-management-system",
      demo: "#"
    }
  }
];

export const hackathonsData = [
  {
    id: "inovx-hackathon",
    title: "InovX Innovation Challenge",
    event: "InovX Technical Board Hackathon Sprint",
    summary: "Built the prototype for FixIt—a campus issue resolution workflow—under a 24-hour sprint.",
    result: "Selected for Technical Board Nomination at InovX Club",
    badge: "Selected / Board Role",
    links: { github: "https://github.com/JaswanthG-10/fixit-backend" }
  },
  {
    id: "ai-document-hackathon",
    title: "DocuMind RAG Hackathon",
    event: "Applied AI & Document Intelligence Sprint",
    summary: "Developed Iris AI document parsing pipeline evaluating RAG retrieval accuracy on complex PDFs.",
    result: "Featured Project Showcase & Community Award",
    badge: "Featured Prototype",
    links: { github: "https://github.com/JaswanthG-10/iris-ai", demo: "https://iris-ai-document-reade.vercel.app" }
  },
  {
    id: "database-sprint",
    title: "REC Systems Codeathon",
    event: "Database Engineering & Desktop App Sprint",
    summary: "Designed and implemented MySQL transactional storage and desktop GUI for banking operations.",
    result: "High Honor Evaluation in Systems Design",
    badge: "High Honor",
    links: { github: "https://github.com/JaswanthG-10/bank-management-system" }
  }
];

export const skillsData = {
  categories: [
    {
      name: "Programming",
      color: "from-red-500 to-amber-500",
      skills: ["Python", "Java", "C", "SQL", "JavaScript / TypeScript"]
    },
    {
      name: "Frontend Development",
      color: "from-cyan-500 to-blue-500",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      name: "Backend & Databases",
      color: "from-indigo-500 to-purple-600",
      skills: ["FastAPI", "REST APIs", "MySQL", "Supabase", "SQLAlchemy", "Authentication / JWT"]
    },
    {
      name: "AI / ML Engineering",
      color: "from-pink-500 to-rose-600",
      skills: [
        "Machine Learning fundamentals",
        "Retrieval-Augmented Generation (RAG)",
        "LLM integration",
        "Embeddings",
        "Vector databases",
        "ChromaDB",
        "Document processing",
        "OCR",
        "Cosine similarity",
        "Pandas",
        "Scikit-learn"
      ]
    },
    {
      name: "Developer Tools",
      color: "from-emerald-500 to-teal-600",
      skills: [
        "Git",
        "GitHub",
        "GitHub collaborative workflow",
        "Vercel",
        "VS Code",
        "Figma",
        "AI-assisted development tools"
      ]
    }
  ],
  currentlyBuilding: [
    { name: "Advanced Python", detail: "Metaprogramming, async I/O patterns & concurrency" },
    { name: "RAG & LLM Systems", detail: "Citation tracking, vector chunking & evidence evaluation" },
    { name: "Full-Stack Web Engineering", detail: "Next.js 14, Supabase Auth & responsive UI components" },
    { name: "Open-Source Workflow", detail: "Pull requests, code reviews & multi-developer branching" }
  ]
};

export const experienceData = [
  {
    role: "Technical Board Member",
    organization: "InovX Club",
    period: "2025 — Present",
    type: "Leadership & Community",
    description: "Selected through technical/project-based evaluation. Participate in technical projects, peer collaboration, and software development activities.",
    badge: "Club Leadership"
  },
  {
    role: "Open-Source Contributor",
    organization: "Independent & Community",
    period: "Ongoing",
    type: "Open Source",
    description: "Hands-on experience with the GitHub contribution workflow: repositories, forks, branches, commits, pull requests, code reviews, and merges.",
    badge: "Open Source"
  },
  {
    role: "Project & Hackathon Builder",
    organization: "Hackathons & Autonomous Projects",
    period: "2024 — Present",
    type: "Projects & Competition",
    description: "Built projects across AI/ML, RAG, full-stack web, databases, and desktop apps—working both independently and in collaborative GitHub-based teams.",
    badge: "Hackathons"
  }
];

export const educationData = {
  degree: "B.E. Computer Science and Engineering",
  institution: "Rajalakshmi Engineering College, Chennai",
  location: "Chennai, Tamil Nadu, India",
  period: "Expected Graduation 2029",
  specialization: "Software Engineering, AI/ML & RAG Systems",
  highlights: [
    "Computer Science Engineering student specializing in Software Development & AI/ML",
    "Selected Technical Board Member at InovX Club",
    "Active in GitHub open-source contribution workflows, hackathons, and full-stack development"
  ]
};
