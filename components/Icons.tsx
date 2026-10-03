// Simple line icons used across the site. Size and colour come from the parent via className.
type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const IconPhone = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const IconMail = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const IconPin = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const IconClock = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const IconStar = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6Z" /></svg>
);
export const IconChevron = ({ className = "h-5 w-5", dir = "right" }: P & { dir?: "left" | "right" }) => (
  <svg {...base} strokeWidth={2} className={className}>{dir === "right" ? <path d="m9 6 6 6-6 6" /> : <path d="m15 6-6 6 6 6" />}</svg>
);
export const IconArrow = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconBook = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" /><path d="M4 19V5M8 7h7M8 11h5" /></svg>
);
export const IconUsers = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2a5 5 0 0 1 5.5 4.8" /></svg>
);
export const IconFlask = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" /><path d="M7 15h10" /></svg>
);
export const IconBuilding = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M3 21h18M5 21V9l7-5 7 5v12" /><path d="M9 21v-5h6v5M9 11h.01M15 11h.01" /></svg>
);
export const IconLotus = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M12 4c2 2.5 2.5 5 2.5 7.5S13.5 17 12 18c-1.5-1-2.5-4-2.5-6.5S10 6.5 12 4Z" /><path d="M9.5 9.5C6.8 8.8 4.5 9.4 3 10.5c.5 4 4.3 7.5 9 7.5s8.5-3.5 9-7.5c-1.5-1.1-3.8-1.7-6.5-1" /><path d="M5 20h14" /></svg>
);
export const IconHeart = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20Z" /></svg>
);
export const IconBulb = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" /></svg>
);
export const IconShield = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const IconScreen = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></svg>
);
export const IconTrophy = ({ className = "h-10 w-10" }: P) => (
  <svg {...base} className={className}><path d="M8 4h8v5a4 4 0 0 1-8 0Z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6" /></svg>
);
export const IconCard = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></svg>
);
export const IconShare = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M14 4h6v6M20 4l-8 8" /><path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" /></svg>
);
export const IconMap = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2Z" /><path d="M9 4v14M15 6v14" /></svg>
);
export const IconDoc = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>
);

// Lets content in lib/site.ts refer to icons by name.
export const iconByName = {
  book: IconBook,
  users: IconUsers,
  flask: IconFlask,
  building: IconBuilding,
  lotus: IconLotus,
  heart: IconHeart,
  bulb: IconBulb,
  shield: IconShield,
  screen: IconScreen,
  trophy: IconTrophy,
} as const;
