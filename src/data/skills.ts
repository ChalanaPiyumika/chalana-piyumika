export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string; // emoji or icon name
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    color: "#a855f7",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TypeScript", level: 80, icon: "🔷" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    color: "#7c3aed",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 82, icon: "🚀" },
      { name: "REST APIs", level: 88, icon: "🔌" },
      { name: "GraphQL", level: 70, icon: "📊" },
      { name: "Java", level: 75, icon: "☕" },
    ],
  },
  {
    category: "Database",
    color: "#6d28d9",
    skills: [
      { name: "MongoDB", level: 82, icon: "🍃" },
      { name: "PostgreSQL", level: 78, icon: "🐘" },
      { name: "MySQL", level: 80, icon: "🗄️" },
      { name: "Redis", level: 65, icon: "🔴" },
      { name: "Firebase", level: 75, icon: "🔥" },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#5b21b6",
    skills: [
      { name: "Git", level: 90, icon: "🌿" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "AWS", level: 65, icon: "☁️" },
      { name: "Linux", level: 75, icon: "🐧" },
      { name: "CI/CD", level: 68, icon: "⚙️" },
    ],
  },
];
