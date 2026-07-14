import type { Lang } from "./i18n";

export type FilterKey = "brand" | "screens" | "graphic" | "social" | "dev";
export type ProjectKind = "design" | "dev";

type Localized = {
  title: string;
  category: string;
  place: string;
  description: string;
};

export type Project = {
  slug: string;
  year: string;
  kind: ProjectKind;
  cover?: string;
  gallery?: string[];
  stack?: string[];
  links?: { live?: string; github?: string };
  filters: FilterKey[];
  ru: Localized;
  en: Localized;
};

const GH = "https://github.com/tema64378";

export const projects: Project[] = [
  /* ---------------- flagship brand case ---------------- */
  {
    slug: "dom-molodezhi",
    year: "2025",
    kind: "design",
    cover: "/works/dom-cover.webp",
    gallery: [
      "/works/dom-4.webp",
      "/works/dom-3.webp",
      "/works/dom-5.webp",
      "/works/dom-6.webp",
      "/works/dom-7.webp",
      "/works/dom-2.webp",
      "/works/dom-1.webp",
      "/works/dom-8.webp",
      "/works/dom-9.webp",
      "/works/dom-10.webp",
      "/works/dom-11.webp",
    ],
    filters: ["brand"],
    ru: {
      title: "Молодость в Великом",
      category: "Брендбук · Дом молодёжи",
      place: "Молодёжная политика Новгородской области",
      description:
        "Полноценный бренд Дома молодёжи: слоган «Явно ярко», живая коралловая градиентная система, составные текстуры, паттерн и логотип. От палитры и типографики (Helvetica Neue) до применений — мерч, презентации «Итоги года» и наружная реклама.",
    },
    en: {
      title: "Molodost v Velikom",
      category: "Brandbook · Youth House",
      place: "Novgorod Region youth policy",
      description:
        "A full brand for the regional Youth House: the “Явно ярко” slogan, a living coral gradient system, composite textures, pattern and logo. From palette and typography (Helvetica Neue) to applications — merch, “Year in review” decks and outdoor.",
    },
  },
  {
    slug: "den-molodezhi",
    year: "2026",
    kind: "design",
    cover: "/works/den-molodezhi-cover.webp",
    gallery: [
      "/works/den-molodezhi-1.webp",
      "/works/den-molodezhi-4.webp",
      "/works/den-molodezhi-2.webp",
      "/works/den-molodezhi-3.webp",
      "/works/den-molodezhi-5.webp",
      "/works/den-molodezhi-6.webp",
    ],
    filters: ["brand", "graphic"],
    ru: {
      title: "День молодёжи 2026",
      category: "Айдентика ивента",
      place: "Великий Новгород",
      description:
        "Визуальный язык городского празднования: огненный маскот-конь «Гори ярко», градиентная система от амбры к пурпуру и серия афиш под все форматы события — от турнира по флорболу до «Ярмарки добра».",
    },
    en: {
      title: "Youth Day 2026",
      category: "Event identity",
      place: "Veliky Novgorod",
      description:
        "A visual language for the city festival: a fiery horse mascot, an amber-to-magenta gradient system, and a poster series covering every format of the event — from a floorball tournament to the charity fair.",
    },
  },

  /* ---------------- dev: featured ---------------- */
  {
    slug: "codenovsu",
    year: "2026",
    kind: "dev",
    stack: ["Next.js", "TypeScript", "AI"],
    links: { live: "https://code-nov-su.vercel.app", github: `${GH}/CodeNovSU` },
    filters: ["dev"],
    ru: {
      title: "CodeNovSU",
      category: "Образовательная платформа",
      place: "Веб-разработка · продукт",
      description:
        "Платформа практических курсов по C++, C#, фронтенду и анализу данных: треки обучения, проверка задач в реальном времени и AI-ассистент. Дизайн интерфейса и клиентская часть.",
    },
    en: {
      title: "CodeNovSU",
      category: "Education platform",
      place: "Web development · product",
      description:
        "A hands-on courses platform for C++, C#, frontend and data analysis: learning tracks, real-time task checking and an AI assistant. Interface design and the client side.",
    },
  },
  {
    slug: "alabuga",
    year: "2025",
    kind: "design",
    cover: "/works/alabuga-vk1.webp",
    gallery: [
      "/works/alabuga-vk2.webp",
      "/works/alabuga-vk3.webp",
      "/works/alabuga-cover.webp",
      "/works/alabuga-1.webp",
      "/works/alabuga-2.webp",
      "/works/alabuga-3.webp",
      "/works/alabuga-vk4.webp",
    ],
    filters: ["brand", "graphic", "social"],
    ru: {
      title: "Алабуга ТОП",
      category: "Айдентика проекта",
      place: "Всероссийский · PR-специалист проекта",
      description:
        "Айдентика и SMM всероссийского трудового проекта для подростков: обложка «впереди лучшее лето», карточки этапов и фестивалей, событийные баннеры и путёвки, мерч штаба, наградная продукция. Строгая синяя сетка, крупные пиктограммы и узнаваемый знак «АТ».",
    },
    en: {
      title: "Alabuga TOP",
      category: "Project identity",
      place: "National · project PR specialist",
      description:
        "Identity and SMM for an all-Russia teen labour project: the “best summer ahead” cover, stage and festival cards, event banners and passes, HQ merch and awards. A strict blue grid, bold pictograms and the recognizable “AT” mark.",
    },
  },

  /* ---------------- screens / UI ---------------- */
  {
    slug: "konkurs",
    year: "2025",
    kind: "design",
    cover: "/works/konkurs-cover.webp",
    gallery: [
      "/works/konkurs-1.webp",
      "/works/konkurs-2.webp",
      "/works/konkurs-3.webp",
      "/works/konkurs-4.webp",
      "/works/konkurs-5.webp",
    ],
    filters: ["screens", "graphic"],
    ru: {
      title: "ПРАVДА",
      category: "Экраны конкурса",
      place: "Всероссийский конкурс трудовых отрядов",
      description:
        "Система сценических экранов для конкурса «Трудкрут»: 3D-объекты в кислотной палитре, крупная типографика этапов — жеребьёвка, интеллектуальный, практический, проектная деятельность. Единый ритм на весь ивент.",
    },
    en: {
      title: "PRAVDA",
      category: "Stage screens",
      place: "National teen-squads contest",
      description:
        "A set of stage screens for the “Trudkrut” contest: 3D objects in an acid palette and bold stage typography — draw, intellectual, practical and project rounds. One rhythm across the whole event.",
    },
  },
  {
    slug: "conference",
    year: "2025",
    kind: "design",
    cover: "/works/conf-cover.webp",
    gallery: ["/works/conf-1.webp", "/works/conf-2.webp", "/works/conf-3.webp"],
    filters: ["screens", "graphic"],
    ru: {
      title: "Вселенная топовых решений",
      category: "Экраны конференции",
      place: "РСО 20:65 · конференция подростков",
      description:
        "Оформление экранов конференции подростков: тёмная сцена, объёмные знаки-соты и заголовки мастер-классов. Гибкие шаблоны, в которые редактор подставляет имя эксперта и тему.",
    },
    en: {
      title: "Universe of Top Ideas",
      category: "Conference screens",
      place: "RSO 20:65 · teen conference",
      description:
        "Screen design for a teen conference: a dark stage, dimensional hex marks and master-class titles. Flexible templates where an editor drops in the expert's name and topic.",
    },
  },
  {
    slug: "fieldmind",
    year: "2026",
    kind: "dev",
    stack: ["React", "Rust", "Fullstack"],
    links: { live: "https://field-mind-rho.vercel.app", github: `${GH}/FieldMind` },
    filters: ["dev"],
    ru: {
      title: "FieldMind",
      category: "CRM спорткомплекса",
      place: "Веб-разработка · fullstack",
      description:
        "Система управления спортивным клубом: клиенты, расписание, финансы и операционный обзор в одной панели. Резкий чёрно-белый интерфейс с акцентом и Rust-бэкенд.",
    },
    en: {
      title: "FieldMind",
      category: "Sports-club CRM",
      place: "Web development · fullstack",
      description:
        "A management system for a sports club: clients, schedule, finance and an operations overview in one dashboard. A sharp black-and-white interface with a Rust backend.",
    },
  },

  /* ---------------- graphic / event ---------------- */
  {
    slug: "vsso-2025",
    year: "2025",
    kind: "design",
    cover: "/works/vsso-cover.webp",
    gallery: [
      "/works/vsso-1.webp",
      "/works/vsso-2.webp",
      "/works/vsso-3.webp",
      "/works/vsso-4.webp",
      "/works/vsso-5.webp",
      "/works/vsso-6.webp",
    ],
    filters: ["brand", "graphic"],
    ru: {
      title: "Всероссийский слёт РСО 2025",
      category: "Айдентика события",
      place: "Красноярск · медиакоманда слёта",
      description:
        "Визуальное оформление всероссийского слёта студенческих отрядов в Красноярске: обложка сообщества и фирменные «поверхности» слёта, серия афиш по направлениям — спорт, мас-рестлинг и ГТО, музыка, дизайн, танцы — с итогами по округам. Единый синий стиль и леттеринг «трудкрут — здесь и сейчас».",
    },
    en: {
      title: "National RSO Gathering 2025",
      category: "Event identity",
      place: "Krasnoyarsk · gathering media team",
      description:
        "Visuals for the national student-squads gathering in Krasnoyarsk: the community cover and the event's branded surfaces, plus a poster series by track — sports, mas-wrestling & GTO, music, design, dance — with results by district. One blue system and the “trudkrut — here and now” lettering.",
    },
  },
  {
    slug: "wayfinding",
    year: "2025",
    kind: "design",
    cover: "/works/nav-cover.webp",
    gallery: ["/works/nav-1.webp", "/works/nav-2.webp", "/works/nav-3.webp", "/works/nav-4.webp"],
    filters: ["graphic"],
    ru: {
      title: "Деловая программа",
      category: "Навигация · вайфайндинг",
      place: "Деловая программа события",
      description:
        "Навигационные карточки деловой программы: жёлтая типографика на чёрном, крупные номера залов и таймслоты. Понятная система, которую видно с любой точки зала.",
    },
    en: {
      title: "Business Programme",
      category: "Wayfinding",
      place: "Event business programme",
      description:
        "Wayfinding cards for an event's business programme: yellow type on black, big hall numbers and time slots. A clear system readable from anywhere in the room.",
    },
  },
  {
    slug: "donor",
    year: "2025",
    kind: "design",
    cover: "/works/donor-cover.webp",
    gallery: ["/works/donor-1.webp", "/works/donor-2.webp", "/works/donor-3.webp"],
    filters: ["graphic", "social"],
    ru: {
      title: "РСО помогает",
      category: "Социальная кампания",
      place: "Всероссийская донорская акция",
      description:
        "Кампания о донорстве костного мозга: серия плакатов, где инфографика вероятностей и личная история встречаются с крупной типографикой на ультрамарине — чтобы сложное решение стало понятным и человечным.",
    },
    en: {
      title: "RSO Helps",
      category: "Social campaign",
      place: "National donor drive",
      description:
        "A bone-marrow donation campaign: a poster series where probability infographics and a personal story meet bold typography on ultramarine — turning a hard decision into something clear and human.",
    },
  },

  /* ---------------- dev: more ---------------- */
  {
    slug: "trudkrut-site",
    year: "2025",
    kind: "dev",
    stack: ["Next.js", "React", "TypeScript"],
    links: { live: "https://site-trud-krut.vercel.app", github: `${GH}/Site_trud_krut` },
    filters: ["dev"],
    ru: {
      title: "трудкрут.com",
      category: "Промо-сайт движения",
      place: "Веб-разработка · лендинг",
      description:
        "Промо-сайт студенческих отрядов: крупный экран «Работа для студента», статистика 400 000+ участников и 85 регионов, тёмная тема и заявка на вступление. Дизайн и вёрстка на Next.js.",
    },
    en: {
      title: "trudkrut.com",
      category: "Movement promo site",
      place: "Web development · landing",
      description:
        "A promo site for student squads: a bold “Work for students” hero, 400 000+ members and 85 regions in stats, a dark theme and a join form. Design and build on Next.js.",
    },
  },
  {
    slug: "soveshanie",
    year: "2024",
    kind: "design",
    cover: "/works/soveshanie-cover.webp",
    gallery: ["/works/soveshanie-1.webp"],
    filters: ["graphic"],
    ru: {
      title: "Всероссийское совещание",
      category: "Событийный дизайн",
      place: "Мастерская управления «Сенеж»",
      description:
        "Оформление совещания руководителей региональных отделений: сценический баннер с космической метафорой роста и печатная навигация площадки в «Сенеже».",
    },
    en: {
      title: "National Summit",
      category: "Event design",
      place: "Senezh Management Workshop",
      description:
        "Design for a summit of regional heads: a stage banner built on a cosmic metaphor of growth, plus printed wayfinding across the Senezh venue.",
    },
  },
  {
    slug: "uchi-ru",
    year: "2025",
    kind: "dev",
    stack: ["TypeScript", "AI", "Game"],
    links: { github: `${GH}/uchi_ru` },
    filters: ["dev"],
    ru: {
      title: "Учи.ру game",
      category: "Обучающая веб-игра",
      place: "Веб-разработка · edtech",
      description:
        "Образовательная веб-игра для детей 6–11 лет: интерактивные задания с элементами ИИ, дружелюбный интерфейс и игровая логика прогресса.",
    },
    en: {
      title: "Uchi.ru game",
      category: "Educational web game",
      place: "Web development · edtech",
      description:
        "An educational web game for kids aged 6–11: interactive tasks with AI elements, a friendly interface and game-like progress logic.",
    },
  },
  {
    slug: "trud",
    year: "2025",
    kind: "design",
    cover: "/works/trud-cover.webp",
    gallery: ["/works/trud-1.webp", "/works/trud-2.webp"],
    filters: ["social"],
    ru: {
      title: "Трудовые отряды подростков",
      category: "SMM и ребрендинг",
      place: "Новгородская область",
      description:
        "Ребрендинг и визуальное ведение сообщества: новая обложка, система шаблонов для постов и рубрик, 3D-леттеринг заголовка. Оформление, которое подростки хотят репостить.",
    },
    en: {
      title: "Teen Labour Squads",
      category: "SMM & rebranding",
      place: "Novgorod Region",
      description:
        "Rebranding and ongoing visual care for the community: a new cover, a template system for posts and rubrics, and 3D lettering. Design teenagers actually want to reshare.",
    },
  },
  {
    slug: "media-rso",
    year: "2025",
    kind: "dev",
    stack: ["Rust", "React", "TypeScript"],
    links: { github: `${GH}/media_rso` },
    filters: ["dev"],
    ru: {
      title: "media_rso",
      category: "Платформа медиаконкурса",
      place: "Веб-разработка · fullstack",
      description:
        "Платформа для проведения медиаконкурса: приём и оценка работ участников. React-фронтенд и производительный Rust-бэкенд.",
    },
    en: {
      title: "media_rso",
      category: "Media-contest platform",
      place: "Web development · fullstack",
      description:
        "A platform to run a media contest: submission and scoring of entries. A React frontend with a fast Rust backend.",
    },
  },
  {
    slug: "security-tools",
    year: "2025",
    kind: "dev",
    stack: ["Python", "ML", "Security"],
    links: { github: `${GH}/websec-scanner` },
    filters: ["dev"],
    ru: {
      title: "Security-инструменты",
      category: "Кибербезопасность",
      place: "Pet-проекты · Python",
      description:
        "Набор инструментов: пассивный аудит веб-безопасности с оценкой по грейдам, ML-детектор сетевых вторжений (Random Forest) и сканер соответствия сайта требованиям 152-ФЗ.",
    },
    en: {
      title: "Security toolkit",
      category: "Cybersecurity",
      place: "Pet projects · Python",
      description:
        "A set of tools: a passive web-security audit with letter grades, an ML network-intrusion detector (Random Forest), and a scanner for Russian data-law (152-FZ) compliance.",
    },
  },
  {
    slug: "love",
    year: "2026",
    kind: "dev",
    stack: ["TypeScript", "Creative"],
    links: { live: "https://love-seven-gilt.vercel.app", github: `${GH}/Love` },
    filters: ["dev"],
    ru: {
      title: "heart.PROTOCOL",
      category: "Экспериментальный проект",
      place: "Веб-разработка · творческое",
      description:
        "Маленький творческий проект в стиле терминала: «расшифруй сообщение» — интерактивная микро-история с анимациями и вниманием к деталям интерфейса.",
    },
    en: {
      title: "heart.PROTOCOL",
      category: "Experimental project",
      place: "Web development · creative",
      description:
        "A small terminal-style creative project: “decrypt the message” — an interactive micro-story with animations and a careful eye for interface detail.",
    },
  },
];

export const filterLabels: Record<FilterKey | "all", Record<Lang, string>> = {
  all: { ru: "Все", en: "All" },
  brand: { ru: "Брендинг", en: "Branding" },
  screens: { ru: "Экраны · UI", en: "Screens · UI" },
  graphic: { ru: "Графика", en: "Graphic" },
  social: { ru: "Соцдизайн", en: "Social" },
  dev: { ru: "Разработка", en: "Development" },
};

type Service = {
  no: string;
  ru: { title: string; text: string };
  en: { title: string; text: string };
};

export const services: Service[] = [
  {
    no: "01",
    ru: {
      title: "Брендинг и айдентика",
      text: "Логотипы, фирменный стиль, брендбуки. Система, которую видно во всех носителях — от мерча до презентации.",
    },
    en: {
      title: "Branding & identity",
      text: "Logos, visual identity, brandbooks. A system you can feel across every touchpoint — from merch to a deck.",
    },
  },
  {
    no: "02",
    ru: {
      title: "Графика и полиграфия",
      text: "Афиши, баннеры, наградная продукция, макеты к печати и визуалы для соцсетей — полным циклом до печати.",
    },
    en: {
      title: "Graphic & print",
      text: "Posters, banners, awards, print-ready layouts and social visuals — the full cycle through to press.",
    },
  },
  {
    no: "03",
    ru: {
      title: "Дизайн интерфейсов",
      text: "UI/UX сайтов, лендингов и цифровых продуктов: структура, экраны, интерактив и логика взаимодействия.",
    },
    en: {
      title: "Interface design",
      text: "UI/UX for sites, landings and digital products: structure, screens, interaction and its logic.",
    },
  },
  {
    no: "04",
    ru: {
      title: "Веб-разработка",
      text: "Вёрстка и клиентская часть на Next.js / React: лендинги, промо и веб-приложения — от макета до продакшена.",
    },
    en: {
      title: "Web development",
      text: "Frontend & builds on Next.js / React: landings, promos and web apps — from layout to production.",
    },
  },
];

export const stats: { value: string; ru: string; en: string }[] = [
  { value: "3", ru: "года опыта", en: "years of practice" },
  { value: "40+", ru: "проектов", en: "projects" },
  { value: "15", ru: "репозиториев", en: "repositories" },
];

export type ExperienceItem = {
  period: string;
  org: string;
  ru: { role: string; text: string };
  en: { role: string; text: string };
};

export const experience: ExperienceItem[] = [
  {
    period: "2026 — н.в.",
    org: "Госэкспертиза Новгородской области",
    ru: {
      role: "Инженер-программист",
      text: "Макеты интерфейсов сайтов, клиентская часть веб-приложения, лендинги и промо. Написание, оптимизация и рефакторинг кода, тестирование.",
    },
    en: {
      role: "Software engineer",
      text: "Interface mockups, the client side of a web app, landings and promos. Writing, optimizing and refactoring code, plus testing.",
    },
  },
  {
    period: "2023 — н.в.",
    org: "Российские студенческие отряды",
    ru: {
      role: "Дизайнер",
      text: "Фирменный стиль и логотипы для федеральных проектов. Порядка 20 макетов в месяц: креативы, презентации, печать и наружка. Всероссийский слёт РСО, «Алабуга ТОП».",
    },
    en: {
      role: "Designer",
      text: "Identity and logos for federal projects. Around 20 layouts a month: creatives, decks, print and outdoor. The national RSO gathering, “Alabuga TOP”.",
    },
  },
  {
    period: "2024 — 2025",
    org: "Студенчество на Ямале",
    ru: {
      role: "Дизайнер",
      text: "Единственный дизайнер направления: вёл проекты полным циклом — от концепции до печати. Логотипы, фирстиль, презентации, управление командой.",
    },
    en: {
      role: "Designer",
      text: "The only designer in the unit: ran projects end-to-end — from concept to print. Logos, identity, decks, team management.",
    },
  },
  {
    period: "2025 — 2026",
    org: "Skyeng",
    ru: {
      role: "SMM-менеджер",
      text: "Контент-план и стратегия, тексты для соцсетей и блогов, продвижение и публикация, анализ рынка, целевой аудитории и конкурентов.",
    },
    en: {
      role: "SMM manager",
      text: "Content plan and strategy, copy for social and blogs, publishing and promotion, analysis of the market, audience and competitors.",
    },
  },
];

export const copy = {
  ru: {
    nav: { work: "Работы", about: "О себе", experience: "Опыт", contact: "Контакт" },
    cv: "Резюме",
    hero: {
      eyebrow: "Графический дизайнер · веб-разработчик",
      hi: "Привет, я",
      lead: "Собираю фирменный стиль, айдентику и цифровые продукты — от афиши до веб-приложения. Работал с федеральными проектами, органами власти и НКО.",
      cta1: "Смотреть работы",
      cta2: "Связаться",
      meta: ["3 года опыта", "Дизайн × код", "Великий Новгород"],
      scroll: "Листай вниз",
      now: "Открыт к проектам",
    },
    manifesto: {
      quote: "От первого касания\nдо строчки кода",
      sub: "Веду проект целиком — концепция, система, макет и вёрстка. Дизайн, который не украшает, а объясняет.",
    },
    about: {
      label: "О себе",
      heading: "Дизайнер, который\nдоводит до кода",
      body: [
        "Я графический дизайнер с трёхлетним опытом. Разрабатываю фирменный стиль, логотипы, рекламные креативы, презентации и полиграфию для НКО, органов власти и федеральных молодёжных проектов — от концепции до макета в печать.",
        "Дополнительно закрываю SMM и контент-стратегию, а сейчас — веб-разработку: макеты интерфейсов, лендинги и клиентская часть веб-приложений. Люблю, когда идея живёт на любом носителе — от плаката до продакшена.",
      ],
      caption: "Артём Яковлев · Великий Новгород",
    },
    experience: {
      label: "Опыт",
      heading: "Где я работал",
      note: "Дизайн, SMM и разработка — параллельно, полным циклом.",
    },
    services: { label: "Услуги", heading: "Что я делаю" },
    work: {
      label: "Избранное",
      heading: "Работы",
      note: "Брендинг, графика, интерфейсы и код — на коммерческой и волонтёрской основе.",
      view: "Смотреть",
    },
    recognition: { label: "Признание", heading: "Что говорят и чем\nотмечена работа" },
    contact: {
      label: "Контакт",
      heading: "Давайте сделаем\nчто-то заметное",
      body: "Открыт для проектов по дизайну и разработке, коллабораций и задач под ключ. Пишите — отвечаю быстро.",
      emailLabel: "Почта",
      phoneLabel: "Телефон",
      elsewhere: "Ещё",
    },
    footer: {
      role: "Дизайнер · разработчик",
      city: "Великий Новгород, Россия",
      rights: "Все права защищены",
      built: "Свёрстано с характером",
    },
  },
  en: {
    nav: { work: "Work", about: "About", experience: "Experience", contact: "Contact" },
    cv: "Résumé",
    hero: {
      eyebrow: "Graphic designer · web developer",
      hi: "Hi, I'm",
      lead: "I build identity, branding and digital products — from a single poster to a web app. I've worked with federal projects, government bodies and NGOs.",
      cta1: "View work",
      cta2: "Get in touch",
      meta: ["3 years of practice", "Design × code", "Veliky Novgorod"],
      scroll: "Scroll down",
      now: "Open to work",
    },
    manifesto: {
      quote: "From the first touch\nto a line of code",
      sub: "I carry a project end-to-end — concept, system, layout and build. Design that explains instead of just decorating.",
    },
    about: {
      label: "About",
      heading: "A designer who\nships to code",
      body: [
        "I'm a graphic designer with three years of practice. I craft identity, logos, ad creatives, decks and print for NGOs, government bodies and federal youth projects — from concept to press-ready artwork.",
        "I also cover SMM and content strategy, and now web development: interface mockups, landings and the client side of web apps. I like an idea that lives on any medium — from a poster to production.",
      ],
      caption: "Artem Yakovlev · Veliky Novgorod",
    },
    experience: {
      label: "Experience",
      heading: "Where I've worked",
      note: "Design, SMM and development — in parallel, end-to-end.",
    },
    services: { label: "Services", heading: "What I do" },
    work: {
      label: "Selected",
      heading: "Work",
      note: "Branding, graphics, interfaces and code — commercial and volunteer.",
      view: "View",
    },
    recognition: { label: "Recognition", heading: "What they say &\nwhat's been awarded" },
    contact: {
      label: "Contact",
      heading: "Let's make\nsomething that stands out",
      body: "Open to design and development work, collaborations and turnkey tasks. Drop a line — I reply fast.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      elsewhere: "Elsewhere",
    },
    footer: {
      role: "Designer · developer",
      city: "Veliky Novgorod, Russia",
      rights: "All rights reserved",
      built: "Built with character",
    },
  },
} as const;

/* ---------------- case-study detail (design projects) ---------------- */
export type Metric = { value: string; ru: string; en: string };
export type Study = {
  role: Record<Lang, string>;
  metrics: Metric[];
  challenge: Record<Lang, string>;
  solution: Record<Lang, string>;
  result: Record<Lang, string>;
};

export const studies: Record<string, Study> = {
  "dom-molodezhi": {
    role: { ru: "Дизайнер бренда · брендбук", en: "Brand designer · brandbook" },
    metrics: [
      { value: "8", ru: "модулей гайда", en: "guide modules" },
      { value: "Коралл", ru: "градиентная система", en: "gradient system" },
      { value: "Digital + print", ru: "носители", en: "media" },
    ],
    challenge: {
      ru: "У молодёжной политики региона не было единого узнаваемого образа — каждый материал выглядел по-своему.",
      en: "The region's youth policy had no single recognizable look — every material spoke its own language.",
    },
    solution: {
      ru: "Собрал бренд «Молодость в Великом»: слоган «Явно ярко», живую коралловую градиентную систему, паттерн, логотип и типографику на Helvetica Neue — с гайдом по применению.",
      en: "Built the “Molodost v Velikom” brand: the “Явно ярко” slogan, a living coral gradient system, pattern, logo and Helvetica Neue typography — with a usage guide.",
    },
    result: {
      ru: "Единый язык, который переносится на мерч, презентации «Итоги года» и наружку без потери узнаваемости.",
      en: "One language that carries onto merch, “Year in review” decks and outdoor without losing its recognition.",
    },
  },
  "den-molodezhi": {
    role: { ru: "Дизайнер айдентики ивента", en: "Event identity designer" },
    metrics: [
      { value: "10+", ru: "афиш и форматов", en: "posters & formats" },
      { value: "«Гори ярко»", ru: "маскот-конь", en: "horse mascot" },
      { value: "Город", ru: "масштаб события", en: "city-wide event" },
    ],
    challenge: {
      ru: "Городскому Дню молодёжи нужен был характер, который свяжет десятки разных активностей в один праздник.",
      en: "The city Youth Day needed a character to tie dozens of different activities into one festival.",
    },
    solution: {
      ru: "Создал огненного маскота-коня «Гори ярко» и градиентную систему от амбры к пурпуру, разложив её на афиши под каждый формат — от турнира по флорболу до «Ярмарки добра».",
      en: "Created the fiery “Gori yarko” horse mascot and an amber-to-magenta gradient system, spread across posters for every format — from a floorball tournament to the charity fair.",
    },
    result: {
      ru: "Событие читается как единое целое: любой макет мгновенно узнаётся как «День молодёжи».",
      en: "The event reads as a whole: any layout is instantly recognizable as “Youth Day”.",
    },
  },
  alabuga: {
    role: { ru: "PR-специалист · дизайнер", en: "PR specialist · designer" },
    metrics: [
      { value: "Всероссийский", ru: "масштаб проекта", en: "national scale" },
      { value: "Баннеры → мерч", ru: "носители", en: "media" },
      { value: "«АТ»", ru: "фирменный знак", en: "brand mark" },
    ],
    challenge: {
      ru: "Федеральный трудовой проект для подростков жил без цельного стиля — материалы не складывались в бренд.",
      en: "A federal teen labour project had no coherent style — its materials didn't add up to a brand.",
    },
    solution: {
      ru: "Задал строгую синюю сетку, крупные пиктограммы и знак «АТ»; оформил событийные баннеры, путёвки, мерч штаба и наградную продукцию.",
      en: "Set a strict blue grid, bold pictograms and the “AT” mark; designed event banners, passes, HQ merch and awards.",
    },
    result: {
      ru: "Узнаваемая система от баннера до футболки и грамоты. В команде штаба проект установил новый рекорд России по трудоустройству несовершеннолетних.",
      en: "A recognizable system from banner to T-shirt to certificate. With the HQ team, the project set a new Russian record for employing minors.",
    },
  },
  konkurs: {
    role: { ru: "Дизайнер экранов и графики", en: "Screen & graphic designer" },
    metrics: [
      { value: "4 этапа", ru: "единая система", en: "one system" },
      { value: "Сцена", ru: "формат вывода", en: "stage format" },
      { value: "3D", ru: "графика", en: "graphics" },
    ],
    challenge: {
      ru: "Конкурсу нужны были сценические экраны, которые держат внимание зала на каждом этапе программы.",
      en: "The contest needed stage screens that hold the room's attention through every round.",
    },
    solution: {
      ru: "Собрал систему 3D-объектов в кислотной палитре и крупную типографику этапов — жеребьёвка, интеллектуальный, практический, проектная деятельность.",
      en: "Built a system of 3D objects in an acid palette with bold stage typography — draw, intellectual, practical and project rounds.",
    },
    result: {
      ru: "Один визуальный ритм на весь ивент, который легко расширяется под новые слайды.",
      en: "One visual rhythm across the whole event, easy to extend with new slides.",
    },
  },
  conference: {
    role: { ru: "Дизайнер экранов", en: "Screen designer" },
    metrics: [
      { value: "Шаблоны", ru: "масштабируемость", en: "scalable" },
      { value: "Тёмная сцена", ru: "формат", en: "format" },
      { value: "РСО 20:65", ru: "проект", en: "project" },
    ],
    challenge: {
      ru: "Конференции подростков нужны были экраны под десятки мастер-классов с разными спикерами и темами.",
      en: "A teen conference needed screens for dozens of master-classes with different speakers and topics.",
    },
    solution: {
      ru: "Тёмная сцена, объёмные знаки-соты и гибкие шаблоны заголовков — редактор просто подставляет имя эксперта и тему.",
      en: "A dark stage, dimensional hex marks and flexible title templates — an editor just drops in the expert's name and topic.",
    },
    result: {
      ru: "Единое оформление, которое обновляется за минуты и без участия дизайнера.",
      en: "One unified look that updates in minutes without a designer.",
    },
  },
  "vsso-2025": {
    role: { ru: "Медиакоманда слёта · дизайнер", en: "Gathering media team · designer" },
    metrics: [
      { value: "Всероссийский", ru: "уровень события", en: "event level" },
      { value: "Красноярск", ru: "площадка", en: "venue" },
      { value: "6+ направлений", ru: "серия афиш", en: "poster series" },
    ],
    challenge: {
      ru: "Слёту нужен был единый визуальный язык: от электронных поверхностей и презентаций до карточек с итогами по десяткам направлений — и всё в сжатые сроки.",
      en: "The gathering needed one visual language — from digital surfaces and decks to result cards across dozens of tracks — all under tight deadlines.",
    },
    solution: {
      ru: "В составе сборной медиакоманды собрал систему: обложку и «поверхности» слёта, шаблоны презентаций, инфографику и серию афиш направлений в едином синем стиле с фирменным леттерингом.",
      en: "As part of the joint media team I built the system: the cover and event surfaces, deck templates, infographics and a poster series by track in one blue style with the signature lettering.",
    },
    result: {
      ru: "Слёт читался как одно целое на всех экранах и в печати — от церемоний и приветственных слов официальных лиц до итогов конкурсов.",
      en: "The gathering read as a whole across every screen and in print — from ceremonies and officials' welcome words to contest results.",
    },
  },
  wayfinding: {
    role: { ru: "Дизайнер навигации", en: "Wayfinding designer" },
    metrics: [
      { value: "Все залы", ru: "охват площадки", en: "whole venue" },
      { value: "Жёлтый / чёрный", ru: "система", en: "system" },
      { value: "Печать", ru: "носитель", en: "medium" },
    ],
    challenge: {
      ru: "Участники деловой программы терялись между залами и таймслотами.",
      en: "Business-programme guests kept getting lost between halls and time slots.",
    },
    solution: {
      ru: "Сделал навигационные карточки — жёлтая типографика на чёрном, крупные номера залов и время.",
      en: "Made wayfinding cards — yellow type on black, big hall numbers and times.",
    },
    result: {
      ru: "Понятная система, читаемая с любой точки зала за секунду.",
      en: "A clear system readable from anywhere in the room in a second.",
    },
  },
  donor: {
    role: { ru: "Дизайнер соц. кампании", en: "Social-campaign designer" },
    metrics: [
      { value: "Серия", ru: "плакатов", en: "poster series" },
      { value: "Донорство ОКМ", ru: "тема", en: "topic" },
      { value: "Инфографика", ru: "подход", en: "approach" },
    ],
    challenge: {
      ru: "Рассказать о донорстве костного мозга так, чтобы сложное и пугающее стало понятным и близким.",
      en: "Explain bone-marrow donation so the complex and scary becomes clear and human.",
    },
    solution: {
      ru: "Серия плакатов, где инфографика вероятностей и личная история встречаются с крупной типографикой на ультрамарине.",
      en: "A poster series where probability infographics and a personal story meet bold typography on ultramarine.",
    },
    result: {
      ru: "Тема, которую не страшно репостить: решение выглядит человечным, а не медицинским.",
      en: "A topic people aren't afraid to reshare: the design feels human, not clinical.",
    },
  },
  soveshanie: {
    role: { ru: "Событийный дизайнер", en: "Event designer" },
    metrics: [
      { value: "«Сенеж»", ru: "площадка", en: "venue" },
      { value: "Руководители", ru: "аудитория", en: "audience" },
      { value: "Сцена + печать", ru: "носители", en: "media" },
    ],
    challenge: {
      ru: "Оформить совещание руководителей региональных отделений — статусно, но не сухо.",
      en: "Design a summit of regional heads — with status, but not dry.",
    },
    solution: {
      ru: "Сценический баннер с космической метафорой роста и печатная навигация площадки в «Сенеже».",
      en: "A stage banner on a cosmic metaphor of growth, plus printed wayfinding across the Senezh venue.",
    },
    result: {
      ru: "Живое оформление под серьёзную аудиторию — без канцелярской сухости.",
      en: "A lively look for a serious audience — without the bureaucratic dryness.",
    },
  },
  trud: {
    role: { ru: "Дизайнер и SMM", en: "Designer & SMM" },
    metrics: [
      { value: "Ребрендинг", ru: "задача", en: "scope" },
      { value: "Шаблоны", ru: "система постов", en: "post system" },
      { value: "3D-леттеринг", ru: "приём", en: "device" },
    ],
    challenge: {
      ru: "Сообщество выглядело устаревшим — подростки не вовлекались и не репостили.",
      en: "The community looked dated — teens didn't engage or reshare.",
    },
    solution: {
      ru: "Новая обложка, система шаблонов для рубрик и постов, 3D-леттеринг заголовка.",
      en: "A new cover, a template system for rubrics and posts, and 3D lettering.",
    },
    result: {
      ru: "Оформление, которое подростки хотят репостить, а SMM-щик — быстро собирать.",
      en: "Design teens want to reshare and an SMM manager can assemble fast.",
    },
  },
};

/* ---------------- recognition ---------------- */
export const testimonial = {
  ru: {
    quote:
      "Профессиональный почерк Артёма — прагматичный подход, приверженность минимализму в дизайне и умение быстро адаптироваться под брендбуки организаций-партнёров. В фокусе всегда узнаваемость стиля, функциональность продукта и интересы аудитории.",
    role: "Руководитель Центрального штаба РСО",
  },
  en: {
    quote:
      "Artem's professional signature is a pragmatic approach, a commitment to minimalism, and the ability to quickly adapt to partner brandbooks. Always focused on recognizable style, product function and the audience's interest.",
    role: "Head of the RSO Central HQ",
  },
  author: "Я.В. Зубащенко",
  source: { ru: "из официальной характеристики РСО", en: "from the official RSO reference" },
};

export const awards: { ru: string; en: string }[] = [
  {
    ru: "Рекорд России по трудоустройству несовершеннолетних — в команде штаба «Алабуга ТОП»",
    en: "Russian record for employing minors — on the “Alabuga TOP” HQ team",
  },
  {
    ru: "Почётная грамота со знаком отличия Студотрядов Новгородской области",
    en: "Honorary diploma with the badge of the Novgorod Region Student Squads",
  },
  {
    ru: "1 место «Лучший методист трудового отряда подростков», 2024",
    en: "1st place, “Best teen-squad methodologist”, 2024",
  },
  {
    ru: "Лауреат II ст. «Российская школьная весна» — «Публикация», 2025",
    en: "Laureate (2nd deg.), “Russian School Spring” — Publication, 2025",
  },
  {
    ru: "Федеральная команда контента «Медиа РСО»",
    en: "Federal content team “Media RSO”",
  },
];

/* ---------------- marquee (worked with) ---------------- */
export const marquee = {
  label: { ru: "Работал с", en: "Worked with" },
  items: [
    "Российские студенческие отряды",
    "Дом молодёжи",
    "Студенчество на Ямале",
    "Skyeng",
    "Госэкспертиза НО",
    "Алабуга ТОП",
    "Слёт РСО — Красноярск",
    "Дельфин.ru",
  ],
};

export const contacts = {
  email: "tema643789@gmail.com",
  phoneDisplay: "+7 (911) 609-63-41",
  phoneHref: "tel:+79116096341",
  behance: "https://www.behance.net/4b3f758e",
  github: "https://github.com/tema64378",
  githubHandle: "github/tema64378",
  telegram: "https://t.me/ykvlev_a",
  telegramHandle: "@ykvlev_a",
  site: "https://трудкрут.com",
  siteDisplay: "трудкрут.com",
  cv: "/portfolio-artem-yakovlev.pdf",
};
