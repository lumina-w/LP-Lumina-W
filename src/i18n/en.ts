// English (en) dictionary.
// Mirror every key in es.ts (typed as Dictionary enforces the shape).
// No dashes as connectors in user-facing copy (see CLAUDE.md). Proper nouns
// (TerraCore, Lúmina W), hrefs, icons and image bases stay untranslated.
import type { Dictionary } from './es';

export const en: Dictionary = {
  meta: {
    title: 'Custom software development in Colombia | Lúmina W',
    description:
      'Custom software, automation and digital systems for companies that need to operate without manual processes. From Medellín for all of Colombia.',
    ogImageAlt: 'Lúmina W — Custom software development in Colombia',
    notFoundTitle: '404 | Page not found',
  },

  nav: {
    brandAria: 'Lúmina W, Home',
    primaryAria: 'Main',
    services: 'Services',
    process: 'Process',
    product: 'Product',
    us: 'About',
    contact: 'Contact',
    cta: 'Book a call',
    openMenu: 'Open menu',
    opensNewTab: ' (opens in a new tab)',
    productMenu: {
      allHref: '/productos',
      allLabel: 'View all products',
      items: [
        {
          href: 'https://terracoreapp.co',
          label: 'TerraCore',
          external: true,
          status: 'live',
          badge: 'Presale open',
        },
        {
          href: 'https://wavival.dev/root',
          label: 'Root',
          external: true,
          status: 'soon',
          badge: 'Coming soon',
        },
      ],
    },
  },

  hero: {
    eyebrow: 'Custom software · B2B SaaS · Medellín, Colombia',
    titleA: 'Your operation has problems',
    titleEm: "can't solve",
    titlePre: 'that Excel ',
    titlePost: '.',
    lead: 'We build the exact software you need: from targeted automation to complete custom platforms.',
    ctaPrimary: 'Tell us your problem',
    ctaSecondary: 'See TerraCore',
    capsAria: 'What we do',
    caps: [
      {
        title: 'We automate processes',
        desc: 'Less manual work, more operation that runs on its own.',
      },
      {
        title: 'Custom software',
        desc: 'Systems that adapt to your business, not the other way around.',
      },
      {
        title: 'Applied AI',
        desc: 'Chatbots and integrations that work with your data.',
      },
    ],
    termAria:
      'Results of a system in production: invoicing process automated, real time inventory operational, manual weekly reports eliminated, zero data entry hours per week. System in production with no manual intervention.',
    termRows: [
      { label: 'Invoicing process', val: 'automated', num: false },
      { label: 'Real time inventory', val: 'operational', num: false },
      { label: 'Manual weekly reports', val: 'eliminated', num: false },
      { label: 'Data entry hours / wk', val: '0 hrs', num: true },
    ],
    termFoot: 'System in production · no manual intervention',
  },

  fork: {
    eyebrow: 'Where to start?',
    heading: 'What best describes your situation?',
    lead: 'Two paths, one engineering standard. Pick yours and go straight to the right proposal.',
    ghost: 'Start',
    asidePre: 'None fits? Tell us your case and we will guide you.',
    asideLink: 'Talk to the team',
    paths: [
      {
        tag: 'Own product · SaaS ready',
        title: 'I run an agricultural or agro-industrial operation',
        line: 'TerraCore already exists. Use it today.',
        cta: 'Discover TerraCore',
        href: '/#terracore',
        icon: 'layers',
        inverse: false,
      },
      {
        tag: 'Custom development',
        title: 'I have a process I want to digitize or automate',
        line: 'Site, internal system or custom platform. We build it with you.',
        cta: 'Talk to the team',
        href: '/#contact',
        icon: 'custom',
        inverse: true,
      },
    ],
  },

  problem: {
    eyebrow: 'The problem',
    heading: 'Your company grows. Your tools do not.',
    lead: 'Every day you operate with manual processes and generic software that does not understand your industry, you are losing:',
    ghost: 'Problem',
    stakesKicker: 'It is not a discipline problem.',
    stakesLinePre: 'It is an ',
    stakesLineEm: 'infrastructure',
    stakesLinePost: ' problem.',
    items: [
      {
        n: '01',
        icon: 'clock',
        title: 'Time you do not get back',
        description:
          'Manual processes that eat hours you could invest in growing your business.',
      },
      {
        n: '02',
        icon: 'chart',
        title: 'Data you cannot read',
        description:
          'Information scattered across spreadsheets that nobody understands and nobody keeps updated.',
      },
      {
        n: '03',
        icon: 'eye-off',
        title: 'Blind decisions',
        description:
          'Without real time visibility, every decision is a bet. Not a strategy.',
      },
      {
        n: '04',
        icon: 'coin',
        title: 'Money that leaves without you seeing it',
        description:
          'Hidden inefficiencies that pile up month after month with nobody measuring or fixing them.',
      },
    ],
  },

  agitation: {
    headingA: 'Badly built software',
    headingB: 'costs more than having no software.',
    tail: 'Most companies find out too late.',
    points: [
      'A system that fails in production stops your operation.',
      'One that does not scale forces you to rebuild it in two years.',
      'One without security exposes your company and customer data.',
    ],
  },

  marquee: [
    'Custom software',
    'B2B SaaS products',
    'Scalable architecture',
    'Built-in security',
    'AI applied to processes',
    'Clean code that scales',
    'Support and operation',
    'Enterprise quality',
  ],

  solution: {
    eyebrow: 'The solution',
    heading: 'Lúmina W builds software that lasts.',
    leadA:
      'We do not sell technology. We sell operations that work without you having to think about them.',
    leadBPre: 'Choose your path:',
    leadBStrongA: 'custom development',
    leadBMid: ' or ',
    leadBStrongB: 'specialized SaaS',
    leadBPost: '.',
    ghost: 'Services',
    flag: 'Main service',
    cta: 'I want a free consultation',
    services: [
      {
        tag: 'Custom development',
        title: 'Software designed for your operation',
        description:
          'We do not sell templates or generic solutions. We analyze your process, your industry and your team, and build exactly what you need, with the right architecture from day one.',
        features: [
          'Scalable architecture from the start.',
          'Security built in, not added later.',
          'Clean, documented code.',
          'Continuous support and evolution.',
        ],
        icon: 'custom',
        inverse: false,
        primary: true,
        ctaLabel: 'I want a free consultation',
        ctaHref: '/#contact',
        ctaExternal: false,
      },
      {
        tag: 'B2B SaaS products',
        title: 'Ready solutions for your industry',
        description:
          'Products built to the same standards as custom development. You pay for what you use, scale when you need to, with no upfront infrastructure investment.',
        features: [
          'Fast implementation.',
          'Automatic updates.',
          'Multi-company from the start.',
          'Pay per use, not per project.',
        ],
        icon: 'saas',
        inverse: true,
        primary: false,
        ctaLabel: 'View products',
        ctaHref: '/productos',
        ctaExternal: false,
      },
    ],
  },

  process: {
    eyebrow: 'How we work',
    heading: 'It depends on the path you take.',
    lead: 'Two models, two cadences, two different commitments. Choose the one that fits your operation.',
    ghost: 'Process',
    hook: 'No black box. You know what is being built, when it will be ready and what comes next. From day one.',
    disclosureOpenLabel: 'See how it works',
    disclosureCloseLabel: 'Hide steps',
    portalLabel: 'How you see progress',
    portalHeading: 'Permanent visibility, on both paths.',
    portalText:
      'What you see depends on the model you hire: in Custom Development you see the build process; in SaaS Rental you see your platform operating.',
    portalDisclosureOpenLabel: 'See what each model includes',
    portalDisclosureCloseLabel: 'Hide detail',
    portalCustomTitle: 'In Custom Development',
    portalCustomSub: 'Your project, live.',
    portalCustomText:
      'Every Project includes access to a shared space where you and your team see real progress: what is done, what is being built and what comes in the next sprint.',
    portalSaasTitle: 'In SaaS Rental',
    portalSaasSub: 'Real time dashboard, always operational.',
    portalSaasText:
      'Full access to metrics, users, data and settings. Integrations with your ERP, CRM and existing systems.',
    ctaKicker: 'Ready to map your operation?',
    cta: 'Start with an assessment',
    tracks: [
      {
        tag: 'I need software built for my operation',
        title: 'Custom Development',
        lead: 'No black box. Open board from day one. Four phases, biweekly sprints and shared access to the board, repo and demos. If you want to see where we are on a Tuesday at 3 p.m., you log into the portal and see it.',
        phases: [
          {
            n: '01',
            icon: 'compass',
            title: 'Discovery',
            body: 'Two weeks to understand the problem, the team and the data. Output: locked scope, timeline and budget.',
          },
          {
            n: '02',
            icon: 'cpu',
            title: 'Design / Build',
            body: 'Biweekly sprints with a demo at the close. Your team approves deliverables and prioritizes the backlog.',
          },
          {
            n: '03',
            icon: 'layers',
            title: 'Launch',
            body: 'Production deployment, final testing, training and formal handover of credentials and documentation.',
          },
          {
            n: '04',
            icon: 'shield',
            title: 'Operate',
            body: 'Retainer or specific orders. Monitoring, continuous evolution and support so the system does not fall behind.',
          },
        ],
      },
      {
        tag: 'I need a ready solution that works today',
        title: 'SaaS Rental',
        lead: 'Fast implementation, guaranteed support, scales without limits.',
        phases: [
          {
            n: '01',
            icon: 'calendar',
            title: 'Onboarding',
            body: 'One or two weeks. We set up your account, roles and basic integrations. Your team is ready.',
          },
          {
            n: '02',
            icon: 'users',
            title: 'Training',
            body: 'We train your team. Documentation, videos and live support.',
          },
          {
            n: '03',
            icon: 'bell',
            title: 'Technical Support',
            body: 'Availability based on your plan (8×5, 12×6 or 24×7). Explicit SLA, no surprises.',
          },
          {
            n: '04',
            icon: 'chart',
            title: 'Evolutionary Improvements',
            body: 'Hire an on-demand hours retainer. New features, integrations, technical consulting.',
          },
        ],
      },
    ],
    portalCustom: [
      'Project board (GitHub Projects) with read access for your stakeholders.',
      'Repository with real time code access, not at project close.',
      'Dedicated Slack channel with the whole assigned team.',
      'Biweekly demos Friday 15:00 COT (30 minutes live).',
      'Sprint notes: what shipped, what is next, decisions.',
      'Zero black box: questions answered right away.',
    ],
    portalSaas: [
      'Dashboard with real time data.',
      'Guaranteed availability with an explicit SLA.',
      'Direct technical support based on your plan.',
      'Integrations: we connect with what you already use.',
      'Export your data anytime, with no lock-in.',
    ],
  },

  manifesto: {
    markLine: '',
    quoteA: 'We do not sell technology.',
    quoteBPre: 'We sell ',
    quoteEm: 'operations',
    quoteBPost: ' that work',
    quoteEnd: 'without you having to think about them.',
    attribution: 'Lúmina W · from day one',
  },

  whyus: {
    eyebrow: 'Why Lúmina W',
    heading: 'The software we build does not just work today.',
    lead: 'Four technical decisions we hold to on every project. No nuance, no exceptions.',
    ghost: 'About',
    featuredLabel: 'Main differentiator',
    teamEyebrow: 'Who is behind it',
    teamTitle: 'Real people, not a logo.',
    opensNewTab: ' (opens in a new tab)',
    reasons: [
      {
        n: '01',
        icon: 'shield',
        title: 'Security from the architecture.',
        description:
          'We apply OWASP from the first line of code. We implement role-based authentication, encryption in transit and at rest, and access auditing before going to production. Not as a final checklist, but as part of the initial design.',
        featured: false,
      },
      {
        n: '02',
        icon: 'cpu',
        title: 'AI applied, not decorative.',
        description:
          "We use prediction models to anticipate problems and project costs before they happen. Not a chatbot. Not a 'Generate with AI' button. Real automation in the workflow of whoever operates the system.",
        featured: false,
      },
      {
        n: '03',
        icon: 'layers',
        title: 'Code that does not charge you to grow.',
        description:
          'Every project includes technical documentation delivered at close, test coverage on critical modules and a modular architecture that lets you add features without rewriting what already works.',
        featured: false,
      },
      {
        n: '04',
        icon: 'compass',
        title: 'One team, the whole system.',
        description:
          'We do not outsource design, security or deployment. The same team that designs the interface defines the backend architecture and configures the production environment. No broken telephone between an external designer, a dev and a freelance DevOps.',
        featured: true,
      },
    ],
    team: [
      {
        name: 'Valentina Ramírez',
        initials: 'VR',
        handle: '@wavival',
        role: 'Founder & Full Stack Developer',
        bio: 'Founder of Lúmina W and full stack developer. She builds custom software and SaaS products from Medellín, including TerraCore, an agro-industrial management system in production since 2026.',
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
    eyebrow: 'Own product',
    heading: 'Our products',
    lead: 'We build B2B SaaS to the same standards as custom development. We started with farming, but the roadmap does not stop there.',
    ghost: 'Product',
    tagStar: 'Flagship product',
    tagLive: 'Presale active',
    name: 'TerraCore',
    productLead:
      'Control production, costs and animals in one place. Stop depending on Excel and start making decisions with real data.',
    modulesHead: 'MVP modules',
    cta: 'I want to try TerraCore',
    ctaAll: 'View all products',
    note: 'We are validating with our first customers. Limited spots with special conditions.',
    dashTagline: 'Smart Farming',
    dashYear: '2026',
    dashKpis: [
      { label: 'Modules', val: '6', trend: 'ready in MVP' },
      { label: 'Your data', val: '100%', trend: 'private' },
      { label: 'Always available', val: '24/7', trend: 'multi-device' },
    ],
    dashFeatsHead: 'Key Features',
    dashFeatsCount: '06 / 06',
    proof:
      'We built TerraCore from scratch: offline-first, multi-user and multi-role, with real time dashboards and agro-industrial traceability. That is the standard we work to.',
    modules: [
      'Animal tracking.',
      'Real time production.',
      'Input control.',
      'Clear, centralized dashboard.',
      'Animal health.',
      'Basic cost control.',
    ],
    dashFeatures: [
      { icon: 'wifi-off', title: 'Works offline', tag: 'auto sync' },
      { icon: 'calendar', title: 'First week', tag: 'no consultants' },
      { icon: 'users', title: 'Multiple roles', tag: 'admin · ops · collab' },
      { icon: 'chart', title: 'Real data', tag: 'cost per kg' },
      { icon: 'bell', title: 'Nothing slips by', tag: 'active alerts' },
      { icon: 'globe', title: 'In Spanish', tag: 'for the field' },
    ],
    shots: [
      {
        base: 'dashboard-2',
        cap: 'Clear, centralized dashboard',
        alt: 'Screenshot of the TerraCore centralized dashboard with operation metrics',
      },
      {
        base: 'produccion-1',
        cap: 'Real time production',
        alt: 'Real time production screen in TerraCore',
      },
      {
        base: 'salud-animal-3',
        cap: 'Animal health',
        alt: 'Animal health module in TerraCore',
      },
    ],
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    heading: 'Everything you need to know before reaching out.',
    lead: 'We answer common questions about custom software development, B2B SaaS and TerraCore for companies that want to stop operating in Excel and gain productivity.',
    ghost: 'FAQ',
    ctaKicker: 'Did not find what you were looking for?',
    cta: 'Write to us directly',
    items: [
      {
        q: 'How much does it cost to build custom software?',
        a: 'It depends on the scope and complexity of the project. We work with budgets from small projects to complete platforms. The first step is a free conversation where we understand your need and give you a real estimate.',
      },
      {
        q: 'How long does it take to build a project?',
        a: 'A basic MVP can be ready in 6 to 12 weeks. More complex projects take longer. We always define a clear roadmap before starting so you know exactly what to expect and when.',
      },
      {
        q: 'Do you work with small companies or only large ones?',
        a: 'We work with companies of all sizes. What matters is not the size but that you have a real problem software can solve. If you have that problem, we can build the solution.',
      },
      {
        q: 'What happens if the project changes during development?',
        a: 'It is normal for projects to evolve. We work with an agile methodology: we iterate in short cycles to adapt to changes without derailing the project or the budget.',
      },
      {
        q: 'What is TerraCore and who is it for?',
        a: 'TerraCore is our own SaaS product for the agro-industrial sector. It is designed for mid-sized companies that manage inventory, users and operations in Excel and need a more robust solution. We are currently in presale with special conditions for our first customers.',
      },
      {
        q: 'Is the software you build secure?',
        a: 'Yes. Security is not a layer we add at the end, it is built in from the architecture. We apply OWASP principles, secure development and best practices from the first line of code.',
      },
      {
        q: 'Why not hire a freelancer?',
        a: 'A single developer can write code, but cannot design the architecture, do the UX, configure the server, document the system and support it in production all at once. We are a complete team from day one, without you having to coordinate five different people.',
      },
      {
        q: 'Why not use a generic ERP like SAP or Zoho?',
        a: 'Generic ERPs are built for every industry, which means they are not built for yours. You pay for modules you do not use, adapt your operation to the software instead of the other way around, and depend on roadmaps you do not control. We build around your real operation.',
      },
      {
        q: 'How is Lúmina W different from other software companies?',
        a: 'Large agencies assign you an account manager who never touches the code and a rotating team that changes every sprint. With Lúmina W you talk directly with whoever builds the system, with no middlemen and no broken telephone.',
      },
    ],
  },

  contact: {
    ghost: 'Contact',
    eyebrow: 'Contact',
    heading: 'Have a project in mind?',
    lead: 'You do not need to have it all figured out yet. Tell us where you are and where you want to go.',
    direct: 'Prefer something more direct?',
    whatsappLabel: 'WhatsApp',
    whatsappValue: '+57 310 828 3088',
    whatsappNote: 'Reply in under 2 hours during business hours.',
    opensNewTab: ' (opens in a new tab)',
    emailLabel: 'Email',
    emailValue: 'contact@luminaw.co',
    emailNote: 'For long briefs or attachments.',
    nextTitle: 'What happens after you send?',
    steps: [
      'You get an immediate confirmation by email.',
      'We contact you within 24 business hours.',
      'We schedule a free 30 minute call.',
      'If there is a fit, we send you a proposal within 48 hours.',
    ],
    nextFoot: 'No commitment. No sales pressure.',
    fieldName: 'Name',
    fieldNamePh: 'Your name',
    fieldCompany: 'Company',
    fieldCompanyPh: 'Your company',
    fieldEmail: 'Email address',
    fieldEmailPh: 'you@company.com',
    fieldPhone: 'Phone',
    fieldPhonePh: '+57 300 000 0000',
    needLegend: 'What best describes what you are looking for?',
    needOptions: [
      'Automate a manual process',
      'Build an internal system (inventory, CRM, etc.)',
      'Develop a web app or platform',
      'Digital presence (landing, website)',
      'I am not sure exactly, I need guidance',
    ],
    stageLegend: 'What stage are you at?',
    stageOptions: [
      'Exploring options, no urgency',
      'Actively evaluating vendors',
      'Ready to start soon',
    ],
    fieldMessage: 'Tell us briefly about the problem',
    fieldMessagePh: 'Any context you want to share.',
    submit: 'Send message',
    submitSending: 'Sending...',
    submitError: 'The message could not be sent. Please try again.',
    assurances: [
      'We reply within 24 business hours.',
      'First conversation free, no commitment.',
      'If there is no fit, we tell you straight.',
    ],
    successTitle: 'Message sent!',
    successText: 'We will contact you soon.',
  },

  footer: {
    brandAria: 'Lúmina W, Home',
    opensNewTab: ' (opens in a new tab)',
    legalName: 'Lúmina W S.A.S',
    copy: 'We build the exact software you need: from targeted automation to complete custom platforms.',
    navTitle: 'Navigation',
    nav: [
      { href: '/#fork', label: 'Start' },
      { href: '/#problem', label: 'Problem' },
      { href: '/#services', label: 'Services' },
      { href: '/#process', label: 'Process' },
      { href: '/#us', label: 'About' },
      { href: '/#faq', label: 'FAQ' },
      { href: '/#contact', label: 'Contact' },
    ],
    productTitle: 'Product',
    product: [
      { href: '/productos', label: 'Products', external: false },
      { href: '/#terracore', label: 'TerraCore', external: false },
      { href: 'https://blog.luminaw.co/', label: 'Blog', external: true },
    ],
    legalTitle: 'Legal',
    legal: [
      { href: '/terms', label: 'Terms and conditions' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/cookies', label: 'Cookie policy' },
    ],
  },

  productsPage: {
    metaTitle: 'Products · Lúmina W',
    metaDescription:
      'TerraCore and Root: the B2B SaaS products from Lúmina W. Built to the same standards as our custom software.',
    eyebrow: 'B2B SaaS products',
    heading: 'Solutions ready for your industry.',
    lead: 'Built to the same standards as our custom software. Pay for what you use, scale when you need to.',
    featsHeadDefault: 'Features',
    cards: [
      {
        status: 'live',
        statusLabel: 'Presale open · Limited spots',
        name: 'TerraCore',
        tagline: 'Control production, costs and livestock in one place.',
        description:
          'Stop relying on Excel and start making decisions with real data. Built for mid-sized agribusiness and livestock operations.',
        featsHead: 'MVP modules',
        feats: [
          'Livestock control',
          'Real-time production',
          'Input control',
          'Clear, centralized dashboard',
          'Animal health',
          'Basic cost control',
        ],
        chips: [
          'Works offline · automatic sync',
          'Multi-user and multi-role',
          'Built for the field',
          'Active alerts',
        ],
        ctaLabel: 'I want to try TerraCore',
        ctaHref: 'https://terracoreapp.co',
        ctaSecondaryLabel: '',
        ctaSecondaryHref: '',
        note: 'We are validating with our first clients. Limited spots with special conditions.',
      },
      {
        status: 'soon',
        statusLabel: 'Coming soon',
        name: 'Root',
        tagline: 'Eat with confidence.',
        description:
          'Personalized nutrition app for people with celiac disease, diabetes or lactose intolerance in Latin America. Scan any label and get an instant verdict based on your profile.',
        featsHead: 'Features',
        feats: [
          'Label scanning with an instant verdict',
          'Food diary that works offline',
          'Recipes you can actually eat',
          'Weekly tracking and insights',
        ],
        chips: [],
        ctaLabel: 'Learn more about Root',
        ctaHref: 'https://wavival.dev/root',
        ctaSecondaryLabel: '',
        ctaSecondaryHref: '',
        note: 'In active development. Register your interest to be among the first to try it.',
      },
    ],
    closingTitle: 'None of these fit what you need?',
    closingText: 'We build custom software for your specific operation.',
    closingCta: 'Talk to the team',
    closingHref: '/#contact',
  },

  cookies: {
    regionAria: 'Cookie notice',
    textPre: 'We use cookies to improve your experience.',
    moreLink: 'Learn more',
    accept: 'Accept',
    reject: 'Essential only',
  },

  notFound: {
    heading: 'This page does not exist.',
    text: 'Either we moved it, or it was never here. Either way, we can take you back.',
    back: 'Back to home',
  },

  layout: {
    skipToContent: 'Skip to content',
    whatsappAria: 'Contact us on WhatsApp (opens in a new tab)',
    langSwitchAria: 'Change language',
    langSwitchLabel: 'ES',
    langSwitchTo: 'Ver en español',
  },
};
