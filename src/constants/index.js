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
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
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
      points: 
        "A music and art focused company that aims to embed artists with tech.",
      
    },
    {
      title: "Junior Developer - Remote ✈️",
      company_name: "Action Tokens,LLC",
      icon: action,
      iconBg: "#E6DEDD",
      date: "February 2023  - July 2023",
      points: [
        "Developing solutions on real-world problems at Stellar Blockchain.",
      ],
    },
    {
      title: "Intern (Developer) - Remote ✈️",
      company_name: "Action Tokens,LLC",
      icon: action,
      iconBg: "#E6DEDD",
      date: "August 2022  - February 2023",
      points: [
        "Developing solutions on real-world problems at Stellar Blockchain." 
      ],
    },
    {
      title: "APAC (Asia Pacific) Community Manager - Remote ✈️",
      company_name: "Script3 (YeildbLox)",
      icon: script3,
      iconBg: "#F0F0F0",
      date: "September 2021 - March 2022",
      points: [
        "Strategically contributing to DeFi and unlocking potential on Blockchain.",
      ],
    },
  ];
  


  const projects = [
      {
        title: "Band",
        contribution: "July, 2020",
        icon: bandcoin,
        desc: ["Managing project budgets, resource allocation, and negotiations"],
        tags: ["tag1", "tag2", "tag3"],
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
  
  export { services, technologies, experiences, testimonials, projects };