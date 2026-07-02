const experience = [
  {
    id: 1,
    company: "Tunisie Telecom",
    position: "Software Engineering Intern",
    location: "Nabeul, Tunisia",
    startDate: "2026-06",
    endDate: "Present",
    current: true,
    description:
      "Developing a full-stack web platform for managing employee social activities, from functional specifications through to a containerized deployment with automated end-to-end testing.",
    longDescription:
      "Independently building a web application to manage employee social activities at Tunisie Telecom, starting from a formal specifications document (cahier des charges) I wrote and covering the full stack alone: a Spring Boot backend exposing secured REST APIs (Spring Security, JWT), a React frontend for employees and administrators, and MySQL/MongoDB for data storage. I containerized the application with Docker, set up an Nginx reverse proxy, and wrote an end-to-end test plan to validate key user flows.",
    technologies: ["Java", "Spring Boot", "Spring Security", "React", "MySQL", "MongoDB", "Docker", "Nginx", "JWT", "Git"],
  },
  {
    id: 2,
    company: "RIF",
    position: "Software Engineering Intern",
    location: "Remote · France",
    startDate: "2025-06",
    endDate: "2025-08",
    current: false,
    description:
      "Developed and customized Odoo modules for recruitment management while working with Python, PostgreSQL and XML.",
    longDescription:
      "Independently developed a recruitment management module in Odoo, handling backend logic in Python with PostgreSQL for data persistence, and building the module's views and interfaces with XML. Contributed end-to-end features including authentication, job application handling, and candidate management, and built responsive interfaces with JavaScript.",
    technologies: ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript", "Git"],
  },
  {
    id: 3,
    company: "National Broadcasting Office",
    position: "Full Stack Developer Intern",
    location: "Tunisia",
    startDate: "2023-01",
    endDate: "2023-06",
    current: false,
    description:
      "Developed a web and mobile intranet application with secure authentication and REST APIs.",
    longDescription:
      "Independently designed and developed a web and mobile intranet application from the ground up. Built the backend with Java and Spring Boot, exposing REST APIs backed by MySQL, and implemented security with both Basic Auth and JWT. Built the graphical interfaces across web and mobile using Angular and Flutter with HTML/CSS.",
    technologies: ["Java", "Spring Boot", "Angular", "Flutter", "MySQL", "JWT"],
  },
  {
    id: 4,
    company: "Neopolis Development",
    position: "Frontend Developer Intern",
    location: "Tunisia",
    startDate: "2022-06",
    endDate: "2022-08",
    current: false,
    description:
      "Developed responsive Angular interfaces and integrated REST APIs documented with Swagger.",
    longDescription:
      "Independently built interactive, responsive web pages for an insurance management platform using Angular, HTML, and CSS. Integrated REST APIs documented with Swagger to retrieve and display insurance data on the frontend.",
    technologies: ["Angular", "HTML", "CSS", "JavaScript", "REST API", "Swagger"],
  },
];

export default experience;