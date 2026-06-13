export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  gpa?: string;
  description?: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Tech Innovators Pvt Ltd",
    companyUrl: "https://techinnovators.example.com",
    location: "Colombo, Sri Lanka",
    type: "full-time",
    startDate: "Jan 2025",
    endDate: "Present",
    description: "Building and maintaining scalable web applications for enterprise clients, collaborating with cross-functional teams to deliver high-quality software solutions.",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Built responsive UI components with React and TypeScript",
      "Optimized database queries resulting in 40% performance improvement",
      "Led code reviews and mentored junior developers",
      "Implemented CI/CD pipelines using GitHub Actions",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
  },
  {
    id: "exp-2",
    role: "Junior Software Developer",
    company: "Digital Solutions Lanka",
    location: "Colombo, Sri Lanka",
    type: "full-time",
    startDate: "Jun 2023",
    endDate: "Dec 2024",
    description: "Worked on various client projects developing both frontend and backend features, gaining hands-on experience with modern web technologies.",
    responsibilities: [
      "Developed customer-facing features for e-commerce applications",
      "Integrated third-party payment gateways (PayHere, Stripe)",
      "Created mobile-responsive designs from Figma mockups",
      "Wrote unit and integration tests using Jest",
      "Collaborated with UI/UX team to improve user experience",
    ],
    technologies: ["React", "Node.js", "MySQL", "Redux", "CSS", "Git"],
  },
  {
    id: "exp-3",
    role: "Software Engineering Intern",
    company: "Startup Hub Colombo",
    location: "Colombo, Sri Lanka",
    type: "internship",
    startDate: "Jan 2023",
    endDate: "May 2023",
    description: "Completed a 5-month internship working on a SaaS product, gaining exposure to agile methodologies and modern development practices.",
    responsibilities: [
      "Assisted in developing new features for the main SaaS product",
      "Fixed bugs and improved application performance",
      "Participated in daily standup meetings and sprint planning",
      "Documented APIs and created developer guides",
    ],
    technologies: ["Vue.js", "PHP", "Laravel", "MySQL", "Postman"],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science",
    field: "Information Technology",
    institution: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    startDate: "2020",
    endDate: "2024",
    gpa: "3.7 / 4.0",
    description: "Focused on software engineering, data structures, algorithms, and distributed systems.",
    achievements: [
      "Dean's List — 3 consecutive semesters",
      "First class honors",
      "Best Final Year Project Award",
    ],
  },
  {
    id: "edu-2",
    degree: "Advanced Level",
    field: "Science (Maths, Physics, ICT)",
    institution: "R/Maliyadeva College",
    location: "Kurunegala, Sri Lanka",
    startDate: "2017",
    endDate: "2019",
    achievements: [
      "3 A passes in A/Ls",
      "Island rank in ICT",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialUrl: "https://aws.amazon.com/certification",
    icon: "☁️",
  },
  {
    id: "cert-2",
    name: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "2024",
    credentialUrl: "https://university.mongodb.com",
    icon: "🍃",
  },
  {
    id: "cert-3",
    name: "Meta Front-End Developer",
    issuer: "Meta / Coursera",
    date: "2024",
    credentialUrl: "https://coursera.org",
    icon: "⚛️",
  },
  {
    id: "cert-4",
    name: "Google Project Management Certificate",
    issuer: "Google / Coursera",
    date: "2023",
    icon: "📋",
  },
];
