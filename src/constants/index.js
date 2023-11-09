/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    blockchain,
    web,
    figma,
    javascript,
    jira,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    research,
    bandcoin,
    action,
    script3,
    actionverse,
    threejs,
    spline,
    stellar,
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
      title: "Project Management (IT)",
      icon: web,
    },
    {
      title: "UI Designer",
      icon: backend,
    },
    {
      title: "Community Management",
      icon: research,
    },
    {
      title: "Technical Writing",
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
      name: "Figma",
      icon: figma,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Jira",
      icon: jira,
    },
    {
      name: "Spline 3D",
      icon: spline,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Project Manager - Remote ✈️",
      company_name: "BandCoin",
      icon: bandcoin,
      iconBg: "#383E56",
      date: "August 2023 - Current",
      points: [
      "Responsible for recruting web developers, 3D artists, video creators.",
      "Responsible for handling music creation, upload, management related projects.",
      "Responsible to communicate as a middleman between client and employees"
      ].join(';' + ' ' + ' '),
    },
    {
      title: "IT Project Manager - Remote ✈️",
      company_name: "Action Tokens,LLC",
      icon: action,
      iconBg: "#E6DEDD",
      date: "October 2022  - August 2023",
      points: [
        "Responsible for hiring and recruiting software developers",
        "Responsible for building websites, making related reports and payment",
        "Acting as a middleman between anonomyous client and dev"
      ].join(';' + ' ' + ' '),
    },
    {
      title: "Intern (Community Manager) - Remote ✈️",
      company_name: "Action Tokens,LLC",
      icon: action,
      iconBg: "#E6DEDD",
      date: "June 2022  - October 2022",
      points: [
        "Responsible for managing communities related to Action Token and its sub-brands",
        "Managing, updating commnities on  new products, creating artifical hype/scarcity",
      ].join(';' + ' ' + ' '),
    },
    {
      title: "Project Manager - JPEG DAO Workshop",
      company_name: "Stellar Blockchain & The JPEG DAO community",
      icon: stellar,
      iconBg: "#F0F0F0",
      date: "January 2022 - March 2022",
      points: [
        "Responsible for creating the first ever NFT workshop on Stellar",
        "Responsible for submitting an NFT grant towards artist and tutors in the Stellar Blockchain",
        "Recruting devs and tutors to participate on podcast",
        "Managing all requirements and payments to artist, tutors and participants related the project",
      ].join(';' + ' ' + ' '),
    },
    {
      title: "APAC (Asia Pacific) Community Manager - Remote ✈️",
      company_name: "Script3 (YeildbLox)",
      icon: script3,
      iconBg: "#F0F0F0",
      date: "September 2021 - December 2022",
      points: [
        "Responsible for managing community server and social medias",
        "Handeling 1 month long DeFi bug bounty hunt for 3000 participants",
      ].join(';' + ' ' + ' '),
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
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };