import React from "react";
import { Cloud, Leaf, Code2, ClipboardList } from "lucide-react";

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
  icon: React.ReactNode;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Trainee Software Developer",
    company: "Trex Labs (Pvt) Ltd",
    location: "Sri Lanka",
    type: "internship",
    startDate: "Dec 2025",
    endDate: "May 2026",
    description: "Worked as a Trainee Software Developer.",
    responsibilities: [],
    technologies: [],
  }
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "BSc. (Hons) in Computer Science and Technology",
    field: "Computer Science",
    institution: "Uva Wellassa University",
    location: "Sri Lanka",
    startDate: "2023",
    endDate: "Present",
    description: "Undergraduate at the Department of Computer Science and Informatics.",
  },
  {
    id: "edu-2",
    degree: "G.C.E Advanced Level",
    field: "Physical Science",
    institution: "Bandarawela Central College",
    location: "Sri Lanka",
    startDate: "2013",
    endDate: "2021",
    achievements: [
      "ICT - A",
      "Combined Mathematics - C",
      "Physical Science - C",
      "G.C.E Ordinary Level (2018): 8 A's and 1 B"
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Fundamentals of Digital System Design",
    issuer: "University of Moratuwa",
    date: "2024",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: "cert-2",
    name: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2022",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: "cert-3",
    name: "Diploma in English",
    issuer: "British way English Academy",
    date: "2019",
    icon: <ClipboardList className="w-5 h-5" />,
  },
];
