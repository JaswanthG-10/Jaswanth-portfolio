export const personalInfo = {
  name: "Jaswanth G.",
  fullName: "Jaswanth G",
  role: "AI/ML-Focused CSE Student | Backend & Intelligent Application Development",
  shortBio: "Computer Science Engineering student specializing in AI/ML engineering, RAG pipelines, robust backend engineering, and end-to-end intelligent applications.",
  location: "Chennai, Tamil Nadu, India",
  institution: "Rajalakshmi Engineering College",
  graduationYear: "2029",
  degree: "B.E. Computer Science and Engineering",
  github: "https://github.com/JaswanthG-10",
  githubUsername: "JaswanthG-10",
  linkedin: "https://www.linkedin.com/in/jaswanth-g10",
  email: "jaswanthg274@gmail.com",
};

export const aboutData = {
  headline: "Architecting End-to-End Intelligent Systems",
  bio: [
    "I am a Computer Science Engineering student focused on AI, machine learning, and end-to-end intelligent application development—combining core AI/ML concepts with production APIs, relational & vector databases, retrieval pipelines, authentication, and modern web interfaces.",
    "Rather than viewing machine learning as isolated algorithms, I build complete software solutions—integrating Retrieval-Augmented Generation (RAG), vector embeddings, document OCR parsing, FastAPI REST backends, and reactive interfaces into seamless, weightless experiences.",
    "Technical board member at InovX Club and open-source enthusiast, committed to continuous mastery in advanced Python, data structures, and production-grade software engineering."
  ],
  stats: [
    { label: "Core Projects Built", value: "4+" },
    { label: "Specialization", value: "AI/ML & Backend" },
    { label: "Degree Expected", value: "2029" },
    { label: "Focus Stack", value: "Python / FastAPI / React" }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      color: "from-indigo-500 to-purple-600",
      skills: ["Python", "Java", "C", "SQL"]
    },
    {
      name: "AI / ML Engineering",
      color: "from-purple-500 to-pink-500",
      skills: [
        "Machine Learning",
        "Content-Based Recommendation",
        "Cosine Similarity",
        "RAG (Retrieval-Augmented Gen)",
        "Embeddings",
        "Semantic Retrieval",
        "Vector Search"
      ]
    },
    {
      name: "Backend Engineering",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "FastAPI",
        "REST APIs",
        "SQLAlchemy",
        "JWT Authentication",
        "Pydantic Validation"
      ]
    },
    {
      name: "Frontend & Web",
      color: "from-sky-400 to-indigo-500",
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      name: "Databases & Storage",
      color: "from-teal-400 to-emerald-500",
      skills: ["MySQL", "ChromaDB", "Vector Databases"]
    },
    {
      name: "Document & AI Processing",
      color: "from-amber-500 to-orange-500",
      skills: [
        "PyMuPDF",
        "OCR",
        "Document Parsing",
        "Chunking",
        "Citation-Aware Retrieval"
      ]
    },
    {
      name: "Developer Tools",
      color: "from-slate-600 to-slate-800",
      skills: ["Git", "GitHub", "Vercel", "Uvicorn", "VS Code", "Postman"]
    }
  ],
  currentlyBuilding: [
    { name: "Advanced Python", detail: "Deep dive into async patterns, concurrency & metaprogramming" },
    { name: "DSA (Data Structures & Algorithms)", detail: "Algorithmic problem solving & graph/tree optimizations" },
    { name: "ML Engineering", detail: "Pipeline architecture, feature engineering & model serving" },
    { name: "RAG Architectures", detail: "Advanced chunking, hybrid retrieval & reranking strategies" },
    { name: "Open Source", detail: "Contributing to community AI & backend developer tooling" },
    { name: "Backend Engineering", detail: "High-throughput API design & microservices architecture" }
  ]
};

export const projectsData = [
  {
    id: "iris-ai",
    title: "Iris AI — Document Intelligence Platform",
    tagline: "Flagship RAG Platform with Source & Page-Aware Retrieval",
    isFlagship: true,
    glyph: "FileText", // Document/scan glyph
    category: "AI/ML & RAG",
    problem: "Users need a faster way to understand and query information in complex documents without manual, time-consuming searches.",
    engineeringApproach: "Built an AI-powered platform ingesting PDF/DOCX/TXT files with OCR, semantic chunking, vector embeddings, and a RAG pipeline featuring source and page-aware citation retrieval backed by JWT authentication.",
    techStack: ["Python", "FastAPI", "ChromaDB", "SQLAlchemy", "Pydantic", "JWT", "Next.js", "React", "PyMuPDF"],
    capabilityDemonstrated: "Applied RAG architecture, document processing, backend APIs, user authentication, vector databases, and seamless frontend-backend integration.",
    links: {
      github: "https://github.com/JaswanthG-10/iris-ai",
      demo: "#"
    },
    highlights: [
      "PDF/DOCX/TXT parsing & OCR text extraction with PyMuPDF",
      "Vector embeddings & semantic chunking stored in ChromaDB",
      "Page and source citation tracking in RAG responses",
      "FastAPI REST backend with JWT security & Next.js frontend"
    ]
  },
  {
    id: "lumina-ai",
    title: "Lumina AI — Movie Recommendation System",
    tagline: "Content-Based Recommendation Engine via Vector Similarity",
    isFlagship: false,
    glyph: "Film", // Film-reel glyph
    category: "AI/ML",
    problem: "Movie discovery is inefficient without personalized or similarity-based content guidance.",
    engineeringApproach: "Engineered a content-based recommendation algorithm utilizing cosine similarity over feature vectors, presented through an interactive discovery interface with metadata, ratings, and recommendations.",
    techStack: ["Python", "Machine Learning", "Cosine Similarity", "React"],
    capabilityDemonstrated: "Practical ML fundamentals, recommendation vector logic, and integration of model outputs into a responsive user interface.",
    links: {
      github: "https://github.com/JaswanthG-10/lumina-ai",
      demo: "#"
    },
    highlights: [
      "Cosine similarity vector calculation across metadata features",
      "Feature engineering pipeline for plot, genre & cast vectors",
      "Interactive recommendation UI built in React"
    ]
  },
  {
    id: "fixit",
    title: "FixIt — Campus Issue Reporting & Tracking Platform",
    tagline: "Role: Backend Developer | Full-Lifecycle Issue Management System",
    isFlagship: false,
    glyph: "CheckSquare", // Checklist/ticket glyph
    category: "Backend Engineering",
    problem: "Campus issues are hard to report, prioritize, and resolve when communication across departments is fragmented.",
    engineeringApproach: "Served as the Backend Developer on a collaborative platform for issue reporting, status tracking, upvoting, and an admin dashboard for priority management.",
    techStack: ["Backend APIs", "Database Integration", "Authentication Concepts", "Git", "GitHub"],
    capabilityDemonstrated: "Team development, backend module ownership, version-control collaboration, and robust CRUD/API engineering.",
    links: {
      github: "https://github.com/JaswanthG-10/fixit-backend",
      demo: "#"
    },
    highlights: [
      "RESTful API design for issue lifecycle state management",
      "Role-based authentication & admin priority dashboards",
      "Git/GitHub multi-branch team collaboration"
    ]
  },
  {
    id: "bank-mgmt",
    title: "Bank Management System",
    tagline: "Desktop Banking Application with GUI & Relational Database",
    isFlagship: false,
    glyph: "Landmark", // Bank/ledger glyph
    category: "Desktop & Database",
    problem: "Basic banking workflows require structured relational storage, transaction handling, and a usable desktop interface.",
    engineeringApproach: "Developed a desktop banking application connecting a Python graphical interface to a relational MySQL database for account-management operations and secure transaction logging.",
    techStack: ["Python", "Tkinter", "MySQL"],
    capabilityDemonstrated: "Foundational application logic, database connectivity, GUI programming, and transactional CRUD implementation.",
    links: {
      github: "https://github.com/JaswanthG-10/bank-management-system",
      demo: "#"
    },
    highlights: [
      "Tkinter desktop graphical user interface",
      "Relational MySQL schema with transaction integrity",
      "Complete account creation, update, and transfer operations"
    ]
  }
];

export const experienceData = [
  {
    role: "Technical Board Member",
    organization: "InovX Club",
    period: "2025 — Present",
    type: "Community & Leadership",
    description: "Technical community involvement with exposure to collaborative software development, technical evaluation, and peer engineering activities.",
    badge: "Club Leadership"
  },
  {
    role: "Open-Source Direction",
    organization: "Independent Development",
    period: "Ongoing",
    type: "Open Source",
    description: "Actively developing the Git/GitHub workflow, codebase practices, and technical skills needed to contribute effectively to open-source software projects.",
    badge: "Open Source"
  }
];

export const educationData = {
  degree: "B.E. Computer Science and Engineering",
  institution: "Rajalakshmi Engineering College",
  location: "Chennai, Tamil Nadu, India",
  period: "Expected Graduation 2029",
  specialization: "AI/ML Engineering & Intelligent Systems Development",
  highlights: [
    "Specializing in AI/ML engineering and end-to-end intelligent application development",
    "Active Technical Board Member at InovX Club",
    "Focus Areas: Machine Learning, RAG, Backend REST APIs, Systems Design, Data Structures"
  ]
};
