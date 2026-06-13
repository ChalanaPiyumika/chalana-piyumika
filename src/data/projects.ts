export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  year: number;
}

export const projects: Project[] = [
  {
    id: "tourpath",
    title: "TourPath",
    description: "A comprehensive travel booking and tour management platform with real-time availability and smart recommendations.",
    longDescription: "TourPath is a full-stack travel platform that allows users to discover, book, and manage tours across Sri Lanka. Features include real-time seat availability, dynamic pricing, secure payment integration, and an admin dashboard for tour operators.",
    tags: ["Node.js", "Express", "MongoDB", "React", "Redux", "Stripe"],
    image: "/projects/tourpath.jpg",
    github: "https://github.com/chalanapiyumika/tourpath",
    live: "https://tourpath.example.com",
    featured: true,
    status: "in-progress",
    year: 2026,
  },
  {
    id: "ecommerce-platform",
    title: "ShopVerse",
    description: "A modern e-commerce platform with advanced filtering, cart management, and seamless checkout experience.",
    longDescription: "ShopVerse is a full-featured e-commerce platform built with Next.js and Node.js. It includes product management, advanced search and filtering, wishlist, shopping cart, and PayHere payment gateway integration.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "PayHere"],
    image: "/projects/shopverse.jpg",
    github: "https://github.com/chalanapiyumika/shopverse",
    featured: true,
    status: "completed",
    year: 2025,
  },
  {
    id: "task-management",
    title: "TaskFlow",
    description: "A Kanban-style task management app with real-time collaboration and team analytics.",
    longDescription: "TaskFlow is a collaborative project management tool inspired by Trello. It features drag-and-drop Kanban boards, real-time updates via WebSockets, team member management, deadline tracking, and productivity analytics.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Chart.js"],
    image: "/projects/taskflow.jpg",
    github: "https://github.com/chalanapiyumika/taskflow",
    live: "https://taskflow.example.com",
    featured: true,
    status: "completed",
    year: 2025,
  },
  {
    id: "weather-app",
    title: "WeatherNow",
    description: "A beautiful weather application with 7-day forecasts, location search, and animated weather visuals.",
    longDescription: "WeatherNow fetches real-time weather data from OpenWeatherMap API and displays it with beautiful animated visuals. Features include hourly and 7-day forecasts, location search, GPS detection, and weather alerts.",
    tags: ["React", "OpenWeatherMap API", "CSS Animations", "Geolocation"],
    image: "/projects/weathernow.jpg",
    github: "https://github.com/chalanapiyumika/weathernow",
    live: "https://weathernow.example.com",
    featured: false,
    status: "completed",
    year: 2024,
  },
  {
    id: "chat-app",
    title: "ChatSphere",
    description: "Real-time chat application with rooms, direct messages, file sharing, and emoji reactions.",
    longDescription: "ChatSphere is a real-time messaging platform with group chats, direct messages, file sharing, emoji reactions, and read receipts. Built with Socket.io for instant messaging and Firebase for media storage.",
    tags: ["React", "Socket.io", "Node.js", "Firebase", "MongoDB"],
    image: "/projects/chatsphere.jpg",
    github: "https://github.com/chalanapiyumika/chatsphere",
    featured: false,
    status: "completed",
    year: 2024,
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    description: "My first personal portfolio website built with vanilla HTML, CSS, and JavaScript.",
    longDescription: "My original portfolio website featuring responsive design, smooth scrolling, and a contact form. This was my first major personal project that I built to showcase my early work.",
    tags: ["HTML", "CSS", "JavaScript", "EmailJS"],
    image: "/projects/portfolio-v1.jpg",
    github: "https://github.com/chalanapiyumika/portfolio-v1",
    featured: false,
    status: "archived",
    year: 2023,
  },
];
