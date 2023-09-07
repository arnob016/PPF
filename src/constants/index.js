/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    blockchain,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    research,
    bandcoin,
    action,
    script3,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const helpLinks = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "hire",
      title: "Hire me.",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Researcher",
      icon: research,
    },
    {
      title: "Blockchain Developer",
      icon: blockchain,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Project Manager & DevOps Manager - Remote ✈️",
      company_name: "BandCoin",
      icon: bandcoin,
      iconBg: "#383E56",
      date: "July 2023 - Current",
      points: [
        "Managing project budgets, resource allocation and negotiations",
        "Community Management during project period",
        "Creating UI design and ensuring product delivery",
        "Providing feedback to developers.",
      ],
    },
    {
      title: "Junior Developer - Remote ✈️",
      company_name: "Action Tokens,LLC",
      icon: action,
      iconBg: "#E6DEDD",
      date: "Fenruary 2022  - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies on Stellar Blockchain",
        "Creating Blockchain solution and product engineering",
      ],
    },
    {
      title: "Intern (Developer) - Remote ✈️",
      company_name: "Action Tokens,LLC",
      icon: action,
      iconBg: "#E6DEDD",
      date: "August 2022  - February 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "APAC (Asia Pacific) Community Manager - Remote ✈️",
      company_name: "Script3 (YeildbLox)",
      icon: script3,
      iconBg: "#F0F0F0",
      date: "September 2021 - March 2022",
      points: [
        "Community Manager for Asian countries",
        "Python Scripter, Communication services (social media) manager",
        "Monitor digital spaces and engaging with users",
        "Participating in alpha, beta testing and providing feedback to developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };