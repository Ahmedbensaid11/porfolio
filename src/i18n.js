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
      },
      about: {
        title: "About Me",
        bio: "I'm a computer engineering student in Tunisia, specializing in Software and Information Systems Engineering at Ecole Polytechnique Internationale. Curious and versatile, I enjoy working across the full stack — from REST APIs with Spring Boot to interfaces with React — and I've built everything from rental platforms to desktop simulations along the way. Outside of code, I'm into football and video games.",
        quickFacts: "Quick Facts",
        location: " SolimanNabeul, Tunisia",
        student: " Software & Information Systems Engineering Student",
        internships: " 4+ internships completed",
        languages: " EN · FR · AR",
      },
      experience: { title: "Experience" },
      projects: { title: "Projects" },
      skills: { title: "Skills" },
      education: { title: "Education" },
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
      experience: { title: "Expérience" },
      projects: { title: "Projets" },
      skills: { title: "Compétences" },
      education: { title: "Formation" },
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
      },
      about: {
        title: "نبذة عني",
        bio: "أنا طالب هندسة معلوماتية في تونس، متخصص في هندسة نظم المعلومات والبرمجيات بالمدرسة المتعددة التقنيات الدولية. فضولي ومتعدد المهارات، أستمتع بالعمل عبر جميع طبقات التطوير — من واجهات REST API باستخدام Spring Boot إلى الواجهات باستخدام React — وقمت ببناء كل شيء من منصات تأجير إلى محاكاة سطح المكتب. خارج البرمجة، أهتم بكرة القدم وألعاب الفيديو.",
        quickFacts: "معلومات سريعة",
        location: " نابل سليمان، تونس ",
        student: " طالب هندسة نظم المعلومات والبرمجيات",
        internships: " أكثر من 4 تدريبات",
        languages: " EN · FR · AR",
      },
      experience: { title: "الخبرة" },
      projects: { title: "المشاريع" },
      skills: { title: "المهارات" },
      education: { title: "التعليم" },
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