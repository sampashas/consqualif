import { ContentBlock } from "../components/ContentBlocks";
import { v4 as uuidv4 } from "uuid";

// Content
export const contentItems = [
  {
    id: uuidv4(),
    type: "image",
    name: "1_main",
    url: "/sale/urbanism/1_main.png",
  },
  {
    id: uuidv4(),
    type: "video",
    name: "2_preview_video",
    url: "/sale/urbanism/preview_video.webm",
  },
  {
    id: uuidv4(),
    type: "block",
    name: "4_desktop_pages",
    content: <ContentBlock />,
  },
];

// Content
export const moreBlockItems = [
  {
    id: uuidv4(),
    type: "image",
    name: "1_main",
    url: "/sale/urbanism/1_main.png",
  },
  {
    id: uuidv4(),
    type: "video",
    name: "2_preview_video",
    url: "/sale/urbanism/preview_video.webm",
  },
  {
    id: uuidv4(),
    type: "block",
    name: "4_desktop_pages",
    content: <ContentBlock />,
  },
];
