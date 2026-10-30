// SEO landing pages, one per keyword checked in Session 5.
// Each page: question as H1, a 3-sentence answer, H2 sections, an FAQ and links to the other pages.

type Section = { h: string; p?: string; list?: readonly string[] };
type Content = { h1: string; answer: string; sections: readonly Section[]; faq: readonly { q: string; a: string }[] };
export type LandingPageData = {
  path: string;
  keyword: string;
  meta: { title: string; description: string };
  en: Content;
  es: Content;
};

export const landingPages = [
  {
    path: "/driving-school-marketing",
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
] as const satisfies readonly LandingPageData[];
