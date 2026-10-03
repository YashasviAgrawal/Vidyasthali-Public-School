// Flat illustrations for the "Life That Defines Us!" cards, drawn in the brand palette.
// Each is 140 x 120 and scales with its container.

const Y = "#173B64"; // Yale
const YL = "#24548A"; // Yale, light (shaded side)
const N = "#FFDE70"; // Naples
const ND = "#F5CC45"; // Naples, dark (shaded side)
const P = "#A3C4EB"; // Powder
const PD = "#8FB5E2"; // Powder, dark (shaded side)
const PS = "#E3EDF9"; // Powder, soft

// Investiture Ceremony: rosette badge with ribbons
function Investiture() {
  return (
    <>
      <path d="m56 72-12 38 14-8 8 10 6-36Z" fill={Y} />
      <path d="m84 72 12 38-14-8-8 10-6-36Z" fill={YL} />
      <circle cx="70" cy="50" r="34" fill={P} />
      <path d="M70 16a34 34 0 0 1 0 68Z" fill={PD} />
      <circle cx="70" cy="50" r="24" fill={N} stroke={Y} strokeWidth="3" />
      <path d="M70 26a24 24 0 0 1 0 48Z" fill={ND} />
      <path d="m70 36 4.3 8.8 9.7 1.4-7 6.8 1.7 9.6-8.7-4.6-8.7 4.6 1.7-9.6-7-6.8 9.7-1.4Z" fill={Y} />
    </>
  );
}

// Scrivener's Confederation: page and quill
function Literary() {
  return (
    <>
      <rect x="30" y="22" width="62" height="84" rx="5" fill="#fff" stroke={Y} strokeWidth="3" />
      <path d="M42 40h38M42 52h38M42 64h30M42 76h34M42 88h22" stroke={P} strokeWidth="4" strokeLinecap="round" />
      <path d="M112 12C88 22 74 48 66 84l7 3c12-30 28-52 42-70Z" fill={N} stroke={Y} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M112 12C96 30 84 52 73 87l-3-1c9-32 24-56 42-74Z" fill={ND} />
      <path d="m66 84-6 18" stroke={Y} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

// Annual Cultural Fest: theatre masks
function Stage() {
  return (
    <>
      <path d="M62 38h44v26c0 18-10 30-22 30s-22-12-22-30Z" fill={P} stroke={Y} strokeWidth="3" />
      <path d="M84 38h22v26c0 18-10 30-22 30Z" fill={PD} />
      <path d="M72 56q4-4 8 0M88 56q4-4 8 0" stroke={Y} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M74 78q10-8 20 0" stroke={Y} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 22h44v26c0 18-10 30-22 30S30 66 30 48Z" fill={N} stroke={Y} strokeWidth="3" />
      <path d="M52 22h22v26c0 18-10 30-22 30Z" fill={ND} />
      <path d="M40 42q4 4 8 0M56 42q4 4 8 0" stroke={Y} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M42 56q10 10 20 0" stroke={Y} strokeWidth="3" fill={Y} strokeLinecap="round" />
      <path d="M30 30c-8 2-12 8-12 14M106 46c8 2 12 8 12 14" stroke={Y} strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  );
}

// Heritage Club: monument with dome and chhatris
function Heritage() {
  return (
    <>
      <path d="M70 16v10" stroke={Y} strokeWidth="3" strokeLinecap="round" />
      <path d="M46 54c0-20 48-20 48 0Z" fill={N} />
      <path d="M70 39c12 0 24 5 24 15H70Z" fill={ND} />
      <path d="M26 58c0-10 20-10 20 0ZM94 58c0-10 20-10 20 0Z" fill={N} />
      <rect x="40" y="54" width="60" height="42" fill={P} stroke={Y} strokeWidth="3" />
      <rect x="22" y="58" width="28" height="38" fill={PS} stroke={Y} strokeWidth="3" />
      <rect x="90" y="58" width="28" height="38" fill={PS} stroke={Y} strokeWidth="3" />
      <path d="M60 96V78c0-14 20-14 20 0v18Z" fill={Y} />
      <path d="M30 96V82c0-8 12-8 12 0v14ZM98 96V82c0-8 12-8 12 0v14Z" fill={YL} />
      <rect x="16" y="96" width="108" height="8" fill={Y} />
      <rect x="10" y="104" width="120" height="6" fill={YL} />
    </>
  );
}

// Indian Traditions: diya lamp
function Diya() {
  return (
    <>
      <circle cx="70" cy="52" r="26" fill={PS} />
      <path d="M70 26c12 16 12 32 0 40-12-8-12-24 0-40Z" fill={N} />
      <path d="M70 26c12 16 12 32 0 40Z" fill={ND} />
      <path d="M70 44c5 7 5 14 0 18-5-4-5-11 0-18Z" fill="#fff" />
      <path d="M26 74c6 24 82 24 88 0Z" fill={N} stroke={Y} strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 74h44c-3 12-22 18-44 18Z" fill={ND} />
      <path d="M22 74h96" stroke={Y} strokeWidth="4" strokeLinecap="round" />
      <path d="M44 84q26 8 52 0" stroke={Y} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="70" cy="104" rx="30" ry="6" fill={Y} />
    </>
  );
}

// Green Team: sapling in a pot
function Green() {
  return (
    <>
      <path d="M70 76V40" stroke={Y} strokeWidth="4" strokeLinecap="round" />
      <path d="M70 52c-4-18-22-26-38-22 2 18 20 28 38 22Z" fill={P} stroke={Y} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M70 52c-10-6-20-12-32-18" stroke={Y} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M70 44c4-18 22-26 38-22-2 18-20 28-38 22Z" fill={PD} stroke={Y} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M70 44c10-6 20-12 32-18" stroke={Y} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M44 76h52l-8 32H52Z" fill={N} stroke={Y} strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 76h26l-8 32H70Z" fill={ND} />
      <rect x="40" y="72" width="60" height="10" rx="3" fill={Y} />
    </>
  );
}

// Sports & Games: trophy
function Sports() {
  return (
    <>
      <path d="M50 28H36c0 16 6 24 16 26" fill="none" stroke={Y} strokeWidth="5" strokeLinecap="round" />
      <path d="M90 28h14c0 16-6 24-16 26" fill="none" stroke={Y} strokeWidth="5" strokeLinecap="round" />
      <path d="M48 20h44v20c0 18-10 30-22 30S48 58 48 40Z" fill={N} stroke={Y} strokeWidth="3" />
      <path d="M70 20h22v20c0 18-10 30-22 30Z" fill={ND} />
      <path d="m70 30 3.2 6.6 7.3.9-5.4 5 1.4 7.2L70 46.2l-6.5 3.5 1.4-7.2-5.4-5 7.3-.9Z" fill={Y} />
      <rect x="63" y="70" width="14" height="12" fill={Y} />
      <rect x="50" y="82" width="40" height="11" rx="2" fill={Y} />
      <rect x="40" y="93" width="60" height="13" rx="2" fill={YL} />
      <rect x="56" y="97" width="28" height="5" rx="2.5" fill={P} />
    </>
  );
}

// Inter-section Contests: quiz speech bubbles
function Contest() {
  return (
    <>
      <path d="M22 20h60a8 8 0 0 1 8 8v36a8 8 0 0 1-8 8H48l-16 14v-14H22a8 8 0 0 1-8-8V28a8 8 0 0 1 8-8Z" fill={P} stroke={Y} strokeWidth="3" strokeLinejoin="round" />
      <path d="M44 38a8 8 0 1 1 12 7c-3 2-4 3-4 7" stroke={Y} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <circle cx="52" cy="61" r="3" fill={Y} />
      <path d="M118 46H72a8 8 0 0 0-8 8v30a8 8 0 0 0 8 8h26l14 12V92h6a8 8 0 0 0 8-8V54a8 8 0 0 0-8-8Z" fill={N} stroke={Y} strokeWidth="3" strokeLinejoin="round" />
      <path d="M95 58v18" stroke={Y} strokeWidth="5" strokeLinecap="round" />
      <circle cx="95" cy="84" r="3.2" fill={Y} />
    </>
  );
}

// Community Service: hands holding a heart
function Community() {
  return (
    <>
      <path d="M70 70C46 56 40 42 46 32c6-10 18-8 24 2 6-10 18-12 24-2 6 10 0 24-24 38Z" fill={N} stroke={Y} strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 34c6-10 18-12 24-2 6 10 0 24-24 38Z" fill={ND} />
      <path d="M14 78c14-2 30 2 44 12h12v18H18Z" fill={Y} />
      <path d="M126 78c-14-2-30 2-44 12H70v18h52Z" fill={YL} />
      <path d="M40 86c8 0 16 2 22 6" stroke={P} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M100 86c-8 0-16 2-22 6" stroke={P} strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  );
}

const art = {
  investiture: Investiture,
  literary: Literary,
  stage: Stage,
  heritage: Heritage,
  diya: Diya,
  green: Green,
  sports: Sports,
  contest: Contest,
  community: Community,
};

export type FeatureArtName = keyof typeof art;

export default function FeatureArt({ name, className = "" }: { name: FeatureArtName; className?: string }) {
  const Art = art[name];
  return (
    <svg viewBox="0 0 140 120" aria-hidden="true" className={className}>
      <Art />
    </svg>
  );
}
