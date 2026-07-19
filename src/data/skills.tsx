import React from "react";
import { 
  SiPython, SiJavascript, SiTypescript, SiPhp, SiC, 
  SiReact, SiNextdotjs, SiNestjs, SiHtml5, SiTailwindcss, SiSpringboot, SiDjango,
  SiMysql, SiPostgresql, SiGit, SiExpress
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaJava, FaAws } from "react-icons/fa";
import { Layers, Cpu, Users } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ReactNode; // React node for icon
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    color: "#a855f7",
    skills: [
      { name: "Python", level: 90, icon: <SiPython className="w-5 h-5" /> },
      { name: "Java", level: 85, icon: <FaJava className="w-5 h-5" /> },
      { name: "C", level: 80, icon: <SiC className="w-5 h-5" /> },
      { name: "JavaScript", level: 90, icon: <SiJavascript className="w-5 h-5" /> },
      { name: "TypeScript", level: 85, icon: <SiTypescript className="w-5 h-5" /> },
      { name: "PHP", level: 80, icon: <SiPhp className="w-5 h-5" /> },
    ],
  },
  {
    category: "Web Dev",
    color: "#7c3aed",
    skills: [
      { name: "React", level: 90, icon: <SiReact className="w-5 h-5" /> },
      { name: "Next.js", level: 85, icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "Nest.js", level: 80, icon: <SiNestjs className="w-5 h-5" /> },
      { name: "HTML / CSS", level: 95, icon: <SiHtml5 className="w-5 h-5" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="w-5 h-5" /> },
      { name: "Spring Boot", level: 80, icon: <SiSpringboot className="w-5 h-5" /> },
      { name: "Django", level: 75, icon: <SiDjango className="w-5 h-5" /> },
      { name: "Express.js", level: 80, icon: <SiExpress className="w-5 h-5" /> },
    ],
  },
  {
    category: "Databases & Cloud",
    color: "#6d28d9",
    skills: [
      { name: "MySQL", level: 85, icon: <SiMysql className="w-5 h-5" /> },
      { name: "PostgreSQL", level: 80, icon: <SiPostgresql className="w-5 h-5" /> },
      { name: "Microsoft Azure", level: 75, icon: <VscAzure className="w-5 h-5" /> },
      { name: "AWS", level: 70, icon: <FaAws className="w-5 h-5" /> },
    ],
  },
  {
    category: "Core & Tools",
    color: "#5b21b6",
    skills: [
      { name: "Data Structures", level: 85, icon: <Layers className="w-5 h-5" /> },
      { name: "OOP Concepts", level: 90, icon: <Cpu className="w-5 h-5" /> },
      { name: "Git", level: 85, icon: <SiGit className="w-5 h-5" /> },
      { name: "Project Management", level: 80, icon: <Users className="w-5 h-5" /> },
    ],
  },
];
