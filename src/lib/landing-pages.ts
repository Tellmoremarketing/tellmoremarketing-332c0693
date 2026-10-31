// SEO landing pages: one per keyword checked in Session 5, plus one per service we offer.
// Each page: question as H1, a 3-sentence answer, H2 sections, an FAQ and links to the other pages.

type Section = { h: string; p?: string; list?: readonly string[] };
type Content = { h1: string; answer: string; sections: readonly Section[]; faq: readonly { q: string; a: string }[] };
export const author = { name: "Niko Hrenar", photo: "/team/nico.jpg", role: { en: "Brand & Copy, Tell More Marketing", es: "Marca y textos, Tell More Marketing" } };
export const updated = "2026-10-30";

export const sources = {
  google: { name: "Tips to improve your local ranking on Google", by: "Google Business Profile Help", url: "https://support.google.com/business/answer/7091?hl=en" },
  pew: { name: "Americans’ Social Media Use 2025", by: "Pew Research Center", url: "https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/" },
  brightlocal: { name: "Local Consumer Review Survey 2025", by: "BrightLocal", url: "https://www.brightlocal.com/research/local-consumer-review-survey-2025/" },
  meta: { name: "How to choose locations for your ad", by: "Meta Business Help Centre", url: "https://www.facebook.com/business/help/365561350785642" },
  seoGuide: { name: "Search Engine Optimization (SEO) Starter Guide", by: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  pageExperience: { name: "Understanding page experience in Google Search results", by: "Google Search Central", url: "https://developers.google.com/search/docs/appearance/page-experience" },
  googleAds: { name: "Target ads to geographic locations", by: "Google Ads Help", url: "https://support.google.com/google-ads/answer/1722043?hl=en" },
  gbpLinks: { name: "Manage your local business links", by: "Google Business Profile Help", url: "https://support.google.com/business/answer/6218037?hl=en" },
  metaInbox: { name: "About Inbox automations in Meta Business Suite", by: "Meta Business Help Centre", url: "https://www.facebook.com/business/help/395965998733706" },
} as const;

// Facts quoted on the pages, each checked against its source.
export const facts = {
  googleComplete: { src: "google", en: "Google says businesses with complete and accurate information are more likely to show up in local search results, and that more reviews and positive ratings can help a business’s local ranking.", es: "Google afirma que los negocios con información completa y precisa tienen más probabilidades de aparecer en los resultados locales, y que más reseñas y buenas calificaciones pueden mejorar su posición." },
  googleFactors: { src: "google", en: "Google ranks local results mainly on relevance (how well your profile matches the search), distance and prominence, which includes how many reviews you have.", es: "Google ordena los resultados locales principalmente por relevancia (qué tan bien coincide tu perfil con la búsqueda), distancia y prominencia, que incluye cuántas reseñas tienes." },
  pew: { src: "pew", en: "71% of U.S. adults use Facebook and 50% use Instagram, according to a 2025 Pew Research Center survey of 5,022 adults.", es: "El 71% de los adultos en EE. UU. usa Facebook y el 50% usa Instagram, según una encuesta de Pew Research Center a 5,022 adultos en 2025." },
  reviews: { src: "brightlocal", en: "Only 4% of consumers say they never read online reviews of local businesses, and Google is the platform they use most to find them.", es: "Solo el 4% de los consumidores dice que nunca lee reseñas en internet de negocios locales, y Google es la plataforma que más usan para encontrarlas." },
  metaRadius: { src: "meta", en: "Meta Ads Manager lets you choose the locations your ad reaches, including a radius around a place, such as your school.", es: "Meta Ads Manager te permite elegir dónde se muestra tu anuncio, incluido un radio alrededor de un lugar, como tu escuela." },
  seoTitles: { src: "seoGuide", en: "Google’s SEO Starter Guide says a good page title is unique to the page, clear and concise, and accurately describes what is on the page.", es: "La guía de SEO de Google dice que un buen título es único para cada página, claro, breve y describe con precisión su contenido." },
  seoHelpful: { src: "seoGuide", en: "Google says the vast majority of sites in its results are found automatically as it crawls the web, and asks site owners to write content that is helpful, reliable and people-first.", es: "Google dice que la gran mayoría de los sitios en sus resultados se encuentran automáticamente al rastrear la web, y pide a los dueños escribir contenido útil, confiable y pensado para las personas." },
  pageExperience: { src: "pageExperience", en: "Google says its core ranking systems look to reward content that provides a good page experience, and that Core Web Vitals (loading, responsiveness and visual stability) are used by its ranking systems.", es: "Google dice que sus sistemas de clasificación buscan premiar el contenido que ofrece una buena experiencia de página, y que usan las Core Web Vitals (carga, respuesta y estabilidad visual)." },
  googleAdsRadius: { src: "googleAds", en: "Google Ads radius targeting lets you show ads to people within a certain distance of your business; the smallest radius is 1 km (about 0.6 miles).", es: "La segmentación por radio de Google Ads te permite mostrar anuncios a personas a cierta distancia de tu negocio; el radio mínimo es de 1 km (unas 0.6 millas)." },
  gbpBooking: { src: "gbpLinks", en: "Google Business Profile lets you add up to 10 links per category, including links that help customers book an appointment.", es: "El Perfil de Empresa en Google te permite agregar hasta 10 enlaces por categoría, incluidos enlaces para que los clientes reserven una cita." },
  metaInbox: { src: "metaInbox", en: "Meta Business Suite Inbox automations can reply automatically on Messenger, Instagram and WhatsApp: an instant reply to first-time messages, an away message, and answers to frequently asked questions such as your hours and location.", es: "Las automatizaciones de la bandeja de Meta Business Suite pueden responder solas en Messenger, Instagram y WhatsApp: una respuesta instantánea al primer mensaje, un mensaje de ausencia y respuestas a preguntas frecuentes como tu horario y ubicación." },
} as const;
export type FactKey = keyof typeof facts;

export type LandingPageData = {
  path: string;
  keyword: string;
  facts: readonly FactKey[];
  meta: { title: string; description: string };
  en: Content;
  es: Content;
};

export const landingPages = [
  {
    path: "/driving-school-marketing",
    facts: ["googleComplete", "pew"],
    keyword: "driving school marketing",
    meta: {
      title: "Driving School Marketing: How It Works | Tell More",
      description: "What driving school marketing is, who you are really marketing to, the three channels that matter and how to tell if it works. A guide for Texas schools.",
    },
    en: {
      h1: "What is driving school marketing, and how does it work?",
      answer: "Driving school marketing is everything a driving school does to get found by new students and their parents, and to turn that interest into booked lessons. It usually combines a complete Google Business Profile, active social media and a simple way to call or book. Done well, it brings in a steady flow of students instead of busy months followed by empty ones.",
      sections: [
        { h: "Who you are really marketing to", p: "Most driving school students are teenagers, but the people who choose the school and pay are usually their parents. Adults learning to drive, people new to Texas and drivers who want a refresher are a second group. Your marketing has to speak to both: reassure parents about safety and value, and show new drivers that lessons are friendly and easy to book." },
        { h: "The three channels that matter most", list: [
          "Google Business Profile: keep your hours, photos, services and reviews up to date so you show up when people nearby search for a driving school.",
          "Social media: Instagram and Facebook posts and reels that show your real instructors, cars and students who passed.",
          "Your website or booking page: one clear page with your prices, the areas you serve and a button to call or book.",
        ] },
        { h: "How to tell if your marketing works", p: "Track a few simple numbers every month: calls, booking requests and where each new student heard about you. Ask every new student “How did you find us?” and write the answer down. After a few months you will know which posts, ads and pages bring in students, and you can stop spending time on the rest." },
      ],
      faq: [
        { q: "How much should a driving school spend on marketing?", a: "There is no fixed number. Start with a small monthly budget you can keep up, measure how many bookings it brings and increase it only when you can see it working. Many of the most useful steps, like updating your Google profile and posting regularly, cost time rather than money." },
        { q: "Do driving schools really need social media?", a: "Parents and new drivers look at social media to check whether a school seems trustworthy and active. A page that hasn’t posted in months can push families toward a competitor. Regular posts with real people from your school build that trust." },
        { q: "How long does driving school marketing take to work?", a: "Fixing your Google profile can help within weeks. Social media and search content usually need a few months of steady work before they bring a regular flow of inquiries." },
      ],
    },
    es: {
      h1: "¿Qué es el marketing para autoescuelas y cómo funciona?",
      answer: "El marketing para autoescuelas es todo lo que hace una autoescuela para que nuevos alumnos y sus papás la encuentren, y para convertir ese interés en clases reservadas. Normalmente combina un Perfil de Empresa en Google completo, redes sociales activas y una forma sencilla de llamar o reservar. Bien hecho, trae un flujo constante de alumnos en lugar de meses llenos seguidos de meses vacíos.",
      sections: [
        { h: "A quién le estás vendiendo realmente", p: "La mayoría de los alumnos son adolescentes, pero quienes eligen la escuela y pagan suelen ser sus papás. Los adultos que aprenden a manejar, las personas que acaban de llegar a Texas y quienes quieren repasar son un segundo grupo. Tu marketing tiene que hablarles a ambos: dar confianza a los papás sobre seguridad y precio, y mostrar a los nuevos conductores que las clases son amigables y fáciles de reservar." },
        { h: "Los tres canales más importantes", list: [
          "Perfil de Empresa en Google: mantén al día tu horario, fotos, servicios y reseñas para aparecer cuando alguien cerca busca una autoescuela.",
          "Redes sociales: posts y reels en Instagram y Facebook con tus instructores, tus carros y los alumnos que aprobaron.",
          "Tu sitio web o página de reservas: una página clara con precios, las zonas que atiendes y un botón para llamar o reservar.",
        ] },
        { h: "Cómo saber si tu marketing funciona", p: "Mide unos pocos números cada mes: llamadas, solicitudes de reserva y cómo se enteró de ti cada alumno nuevo. Pregunta a cada alumno “¿Cómo nos encontraste?” y anota la respuesta. En unos meses sabrás qué posts, anuncios y páginas traen alumnos, y podrás dejar de perder tiempo en lo demás." },
      ],
      faq: [
        { q: "¿Cuánto debería gastar una autoescuela en marketing?", a: "No hay una cifra fija. Empieza con un presupuesto mensual pequeño que puedas mantener, mide cuántas reservas trae y auméntalo solo cuando veas que funciona. Muchos de los pasos más útiles, como actualizar tu perfil de Google y publicar con regularidad, cuestan tiempo y no dinero." },
        { q: "¿De verdad una autoescuela necesita redes sociales?", a: "Los papás y los nuevos conductores revisan las redes para ver si una escuela parece confiable y activa. Una página sin publicaciones desde hace meses puede hacer que una familia elija a la competencia. Publicar con regularidad con gente real de tu escuela genera esa confianza." },
        { q: "¿Cuánto tarda en funcionar el marketing para autoescuelas?", a: "Arreglar tu perfil de Google puede ayudar en pocas semanas. Las redes sociales y el contenido para buscadores suelen necesitar unos meses de trabajo constante antes de traer consultas de forma regular." },
      ],
    },
  },
  {
    path: "/driving-school-marketing-agency",
    facts: ["pew", "reviews"],
    keyword: "driving school marketing agency",
    meta: {
      title: "Driving School Marketing Agency: Is It Worth It? | Tell More",
      description: "When a driving school should hire a marketing agency, what the agency does, how it compares with doing it yourself and the questions to ask first.",
    },
    en: {
      h1: "Should your driving school hire a marketing agency?",
      answer: "A marketing agency makes sense when you don’t have time to post, run ads and track results yourself, and you want someone doing it every week. Look for an agency that understands driving schools, explains its plan in plain language and reports results every month. If you have the time, you can also start on your own and get help later.",
      sections: [
        { h: "What a driving school marketing agency does", list: [
          "Plans and posts content on Instagram and Facebook every week.",
          "Creates reels and posts with your real instructors, cars and student wins.",
          "Runs Meta ads that reach parents and new drivers near your school.",
          "Sends a monthly report showing which posts and ads brought calls and bookings.",
        ] },
        { h: "Agency or do it yourself?", p: "Doing it yourself costs less money but takes several hours a week, and it is easy to stop when lessons get busy. An agency charges a monthly fee but keeps your page active and brings experience from other businesses. A good middle option is a free review first: you get clear next steps, then decide whether to do them yourself or get help." },
        { h: "Questions to ask before you hire one", list: [
          "Have you worked with driving schools or other local service businesses?",
          "Who creates the content, and will it show my real school?",
          "Can you post in English and Spanish?",
          "What will you report each month, and how will we know it is working?",
          "Is there a long contract, or can I stop when I want?",
        ] },
      ],
      faq: [
        { q: "How much does a driving school marketing agency cost?", a: "Prices vary with how much content, how many ads and how much reporting is included. Ask for a clear monthly price, what it covers and whether ad spend is separate. Tell More starts with a free social media review, so you can see how we work before paying anything." },
        { q: "Is Tell More Marketing a driving school marketing agency?", a: "Yes. We only work with driving schools in Texas, and we handle Instagram and Facebook content, Meta ads and monthly reporting in English and Spanish." },
        { q: "Can I try an agency before committing?", a: "Ask for a free review or audit first. It shows you how the agency thinks and gives you useful advice even if you decide not to hire them." },
      ],
    },
    es: {
      h1: "¿Debería tu autoescuela contratar una agencia de marketing?",
      answer: "Una agencia de marketing tiene sentido cuando no tienes tiempo para publicar, hacer anuncios y medir resultados, y quieres que alguien lo haga cada semana. Busca una agencia que conozca las autoescuelas, explique su plan con palabras sencillas y reporte resultados cada mes. Si tienes tiempo, también puedes empezar por tu cuenta y pedir ayuda más adelante.",
      sections: [
        { h: "Qué hace una agencia de marketing para autoescuelas", list: [
          "Planea y publica contenido en Instagram y Facebook cada semana.",
          "Crea reels y posts con tus instructores, tus carros y los logros de tus alumnos.",
          "Hace anuncios en Meta que llegan a papás y nuevos conductores cerca de tu escuela.",
          "Envía un reporte mensual con los posts y anuncios que trajeron llamadas y reservas.",
        ] },
        { h: "¿Agencia o hacerlo tú mismo?", p: "Hacerlo tú mismo cuesta menos dinero pero toma varias horas por semana, y es fácil dejarlo cuando hay muchas clases. Una agencia cobra una cuota mensual pero mantiene tu página activa y trae experiencia de otros negocios. Una buena opción intermedia es empezar con una revisión gratis: recibes pasos claros y luego decides si los haces tú o pides ayuda." },
        { h: "Preguntas antes de contratar una", list: [
          "¿Has trabajado con autoescuelas u otros negocios locales de servicios?",
          "¿Quién crea el contenido y mostrará mi escuela real?",
          "¿Puedes publicar en inglés y en español?",
          "¿Qué me vas a reportar cada mes y cómo sabremos que funciona?",
          "¿Hay un contrato largo o puedo dejarlo cuando quiera?",
        ] },
      ],
      faq: [
        { q: "¿Cuánto cuesta una agencia de marketing para autoescuelas?", a: "El precio depende de cuánto contenido, cuántos anuncios y cuántos reportes incluye. Pide un precio mensual claro, qué cubre y si el gasto en anuncios va aparte. Tell More empieza con una revisión gratis de tus redes, para que veas cómo trabajamos antes de pagar nada." },
        { q: "¿Tell More Marketing es una agencia de marketing para autoescuelas?", a: "Sí. Solo trabajamos con autoescuelas de Texas y nos encargamos del contenido en Instagram y Facebook, los anuncios en Meta y los reportes mensuales, en inglés y en español." },
        { q: "¿Puedo probar una agencia antes de comprometerme?", a: "Pide primero una revisión o auditoría gratis. Te muestra cómo piensa la agencia y te da consejos útiles aunque decidas no contratarla." },
      ],
    },
  },
  {
    path: "/driving-school-marketing-ideas",
    facts: ["reviews", "googleComplete"],
    keyword: "driving school marketing ideas",
    meta: {
      title: "8 Driving School Marketing Ideas for Texas | Tell More",
      description: "Eight practical driving school marketing ideas you can start this month, most of them free, plus how to pick the ones worth keeping.",
    },
    en: {
      h1: "What are the best marketing ideas for a driving school?",
      answer: "The best driving school marketing ideas show real people and real results: your instructors, your cars and students who just passed their test. Pair them with an up-to-date Google profile and fast replies to every inquiry. Below are eight ideas you can start this month, and most of them are free.",
      sections: [
        { h: "8 driving school marketing ideas", list: [
          "Celebrate students who pass: with their permission, post a photo or short video with every student who passes the road test.",
          "Introduce your instructors: a short reel for each instructor builds trust with nervous parents.",
          "Answer parents’ questions: how many lessons a teen needs, what the road test includes, what to bring. One question per post.",
          "Ask for Google reviews: send a review link after the last lesson, while the student is happy.",
          "Share quick driving tips: parallel parking, merging onto the highway, rules new drivers forget.",
          "Post in English and Spanish: reach more families in Texas cities.",
          "Partner with local schools and businesses: info sessions, flyers or a small discount for their students or staff.",
          "Run a referral offer: a small discount for students who bring a friend.",
        ] },
        { h: "How to choose which ideas to start with", p: "Pick two or three ideas you can keep doing every week instead of trying all eight at once. Doing a few things consistently matters more than doing many things once. After a month, look at which posts got the most messages or calls, and do more of those." },
      ],
      faq: [
        { q: "What should a driving school post on Instagram?", a: "Student wins, instructor introductions, short driving tips and answers to parents’ questions. Real photos and videos from your school work better than stock images or generic holiday graphics." },
        { q: "How often should a driving school post?", a: "Two or three times a week is a realistic goal for most small schools. Posting regularly matters more than posting a lot." },
        { q: "What is the cheapest way to market a driving school?", a: "Updating your Google Business Profile, asking happy students for reviews and posting on social media cost time rather than money, and they are often the most effective steps." },
      ],
    },
    es: {
      h1: "¿Cuáles son las mejores ideas de marketing para una autoescuela?",
      answer: "Las mejores ideas de marketing para autoescuelas muestran gente real y resultados reales: tus instructores, tus carros y los alumnos que acaban de aprobar el examen. Combínalas con un perfil de Google al día y respuestas rápidas a cada consulta. Aquí tienes ocho ideas que puedes empezar este mes, y la mayoría son gratis.",
      sections: [
        { h: "8 ideas de marketing para autoescuelas", list: [
          "Celebra a los alumnos que aprueban: con su permiso, publica una foto o video corto con cada alumno que aprueba el examen práctico.",
          "Presenta a tus instructores: un reel corto de cada instructor da confianza a los papás nerviosos.",
          "Responde preguntas de los papás: cuántas clases necesita un adolescente, qué incluye el examen, qué llevar. Una pregunta por post.",
          "Pide reseñas en Google: envía el enlace después de la última clase, cuando el alumno está contento.",
          "Comparte consejos rápidos: estacionarse en paralelo, entrar a la autopista, reglas que los nuevos conductores olvidan.",
          "Publica en inglés y en español: llega a más familias en las ciudades de Texas.",
          "Colabora con escuelas y negocios locales: charlas, volantes o un pequeño descuento para sus alumnos o empleados.",
          "Ofrece un descuento por recomendación: un pequeño descuento para los alumnos que traen a un amigo.",
        ] },
        { h: "Cómo elegir con qué ideas empezar", p: "Elige dos o tres ideas que puedas mantener cada semana en lugar de probar las ocho a la vez. Hacer pocas cosas con constancia importa más que hacer muchas una sola vez. Después de un mes, mira qué posts trajeron más mensajes o llamadas y haz más de esos." },
      ],
      faq: [
        { q: "¿Qué debería publicar una autoescuela en Instagram?", a: "Logros de alumnos, presentaciones de instructores, consejos cortos de manejo y respuestas a preguntas de los papás. Las fotos y videos reales de tu escuela funcionan mejor que las imágenes de stock o los gráficos genéricos de días festivos." },
        { q: "¿Cada cuánto debería publicar una autoescuela?", a: "Dos o tres veces por semana es una meta realista para la mayoría de las escuelas pequeñas. Publicar con regularidad importa más que publicar mucho." },
        { q: "¿Cuál es la forma más barata de promocionar una autoescuela?", a: "Actualizar tu Perfil de Empresa en Google, pedir reseñas a los alumnos contentos y publicar en redes cuesta tiempo y no dinero, y suelen ser los pasos más efectivos." },
      ],
    },
  },
  {
    path: "/how-to-promote-a-driving-school",
    facts: ["googleFactors", "reviews"],
    keyword: "how to promote driving school business",
    meta: {
      title: "How to Promote a Driving School Business | Tell More",
      description: "A four-step plan to promote your driving school: get found on Google, build trust on social media, add local ads, then reply fast and measure.",
    },
    en: {
      h1: "How do you promote a driving school business?",
      answer: "Promote a driving school by making it easy to find, easy to trust and easy to book. Start with your Google Business Profile and reviews, keep Instagram and Facebook active with real content, and add local ads once those basics work. Reply quickly to every inquiry, because a fast answer often decides which school gets the student.",
      sections: [
        { h: "Step 1: Get found on Google", p: "Claim and complete your Google Business Profile: correct address, hours, phone number, services, photos and the areas you serve. Ask every happy student for a review, and reply to reviews, including the negative ones." },
        { h: "Step 2: Build trust on social media", p: "Parents want to see who will be in the car with their teenager. Post your instructors, your cars, students who passed and short driving tips at least a couple of times a week." },
        { h: "Step 3: Add local ads", p: "Once your profile and pages look good, use Facebook and Instagram ads to reach people within a short drive of your school. Start with a small budget and one clear offer, such as a lesson package or a free first call." },
        { h: "Step 4: Reply fast and measure", p: "Answer calls, DMs and form messages the same day. Ask every new student how they found you and keep a simple monthly count, so you know what to keep doing." },
      ],
      faq: [
        { q: "What is the fastest way to get more driving school students?", a: "Complete your Google Business Profile and ask recent students for reviews. Both are free and help you show up when people near you search for a driving school." },
        { q: "Should I use Facebook ads or Google ads?", a: "Google search ads reach people who are already looking for a driving school. Facebook and Instagram ads reach parents and new drivers in your area before they start searching. Many schools start with one, measure the results, then test the other." },
        { q: "How can I promote my driving school for free?", a: "Keep your Google profile updated, collect reviews, post regularly on social media and ask happy students to recommend you to their friends." },
      ],
    },
    es: {
      h1: "¿Cómo se promociona una autoescuela?",
      answer: "Promociona tu autoescuela haciendo que sea fácil de encontrar, fácil de confiar y fácil de reservar. Empieza con tu Perfil de Empresa en Google y las reseñas, mantén activos Instagram y Facebook con contenido real, y añade anuncios locales cuando lo básico ya funcione. Responde rápido a cada consulta, porque una respuesta rápida muchas veces decide qué escuela se queda con el alumno.",
      sections: [
        { h: "Paso 1: Aparece en Google", p: "Reclama y completa tu Perfil de Empresa en Google: dirección correcta, horario, teléfono, servicios, fotos y las zonas que atiendes. Pide una reseña a cada alumno contento y responde a las reseñas, también a las negativas." },
        { h: "Paso 2: Genera confianza en redes", p: "Los papás quieren ver quién estará en el carro con su hijo. Publica a tus instructores, tus carros, los alumnos que aprobaron y consejos cortos al menos un par de veces por semana." },
        { h: "Paso 3: Añade anuncios locales", p: "Cuando tu perfil y tus páginas se vean bien, usa anuncios en Facebook e Instagram para llegar a la gente que vive cerca de tu escuela. Empieza con un presupuesto pequeño y una oferta clara, como un paquete de clases o una primera llamada gratis." },
        { h: "Paso 4: Responde rápido y mide", p: "Contesta llamadas, mensajes directos y formularios el mismo día. Pregunta a cada alumno nuevo cómo te encontró y lleva una cuenta mensual sencilla, para saber qué seguir haciendo." },
      ],
      faq: [
        { q: "¿Cuál es la forma más rápida de conseguir más alumnos?", a: "Completa tu Perfil de Empresa en Google y pide reseñas a tus alumnos recientes. Las dos cosas son gratis y te ayudan a aparecer cuando alguien cerca busca una autoescuela." },
        { q: "¿Anuncios en Facebook o en Google?", a: "Los anuncios de búsqueda en Google llegan a quienes ya buscan una autoescuela. Los anuncios en Facebook e Instagram llegan a papás y nuevos conductores de tu zona antes de que empiecen a buscar. Muchas escuelas empiezan con uno, miden resultados y luego prueban el otro." },
        { q: "¿Cómo puedo promocionar mi autoescuela gratis?", a: "Mantén tu perfil de Google al día, junta reseñas, publica con regularidad en redes y pide a los alumnos contentos que te recomienden a sus amigos." },
      ],
    },
  },
  {
    path: "/driving-school-advertising-ideas",
    facts: ["metaRadius", "pew"],
    keyword: "driving school advertising ideas",
    meta: {
      title: "Driving School Advertising Ideas That Work | Tell More",
      description: "Six driving school ad ideas for Facebook, Instagram and Google, how to target people near your school and how to tell which ads bring bookings.",
    },
    en: {
      h1: "What are good advertising ideas for a driving school?",
      answer: "Good driving school ads reach people near your school, show your real instructors and cars, and make one clear offer. Facebook and Instagram ads are good for reaching local parents and young drivers, while Google search ads reach people already looking for lessons. Start small, test two or three versions and keep the one that brings the most bookings.",
      sections: [
        { h: "6 advertising ideas to test", list: [
          "School-break packages: promote lesson packages before summer and school holidays, when teens have time to learn.",
          "Instructor video: a 15-second video of an instructor saying hello and explaining what happens in the first lesson.",
          "Student success: with permission, a photo of a student who passed and a short quote from them.",
          "Speak to parents: answer their worries directly, like safety, patient instructors and flexible times.",
          "English and Spanish versions: run the same ad in both languages to reach more families.",
          "Search ads for “driving school near me”: show up at the top of Google when people nearby search for lessons.",
        ] },
        { h: "How to target your ads", p: "Target a small area around your school, because most students won’t travel far for lessons. Write the ad for the person who decides, usually a parent, even when the student is a teenager. Always send people to one simple page or form where they can book or ask a question." },
        { h: "How to know if an ad works", p: "Look at calls, messages and bookings, not just likes. Give each ad enough time and budget to compare, check the cost of each inquiry and turn off the ads that don’t bring messages." },
      ],
      faq: [
        { q: "Where should a driving school advertise?", a: "Facebook and Instagram are good for reaching local parents and young drivers, and Google search ads reach people already looking for lessons. Local options like school events and community boards can also work." },
        { q: "How much should a driving school spend on ads?", a: "Start with a small daily budget you are comfortable with, run it for a few weeks and measure the cost of each inquiry. Only increase the budget on ads that bring bookings." },
        { q: "What makes a good driving school ad?", a: "A real photo or video from your school, one clear offer, the area you serve and one simple button to book or send a message." },
      ],
    },
    es: {
      h1: "¿Qué ideas de publicidad funcionan para una autoescuela?",
      answer: "Los buenos anuncios para autoescuelas llegan a la gente cerca de tu escuela, muestran a tus instructores y carros reales y hacen una sola oferta clara. Los anuncios en Facebook e Instagram sirven para llegar a papás y jóvenes de tu zona, y los anuncios de búsqueda en Google llegan a quienes ya buscan clases. Empieza con poco, prueba dos o tres versiones y quédate con la que traiga más reservas.",
      sections: [
        { h: "6 ideas de publicidad para probar", list: [
          "Paquetes para vacaciones: promociona paquetes de clases antes del verano y las vacaciones escolares, cuando los adolescentes tienen tiempo.",
          "Video de un instructor: 15 segundos de un instructor saludando y explicando qué pasa en la primera clase.",
          "Éxito de un alumno: con permiso, una foto de un alumno que aprobó y una frase suya.",
          "Habla a los papás: responde directamente a sus dudas, como la seguridad, instructores pacientes y horarios flexibles.",
          "Versiones en inglés y en español: el mismo anuncio en los dos idiomas para llegar a más familias.",
          "Anuncios para “driving school near me”: aparece arriba en Google cuando alguien cerca busca clases.",
        ] },
        { h: "Cómo segmentar tus anuncios", p: "Apunta a una zona pequeña alrededor de tu escuela, porque la mayoría de los alumnos no viajan lejos para sus clases. Escribe el anuncio para quien decide, normalmente un papá o una mamá, aunque el alumno sea adolescente. Lleva siempre a la gente a una sola página o formulario sencillo donde pueda reservar o preguntar." },
        { h: "Cómo saber si un anuncio funciona", p: "Mira llamadas, mensajes y reservas, no solo los likes. Dale a cada anuncio tiempo y presupuesto suficientes para comparar, revisa el costo de cada consulta y apaga los anuncios que no traen mensajes." },
      ],
      faq: [
        { q: "¿Dónde debería anunciarse una autoescuela?", a: "Facebook e Instagram sirven para llegar a papás y jóvenes de tu zona, y los anuncios de búsqueda en Google llegan a quienes ya buscan clases. Opciones locales como eventos escolares y tablones comunitarios también pueden funcionar." },
        { q: "¿Cuánto debería gastar una autoescuela en anuncios?", a: "Empieza con un presupuesto diario pequeño con el que estés cómodo, mantenlo unas semanas y mide el costo de cada consulta. Aumenta el presupuesto solo en los anuncios que traen reservas." },
        { q: "¿Qué hace que un anuncio de autoescuela sea bueno?", a: "Una foto o video real de tu escuela, una oferta clara, la zona que atiendes y un solo botón sencillo para reservar o enviar un mensaje." },
      ],
    },
  },
  {
    path: "/seo-for-driving-schools",
    facts: ["seoHelpful", "seoTitles"],
    keyword: "seo for driving schools",
    meta: {
      title: "SEO for Driving Schools: Get Found on Google | Tell More",
      description: "How SEO works for a driving school: the pages to build, the titles to write and the local steps that help Texas families find you on Google.",
    },
    en: {
      h1: "How does SEO work for a driving school?",
      answer: "SEO (search engine optimization) means making your website and Google profile easy for Google to understand, so your school shows up when families search for driving lessons nearby. For a driving school that mostly means one clear page per service and city, honest titles and a complete Google Business Profile. It takes a few months, but once it works it brings in students without paying for every click.",
      sections: [
        { h: "What people actually search for", p: "Parents and new drivers type simple things: “driving school near me”, “teen driver ed Houston”, “adult driving lessons”, “clases de manejo en español”. Every one of those searches is a chance to show up, but only if your website has a page that clearly answers it." },
        { h: "The SEO basics for a driving school", list: [
          "One page per service: teen driver education, adult lessons, road test practice, each with its own page and price.",
          "One page per area you serve: name the cities and neighborhoods you really cover, with something specific to each.",
          "Clear titles: each page gets its own title that says what it is, like “Teen Driver Ed in Katy, TX”.",
          "Helpful answers: explain prices, how many hours, what to bring and how to book, in plain words.",
          "Spanish pages: many Texas families search in Spanish, and few schools have pages for them.",
        ] },
        { h: "Local SEO: your Google Business Profile", p: "For “near me” searches, Google often shows the map with three businesses before any website. Fill in every part of your Google Business Profile, add real photos, list your services and ask happy students for reviews. Your website and your profile should show the same name, address and phone number." },
      ],
      faq: [
        { q: "How long does SEO take for a driving school?", a: "Small fixes like better titles and a complete Google profile can help within weeks. New pages usually need a few months before they bring a steady flow of visits." },
        { q: "Is SEO better than ads?", a: "They do different jobs. Ads bring calls as soon as you pay, and stop when you stop. SEO is slower but keeps working. Most schools do best with a bit of both." },
        { q: "Do I need a blog?", a: "Not to start. Clear service and area pages matter more. Later, short guides that answer real parent questions, like how driver ed works in Texas, can bring extra visits." },
      ],
    },
    es: {
      h1: "¿Cómo funciona el SEO para una autoescuela?",
      answer: "El SEO (posicionamiento en buscadores) consiste en que Google entienda fácilmente tu sitio web y tu perfil, para que tu escuela aparezca cuando las familias buscan clases de manejo cerca. Para una autoescuela, eso significa sobre todo una página clara por servicio y por ciudad, títulos honestos y un Perfil de Empresa en Google completo. Toma unos meses, pero cuando funciona trae alumnos sin pagar por cada clic.",
      sections: [
        { h: "Lo que la gente realmente busca", p: "Los papás y los nuevos conductores escriben cosas sencillas: “autoescuela cerca de mí”, “driver ed para adolescentes en Houston”, “clases de manejo para adultos”, “clases de manejo en español”. Cada búsqueda es una oportunidad de aparecer, pero solo si tu sitio tiene una página que la responda con claridad." },
        { h: "Lo básico del SEO para una autoescuela", list: [
          "Una página por servicio: driver ed para adolescentes, clases para adultos, práctica para el examen, cada una con su página y su precio.",
          "Una página por zona: nombra las ciudades y colonias que realmente atiendes, con algo específico de cada una.",
          "Títulos claros: cada página con su propio título que diga lo que es, como “Driver Ed para adolescentes en Katy, TX”.",
          "Respuestas útiles: explica precios, cuántas horas, qué traer y cómo reservar, con palabras sencillas.",
          "Páginas en español: muchas familias en Texas buscan en español y pocas escuelas tienen páginas para ellas.",
        ] },
        { h: "SEO local: tu Perfil de Empresa en Google", p: "En las búsquedas “cerca de mí”, Google suele mostrar el mapa con tres negocios antes que cualquier sitio web. Completa cada parte de tu Perfil de Empresa en Google, sube fotos reales, agrega tus servicios y pide reseñas a los alumnos contentos. Tu sitio y tu perfil deben mostrar el mismo nombre, dirección y teléfono." },
      ],
      faq: [
        { q: "¿Cuánto tarda el SEO para una autoescuela?", a: "Arreglos pequeños, como mejores títulos y un perfil de Google completo, pueden ayudar en semanas. Las páginas nuevas suelen necesitar unos meses para traer visitas de forma constante." },
        { q: "¿Es mejor el SEO que los anuncios?", a: "Hacen trabajos distintos. Los anuncios traen llamadas en cuanto pagas y se detienen cuando dejas de pagar. El SEO es más lento pero sigue funcionando. A la mayoría de las escuelas les va mejor con un poco de ambos." },
        { q: "¿Necesito un blog?", a: "No para empezar. Las páginas claras de servicios y zonas importan más. Después, guías cortas que respondan preguntas reales de los papás pueden traer visitas extra." },
      ],
    },
  },
  {
    path: "/driving-school-website-design",
    facts: ["pageExperience", "reviews"],
    keyword: "driving school website design",
    meta: {
      title: "Driving School Website Design Checklist | Tell More",
      description: "What a driving school website needs: prices, areas served, reviews, fast mobile pages and a clear button to book. A simple checklist for Texas schools.",
    },
    en: {
      h1: "What makes a good driving school website?",
      answer: "A good driving school website answers a parent’s questions in under a minute: what you offer, how much it costs, where you teach and how to book. It loads fast on a phone, shows real reviews and photos, and has one clear button to call or book on every page. Fancy design matters much less than being clear, fast and easy to use.",
      sections: [
        { h: "What every driving school website needs", list: [
          "Prices and packages: parents compare schools on price first, so don’t hide it.",
          "Areas you serve: list the cities and neighborhoods where you pick up students or teach.",
          "Reviews and real photos: your instructors, your cars and students who passed.",
          "One clear action: a “Book a lesson” or “Call us” button that stays visible on every page.",
          "English and Spanish: a language switch helps you reach more Texas families.",
        ] },
        { h: "Design for the phone first", p: "Most families will open your site on a phone, often straight from Google or Instagram. Use big buttons, short paragraphs and a phone number that calls when tapped. Keep pages light so they open quickly, even on a weak signal." },
        { h: "Good UX is just fewer obstacles", p: "UX (user experience) means how easy the site is to use. Every extra click, long form or unclear menu loses some visitors. Ask a parent who has never seen your site to book a lesson on their phone, and watch where they get stuck. Fix that first." },
      ],
      faq: [
        { q: "Does my driving school need a website if I have Facebook?", a: "A Facebook page helps, but you don’t control it and Google shows websites for most searches. A simple website gives you a place to show prices, take bookings and appear in search results." },
        { q: "How many pages should a driving school website have?", a: "Start with a home page, one page per service, an about page with your instructors, a contact or booking page, and one page for each main area you serve." },
        { q: "How much does a driving school website cost?", a: "It depends on the number of pages and features like online booking. A clear, fast site with a few pages is enough for most schools to start." },
      ],
    },
    es: {
      h1: "¿Qué hace bueno el sitio web de una autoescuela?",
      answer: "Un buen sitio web de autoescuela responde las preguntas de un papá en menos de un minuto: qué ofreces, cuánto cuesta, dónde das clases y cómo reservar. Carga rápido en el celular, muestra reseñas y fotos reales y tiene un botón claro para llamar o reservar en cada página. El diseño elegante importa mucho menos que ser claro, rápido y fácil de usar.",
      sections: [
        { h: "Lo que todo sitio de autoescuela necesita", list: [
          "Precios y paquetes: los papás comparan escuelas primero por precio, así que no lo escondas.",
          "Zonas que atiendes: menciona las ciudades y colonias donde recoges alumnos o das clases.",
          "Reseñas y fotos reales: tus instructores, tus carros y los alumnos que aprobaron.",
          "Una sola acción clara: un botón de “Reservar clase” o “Llámanos” visible en cada página.",
          "Inglés y español: un cambio de idioma te ayuda a llegar a más familias en Texas.",
        ] },
        { h: "Diseña primero para el celular", p: "La mayoría de las familias abrirá tu sitio en el celular, muchas veces directo desde Google o Instagram. Usa botones grandes, párrafos cortos y un teléfono que llame al tocarlo. Mantén las páginas ligeras para que abran rápido, incluso con mala señal." },
        { h: "Una buena UX es tener menos obstáculos", p: "La UX (experiencia de usuario) es qué tan fácil es usar el sitio. Cada clic extra, formulario largo o menú confuso hace que se vayan visitantes. Pide a un papá que nunca haya visto tu sitio que reserve una clase desde su celular y observa dónde se atora. Arregla eso primero." },
      ],
      faq: [
        { q: "¿Mi autoescuela necesita sitio web si ya tengo Facebook?", a: "Una página de Facebook ayuda, pero no la controlas y Google muestra sitios web en la mayoría de las búsquedas. Un sitio sencillo te da un lugar para mostrar precios, recibir reservas y aparecer en los resultados." },
        { q: "¿Cuántas páginas debe tener el sitio de una autoescuela?", a: "Empieza con inicio, una página por servicio, una sobre tus instructores, una de contacto o reservas y una por cada zona principal que atiendes." },
        { q: "¿Cuánto cuesta el sitio web de una autoescuela?", a: "Depende del número de páginas y de funciones como las reservas en línea. Un sitio claro y rápido con pocas páginas basta para que la mayoría de las escuelas empiece." },
      ],
    },
  },
  {
    path: "/google-ads-for-driving-schools",
    facts: ["googleAdsRadius", "reviews"],
    keyword: "google ads for driving schools",
    meta: {
      title: "Google Ads for Driving Schools: A Simple Guide | Tell More",
      description: "How Google Ads works for a driving school: the searches to bid on, how to target the area you serve, what to track and mistakes that waste budget.",
    },
    en: {
      h1: "Do Google Ads work for driving schools?",
      answer: "Yes, Google Ads can work well for driving schools because they show your school to people who are already searching for driving lessons right now. You choose the searches, set a daily budget and only show ads to people in the area you serve. The key is to send the click to a clear page with prices and a booking button, and to track which ads bring calls.",
      sections: [
        { h: "How Google Ads works, in plain words", p: "You pick the searches you want to appear for, such as “driving school near me” or “teen driver ed [your city]”. When someone in your area searches, Google can show your ad above the normal results. You usually pay only when someone clicks, and you set a budget so you never spend more than planned." },
        { h: "How to set up a driving school campaign", list: [
          "Target your area: use a radius around your school or list the cities you serve.",
          "Choose buying searches: “driving lessons”, “driver ed”, “driving school near me”, plus your city names.",
          "Add negative keywords: exclude searches like “jobs”, “instructor training” or “free” that won’t bring students.",
          "Use call and location assets: let people call or see your address straight from the ad.",
          "Send clicks to the right page: a teen driver ed ad should open your teen driver ed page, not your home page.",
        ] },
        { h: "What to track", p: "Count calls, booking requests and new students from Google Ads every month, not just clicks. If a search brings clicks but no bookings, pause it. Raise the budget only on the searches that bring students." },
      ],
      faq: [
        { q: "How much should a driving school spend on Google Ads?", a: "Start with a small daily budget you are comfortable with, run it for a month and measure the bookings it brings. Increase it only when you can see the cost per new student is worth it." },
        { q: "Google Ads or Facebook ads?", a: "Google Ads reach people who are already searching for lessons. Facebook and Instagram ads reach parents and teens who aren’t searching yet. Many schools use Google for ready-to-book families and Meta to stay visible." },
        { q: "Why am I getting clicks but no calls?", a: "Usually the page after the click is the problem: no price, no clear button or a slow page on mobile. It can also be searches that don’t match what you offer, which negative keywords can fix." },
      ],
    },
    es: {
      h1: "¿Funcionan los anuncios de Google para autoescuelas?",
      answer: "Sí, Google Ads puede funcionar muy bien para autoescuelas porque muestra tu escuela a personas que ya están buscando clases de manejo en ese momento. Tú eliges las búsquedas, pones un presupuesto diario y solo muestras anuncios en la zona que atiendes. La clave es llevar el clic a una página clara con precios y botón de reservar, y medir qué anuncios traen llamadas.",
      sections: [
        { h: "Cómo funciona Google Ads, en palabras sencillas", p: "Eliges las búsquedas en las que quieres aparecer, como “autoescuela cerca de mí” o “driver ed en [tu ciudad]”. Cuando alguien de tu zona busca eso, Google puede mostrar tu anuncio arriba de los resultados normales. Normalmente pagas solo cuando alguien hace clic, y pones un presupuesto para no gastar más de lo planeado." },
        { h: "Cómo armar una campaña para tu autoescuela", list: [
          "Elige tu zona: usa un radio alrededor de tu escuela o la lista de ciudades que atiendes.",
          "Elige búsquedas de compra: “clases de manejo”, “driver ed”, “autoescuela cerca de mí”, más los nombres de tus ciudades.",
          "Agrega palabras clave negativas: excluye búsquedas como “empleo”, “curso para instructor” o “gratis” que no traen alumnos.",
          "Usa extensiones de llamada y ubicación: que puedan llamarte o ver tu dirección desde el anuncio.",
          "Lleva cada clic a la página correcta: un anuncio de driver ed para adolescentes debe abrir esa página, no tu inicio.",
        ] },
        { h: "Qué medir", p: "Cuenta cada mes las llamadas, solicitudes de reserva y alumnos nuevos que llegan por Google Ads, no solo los clics. Si una búsqueda trae clics pero ninguna reserva, páusala. Sube el presupuesto solo en las búsquedas que traen alumnos." },
      ],
      faq: [
        { q: "¿Cuánto debería gastar una autoescuela en Google Ads?", a: "Empieza con un presupuesto diario pequeño con el que estés cómodo, déjalo un mes y mide las reservas que trae. Auméntalo solo cuando veas que el costo por alumno nuevo vale la pena." },
        { q: "¿Google Ads o anuncios en Facebook?", a: "Google Ads llega a gente que ya busca clases. Los anuncios en Facebook e Instagram llegan a papás y adolescentes que todavía no buscan. Muchas escuelas usan Google para las familias listas para reservar y Meta para seguir siendo visibles." },
        { q: "¿Por qué tengo clics pero no llamadas?", a: "Casi siempre el problema es la página después del clic: sin precio, sin botón claro o lenta en el celular. También pueden ser búsquedas que no coinciden con lo que ofreces, algo que se arregla con palabras clave negativas." },
      ],
    },
  },
  {
    path: "/facebook-ads-for-driving-schools",
    facts: ["pew", "metaRadius"],
    keyword: "facebook ads for driving schools",
    meta: {
      title: "Facebook & Instagram Ads for Driving Schools | Tell More",
      description: "How Texas driving schools can use Facebook and Instagram ads: who to target, ad ideas that work, lead forms and how to measure bookings.",
    },
    en: {
      h1: "How can a driving school use Facebook and Instagram ads?",
      answer: "Facebook and Instagram ads let a driving school show short videos and offers to parents and new drivers who live near the school, before they even start searching. You set the area, the budget and the goal, such as messages, calls or a booking form. The ads that work best usually show real instructors and students, a clear offer and one simple next step.",
      sections: [
        { h: "Who to reach", list: [
          "Parents of teens: they choose the school and pay, so speak to safety, trust and price.",
          "Teens close to driving age: short, fun videos of real lessons and students who passed.",
          "Adults and newcomers to Texas: lessons for first-time adult drivers and refreshers.",
          "Spanish-speaking families: run the same ad in Spanish to reach more of your city.",
        ] },
        { h: "Ad ideas that work for driving schools", list: [
          "Student wins: a short clip of a student holding their new license, with their permission.",
          "Meet the instructor: 15 seconds of an instructor saying hello and explaining a first lesson.",
          "Seasonal offers: summer or back-to-school packages with a clear deadline.",
          "Lead forms: an instant form where parents leave their number without leaving Facebook or Instagram.",
        ] },
        { h: "How to measure results", p: "Look at messages, calls, form leads and, most of all, booked students, not likes. Call back form leads quickly, because interest fades fast. Keep the ads that bring bookings and replace the rest every few weeks with new videos." },
      ],
      faq: [
        { q: "Are Facebook ads still worth it for local businesses?", a: "Yes. Most U.S. adults still use Facebook and half use Instagram, and you can show ads only to people near your school. The key is real, local content and a clear offer." },
        { q: "What is a lead ad?", a: "A lead ad shows a short form inside Facebook or Instagram, already filled with the person’s name and contact details. It makes it easy for a parent to ask you to call them back." },
        { q: "How long should a driving school ad run?", a: "Give a new ad about one to two weeks to collect results, then keep the best ones and refresh the creative every few weeks so people don’t get tired of it." },
      ],
    },
    es: {
      h1: "¿Cómo puede una autoescuela usar anuncios en Facebook e Instagram?",
      answer: "Los anuncios en Facebook e Instagram permiten a una autoescuela mostrar videos cortos y ofertas a papás y nuevos conductores que viven cerca, antes de que empiecen a buscar. Tú eliges la zona, el presupuesto y el objetivo, como mensajes, llamadas o un formulario de reserva. Los anuncios que mejor funcionan suelen mostrar instructores y alumnos reales, una oferta clara y un solo paso sencillo.",
      sections: [
        { h: "A quién llegar", list: [
          "Papás de adolescentes: eligen la escuela y pagan, así que háblales de seguridad, confianza y precio.",
          "Adolescentes cerca de la edad para manejar: videos cortos y divertidos de clases reales y alumnos que aprobaron.",
          "Adultos y recién llegados a Texas: clases para adultos que manejan por primera vez y repasos.",
          "Familias hispanohablantes: el mismo anuncio en español para llegar a más gente de tu ciudad.",
        ] },
        { h: "Ideas de anuncios que funcionan para autoescuelas", list: [
          "Logros de alumnos: un clip de un alumno con su nueva licencia, con su permiso.",
          "Conoce al instructor: 15 segundos de un instructor saludando y explicando la primera clase.",
          "Ofertas de temporada: paquetes de verano o regreso a clases con fecha límite clara.",
          "Formularios: un formulario instantáneo donde los papás dejan su número sin salir de Facebook o Instagram.",
        ] },
        { h: "Cómo medir resultados", p: "Fíjate en mensajes, llamadas, formularios y, sobre todo, alumnos que reservan, no en los likes. Llama rápido a quienes dejan su número, porque el interés se enfría pronto. Quédate con los anuncios que traen reservas y cambia el resto cada pocas semanas por videos nuevos." },
      ],
      faq: [
        { q: "¿Siguen valiendo la pena los anuncios de Facebook para negocios locales?", a: "Sí. La mayoría de los adultos en EE. UU. todavía usa Facebook y la mitad usa Instagram, y puedes mostrar anuncios solo a gente cerca de tu escuela. La clave es contenido real y local con una oferta clara." },
        { q: "¿Qué es un anuncio de clientes potenciales?", a: "Es un anuncio que muestra un formulario corto dentro de Facebook o Instagram, ya lleno con el nombre y contacto de la persona. Así es fácil que un papá te pida que le llames." },
        { q: "¿Cuánto tiempo debe correr un anuncio de autoescuela?", a: "Dale a un anuncio nuevo una o dos semanas para juntar resultados, luego quédate con los mejores y cambia el contenido cada pocas semanas para que la gente no se canse." },
      ],
    },
  },
  {
    path: "/driving-school-online-booking",
    facts: ["gbpBooking", "googleComplete"],
    keyword: "driving school online booking",
    meta: {
      title: "Online Booking & Payments for Driving Schools | Tell More",
      description: "How online booking and payments help a driving school fill its schedule: what to offer, how to connect it to Google and how to cut no-shows.",
    },
    en: {
      h1: "Should your driving school take bookings and payments online?",
      answer: "Yes, letting students book and pay online makes it easier for busy parents to say yes, often at night when your office is closed. A simple booking page shows open lesson times, takes a deposit or full payment and sends reminders. You can link it from your website, Instagram and Google Business Profile so every visitor has one clear way to book.",
      sections: [
        { h: "Why online booking brings more students", p: "Many parents compare schools in the evening, after work. If the only way to book is to call during office hours, some of them will book with the school that lets them do it right away. Online booking turns that late-night interest into a confirmed lesson." },
        { h: "What to put online", list: [
          "Packages with clear prices: teen driver ed, adult lessons, road test practice.",
          "Real availability: open lesson slots by instructor or location, updated automatically.",
          "Deposits or full payment: a small deposit when booking cuts no-shows.",
          "Automatic reminders: text or email the day before a lesson.",
          "Simple policies: how to reschedule or cancel, written in plain words.",
        ] },
        { h: "Connect booking to Google and social media", p: "Add your booking link to your Google Business Profile so people can book straight from Google Search and Maps. Put the same link in your Instagram and Facebook bio, in every ad and on every page of your website. One link everywhere makes it easy to track how many bookings come from each place." },
      ],
      faq: [
        { q: "Will online booking replace phone calls?", a: "No. Many parents will still want to call with questions. Online booking adds a second way to say yes, especially outside office hours." },
        { q: "Should I ask for payment upfront?", a: "A deposit is a good middle ground. It confirms the student is serious and reduces no-shows, without asking a family to pay everything before they know you." },
        { q: "Can I add a booking button to Google?", a: "You can add a booking link to your Google Business Profile, and some booking providers connected to Google can also show a booking button on your profile." },
      ],
    },
    es: {
      h1: "¿Tu autoescuela debería aceptar reservas y pagos en línea?",
      answer: "Sí, permitir que los alumnos reserven y paguen en línea hace más fácil que los papás ocupados digan que sí, muchas veces de noche cuando tu oficina está cerrada. Una página de reservas sencilla muestra los horarios libres, cobra un depósito o el total y envía recordatorios. Puedes enlazarla desde tu sitio, Instagram y tu Perfil de Empresa en Google para que cada visitante tenga una forma clara de reservar.",
      sections: [
        { h: "Por qué las reservas en línea traen más alumnos", p: "Muchos papás comparan escuelas en la noche, después del trabajo. Si la única forma de reservar es llamar en horario de oficina, algunos reservarán con la escuela que les deja hacerlo al momento. Las reservas en línea convierten ese interés nocturno en una clase confirmada." },
        { h: "Qué poner en línea", list: [
          "Paquetes con precios claros: driver ed para adolescentes, clases para adultos, práctica para el examen.",
          "Disponibilidad real: horarios libres por instructor o sede, actualizados automáticamente.",
          "Depósito o pago completo: un pequeño depósito al reservar reduce las faltas.",
          "Recordatorios automáticos: un mensaje o correo el día antes de la clase.",
          "Reglas sencillas: cómo cambiar o cancelar, escrito en palabras claras.",
        ] },
        { h: "Conecta las reservas con Google y tus redes", p: "Agrega tu enlace de reservas a tu Perfil de Empresa en Google para que la gente reserve directo desde la Búsqueda y Maps. Pon el mismo enlace en la bio de Instagram y Facebook, en cada anuncio y en cada página de tu sitio. Un solo enlace en todas partes facilita medir cuántas reservas llegan de cada lugar." },
      ],
      faq: [
        { q: "¿Las reservas en línea van a reemplazar las llamadas?", a: "No. Muchos papás seguirán queriendo llamar con preguntas. Las reservas en línea agregan una segunda forma de decir que sí, sobre todo fuera del horario de oficina." },
        { q: "¿Debo pedir el pago por adelantado?", a: "Un depósito es un buen punto medio. Confirma que el alumno va en serio y reduce las faltas, sin pedir a una familia que pague todo antes de conocerte." },
        { q: "¿Puedo agregar un botón de reservar en Google?", a: "Puedes agregar un enlace de reservas a tu Perfil de Empresa en Google, y algunos proveedores de reservas conectados con Google también pueden mostrar un botón de reservar en tu perfil." },
      ],
    },
  },
  {
    path: "/driving-school-automatic-replies",
    facts: ["metaInbox", "reviews"],
    keyword: "ai automation for driving schools",
    meta: {
      title: "AI & Automatic Replies for Driving Schools | Tell More",
      description: "How a driving school can use automatic replies and AI to answer messages fast on Instagram, Facebook and WhatsApp, without losing the personal touch.",
    },
    en: {
      h1: "How can a driving school use AI and automatic replies?",
      answer: "A driving school can use automatic replies to answer common messages, like prices, hours and location, within seconds on Instagram, Facebook and WhatsApp, even when nobody is in the office. AI tools can also help draft posts and replies, but a real person should check anything about prices, schedules or safety. The goal is simple: no parent waits hours for an answer and goes to another school.",
      sections: [
        { h: "Why fast replies matter", p: "When a parent messages three driving schools, the first one to answer clearly often gets the booking. Instructors are on the road most of the day, so messages can sit for hours. Automatic replies make sure every message gets an answer straight away, and your team can follow up later." },
        { h: "What to automate first", list: [
          "Instant reply: a friendly greeting with your booking link for anyone who messages for the first time.",
          "Away message: a reply after hours that says when you will answer.",
          "Frequent questions: prices, packages, hours, location and what to bring to the first lesson.",
          "Booking reminders: automatic texts or emails before each lesson.",
          "Review requests: a message after the road test asking happy students for a Google review.",
        ] },
        { h: "Where AI helps, and where a person should decide", p: "AI tools can suggest replies, translate a message into Spanish or draft a caption in seconds. Use them to save time, but read everything before it goes out. Prices, schedules, refunds and anything about safety or the law should always be checked by someone at your school." },
      ],
      faq: [
        { q: "Will automatic replies feel cold to parents?", a: "Not if you write them in your own friendly voice and sign them with your school’s name. Keep them short, answer the question and offer a way to talk to a real person." },
        { q: "Can automatic replies work in Spanish?", a: "Yes. Write each reply in English and Spanish, or set up separate replies, so families get an answer in the language they used." },
        { q: "Do I need expensive software?", a: "No. Meta Business Suite already includes instant replies, away messages and frequently asked questions for Facebook, Instagram and WhatsApp, and most booking tools send reminders." },
      ],
    },
    es: {
      h1: "¿Cómo puede una autoescuela usar IA y respuestas automáticas?",
      answer: "Una autoescuela puede usar respuestas automáticas para contestar en segundos los mensajes comunes, como precios, horario y ubicación, en Instagram, Facebook y WhatsApp, aunque no haya nadie en la oficina. Las herramientas de IA también ayudan a escribir posts y respuestas, pero una persona real debe revisar todo lo que tenga que ver con precios, horarios o seguridad. El objetivo es sencillo: que ningún papá espere horas una respuesta y se vaya con otra escuela.",
      sections: [
        { h: "Por qué importa responder rápido", p: "Cuando un papá escribe a tres autoescuelas, la primera que responde con claridad muchas veces se queda con la reserva. Los instructores pasan casi todo el día en la calle, así que los mensajes pueden esperar horas. Las respuestas automáticas aseguran que cada mensaje reciba una respuesta al instante, y tu equipo puede dar seguimiento después." },
        { h: "Qué automatizar primero", list: [
          "Respuesta instantánea: un saludo amable con tu enlace de reservas para quien escribe por primera vez.",
          "Mensaje de ausencia: una respuesta fuera de horario que diga cuándo vas a contestar.",
          "Preguntas frecuentes: precios, paquetes, horario, ubicación y qué traer a la primera clase.",
          "Recordatorios de clase: mensajes o correos automáticos antes de cada clase.",
          "Pedir reseñas: un mensaje después del examen para pedir a los alumnos contentos una reseña en Google.",
        ] },
        { h: "Dónde ayuda la IA y dónde debe decidir una persona", p: "Las herramientas de IA pueden sugerir respuestas, traducir un mensaje al español o escribir un texto para un post en segundos. Úsalas para ahorrar tiempo, pero lee todo antes de enviarlo. Precios, horarios, reembolsos y todo lo relacionado con seguridad o la ley siempre debe revisarlo alguien de tu escuela." },
      ],
      faq: [
        { q: "¿Las respuestas automáticas se sentirán frías para los papás?", a: "No si las escribes con tu propio tono amable y las firmas con el nombre de tu escuela. Hazlas cortas, responde la pregunta y ofrece hablar con una persona real." },
        { q: "¿Las respuestas automáticas funcionan en español?", a: "Sí. Escribe cada respuesta en inglés y en español, o crea respuestas separadas, para que las familias reciban la respuesta en el idioma en que escribieron." },
        { q: "¿Necesito un programa caro?", a: "No. Meta Business Suite ya incluye respuestas instantáneas, mensajes de ausencia y preguntas frecuentes para Facebook, Instagram y WhatsApp, y la mayoría de las herramientas de reservas envía recordatorios." },
      ],
    },
  },
] as const satisfies readonly LandingPageData[];
