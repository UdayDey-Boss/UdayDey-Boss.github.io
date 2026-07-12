export const profile = {
  name: "Uday Dey",
  role: "Full-Stack Engineer",
  location: "Dhaka, Bangladesh",
  study: "B.Sc. Computer Science & Engineering, AIUB",
  status: "Open to work",
  summary:
    "I build software that solves real-world problems by turning everyday challenges into practical, reliable full-stack applications that make life easier and create real value.",
  email: "udayday4.ud@gmail.com",
  phone: "+880 1915 653027",
  address: "51, Radhika Mohan Basak Lane, Dhaka-1100, Bangladesh",
  github: "https://github.com/UdayDey-Boss",
  githubHandle: "github.com/UdayDey-Boss",
  linkedin: "https://linkedin.com/in/udaydey",
  linkedinHandle: "linkedin.com/in/udaydey",
  resumeHref: "/Uday_Dey_CV.pdf",
};

export type SkillId =
  | "csharp" | "javascript" | "php" | "sql" | "python"
  | "html5" | "css3" | "ajax" | "json" | "mvc"
  | "mysql" | "oracle" | "mssql"
  | "vs" | "vscode" | "git" | "github" | "phpmyadmin"
  | "word" | "excel" | "powerpoint";

export interface Skill {
  id: SkillId;
  label: string;
}

export interface SkillTier {
  tier: string;
  note: string;
  skills: Skill[];
}

export const skillTiers: SkillTier[] = [
  {
    tier: "Foundation",
    note: "languages",
    skills: [
      { id: "csharp", label: "C#" },
      { id: "javascript", label: "JavaScript" },
      { id: "php", label: "PHP" },
      { id: "sql", label: "SQL" },
      { id: "python", label: "Python" },
    ],
  },
  {
    tier: "Applied",
    note: "web & architecture",
    skills: [
      { id: "html5", label: "HTML5" },
      { id: "css3", label: "CSS3" },
      { id: "ajax", label: "AJAX" },
      { id: "json", label: "JSON" },
      { id: "mvc", label: "MVC" },
    ],
  },
  {
    tier: "Data",
    note: "databases",
    skills: [
      { id: "mysql", label: "MySQL" },
      { id: "oracle", label: "Oracle Database" },
      { id: "mssql", label: "Microsoft SQL Server" },
    ],
  },
  {
    tier: "Tooling",
    note: "environment",
    skills: [
      { id: "vs", label: "Visual Studio" },
      { id: "vscode", label: "VS Code" },
      { id: "git", label: "Git" },
      { id: "github", label: "GitHub" },
      { id: "phpmyadmin", label: "phpMyAdmin" },
    ],
  },
  {
    tier: "Productivity",
    note: "office",
    skills: [
      { id: "word", label: "Word" },
      { id: "excel", label: "Excel" },
      { id: "powerpoint", label: "PowerPoint" },
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  type: string;
  shortDescription: string;
  problem: string;
  build: string[];
  proof: string;
  stack: string[];
  extraTags: string[];
  skillIds: SkillId[];
  href: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "bazar-hisab",
    name: "Bazar Hisab",
    type: "Personal Solo Project",
    shortDescription:
  "Smart grocery expense tracker with Bangla voice input.",
    problem:
      "Many households still manage grocery expenses manually, making it difficult to track spending, monitor purchased items, or remember products that are close to expiry.",

    build: [
      "Built a full-stack MVC web application featuring real-time expense tracking, expiry reminders, printable reports, and PDF export.",
      "Developed a Bangla voice-input system using the Web Speech API that intelligently extracts grocery items and quantities from natural spoken language.",
    ],

    proof:
      "Implemented bcrypt password hashing, prepared SQL statements to prevent SQL injection, and AJAX-powered CRUD operations for a smooth, reload-free user experience.",

    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "AJAX",
      "MVC",
      "Web Speech API",
    ],

    extraTags: ["Bangla Voice Input"],

  skillIds: [
  "php",
  "javascript",
  "mysql",
  "ajax",
  "json",
  "mvc",
  "git",
  "github",
  "vscode",
  "phpmyadmin",
],

    href: "https://github.com/UdayDey-Boss/Bazar-Hisab",

    featured: true,
  },

  {
    id: "library-management-system",
    name: "Library Management System",
    type: "Academic Project • Team Lead (4 Members)",
    shortDescription:
  "Digital library management system with secure authentication.",

    problem:
      "Managing books, members, and borrowing records manually was inefficient and difficult to maintain as the library grew.",

    build: [
      "Led a team of four students to design and develop a web-based Library Management System using MVC architecture.",
      "Designed and implemented the authentication system, user registration, profile management, role-based access control, and session handling.",
    ],

    proof:
      "Integrated prepared SQL statements, server-side validation, and AJAX-powered dynamic interactions to improve security and usability.",

    stack: [
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "AJAX",
      "MySQL",
      "MVC",
    ],

    extraTags: ["Team Lead"],

 skillIds: [
  "php",
  "html5",
  "css3",
  "javascript",
  "mysql",
  "ajax",
  "json",
  "mvc",
  "git",
  "github",
  "vscode",
  "phpmyadmin",
],

    href: "https://github.com/UdayDey-Boss/-Web_Project_Spring_25_26_G2",
  },
];

export interface RecordRow {
  id: string;
  period: string;
  title: string;
  institution: string;
  metric?: string;
  kind: "degree" | "certificate" | "achievement";
  verified?: {
    credentialId?: string;
    link: string;
    image?: string;
  };
}

export const records: RecordRow[] = [
  {
    id: "aiub",
    period: "2022 — Present",
    title: "B.Sc. in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    metric: "CGPA 3.21 / 4.00",
    kind: "degree",
  },
  {
    id: "hsc",
    period: "2021",
    title: "Higher Secondary Certificate — Science",
    institution: "Dhaka Imperial College",
    metric: "GPA 4.75 / 5.00",
    kind: "degree",
  },
  {
    id: "ssc",
    period: "2019",
    title: "Secondary School Certificate — Science",
    institution: "Dhaka Collegiate School",
    metric: "GPA 4.67 / 5.00",
    kind: "degree",
  },
  {
    id: "cisco",
    period: "Dec 2022",
    title: "IT Essentials: PC Hardware and Software",
    institution: "Cisco Networking Academy",
    kind: "certificate",
    verified: {
      credentialId: "ea54ebe7-296b-43c8-b5f8-16a959ff60aa",
      link: "https://www.credly.com/badges/a42c9ac2-0cb6-4432-aa8e-7ae7cdd6e1f5",
      image: "/cisco-certificate.jpg",
    },
  },
  {
  id: "robot-soccer",
  period: "2024",
  title: "Winning Team — Robot Soccer Competition",
  institution: "AIUB CS FEST 2024",
  kind: "achievement",
  verified: {
    image: "/robot-soccer-certificate.jpg",
    link: undefined,
  }
},

  ];


export interface SectionDef {
  id: string;
  index: string;
  label: string;
}

export const sections: SectionDef[] = [
  { id: "start", index: "01", label: "Start" },
  { id: "systems", index: "02", label: "Systems I've built" },
  { id: "connects", index: "03", label: "How it connects" },
  { id: "record", index: "04", label: "How I got here" },
  { id: "contact", index: "05", label: "Let's talk" },
];

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Conversational" },
];
