import type { CourseLevel, LevelInfo, SyllabusModule } from "./types";

export const levelOrder: CourseLevel[] = ["beginner", "middle", "senior"];

export const translations = {
  ru: {
    locale: "ru-RU",
    nav: {
      levels: "Уровни",
      syllabus: "Программа",
      features: "Формат",
      target: "ТРЕК",
      admissionOpen: "НАБОР ОТКРЫТ",
      languageLabel: "Язык сайта",
    },
    hero: {
      systemLine: "ALGORITHM // ИНФОРМАТИКА v4.5",
      headlineTop: "КОД",
      headlineBottom: "ВЫШЕ",
      subhead:
        "Не просто учите синтаксис. Освойте логику, системы и алгоритмы, которые лежат в основе современной разработки.",
      metrics: [
        { value: "96%", label: "ВЫПУСКНИКОВ ТРУДОУСТРОЕНЫ" },
        { value: "1:1", label: "НАСТАВНИЧЕСТВО" },
        { value: "4.9/5", label: "ОЦЕНКА КУРСА" },
      ],
      start: "Выбрать уровень",
      syllabus: "Смотреть программу",
      explore: "ИССЛЕДОВАТЬ",
      phases: {
        beginner: "ФАЗА I // ОСНОВЫ ВЫЧИСЛЕНИЙ",
        middle: "ФАЗА II // СТРУКТУРЫ И СИСТЕМЫ",
        senior: "ФАЗА III // КОМПИЛЯТОРЫ И АРХИТЕКТУРА",
      },
    },
    levels: {
      title: "ВЫБЕРИТЕ УРОВЕНЬ",
      description:
        "Определите текущий уровень подготовки и адаптируйте программу, визуальную сложность и учебный маршрут под свою цель.",
      drag: "ПЕРЕТЯНИТЕ",
      focusSuffix: "фокус программы",
      salary: "КАРЬЕРНЫЙ ВЕКТОР",
      depth: "ГЛУБИНА КУРСА",
      tech: "Ключевые технологии и навыки",
      visual: "[ВИЗУАЛИЗАЦИЯ АЛГОРИТМИЧЕСКОЙ СТРУКТУРЫ]",
      latency: "ЗАДЕРЖКА: 0.12ms",
      complexity: "СЛОЖНОСТЬ",
      capstone: "ИТОГОВЫЙ ПРОЕКТ",
      labels: {
        beginner: "Начальный",
        middle: "Средний",
        senior: "Продвинутый",
      },
      complexityLabels: {
        beginner: "БАЗОВАЯ",
        middle: "СРЕДНЯЯ",
        senior: "ЭКСПОНЕНЦИАЛЬНАЯ",
      },
      data: {
        beginner: {
          level: "beginner",
          title: "Начальный",
          subTitle: "ОСНОВЫ // ЯДРО ВЫЧИСЛЕНИЙ",
          description:
            "Постройте прочную базу: память, указатели, рекурсия, структуры данных и оценка сложности алгоритмов.",
          salaryLevel: "Junior / стажировка / стартовая позиция",
          termDuration: "12 недель (база)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "C Language", iconName: "Cpu", description: "Память и указатели" },
            { name: "Python", iconName: "Code2", description: "Прототипы и ООП" },
            { name: "Git Core", iconName: "Terminal", description: "Командная работа" },
            { name: "Data Structures", iconName: "Sliders", description: "Списки, деревья, очереди" },
          ],
          featuredProject: {
            name: "Эмулятор стековой VM на C",
            description:
              "Разработка компактной виртуальной машины: парсинг инструкций, регистры, стек и контроль ошибок.",
            specs: ["Контроль памяти", "Проверка переполнений", "Быстрые операции"],
          },
        },
        middle: {
          level: "middle",
          title: "Средний",
          subTitle: "КОНКУРЕНТНОСТЬ // СИСТЕМНАЯ ИНТЕГРАЦИЯ",
          description:
            "Переход от процедурного кода к параллельным системам: очереди, транзакции, индексы, графы и сетевые узлы.",
          salaryLevel: "Middle developer / системные задачи",
          termDuration: "24 недели (база)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "Go / Golang", iconName: "Code2", description: "Каналы и планировщик" },
            { name: "C++", iconName: "Cpu", description: "Производительность" },
            { name: "Docker & Linux", iconName: "Sliders", description: "Контейнеры и процессы" },
            { name: "Graph Routing", iconName: "Award", description: "Dijkstra, A*, эвристики" },
          ],
          featuredProject: {
            name: "TCP Router Proxy",
            description:
              "Сетевой proxy с конкурентной обработкой соединений, очередями и маршрутизацией по графу.",
            specs: ["Go concurrency", "Маршрутизация Dijkstra", "Низкая задержка"],
          },
        },
        senior: {
          level: "senior",
          title: "Продвинутый",
          subTitle: "КОМПИЛЯТОРЫ // LLVM, WASM И СИСТЕМНАЯ АРХИТЕКТУРА",
          description:
            "Разбор языков, AST, оптимизации, WebAssembly, низкоуровневые runtime-подходы и архитектура сложных систем.",
          salaryLevel: "Senior / core engineering",
          termDuration: "36 недель (база)",
          highlightColor: "text-cyan-400",
          techStack: [
            { name: "Rust", iconName: "Shield", description: "Безопасность памяти" },
            { name: "Assembly / LLVM", iconName: "Cpu", description: "Кодогенерация" },
            { name: "Kubernetes Core", iconName: "Sliders", description: "Состояние сервисов" },
            { name: "Neural Layer Math", iconName: "Zap", description: "Матрицы с нуля" },
          ],
          featuredProject: {
            name: "Платформа компилятора TitanLex",
            description:
              "Мини-язык с лексером, AST, проверкой типов и генерацией LLVM IR или WebAssembly.",
            specs: ["Лексический анализ", "Оптимизация регистров", "Wasm модуль"],
          },
        },
      } satisfies Record<CourseLevel, LevelInfo>,
    },
    schedule: {
      live: "ЖИВОЙ КАЛЬКУЛЯТОР",
      title: "Адаптивный конфигуратор темпа",
      description:
        "Настройте недельную нагрузку и дату старта. Таймлайн модулей пересчитается автоматически под ваш реальный график.",
      weekly: "НЕДЕЛЬНАЯ НАГРУЗКА",
      hoursWeek: "часов / неделя",
      min: "МИН: 4ч (спокойно)",
      max: "МАКС: 24ч (интенсив)",
      date: "ДАТА СТАРТА",
      profile: "ПРОФИЛЬ ИНТЕНСИВНОСТИ",
      totalDuration: "ОБЩАЯ ДЛИТЕЛЬНОСТЬ",
      totalHours: "всего часов",
      graduation: "ДАТА ЗАВЕРШЕНИЯ",
      currentPace: "при текущем темпе",
      weeks: "недель",
      profiles: [
        {
          label: "СПОКОЙНЫЙ РЕЖИМ",
          color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
          desc: "Подходит тем, кто совмещает курс с работой или учебой.",
        },
        {
          label: "СБАЛАНСИРОВАННЫЙ ТЕМП",
          color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
          desc: "Оптимальный ритм для стабильного прогресса и практики.",
        },
        {
          label: "ИНТЕНСИВНЫЙ ТРЕК",
          color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
          desc: "Ускоренный режим для быстрого перехода к проектам.",
        },
        {
          label: "МАКСИМАЛЬНАЯ НАГРУЗКА",
          color: "text-red-500 border-red-500/30 bg-red-500/5",
          desc: "Полное погружение для тех, кто готов заниматься почти каждый день.",
        },
      ],
    },
    syllabus: {
      label: "АДАПТИВНЫЙ УЧЕБНЫЙ ПОТОК",
      title: "Программа курса и дорожная карта",
      description:
        "Модули курса обновляют даты в зависимости от выбранной нагрузки и показывают, как теория переходит в практику.",
      standardHours: "акад. часов",
      weeksTotal: "недель всего",
      wk: "нед.",
      theory: "ТЕОРИЯ: разборы",
      practice: "ПРАКТИКА: задачи",
      homework: "ДЗ: code review",
      group: "ГРУППА: Git-спринты",
      hours: "часов",
      topics: "Темы лекций и практики",
      modules: [
        {
          id: "m1",
          title: "Основы вычислений и работа с памятью",
          phase: "ФАЗА I // ПАМЯТЬ",
          description:
            "Стек, heap, указатели, границы памяти и защитное программирование на низком уровне.",
          baseHours: 40,
          hoursTheory: 12,
          hoursPractice: 14,
          hoursHomework: 8,
          hoursGroupWork: 6,
          detailedLessons: [
            "Анатомия памяти: стек, heap, регистры и статические данные.",
            "Указатели, двойные указатели и адресная арифметика.",
            "Ручное выделение памяти и контроль фрагментации.",
            "Защита от переполнений и ошибок доступа.",
          ],
        },
        {
          id: "m2",
          title: "Структуры данных, индексы и деревья",
          phase: "ФАЗА II // ДАННЫЕ",
          description:
            "Массивы, хеш-таблицы, AVL/Red-Black деревья, индексы и компрессия данных.",
          baseHours: 50,
          hoursTheory: 15,
          hoursPractice: 18,
          hoursHomework: 10,
          hoursGroupWork: 7,
          detailedLessons: [
            "Динамические массивы и амортизированная сложность.",
            "Коллизии в хеш-таблицах и стратегии разрешения.",
            "Балансировка AVL и Red-Black деревьев.",
            "Huffman tree и сериализация данных.",
          ],
        },
        {
          id: "m3",
          title: "Графы и маршрутизация",
          phase: "ФАЗА III // ГРАФЫ",
          description:
            "Dijkstra, Bellman-Ford, A*, MST и анализ потоков в сетях.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "Списки смежности и sparse matrix.",
            "Dijkstra, Bellman-Ford и A* на практике.",
            "Prim и Kruskal для минимальных остовных деревьев.",
            "Узкие места сети и базовые flow-cut идеи.",
          ],
        },
        {
          id: "m4",
          title: "Асинхронность и конкурентные пайплайны",
          phase: "ФАЗА IV // CONCURRENCY",
          description:
            "Потоки, mutex, semaphore, lock-free очереди и неблокирующий ввод-вывод.",
          baseHours: 70,
          hoursTheory: 22,
          hoursPractice: 24,
          hoursHomework: 14,
          hoursGroupWork: 10,
          detailedLessons: [
            "Race condition, atomic и memory barriers.",
            "Circular ring buffers и lock-free очереди.",
            "Epoll и non-blocking IO.",
            "Thread pools и распределение нагрузки.",
          ],
        },
        {
          id: "m5",
          title: "Компиляторы и LLVM codegen",
          phase: "ФАЗА V // CODEGEN",
          description:
            "Лексер, parser, AST, проверка типов и генерация низкоуровневого кода.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "DFA и токенизация исходного кода.",
            "Recursive descent parser и AST.",
            "Проверка типов и промежуточное представление.",
            "Генерация LLVM IR и WebAssembly.",
          ],
        },
      ] satisfies SyllabusModule[],
    },
    features: {
      title: "СИЛЬНАЯ УЧЕБНАЯ СРЕДА",
      description:
        "Формат курса построен вокруг практики, наставничества и гибкого темпа, чтобы обучение не оставалось только теорией.",
      cards: [
        {
          id: "individual",
          title: "Индивидуальный подход",
          badge: "ГРУППА ДО 40",
          description:
            "Код проверяется наставниками, а сложные места разбираются по проектам и pull request.",
          bullets: ["Персональные GitHub PR-разборы", "Еженедельные 1:1 сессии", "Быстрая обратная связь"],
        },
        {
          id: "schedule",
          title: "Гибкий график",
          badge: "АКТИВНЫЙ ТЕМП",
          description:
            "Можно ускорять или снижать нагрузку, а календарь курса пересчитывается под выбранный ритм.",
          bullets: ["Пауза до 30 дней", "Динамические сроки модулей", "Office hours и записи"],
        },
        {
          id: "access",
          title: "Доступ к материалам",
          badge: "ОБНОВЛЕНИЯ",
          description:
            "Материалы, песочницы, задания и симуляции интервью остаются доступными после завершения.",
          bullets: ["Обновления программы", "Практические sandbox-задачи", "Mock interviews для выпускников"],
        },
      ],
    },
    faq: {
      label: "БАЗА ЗНАНИЙ",
      title: "Частые вопросы",
      items: [
        {
          q: "Нужна ли подготовка для первого этапа?",
          a: "Строгих требований нет. Мы начинаем с логики, базового синтаксиса и постепенно переходим к памяти, структурам и системному мышлению.",
        },
        {
          q: "Как считается длительность курса?",
          a: "Калькулятор берет 280 базовых часов и делит их на выбранную недельную нагрузку. Чем выше темп, тем короче календарный срок.",
        },
        {
          q: "Можно ли поставить обучение на паузу?",
          a: "Да. В учебном плане можно заложить паузу до 30 дней без потери прогресса и доступа к материалам.",
        },
        {
          q: "Будет ли итоговый проект?",
          a: "Да. Каждый трек завершается проектом, который демонстрирует освоенные алгоритмы, архитектуру и практические навыки.",
        },
      ],
    },
    cta: {
      title: "Готовы собрать свой core?",
      textBefore: "Забронируйте место в потоке CY-42, старт",
      date: "18 ИЮНЯ 2026",
      textAfter: "и начните системно прокачивать информатику и инженерное мышление.",
      button: "Оставить заявку",
    },
    modal: {
      title: "ЗАЯВКА НА ПОТОК",
      cohort: "ПОТОК",
      sector: "ВЫБРАННЫЙ ТРЕК",
      estimated: "ОЦЕНКА СРОКА",
      name: "ИМЯ И ФАМИЛИЯ",
      namePlaceholder: "например, Иван Петров",
      email: "EMAIL ДЛЯ СВЯЗИ",
      emailPlaceholder: "например, student@example.com",
      submit: "ОТПРАВИТЬ ЗАЯВКУ",
      disclaimer: "После отправки мы подготовим детали программы и свяжемся с вами.",
      success: "ЗАЯВКА ОТПРАВЛЕНА",
      greeting: "Спасибо",
      queued: "Ваша заявка добавлена в поток CY-42.",
      ticket: "НОМЕР ЗАЯВКИ #331A8",
      operator: "EMAIL",
      reserved: "ТРЕК",
      launch: "СТАРТ",
      timing: "НАГРУЗКА",
      close: "Закрыть окно",
      closeAria: "Закрыть форму заявки",
    },
    footer: {
      description:
        "Курсы по информатике и computer science: от алгоритмов и структур данных до системного программирования.",
      compliance: "УЧЕБНАЯ СРЕДА С ЗАЩИТОЙ ДАННЫХ",
      cohorts: "БЛИЖАЙШИЕ ПОТОКИ",
      docs: "РАЗДЕЛЫ",
      links: ["Матрица уровней", "Расписание модулей", "Формат поддержки", "Шаблон GitHub-проекта"],
      notifier: "УВЕДОМЛЕНИЯ",
      notifierText: "Получайте чеклисты, материалы и даты новых потоков.",
      notifierPlaceholder: "student@example.com",
      notifierAria: "Подписаться на уведомления",
      ready: "ГОТОВО",
      copyright: "© 2026 ALGORITHM. ВСЕ ПРАВА ЗАЩИЩЕНЫ.",
      hosted: "HOSTED BY CLOUD_CONTAINERS v3.12",
      location: "ONLINE / CHISINAU",
    },
  },
  ro: {
    locale: "ro-RO",
    nav: {
      levels: "Niveluri",
      syllabus: "Program",
      features: "Format",
      target: "TRASEU",
      admissionOpen: "INSCRIERI DESCHISE",
      languageLabel: "Limba site-ului",
    },
    hero: {
      systemLine: "ALGORITHM // INFORMATICA v4.5",
      headlineTop: "COD",
      headlineBottom: "DINCOLO",
      subhead:
        "Nu invata doar sintaxa. Intelege logica, sistemele si algoritmii care sustin dezvoltarea software moderna.",
      metrics: [
        { value: "96%", label: "ABSOLVENTI ANGAJATI" },
        { value: "1:1", label: "MENTORAT" },
        { value: "4.9/5", label: "RATING CURS" },
      ],
      start: "Alege nivelul",
      syllabus: "Vezi programul",
      explore: "EXPLOREAZA",
      phases: {
        beginner: "FAZA I // BAZELE CALCULULUI",
        middle: "FAZA II // STRUCTURI SI SISTEME",
        senior: "FAZA III // COMPILATOARE SI ARHITECTURA",
      },
    },
    levels: {
      title: "ALEGE NIVELUL",
      description:
        "Stabileste nivelul actual si adapteaza programul, complexitatea vizuala si traseul de invatare la obiectivul tau.",
      drag: "GLISEAZA",
      focusSuffix: "focus program",
      salary: "VECTOR DE CARIERA",
      depth: "ADANCIME CURS",
      tech: "Tehnologii si abilitati cheie",
      visual: "[VIZUALIZARE STRUCTURA ALGORITMICA]",
      latency: "LATENTA: 0.12ms",
      complexity: "COMPLEXITATE",
      capstone: "PROIECT FINAL",
      labels: {
        beginner: "Incepator",
        middle: "Intermediar",
        senior: "Avansat",
      },
      complexityLabels: {
        beginner: "BAZA",
        middle: "INTERMEDIARA",
        senior: "EXPONENTIALA",
      },
      data: {
        beginner: {
          level: "beginner",
          title: "Incepator",
          subTitle: "BAZE // NUCLEU COMPUTATIONAL",
          description:
            "Construieste baza: memorie, pointeri, recursie, structuri de date si analiza complexitatii algoritmilor.",
          salaryLevel: "Junior / internship / prima pozitie",
          termDuration: "12 saptamani (baza)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "C Language", iconName: "Cpu", description: "Memorie si pointeri" },
            { name: "Python", iconName: "Code2", description: "Prototipuri si OOP" },
            { name: "Git Core", iconName: "Terminal", description: "Lucru in echipa" },
            { name: "Data Structures", iconName: "Sliders", description: "Liste, arbori, cozi" },
          ],
          featuredProject: {
            name: "Emulator VM pe stiva in C",
            description:
              "O masina virtuala compacta: parsare de instructiuni, registre, stiva si controlul erorilor.",
            specs: ["Control memorie", "Protectie overflow", "Operatii rapide"],
          },
        },
        middle: {
          level: "middle",
          title: "Intermediar",
          subTitle: "CONCURENTA // INTEGRARE DE SISTEME",
          description:
            "Treci de la cod procedural la sisteme paralele: cozi, tranzactii, indexare, grafuri si noduri de retea.",
          salaryLevel: "Middle developer / sisteme",
          termDuration: "24 saptamani (baza)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "Go / Golang", iconName: "Code2", description: "Canale si scheduler" },
            { name: "C++", iconName: "Cpu", description: "Performanta" },
            { name: "Docker & Linux", iconName: "Sliders", description: "Containere si procese" },
            { name: "Graph Routing", iconName: "Award", description: "Dijkstra, A*, euristici" },
          ],
          featuredProject: {
            name: "TCP Router Proxy",
            description:
              "Proxy de retea cu procesare concurenta, cozi si rutare pe graf.",
            specs: ["Go concurrency", "Rutare Dijkstra", "Latenta redusa"],
          },
        },
        senior: {
          level: "senior",
          title: "Avansat",
          subTitle: "COMPILATOARE // LLVM, WASM SI ARHITECTURA",
          description:
            "Limbaje, AST, optimizari, WebAssembly, runtime low-level si arhitectura sistemelor complexe.",
          salaryLevel: "Senior / core engineering",
          termDuration: "36 saptamani (baza)",
          highlightColor: "text-cyan-400",
          techStack: [
            { name: "Rust", iconName: "Shield", description: "Siguranta memoriei" },
            { name: "Assembly / LLVM", iconName: "Cpu", description: "Codegen" },
            { name: "Kubernetes Core", iconName: "Sliders", description: "Starea serviciilor" },
            { name: "Neural Layer Math", iconName: "Zap", description: "Matrici de la zero" },
          ],
          featuredProject: {
            name: "Platforma compilator TitanLex",
            description:
              "Mini-limbaj cu lexer, AST, verificare de tipuri si generare LLVM IR sau WebAssembly.",
            specs: ["Analiza lexicala", "Optimizare registre", "Modul Wasm"],
          },
        },
      } satisfies Record<CourseLevel, LevelInfo>,
    },
    schedule: {
      live: "CALCULATOR LIVE",
      title: "Configurator adaptiv de ritm",
      description:
        "Seteaza orele pe saptamana si data de start. Timeline-ul modulelor se recalculeaza automat dupa programul tau.",
      weekly: "ORE PE SAPTAMANA",
      hoursWeek: "ore / saptamana",
      min: "MIN: 4h (lejer)",
      max: "MAX: 24h (intensiv)",
      date: "DATA DE START",
      profile: "PROFIL DE INTENSITATE",
      totalDuration: "DURATA ESTIMATA",
      totalHours: "ore totale",
      graduation: "DATA FINALIZARII",
      currentPace: "la ritmul curent",
      weeks: "saptamani",
      profiles: [
        {
          label: "RITM LEJER",
          color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
          desc: "Potrivit pentru cei care combina cursul cu jobul sau studiile.",
        },
        {
          label: "RITM ECHILIBRAT",
          color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
          desc: "Ritm optim pentru progres constant si practica.",
        },
        {
          label: "TRASEU INTENSIV",
          color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
          desc: "Ritm accelerat pentru trecerea rapida la proiecte.",
        },
        {
          label: "IMERSIE MAXIMA",
          color: "text-red-500 border-red-500/30 bg-red-500/5",
          desc: "Pentru cei care pot lucra aproape zilnic.",
        },
      ],
    },
    syllabus: {
      label: "FLUX ADAPTIV DE INVATARE",
      title: "Programul cursului si roadmap",
      description:
        "Modulele actualizeaza datele dupa ritmul ales si arata cum teoria se transforma in practica.",
      standardHours: "ore academice",
      weeksTotal: "saptamani total",
      wk: "sapt.",
      theory: "TEORIE: explicatii",
      practice: "PRACTICA: exercitii",
      homework: "TEMA: code review",
      group: "GRUP: sprinturi Git",
      hours: "ore",
      topics: "Teme de lectii si practica",
      modules: [
        {
          id: "m1",
          title: "Baze computationionale si memorie",
          phase: "FAZA I // MEMORIE",
          description:
            "Stack, heap, pointeri, limite de memorie si programare defensiva low-level.",
          baseHours: 40,
          hoursTheory: 12,
          hoursPractice: 14,
          hoursHomework: 8,
          hoursGroupWork: 6,
          detailedLessons: [
            "Anatomia memoriei: stack, heap, registre si date statice.",
            "Pointeri, pointeri dubli si aritmetica adreselor.",
            "Alocare manuala si controlul fragmentarii.",
            "Protectie impotriva overflow si acces invalid.",
          ],
        },
        {
          id: "m2",
          title: "Structuri de date, indexuri si arbori",
          phase: "FAZA II // DATE",
          description:
            "Array-uri, hash tables, arbori AVL/Red-Black, indexuri si compresie.",
          baseHours: 50,
          hoursTheory: 15,
          hoursPractice: 18,
          hoursHomework: 10,
          hoursGroupWork: 7,
          detailedLessons: [
            "Array-uri dinamice si complexitate amortizata.",
            "Coliziuni in hash tables si strategii de rezolvare.",
            "Balansare AVL si Red-Black trees.",
            "Huffman tree si serializarea datelor.",
          ],
        },
        {
          id: "m3",
          title: "Grafuri si rutare",
          phase: "FAZA III // GRAFURI",
          description:
            "Dijkstra, Bellman-Ford, A*, MST si analiza fluxurilor in retele.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "Liste de adiacenta si sparse matrix.",
            "Dijkstra, Bellman-Ford si A* in practica.",
            "Prim si Kruskal pentru arbori de acoperire.",
            "Bottlenecks si idei de baza flow-cut.",
          ],
        },
        {
          id: "m4",
          title: "Pipeline-uri asincrone si concurenta",
          phase: "FAZA IV // CONCURENTA",
          description:
            "Thread-uri, mutex, semaphore, cozi lock-free si IO non-blocking.",
          baseHours: 70,
          hoursTheory: 22,
          hoursPractice: 24,
          hoursHomework: 14,
          hoursGroupWork: 10,
          detailedLessons: [
            "Race condition, atomic si memory barriers.",
            "Circular ring buffers si cozi lock-free.",
            "Epoll si non-blocking IO.",
            "Thread pools si distributia sarcinii.",
          ],
        },
        {
          id: "m5",
          title: "Compilatoare si LLVM codegen",
          phase: "FAZA V // CODEGEN",
          description:
            "Lexer, parser, AST, verificare de tipuri si generare de cod low-level.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "DFA si tokenizarea codului sursa.",
            "Recursive descent parser si AST.",
            "Verificare de tipuri si reprezentare intermediara.",
            "Generare LLVM IR si WebAssembly.",
          ],
        },
      ] satisfies SyllabusModule[],
    },
    features: {
      title: "MEDIU PUTERNIC DE INVATARE",
      description:
        "Formatul cursului pune accent pe practica, mentorat si ritm flexibil.",
      cards: [
        {
          id: "individual",
          title: "Abordare individuala",
          badge: "GRUPA MAX 40",
          description:
            "Codul este verificat de mentori, iar problemele sunt discutate pe proiecte si pull request.",
          bullets: ["Review GitHub PR", "Sesiuni 1:1 saptamanale", "Feedback rapid"],
        },
        {
          id: "schedule",
          title: "Program flexibil",
          badge: "RITM ACTIV",
          description:
            "Poti accelera sau reduce incarcarea, iar calendarul cursului se adapteaza automat.",
          bullets: ["Pauza pana la 30 zile", "Termene dinamice", "Office hours si inregistrari"],
        },
        {
          id: "access",
          title: "Acces la materiale",
          badge: "UPDATE-URI",
          description:
            "Materialele, sandbox-urile, temele si simularile de interviu raman disponibile dupa curs.",
          bullets: ["Update-uri de program", "Sandbox-uri practice", "Mock interviews pentru alumni"],
        },
      ],
    },
    faq: {
      label: "BAZA DE CUNOSTINTE",
      title: "Intrebari frecvente",
      items: [
        {
          q: "Este nevoie de pregatire pentru primul modul?",
          a: "Nu exista cerinte stricte. Incepem cu logica, sintaxa de baza si trecem treptat la memorie, structuri si gandire de sistem.",
        },
        {
          q: "Cum se calculeaza durata cursului?",
          a: "Calculatorul foloseste 280 de ore de baza si le imparte la incarcarea saptamanala aleasa.",
        },
        {
          q: "Pot pune cursul pe pauza?",
          a: "Da. Planul permite o pauza de pana la 30 de zile fara pierderea progresului.",
        },
        {
          q: "Exista proiect final?",
          a: "Da. Fiecare traseu se incheie cu un proiect care demonstreaza algoritmi, arhitectura si abilitati practice.",
        },
      ],
    },
    cta: {
      title: "Gata sa-ti construiesti core-ul?",
      textBefore: "Rezerva un loc in grupa CY-42, start",
      date: "18 IUNIE 2026",
      textAfter: "si incepe sa dezvolti gandirea algoritmica si inginereasca.",
      button: "Trimite cerere",
    },
    modal: {
      title: "CERERE PENTRU GRUPA",
      cohort: "GRUPA",
      sector: "TRASEU ALES",
      estimated: "DURATA ESTIMATA",
      name: "NUME SI PRENUME",
      namePlaceholder: "ex. Ion Popescu",
      email: "EMAIL DE CONTACT",
      emailPlaceholder: "ex. student@example.com",
      submit: "TRIMITE CEREREA",
      disclaimer: "Dupa trimitere pregatim detaliile programului si revenim cu raspuns.",
      success: "CERERE TRIMISA",
      greeting: "Multumim",
      queued: "Cererea ta a fost adaugata in grupa CY-42.",
      ticket: "TICHET #331A8",
      operator: "EMAIL",
      reserved: "TRASEU",
      launch: "START",
      timing: "RITM",
      close: "Inchide fereastra",
      closeAria: "Inchide formularul de inscriere",
    },
    footer: {
      description:
        "Cursuri de informatica si computer science: de la algoritmi si structuri de date pana la programare de sistem.",
      compliance: "MEDIU DE STUDIU CU DATE PROTEJATE",
      cohorts: "GRUPE URMATOARE",
      docs: "SECTIUNI",
      links: ["Matricea nivelurilor", "Programul modulelor", "Format suport", "Sablon proiect GitHub"],
      notifier: "NOTIFICARI",
      notifierText: "Primeste checklist-uri, materiale si date pentru grupele noi.",
      notifierPlaceholder: "student@example.com",
      notifierAria: "Aboneaza-te la notificari",
      ready: "GATA",
      copyright: "© 2026 ALGORITHM. TOATE DREPTURILE REZERVATE.",
      hosted: "HOSTED BY CLOUD_CONTAINERS v3.12",
      location: "ONLINE / CHISINAU",
    },
  },
} as const;

export type LanguageCopy = typeof translations.ru;
