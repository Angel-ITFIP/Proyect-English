/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home": "INICIO",
  "nav.about": "SOBRE MÍ",
  "nav.skills": "HABILIDADES",
  "nav.resume": "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact": "CONTACTO",

  "hero.role": "Estudiante de Programación Web",

  "about.title": "Sobre Mí",
  "about.text": "Soy estudiante de cuarto semestre de Técnico Profesional en Programación Web. Estoy interesado en estudiar y seguir desarrollando mis conocimientos en programación, desarrollo web y creación de software. Me interesa aprender nuevas tecnologías y aplicar mis conocimientos en proyectos académicos.",
  "about.infoTitle": "Información",
  "about.labelLocation": "Ubicación",
  "about.valueLocation": "Espinal-Tolima, Colombia",
  "about.labelEmail": "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus": "Estado",
  "about.valueStatus": "Estudiante activo",
  "about.interestsTitle": "Intereses",

  "interest.1": "PROGRAMACIÓN",
  "interest.2": "DESARROLLO WEB",
  "interest.3": "DEPORTE",
  "interest.4": "CULTURA",
  "interest.5": "ESTUDIO",

  "skills.title": "Habilidades",
  "skills.technical": "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support": "Aprendizaje continuo",
  "skill.teamwork": "Trabajo en equipo",
  "skill.problem": "Resolución de problemas",
  "skill.english": "Inglés técnico",

  "resume.title": "Formación y experiencia",
  "resume.education": "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text": "Actualmente curso cuarto semestre y he desarrollado conocimientos en programación, desarrollo web y diferentes tecnologías de software.",
  "edu.2.title": "Formación académica en desarrollo de software",
  "edu.2.text": "Durante mi formación he desarrollado conocimientos prácticos mediante proyectos académicos relacionados con programación y desarrollo de aplicaciones.",

  "exp.1.title": "Proyecto de videojuego de misterios y puzzles",
  "exp.1.text": "Participé en el desarrollo de un videojuego académico enfocado en misterios y puzzles, utilizando herramientas de programación y desarrollo de videojuegos.",
  "exp.2.title": "Sistema de monitoreo de humedad",
  "exp.2.text": "Desarrollé un proyecto académico orientado al monitoreo de humedad para apoyar el seguimiento de las condiciones del suelo mediante tecnología y software.",

  "portfolio.title": "Proyectos",
  "project.1.title": "Videojuego de Misterios y Puzzles",
  "project.1.text": "Godot · GDScript · Desarrollo de videojuegos",
  "project.2.title": "Sistema de Monitoreo de Humedad",
  "project.2.text": "Software · Sensores · Monitoreo de humedad",
  "project.3.title": "Proyecto académico",
  "project.3.text": "Programación · Desarrollo de software",

  "contact.title": "Contacto",
  "contact.intro": "Puedes contactarme por correo electrónico para conocer más sobre mis proyectos académicos y mi formación en programación.",
  "contact.emailLabel": "Correo",
  "contact.linkedinValue": "Perfil profesional",

  "footer.note": "Angel Eduardo Duran Angarita · Técnico Profesional en Programación Web · UniEspinal"
};

const EN = {
  "nav.home": "HOME",
  "nav.about": "ABOUT",
  "nav.skills": "SKILLS",
  "nav.resume": "EDUCATION",
  "nav.portfolio": "PROJECTS",
  "nav.contact": "CONTACT",

  "hero.role": "Web Programming Student",

  "about.title": "About Me",
  "about.text": "I am a fourth-semester Professional Technician in Web Programming student. I am interested in learning and improving my skills in programming, web development, and software creation. I enjoy learning new technologies and applying my knowledge to academic projects.",
  "about.infoTitle": "Information",
  "about.labelLocation": "Location",
  "about.valueLocation": "Espinal-Tolima, Colombia",
  "about.labelEmail": "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus": "Status",
  "about.valueStatus": "Active student",
  "about.interestsTitle": "Interests",

  "interest.1": "PROGRAMMING",
  "interest.2": "WEB DEVELOPMENT",
  "interest.3": "SPORTS",
  "interest.4": "CULTURE",
  "interest.5": "STUDY",

  "skills.title": "Skills",
  "skills.technical": "Technical Skills",
  "skills.professional": "Professional Skills",
  "skill.support": "Continuous learning",
  "skill.teamwork": "Teamwork",
  "skill.problem": "Problem solving",
  "skill.english": "Technical English",

  "resume.title": "Education and Experience",
  "resume.education": "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text": "I am currently in my fourth semester. I have developed knowledge of programming, web development, and different software technologies.",
  "edu.2.title": "Academic Training in Software Development",
  "edu.2.text": "During my studies, I have developed practical knowledge through academic projects related to programming and application development.",

  "exp.1.title": "Mystery and Puzzle Game Project",
  "exp.1.text": "I participated in the development of an academic video game focused on mysteries and puzzles, using programming and game development tools.",
  "exp.2.title": "Humidity Monitoring System",
  "exp.2.text": "I developed an academic project focused on humidity monitoring to support the observation of soil conditions through technology and software.",

  "portfolio.title": "Projects",
  "project.1.title": "Mystery and Puzzle Game",
  "project.1.text": "Godot · GDScript · Game Development",
  "project.2.title": "Humidity Monitoring System",
  "project.2.text": "Software · Sensors · Humidity Monitoring",
  "project.3.title": "Academic Project",
  "project.3.text": "Programming · Software Development",

  "contact.title": "Contact",
  "contact.intro": "You can contact me by email to learn more about my academic projects and my programming studies.",
  "contact.emailLabel": "Email",
  "contact.linkedinValue": "Professional profile",

  "footer.note": "Angel Eduardo Duran Angarita · Professional Technician in Web Programming · UniEspinal"
};

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");

  if (boton) {
    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase() + '</span>';

    boton.setAttribute(
      "aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español"
    );
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";

    const etiqueta = barra.querySelector("span");

    if (etiqueta) {
      etiqueta.textContent = porcentaje + "%";
    }
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.4
  });

  barras.forEach(barra => observador.observe(barra));
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
