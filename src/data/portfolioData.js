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
  role: "AI/ML-Focused CSE Student | Backend & Intelligent Application Development",
  shortBio: "Computer Science Engineering student specializing in AI/ML engineering, intelligent search pipelines, robust backend APIs, and end-to-end web applications.",
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
  headline: "Building Practical AI Systems & Web Applications",
  bio: [
    "I am a Computer Science Engineering student focused on building intelligent, full-stack software applications—combining core machine learning concepts with high-performance APIs, reliable databases, document search, and clean user interfaces.",
    "Rather than treating machine learning as isolated code snippets, I create complete software solutions—integrating smart search pipelines, document analysis tools, secure FastAPI backends, and responsive React interfaces into smooth, accessible experiences.",
    "Technical board member at InovX Club and open-source enthusiast, committed to building clean, well-tested code and useful software for everyday problem solving."
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
      color: "from-indigo-600 to-purple-600",
      skills: ["Python", "Java", "C", "SQL"]
    },
    {
      name: "AI & Machine Learning",
      color: "from-purple-600 to-pink-600",
      skills: [
        "Machine Learning",
        "Content Recommendation",
        "Cosine Similarity (Similarity Matching)",
        "RAG (Smart Document Search)",
        "Text Embeddings",
        "Semantic Search",
        "Vector Databases"
      ]
    },
    {
      name: "Backend Development",
      color: "from-blue-600 to-indigo-600",
      skills: [
        "FastAPI",
        "REST APIs",
        "SQLAlchemy",
        "JWT Security & Auth",
        "Pydantic Validation"
      ]
    },
    {
      name: "Frontend & Web",
      color: "from-sky-500 to-indigo-600",
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      name: "Databases & Storage",
      color: "from-teal-500 to-emerald-600",
      skills: ["MySQL", "ChromaDB (Vector Storage)", "Relational Databases"]
    },
    {
      name: "Document & Text Processing",
      color: "from-amber-600 to-orange-600",
      skills: [
        "PyMuPDF",
        "OCR (Text Extraction)",
        "Document Parsing",
        "Text Chunking",
        "Citation Search"
      ]
    },
    {
      name: "Developer Tools",
      color: "from-slate-600 to-slate-800",
      skills: ["Git", "GitHub", "Vercel", "Uvicorn", "VS Code", "Postman"]
    }
  ],
  currentlyBuilding: [
    { name: "Advanced Python", detail: "Deep dive into async patterns, API performance & structured code" },
    { name: "Data Structures & Algorithms", detail: "Problem solving, graph traversal & memory efficiency" },
    { name: "Machine Learning Engineering", detail: "Model pipelines, feature preparation & real-world deployment" },
    { name: "Smart Document Search (RAG)", detail: "Advanced document parsing, text retrieval & ranking strategies" },
    { name: "Open Source", detail: "Contributing to community software & developer tools" },
    { name: "Backend Architecture", detail: "Building fast, reliable API endpoints & microservice logic" }
  ]
};

export const projectsData = [
  {
    id: "iris-ai",
    title: "Iris AI — Smart Document Assistant",
    tagline: "AI-Powered Document Search with Instant Page Citations",
    isFlagship: true,
    glyph: "FileText",
    category: "AI/ML & RAG",
    problem: "Reading through long, complex documents (like PDFs or reports) to find specific answers takes hours of manual scanning.",
    engineeringApproach: "Iris AI lets users upload large documents and ask questions in plain English. The system scans the files, understands the context, and returns precise answers along with exact page citations so users can instantly verify the source.",
    techStack: ["Python", "FastAPI", "ChromaDB (Vector Store)", "PyMuPDF", "React", "Next.js", "JWT Auth"],
    capabilityDemonstrated: "Built a complete AI document search pipeline (RAG architecture), automated text extraction, secure user login, and a responsive web interface.",
    links: {
      github: "https://github.com/JaswanthG-10/iris-ai",
      demo: "#"
    },
    highlights: [
      "Upload and parse PDF, DOCX, and TXT files automatically",
      "Instant AI answers backed by exact page and document citations",
      "FastAPI web backend with secure user login and React interface"
    ]
  },
  {
    id: "lumina-ai",
    title: "Lumina AI — Movie Discovery Engine",
    tagline: "Personalized Movie Recommendations Based on Story & Atmosphere",
    isFlagship: false,
    glyph: "Film",
    category: "AI/ML",
    problem: "Finding movies that match a specific mood or storyline is difficult when streaming sites only filter by broad genres.",
    engineeringApproach: "Lumina AI analyzes plot summaries, themes, and story features to suggest relevant films. Instead of relying only on category tags, it calculates story similarity to deliver recommendations tailored to what a viewer wants to watch.",
    techStack: ["Python", "Machine Learning", "Similarity Vector Matching", "React"],
    capabilityDemonstrated: "Applied machine learning recommendation logic, text feature analysis, and connected the model outputs to a clean interactive web design.",
    links: {
      github: "https://github.com/JaswanthG-10/lumina-ai",
      demo: "#"
    },
    highlights: [
      "Similarity matching across movie plot summaries and themes",
      "Feature analysis pipeline evaluating plot, cast, and genres",
      "Interactive recommendation UI built with React"
    ]
  },
  {
    id: "fixit",
    title: "FixIt — Campus Issue Tracking Platform",
    tagline: "Role: Backend Developer | Centralized Management System",
    isFlagship: false,
    glyph: "CheckSquare",
    category: "Backend Engineering",
    problem: "Reporting campus maintenance problems is slow and disorganized when requests are scattered across channels.",
    engineeringApproach: "FixIt provides a unified campus platform where students can log maintenance issues and track their resolution status. Administrators get a prioritized dashboard to assign tasks, update statuses, and resolve facility issues faster.",
    techStack: ["Backend REST APIs", "Database Architecture", "User Authentication", "Git & GitHub"],
    capabilityDemonstrated: "Collaborative teamwork, backend API engineering, role-based user management, and reliable database storage.",
    links: {
      github: "https://github.com/JaswanthG-10/fixit-backend",
      demo: "#"
    },
    highlights: [
      "Clean API design for logging, prioritizing, and resolving issues",
      "Role-based authentication for students and admin managers",
      "Multi-developer team collaboration using Git and GitHub"
    ]
  },
  {
    id: "bank-mgmt",
    title: "Bank Management System",
    tagline: "Desktop Banking Application with Secure Database Operations",
    isFlagship: false,
    glyph: "Landmark",
    category: "Desktop & Database",
    problem: "Managing account balances and money transfers requires foolproof data logging to prevent financial record errors.",
    engineeringApproach: "Developed a desktop banking application that handles core financial tasks including account creation, balance updates, and money transfers. It connects a user-friendly interface to a MySQL database to ensure every transaction is recorded accurately.",
    techStack: ["Python", "Tkinter GUI", "MySQL Database"],
    capabilityDemonstrated: "Desktop application development, SQL database integration, transaction accuracy, and secure record handling.",
    links: {
      github: "https://github.com/JaswanthG-10/bank-management-system",
      demo: "#"
    },
    highlights: [
      "Desktop user interface for quick account operations",
      "Structured MySQL database ensuring accurate account records",
      "Full support for account creation, balance checks, and transfers"
    ]
  }
];

export const experienceData = [
  {
    role: "Technical Board Member",
    organization: "InovX Club",
    period: "2025 — Present",
    type: "Community & Leadership",
    description: "Actively involved in technical leadership, organizing peer workshops, guiding student software projects, and evaluating collaborative code builds.",
    badge: "Club Leadership"
  },
  {
    role: "Open-Source Contributor",
    organization: "Independent Development",
    period: "Ongoing",
    type: "Open Source",
    description: "Building open-source tools, practicing modern Git workflows, and sharpening codebase architecture skills to contribute to developer tools.",
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
    "Specializing in Computer Science, Machine Learning, and Web Application Development",
    "Active Technical Board Member at InovX Club",
    "Key Focus: Machine Learning, Smart Document Search, FastAPI Backends, Data Structures"
  ]
};
