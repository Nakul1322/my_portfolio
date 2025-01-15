import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  aws,
  tailwind,
  nodejs,
  git,
  mongo,
  docker,
  postgresql,
  nginx,
  graphql,
  trailchallenger,
  nectarplus,
  softlink,
  cyoa,
  coverhunt,
  appventurez,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Cloud & DevOps",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Systems",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NGINX",
    icon: nginx,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mongo",
    icon: mongo,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// const experiences = [
//   {
//     title: "Summer Intern",
//     company_name: "Aptron Solutions",
//     icon: coverhunt,
//     iconBg: "#333333",
//     date: "Jun 2019 - Jul 2019",
//   },
//   {
//     title: "Software Developer",
//     company_name: "Appventurez",
//     icon: appventurez,
//     iconBg: "#333333",
//     date: "Jun 2021 - Nov 2023",
//   },
// ];

const experiences = [
  {
    title: "Summer Intern",
    company_name: "Aptron Solutions",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jun 2019 - Jul 2019",
    roles: [
      "Assisted in business and data analysis using AWS services, supporting decision-making processes with Python scripts for automation.",
      "Collaborated with multiple departments using Agile methodologies for the implementation of marketing strategies, increasing customer engagement.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Appventurez",
    icon: appventurez,
    iconBg: "#333333",
    date: "Jun 2021 - Nov 2023",
    roles: [
      "Designed and implemented scalable microservices architecture using Node.js, enhancing system performance and delivering secure,reliable services.",
      "Developed event-driven services focusing on real-time communication and process automation with Node.js, improving system responsiveness.",
      "Built and optimized RESTful APIs to ensure efficient, secure communication between front-end and back-end components, enhancing the user experience.",
      "Participated in the full Software Development Life Cycle (SDLC) with cross-functional teams, ensuring seamless CI/CD integration and faster deployments.",
      "Enhanced system security, reliability, and scalability through robust testing and performance optimization practices, reducing system downtime."
    ],
  },
];

const projects = [
  {
    id: "project-1",
    name: "Trail Challenger",
    description:
      "Trail Challenger is an app based hiking challenge. Complete epic trails in your own time, at your own pace and earn a real medal upon completion.",
    tags: [
      {
        name: "angular",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "yellow-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
    ],
    image: trailchallenger,
    repo: "https://github.com/Nakul1322/trailchallenger",
    demo: "https://www.trailchallenger.com/",
  },
  {
    id: "project-2",
    name: "Softlink",
    description:
      "Build your Online Shop in 2 minutes using AI. Our AI does all the heavy lifting, so you can focus on making profits.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "yellow-text-gradient",
      },
      {
        name: "googleanalytics",
        color: "yellow-text-gradient",
      },
      {
        name: "caddy",
        color: "blue-text-gradient",
      },
    ],
    image: softlink,
    repo: "https://github.com/Nakul1322/softlink_backend",
    demo: "https://softlink.ai/",
  },
  {
    id: "project-3",
    name: "NectarPlus",
    description:
      "Nectar Plus is a healthcare platform that connects patients with doctors online.",
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
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "yellow-text-gradient",
      },
    ],
    image: nectarplus,
    repo: "https://github.com/Nakul1322/nectarPlus",
    demo: "https://nectarplus.health/",
  },
  {
    id: "project-4",
    name: "CYOA-Masterminds",
    description: `No-Code Platform for CYOA Textbook Games.`,
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "nginx",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: cyoa,
    repo: "https://github.com/Nakul1322/cyoa-masterminds",
    demo: "https://cyoa-masterminds.com/",
  },
];

export { services, technologies, experiences, projects };
