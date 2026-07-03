// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    common: {
      nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
      hero: {
        greeting: "Hi, I'm",
        role: "Software & Information Systems Engineering Student",
        bio: "Specializing in Software and Information Systems Engineering, I build full-stack web and desktop applications with Java, Spring Boot, React and more. Curious and versatile, I enjoy turning ideas into working software across the whole stack.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        downloadResume: "Download CV",

      },
      about: {
        title: "About Me",
        bio: "I'm a computer engineering student in Tunisia, specializing in Software and Information Systems Engineering at Ecole Polytechnique Internationale. Curious and versatile, I enjoy working across the full stack — from REST APIs with Spring Boot to interfaces with React — and I've built everything from rental platforms to desktop simulations along the way. Outside of code, I'm into football and video games.",
        quickFacts: "Quick Facts",
        location: " Soliman Nabeul, Tunisia",
        student: " Software & Information Systems Engineering Student",
        internships: " 4+ internships completed",
        languages: " EN · FR · AR",
      },
      footer: {
        role: "Software Engineering Student",
        builtWith: "© 2026 Ahmed Ben Said. Built with React & Tailwind CSS.",
      },
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      experience: {
        title: "Experience",
        items: {
          1: {
            position: "Software Engineering Intern",
            location: "Nabeul, Tunisia",
            description:
              "Developing a full-stack web platform for managing employee social activities, from functional specifications through to a containerized deployment with automated end-to-end testing.",
            longDescription:
              "Independently building a web application to manage employee social activities at Tunisie Telecom, starting from a formal specifications document (cahier des charges) I wrote and covering the full stack alone: a Spring Boot backend exposing secured REST APIs (Spring Security, JWT), a React frontend for employees and administrators, and MySQL/MongoDB for data storage. I containerized the application with Docker, set up an Nginx reverse proxy, and wrote an end-to-end test plan to validate key user flows.",
          },
          2: {
            position: "Software Engineering Intern",
            location: "Remote · France",
            description:
              "Developed and customized Odoo modules for recruitment management while working with Python, PostgreSQL and XML.",
            longDescription:
              "Independently developed a recruitment management module in Odoo, handling backend logic in Python with PostgreSQL for data persistence, and building the module's views and interfaces with XML. Contributed end-to-end features including authentication, job application handling, and candidate management, and built responsive interfaces with JavaScript.",
          },
          3: {
            position: "Full Stack Developer Intern",
            location: "Tunisia",
            description:
              "Developed a web and mobile intranet application with secure authentication and REST APIs.",
            longDescription:
              "Independently designed and developed a web and mobile intranet application from the ground up. Built the backend with Java and Spring Boot, exposing REST APIs backed by MySQL, and implemented security with both Basic Auth and JWT. Built the graphical interfaces across web and mobile using Angular and Flutter with HTML/CSS.",
          },
          4: {
            position: "Frontend Developer Intern",
            location: "Tunisia",
            description:
              "Developed responsive Angular interfaces and integrated REST APIs documented with Swagger.",
            longDescription:
              "Independently built interactive, responsive web pages for an insurance management platform using Angular, HTML, and CSS. Integrated REST APIs documented with Swagger to retrieve and display insurance data on the frontend.",
          },
        },
      },
      education: { title: "Education", present: "Present" },
      education_data: {
        items: {
          1: {
            degree: "Engineering Degree — Computer Science, Networks & Multimedia",
            school: "Ecole Polytechnique Internationale",
            location: "Tunisia",
            description: "Engineering program focused on computer science, networks, and multimedia technologies.",
          },
          2: {
            degree: "Bachelor's in Software Engineering and Information Systems",
            school: "Higher Institute of Information and Communication Technologies, Borj Cedria",
            location: "Tunisia",
            description: "Bachelor's degree focused on software engineering and information systems.",
          },
          3: {
            degree: "Baccalaureate in Computer Science",
            school: "Soliman High School",
            location: "Tunisia",
            description: "High school diploma with a focus on computer science.",
          },
        },
      },
      skills: { title: "Skills" },
      skills_categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Databases: "Databases",
        "Tools & DevOps": "Tools & DevOps",
      },
      projects: { title: "Projects" },
      projects_data: {
        items: {
          "project-management": {
            title: "Collaborative Project Management Platform",
            category: "Full Stack",
            description:
              "A collaborative platform for managing projects, users and tasks, with a Spring Boot API and Supabase.",
            longDescription:
              "A collaborative project and task management platform. The frontend is built with React for organizing projects, assigning tasks, and tracking team progress. It's backed by a Spring Boot API together with Supabase for data storage and authentication-related services.",
          },
          "virtual-campus": {
            title: "Virtual Campus",
            category: "Desktop Application",
            description:
              "A JavaFX desktop application that simulates a virtual university campus with buildings, users and academic management.",
            longDescription:
              "A JavaFX desktop simulation of a university campus, featuring interactive buildings, user roles (students, staff), and academic management tools such as course and schedule handling. Built as a Maven project with clean object-oriented design.",
          },
          zanora: {
            title: "Zanora — Smart Rental Platform",
            category: "Full Stack · Microservices",
            description:
              "A smart housing rental platform connecting tenants and landlords, built on a microservices architecture with real-time messaging and AI-powered rent estimation.",
            longDescription:
              "Zanora is a smart rental platform connecting tenants and landlords through a microservices architecture. It includes a Spring Cloud Gateway for routing, independent Spring Boot microservices for users and listings, a Quarkus-based AI service for rent price estimation, and real-time messaging via Socket.io. Data is split across PostgreSQL (core data) and MongoDB (messages), with Redis for caching and sessions. The frontend ships as an Expo (React Native) mobile app and a React + Vite web admin panel, all secured with JWT authentication, bcrypt password hashing, and role-based access control (USER, OWNER, ADMIN), and containerized with Docker.",
          },
          "space-invaders": {
            title: "2D Space Invaders — Design Patterns Edition",
            category: "Desktop Application · Game",
            description:
              "A fully playable JavaFX remake of Space Invaders showcasing six core design patterns, with boss battles, power-ups and progressive difficulty.",
            longDescription:
              "A JavaFX remake of the classic Space Invaders arcade game, built to showcase six core software design patterns applied to real-time game logic: Singleton (game/logger/resource managers), State (menu, playing, boss, paused, game-over, victory states), Decorator (stackable player power-ups like shield and rapid fire), Composite (hierarchical enemy formations), Observer (score, UI, and sound events), and Factory (enemy, projectile, and power-up creation). Features boss battles with unique attack patterns, four enemy types, and progressively increasing difficulty, running on a JavaFX AnimationTimer game loop at ~60 FPS.",
          },
          "virtual-city": {
            title: "Virtual City Simulation",
            category: "Desktop Application",
            description:
              "A Qt desktop application simulating a city with interactive urban elements using object-oriented programming.",
            longDescription:
              "A Qt/C++ desktop simulation of a small city, modeling distinct urban entities — buildings, houses, factories, and parks — each as their own class within a broader city and simulation system. Built with object-oriented C++ and CMake, it demonstrates modular design for simulating interacting urban elements over time.",
          },
          ecommerce: {
            title: "JEE E-Commerce Platform",
            category: "Web Application",
            description: "An e-commerce platform developed with Java EE, JSP and MySQL.",
            longDescription:
              "An e-commerce web application built with Java EE, using JSP for server-rendered views and Servlets for handling requests. Includes product catalog browsing, cart management, and order processing backed by a MySQL database.",
          },
        },
      },
      contact: { title: "Contact", email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    },
  },
  fr: {
    common: {
      nav: { home: "Accueil", about: "À propos", experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", contact: "Contact" },
      hero: {
        greeting: "Salut, je suis",
        role: "Étudiant en Ingénierie des Systèmes d'Information et du Logiciel",
        bio: "Spécialisé en Ingénierie des Systèmes d'Information et du Logiciel, je développe des applications web et de bureau full-stack avec Java, Spring Boot, React et plus encore. Curieux et polyvalent, j'aime transformer des idées en applications concrètes sur l'ensemble de la pile technologique.",
        viewProjects: "Voir les projets",
        contactMe: "Me contacter",
        downloadResume: "Télécharger le CV",
      },
      about: {
        title: "À propos de moi",
        bio: "Je suis étudiant en génie informatique en Tunisie, spécialisé en Ingénierie des Systèmes d'Information et du Logiciel à l'École Polytechnique Internationale. Curieux et polyvalent, j'aime travailler sur l'ensemble de la pile technologique — des API REST avec Spring Boot aux interfaces avec React — et j'ai développé aussi bien des plateformes de location que des simulations de bureau. En dehors du code, je m'intéresse au football et aux jeux vidéo.",
        quickFacts: "Infos rapides",
        location: " Soliman Nabeul, Tunisie",
        student: " Étudiant en Ingénierie des Systèmes d'Information et du Logiciel",
        internships: " 4+ stages effectués",
        languages: " EN · FR · AR",
      },
      footer: {
        role: "Étudiant en génie logiciel",
        builtWith: "© 2026 Ahmed Ben Said. Développé avec React & Tailwind CSS.",
      },
      months: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
      experience: {
        title: "Expérience",
        items: {
          1: {
            position: "Stagiaire en génie logiciel",
            location: "Nabeul, Tunisie",
            description:
              "Développement d'une plateforme web complète pour la gestion des activités sociales des employés, depuis le cahier des charges jusqu'au déploiement conteneurisé avec tests de bout en bout automatisés.",
            longDescription:
              "Développement en autonomie d'une application web pour gérer les activités sociales des employés de Tunisie Telecom, à partir d'un cahier des charges que j'ai rédigé, couvrant l'ensemble de la pile technologique seul : un backend Spring Boot exposant des API REST sécurisées (Spring Security, JWT), un frontend React pour les employés et les administrateurs, et MySQL/MongoDB pour le stockage des données. J'ai conteneurisé l'application avec Docker, mis en place un reverse proxy Nginx, et rédigé un plan de tests de bout en bout pour valider les principaux parcours utilisateurs.",
          },
          2: {
            position: "Stagiaire en génie logiciel",
            location: "À distance · France",
            description:
              "Développement et personnalisation de modules Odoo pour la gestion du recrutement, avec Python, PostgreSQL et XML.",
            longDescription:
              "Développement en autonomie d'un module de gestion du recrutement sous Odoo, avec la logique backend en Python et PostgreSQL pour la persistance des données, ainsi que la construction des vues et interfaces du module en XML. Contribution à des fonctionnalités de bout en bout incluant l'authentification, la gestion des candidatures et le suivi des candidats, avec des interfaces responsives développées en JavaScript.",
          },
          3: {
            position: "Stagiaire développeur full stack",
            location: "Tunisie",
            description:
              "Développement d'une application intranet web et mobile avec authentification sécurisée et API REST.",
            longDescription:
              "Conception et développement en autonomie d'une application intranet web et mobile depuis zéro. Backend développé en Java et Spring Boot, exposant des API REST adossées à MySQL, avec une sécurité implémentée via Basic Auth et JWT. Interfaces graphiques web et mobile développées avec Angular et Flutter en HTML/CSS.",
          },
          4: {
            position: "Stagiaire développeur frontend",
            location: "Tunisie",
            description:
              "Développement d'interfaces Angular responsives et intégration d'API REST documentées avec Swagger.",
            longDescription:
              "Développement en autonomie de pages web interactives et responsives pour une plateforme de gestion d'assurance avec Angular, HTML et CSS. Intégration d'API REST documentées avec Swagger pour récupérer et afficher les données d'assurance sur le frontend.",
          },
        },
      },
      education: { title: "Formation", present: "Présent" },
      education_data: {
        items: {
          1: {
            degree: "Diplôme d'ingénieur — Informatique, Réseaux & Multimédia",
            school: "École Polytechnique Internationale",
            location: "Tunisie",
            description: "Cursus d'ingénierie axé sur l'informatique, les réseaux et les technologies multimédias.",
          },
          2: {
            degree: "Licence en génie logiciel et systèmes d'information",
            school: "Institut Supérieur des Technologies de l'Information et de la Communication, Borj Cédria",
            location: "Tunisie",
            description: "Licence axée sur le génie logiciel et les systèmes d'information.",
          },
          3: {
            degree: "Baccalauréat en informatique",
            school: "Lycée de Soliman",
            location: "Tunisie",
            description: "Diplôme du baccalauréat avec une spécialisation en informatique.",
          },
        },
      },
      skills: { title: "Compétences" },
      skills_categories: {
        Backend: "Backend",
        Frontend: "Frontend",
        Databases: "Bases de données",
        "Tools & DevOps": "Outils & DevOps",
      },
      projects: { title: "Projets" },
      projects_data: {
        items: {
          "project-management": {
            title: "Plateforme collaborative de gestion de projets",
            category: "Full Stack",
            description:
              "Une plateforme collaborative pour gérer des projets, des utilisateurs et des tâches, avec une API Spring Boot et Supabase.",
            longDescription:
              "Une plateforme collaborative de gestion de projets et de tâches. Le frontend est développé avec React pour organiser les projets, assigner des tâches et suivre l'avancement de l'équipe. Elle s'appuie sur une API Spring Boot ainsi que sur Supabase pour le stockage des données et les services liés à l'authentification.",
          },
          "virtual-campus": {
            title: "Campus Virtuel",
            category: "Application de bureau",
            description:
              "Une application de bureau JavaFX qui simule un campus universitaire virtuel avec des bâtiments, des utilisateurs et une gestion académique.",
            longDescription:
              "Une simulation de bureau en JavaFX d'un campus universitaire, avec des bâtiments interactifs, des rôles utilisateurs (étudiants, personnel), et des outils de gestion académique tels que la gestion des cours et des emplois du temps. Développée en tant que projet Maven avec une conception orientée objet propre.",
          },
          zanora: {
            title: "Zanora — Plateforme de location intelligente",
            category: "Full Stack · Microservices",
            description:
              "Une plateforme intelligente de location de logements connectant locataires et propriétaires, construite sur une architecture microservices avec messagerie en temps réel et estimation de loyer par IA.",
            longDescription:
              "Zanora est une plateforme de location intelligente connectant locataires et propriétaires via une architecture microservices. Elle comprend une passerelle Spring Cloud Gateway pour le routage, des microservices Spring Boot indépendants pour les utilisateurs et les annonces, un service IA basé sur Quarkus pour l'estimation des loyers, et une messagerie en temps réel via Socket.io. Les données sont réparties entre PostgreSQL (données principales) et MongoDB (messages), avec Redis pour le cache et les sessions. Le frontend se décline en une application mobile Expo (React Native) et un panneau d'administration web en React + Vite, le tout sécurisé par authentification JWT, hachage des mots de passe avec bcrypt et contrôle d'accès basé sur les rôles (USER, OWNER, ADMIN), et conteneurisé avec Docker.",
          },
          "space-invaders": {
            title: "Space Invaders 2D — Édition Design Patterns",
            category: "Application de bureau · Jeu",
            description:
              "Un remake JavaFX entièrement jouable de Space Invaders illustrant six design patterns essentiels, avec combats de boss, bonus et difficulté progressive.",
            longDescription:
              "Un remake JavaFX du jeu d'arcade classique Space Invaders, conçu pour illustrer six design patterns logiciels essentiels appliqués à une logique de jeu en temps réel : Singleton (gestionnaires de jeu, de logs et de ressources), State (états menu, jeu, boss, pause, game over, victoire), Decorator (bonus cumulables comme le bouclier et le tir rapide), Composite (formations hiérarchiques d'ennemis), Observer (événements de score, d'interface et de son), et Factory (création des ennemis, projectiles et bonus). Comprend des combats de boss avec des schémas d'attaque uniques, quatre types d'ennemis, et une difficulté progressive, le tout fonctionnant sur une boucle de jeu JavaFX AnimationTimer à environ 60 FPS.",
          },
          "virtual-city": {
            title: "Simulation de Ville Virtuelle",
            category: "Application de bureau",
            description:
              "Une application de bureau Qt simulant une ville avec des éléments urbains interactifs en programmation orientée objet.",
            longDescription:
              "Une simulation de bureau Qt/C++ d'une petite ville, modélisant des entités urbaines distinctes — bâtiments, maisons, usines et parcs — chacune en tant que classe au sein d'un système plus large de ville et de simulation. Développée en C++ orienté objet avec CMake, elle illustre une conception modulaire pour simuler des éléments urbains en interaction au fil du temps.",
          },
          ecommerce: {
            title: "Plateforme E-Commerce JEE",
            category: "Application web",
            description: "Une plateforme e-commerce développée avec Java EE, JSP et MySQL.",
            longDescription:
              "Une application web e-commerce développée avec Java EE, utilisant JSP pour les vues rendues côté serveur et des Servlets pour le traitement des requêtes. Comprend la navigation dans le catalogue de produits, la gestion du panier et le traitement des commandes, le tout adossé à une base de données MySQL.",
          },
        },
      },
      contact: { title: "Contact", email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    },
  },
  ar: {
    common: {
      nav: { home: "الرئيسية", about: "نبذة", experience: "الخبرة", projects: "المشاريع", skills: "المهارات", education: "التعليم", contact: "اتصل بي" },
      hero: {
        greeting: "مرحباً، أنا",
        role: "طالب هندسة نظم المعلومات والبرمجيات",
        bio: "متخصص في هندسة نظم المعلومات والبرمجيات، أقوم ببناء تطبيقات ويب وتطبيقات سطح مكتب متكاملة باستخدام Java وSpring Boot وReact وغيرها. فضولي ومتعدد المهارات، أستمتع بتحويل الأفكار إلى برمجيات فعلية عبر جميع طبقات التطوير.",
        viewProjects: "عرض المشاريع",
        contactMe: "تواصل معي",
        downloadResume: "تحميل السيرة الذاتية",
      },
      about: {
        title: "نبذة عني",
        bio: "أنا طالب هندسة معلوماتية في تونس، متخصص في هندسة نظم المعلومات والبرمجيات بالمدرسة المتعددة التقنيات الدولية. فضولي ومتعدد المهارات، أستمتع بالعمل عبر جميع طبقات التطوير — من واجهات REST API باستخدام Spring Boot إلى الواجهات باستخدام React — وقمت ببناء كل شيء من منصات تأجير إلى محاكاة سطح المكتب. خارج البرمجة، أهتم بكرة القدم وألعاب الفيديو.",
        quickFacts: "معلومات سريعة",
        location: " نابل سليمان، تونس",
        student: " طالب هندسة نظم المعلومات والبرمجيات",
        internships: " أكثر من 4 تدريبات",
        languages: " EN · FR · AR",
      },
      footer: {
        role: "طالب هندسة برمجيات",
        builtWith: "© 2026 أحمد بن سعيد. صُمم باستخدام React وTailwind CSS.",
      },
      months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
      experience: {
        title: "الخبرة",
        items: {
          1: {
            position: "متدرب هندسة برمجيات",
            location: "نابل، تونس",
            description:
              "تطوير منصة ويب متكاملة لإدارة الأنشطة الاجتماعية للموظفين، بدءًا من كراسة الشروط الوظيفية وصولاً إلى نشر معبأ في حاويات مع اختبارات شاملة آلية من طرف إلى طرف.",
            longDescription:
              "قمت بشكل مستقل ببناء تطبيق ويب لإدارة الأنشطة الاجتماعية لموظفي اتصالات تونس، انطلاقًا من كراسة شروط رسمية كتبتها بنفسي، وغطيت فيه كامل الحزمة التقنية بمفردي: خادم خلفي بـ Spring Boot يوفر واجهات REST API آمنة (Spring Security وJWT)، وواجهة أمامية بـ React للموظفين والمشرفين، وقواعد بيانات MySQL/MongoDB لتخزين البيانات. قمت بتعبئة التطبيق في حاويات Docker، وإعداد وسيط عكسي Nginx، وكتابة خطة اختبار شاملة للتحقق من مسارات المستخدم الأساسية.",
          },
          2: {
            position: "متدرب هندسة برمجيات",
            location: "عن بُعد · فرنسا",
            description: "تطوير وتخصيص وحدات Odoo لإدارة التوظيف باستخدام Python وPostgreSQL وXML.",
            longDescription:
              "قمت بشكل مستقل بتطوير وحدة لإدارة التوظيف في Odoo، وتعاملت مع منطق الخادم الخلفي بلغة Python مع PostgreSQL لتخزين البيانات، وبناء واجهات الوحدة باستخدام XML. ساهمت في ميزات متكاملة تشمل المصادقة، ومعالجة طلبات التوظيف، وإدارة المترشحين، وبنيت واجهات متجاوبة باستخدام JavaScript.",
          },
          3: {
            position: "متدرب مطور Full Stack",
            location: "تونس",
            description: "تطوير تطبيق إنترانت ويب وموبايل مع مصادقة آمنة وواجهات REST API.",
            longDescription:
              "صممت وطورت بشكل مستقل تطبيق إنترانت للويب والموبايل من الصفر. بنيت الخادم الخلفي بلغة Java وSpring Boot، مع توفير واجهات REST API مدعومة بقاعدة بيانات MySQL، وطبّقت الأمان باستخدام Basic Auth وJWT. بنيت الواجهات الرسومية للويب والموبايل باستخدام Angular وFlutter مع HTML/CSS.",
          },
          4: {
            position: "متدرب مطور واجهات أمامية",
            location: "تونس",
            description: "تطوير واجهات Angular متجاوبة ودمج واجهات REST API الموثقة باستخدام Swagger.",
            longDescription:
              "قمت بشكل مستقل ببناء صفحات ويب تفاعلية ومتجاوبة لمنصة إدارة تأمين باستخدام Angular وHTML وCSS. دمجت واجهات REST API الموثقة بـ Swagger لجلب وعرض بيانات التأمين في الواجهة الأمامية.",
          },
        },
      },
      education: { title: "التعليم", present: "حاليًا" },
      education_data: {
        items: {
          1: {
            degree: "شهادة مهندس — علوم الحاسوب والشبكات والوسائط المتعددة",
            school: "المدرسة المتعددة التقنيات الدولية",
            location: "تونس",
            description: "برنامج هندسي يركز على علوم الحاسوب والشبكات وتقنيات الوسائط المتعددة.",
          },
          2: {
            degree: "إجازة في هندسة البرمجيات ونظم المعلومات",
            school: "المعهد العالي لتكنولوجيات المعلومات والاتصال، برج الشدرية",
            location: "تونس",
            description: "شهادة إجازة تركز على هندسة البرمجيات ونظم المعلومات.",
          },
          3: {
            degree: "بكالوريا في علوم الإعلامية",
            school: "المعهد الثانوي بسليمان",
            location: "تونس",
            description: "شهادة البكالوريا مع تخصص في علوم الإعلامية.",
          },
        },
      },
      skills: { title: "المهارات" },
      skills_categories: {
        Backend: "الخلفية (Backend)",
        Frontend: "الواجهة الأمامية (Frontend)",
        Databases: "قواعد البيانات",
        "Tools & DevOps": "الأدوات وDevOps",
      },
      projects: { title: "المشاريع" },
      projects_data: {
        items: {
          "project-management": {
            title: "منصة تعاونية لإدارة المشاريع",
            category: "Full Stack",
            description: "منصة تعاونية لإدارة المشاريع والمستخدمين والمهام، مبنية على واجهة برمجية Spring Boot وSupabase.",
            longDescription:
              "منصة تعاونية لإدارة المشاريع والمهام. الواجهة الأمامية مبنية بـ React لتنظيم المشاريع وتوزيع المهام ومتابعة تقدم الفريق. تعتمد على واجهة برمجية Spring Boot إلى جانب Supabase لتخزين البيانات وخدمات المصادقة.",
          },
          "virtual-campus": {
            title: "الحرم الجامعي الافتراضي",
            category: "تطبيق سطح مكتب",
            description: "تطبيق سطح مكتب بـ JavaFX يحاكي حرمًا جامعيًا افتراضيًا يضم مبانٍ ومستخدمين وإدارة أكاديمية.",
            longDescription:
              "محاكاة سطح مكتب بـ JavaFX لحرم جامعي، تضم مبانٍ تفاعلية، وأدوار للمستخدمين (طلاب، موظفون)، وأدوات إدارة أكاديمية مثل إدارة المقررات والجداول الزمنية. بُني كمشروع Maven بتصميم كائني التوجه نظيف.",
          },
          zanora: {
            title: "زانورا — منصة إيجار ذكية",
            category: "Full Stack · خدمات مصغّرة",
            description:
              "منصة إيجار ذكية تربط المستأجرين بالملّاك، مبنية على معمارية خدمات مصغّرة مع مراسلة فورية وتقدير إيجار مدعوم بالذكاء الاصطناعي.",
            longDescription:
              "زانورا منصة إيجار ذكية تربط المستأجرين بالملّاك عبر معمارية خدمات مصغّرة. تضم بوابة Spring Cloud Gateway للتوجيه، وخدمات Spring Boot مستقلة للمستخدمين والإعلانات، وخدمة ذكاء اصطناعي مبنية على Quarkus لتقدير أسعار الإيجار، ومراسلة فورية عبر Socket.io. تُقسّم البيانات بين PostgreSQL (البيانات الأساسية) وMongoDB (الرسائل)، مع Redis للتخزين المؤقت والجلسات. تُقدَّم الواجهة الأمامية كتطبيق موبايل بـ Expo (React Native) ولوحة إدارة ويب بـ React + Vite، وكلها مؤمّنة بمصادقة JWT وتشفير كلمات المرور بـ bcrypt وتحكم بالوصول حسب الأدوار، ومعبأة في حاويات Docker.",
          },
          "space-invaders": {
            title: "سبيس إنفيدرز ثنائي الأبعاد — نسخة أنماط التصميم",
            category: "تطبيق سطح مكتب · لعبة",
            description:
              "نسخة قابلة للعب بالكامل من لعبة Space Invaders بـ JavaFX تعرض ستة أنماط تصميم أساسية، مع معارك زعماء وتعزيزات وصعوبة تدريجية.",
            longDescription:
              "نسخة بـ JavaFX من لعبة الأركيد الكلاسيكية Space Invaders، بُنيت لعرض ستة أنماط تصميم برمجية أساسية مطبقة على منطق لعبة في الزمن الحقيقي: Singleton، وState، وDecorator، وComposite، وObserver، وFactory. تضم معارك زعماء بأنماط هجوم فريدة، وأربعة أنواع من الأعداء، وصعوبة متزايدة تدريجيًا، وتعمل على حلقة لعبة JavaFX AnimationTimer بمعدل ~60 إطارًا في الثانية.",
          },
          "virtual-city": {
            title: "محاكاة مدينة افتراضية",
            category: "تطبيق سطح مكتب",
            description: "تطبيق سطح مكتب بـ Qt يحاكي مدينة بعناصر حضرية تفاعلية باستخدام البرمجة كائنية التوجه.",
            longDescription:
              "محاكاة سطح مكتب بـ Qt/C++ لمدينة صغيرة، تُنمذج عناصر حضرية متمايزة — مبانٍ ومنازل ومصانع وحدائق — كل منها كصنف ضمن نظام أوسع للمدينة والمحاكاة. بُنيت بلغة C++ كائنية التوجه مع CMake، وتوضح تصميمًا معياريًا لمحاكاة عناصر حضرية متفاعلة عبر الزمن.",
          },
          ecommerce: {
            title: "منصة تجارة إلكترونية بـ JEE",
            category: "تطبيق ويب",
            description: "منصة تجارة إلكترونية طُوّرت باستخدام Java EE وJSP وMySQL.",
            longDescription:
              "تطبيق ويب للتجارة الإلكترونية طُوّر باستخدام Java EE، مستخدمًا JSP للعروض المُنشأة من جانب الخادم وServlets لمعالجة الطلبات. يشمل تصفح كتالوج المنتجات، وإدارة سلة التسوق، ومعالجة الطلبات، مدعومًا بقاعدة بيانات MySQL.",
          },
        },
      },
      contact: { title: "اتصل بي", email: "البريد الإلكتروني", linkedin: "لينكدإن", github: "جيثب" },
    },
  },
};

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

if (typeof document !== "undefined") {
  document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = savedLang;
}

export default i18n;