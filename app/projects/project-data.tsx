export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Triivu",
    year: 2025,
    description: "Website for the Triivu app (in progress), built with TypeScript, Next.js and Tailwind CSS.",
    url: "https://triivu-web.vercel.app",
    //repository: "https://github.com/Aegox/triivu-web"
  },
  {
    title: "AmunPOS",
    year: 2025,
    description: "Website for my POS system (in progress), designed to be rented monthly, built with TypeScript, Next.js and Tailwind CSS.",
    url: "https://amunpos-website.vercel.app/",
    //repository: "https://github.com/Aegox/amunpos-website"
  },
  {
    title: "Amun Services",
    year: 2024,
    description: "Website for my web development company, built with React.js.",
    url: "https://amun-services-web.vercel.app/",
    //repository: "https://github.com/Aegox/amun-services-web"
  },
  {
    title: "Pomodoro Clock",
    year: 2024,
    description: "Pomodoro timer website built with HTML, CSS, and JavaScript. Currently in use.",
    url: "https://pomodoro-web-henna.vercel.app/",
    //repository: "https://github.com/Aegox/pomodoro-web"
  },
  {
    title: "Karinitos",
    year: 2024,
    description: "Website for a party supplies and crafts store client, built with HTML, CSS, and JavaScript.",
    url: "https://karinitos.vercel.app/",
    //repository: "https://github.com/Aegox/karinitos"
  },
  {
    title: "Orion MusicX",
    year: 2021,
    description: "E-commerce website for selling music tracks, a group project with 7 contributors built with React.js, Redux, Firebase, Bootstrap, CSS, Node.js, Figma, and third-party authentication.",
    url: "https://orion-proyect.web.app/",
    //repository: "https://github.com/Aegox/PF-Ecommerce-MusicX"
  }
];
