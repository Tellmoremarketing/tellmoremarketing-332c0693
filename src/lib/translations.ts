// All page text lives here. Edit freely — keep the same keys in both languages.
export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: { services: "Services", how: "How it works", work: "Work", team: "Team", contact: "Contact", cta: "Free audit", menu: "Open menu", close: "Close menu" },
    hero: {
      title: "You teach driving. We fill your schedule.",
      sub: "Tell More Marketing runs social media for Texas driving schools, so more students find you, trust you and book.",
      cta: "Get your free social media audit",
      secondary: "See how it works",
      points: ["Only driving schools in Texas", "English & Spanish content", "Clear monthly results"],
    },
    problems: {
      items: ["No time to post", "Not sure what content brings students", "Can't tell if marketing pays off"],
      line: "Sound familiar? That's exactly what we fix.",
    },
    services: {
      eyebrow: "Services",
      title: "Everything your page needs to bring in students",
      items: [
        { t: "Social media management", d: "We plan and post on Instagram & Facebook every week, so your page never goes quiet." },
        { t: "Content that shows your school", d: "Reels and posts with your real instructors, cars and student wins, not boring holiday graphics." },
        { t: "Lead ads", d: "Meta ads that reach parents and new drivers near your school and send them straight to booking." },
        { t: "Bilingual content", d: "English and Spanish posts to reach more families in your city." },
        { t: "Clear reporting", d: "A simple monthly report showing which posts and ads brought calls and bookings." },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps. No headaches.",
      steps: [
        { t: "Free audit", d: "We review your social media and website." },
        { t: "Your plan", d: "A content calendar built around your school." },
        { t: "More bookings", d: "We post, run ads and report results every month." },
      ],
    },
    work: {
      eyebrow: "Work",
      title: "Sample projects",
      note: "Concept work to show our approach",
      problem: "Problem",
      idea: "Idea",
      items: [
        { t: "Teen driving school, Austin", p: "Posts only on holidays", i: "Weekly Reels of first-lesson moments + parent tips" },
        { t: "Adult lessons school, Houston", p: "No clear way to book online", i: "Lead ads + Book Now button on every post" },
        { t: "Bilingual school, San Antonio", p: "Missing Spanish-speaking families", i: "English & Spanish content series" },
      ],
      img: "Image coming soon",
    },
    team: {
      eyebrow: "Team",
      title: "Who we are",
      intro: "We're six marketing students at TBS Education in Barcelona, building Tell More Marketing for driving schools in Texas.",
      roles: ["Strategy Lead", "Paid Ads", "Content Creator", "Social Media Manager", "Brand & Copy", "Research & Analytics"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Get your free social media audit",
      sub: "Tell us about your school. We'll take a look and send you clear next steps.",
      name: "Your name", school: "Driving school name", city: "City in Texas", email: "Email",
      phone: "Phone (optional)", social: "Instagram or Facebook link (optional)", message: "Message",
      send: "Send",
      required: "Please fill this in.",
      badEmail: "Please enter a valid email.",
      badUrl: "Please enter a valid link.",
      thanks: "Thanks! We'll send your audit within 48 hours.",
      reach: "Prefer email or DMs?",
    },
    footer: { privacy: "Privacy policy", terms: "Terms", rights: "© 2026 Tell More Marketing" },
  },
  es: {
    nav: { services: "Servicios", how: "Cómo funciona", work: "Proyectos", team: "Equipo", contact: "Contacto", cta: "Auditoría gratis", menu: "Abrir menú", close: "Cerrar menú" },
    hero: {
      title: "Tú enseñas a manejar. Nosotros llenamos tu agenda.",
      sub: "Tell More Marketing maneja las redes sociales de autoescuelas en Texas, para que más alumnos te encuentren, confíen en ti y reserven.",
      cta: "Pide tu auditoría de redes gratis",
      secondary: "Mira cómo funciona",
      points: ["Solo autoescuelas en Texas", "Contenido en inglés y español", "Resultados claros cada mes"],
    },
    problems: {
      items: ["No tienes tiempo para publicar", "No sabes qué contenido atrae alumnos", "No sabes si el marketing vale la pena"],
      line: "¿Te suena? Justo eso es lo que resolvemos.",
    },
    services: {
      eyebrow: "Servicios",
      title: "Todo lo que tu página necesita para atraer alumnos",
      items: [
        { t: "Manejo de redes sociales", d: "Planeamos y publicamos en Instagram y Facebook cada semana, para que tu página nunca se quede callada." },
        { t: "Contenido que muestra tu escuela", d: "Reels y posts con tus instructores, tus carros y los logros de tus alumnos, no gráficos aburridos de días festivos." },
        { t: "Anuncios para captar clientes", d: "Anuncios en Meta que llegan a papás y nuevos conductores cerca de tu escuela y los llevan directo a reservar." },
        { t: "Contenido bilingüe", d: "Posts en inglés y español para llegar a más familias en tu ciudad." },
        { t: "Reportes claros", d: "Un reporte mensual sencillo que muestra qué posts y anuncios trajeron llamadas y reservas." },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos. Sin complicaciones.",
      steps: [
        { t: "Auditoría gratis", d: "Revisamos tus redes sociales y tu sitio web." },
        { t: "Tu plan", d: "Un calendario de contenido hecho para tu escuela." },
        { t: "Más reservas", d: "Publicamos, corremos anuncios y te reportamos resultados cada mes." },
      ],
    },
    work: {
      eyebrow: "Proyectos",
      title: "Proyectos de ejemplo",
      note: "Trabajo conceptual para mostrar cómo trabajamos",
      problem: "Problema",
      idea: "Idea",
      items: [
        { t: "Escuela para adolescentes, Austin", p: "Solo publica en días festivos", i: "Reels semanales de primeras clases + consejos para papás" },
        { t: "Escuela para adultos, Houston", p: "No hay una forma clara de reservar en línea", i: "Anuncios + botón de Reservar en cada post" },
        { t: "Escuela bilingüe, San Antonio", p: "No llega a familias hispanohablantes", i: "Serie de contenido en inglés y español" },
      ],
      img: "Imagen próximamente",
    },
    team: {
      eyebrow: "Equipo",
      title: "Quiénes somos",
      intro: "Somos seis estudiantes de marketing en TBS Education en Barcelona, creando Tell More Marketing para autoescuelas en Texas.",
      roles: ["Líder de estrategia", "Anuncios pagados", "Creadora de contenido", "Social Media Manager", "Marca y textos", "Investigación y análisis"],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Pide tu auditoría de redes gratis",
      sub: "Cuéntanos de tu escuela. La revisamos y te mandamos los siguientes pasos.",
      name: "Tu nombre", school: "Nombre de la autoescuela", city: "Ciudad en Texas", email: "Correo",
      phone: "Teléfono (opcional)", social: "Link de Instagram o Facebook (opcional)", message: "Mensaje",
      send: "Enviar",
      required: "Por favor llena este campo.",
      badEmail: "Escribe un correo válido.",
      badUrl: "Escribe un link válido.",
      thanks: "¡Gracias! Te mandamos tu auditoría en menos de 48 horas.",
      reach: "¿Prefieres correo o mensaje directo?",
    },
    footer: { privacy: "Política de privacidad", terms: "Términos", rights: "© 2026 Tell More Marketing" },
  },
} as const;

export type Dict = (typeof translations)["en"];
