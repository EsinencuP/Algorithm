/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CourseLevel, SyllabusModule, LevelInfo } from "./types";

export type Language = "ro" | "ru";

export interface TranslationDictionary {
  navbar: {
    logo: string;
    levels: string;
    syllabus: string;
    features: string;
    target: string;
    admissionOpen: string;
  };
  hero: {
    phases: Record<CourseLevel, string>;
    code: string;
    beyond: string;
    description: string;
    graduatesHired: string;
    expertMentorship: string;
    ratingOnG2: string;
    startJourney: string;
    viewSyllabus: string;
    exploreMatrix: string;
  };
  levelSelector: {
    title: string;
    tagline: string;
    dragMesh: string;
    syllabusFocus: string;
    salaryVector: string;
    courseDepth: string;
    coreTechHeading: string;
    projectBadge: string;
    caps: string;
    complexityLabel: string;
    latencyLabel: string;
    complexityB: string;
    complexityM: string;
    complexityS: string;
    levels: Record<CourseLevel, LevelInfo>;
  };
  scheduleCalculator: {
    liveIndicator: string;
    title: string;
    description: string;
    weeklyAllocation: string;
    commencementDate: string;
    minLabel: string;
    maxLabel: string;
    studyIntensityProfile: string;
    totalDuration: string;
    totalHours: string;
    gradVector: string;
    paceLabel: string;
    intensities: {
      casual: { label: string; desc: string };
      balanced: { label: string; desc: string };
      grindcore: { label: string; desc: string };
      overload: { label: string; desc: string };
    };
  };
  syllabus: {
    adaptiveLearningFlow: string;
    title: string;
    description: string;
    standardHours: string;
    weeksTotal: string;
    theory: string;
    practice: string;
    homework: string;
    groupWork: string;
    lectureSandbox: string;
    modules: SyllabusModule[];
  };
  featureGrid: {
    title: string;
    description: string;
    cards: {
      id: string;
      title: string;
      badge: string;
      description: string;
      bullets: string[];
    }[];
  };
  faq: {
    title: string;
    knowledgeBasis: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  conversionBanner: {
    title: string;
    description: string;
    dateHighlight: string;
    cta: string;
  };
  footer: {
    brandDescription: string;
    secureStack: string;
    nextCohorts: string;
    referenceDocs: string;
    levelSelection: string;
    moduleSchedulers: string;
    supportPillars: string;
    githubTemplate: string;
    compilerNotifier: string;
    newsletterDescription: string;
    notifyPlaceholder: string;
    readyBtn: string;
    latitude: string;
    rights: string;
    contactHeading: string;
    address: string;
    phone: string;
    email: string;
  };
  modal: {
    close: string;
    initiateEnroll: string;
    cohort: string;
    selectedSector: string;
    estimatedTerm: string;
    weeksLabel: string;
    operatorName: string;
    operatorPlaceholder: string;
    commsAddress: string;
    commsPlaceholder: string;
    registerBtn: string;
    footerDisclaimer: string;
    successTitle: string;
    successMessage: string;
    ticketLabel: string;
    operatorLabel: string;
    sectorsReserved: string;
    launchMatrix: string;
    timingAssignment: string;
    terminateBtn: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  ro: {
    navbar: {
      logo: "ALGORITM",
      levels: "Niveluri",
      syllabus: "Curriculum",
      features: "Beneficii",
      target: "TINTĂ",
      admissionOpen: "ADMITERE DESCHISĂ"
    },
    hero: {
      phases: {
        beginner: "FAZA I // EMBRIOLOGIE COMPUTAȚIONALĂ",
        middle: "FAZA II // SINTEZĂ DE STRUCTURI ABSTRACTE",
        senior: "FAZA III // ARHITECTURI DE COMPILATOARE NEURALE"
      },
      code: "COD",
      beyond: "DINCOLO",
      description: "Nu învăța doar sintaxă. Stăpânește arhitectura logicii, sistemele și algoritmii critici de înaltă performanță care guvernează marile imperii tehnologice.",
      graduatesHired: "ABSOLVENȚI ANGAJAȚI",
      expertMentorship: "MENTORAT INDIVIDUAL DE EXPERȚI",
      ratingOnG2: "EVALUARE PE G2",
      startJourney: "Începe Călătoria",
      viewSyllabus: "Vezi Curriculumul",
      exploreMatrix: "EXPLOREAZĂ MATRICEA"
    },
    levelSelector: {
      title: "ALEGE NIVELUL TĂU",
      tagline: "Stabilește unde se află capacitățile tale computaționale actuale și glisează pentru a adapta interfața, rețelele de noduri și studiile la vectorii tăi de carieră.",
      dragMesh: "GLISEAZĂ REȚEAUA",
      syllabusFocus: "Syllabus Focus",
      salaryVector: "VECTOR SALARIU",
      courseDepth: "DURATA CURSULUI",
      coreTechHeading: "Tehnologii Core & Abilități",
      projectBadge: "PROIECT CAPSTONE DE GRADUARE",
      caps: "Syllabus Focus",
      complexityLabel: "COMPLEXITATE",
      latencyLabel: "LATENȚĂ",
      complexityB: "BĂZĂ",
      complexityM: "INTERMEDIAR",
      complexityS: "EXPONENȚIAL",
      levels: {
        beginner: {
          level: "beginner",
          title: "Începător",
          subTitle: "FUNDAMENTE // NUCLEUL COMPUTAȚIONAL",
          description: "Construiește fundamentul intelectual al instrucțiunilor mașină. Explorează limitele memoriei, alocarea pointerilor în segmente de memorie brută, euristici recursive și complexitatea algoritmilor (notația Big O).",
          salaryLevel: "15 000 - 25 000 MDL / lună",
          termDuration: "12 Săptămâni (Linie de bază)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "Limbajul C", iconName: "Cpu", description: "Memorie manuală, pointeri" },
            { name: "Python", iconName: "Code2", description: "Prototipuri de algoritmi și OOP" },
            { name: "Git Core", iconName: "Terminal", description: "Registru distribuit low-level" },
            { name: "Structuri Date", iconName: "Sliders", description: "Cozi, Liste, Arbori" }
          ],
          featuredProject: {
            name: "C-Stack VM Emulator",
            description: "Produce o mașină virtuală de tip stivă ultra-rapidă în C. Sistemul tău procesează microcod binar personalizat, implementează regiștri și gestionează depășirile aritmetice nativ.",
            specs: ["Fără scurgeri de memorie în heap", "Indicatori la depășire de stivă", "Opcode-uri de 5 microsecunde"]
          }
        },
        middle: {
          level: "middle",
          title: "Intermediar",
          subTitle: "CONCURENȚĂ // INTEGRARE DE SISTEME COMPLEXE",
          description: "Scalați rețele de cod. Treceți de la execuția procedurală la paralelismul concurent orizontal. Proiectați cozi asincrone sigure la fire de execuție, structuri tranzacționale, algoritmi de indexare de căutare și noduri TCP de rețea personalizate.",
          salaryLevel: "35 000 - 55 000 MDL / lună",
          termDuration: "24 Săptămâni (Linie de bază)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "Go / Golang", iconName: "Code2", description: "Planificatori Mux, canale" },
            { name: "C++", iconName: "Cpu", description: "Așezare obiecte de înaltă performanță" },
            { name: "Docker & Linux", iconName: "Sliders", description: "Containere virutale & namespace-uri" },
            { name: "Ruta de Grafuri", iconName: "Award", description: "Dijkstra, A* și euristici" }
          ],
          featuredProject: {
            name: "Router Hyper-TCP Socket",
            description: "Construiește un proxy de rutare TCP cu alocare zero de la zero. Gestionează peste 100K+ conexiuni simultane în timp ce administrează cozile de socket-uri sub concurență intensă.",
            specs: ["Concurență cu canale Go", "Rute proxy Dijkstra în timp real", "Hop-uri de pachete sub 1ms"]
          }
        },
        senior: {
          level: "senior",
          title: "Senior Core",
          subTitle: "TRADUCĂTOR SINTAXĂ // COMPILATOARE CYBER & RETELE LOW-LEVEL",
          description: "Stăpânește arta întunecată a compilării. Transformă secvențele lexicale în arbori sintactici abstracți. Gestionează optimizări de compilator, analizoare AST, compilări WebAssembly, rutine de kernel și arhitecturi de virtualizare a memoriei.",
          salaryLevel: "70 000 - 110 000+ MDL / lună",
          termDuration: "36 Săptămâni (Linie de bază)",
          highlightColor: "text-cyan-400",
          techStack: [
            { name: "Rust", iconName: "Shield", description: "Siguranță memorie la compilare" },
            { name: "Assembly / LLVM", iconName: "Cpu", description: "Compilator asamblare optimizat" },
            { name: "Core Kubernetes", iconName: "Sliders", description: "Stare rețea distribuită" },
            { name: "Matematici Neurale", iconName: "Zap", description: "Algebră matriceală de la zero" }
          ],
          featuredProject: {
            name: "Platforma Compilator TitanLex",
            description: "Construiește un traducător de limbaj care analizează expresii tipizate și generează instrucțiuni LLVM IR optimizate sau cod WebAssembly fără runtime-uri grele.",
            specs: ["Nivel de analiză lexicală", "Optimizare mapare regiștri", "Compilare module Wasm"]
          }
        }
      }
    },
    scheduleCalculator: {
      liveIndicator: "CALCULATOR LIVE",
      title: "Configurator de Ritm Adaptiv",
      description: "Recunoaștem că programele standard sunt prea rigide. Ajustează numărul de ore săptămânale și data de lansare. Motorul nostru neural va recalcula calendarul complet modul cu modul.",
      weeklyAllocation: "ALOCARE SĂPTĂMÂNALĂ",
      commencementDate: "DATA ÎNCEPERII",
      minLabel: "MIN: 4H (Lejer)",
      maxLabel: "MAX: 24H (Heavy Metal)",
      studyIntensityProfile: "PROFIL INTENSITATE STUDIU",
      totalDuration: "DURATĂ TOTALĂ ESTIMATĂ",
      totalHours: "ore în total",
      gradVector: "VECTOR DE GRADUARE",
      paceLabel: "În ritmul actual",
      intensities: {
        casual: {
          label: "ADAPTOR LEJER (CASUAL ADAPTER)",
          desc: "Ideal pentru ingineri cu normă întreagă care dețin joburi active în timpul zilei. Traiectorie lentă, dar sigură."
        },
        balanced: {
          label: "ARHITECT BALANSAT (BALANCED ARCHITECT)",
          desc: "Calea de aur optimă. Echilibru standard pentru dezvoltarea memoriei musculare computaționale rapide."
        },
        grindcore: {
          label: "GRINDCORE CYBERNETIC (CYBER DEV GRINDCORE)",
          desc: "Intensitate ridicată. Concentrare accelerată pentru recalibrarea rapidă a carierei tale în tehnologia dintr-un circuit direct."
        },
        overload: {
          label: "SUPRAÎNCĂRCARE SINTACTICĂ (SYNTACTIC OVERLOAD)",
          desc: "Imersiune mentală absolută. Pentru cei ce trăiesc, respiră și compilează instrucțiuni assembler și kernel-uri."
        }
      }
    },
    syllabus: {
      adaptiveLearningFlow: "FLUX DE ÎNVĂȚARE ADAPTIV",
      title: "Curriculum & Plan de Studiu",
      description: "Programa noastră este concepută exclusiv pentru stăpânirea de înalt nivel. Vezi modulele arhitecturale care actualizează automat datele cheie în funcție de ritmul tău activ.",
      standardHours: "ore standard",
      weeksTotal: "Săptămâni în total",
      theory: "TEORIE: Dive-uri 45m",
      practice: "PRACTICĂ: Provocări",
      homework: "TEME: Cod Review",
      groupWork: "LUCRU ÎN GRUP: Sprints",
      lectureSandbox: "Sub-lecții și subiecte de laborator",
      modules: [
        {
          id: "m1",
          title: "Fundamente Computaționale & Arene de Pointeri",
          phase: "FAZA I // MEMORY CORE",
          description: "Descoperă mecanismele brute ale computerului. Explorează programarea procedurală structurată, alocările manuale în heap, pointerii și limitele de siguranță ale segmentului de stivă.",
          baseHours: 40,
          hoursTheory: 12,
          hoursPractice: 14,
          hoursHomework: 8,
          hoursGroupWork: 6,
          detailedLessons: [
            "Anatomia Memoriei: Structura stivei, date statice, regiștri și segmente de Heap.",
            "Pointeri & Indirecție Dinamică: Pointeri dubli, pointeri la funcții și offset aritmetic manual.",
            "Motor de alocare Heap: Scrierea manuală a funcțiilor malloc() și free() pentru controlul fragmentării hardware.",
            "Securitate în Cod: Buffer overflow, validarea limitelor și prevenirea erorilor de tip segmentation fault."
          ]
        },
        {
          id: "m2",
          title: "Scheme Abstracte, Indexuri Cheie și Arbori",
          phase: "FAZA II // CONSTELAȚII DE DATE",
          description: "Configurează hărți avansate de memorie. Stăpânește arborii binari de căutare auto-echilibrați, coliziunile de hash-uri, rotațiile de arbori și căutările rapide.",
          baseHours: 50,
          hoursTheory: 15,
          hoursPractice: 18,
          hoursHomework: 10,
          hoursGroupWork: 7,
          detailedLessons: [
            "Vectori Dinamici: Euristici optime de redimensionare cu performanță amortizată O(1).",
            "Rezolvitori de coliziuni Hash: Linear probing vs chaining sub factori severi de încărcare.",
            "Arbori Binari Echilibrați: Codarea sistemelor AVL și Red-Black de la zero.",
            "Compresii Huffman: Construirea arborilor spațiali pentru serializarea fișierelor."
          ]
        },
        {
          id: "m3",
          title: "Constelații de Grafuri și Rutare de Înaltă Performanță",
          phase: "FAZA III // REȚELE DE VERTICE",
          description: "Hărți pe dimensiuni spațiale. Aplică algoritmii Dijkstra și A* pentru coordinarea de pachete și transmisiuni de volum.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "Liste de adiacență & Matrice rare: Compromisul dintre spațiu structural și latența legăturilor.",
            "Trasee Spațiale Optimizate: Codarea Dijkstra, Bellman-Ford și A* pentru fluxuri în timp real.",
            "Poduri interconectate: Algoritmii Prim și Kruskal de spanning tree.",
            "Gâtuiri în rețea: Teoreme de tăiere maximă / flux maxim și calculul conexivității."
          ]
        },
        {
          id: "m4",
          title: "Conducte Asincrone și Cozi Concurente",
          phase: "FAZA IV // EXECUȚIE CONCURENTĂ",
          description: "Comandă fire paralele. Coordonează canale non-blocante, semafoare mutex, pool-uri de fire de execuție și fire ring-buffer circulare.",
          baseHours: 70,
          hoursTheory: 22,
          hoursPractice: 24,
          hoursHomework: 14,
          hoursGroupWork: 10,
          detailedLessons: [
            "Euristica de Concurență: Coordonarea firelor de execuție, bariere de instrucțiuni.",
            "Ring-Buffers Circulare: Crearea de cozi de stream lock-free pentru admisia de pachete în timp real.",
            "Epoll & Non-Blocking IO: Conectarea la evenimente de kernel din Linux pentru cereri multiple TCP.",
            "Planificatori fire thread: Asamblarea pool-urilor de sarcini ce distribuie incarcarea masiv."
          ]
        },
        {
          id: "m5",
          title: "Construcția de Compilatoare și Cod LLVM Assembler",
          phase: "FAZA V // COD GENERATIV INFRASTRUCTURĂ",
          description: "Construiește translatoare de limbaj. Proiectează analizoare lexicale, arbori de sintaxă abstractă (AST), analize tip-safety și cod mașină optimizat.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "Scannere Tokenize: Formularea automatelor finite deterministe (DFA).",
            "Parser-i cu coborâre recursivă: Generarea ierarhiilor AST pentru expresii complexe.",
            "Validare inferență tip: Verificări statice intermediare pe arbori.",
            "Emitere Cod LLVM: Generare de cod binar nativ optimizat."
          ]
        }
      ]
    },
    featureGrid: {
      title: "ECOSISTEM DE ÎNALTĂ PERFORMANȚĂ",
      description: "Mediul nostru este optimizat pentru pregătirea specialiștilor computaționali de elită. Descoperă pilonii noștri de studiu cu viteză optimă.",
      cards: [
        {
          id: "individual",
          title: "Abordare Individuală",
          badge: "LIMITĂ COHORTĂ: 40",
          description: "Nu ești o simplă statistică. Fiecare student înscris primește evaluări de cod personale. Programează alături de arhitecți dedicați care îți analizează complexitatea proiectului linie cu linie.",
          bullets: [
            "Audituri GitHub PR personalizate",
            "Sesiuni săptămânale 1:1 screen-share",
            "Latență răspuns cozi standard 4 ore"
          ]
        },
        {
          id: "schedule",
          title: "Program Flexibil",
          badge: "RE-PLANIFICĂ ACCENT",
          description: "Aliniezi responsabilitățile perfect. Folosește calculatorul nostru live de timp pentru a mări sau reduce intensitatea săptămânală. Îngheață studiile până la 30 de zile fără costuri.",
          bullets: [
            "Opțiuni de pauză cohortă active",
            "Trasee flexibile dinamice",
            "Log-uri de ore office sincrone"
          ]
        },
        {
          id: "access",
          title: "Acces pe Viață",
          badge: "REȚEA EVERGREEN",
          description: "Matricea computațională nu se oprește din evoluție. Obții drepturi permanente pe viață la materialele noastre de syllabus, sandbox-uri de cod interactive și actualizări de algoritmi.",
          bullets: [
            "Revizuiri nelimitate de cursuri",
            "Sandbox terminal access permanent",
            "Interviuri tehnice de simulare"
          ]
        }
      ]
    },
    faq: {
      title: "Parametri Rezolvați Frecvent",
      knowledgeBasis: "BAZĂ DE CUNOȘTINȚE",
      q1: "Există cerințe absolute pentru Faza I?",
      a1: "Nu sunt impuse cerințe stricte. Presupunem doar o alfabetizare logică de bază. Începem cu seturi de instrucțiuni de bază înainte de a urca spre structuri complexe compilate.",
      q2: "Cum calculează calculatorul data de absolvire?",
      a2: "Configuratorul presupune un program intens format din 280 de credite cognitive de inginerie. Mărirea alocării tale săptămânale procesează materialul mai repede, reducând durata.",
      q3: "Pot să pun pe pauză cohortele sau să schimb cursul?",
      a3: "Da. Poți activa opțiunea de pauză în orice punct al calendarului pe o perioadă de până la 30 de zile. Nu se pierde nicio activitate sau urmărire de mentor.",
      q4: "Certificatele de absolvire sunt semnate criptografic?",
      a4: "Absolut. După aprobarea proiectului final, primești un certificat securizat criptografic ce documentează parcursul tău academic, integrabil cu protocoale publice în mod liber."
    },
    conversionBanner: {
      title: "Gata să compilezi nucleul tău?",
      description: "Asigură-ți locul în următoarea cohortă CY-42 care începe ",
      dateHighlight: "18 IUNIE 2026",
      cta: "Inițiază Matricea de Înscriere"
    },
    footer: {
      brandDescription: "Sisteme avansate de formare în Informatică și Știința Calculatoarelor. Proiectat pentru a acoperi decalajul dintre algebra abstractă și execuția low-level.",
      secureStack: "STAC SECURING COMPLIANT ISO_27001",
      nextCohorts: "URMĂTOARELE COHORTE",
      referenceDocs: "DOCUMENTE DE REFERINȚĂ",
      levelSelection: "Matrice Selecție Limite",
      moduleSchedulers: "Planificatori Module",
      supportPillars: "Piloni Susținere Cohortă",
      githubTemplate: "Format Repository GitHub",
      compilerNotifier: "NOTIFICATOR COMPILATOR",
      newsletterDescription: "Primește instrucțiuni de arhitectură hardware, planuri de optimizare a sistemului și actualizări de curs.",
      notifyPlaceholder: "operator@domeniu.com",
      readyBtn: "GATA",
      latitude: "LATITUDINE: 47.0105° N, 28.8638° E // CHIȘINĂU",
      rights: "© 2026 ALGORITHM INC. TOATE DREPTURILE SISTEMULUI SUNT ÎNREGISTRATE.",
      contactHeading: "DATE CONTACT",
      address: "str. Studenților 9/1, MD-2045, Chișinău, Moldova",
      phone: "+373 22 901 234",
      email: "admission@algorithm.md"
    },
    modal: {
      close: "Închide",
      initiateEnroll: "INIȚIERE CHEIE ÎNSCRIERE_LATCH",
      cohort: "COHORTĂ: CY-42",
      selectedSector: "SECTOR SELECTAT",
      estimatedTerm: "DURATA ESTIMATĂ SĂPTĂMÂNAL",
      weeksLabel: "Săp.",
      operatorName: "NUME COMPLET OPERATOR",
      operatorPlaceholder: "ex: Neo Latchmaker",
      commsAddress: "ADRESĂ COMUNICAȚII (EMAIL)",
      commsPlaceholder: "ex: operator@network.io",
      registerBtn: "ÎNREGISTREAZĂ ACCES ÎN COHORTĂ",
      footerDisclaimer: "PRIN TRIMITERE, CONECTEZI DATELE LA COHORTA CY-42. AȘTEAPTĂ BLUEPRINT-UL ÎN MAXIM 12 ORE.",
      successTitle: "ÎNREGISTRARE CHEIE REUȘITĂ",
      successMessage: "Felicitări ! Cererea ta a fost procesată cu succes în coada de execuție CY-42.",
      ticketLabel: "TICKET ALOCARE #331A8",
      operatorLabel: "OPERATOR",
      sectorsReserved: "SECTOARE REZERVATE",
      launchMatrix: "CALENDAR LANSARE MATRICE",
      timingAssignment: "DURATĂ ASSIGNMENT SĂPTĂMÂNĂ",
      terminateBtn: "Termină Ecran Matrice"
    }
  },
  ru: {
    navbar: {
      logo: "ALGORITHM",
      levels: "Уровни",
      syllabus: "Программа",
      features: "Преимущества",
      target: "ЦЕЛЬ",
      admissionOpen: "ПРИЕМ ОТКРЫТ"
    },
    hero: {
      phases: {
        beginner: "ФАЗА I // ВЫЧИСЛИТЕЛЬНАЯ ЭМБРИОЛОГИЯ",
        middle: "ФАЗА II // СИНТЕЗ АБСТРАКТНЫХ СТРУКТУР",
        senior: "ФАЗА III // АРХИТЕКТУРА НЕЙРОННЫХ КОМПИЛЯТОРОВ"
      },
      code: "КОД",
      beyond: "ВНЕ ГРАНИЦ",
      description: "Не просто учите синтаксис. Освойте архитектуру логики, систем и критически важных по производительности алгоритмов, которые управляют цифровыми империями.",
      graduatesHired: "А Graduates трудоустроены",
      expertMentorship: "1:1 Экспертный менторинг",
      ratingOnG2: "Рейтинг на G2",
      startJourney: "Начать Путь",
      viewSyllabus: "Программа Обучения",
      exploreMatrix: "ИССЛЕДОВАТЬ МАТРИЦУ"
    },
    levelSelector: {
      title: "ВЫБЕРИТЕ СВОЙ УРОВЕНЬ",
      tagline: "Оцените свои текущие вычислительные возможности и настройте интерактивный режим, сетку узлов и программу обучения под свои карьерные цели.",
      dragMesh: "ПЕРЕТАЩИТЕ СЕТКУ",
      syllabusFocus: "Фокус программы",
      salaryVector: "ВЕКТОР ЗАРПЛАТЫ",
      courseDepth: "ГЛУБИНА КУРСА",
      coreTechHeading: "Ключевые технологии и навыки",
      projectBadge: "ДИПЛОМНЫЙ ВЫПУСКНОЙ ПРОЕКТ CAPSTONE",
      caps: "Фокус программы",
      complexityLabel: "СЛОЖНОСТЬ",
      latencyLabel: "ЗАДЕРЖКА",
      complexityB: "БАЗОВЫЙ",
      complexityM: "СРЕДНИЙ",
      complexityS: "ЭКСПОНЕНЦИАЛЬНЫЙ",
      levels: {
        beginner: {
          level: "beginner",
          title: "Начинающий",
          subTitle: "ФУНДАМЕНТ // ВЫЧИСЛИТЕЛЬНОЕ ЯДРО",
          description: "Заложите прочный интеллектуальный фундамент низкоуровневых инструкций. Разберитесь в тонкостях управления памятью, адресации указателей в необработанных сегментах кучи, рекурсивных алгоритмах и оценке сложности (нотация Big O).",
          salaryLevel: "15 000 - 25 000 MDL / месяц",
          termDuration: "12 Недель (Базовый темп)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "Язык C", iconName: "Cpu", description: "Ручная память, указатели" },
            { name: "Python", iconName: "Code2", description: "Прототипирование алгоритмов и ООП" },
            { name: "Git Core", iconName: "Terminal", description: "Низкоуровневая распределенная система" },
            { name: "Структуры данных", iconName: "Sliders", description: "Очереди, Списки, Деревья" }
          ],
          featuredProject: {
            name: "Эмулятор стековой виртуальной машины C-Stack",
            description: "Напишите миниатюрную стековую виртуальную машину на C. Ваша система будет разбирать кастомный бинарный микрокод, реализовывать регистры команд и управлять арифметическим переполнением.",
            specs: ["Отсутствие утечек памяти в куче", "Флаги переполнения стека", "Операции за 5 микросекунд"]
          }
        },
        middle: {
          level: "middle",
          title: "Средний",
          subTitle: "МНОГОПОТОЧНОСТЬ // СИСТЕМНАЯ ИНТЕГРАЦИЯ",
          description: "Масштабируйте сетевые архитектуры. Перейдите от последовательного выполнения задач к горизонтальному параллелизму и конкурентности. Напишите потокобезопасные асинхронные очереди, транзакционные структуры и собственные TCP-маршрутизаторы.",
          salaryLevel: "35 000 - 55 000 MDL / месяц",
          termDuration: "24 Недели (Базовый темп)",
          highlightColor: "text-emerald-400",
          techStack: [
            { name: "Go / Golang", iconName: "Code2", description: "Горутины, каналы и планировщики" },
            { name: "C++", iconName: "Cpu", description: "Высокопроизводительные структуры объектов" },
            { name: "Docker & Linux", iconName: "Sliders", description: "Изолированные контейнеры и неймспейсы" },
            { name: "Маршрутизация", iconName: "Award", description: "Алгоритмы Дейкстры, A* и эвристики" }
          ],
          featuredProject: {
            name: "Маршрутизатор сокетов Hyper-TCP",
            description: "Разработайте с нуля прокси-сервер на TCP без выделения динамической памяти (zero-allocation). Поддерживает 100K+ одновременных подключений в условиях сильной конкуренции потоков.",
            specs: ["Конкурентность на каналах Go", "Прокси-маршрут Дейкстры в реальном времени", "Передача пакетов менее 1мс"]
          }
        },
        senior: {
          level: "senior",
          title: "Профессиональный ядро",
          subTitle: "ТРАНСЛЯТОРЫ СИНТАКСИСА // КИБЕР-КОМПИЛЯТОРЫ И ЖЕЛЕЗО",
          description: "Освойте темные искусства компиляции. Напишите систему перевода лексических последовательностей в абстрактные синтаксические деревья (AST). Изучите оптимизации кода, сборку в WebAssembly, низкоуровневые системные вызовы и виртуализацию памяти.",
          salaryLevel: "70 000 - 110 000+ MDL / месяц",
          termDuration: "36 Недель (Базовый темп)",
          highlightColor: "text-cyan-400",
          techStack: [
            { name: "Rust", iconName: "Shield", description: "Безопасность памяти без GC" },
            { name: "Assembly / LLVM", iconName: "Cpu", description: "Оптимизированный ассемблер" },
            { name: "Swarm Kubernetes", iconName: "Sliders", description: "Распределенные оркестраторы" },
            { name: "Линейная алгебра нейросетей", iconName: "Zap", description: "Матричная математика с нуля" }
          ],
          featuredProject: {
            name: "Платформа компиляции TitanLex",
            description: "Постройте транслятор языка программирования, который разбирает типизированные выражения и компилирует их в высокооптимизированный машинный байт-код LLVM IR или WebAssembly.",
            specs: ["Лексический токенайзер", "Карта распределения регистров", "Результирующий модуль Wasm"]
          }
        }
      }
    },
    scheduleCalculator: {
      liveIndicator: "ИНТЕРАКТИВНЫЙ РАСЧЕТ",
      title: "Конфигуратор адаптивного темпа",
      description: "Мы знаем, что жесткие учебные программы устарели. Настройте количество учебных часов в неделю и желаемую дату старта. Наша система мгновенно пересчитает расписание по каждому модулю.",
      weeklyAllocation: "ЧАСОВ В НЕДЕЛЮ",
      commencementDate: "ДАТА СТАРТА ОБУЧЕНИЯ",
      minLabel: "МИН: 4ч (Постепенный)",
      maxLabel: "МАКС: 24ч (Интенсив)",
      studyIntensityProfile: "ПРОФИЛЬ ИНТЕНСИВНОСТИ",
      totalDuration: "ПРОГНОЗИРУЕМЫЙ СРОК ОБУЧЕНИЯ",
      totalHours: "всего академических часов",
      gradVector: "ДАТА ВЫПУСКА",
      paceLabel: "При текущем темпе",
      intensities: {
        casual: {
          label: "ПЛАВНЫЙ АДАПТЕР (CASUAL ADAPTER)",
          desc: "Идеально подходит для специалистов с активной занятостью. Мягкая и комфортная траектория обучения под контролем менторов."
        },
        balanced: {
          label: "СБАЛАНСИРОВАННЫЙ АРХИТЕКТОР (BALANCED ARCHITECT)",
          desc: "Золотая середина. Оптимальный баланс сил для быстрого закрепления мышечной памяти кодинга низкого уровня."
        },
        grindcore: {
          label: "КИБЕРНЕТИЧЕСКИЙ ГРАЙНДКОР (CYBER DEV GRINDCORE)",
          desc: "Высокая учебная плотность. Ускоренный темп для форсированной перенастройки вашей инженерной карьеры."
        },
        overload: {
          label: "СИНТАКСИЧЕСКАЯ ПЕРЕГРУЗКА (SYNTACTIC OVERLOAD)",
          desc: "Абсолютное погружение разума. Для тех, кто хочет круглыми сутками писать ассемблерный код, ядра систем и компиляторы."
        }
      }
    },
    syllabus: {
      adaptiveLearningFlow: "АДАПТИВНЫЙ УЧЕБНЫЙ ПРОЦЕСС",
      title: "Программа обучения и дорожная карта",
      description: "Наш курс спроектирован для достижения глубокой технической экспертизы. Просмотрите учебные модули, даты прохождения которых меняются динамически при изменении параметров интенсивности.",
      standardHours: "стандартных часов",
      weeksTotal: "Недель на модуль",
      theory: "ТЕОРИЯ: Лекции по 45 мин",
      practice: "ПRACTICUM: Проектирование",
      homework: "ДОМАШНИЕ ЗАДАНИЯ: Ревью кода",
      groupWork: "ГРУППОВАЯ РАБОТА: Спринты в Git",
      lectureSandbox: "Темы лекций и практических работ в песочнице",
      modules: [
        {
          id: "m1",
          title: "Вычислительные основы и арены указателей",
          phase: "ФАЗА I // ЯДРО ПАМЯТИ",
          description: "Исследуйте архитектуру машины изнутри. Изучите организацию стека программ, ручное выделение памяти в куче, адресную арифметику указателей и границы защиты сегментов.",
          baseHours: 40,
          hoursTheory: 12,
          hoursPractice: 14,
          hoursHomework: 8,
          hoursGroupWork: 6,
          detailedLessons: [
            "Анатомия памяти: Распределение стека, статических данных, регистров процессора и сегментов кучи.",
            "Указатели и косвенная адресация: Двойные указатели, указатели на функции, адресная арифметика.",
            "Движок кучи: Реализация кастомных функций aloc/free для борьбы с фрагментацией физической памяти.",
            "Безопасная разработка: Борьба с переполнением буфера, валидация границ выделения и предотвращение ошибок SIGSEGV."
          ]
        },
        {
          id: "m2",
          title: "Абстрактные схемы, ключевые индексы и деревья",
          phase: "ФАЗА II // СОЗВЕЗДИЯ ДАННЫХ",
          description: "Научитесь проектировать сложные карты памяти. Освойте самобалансирующиеся бинарные деревья поиска, разрешения коллизий хэширования, вращения деревьев и быстрый поиск по ключам.",
          baseHours: 50,
          hoursTheory: 15,
          hoursPractice: 18,
          hoursHomework: 10,
          hoursGroupWork: 7,
          detailedLessons: [
            "Динамические массивы Vector: Алгоритмы оптимального перевыделения емкости с амортизированным O(1).",
            "Хэш-карты: Линейное пробирование против цепочек связанных списков в условиях высокой нагрузки.",
            "Сбалансированные деревья: Написание кода систем автоматической балансировки AVL и Red-Black деревьев с нуля.",
            "Алгоритмы сжатия Хаффмана: Проектирование структуры префиксного дерева для сериализации."
          ]
        },
        {
          id: "m3",
          title: "Созвездия графов и высокоскоростная маршрутизация",
          phase: "ФАЗА III // ВЕРШИННЫЕ СЕТИ",
          description: "Переносите топологии сетей в код. Реализуйте алгоритмы Дейкстры и A* на сложных сетях для быстрого распределения информационных потоков без потерь.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "Списки смежности и разреженные матрицы: Архитектурные компромиссы между размером операнда и скоростью трассировки.",
            "Поиск оптимальных путей: Написание алгоритмов Dijkstra, Bellman-Ford и A* для активных транспортных сетей.",
            "Покрывающие деревья: Алгоритмы Прима и Краскала для построения магистралей связи.",
            "Узкие места сети: Теорема о максимальном потоке / минимальном разрезе."
          ]
        },
        {
          id: "m4",
          title: "Асинхронные конвейеры и пулы конкурентности",
          phase: "ФАЗА IV // КОНКУРЕНТНОЕ ВЫПОЛНЕНИЕ",
          description: "Управляйте параллельными мощностями. Настраивайте неблокирующие каналы передачи данных, семафоры взаимного исключения (mutex) и кольцевые буферные очереди.",
          baseHours: 70,
          hoursTheory: 22,
          hoursPractice: 24,
          hoursHomework: 14,
          hoursGroupWork: 10,
          detailedLessons: [
            "Многопоточность: Координация потоков выполнения, атомарные регистры, барьеры памяти.",
            "Циклические кольцевые буферы: Построение lock-free потоков данных для высокочастотного приема пакетов.",
            "Epoll и неблокирующий ввод-вывод: Использование подсистем ядра Linux для эффективного чтения сетевых сокетов.",
            "Диспетчеры задач: Написание собственного планировщика для пула потоков сбалансированной нагрузки."
          ]
        },
        {
          id: "m5",
          title: "Создание компиляторов и генерация нативного кода LLVM",
          phase: "ФАЗА V // МАШИННЫЙ КОД И ИНФРАСТРУКТУРА",
          description: "Разработайте транслятор исходного кода. Спроектируйте лексический сканер, парсер абстрактного синтаксического дерева (AST), валидатор статической типизации и генератор ассемблерного кода LLVM IR.",
          baseHours: 60,
          hoursTheory: 18,
          hoursPractice: 20,
          hoursHomework: 12,
          hoursGroupWork: 10,
          detailedLessons: [
            "Лексические сканеры: Построение конечных детерминированных автоматов (DFA) для токенов.",
            "Парсеры рекурсивного спуска: Сборка синтаксического дерева для вложенных условных конструкций.",
            "Контроллеры типов данных: Проверка логической согласованности на промежуточных этапах компиляции.",
            "Генерация кода: Выпуск нативной ассемблерной сборки машинных инструкций LLVM."
          ]
        }
      ]
    },
    featureGrid: {
      title: "ЭКОСИСТЕМА ВЫСОКОЙ ПРОИЗВОДИТЕЛЬНОСТИ",
      description: "Наша среда разработки оптимизирована для подготовки инженеров экстра-класса. Узнайте, на каких принципах строится глубокое усвоение материала в индивидуальном темпе.",
      cards: [
        {
          id: "individual",
          title: "Индивидуальный подход",
          badge: "ЦЕНЗ НА НАБОР: 40 ЧЕЛОВЕК",
          description: "Вы не станете строкой в общей статистике. Наша система гарантирует детальный код-ревью для каждого студента. Разбирайте логику своего проекта строка за строкой с опытными архитекторами.",
          bullets: [
            "Персональный аудит ваших GitHub PR",
            "Еженедельные 1:1 сессии с показом экрана",
            "Стандартный лимит ожидания в очереди — 4 часа"
          ]
        },
        {
          id: "schedule",
          title: "Адаптивное расписание",
          badge: "ПЛАВАЮЩИЙ ГРАФИК",
          description: "Сбалансируйте учебу с основной работой без стресса. Используйте график-калькулятор, чтобы увеличить или сократить учебные часы. Замораживайте обучение без штрафных потерь до 30 дней.",
          bullets: [
            "Опция временной заморозки программы",
            "Динамический расчет дедлайнов модулей",
            "Синхронные часы консультаций с экспертами"
          ]
        },
        {
          id: "access",
          title: "Пожизненный доступ",
          badge: "ВЕЧНОЗЕЛЕНАЯ СЕТЬ",
          description: "Мир информатики постоянно меняется. Вы получаете неограниченный временем доступ ко всем обновлениям материалов силлабуса, интерактивным песочницам кода и закрытым сообществам навсегда.",
          bullets: [
            "Регулярные обновления модулей и теории",
            "Полный доступ к консольным песочницам",
            "Бессрочное участие в тестовых собеседованиях"
          ]
        }
      ]
    },
    faq: {
      title: "Часто решаемые вопросы",
      knowledgeBasis: "БАЗА ЗНАНИЙ",
      q1: "Нужна ли математическая или начальная подготовка для Фазы I?",
      a1: "Обязательных жестких требований нет. Мы полагаемся на базовую логическую грамотность. Обучение начинается с элементарных инструкций микропроцессоров перед переходом к крупномасштабным компилируемым системам.",
      q2: "Как калькулятор учебных часов высчитывает дату окончания?",
      a2: "Конфигуратор закладывает 280 академических часов интенсивных практических занятий. Увеличение нагрузки обрабатывает модули быстрее, сдвигая вектор выпуска ближе к текущей дате.",
      q3: "Могу ли я взять академический отпуск или изменить вектор?",
      a3: "Да. Вы можете поставить программу на паузу в любой момент срока обучения на период до 30 дней. Все решенные задачи, история переписок и треки наставников сохранятся в вашем профиле.",
      q4: "Сертификаты об окончании курса заверяются криптографически?",
      a4: "Безусловно. После успешной сдачи итогового дипломного проекта вы получите уникальный криптографический NFT-сертификат, который можно легко проверить через публичные реестры."
    },
    conversionBanner: {
      title: "Готовы скомпилировать свое ядро логики?",
      description: "Забронируйте место в предстоящем наборе когорты CY-42, который начнется ",
      dateHighlight: "18 ИЮНЯ 2026 ГОДА",
      cta: "Инициализировать матрицу зачисления"
    },
    footer: {
      brandDescription: "Углубленная практическая подготовка системных инженеров и программистов. Создана для преодоления барьера между сухой алгеброй и реальной физикой процессов в процессоре.",
      secureStack: "СООТВЕТСТВИЕ СТАНДАРТУ БЕЗОПАСНОСТИ ISO_27001",
      nextCohorts: "БЛИЖАЙШИЕ НАБОРЫ",
      referenceDocs: "СПРАВОЧНЫЕ МАТЕРИАЛЫ",
      levelSelection: "Матрица выбора уровней",
      moduleSchedulers: "Калькуляторы прохождения",
      supportPillars: "Три кита поддержки когорты",
      githubTemplate: "Заготовки репозиториев на GitHub",
      compilerNotifier: "УВЕДОМЛЕНИЯ КОМПИЛЯТОРА",
      newsletterDescription: "Получайте схемы оптимизации низкоуровневого кода, чек-листы по разработке на C/Rust и анонсы курсов.",
      notifyPlaceholder: "operator@domain.com",
      readyBtn: "ГОТОВО",
      latitude: "ШИРОТА: 47.0105° N, 28.8638° E // КИШИНЕВ",
      rights: "© 2026 ALGORITHM INC. ВСЕ ПРАВА НА СИСТЕМНЫЕ ПРОЦЕДУРЫ ЗАЩИЩЕНЫ.",
      contactHeading: "КОНТАКТНЫЕ ДАННЫЕ",
      address: "ул. Студенческая 9/1, MD-2045, Кишинев, Молдова",
      phone: "+373 22 901 234",
      email: "admission@algorithm.md"
    },
    modal: {
      close: "Закрыть",
      initiateEnroll: "ИНИЦИАЛИЗАЦИЯ КЛЮЧА ЗАЧИСЛЕНИЯ_REGLATCH",
      cohort: "КОГОРТА: CY-42",
      selectedSector: "ВЫБРАННЫЙ СЕКТОР",
      estimatedTerm: "ОЦЕНОЧНОЕ ВРЕМЯ НА ОБУЧЕНИЕ",
      weeksLabel: "Нед.",
      operatorName: "ПОЛНОЕ ИМЯ ОПЕРАТОРА",
      operatorPlaceholder: "например, Нео Лачмейкер",
      commsAddress: "АДРЕС СВЯЗИ (EMAIL)",
      commsPlaceholder: "например, operator@network.io",
      registerBtn: "ЗАФИКСИРОВАТЬ ВХОД В КОГОРТУ",
      footerDisclaimer: "ОТПРАВЛЯЯ ДАННЫЕ, ВЫ РЕГИСТРИРУЕТЕСЬ В ОЧЕРЕДИ РАСПРЕДЕЛЕНИЯ КОГОРТЫ CY-42. НАПРАВЛЕНИЯ ПРИДУТ В ТЕЧЕНИЕ 12 ЧАСОВ.",
      successTitle: "КЛЮЧ НАБОРА УСПЕШНО ЗАРЕГИСТРИРОВАН",
      successMessage: "Приветствуем. Ваш запрос успешно добавлен в очередь обработки набора когорты CY-42.",
      ticketLabel: "БИЛЕТ РАСПРЕДЕЛЕНИЯ #331A8",
      operatorLabel: "ОПЕРАТОР",
      sectorsReserved: "ЗАБРОНИРОВАННЫЕ НАПРАВЛЕНИЯ",
      launchMatrix: "КАЛЕНДАРЬ ЗАПУСКА СИСТЕМЫ",
      timingAssignment: "ВЫДЕЛЯЕМОЕ ВРЕМЯ В НЕДЕЛЮ",
      terminateBtn: "Закрыть терминал матрицы"
    }
  }
};
