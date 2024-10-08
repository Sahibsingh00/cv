import { Minimal } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sahib Singh",
  initials: "SS",
  location: "Punjab, India, IST",
  locationLink: "https://www.google.com/maps/place/Punjab,+India",
  about:
    "Jr. Full Stack Developer skilled in Angular, learning ReactJS, and passionate about building scalable, efficient applications with a focus on DevOps.",
  summary:
    "Full Stack Developer with expertise in Next.js, React, Angular, and WordPress, specializing in creating responsive, performance-driven web applications. Proficient in frontend and backend development, I have worked on diverse projects, including e-commerce platforms, booking systems, and corporate websites. My skillset includes advanced CSS techniques, Firebase integration, AI technologies, and systematic trading systems, with a focus on delivering scalable, user-friendly solutions.",
  avatarUrl: "/avatar.png",  // Avatar image in public folder
  personalWebsiteUrl: "https://sahibsingh0.netlify.app",  // Your website
  contact: {
    email: "singh0sahib@gmail.com",  // Your email
    tel: "+91 8437786328",  // Your phone number
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Sahibsingh00",
        icon: GitHubIcon,
        target: "_blank",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahib-0-singh/",
        icon: LinkedInIcon,
        target: "_blank",
      },
      {
        name: "Download CV",
        url: "/SahibResume.pdf", // Replace with the actual path to your resume file
        icon: ResumeIcon,
        download: true,
        target: "_blank",
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
    "NextJS",
    "ReactJS",
    "Tailwind CSS",
    "Shadcn",
    "Bootstrap",
    "WordPress",
    "WooCommerce",
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
        href: "https://bagly.sahib.co.in",  // Replace with your project link
      },
    },
    {
      title: "FanaticCoder Website",
      techStack: ["Next.js", "JavaScript", "CSS"],
      description: "Developed the official website for a web development company, showcasing their services, portfolio, and blog. Built with modern UI/UX practices, ensuring responsive design and seamless navigation.",
      logo: Minimal,
      link: {
        label: "fanaticcoders.com",
        href: "https://fanaticcoders.sahib.co.in",  // Replace with the actual project link
      },
    },
    {
      title: "Henna Art Booking Website",
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "Shadcn"],
      description: "Developed a Henna art booking platform with user authentication, booking management, and dark/light mode options.",
      logo: Minimal,
      link: {
        label: "henna-booking.com",
        href: "https://hennaart.sahib.co.in/",  // Replace with the actual project link
      },
    },
    {
      title: "Dynamic WordPress Solutions for Ambitious Enterprises",
      techStack: ["Full Stack Developer", "Angular", "WordPress", "JavaScript", "CSS"],
      description: "Developed a modern and responsive WordPress website with optimized performance, security measures, and integrated payment systems for ambitious enterprises.",
      logo: Minimal,
      link: {
        label: "wordpress-solution.com",
        href: "https://wordpress-solution.sahib.co.in",  // Replace with the actual project link
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
