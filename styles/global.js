import { v4 as uuidv4 } from "uuid";

//
// Site
export const config = {
  global: {
    logo: "Pavel Z.",
    title: "Consqualif",
  },
  animations: {
    speed: [0.77, 0, 0.175, 1],
    duration: 0.75,
  },
  footer: {
    copyright: "© All rights reserved",
  },
};

// animation inViewScroll
export const fadeInAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

//
// Style
export const colors = {
  // white
  white: "#fff",
  wh: "#ffffff00",
  wh15: "#ffffff15",
  wh50: "#ffffff50",
  // neutral
  black: "#000",
  bl15: "#00000015",
  bl50: "#00000050",
  dark: "#090809",
  // grey
  asphalt: "#868BA1",
  asphaltLight: "#9DA3AE",
  bg: "#F3F4F6",
  // accent
  yellowLight: "#F1EAD1",
  yellow: "#F8C157",
  ruby: "#B00000",
  green: "#67B701",
};

//
// Content
// Selected Works
export const allProjects = [
  // QuantCapital'15
  {
    id: uuidv4(),
    url: "/c/quant-capital",
    content: {
      colors: {
        bg: "#181C1F",
        primary: "#9F8A61",
        white: "#E7E7E7",
        content: "#F8F8F8",
      },
    },
    name: "QuantCapital",
    type: "Banking, Promo page",
    role: "UI/UX, Visual Designer",
    year: "2015",
    imgs: [
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-main.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-logo.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-colors.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-info.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-document.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-logo2.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-service.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/qc/qc-15.png",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/qc/qc-15.png",
  },
  // DV.land'16
  {
    id: uuidv4(),
    url: "/c/dv-land",
    name: "DV.land",
    year: "2016",
    role: "UI/UX Designer",
    type: "Media",
    imgs: [
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/dv/dv-logo.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/dv/dv-main.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/dv/dv-colors.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/dv/dv-logo2.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/dv/dv-publ.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/dv/dv-16-light.png",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/dv/dv-16-light.png",
  },
  // Mediabank'17
  {
    id: uuidv4(),
    url: "/c/mediabank",
    name: "Mediabank",
    year: "2017",
    role: "Product Designer",
    type: "B2B Product",
    imgs: [
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mediabank/mb-main.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mediabank/mb-colors.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mediabank/mb-content.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mediabank/mb-loader.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mediabank/mb-photo.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mediabank/mb-news.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mediabank/media-17.png",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/mediabank/media-17.png",
  },
  // BSWC'18
  {
    id: uuidv4(),
    url: "/c/bswc",
    name: "BSWC",
    year: "2018",
    role: "UI/UX Designer",
    type: "Gallery",
    imgs: [
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/wc-colors.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/wc-album.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/wc-main.png",
      },

      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/wc-people.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/wc-photo-show.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/wc-people2.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/wc-photo.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/bswc/bswc-18.png",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/bswc/bswc-18.png",
  },
  // Conference'19
  {
    id: uuidv4(),
    url: "/c/conference",
    name: "Conference®",
    year: "2019",
    role: "UI/UX Designer",
    type: "Service",
    imgs: [
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/conf/conf-colors.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/conf/conf-main.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/conf/conf-tab.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/conf/conf-mid.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/conf/conf-19.png",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/conf/conf-19.png",
  },
  // Tassovec'20-22
  {
    id: uuidv4(),
    url: "/c/tassovec",
    name: "Tassovec®",
    year: "2020-2022",
    role: "Product Designer",
    type: "Mobile App",
    imgs: [
      {
        id: uuidv4(),
        isVideo: true,
        url: "https://mdh-sepia.vercel.app/cases/tassovec/video/tassovec.mp4",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/tassovec/tass-colors.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/tassovec/tass-system.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/tassovec/tass-menu.png",
      },

      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/tassovec/tass-doc.png",
      },

      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/tassovec/tass-weekend.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/tassovec/tass-bdays.png",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/tassovec/tassovec.png",
  },
  // Cubic'23
  {
    id: uuidv4(),
    url: "/c/cubic",
    name: "Cubic™",
    year: "2023",
    role: "FullStack",
    type: "Dashboard",
    imgs: [
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/cubic/cubic-email-23.png",
      },
      {
        id: uuidv4(),
        isVideo: true,
        url: "https://mdh-sepia.vercel.app/cases/cubic/cubic.mp4",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/cubic/cubic-dashboard-23.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/cubic/cubic-dashboard-23.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/cubic/5.png",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/cubic/cubic-dashboard-23.png",
  },
  // Mapa'24
  {
    id: uuidv4(),
    url: "/c/mapa",
    name: "Mapa™",
    year: "2024",
    role: "FullStack",
    type: "Mobile App",
    imgs: [
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mapa/1.png",
      },
      {
        id: uuidv4(),
        isVideo: true,
        url: "https://mdh-sepia.vercel.app/cases/mapa/4.webm",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mapa/mapa-3.png",
      },
      {
        id: uuidv4(),
        isVideo: false,
        url: "https://mdh-sepia.vercel.app/cases/mapa/mapa-singapore.png",
      },
      {
        id: uuidv4(),
        isVideo: true,
        url: "https://mdh-sepia.vercel.app/cases/mapa/mapa-2.webm",
      },
    ],
    preview: "https://mdh-sepia.vercel.app/cases/mapa/mapa.png",
  },
];

export const slides = [
  {
    id: uuidv4(),
    img: "/slider/1.png",
    name: "Basement, Extensions & permits",
    map: "6393 Cressy St, Creston, CA",
  },
  {
    id: uuidv4(),
    img: "/slider/2.png",
    name: "Bathroom, Plumbing & french drains",
    map: "1244 Boston St, Creston, LA",
  },
  {
    id: uuidv4(),
    img: "/slider/3.png",
    name: "Bedroom, plastering & painting",
    map: "9188 Goodwin St, Creston, NY",
  },
  {
    id: uuidv4(),
    img: "/slider/1.png",
    name: "Basement, Extensions & permits",
    map: "6393 Cressy St, Creston, CA",
  },
];
