export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  status: "completed" | "in-progress" | "archived";
  year: number;
}

export const projects: Project[] = [
  {
    id: "jungle-eye-safari",
    title: "Jungle Eye Safari",
    description: "Wildlife Safari Booking Platform Live Web Application.",
    longDescription: "Developed a modern web platform for a Sri Lankan wildlife safari and tour company, enabling users to explore safari destinations and tour experiences through a responsive and user-friendly interface. Implemented full-stack web functionalities and contributed to the development of the platform using an iterative development approach.",
    tags: ["Next.js", "PostgreSQL"],
    image: "/projects/jungleeyesafari.png",
    live: "https://jungleeyesafari.com/",
    status: "completed",
    year: 2026,
  },
  {
    id: "jobseek",
    title: "JobSeek",
    description: "A Web Platform for Finding Part Time Jobs.",
    longDescription: "JobSeek is a web-based platform developed to connect part-time job seekers with employers, simplifying the job search and recruitment process. The system enables users to register, search and apply for jobs, upload CVs, and communicate with employers through an integrated messaging system. Key Features: User and employer registration, job posting, search and filtering, application tracking, messaging, notifications, and admin dashboard.",
    tags: ["React", "PHP", "MySQL", "Azure Blob Storage"],
    image: "/projects/jobseek.png",
    live: "https://youtu.be/jbrXxSFm89I",
    status: "completed",
    year: 2025,
  },
  {
    id: "travelease",
    title: "TravelEase",
    description: "A Web Platform for Tour Package Booking.",
    longDescription: "Developed a web-based travel booking platform enabling users to browse tour packages, make and manage bookings, and submit reviews, while providing an admin dashboard for package management. Built responsive frontend interfaces and backend functionalities following an iterative development approach.",
    tags: ["React", "Django", "MySQL"],
    image: "/projects/travelease.png",
    live: "https://youtu.be/MGkmMWR202w",
    status: "completed",
    year: 2025,
  },
  {
    id: "find-my-degree",
    title: "Find My Degree",
    description: "Degree Recommendation Web System.",
    longDescription: "Developed a web platform that recommends university degree programs based on student results and previous district cutoff marks in Sri Lanka.",
    tags: ["PHP", "JavaScript", "MySQL"],
    image: "/projects/findmydegree.png",
    live: "https://findmydegree.lk/",
    status: "completed",
    year: 2021,
  },
  {
    id: "charani-tours",
    title: "Charani Tours",
    description: "A Tour Booking and Management Platform.",
    longDescription: "A modern web application built for Charani Tours to facilitate tour package management, itinerary planning, and bookings. Features include interactive mapping, image management with Cloudinary, Firebase backend integration, and a comprehensive admin interface.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps"],
    image: "",
    status: "in-progress",
    year: 2026,
  },
];
