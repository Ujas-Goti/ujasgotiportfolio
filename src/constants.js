import hackhaywardLogo from "./assets/hackhayward_new.jpeg";
import gdgLogo from "./assets/gdg_logo.png";
import headstarterLogo from "./assets/headstarter.png";
import kitLogo from "./assets/KIT.jpeg";

export const name = "Ujas Goti";

// Tech Stack from Resume
export const techStack = {
  languages: ["Python", "Java", "C++", "C#", "C", "JavaScript", "Ruby", "SQL"],
  ai_ml: ["Gemini", "Vertex AI", "LangChain", "LangGraph", "LLMs", "AI Agent Development", "Google Agent Development Kit"],
  web: ["React.js", "Node.js", "Flask", "ASP.NET", "PHP", "Ruby on Rails", "Full-Stack Development", "Flutter"],
  mobile: ["Android Studio", "Xamarin", "Android SDK", "Flutter"],
  databases: ["MySQL", "Firebase", "PostgreSQL", "MongoDB", "SQL Server"],
  apis_backend: ["RESTful APIs", "GraphQL", "Microservices"],
  cloud_devops: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  testing_tools: ["JUnit", "Git/GitHub", "Integration Testing", "Unit Testing"],
  networking: ["TCP/IP", "Microsoft IIS", "Apache Tomcat", "XAMPP"],
  methodologies: ["Agile", "Scrum"]
};

export const experiences = [
  {
    title: "Co-Founder, President",
    company_name: "HackHayward",
    icon: hackhaywardLogo,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Co-Founder & Vice President of HackHayward, overseeing Technical, Marketing, Logistics & Operations, and Outreach teams.",
      "Coordinated event operations and logistics for 200+ participants, 11 judges, and 2 keynote speakers, ensuring seamless execution.",
      "Secured funding worth $18,000 and established 8+ partnerships with Google, AWS, PerplexityAI, GroqAI, CS & Engineering Departments at CSUEB, Smith Center at CSUEB, and Red Bull.",
      "HackHayward is a nonprofit hosting hackathons leveraging cloud computing, AI, and software development to foster innovation and empower students to collaboratively solve real-world problems."
    ],
    url: "https://hackhayward.com",
    role: "Co-Founder, President - Volunteer",
    company: "HackHayward",
    duration: "June 2024 - Present",
    location: "Hayward, CA"
  },
  {
    title: "President / Lead",
    company_name: "Google Developer Groups on Campus, CSU East Bay",
    icon: gdgLogo,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Led club operations across Technical, Finance, Operations, and Marketing teams.",
      "Successfully hosted hands-on workshops and speaker events featuring prominent Bay Area industry leaders.",
      "Organized hackathons, workshops, and virtual events, fostering collaboration among technical and non-technical audiences."
    ],
    url: "https://gdg.community.dev/google-developer-groups-csu-east-bay/",
    role: "President / Lead - Volunteer",
    company: "Google Developer Groups on Campus, CSU East Bay",
    duration: "August 2024 - Present",
    location: "Hayward, CA"
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter AI",
    icon: headstarterLogo,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Fellow at Headstarter AI, leveraging software engineering and generative AI skills to engage in cutting-edge AI projects.",
      "Collaborated with industry experts and contributed significantly to innovative solutions, driving impactful advancements in the field of artificial intelligence."
    ],
    url: "https://headstarter.ai",
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    duration: "July 2024 - September 2024",
    location: "San Francisco, CA (Hybrid)"
  },
  {
    title: "Software Engineering Intern",
    company_name: "KIT Solutions",
    icon: kitLogo,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Worked on SaaS-based Ideas Hub and Short GOURL products.",
      "Collaborated on backend development for ERP solutions.",
      "Developed APIs using Java and Python."
    ],
    url: "https://kitsolutions.com",
    role: "Software Engineering Intern",
    company: "KIT Solutions",
    duration: "June 2022 - August 2022",
    location: "Surat, India (Remote)"
  }
];

export const services = [
  {
    title: "Backend Development",
    icon: "💻"
  },
  {
    title: "AI & ML",
    icon: "🤖"
  },
  {
    title: "Full-Stack Development",
    icon: "🌐"
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️"
  }
];

// All 12 Projects
export const projects = [
  {
    title: 'AI-Agent Tool 🤖',
    IDE: 'Python, VS Code, LangChain, Gemini API',
    description: 'LLM-powered developer assistant that automates code explanation, documentation generation, and troubleshooting. Processes structured and unstructured prompts with high accuracy and provides contextual reasoning. Deployed via Flask for fast interaction and <2s latency.',
    git: 'https://github.com/Ujas-Goti/AI-agent-tool',
    technologies: ['Python', 'LangChain', 'LangGraph', 'Gemini API', 'Flask']
  },
  {
    title: 'CS401 – Communications System 💬',
    IDE: 'Java, Eclipse, TCP/IP Sockets, JUnit',
    description: 'A scalable real-time + asynchronous messaging system designed for 100+ concurrent users. Supports private/group chat, secure logging, role-based access for IT admins, and dynamic performance scaling. Includes message throughput of 200+ msg/min and planned SQL-backed persistent storage.',
    git: 'https://github.com/Ujas-Goti/CS401_Group-4_Communications_System',
    technologies: ['Java', 'TCP/IP', 'JUnit', 'SQL (planned)']
  },
  {
    title: 'DilemmaSimWeb 🎯',
    IDE: 'JavaScript, HTML/CSS, Web Framework',
    description: 'An interactive web simulation designed to model real-world dilemma scenarios. Features dynamic branching logic, user-driven decision states, and responsive UI. Built to demonstrate simulation-based learning and UX-flow understanding.',
    git: 'https://github.com/Ujas-Goti/DilemmaSimWeb',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'obbs-main ⚙️',
    IDE: 'Java, Backend Framework, Modular Architecture',
    description: 'Backend-focused system emphasizing clean service layers, modular logic separation, and testability. Implements structured operations for data handling and business workflows. Designed as part of systems engineering practice.',
    git: 'https://github.com/Ujas-Goti/obbs-main',
    technologies: ['Java', 'Backend Architecture']
  },
  {
    title: 'Google ADK Experiments 🔬',
    IDE: 'Python, Google Cloud, Agent Development Kit',
    description: 'A collection of experiments with the Google Agent Development Kit for building cloud-native AI agents. Implements reasoning pipelines, structured responses, and early agentic behavior prototypes using Google\'s AI stack.',
    git: 'https://github.com/Ujas-Goti/GoogleADK',
    technologies: ['Vertex AI', 'Gemini', 'Google ADK', 'Python']
  },
  {
    title: 'restack_weaviate_curriculum 📚',
    IDE: 'Python, Weaviate, Vector Database',
    description: 'A set of vector database + AI retrieval experiments following Restack\'s curriculum. Implements embeddings, semantic search, retrieval pipelines, and LLM-enhanced context workflows using Weaviate.',
    git: 'https://github.com/Ujas-Goti/restack_weaviate_curriculum',
    technologies: ['Weaviate', 'Python', 'Vector DB', 'AI Retrieval']
  },
  {
    title: 'ujasgotiportfolio 🚀',
    IDE: 'React, Vite, Tailwind CSS',
    description: 'Personal developer portfolio showcasing skills, projects, and experience. Designed with a clean, modern UI using responsive components and smooth animations. Built for scalability and future expandability.',
    git: 'https://github.com/Ujas-Goti/ujasgotiportfolio',
    technologies: ['React', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Diploma – COVID-19 Vaccine Registration 💉',
    IDE: 'ASP.NET C#, SQL Server',
    description: 'A web platform that tracks vaccine registrations for 1000+ students across institutions. Automates reporting using Google Charts, sends email notifications through Gmail API, and reduces data retrieval time by 40% using optimized SQL queries.',
    git: 'https://github.com/Ujas-Goti/Diploma_PHP_MiniProject_COVID19_Vaccine_Registration_Site',
    technologies: ['ASP.NET', 'C#', 'SQL Server', 'Google Charts', 'Gmail API']
  },
  {
    title: 'Diploma – Android Realtime Attendance Manager 📒',
    IDE: 'Android Studio, Firebase',
    description: 'An Android app used by 100+ students and educators for real-time attendance tracking. Syncs Firebase data instantly with zero conflicts, provides class-based categorization, and improves tracking efficiency by 40%.',
    git: 'https://github.com/Ujas-Goti/Diploma_Android_Realtime_Attendance_Manager',
    technologies: ['Java', 'Android SDK', 'XML', 'Firebase']
  },
  {
    title: 'Diploma – Mini Project: PcBuild.com 🎮',
    IDE: 'Web Stack',
    description: 'A mini e-commerce simulation for assembling and pricing custom PC builds. Includes compatibility checks, dynamic price aggregation, and a user-friendly browsing interface.',
    git: 'https://github.com/Ujas-Goti/Diploma-Mini-Project-PcBuild.com',
    technologies: ['Web UI', 'JavaScript', 'HTML/CSS']
  },
  {
    title: 'Diploma – Final Year Project 🎓',
    IDE: 'ASP.NET, SQL Server',
    description: 'Full-stack analytics dashboard designed to track student performance patterns. Includes automated reporting, real-time data visualization using charts, and optimized database operations.',
    git: 'https://github.com/Ujas-Goti/Diploma-Final-Year-Project',
    technologies: ['ASP.NET', 'SQL Server', 'Data Visualizations']
  },
  {
    title: 'HackHayward Website 🌐',
    IDE: 'React, Web UI',
    description: 'Official hackathon website for HackHayward, supporting 200+ participants, sponsors, judges, and event schedule. Includes information modules, responsive layout, sponsor sections, and dynamic event updates.',
    git: 'https://github.com/Ujas-Goti/HackHayward-Website',
    technologies: ['React', 'JavaScript', 'Web Design']
  }
];

// EmailJS configuration (you'll need to set these up)
export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID || "your_service_id";
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || "your_template_id";
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY || "your_public_key";

