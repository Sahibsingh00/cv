import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sahib Singh",
  initials: "SS",
  location: "Punjab, India, IST",
  locationLink: "https://www.google.com/maps/place/Punjab,+India",
  about:
    "Jr. Full Stack Developer skilled in Angular, learning ReactJS, and passionate about building scalable, efficient applications with a focus on DevOps.",
  summary:
    "Proficient in Angular, with experience in building scalable, responsive web applications. Currently expanding my knowledge of ReactJS to diversify my technical expertise. Focused on delivering high-quality projects and continuously learning new technologies to stay ahead in full stack development and DevOps.",
  avatarUrl: "/avatar.png",  // Avatar image in public folder
  personalWebsiteUrl: "https://sahibsingh0.netlify.app",  // Your website
  contact: {
    email: "singh0sahib@gmail.com",  // Your email
    tel: "+91 8437786328",  // Your phone number
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SahibSingh",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahib-0-singh/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/SahibSingh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Beant College of Engineering & Technology",
      degree: "Bachelor's Degree in Information Technology",
      start: "2020",
      end: "2024",
      cgpa: "7.92/10",
    },
  ],
  work: [
    {
      company: "Fanatic Coders",
      link: "https://fanticscoder.com",
      badges: ["Remote"],
      title: "Software Engineer (Trainee)",
      logo: Minimal,  // Replace with your logo
      start: "July 2024",
      end: null,
      description:
        "Developing an Angular-based e-commerce platform with a WordPress backend and WooCommerce REST API. Focus on performance optimization and responsive design.",
    },
    {
      company: "IIT Ropar",
      link: "https://www.iitrpr.ac.in",
      badges: ["Intern"],
      title: "AI and Data Science Trainee",
      logo: Minimal,  // Replace with your logo
      start: "Sep 2023",
      end: "Feb 2024",
      description:
        "Completed AI and Data Science upskilling program (Level 3). Gained proficiency in Machine Learning algorithms, data analysis, and statistical modeling. Developed practical skills in Python programming for data science applications.",
    },
    {
      company: "FutureFinder",
      link: "https://futurefinder.com",
      badges: ["Intern"],
      title: "Web Development Intern",
      logo: Minimal,  // Replace with your logo
      start: "May 2024",
      end: "Jun 2024",
      description:
        "Developed dynamic web applications using HTML, CSS, JavaScript, and ReactJS. Contributed to front-end and back-end projects.",
    },
    {
      company: "Veintes Tech",
      link: "https://veintes.com",
      badges: ["Intern"],
      title: "ReactJS Developer Intern",
      logo: Minimal,  // Replace with your logo
      start: "Mar 2024",
      end: "Apr 2024",
      description:
        "Built a Dashboard Admin Panel using ReactJS and Redux, focusing on state management and UI component reuse.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Angular",
    "ReactJS",
    "Node.js",
    "Firebase",
    "MongoDB",
    "SQL/NoSQL",
    "HTML/CSS",
    "DevOps",
    "CI/CD",
  ],
  projects: [
    {
      title: "Bagly",
      techStack: [
        "Full Stack Developer",
        "Angular",
        "WordPress",
        "WooCommerce API",
        "Node.js",
      ],
      description:
        "E-commerce platform for ladies' bags, with dynamic product management and optimized performance.",
      logo: Minimal,
      link: {
        label: "bagly.com",
        href: "https://bagly.com",  // Replace with your project link
      },
    },
    {
      title: "Dynamic Blog Platform",
      techStack: [
        "Lead Developer",
        "Angular",
        "Firebase",
        "Firestore",
      ],
      description:
        "Built a real-time blog platform with user authentication and role-based access control.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/SahibSingh/dynamic-blog-platform",
      },
    },
    {
      title: "Portfolio Website",
      techStack: ["Side Project", "Next.js", "Bootstrap"],
      description:
        "Personal portfolio website showcasing projects, resume, and blog posts, built using Next.js.",
      logo: Minimal,
      link: {
        label: "sahibblogs.com",
        href: "https://sahibsingh0.netlify.app",  // Your website link
      },
    },
  ],
} as const;
