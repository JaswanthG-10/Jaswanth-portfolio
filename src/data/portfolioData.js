export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
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

export const projectsData = [
  {
    id: "claimproof-ai",
    title: "ClaimProof AI — Motor Claim Evidence Reviewer",
    tagline: "AI-assisted insurance evidence reviewer with policy rule validation",
    isFlagship: true,
    glyph: "ShieldCheck",
    category: "AI/ML & RAG",
    problem: "Motor insurance claim processing requires laborious manual verification of submitted evidence documents against complex policy rules.",
    engineeringApproach: "Built an AI-assisted claim evidence reviewer that analyzes submitted claim documents against policy rules, identifies missing or conflicting evidence, and provides cited recommendations.",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "AI/LLM", "RAG", "PDF Processing"],
    capabilityDemonstrated: "LLM integration, document evidence evaluation, RAG pipeline architecture, Supabase auth/storage, and Next.js full-stack development.",
    links: {
      github: "https://github.com/JaswanthG-10/claimproof-ai",
      demo: "#"
    },
    highlights: [
      "Analyzes claim evidence documents against policy rules automatically",
      "Flags missing or conflicting evidence with cited recommendations",
      "Built with Next.js, TypeScript, Supabase, and RAG document evaluation"
    ]
  },
  {
    id: "iris-ai",
    title: "Iris AI / DocuMind AI — Document Intelligence",
    tagline: "RAG-based document intelligence app with grounded page citations",
    isFlagship: true,
    glyph: "FileText",
    category: "AI/ML & RAG",
    problem: "Extracting precise information from lengthy PDF documents manually is slow and error-prone.",
    engineeringApproach: "Engineered a RAG-based document intelligence application that lets users upload documents and ask questions with document-grounded answers and page citations.",
    techStack: ["Python", "FastAPI", "Next.js", "React", "ChromaDB", "Embeddings", "RAG", "OCR", "SQLAlchemy", "JWT"],
    capabilityDemonstrated: "Vector embeddings, ChromaDB vector store, FastAPI REST backend, document OCR parsing, and page-level citation search.",
    links: {
      github: "https://github.com/JaswanthG-10/iris-ai",
      demo: "https://iris-ai-document-reade.vercel.app"
    },
    highlights: [
      "Uploads & parses PDF/DOCX/TXT files with OCR text extraction",
      "Vector embeddings stored in ChromaDB for grounded answers",
      "FastAPI REST backend with JWT authentication and Next.js UI"
    ]
  },
  {
    id: "lumina-ai",
    title: "Lumina AI — Movie Recommendation System",
    tagline: "Content-based movie recommendation system via cosine similarity",
    isFlagship: false,
    glyph: "Film",
    category: "AI/ML",
    problem: "Standard movie platforms recommend titles based only on simple genres rather than storyline similarity.",
    engineeringApproach: "Developed a content-based movie recommendation system that recommends similar movies using cosine similarity and provides movie information, posters, ratings, and trailers.",
    techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Cosine Similarity", "React/Next.js"],
    capabilityDemonstrated: "Machine Learning fundamentals, cosine similarity feature vectors, Pandas data preprocessing, and React frontend integration.",
    links: {
      github: "https://github.com/JaswanthG-10/AI_MOVIE_RECOMMENDATION_PROJECT",
      demo: "https://ai-movie-recommendation-project.vercel.app"
    },
    highlights: [
      "Calculates cosine similarity vectors across plot & feature metadata",
      "Displays posters, ratings, trailers, and recommended movies",
      "Interactive discovery interface built with React/Next.js"
    ]
  },
  {
    id: "fixit",
    title: "FixIt — Campus Issue-Reporting Platform",
    tagline: "Collaborative campus issue reporting and resolution workflow",
    isFlagship: false,
    glyph: "CheckSquare",
    category: "Full-Stack & Backend",
    problem: "Campus maintenance issues lack a centralized platform for reporting, tracking, and priority management.",
    engineeringApproach: "Created a collaborative campus issue-reporting platform where students can report and track issues while administrators manage their resolution workflow.",
    techStack: ["Backend APIs", "Database", "Authentication", "Git/GitHub", "Web Development"],
    capabilityDemonstrated: "Collaborative Git/GitHub development, backend REST APIs, multi-role user workflows, and issue lifecycle management.",
    links: {
      github: "https://github.com/JaswanthG-10/fixit-backend",
      demo: "#"
    },
    highlights: [
      "RESTful API design for logging and resolving campus issues",
      "Role-based authorization for students and admin managers",
      "Built collaboratively using GitHub team branching workflow"
    ]
  },
  {
    id: "bank-mgmt",
    title: "Bank Management System",
    tagline: "Desktop banking app with persistent database transaction storage",
    isFlagship: false,
    glyph: "Landmark",
    category: "Desktop & Database",
    problem: "Core banking workflows require structured relational database storage and accurate transaction logging.",
    engineeringApproach: "Developed a desktop banking application implementing core account and transaction operations with persistent database storage.",
    techStack: ["Python", "Tkinter", "MySQL"],
    capabilityDemonstrated: "Desktop GUI development, relational MySQL schema design, transactional integrity, and CRUD implementation.",
    links: {
      github: "https://github.com/JaswanthG-10/bank-management-system",
      demo: "#"
    },
    highlights: [
      "Tkinter graphical user interface for banking operations",
      "Relational MySQL schema ensuring transactional data safety",
      "Complete support for account creation, balance checks, and transfers"
    ]
  }
];

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
