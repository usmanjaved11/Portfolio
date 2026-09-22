/**
 * CENTRAL PORTFOLIO DATA
 * ----------------------
 * All personal content lives here. No UI component needs to change.
 */
import type { IconType } from "react-icons";
import { SiCplusplus, SiPython, SiOpenjdk, SiGit, SiGithub } from "react-icons/si";
import { FaDiagramProject, FaCubes, FaBug } from "react-icons/fa6";

import profileImage from "@/assets/profile-placeholder.jpg";
import coffeeShopImage from "@/assets/coffee-shop-management.png";
import atmImage from "@/assets/atm-management.png";
import noteTakingImage from "@/assets/note-taking-app.png";

export const profile = {
  name: "M Usman",
  brand: "M.Usman",
  role: "Software Developer",
  description:
    "Motivated Software Engineering student at NUML Lahore with hands-on experience building C++, Python, and Java desktop applications. Skilled in OOP, file handling, and problem-solving, with a proven ability to teach and communicate technical concepts clearly. Seeking an opportunity to apply and grow these skills in a professional software development role.",
  email: "muhammadusmanj62@gmail.com",
  phone: "+92 325 9759526",
  location: "Shera Kot, Lahore, Pakistan",
  image: profileImage,
  imageAlt: "Portrait of M Usman",
  cvUrl: "/cv/Muhammad_Usman_CV.pdf",
};

export type Education = {
  id: number;
  title: string;
  institution: string;
  period: string;
  points: string[];
};

export const education: Education[] = [
  {
    id: 1,
    title: "BS Software Engineering (Student)",
    institution: "National University of Modern Languages (NUML), Lahore",
    period: "2025 - 2029",
    points: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Programming in C++, Python and Java",
    ],
  },
];

export type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    id: 1,
    title: "Teacher",
    company: "Dar-ul-Hamd Academy, Lahore",
    period: "2025 - Present",
    points: [
      "Teach students from Classes 5-8 across assigned subjects.",
      "Prepare and deliver lessons according to students' learning levels.",
      "Explain concepts clearly and support students with academic difficulties.",
      "Conduct class activities, homework and assessments to monitor progress.",
      "Maintain a positive and disciplined classroom environment.",
    ],
  },
  {
    id: 2,
    title: "Cashier",
    company: "Lahore",
    period: "Jan 2024 - Feb 2025",
    points: [
      "Responsible for handling cash, managing transactions, and providing excellent customer service with accuracy and efficiency.",
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  description: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Coffee Shop Management System",
    technologies: ["C++", "OOP", "File Handling"],
    image: coffeeShopImage,
    imageAlt: "Preview of the Coffee Shop Management System project",
    description:
      "A command-line system simulating real-world coffee shop operations with order management, billing, inventory and stock control, employee management and admin controls. Uses file handling for persistent storage with OOP concepts, arrays and menu-driven programming.",
    githubUrl: "https://github.com/usmanjaved11/CoffeeShop_Simulation",
  },
  {
    id: 2,
    title: "ATM Management System",
    technologies: ["Python", "OOP", "File Handling"],
    image: atmImage,
    imageAlt: "Preview of the ATM Management System project",
    description:
      "A command-line ATM system with Admin and Customer roles supporting deposit, withdrawal, transfer, balance check, PIN change, transaction receipts and login attempt limits. Applies OOP, file handling, exception handling, input validation and basic authentication.",
    githubUrl: "https://github.com/usmanjaved11/ATM_Simulation",
  },
  {
    id: 3,
    title: "Note Taking Application",
    technologies: ["Java", "Swing", "File I/O"],
    image: noteTakingImage,
    imageAlt: "Preview of the Note Taking Application project",
    description:
      "A Java Swing desktop app to manage notes locally with create, view, delete, save and load using text file storage. Applies OOP, encapsulation, ArrayList, GUI components, event handling and file I/O with validation and error handling.",
    githubUrl: "https://github.com/usmanjaved11/NoteTaking-App",
  },
];

export type Skill = { name: string; icon: IconType; color: string };

export const skills: Skill[] = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: SiOpenjdk, color: "#E76F00" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Data Structures & Algorithms", icon: FaDiagramProject, color: "#7C5CBF" },
  { name: "Object-Oriented Programming", icon: FaCubes, color: "#5A6BB5" },
  { name: "Basic Debugging", icon: FaBug, color: "#C0563E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];

export const softSkills = [
  "Communication skills",
  "Time management",
  "Teamwork",
  "Critical thinking",
  "Problem solving",
];

export const languages = ["Urdu", "English", "Punjabi"];

export const hobbies = ["Traveling", "Cooking", "Cycling"];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/usmanjaved11" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-usman-javed-5610b5388",
  },
  { name: "Instagram", url: "https://www.instagram.com/ch_usman_1100" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
