// Spanish (es-CO) dictionary — source of truth for all UI copy.
// Verbatim from original hardcoded strings. Do not edit copy without an
// explicit request (see CLAUDE.md). Mirror every key in en.ts.

export const es = {
  meta: {
    title: 'Desarrollo de software a medida en Colombia | Lúmina W',
    description:
      'Software a medida, automatizaciones y sistemas digitales para empresas que necesitan operar sin procesos manuales. Desde Medellín para toda Colombia.',
    ogImageAlt: 'Lúmina W — Desarrollo de software a medida en Colombia',
    notFoundTitle: '404 | Página no encontrada',
  },

  nav: {
    brandAria: 'Lúmina W, Inicio',
    primaryAria: 'Principal',
    services: 'Servicios',
    process: 'Proceso',
    product: 'Producto',
    us: 'Nosotros',
    contact: 'Contacto',
    cta: 'Agenda llamada',
    openMenu: 'Abrir menú',
    opensNewTab: ' (abre en una pestaña nueva)',
    productMenu: {
      allHref: '/productos',
      allLabel: 'Ver todos los productos',
      items: [
        {
          href: 'https://terracoreapp.co',
          label: 'TerraCore',
          external: true,
          status: 'live',
          badge: 'Preventa activa',
        },
        {
          href: 'https://wavival.dev/root',
          label: 'Root',
          external: true,
          status: 'soon',
          badge: 'Próximamente',
        },
      ],
    },
  },

  hero: {
    eyebrow: 'Software a medida · SaaS B2B · Medellín, Colombia',
    titleA: 'Tu operación tiene problemas',
    titleEm: 'no puede resolver',
    titlePre: 'que Excel ',
    titlePost: '.',
    lead: 'Construimos el software exacto que necesitas: desde automatizaciones puntuales hasta plataformas completas a medida.',
    ctaPrimary: 'Cuéntanos tu problema',
    ctaSecondary: 'Ver TerraCore',
    capsAria: 'Lo que hacemos',
    caps: [
      {
        title: 'Automatizamos procesos',
        desc: 'Menos trabajo manual, más operación que avanza sola.',
      },
      {
        title: 'Software a medida',
        desc: 'Sistemas que se ajustan a tu negocio, no al revés.',
      },
      {
        title: 'IA aplicada',
        desc: 'Chatbots e integraciones que trabajan con tus datos.',
      },
    ],
    termAria:
      'Resultados de un sistema en producción: proceso de facturación automatizado, inventario en tiempo real operativo, reportes semanales manuales eliminados, cero horas de carga de datos por semana. Sistema en producción sin intervención manual.',
    termRows: [
      { label: 'Proceso de facturación', val: 'automatizado', num: false },
      { label: 'Inventario en tiempo real', val: 'operativo', num: false },
      { label: 'Reportes semanales manuales', val: 'eliminados', num: false },
      { label: 'Horas de carga de datos / sem', val: '0 hrs', num: true },
    ],
    termFoot: 'Sistema en producción · sin intervención manual',
  },

  fork: {
    eyebrow: '¿Por dónde empezar?',
    heading: '¿Qué describe mejor tu situación?',
    lead: 'Dos caminos, una misma ingeniería. Elige el tuyo y llega directo a la propuesta que te corresponde.',
    ghost: 'Empieza',
    asidePre: '¿No encaja ninguno? Cuéntanos tu caso y te orientamos.',
    asideLink: 'Hablar con el equipo',
    paths: [
      {
        tag: 'Producto propio · SaaS listo',
        title: 'Gestiono una operación agropecuaria o agroindustrial',
        line: 'TerraCore ya existe. Úsalo desde hoy.',
        cta: 'Conocer TerraCore',
        href: '/#terracore',
        icon: 'layers',
        inverse: false,
      },
      {
        tag: 'Desarrollo a medida',
        title: 'Tengo un proceso que quiero digitalizar o automatizar',
        line: 'Sitio, sistema interno o plataforma a medida. Lo construimos contigo.',
        cta: 'Hablar con el equipo',
        href: '/#contact',
        icon: 'custom',
        inverse: true,
      },
    ],
  },

  problem: {
    eyebrow: 'El problema',
    heading: 'Tu empresa crece. Tus herramientas, no.',
    lead: 'Cada día que operas con procesos manuales y software genérico que no entiende tu industria, estás perdiendo:',
    ghost: 'Problema',
    stakesKicker: 'No es un problema de disciplina.',
    stakesLinePre: 'Es un problema de ',
    stakesLineEm: 'infraestructura',
    stakesLinePost: '.',
    items: [
      {
        n: '01',
        icon: 'clock',
        title: 'Tiempo que no recuperas',
        description:
          'Procesos manuales que consumen horas que podrían invertirse en hacer crecer tu negocio.',
      },
      {
        n: '02',
        icon: 'chart',
        title: 'Datos que no puedes leer',
        description:
          'Información dispersa en hojas de cálculo que nadie entiende y nadie mantiene actualizada.',
      },
      {
        n: '03',
        icon: 'eye-off',
        title: 'Decisiones a ciegas',
        description:
          'Sin visibilidad en tiempo real, cada decisión es una apuesta. No una estrategia.',
      },
      {
        n: '04',
        icon: 'coin',
        title: 'Dinero que se va sin que lo veas',
        description:
          'Ineficiencias ocultas que se acumulan mes a mes sin que nadie las mida ni las corrija.',
      },
    ],
  },

  agitation: {
    headingA: 'El software mal construido',
    headingB: 'cuesta más que no tener software.',
    tail: 'La mayoría de las empresas lo descubren tarde.',
    points: [
      'Un sistema que falla en producción detiene tu operación.',
      'Uno que no escala te obliga a reconstruirlo en dos años.',
      'Uno sin seguridad expone los datos de tu empresa y tus clientes.',
    ],
  },

  marquee: [
    'Software a medida',
    'Productos SaaS B2B',
    'Arquitectura escalable',
    'Seguridad integrada',
    'IA aplicada a procesos',
    'Código limpio que escala',
    'Soporte y operación',
    'Calidad empresarial',
  ],

  solution: {
    eyebrow: 'La solución',
    heading: 'Lúmina W construye software que dura.',
    leadA:
      'No vendemos tecnología. Vendemos operaciones que funcionan sin que tengas que pensar en ellas.',
    leadBPre: 'Elige tu camino:',
    leadBStrongA: 'desarrollo a medida',
    leadBMid: ' o ',
    leadBStrongB: 'SaaS especializado',
    leadBPost: '.',
    ghost: 'Servicios',
    flag: 'Servicio principal',
    cta: 'Quiero una asesoría sin costo',
    services: [
      {
        tag: 'Desarrollo a medida',
        title: 'Software diseñado para tu operación',
        description:
          'No vendemos templates ni soluciones genéricas. Analizamos tu proceso, tu industria y tu equipo, y construimos exactamente lo que necesitas, con la arquitectura correcta desde el primer día.',
        features: [
          'Arquitectura escalable desde el inicio.',
          'Seguridad integrada, no añadida después.',
          'Código limpio y documentado.',
          'Soporte y evolución continua.',
        ],
        icon: 'custom',
        inverse: false,
        primary: true,
        ctaLabel: 'Quiero una asesoría sin costo',
        ctaHref: '/#contact',
        ctaExternal: false,
      },
      {
        tag: 'Productos SaaS B2B',
        title: 'Soluciones listas para tu industria',
        description:
          'Productos construidos con los mismos estándares del desarrollo a medida. Pagas por lo que usas, escalas cuando lo necesitas, sin inversión inicial en infraestructura.',
        features: [
          'Implementación rápida.',
          'Actualizaciones automáticas.',
          'Multi-empresa desde el inicio.',
          'Precio por uso, no por proyecto.',
        ],
        icon: 'saas',
        inverse: true,
        primary: false,
        ctaLabel: 'Ver productos',
        ctaHref: '/productos',
        ctaExternal: false,
      },
    ],
  },

  process: {
    eyebrow: 'Cómo trabajamos',
    heading: 'Depende del camino que tomes.',
    lead: 'Dos modelos, dos cadencias, dos compromisos distintos. Elige el que se ajusta a tu operación.',
    ghost: 'Proceso',
    hook: 'Sin caja negra. Sabes qué se está construyendo, cuándo estará listo y qué viene después. Desde el día uno.',
    disclosureOpenLabel: 'Ver cómo funciona',
    disclosureCloseLabel: 'Ocultar pasos',
    portalLabel: 'Cómo ves el progreso',
    portalHeading: 'Visibilidad permanente, en ambos caminos.',
    portalText:
      'Lo que ves depende del modelo que contrates: en Desarrollo a Medida ves el proceso de construcción; en SaaS en Alquiler ves la operación de tu plataforma.',
    portalDisclosureOpenLabel: 'Ver qué incluye cada modelo',
    portalDisclosureCloseLabel: 'Ocultar detalle',
    portalCustomTitle: 'En Desarrollo a Medida',
    portalCustomSub: 'Tu proyecto, en vivo.',
    portalCustomText:
      'Todos los Proyectos incluyen acceso a un espacio compartido donde tú y tu equipo ven el avance real: lo que está hecho, lo que se está construyendo y lo que viene en el próximo sprint.',
    portalSaasTitle: 'En SaaS en Alquiler',
    portalSaasSub: 'Dashboard en tiempo real, siempre operativo.',
    portalSaasText:
      'Acceso completo a métricas, usuarios, datos y configuraciones. Integraciones con tu ERP, CRM y sistemas existentes.',
    ctaKicker: '¿Listo para mapear tu operación?',
    cta: 'Empezar con un diagnóstico',
    tracks: [
      {
        tag: 'Necesito software construido para mi operación',
        title: 'Desarrollo a Medida',
        lead: 'Sin caja negra. Tablero abierto desde el día uno. Cuatro fases, sprints quincenales y acceso compartido al tablero, repo y demos. Si quieres ver dónde estamos un martes a las 3 p.m., entras al portal y lo ves.',
        phases: [
          {
            n: '01',
            icon: 'compass',
            title: 'Discovery',
            body: 'Dos semanas para entender el problema, el equipo y los datos. Salida: alcance cerrado, cronograma y presupuesto.',
          },
          {
            n: '02',
            icon: 'cpu',
            title: 'Design / Build',
            body: 'Sprints quincenales con demo al cierre. Tu equipo aprueba entregables y prioriza backlog.',
          },
          {
            n: '03',
            icon: 'layers',
            title: 'Launch',
            body: 'Despliegue a producción, pruebas finales, capacitación y handover formal de credenciales y documentación.',
          },
          {
            n: '04',
            icon: 'shield',
            title: 'Operate',
            body: 'Retainer u órdenes específicas. Monitoreo, evolución continua y soporte para que el sistema no se quede atrás.',
          },
        ],
      },
      {
        tag: 'Necesito una solución lista que funcione hoy',
        title: 'SaaS en Alquiler',
        lead: 'Implementación rápida, soporte garantizado, escala sin límites.',
        phases: [
          {
            n: '01',
            icon: 'calendar',
            title: 'Onboarding',
            body: 'Una o dos semanas. Configuramos tu cuenta, roles e integraciones básicas. Tu equipo está listo.',
          },
          {
            n: '02',
            icon: 'users',
            title: 'Capacitación',
            body: 'Entrenamos a tu equipo. Documentación, videos y soporte en vivo.',
          },
          {
            n: '03',
            icon: 'bell',
            title: 'Soporte Técnico',
            body: 'Disponibilidad según tu plan (8×5, 12×6 o 24×7). SLA explícito, sin sorpresas.',
          },
          {
            n: '04',
            icon: 'chart',
            title: 'Mejoras Evolutivas',
            body: 'Contrata retainer de horas bajo demanda. Features nuevas, integraciones, consultoría técnica.',
          },
        ],
      },
    ],
    portalCustom: [
      'Tablero del proyecto (GitHub Projects) en lectura para tus stakeholders.',
      'Repositorio con acceso al código en tiempo real, no al cierre del proyecto.',
      'Canal Slack dedicado con todo el equipo asignado.',
      'Demos quincenales viernes 15:00 COT (30 minutos en vivo).',
      'Notas de sprint, qué salió, qué viene, decisiones.',
      'Cero caja negra: preguntas resueltas al toque.',
    ],
    portalSaas: [
      'Dashboard con datos en tiempo real.',
      'Disponibilidad garantizada con SLA explícito.',
      'Soporte técnico directo según tu plan.',
      'Integraciones, conectamos con lo que ya usas.',
      'Exporta tus datos en cualquier momento, sin lock-in.',
    ],
  },

  manifesto: {
    markLine: '',
    quoteA: 'No vendemos tecnología.',
    quoteBPre: 'Vendemos ',
    quoteEm: 'operaciones',
    quoteBPost: ' que funcionan',
    quoteEnd: 'sin que tengas que pensar en ellas.',
    attribution: 'Lúmina W · desde el día uno',
  },

  whyus: {
    eyebrow: 'Por qué Lúmina W',
    heading: 'El software que construimos no solo funciona hoy.',
    lead: 'Cuatro decisiones técnicas que sostenemos en cada proyecto. Sin matices, sin excepciones.',
    ghost: 'Nosotros',
    featuredLabel: 'Diferenciador principal',
    teamEyebrow: 'Quién está detrás',
    teamTitle: 'Personas reales, no un logo.',
    opensNewTab: ' (abre en una pestaña nueva)',
    reasons: [
      {
        n: '01',
        icon: 'shield',
        title: 'Seguridad desde la arquitectura.',
        description:
          'Aplicamos OWASP desde la primera línea de código. Implementamos autenticación por roles, cifrado en tránsito y en reposo, y auditoría de accesos antes de salir a producción. No como un checklist final, sino como parte del diseño inicial.',
        featured: false,
      },
      {
        n: '02',
        icon: 'cpu',
        title: 'IA aplicada, no decorativa.',
        description:
          "Usamos modelos de predicción para anticipar problemas y proyectar costos antes de que ocurran. No un chatbot. No un botón de 'Generar con IA'. Automatización real en el flujo de trabajo de quien opera el sistema.",
        featured: false,
      },
      {
        n: '03',
        icon: 'layers',
        title: 'Código que no te cobra por crecer.',
        description:
          'Cada proyecto incluye documentación técnica entregada al cierre, cobertura de pruebas en módulos críticos y arquitectura modular que permite agregar funcionalidades sin reescribir lo que ya funciona.',
        featured: false,
      },
      {
        n: '04',
        icon: 'compass',
        title: 'Un equipo, todo el sistema.',
        description:
          'No tercerizamos ni el diseño ni la seguridad ni el despliegue. El mismo equipo que diseña la interfaz define la arquitectura del backend y configura el entorno de producción. Sin teléfono descompuesto entre un diseñador externo, un dev y un DevOps freelance.',
        featured: true,
      },
    ],
    team: [
      {
        name: 'Valentina Ramírez',
        initials: 'VR',
        handle: '@wavival',
        role: 'Founder & Full Stack Developer',
        bio: 'Fundadora de Lúmina W y desarrolladora full stack. Construye software a medida y productos SaaS desde Medellín, incluyendo TerraCore, sistema de gestión agroindustrial en producción desde 2026.',
        photo: '/images/profile.webp',
        socials: [
          { icon: 'globe', label: 'Portfolio', href: 'https://wavival.dev' },
          {
            icon: 'linkedin',
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/wavival',
          },
          {
            icon: 'instagram',
            label: 'Instagram',
            href: 'https://instagram.com/wavival',
          },
        ],
      },
    ],
  },

  terracore: {
    eyebrow: 'Producto propio',
    heading: 'Nuestros productos',
    lead: 'Construimos SaaS B2B con los mismos estándares del desarrollo a medida. Empezamos por el campo, pero el roadmap no se detiene ahí.',
    ghost: 'Producto',
    tagStar: 'Producto estrella',
    tagLive: 'Preventa activa',
    name: 'TerraCore',
    productLead:
      'Controla producción, costos y animales en un solo lugar. Deja de depender de Excel y empieza a tomar decisiones con datos reales.',
    modulesHead: 'Módulos MVP',
    cta: 'Quiero probar TerraCore',
    ctaAll: 'Ver todos los productos',
    note: 'Estamos validando con los primeros clientes. Cupos limitados con condiciones especiales.',
    dashTagline: 'Campo Inteligente',
    dashYear: '2026',
    dashKpis: [
      { label: 'Módulos', val: '6', trend: 'listos en MVP' },
      { label: 'Tu información', val: '100%', trend: 'privada' },
      { label: 'Siempre accesible', val: '24/7', trend: 'multi-dispositivo' },
    ],
    dashFeatsHead: 'Características Principales',
    dashFeatsCount: '06 / 06',
    proof:
      'Construimos TerraCore desde cero: offline-first, multiusuario y multirol, con dashboards en tiempo real y trazabilidad agroindustrial. Ese es el estándar con el que trabajamos.',
    modules: [
      'Control de animales.',
      'Producción en tiempo real.',
      'Control de insumos.',
      'Dashboard claro y centralizado.',
      'Salud animal.',
      'Control básico de costos.',
    ],
    dashFeatures: [
      { icon: 'wifi-off', title: 'Funciona offline', tag: 'sync auto' },
      { icon: 'calendar', title: 'Primera semana', tag: 'sin consultores' },
      { icon: 'users', title: 'Varios roles', tag: 'admin · ops · colab' },
      { icon: 'chart', title: 'Datos reales', tag: 'costo por kg' },
      { icon: 'bell', title: 'Nada se te pasa', tag: 'alertas activas' },
      { icon: 'globe', title: 'En español', tag: 'para el campo' },
    ],
    shots: [
      {
        base: 'dashboard-2',
        cap: 'Dashboard claro y centralizado',
        alt: 'Captura del dashboard centralizado de TerraCore con métricas de la operación',
      },
      {
        base: 'produccion-1',
        cap: 'Producción en tiempo real',
        alt: 'Pantalla de producción en tiempo real en TerraCore',
      },
      {
        base: 'salud-animal-3',
        cap: 'Salud animal',
        alt: 'Módulo de salud animal en TerraCore',
      },
    ],
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    heading: 'Todo lo que necesitas saber antes de escribirnos.',
    lead: 'Resolvemos dudas comunes sobre desarrollo de software a medida, SaaS B2B y TerraCore para empresas que quieren dejar de operar en Excel y ganar productividad.',
    ghost: 'FAQ',
    ctaKicker: '¿No encontraste lo que buscabas?',
    cta: 'Escríbenos directamente',
    items: [
      {
        q: '¿Cuánto cuesta desarrollar un software a medida?',
        a: 'Depende del alcance y la complejidad del proyecto. Trabajamos con presupuestos desde proyectos pequeños hasta plataformas completas. Lo primero es una conversación sin costo donde entendemos tu necesidad y te damos una estimación real.',
      },
      {
        q: '¿Cuánto tiempo toma desarrollar un proyecto?',
        a: 'Un MVP básico puede estar listo en 6 a 12 semanas. Proyectos más complejos toman más tiempo. Siempre definimos un roadmap claro antes de empezar para que sepas exactamente qué esperar y cuándo.',
      },
      {
        q: '¿Trabajan con empresas pequeñas o solo con grandes?',
        a: 'Trabajamos con empresas de todos los tamaños. Lo que importa no es el tamaño sino que tengas un problema real que el software pueda resolver. Si tienes ese problema, podemos construir la solución.',
      },
      {
        q: '¿Qué pasa si el proyecto cambia durante el desarrollo?',
        a: 'Es normal que los proyectos evolucionen. Trabajamos con metodología ágil:  iteramos en ciclos cortos para adaptarnos a los cambios sin que eso descarrile el proyecto ni el presupuesto.',
      },
      {
        q: '¿Qué es TerraCore y para quién es?',
        a: 'TerraCore es nuestro producto SaaS propio para el sector agroindustrial. Está diseñado para medianas empresas que gestionan inventario, usuarios y operaciones en Excel y necesitan una solución más robusta. Actualmente estamos en preventa con condiciones especiales para los primeros clientes.',
      },
      {
        q: '¿El software que construyen es seguro?',
        a: 'Sí. La seguridad no es una capa que añadimos al final, está integrada desde la arquitectura. Aplicamos principios OWASP, desarrollo seguro y buenas prácticas desde la primera línea de código.',
      },
      {
        q: '¿Por qué no contratar un freelancer?',
        a: 'Un desarrollador solo puede escribir código, pero no puede diseñar la arquitectura, hacer el UX, configurar el servidor, documentar el sistema y darte soporte en producción al mismo tiempo. Nosotros somos un equipo completo desde el primer día, sin que tengas que coordinar cinco personas distintas.',
      },
      {
        q: '¿Por qué no usar un ERP genérico como SAP o Zoho?',
        a: 'Los ERPs genéricos están construidos para todas las industrias, lo que significa que no están construidos para la tuya. Pagas por módulos que no usas, adaptas tu operación al software en vez de al revés, y dependes de roadmaps que no controlas. Nosotros construimos alrededor de tu operación real.',
      },
      {
        q: '¿En qué se diferencia Lúmina W de otras empresas de software?',
        a: 'Las agencias grandes te asignan un gerente de cuenta que nunca toca el código y un equipo rotativo que cambia cada sprint. Con Lúmina W hablas directamente con quien construye el sistema, sin intermediarios y sin teléfono descompuesto.',
      },
    ],
  },

  contact: {
    ghost: 'Contacto',
    eyebrow: 'Contacto',
    heading: '¿Tienes un proyecto en mente?',
    lead: 'No necesitas tenerlo todo claro todavía. Cuéntanos dónde estás y hacia dónde quieres ir.',
    direct: '¿Prefieres algo más directo?',
    whatsappLabel: 'WhatsApp',
    whatsappValue: '+57 310 828 3088',
    whatsappNote: 'Respuesta en menos de 2 horas en horario hábil.',
    opensNewTab: ' (abre en una pestaña nueva)',
    emailLabel: 'Email',
    emailValue: 'contact@luminaw.co',
    emailNote: 'Para briefs largos o adjuntos.',
    nextTitle: '¿Qué pasa después de enviar?',
    steps: [
      'Recibes confirmación inmediata por correo.',
      'Te contactamos en menos de 24 horas hábiles.',
      'Agendamos una llamada de 30 minutos sin costo.',
      'Si hay fit, te enviamos una propuesta en 48 horas.',
    ],
    nextFoot: 'Sin compromiso. Sin presión de venta.',
    fieldName: 'Nombre',
    fieldNamePh: 'Tu nombre',
    fieldCompany: 'Empresa',
    fieldCompanyPh: 'Tu empresa',
    fieldEmail: 'Correo electrónico',
    fieldEmailPh: 'tu@empresa.com',
    fieldPhone: 'Teléfono',
    fieldPhonePh: '+57 300 000 0000',
    needLegend: '¿Qué describe mejor lo que buscas?',
    needOptions: [
      'Automatizar un proceso manual',
      'Construir un sistema interno (inventario, CRM, etc.)',
      'Desarrollar una aplicación web o plataforma',
      'Presencia digital (landing, sitio web)',
      'No sé exactamente, necesito orientación',
    ],
    stageLegend: '¿En qué etapa estás?',
    stageOptions: [
      'Explorando opciones, sin urgencia',
      'Evaluando proveedores activamente',
      'Listo para empezar pronto',
    ],
    fieldMessage: 'Cuéntanos brevemente el problema',
    fieldMessagePh: 'El contexto que quieras compartir.',
    submit: 'Enviar mensaje',
    submitSending: 'Enviando...',
    submitError: 'No se pudo enviar el mensaje. Intenta de nuevo.',
    assurances: [
      'Respondemos en menos de 24 horas hábiles.',
      'Primera conversación sin costo ni compromiso.',
      'Si no hay fit, te lo decimos directo.',
    ],
    successTitle: '¡Mensaje enviado!',
    successText: 'Te contactamos pronto.',
  },

  footer: {
    brandAria: 'Lúmina W, Inicio',
    opensNewTab: ' (abre en una pestaña nueva)',
    legalName: 'Lúmina W S.A.S',
    copy: 'Construimos el software exacto que necesitas: desde automatizaciones puntuales hasta plataformas completas a medida.',
    navTitle: 'Navegación',
    nav: [
      { href: '/#fork', label: 'Empieza' },
      { href: '/#problem', label: 'Problema' },
      { href: '/#services', label: 'Servicios' },
      { href: '/#process', label: 'Proceso' },
      { href: '/#us', label: 'Nosotros' },
      { href: '/#faq', label: 'FAQ' },
      { href: '/#contact', label: 'Contacto' },
    ],
    productTitle: 'Producto',
    product: [
      { href: '/productos', label: 'Productos', external: false },
      { href: '/#terracore', label: 'TerraCore', external: false },
      { href: 'https://blog.luminaw.co/', label: 'Blog', external: true },
    ],
    legalTitle: 'Legal',
    legal: [
      { href: '/terms', label: 'Términos y condiciones' },
      { href: '/privacy', label: 'Política de privacidad' },
      { href: '/cookies', label: 'Política de cookies' },
    ],
  },

  productsPage: {
    metaTitle: 'Productos · Lúmina W',
    metaDescription:
      'TerraCore y Root: los productos SaaS B2B de Lúmina W. Construidos con los mismos estándares del desarrollo a medida.',
    eyebrow: 'Productos SaaS B2B',
    heading: 'Soluciones listas para tu industria.',
    lead: 'Construidos con los mismos estándares del desarrollo a medida. Pagas por lo que usas, escalas cuando lo necesitas.',
    featsHeadDefault: 'Funcionalidades',
    cards: [
      {
        status: 'live',
        statusLabel: 'Preventa activa · Cupos limitados',
        name: 'TerraCore',
        tagline: 'Controla producción, costos y animales en un solo lugar.',
        description:
          'Deja de depender de Excel y empieza a tomar decisiones con datos reales. Diseñado para medianas empresas del sector agropecuario y agroindustrial.',
        featsHead: 'Módulos MVP',
        feats: [
          'Control de animales',
          'Producción en tiempo real',
          'Control de insumos',
          'Dashboard claro y centralizado',
          'Salud animal',
          'Control básico de costos',
        ],
        chips: [
          'Funciona offline · sync automático',
          'Multi-usuario y multi-rol',
          'En español, para el campo',
          'Alertas activas',
        ],
        ctaLabel: 'Quiero probar TerraCore',
        ctaHref: 'https://terracoreapp.co',
        ctaSecondaryLabel: '',
        ctaSecondaryHref: '',
        note: 'Estamos validando con los primeros clientes. Cupos limitados con condiciones especiales.',
      },
      {
        status: 'soon',
        statusLabel: 'Próximamente',
        name: 'Root',
        tagline: 'Come con confianza.',
        description:
          'App de nutrición personalizada para personas con enfermedad celíaca, diabetes o intolerancia a la lactosa en Latinoamérica. Escanea cualquier etiqueta y obtén un veredicto inmediato según tu perfil.',
        featsHead: 'Funcionalidades',
        feats: [
          'Escaneo de etiquetas con veredicto al instante',
          'Diario alimentario que funciona offline',
          'Recetas que sí puedes comer',
          'Seguimiento e insights semanales',
        ],
        chips: [],
        ctaLabel: 'Saber más sobre Root',
        ctaHref: 'https://wavival.dev/root',
        ctaSecondaryLabel: '',
        ctaSecondaryHref: '',
        note: 'En desarrollo activo. Registra tu interés para ser de los primeros en probarlo.',
      },
    ],
    closingTitle: '¿Ninguno encaja con lo que necesitas?',
    closingText: 'Construimos software a medida para tu operación específica.',
    closingCta: 'Hablar con el equipo',
    closingHref: '/#contact',
  },

  cookies: {
    regionAria: 'Aviso de cookies',
    textPre: 'Usamos cookies para mejorar tu experiencia.',
    moreLink: 'Más información',
    accept: 'Aceptar',
    reject: 'Solo esenciales',
  },

  notFound: {
    heading: 'Esta página no existe.',
    text: 'O la movimos, o nunca estuvo aquí. En cualquier caso, te podemos llevar de vuelta.',
    back: 'Volver al inicio',
  },

  layout: {
    skipToContent: 'Saltar al contenido',
    whatsappAria: 'Contactar por WhatsApp (abre en una pestaña nueva)',
    langSwitchAria: 'Cambiar idioma',
    langSwitchLabel: 'EN',
    langSwitchTo: 'View in English',
  },
} as const;

export type Dictionary = typeof es;
