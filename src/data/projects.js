const projects = [
  {
    id: "project-management",
    title: "Collaborative Project Management Platform",
    year: "2025",
    category: "Full Stack",
    description:
      "A collaborative platform for managing projects, users and tasks, with a Spring Boot API and Supabase.",
    longDescription:
      "A collaborative project and task management platform. The frontend is built with React for organizing projects, assigning tasks, and tracking team progress. It's backed by a Spring Boot API together with Supabase for data storage and authentication-related services.",
    image: `${import.meta.env.BASE_URL}images/projects/logo.png`,
    github: "https://github.com/Ahmedbensaid11/ProjectHub",
    demo: "",
    technologies: ["React", "Spring Boot", "Supabase", "JavaScript", "CSS"],
  },
  {
    id: "virtual-campus",
    title: "Virtual Campus",
    year: "2025",
    category: "Desktop Application",
    description:
      "A JavaFX desktop application that simulates a virtual university campus with buildings, users and academic management.",
    longDescription:
      "A JavaFX desktop simulation of a university campus, featuring interactive buildings, user roles (students, staff), and academic management tools such as course and schedule handling. Built as a Maven project with clean object-oriented design.",
    image: `${import.meta.env.BASE_URL}images/projects/background.png`,
    github: "https://github.com/Ahmedbensaid11/VirtuelCampus",
    demo: "",
    technologies: ["Java", "JavaFX", "Maven", "OOP"],
  },
  {
    id: "zanora",
    title: "Zanora — Smart Rental Platform",
    year: "2026",
    category: "Full Stack · Microservices",
    description:
      "A smart housing rental platform connecting tenants and landlords, built on a microservices architecture with real-time messaging and AI-powered rent estimation.",
    longDescription:
      "Zanora is a smart rental platform connecting tenants and landlords through a microservices architecture. It includes a Spring Cloud Gateway for routing, independent Spring Boot microservices for users and listings, a Quarkus-based AI service for rent price estimation, and real-time messaging via Socket.io. Data is split across PostgreSQL (core data) and MongoDB (messages), with Redis for caching and sessions. The frontend ships as an Expo (React Native) mobile app and a React + Vite web admin panel, all secured with JWT authentication, bcrypt password hashing, and role-based access control (USER, OWNER, ADMIN), and containerized with Docker.",
    image: `${import.meta.env.BASE_URL}images/projects/zanora.png`,
    imageFit: "contain",
    github: "https://github.com/Ahmedbensaid11/zanora",
    demo: "",
    technologies: ["React", "React Native", "Spring Boot",  "Quarkus", "PostgreSQL", "MongoDB", "Socket.io", "JWT", "Docker"],
  },
  {
    id: "space-invaders",
    title: "2D Space Invaders — Design Patterns Edition",
    year: "2025",
    category: "Desktop Application · Game",
    description:
      "A fully playable JavaFX remake of Space Invaders showcasing six core design patterns, with boss battles, power-ups and progressive difficulty.",
    longDescription:
      "A JavaFX remake of the classic Space Invaders arcade game, built to showcase six core software design patterns applied to real-time game logic: Singleton (game/logger/resource managers), State (menu, playing, boss, paused, game-over, victory states), Decorator (stackable player power-ups like shield and rapid fire), Composite (hierarchical enemy formations), Observer (score, UI, and sound events), and Factory (enemy, projectile, and power-up creation). Features boss battles with unique attack patterns, four enemy types, and progressively increasing difficulty, running on a JavaFX AnimationTimer game loop at ~60 FPS.",
    image: `${import.meta.env.BASE_URL}images/projects/space-invaders.png`,
    github: "https://github.com/Ahmedbensaid11/2D-Spaceinvader",
    demo: "",
    technologies: ["Java", "JavaFX", "Maven", "Design Patterns"],
  },
  {
    id: "virtual-city",
    title: "Virtual City Simulation",
    year: "2024",
    category: "Desktop Application",
    description: "A Qt desktop application simulating a city with interactive urban elements using object-oriented programming.",
    longDescription:
      "A Qt/C++ desktop simulation of a small city, modeling distinct urban entities — buildings, houses, factories, and parks — each as their own class within a broader city and simulation system. Built with object-oriented C++ and CMake, it demonstrates modular design for simulating interacting urban elements over time.",
    image: `${import.meta.env.BASE_URL}images/projects/virtual-city.png`,
    github: "https://github.com/Ahmedbensaid11/virtualcity",
    demo: "",
    technologies: ["C++", "Qt", "CMake", "OOP"],
  },
  {
    id: "ecommerce",
    title: "JEE E-Commerce Platform",
    year: "2022",
    category: "Web Application",
    description: "An e-commerce platform developed with Java EE, JSP and MySQL.",
    longDescription:
      "An e-commerce web application built with Java EE, using JSP for server-rendered views and Servlets for handling requests. Includes product catalog browsing, cart management, and order processing backed by a MySQL database.",
    image: `${import.meta.env.BASE_URL}images/projects/jee.png`,
    github: "",
    demo: "",
    technologies: ["Java EE", "JSP", "Servlet", "MySQL"],
  },
];

export default projects;