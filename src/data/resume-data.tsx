
import { Minimal } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sahib Singh",
  initials: "SS",
  location: "Punjab, India, IST",
  locationLink: "https://www.google.com/maps/place/Punjab,+India",
  about:
    "Jr. Full Stack Developer skilled in Angular, ReactJS, and Next.js, passionate about building scalable, efficient applications.",
  summary:
    "Full Stack Developer with expertise in Angular, React, Next.js, and WordPress, specializing in creating responsive, performance-driven web applications. Proficient in frontend and backend development, I have worked on diverse projects, including e-commerce platforms, booking systems, and corporate websites. My skillset includes advanced CSS techniques, Firebase integration, AI technologies, and systematic trading systems, with a focus on delivering scalable, user-friendly solutions.",
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://cv.sahib.co.in",
  contact: {
    email: "singh0sahib@gmail.com",
    tel: "+91 8437786328",
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
        url: "/SahibSinghResume.pdf",
        icon: ResumeIcon,
        download: true,
        target: "_blank",
      },
    ],
  },
  education: [
    {
      school: "Sardar Beant Singh State University",
      degree: "Bachelor of Technology in Information Technology",
      start: "2020",
      end: "2024",
      cgpa: "7.92/10",
    },
    {
      school: "S.S.M College",
      degree: "Senior Secondary Education",
      start: "2019",
      end: "2020",
      cgpa: "92.44%",
    },
  ],
  work: [
    {
      company: "Fanatic Coders",
      link: "https://fanticscoder.com",
      badges: ["Trainee"],
      title: "Software Engineer (Trainee)",
      logo: Minimal,
      start: "Jan 2024",
      end: "Jul 2024",
      description:
        "Developed an e-commerce platform using Angular, integrated WordPress and WooCommerce REST API. Focused on optimizing site performance and responsive design. Participated in a 6-month Angular training program.",
    },
    {
      company: "FutureFinder",
      link: "https://futurefinder.com",
      badges: ["Intern"],
      title: "Web Development Intern",
      logo: Minimal,  // Replace with your logo
      start: "Jul 2023",
      end: "Aug 2023",
      description:
        "Developed dynamic web applications using HTML, CSS, JavaScript, and ReactJS. Contributed to front-end and back-end projects.",
    },
    {
      company: "Veintes Tech",
      link: "https://veintes.com",
      badges: ["Intern"],
      title: "ReactJS Developer Intern",
      logo: Minimal,
      start: "Jun 2022",
      end: "Jul 2022",
      description:
        "Developed a Dashboard Admin Panel using ReactJS, improving modularity and scalability. Optimized state management with React Hooks and Context API.",
    },
    {
      company: "IIT Ropar",
      link: "https://www.iitrpr.ac.in",
      badges: ["Remote"],
      title: "AI and Data Science Trainee",
      logo: Minimal,
      start: "Sep 2021",
      end: "Feb 2022",
      description:
        "Completed training on AI and Machine Learning, gaining proficiency in algorithms and applying them in Python for data classification tasks. Improved predictive accuracy through advanced statistical modeling.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "SCSS",
    "SQL",
    "Angular",
    "React.js",
    "Next.js",
    "Node.js",
    "TensorFlow",
    "PyTorch",
    "jQuery",
    "Bootstrap",
    "Firebase",
    "WordPress",
    "WooCommerce",
    "Tailwind CSS",
    "Shadcn",
    "Electron",
    "Ionic",
    "ReactNative",
  ],
  projects: [
    {
      title: "Bagly",
      techStack: [
        "Angular",
        "WordPress",
        "WooCommerce API",
        "Node.js",
      ],
      description:
        "Developed a feature-rich e-commerce platform for ladies' bags, focusing on dynamic product management and performance optimization.",
      logo: Minimal,
      link: {
        label: "bagly.com",
        href: "https://bagly.sahib.co.in",
      },
    },
    {
      title: "FanaticCoder Website",
      techStack: ["Next.js", "JavaScript", "CSS"],
      description: "Designed and developed the official website for a web development company, incorporating modern UI/UX practices to ensure responsive design and seamless navigation.",
      logo: Minimal,
      link: {
        label: "fanaticcoders.com",
        href: "https://fanaticcoders.sahib.co.in",
      },
    },
    {
      title: "Henna Art Booking Website",
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "Shadcn"],
      description: "Engineered a comprehensive henna art booking platform featuring user authentication, booking management, and a toggle for dark/light mode.",
      logo: Minimal,
      link: {
        label: "henna-booking.com",
        href: "https://hennaart.sahib.co.in/",
      },
    },
    {
      title: "Dynamic WordPress Solutions for Ambitious Enterprises",
      techStack: ["Angular", "WordPress", "JavaScript", "CSS"],
      description: "Constructed a modern, responsive WordPress website with integrated payment systems and robust security measures, tailored for ambitious enterprises.",
      logo: Minimal,
      link: {
        label: "wordpress-solution.com",
        href: "https://wordpress-solution.sahib.co.in",
      },
    },
    {
      title: "Portfolio Website",
      techStack: ["Next.js", "Bootstrap"],
      description:
        "Created a personal portfolio website to effectively showcase my projects, resume, and blog posts, utilizing Next.js for performance and Bootstrap for responsive design.",
      logo: Minimal,
      link: {
        label: "sahibblogs.com",
        href: "https://sahibsingh0.netlify.app",
      },
    },
  ],
} as const;