export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Jaswanth G.",
  fullName: "Jaswanth G",
  headline: "Computer Science Student",
  subheadline: "Software Engineering • AI/ML",
  shortBio: "CSE student building AI/ML and software projects with Python, FastAPI, React, RAG and modern backend systems.",
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
    id: "claimproof-ai-hackathon",
    title: "ClaimProof AI — Motor Evidence Reviewer",
    event: "AI & RAG Innovation Hackathon Sprint",
    summary: "Built an AI-assisted motor claim evidence reviewer analyzing submitted documents against policy rules with cited recommendations.",
    result: "Flagship AI/ML Hackathon Winner",
    badge: "Flagship Hackathon Entry",
    isFlagship: true,
    links: { github: "https://github.com/JaswanthG-10/claimproof-ai" }
  },
  {
    id: "inovx-hackathon",
    title: "FixIt — Campus Issue Reporting Platform",
    event: "InovX 24-Hour Innovation Hackathon",
    summary: "Built collaborative campus issue-reporting workflow platform for students and admins under a 24-hour sprint.",
    result: "Selected for Technical Board Role at InovX Club",
    badge: "Technical Board Role",
    isFlagship: false,
    links: { github: "https://github.com/JaswanthG-10/fixit-backend" }
  },
  {
    id: "database-sprint",
    title: "REC Systems Codeathon",
    event: "Systems & Database Codeathon Sprint",
    summary: "Designed and implemented MySQL transactional storage and desktop banking GUI for account operations under time constraints.",
    result: "High Honor Systems Design Award",
    badge: "High Honor",
    isFlagship: false,
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
