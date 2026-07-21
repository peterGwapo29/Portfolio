const projectScreenshotModules = import.meta.glob(
  "../images/project/**/*.{png,jpg,jpeg,webp,gif}",
  { eager: true }
);

const projectVideoModules = import.meta.glob(
  "../images/project/**/*.{mp4,webm}",
  { eager: true }
);

const THUMBNAIL_ORDER = ["00.png", "01.png", "0.png", "thumbnail.png", "cover.png", "p1.png"];
const VIDEO_FILES = new Set(["01.mp4", "01.webm", "preview.mp4"]);

const findThumbnailEntry = (entries) => {
  for (const name of THUMBNAIL_ORDER) {
    const entry = entries.find(
      ([path]) => (path.split("/").pop() || "").toLowerCase() === name
    );
    if (entry) return entry;
  }
  return null;
};

const getOrderKey = (path) => {
  const file = path.split("/").pop() || "";
  const name = file.split(".")[0].toLowerCase();
  
  const num = parseInt(name, 10);
  if (!Number.isNaN(num) && (String(num) === name.replace(/^0+/, "") || name === "0" || name === "00")) {
    return num;
  }

  const prefixMatch = name.match(/^([a-z]+)(\d+)$/);
  if (prefixMatch) {
    const prefix = prefixMatch[1];
    const val = parseInt(prefixMatch[2], 10);
    const prefixWeight = prefix === "p" ? 100 : prefix === "s" ? 200 : 300;
    return prefixWeight + val;
  }

  return 999999;
};

const sortScreenshotPaths = (entries) => {
  return entries
    .sort(([a], [b]) => getOrderKey(a) - getOrderKey(b))
    .map(([, mod]) => mod.default);
};

export const buildProjectAssets = (modules) => {
  const grouped = {};

  for (const [path, mod] of Object.entries(modules)) {
    const parts = path.split("/");
    const folder = parts[parts.length - 2];
    if (!folder || folder === "project") continue;

    if (!grouped[folder]) grouped[folder] = [];
    grouped[folder].push([path, mod]);
  }

  const thumbnails = {};
  const screenshotSets = {};

  for (const [folder, entries] of Object.entries(grouped)) {
    const thumbnailEntry = findThumbnailEntry(entries);
    const carouselEntries = thumbnailEntry
      ? entries.filter(([path]) => path !== thumbnailEntry[0])
      : entries;
    const carouselImages = sortScreenshotPaths(carouselEntries);

    if (thumbnailEntry) {
      thumbnails[folder] = thumbnailEntry[1].default;
      screenshotSets[folder] = [thumbnailEntry[1].default, ...carouselImages];
    } else {
      screenshotSets[folder] = carouselImages;
      thumbnails[folder] =
        carouselImages.length > 0 ? carouselImages[0] : null;
    }
  }

  return { thumbnails, screenshotSets };
};

export const buildProjectVideos = (modules) => {
  const videos = {};

  for (const [path, mod] of Object.entries(modules)) {
    const parts = path.split("/");
    const folder = parts[parts.length - 2];
    const file = (path.split("/").pop() || "").toLowerCase();

    if (VIDEO_FILES.has(file) || file.endsWith(".mp4") || file.endsWith(".webm")) {
      videos[folder] = mod.default;
    }
  }

  return videos;
};

export const projectAssets = {
  ...buildProjectAssets(projectScreenshotModules),
  videos: buildProjectVideos(projectVideoModules),
};

export const featuredProjects = [
  {
    id: "wordpress-woocommerce",
    title: "WordPress WooCommerce Store",
    summary:
      "Full-featured WooCommerce eCommerce website with complete store administration, custom AJAX side cart drawer, and customizable authentication forms.",
    description:
      "Developed a fully functional eCommerce website using WordPress and WooCommerce with complete admin management capabilities. The system enables administrators to manage products, categories, brands, inventory, discounts, pricing, customer accounts, and orders efficiently. Integrated Side Cart WooCommerce for a seamless AJAX shopping experience and Login & Register Customizer for modern customer authentication through popup, slider, and inline forms. The website is responsive, user-friendly, and designed to provide an efficient online shopping experience for both customers and administrators.",
    requestNotice:
      "If you would like to see the full project files, database schema, or a live demonstration of this WooCommerce store, please message me directly and I will gladly provide complete project access and proof.",
    features: [
      "Complete WooCommerce Store Management (products, categories, brands, inventory, simple/variable products, SKU)",
      "Product & Discount Management (promotions, scheduling, sale pricing with discount comparison badges)",
      "Custom User Authentication (popup, slider & inline login/register forms with customer profiles)",
      "AJAX Side Cart Experience (slide-out drawer, instant add-to-cart, direct quantity updates & live subtotal)",
      "Admin Order Management (order tracking & status workflow - pending, completed, cancelled, refunded)",
      "Product Organization & Filtering (categorization, tag management, brand management, custom attributes)",
      "WooCommerce Analytics Dashboard (sales overview, customer metrics, revenue reports & inventory monitoring)",
      "Responsive & Secure Design (optimized mobile/tablet shopping interface with protected user data)",
    ],
    icon: "fa-brands fa-wordpress",
    badges: ["WORDPRESS", "WOOCOMMERCE", "AJAX SIDE CART", "E-COMMERCE"],
    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Side Cart WooCommerce Plugin",
      "Login & Register Customizer",
      "Responsive Web Design",
    ],
    links: {
      github: null,
      demo: null,
    },
    screenshotsKey: "wp",
    carouselTitle: "WordPress WooCommerce Screenshots",
    featuredIn: "WordPress eCommerce Showcase",
  },
  {
    id: "cashipay",
    title: "CashiPay Management System",
    summary:
      "Offline-first JavaFX desktop app for treasury management — Top 1 mini capstone with ledger tracking, balance sheets, and dashboard analytics.",
    description:
      "CashiPay Management System is an offline-first desktop application developed using Java, JavaFX, Scene Builder, JDBC, and MySQL. Built as a mini capstone project, it streamlines treasury and financial record management through a secure authentication system, ledger tracking, interactive balance sheets, and responsive dashboard analytics. The application features smooth JavaFX animations, a modern user interface, and efficient CRUD operations to improve usability and simplify daily financial reconciliation.",
    extraDescription:
      "The system was developed following the complete software development lifecycle, from requirements gathering and system design to implementation, testing, and documentation. It includes comprehensive technical documentation covering system architecture, database design, UML diagrams, testing procedures, and user manuals. The project was successfully defended before a panel of evaluators and received Top 1 recognition among all competing capstone projects, demonstrating both its technical quality and practical value.",
    features: [
      "Secure administrator authentication and role-based access",
      "Treasury ledger and financial record management",
      "Interactive balance sheets and financial summaries",
      "Dashboard with real-time statistics and analytics",
      "Full CRUD functionality with MySQL integration",
      "Responsive JavaFX UI with custom animations",
      "Search, filtering, and reporting capabilities",
      "Offline-first architecture for reliable desktop operation",
    ],
    icon: "fa-solid fa-wallet",
    badges: ["TOP 1 CAPSTONE", "MINI CAPSTONE", "OFFLINE-FIRST"],
    tech: ["Java", "JavaFX", "Scene Builder", "MySQL", "JDBC", "CSS", "FXML"],
    links: {
      github: null,
      demo: null,
    },
    screenshotsKey: "cashipay",
    carouselTitle: "CashiPay Application Screenshots",
    featuredIn: "Top 1 Capstone Project / Mini Capstone Defense",
  },
  {
    id: "sapatosan",
    title: "Sapatosan Shop",
    summary:
      "A luxury e-commerce footwear platform featuring full-stack Laravel Blade design, secure role-based admin/user access, and Google Cloud OAuth registration.",
    description:
      "Sapatosan Shop is a premium full-stack e-commerce application developed using PHP, Laravel, Blade templates, and MySQL. Featuring a dark-themed glassmorphic user interface, the system manages role-based access for admins and users. It integrates Google Cloud Console for secure registration/login (Google Sign-In) and implements route middleware to protect shopping carts, wishlists, checkouts, and customer orders.",
    features: [
      "Secure user authentication (Login/Registration) with Google OAuth integration via Google Cloud Console",
      "Interactive customer catalog, search, and dynamic category filters (Basketball, Running, Lifestyle)",
      "Shopping cart, wishlist, checkout flow, and Cash On Delivery (COD) payment processing",
      "Comprehensive Admin Dashboard with order summaries, total sales metrics, and interactive charts",
      "Admin Category Management (CRUD) and Product Catalog controls with image uploading",
      "Admin Order Management with status controls (Pending, Completed) and itemized line-item breakdowns",
      "Protected user routes using Laravel middleware to prevent guest checkout errors",
      "Modern dark-themed glassmorphic design and responsive layout with amber-colored styling accents",
    ],
    icon: "fa-solid fa-store",
    badges: ["LARAVEL CORE", "E-COMMERCE", "GOOGLE CLOUD OAUTH", "ADMIN DASHBOARD"],
    tech: ["Laravel", "Blade", "PHP", "MySQL", "Google Cloud Console", "TailwindCSS", "Postman"],
    links: {
      github: "https://github.com/peterGwapo29/Sapatosan_shop",
      demo: null,
    },
    screenshotsKey: "sapatosan",
    carouselTitle: "Sapatosan E-commerce Screenshots",
    featuredIn: "Laravel Fullstack Showcase / Production Version",
  },
  {
    id: "javafx-pos-system",
    title: "JavaFX POS Management System",
    summary:
      "A desktop Point of Sale (POS) application built with JavaFX and Scene Builder, featuring role-based access, inventory tracking, and CSV reports export.",
    description:
      "JavaFX POS Management System is a robust desktop point-of-sale and inventory control system developed using Java, JavaFX, FXML, Scene Builder, and MySQL. It features a modern dual-role (Admin and User) interface, active transaction processing with search and discounts, a rich administrator dashboard with real-time KPI metrics, detailed product/supplier management, and automated sales reporting with CSV data export.",
    features: [
      "Role-based authentication (Admin/User) to manage dashboard access and sales permissions",
      "Dynamic POS Checkout screen with product catalog searching, cart calculations, discounts, and payment processing",
      "Admin Dashboard with real-time sales stats, transaction logs, sold items tracking, and low-stock alerts",
      "Keyboard shortcut integration (F1-F4) for rapid POS checkout, product entry, reports, and alerts",
      "Comprehensive Product Management with add/import capabilities, supplier pricing, barcodes, SKU tracking, and category grouping",
      "Detailed Sales Ledger and reporting history with start/end date filtering",
      "Spreadsheet export utility enabling admins to export sales and inventory reports to CSV format",
      "Clean modern JavaFX UI with custom FXML layouts, styled using custom CSS stylesheets",
    ],
    icon: "fa-solid fa-cash-register",
    badges: ["JAVAFX DESKTOP", "POINT OF SALE", "INVENTORY SYSTEM", "CSV REPORTS"],
    tech: ["Java", "JavaFX", "Scene Builder", "FXML", "MySQL", "JDBC", "CSS"],
    links: {
      github: "https://github.com/peterGwapo29/POS.git",
      demo: null,
    },
    screenshotsKey: "POS",
    carouselTitle: "POS Application Screenshots",
    featuredIn: "Desktop Application Showcase / Desktop POS Release",
  },
  {
    id: "club-event-management-system",
    title: "Club and Event Management System",
    summary:
      "A Laravel full-stack system for event registration, club membership records, and campus attendance monitoring.",
    description:
      "A secure and comprehensive Laravel full-stack system designed to streamline event registration, club membership records, and attendance monitoring for campus activities.",
    icon: "fa-solid fa-users-gear",
    badges: ["LARAVEL CORE", "SQL DATABASE"],
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    links: {
      github: "https://github.com/peterGwapo29/System",
      demo: null,
    },
    screenshotsKey: "club-event-management-system",
    carouselTitle: "Club and Event Management System Screenshots",
    featuredIn: "University Campus Portal / Beta Testing v2.1",
  },
  {
    id: "click-clutch",
    title: "Click Clutch",
    summary:
      "Responsive esports organization landing site with roster showcases, schedules, and merch — deployed on Vercel.",
    description:
      "A responsive esports organization landing site for a premier esports team — featuring roster showcases, match schedules, merch pages, and a bold competitive brand experience deployed on Vercel.",
    icon: "fa-solid fa-crosshairs",
    badges: ["WEB DEV", "ESPORTS", "VERCEL DEPLOY"],
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    links: {
      github: null,
      demo: "https://click-clutch-o2bawvv5j-petergwapo29s-projects.vercel.app/index.html",
    },
    screenshotsKey: "click-clutch",
    carouselTitle: "Click Clutch Website Screenshots",
    featuredIn: "Esports Team / Organization Landing Site",
    client: "Vann Gumapac",
  },
  {
    id: "gradepad",
    title: "GradePad Student Portal",
    summary:
      "Flutter mobile app for student grade viewing with SQLite offline storage, Firebase sync, and attendance tracking.",
    description:
      "A Flutter mobile app where teachers push grades, scores, and oral marks to students who can only view their records. Built with offline-first SQLite storage and Firebase sync, plus attendance tracking and a to-do list for grading workflows.",
    icon: "fa-solid fa-graduation-cap",
    badges: ["MOBILE APP", "FLUTTER", "OFFLINE/ONLINE SYNC"],
    tech: ["Flutter", "Dart", "SQLite", "Firebase"],
    links: {
      github: null,
      demo: null,
    },
    screenshotsKey: "gradepad",
    carouselTitle: "GradePad Mobile App Screenshots",
    featuredIn: "Academic Grade Management / Student Portal",
  },
  {
    id: "vero",
    title: "Vero Mobile App",
    summary:
      "High-fidelity eco-community mobile UI with event discovery, login flows, and gamified rewards — designed in Figma.",
    description:
      "A high-fidelity mobile UI for an eco-community platform — featuring splash and login flows, event discovery for tree planting and coastal cleanups, and gamified reward badges. Designed in Figma with a clean teal-and-green visual system.",
    icon: "fa-solid fa-leaf",
    badges: ["MOBILE UI", "FIGMA DESIGN", "ECO PLATFORM"],
    tech: ["Figma", "UI/UX Design", "Mobile Prototyping"],
    links: {
      github: null,
      demo: "https://www.figma.com/design/FxsWHsMoLpUbj21FJ7qw0q/vero?node-id=0-1",
    },
    screenshotsKey: "vero",
    carouselTitle: "Vero Mobile App Screenshots",
    featuredIn: "Eco-Community Events / Mobile UI Concept",
  },
];

export const otherProjects = [
  {
    id: "weather-app",
    title: "Weather App",
    category: "WEB APP",
    summary:
      "Interactive weather dashboard fetching real-time APIs with location searches.",
    description:
      "Interactive weather dashboard fetching real-time APIs with location searches.",
    link: "https://weather-app-kappa-gray-93.vercel.app/",
    links: {
      github: null,
      demo: "https://weather-app-kappa-gray-93.vercel.app/",
    },
    screenshotsKey: "weather-app",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    featuredIn: "Web Development / API Integration",
  },
  {
    id: "rog-asus-clone",
    title: "ROG Asus Clone",
    category: "UI DESIGN",
    summary:
      "High-fidelity Figma mockup redesigning the Asus ROG laptop store interface.",
    description:
      "High-fidelity Figma mockup redesigning the Asus ROG laptop store interface.",
    link: "https://www.figma.com/design/OfhqyjbhM92plO7RwZKJtL/Shopping-cart?node-id=142-862",
    links: {
      github: null,
      demo: "https://www.figma.com/design/OfhqyjbhM92plO7RwZKJtL/Shopping-cart?node-id=142-862",
    },
    screenshotsKey: "rog-asus-clone",
    tech: ["Figma", "UI/UX Design"],
    featuredIn: "UI Design / E-commerce Concept",
  },
  {
    id: "payment-transfer-system",
    title: "Payment Transfer System",
    category: "UI DESIGN",
    summary:
      "Web & mobile UI templates for treasury tracking dashboards and transactions.",
    description:
      "Web & mobile UI templates for treasury tracking dashboards and transactions.",
    link: "https://www.figma.com/design/MOYpGEp43Z9tdP2JwtSaAr/Payment-System?node-id=0-1",
    links: {
      github: null,
      demo: "https://www.figma.com/design/MOYpGEp43Z9tdP2JwtSaAr/Payment-System?node-id=0-1",
    },
    screenshotsKey: "payment-transfer-system",
    tech: ["Figma", "UI/UX Design", "Mobile Prototyping"],
    featuredIn: "UI Design / Fintech Concept",
  },
  {
    id: "footprint-travel",
    title: "FootPrint Travel UI",
    category: "UI/UX",
    summary:
      "Interactive itinerary maps and journal timeline pages for a mobile social travel app.",
    description:
      "Interactive itinerary maps and journal timeline pages for a mobile social travel app.",
    link: "https://www.figma.com/design/nFjGBTsfSLcjGocKTC5kWu/Figma-mobile-app?node-id=102-87",
    links: {
      github: null,
      demo: "https://www.figma.com/design/nFjGBTsfSLcjGocKTC5kWu/Figma-mobile-app?node-id=102-87",
    },
    screenshotsKey: "footprint-travel",
    tech: ["Figma", "UI/UX Design", "Mobile Prototyping"],
    featuredIn: "UI/UX / Travel App Concept",
  },
  {
    id: "business-card-concept",
    title: "Business Card Concept",
    category: "GRAPHIC",
    summary:
      "Double-sided premium business card design and digital layouts in Figma.",
    description:
      "Double-sided premium business card design and digital layouts in Figma.",
    link: "https://www.figma.com/design/kBR6R9Mn8vGQ5ajJxAJIw7/mekykbusiness?node-id=0-1",
    links: {
      github: null,
      demo: "https://www.figma.com/design/kBR6R9Mn8vGQ5ajJxAJIw7/mekykbusiness?node-id=0-1",
    },
    screenshotsKey: "business-card-concept",
    tech: ["Figma", "Graphic Design"],
    featuredIn: "Graphic Design / Brand Identity",
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];

export const getProjectById = (id) =>
  allProjects.find((project) => project.id === id);
