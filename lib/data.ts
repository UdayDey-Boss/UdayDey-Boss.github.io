export const profile = {
  name: "Uday Dey",
  role: "Full-Stack Engineer",
  location: "Dhaka, Bangladesh",
  study: "B.Sc. Computer Science & Engineering, AIUB",
  status: "Open to work",
  summary:
    "I build full-stack web applications with C#, PHP and JavaScript on MVC architecture — usually starting from a real, unglamorous problem rather than a tutorial. Currently looking for a Software Engineering role where I can keep shipping.",
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
    type: "Personal solo project",
    problem:
      "Households in Dhaka track grocery spending on paper, or not at all — no record of what was bought, what it cost, or what's about to expire.",
    build: [
      "A full-stack MVC app with a real-time expense dashboard, expiry alerts, and one-click PDF/print reports.",
      "A custom Bangla-language parser on the Web Speech API — users log purchases by speaking in Bangla, and the app extracts item and quantity accurately.",
    ],
    proof:
      "bcrypt password hashing, prepared statements against SQL injection, and AJAX-driven CRUD for zero page reloads.",
    stack: ["PHP", "MySQL", "JavaScript", "AJAX", "MVC", "Web Speech API"],
    extraTags: ["Bangla voice input"],
    skillIds: ["php", "javascript", "mysql", "ajax", "json", "mvc"],
    href: "https://github.com/UdayDey-Boss/Bazar-Hisab",
    featured: true,
  },
  {
    id: "library-management-system",
    name: "Library Management System",
    type: "Academic project — team lead, team of 4",
    problem:
      "A university library ran on no digital catalogue — member records, borrowing, and access were handled by hand.",
    build: [
      "Led a four-person team building a web-based library system on MVC architecture.",
      "Owned the member authentication and profile module — registration, login, role-based access, session management.",
    ],
    proof:
      "Prepared SQL statements, server-side validation, and AJAX-driven dynamic features layered on top.",
    stack: ["PHP", "HTML5", "CSS3", "JavaScript", "AJAX", "MySQL", "MVC"],
    extraTags: ["Team lead"],
    skillIds: ["php", "html5", "css3", "javascript", "mysql", "ajax", "json", "mvc"],
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
