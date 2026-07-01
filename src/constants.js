import hackhaywardLogo from "./assets/hackhayward_new.jpeg";
import gdgLogo from "./assets/gdg_logo.png";
import headstarterLogo from "./assets/headstarter.png";
import kitLogo from "./assets/KIT.jpeg";

export const name = "Ujas Goti";

export const RESUME_URL = "/Ujas_Goti_Resume (59).pdf";

export const contact = {
  phone: "+1 (510) 453-7948",
  email: "ujaskgoti@gmail.com",
  location: "Fremont, CA",
  linkedin: "https://www.linkedin.com/in/ujas-goti/",
  github: "https://github.com/Ujas-Goti",
};

export const intro = `Software engineering student at California State University, East Bay (GPA: 3.68/4.0) with hands-on experience building distributed backends, multi-agent AI systems, and production ML pipelines. Co-Founder & Co-President of HackHayward and President of Google Developer Groups on Campus, CSU East Bay — leading technical workshops, securing sponsor funding, and shipping features across Python, Java, and JavaScript stacks.`;

export const techStack = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C#", "SQL"],
  ai_ml: [
    "LLMs",
    "RAG",
    "Multi-Agent Systems",
    "LangChain",
    "Reinforcement Learning",
    "Prompt Engineering",
    "MCP",
    "PyTorch",
    "TensorFlow",
    "HuggingFace",
    "Gemini API",
    "Google ADK",
    "LLM Evaluation",
  ],
  backend_apis: ["FastAPI", "Flask", "Node.js", "REST APIs", "gRPC", "Microservices", "SQLAlchemy"],
  web: ["React.js", "Next.js", "Redux", "HTML", "CSS"],
  cloud_devops: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD", "Linux"],
  databases: ["PostgreSQL", "pgvector", "Redis", "MongoDB", "MySQL"],
  tools: ["Git/GitHub", "Kafka", "Prometheus", "Grafana", "GitHub Copilot", "Cursor", "JUnit", "Openclaw"],
};

export const experiences = [
  {
    title: "Co-Founder & Co-President",
    company_name: "HackHayward",
    icon: hackhaywardLogo,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Raised $20,000 in sponsor funding from Google, Amazon, IBM, and DoorDash for the 2024 event, running a hands-on Google ADK workshop on AI memory systems and moderating a founders panel for 200+ attendees.",
      "Secured an additional $18,000 in funding for the 2025 event, coordinating 11 judges and 2 keynote speakers and running enablement sessions that gave attendees hands-on experience building with AI tools and APIs.",
    ],
    url: "https://www.hackhayward.org/",
    role: "Co-Founder & Co-President",
    company: "HackHayward",
    duration: "June 2024 - Present",
    location: "Hayward, CA",
  },
  {
    title: "President",
    company_name: "Google Developer Groups on Campus, CSU East Bay",
    icon: gdgLogo,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Grew membership from 300 to 570, running 11 technical workshops with 40–50 attendees each, designing hands-on labs and demo environments that made AI and engineering concepts accessible to people at different experience levels.",
      "Managed ops across technical and finance teams, handling scheduling, budgets, and stakeholder coordination.",
    ],
    url: "https://gdg.community.dev/gdg-on-campus-california-state-university-east-bay-hayward-united-states/",
    role: "President",
    company: "Google Developer Groups on Campus, CSU East Bay",
    duration: "August 2024 - Present",
    location: "Hayward, CA",
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter AI",
    icon: headstarterLogo,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Shipped 8+ production features in Python, Java, and JavaScript across backend and frontend surfaces, going through 20+ code reviews with senior engineers and building evaluation pipelines for Claude and Gemini API integrations that tracked accuracy and latency.",
      "Maintained CI checks and wrote unit and integration tests, leaning on AI-assisted coding tools like GitHub Copilot and Cursor to debug faster and improve code quality across the delivery cycle.",
    ],
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    duration: "July 2024 - September 2024",
    location: "San Francisco, CA (Hybrid)",
  },
  {
    title: "Software Engineering Intern",
    company_name: "KIT Solutions",
    icon: kitLogo,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Built 5+ REST APIs and backend services in Java and Python for SaaS and ERP products, designing decoupled interfaces and writing tests so each component could be independently deployed and verified end to end.",
    ],
    role: "Software Engineering Intern",
    company: "KIT Solutions",
    duration: "June 2022 - August 2022",
    location: "Surat, India (Remote)",
  },
];

export const workshops = [
  {
    title: "Introduction to Google ADK",
    org: "Google Developer Groups, CSU East Bay",
    date: "Nov 2025",
    points: [
      "Designed and delivered an ADK Master Class to 40+ attendees across 7 hands-on sessions on building production-grade multi-agent AI systems with Google's Agent Development Kit and Gemini API.",
      "Taught agentic patterns including Sequential, Parallel, and Loop workflow agents, Orchestrator-Routing for hierarchical delegation, ReAct-style reasoning, and Agent-as-Tool composition for multi-agent collaboration.",
      "Covered the full development lifecycle: GCP Console setup, Gemini API integration, ADK installation, agent deployment, and external tool integration like Google Search.",
    ],
  },
  {
    title: "Machine Learning with TensorFlow & Google Colab",
    org: "CAHSI GMIS 2025",
    date: "Oct 2025",
    points: [
      "Co-led an ML workshop with Professor Lynne Grewe (CSU East Bay iLab Director) on computer vision and language models using TensorFlow and Google Colab.",
      "Walked 40+ participants through hands-on image classification, covering training, parameter tuning, and model evaluation.",
    ],
  },
];

export const certifications = [
  {
    title: "Introduction to Generative AI Learning Path Specialization",
    issuer: "Google Cloud",
    date: "Aug 2024",
    courses: [
      "Introduction to Generative AI",
      "Introduction to Large Language Models",
      "Introduction to Responsible AI",
      "Responsible AI: Applying AI Principles with Google Cloud",
    ],
  },
];

export const services = [
  { title: "Backend Development", icon: "💻" },
  { title: "AI & ML", icon: "🤖" },
  { title: "Full-Stack Development", icon: "🌐" },
  { title: "Cloud & DevOps", icon: "☁️" },
];

export const projects = [
  {
    title: 'Cross-Agent Shared Memory System 🧠',
    IDE: 'Python, FastAPI, PostgreSQL, pgvector, Docker, SQLAlchemy, Kubernetes',
    description:
      'Designed a distributed backend with 8+ REST endpoints supporting 10+ concurrent AI agents at sub-500ms latency, using pgvector for semantic memory retrieval and MCP-style server patterns for agent-to-agent context sharing. Used optimistic concurrency control and versioning to handle concurrent reads and writes from multiple agents, validated across 2,000+ test requests with zero data loss. Built in Prometheus and Grafana from the start with structured logs, cutting failure triage time by 60% by surfacing run-level errors before they became outages.',
    git: 'https://github.com/Ujas-Goti',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Event-Driven Automated Trading Bot 📈',
    IDE: 'Python, MetaTrader5 API, RL, Redis, Kafka, Performance Profiling',
    description:
      'Trained a reinforcement learning model in PyTorch over 39+ strategy configurations to pick the best-performing strategy depending on current market conditions, hitting 67% accuracy across 100+ live trading decisions. Built a fault-tolerant Kafka and Redis data pipeline for high-frequency streaming data, implementing retry and reconciliation logic at the networking layer to maintain availability under failure conditions. Profiled latency, throughput, and error rates across the pipeline and improved throughput by 35% through targeted backend optimizations.',
    git: 'https://github.com/Ujas-Goti',
    technologies: ['Python', 'PyTorch', 'Redis', 'Kafka', 'RL', 'MetaTrader5'],
  },
  {
    title: 'AI Agent-Based Automation Tool 🤖',
    IDE: 'Python, LangChain, PyTorch, LLM Inference, Gemini APIs, Flask',
    description:
      'Combined RAG with HuggingFace embeddings into a multi-step agent workflow, tuning chunking and retrieval so the agent pulled the right context instead of hallucinating, handling 1,500+ requests per session. Wired evaluation pipelines into CI to benchmark output quality across different LLM backends, catching accuracy regressions before they reached production.',
    git: 'https://github.com/Ujas-Goti/AI-agent-tool',
    technologies: ['Python', 'LangChain', 'PyTorch', 'Gemini API', 'Flask', 'RAG'],
  },
  {
    title: 'CS401 – Communications System 💬',
    IDE: 'Java, Eclipse, TCP/IP Sockets, JUnit',
    description: 'A scalable real-time + asynchronous messaging system designed for 100+ concurrent users. Supports private/group chat, secure logging, role-based access for IT admins, and dynamic performance scaling. Includes message throughput of 200+ msg/min and planned SQL-backed persistent storage.',
    git: 'https://github.com/Ujas-Goti/CS401_Group-4_Communications_System',
    technologies: ['Java', 'TCP/IP', 'JUnit', 'SQL (planned)'],
  },
  {
    title: 'DilemmaSimWeb 🎯',
    IDE: 'JavaScript, HTML/CSS, Web Framework',
    description: 'An interactive web simulation designed to model real-world dilemma scenarios. Features dynamic branching logic, user-driven decision states, and responsive UI. Built to demonstrate simulation-based learning and UX-flow understanding.',
    git: 'https://github.com/Ujas-Goti/DilemmaSimWeb',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'obbs-main ⚙️',
    IDE: 'Java, Backend Framework, Modular Architecture',
    description: 'Backend-focused system emphasizing clean service layers, modular logic separation, and testability. Implements structured operations for data handling and business workflows. Designed as part of systems engineering practice.',
    git: 'https://github.com/Ujas-Goti/obbs-main',
    technologies: ['Java', 'Backend Architecture'],
  },
  {
    title: 'Google ADK Experiments 🔬',
    IDE: 'Python, Google Cloud, Agent Development Kit',
    description: "A collection of experiments with the Google Agent Development Kit for building cloud-native AI agents. Implements reasoning pipelines, structured responses, and early agentic behavior prototypes using Google's AI stack.",
    git: 'https://github.com/Ujas-Goti/GoogleADK',
    technologies: ['Vertex AI', 'Gemini', 'Google ADK', 'Python'],
  },
  {
    title: 'restack_weaviate_curriculum 📚',
    IDE: 'Python, Weaviate, Vector Database',
    description: "A set of vector database + AI retrieval experiments following Restack's curriculum. Implements embeddings, semantic search, retrieval pipelines, and LLM-enhanced context workflows using Weaviate.",
    git: 'https://github.com/Ujas-Goti/restack_weaviate_curriculum',
    technologies: ['Weaviate', 'Python', 'Vector DB', 'AI Retrieval'],
  },
  {
    title: 'ujasgotiportfolio 🚀',
    IDE: 'React, Vite, Tailwind CSS',
    description: 'Personal developer portfolio showcasing skills, projects, and experience. Designed with a clean, modern UI using responsive components and smooth animations. Built for scalability and future expandability.',
    git: 'https://github.com/Ujas-Goti/ujasgotiportfolio',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Diploma – COVID-19 Vaccine Registration 💉',
    IDE: 'ASP.NET C#, SQL Server',
    description: 'A web platform that tracks vaccine registrations for 1000+ students across institutions. Automates reporting using Google Charts, sends email notifications through Gmail API, and reduces data retrieval time by 40% using optimized SQL queries.',
    git: 'https://github.com/Ujas-Goti/Diploma_PHP_MiniProject_COVID19_Vaccine_Registration_Site',
    technologies: ['ASP.NET', 'C#', 'SQL Server', 'Google Charts', 'Gmail API'],
  },
  {
    title: 'Diploma – Android Realtime Attendance Manager 📒',
    IDE: 'Android Studio, Firebase',
    description: 'An Android app used by 100+ students and educators for real-time attendance tracking. Syncs Firebase data instantly with zero conflicts, provides class-based categorization, and improves tracking efficiency by 40%.',
    git: 'https://github.com/Ujas-Goti/Diploma_Android_Realtime_Attendance_Manager',
    technologies: ['Java', 'Android SDK', 'XML', 'Firebase'],
  },
  {
    title: 'Diploma – Mini Project: PcBuild.com 🎮',
    IDE: 'Web Stack',
    description: 'A mini e-commerce simulation for assembling and pricing custom PC builds. Includes compatibility checks, dynamic price aggregation, and a user-friendly browsing interface.',
    git: 'https://github.com/Ujas-Goti/Diploma-Mini-Project-PcBuild.com',
    technologies: ['Web UI', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Diploma – Final Year Project 🎓',
    IDE: 'ASP.NET, SQL Server',
    description: 'Full-stack analytics dashboard designed to track student performance patterns. Includes automated reporting, real-time data visualization using charts, and optimized database operations.',
    git: 'https://github.com/Ujas-Goti/Diploma-Final-Year-Project',
    technologies: ['ASP.NET', 'SQL Server', 'Data Visualizations'],
  },
  {
    title: 'HackHayward Website 🌐',
    IDE: 'React, Web UI',
    description: 'Official hackathon website for HackHayward, supporting 200+ participants, sponsors, judges, and event schedule. Includes information modules, responsive layout, sponsor sections, and dynamic event updates.',
    git: 'https://github.com/Ujas-Goti/HackHayward-Website',
    technologies: ['React', 'JavaScript', 'Web Design'],
  },
];

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID || "your_service_id";
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || "your_template_id";
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY || "your_public_key";
