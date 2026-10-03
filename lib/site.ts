// All school content lives here so it can be updated without touching layouts.
// Facts marked "official" come from the school's CBSE Mandatory Public Disclosure.

export const school = {
  name: "Vidyasthali Public School",
  hindiName: "विद्यास्थली पब्लिक स्कूल",
  shortName: "Vidyasthali",
  tagline: "Learning rooted in India, ready for the world.",
  affiliation: "1730248", // official
  schoolCode: "10595", // official
  level: "Senior Secondary (Nursery to Class XII)",
  medium: "English",
  society: "Bhartiya Samajik Vikas Samiti",
  principal: "Dr. Indira Choudhary", // official (Mandatory Disclosure)
  director: "Yogendra Singh",
  chairman: "Prof. B.L. Verma",
  chairmanTitle: "Founder Vice Chancellor, University of Kota",
  address: "Prithviraj Nagar, Maharani Farm, Durgapura, Jaipur, Rajasthan 302018",
  phones: ["+91 141 276 3165", "+91 141 276 3166"],
  phoneHref: "+911412763165",
  fax: "+91 141 276 2864",
  email: "vidyasthali@yahoo.in",
  mapEmbed:
    "https://www.google.com/maps?q=Vidyasthali+Public+School+Maharani+Farm+Durgapura+Jaipur&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Vidyasthali+Public+School+Maharani+Farm+Durgapura+Jaipur",
};

// Edit or set to null to hide the strip above the header.
export const announcement: { text: string; href: string; cta: string } | null = {
  text: "Admission enquiries are open for Nursery to Class XI.",
  href: "/admissions#enquiry",
  cta: "Send an enquiry",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
  { label: "Mandatory Public Disclosure", href: "/disclosure" },
];

// Real school photos in /public/images (taken from the school's previous website).
// An empty src ("") shows a navy brand panel instead, so new photos can be added slot by slot.
const img = {
  investiture: "/images/investiture-ceremony.jpg", // Investiture ceremony, student council with teachers
  schoolFunction: "/images/school-function.jpg", // Students and parents in the auditorium
  prePrimary: "/images/pre-primary.jpg", // Pre-primary children with their teachers
  lampLighting: "/images/lamp-lighting.jpg", // Guests lighting the lamp at a school function
};

export const photos = {
  logo: "/images/logo.png",
  hero: img.investiture,
  about: img.lampLighting,
  life: img.prePrimary,
};

// ─── Home page ──────────────────────────────────────────────────────────────

// Crimson band under the menu (the "25 Years of Excellence" strip on the reference design).
export const taglineBand = {
  title: "Learning Rooted in India, Ready for the World",
  subtitle: "CBSE Affiliated School (No. 1730248) · Nursery to Class XII · Durgapura, Jaipur",
};

// Hero slider. Two short caption lines sit bottom-left over each photo.
export const heroSlides = [
  { src: img.investiture, alt: "Student council and teachers at the investiture ceremony", lines: ["Learning rooted in India.", "Ready for the world."] },
  { src: img.prePrimary, alt: "Pre-primary children with their teachers", lines: ["A joyful start in pre-primary:", "Nursery, LKG and UKG."] },
  { src: img.schoolFunction, alt: "Students and parents at a school function in the auditorium", lines: ["121 of 121 students passed", "the Class X board exam, 2025."] },
];

// Scrolling crimson strip under the slider.
export const highlights = [
  "100% pass in the CBSE Class X board exam, 2025",
  "95% pass in the CBSE Class XII board exam, 2025",
  "CBSE Affiliation No. 1730248",
  "52 qualified teachers: PGT, TGT and PRT",
  "6 laboratories, including computer labs",
  "Two campuses: Jaipur and Dausa",
  "Admissions open, Nursery to Class XI",
];

// The four staggered tiles beside "Give Your Children The Education They Deserve".
export const introTiles = [
  { title: "CBSE Nursery to XII", text: "One school for the whole journey, in English medium.", tone: "accent", photo: img.investiture },
  { title: "52 Qualified Teachers", text: "PGT, TGT and PRT teachers, plus a counsellor and special educator.", tone: "primary", photo: img.schoolFunction },
  { title: "Indian Values", text: "The world understood through an Indian point of view.", tone: "primary", photo: img.lampLighting },
  { title: "Character & Creativity", text: "Yoga, dance, drama, debates and quizzes every week.", tone: "accent", photo: img.prePrimary },
];

// "Life That Defines Us!" cards. The first 3 show by default; "Read more" reveals the rest.
// `art` picks an illustration from components/FeatureArt.tsx.
export const lifeCards = [
  { title: "Investiture Ceremony", art: "investiture", text: "The student council takes charge, with teachers and guests looking on." },
  { title: "Scrivener's Confederation", art: "literary", text: "The literary club runs writing and speaking activities for the whole school." },
  { title: "Annual Cultural Fest", art: "stage", text: "The whole school comes together on one stage." },
  { title: "Heritage Club", art: "heritage", text: "Projects, presentations and short documentaries on India's heritage." },
  { title: "Indian Traditions", art: "diya", text: "School functions honour Indian customs, from prayer to the lighting of the lamp." },
  { title: "Green Team", art: "green", text: "Environment drives built on reduce, reuse, recycle and refuse." },
  { title: "Sports & Games", art: "sports", text: "Cricket, football, hockey, basketball, volleyball, athletics and more." },
  { title: "Inter-section Contests", art: "contest", text: "Storytelling, drawing, handwriting, vocabulary and maths quizzes." },
  { title: "Community Service", art: "community", text: "Students help during civic drives and natural calamities." },
] as const;

// Count-up row.
export const counters = [
  { value: 100, suffix: "%", label: "Class X Board Result, 2025" },
  { value: 52, suffix: "", label: "Qualified Teachers" },
  { value: 12, suffix: "+", label: "Sports & Games" },
];

// Core values, placed around the arc. Icons are in components/Icons.tsx.
export const coreValues = [
  { title: "Strategy and Planning", icon: "book" },
  { title: "Student Centric Approach", icon: "users" },
  { title: "Indian Values", icon: "lotus" },
  { title: "Safe & Caring Environment", icon: "shield" },
  { title: "Labs & Technology", icon: "bulb" },
] as const;

// Three tall photo tiles.
export const programmes = [
  { title: "Co-curricular", text: "Clubs, competitions, yoga, dance, drama and the annual cultural fest.", href: "/campus-life", photo: img.schoolFunction },
  { title: "Sports", text: "Courts and pitches for team games, athletics and traditional Indian games, led by trained coaches.", href: "/campus-life", photo: "" },
  { title: "Academics", text: "100% Class X and 95% Class XII board results in 2025, with Science, Commerce and Arts streams.", href: "/academics", photo: img.investiture },
];

// "Be Limitless" quick-link tiles.
export const exploreTiles = [
  { big: "Photo", small: "Gallery", note: "Moments from school life", href: "/gallery" },
  { big: "Board", small: "Results", note: "Class X & XII, 2025", href: "/academics" },
  { big: "Student", small: "Clubs", note: "Literary, heritage & green", href: "/campus-life" },
  { big: "Pay Fees", small: "Online", note: "Jaipur & Dausa campuses", href: "/pay-fees" },
];

// "Affiliations & Recognitions" grid, each linked to its official document.
export const recognitions = [
  { label: "CBSE Affiliation", file: "jpr_extention_cbse.pdf", icon: "book" },
  { label: "Society Registration", file: "jpr_registration.pdf", icon: "building" },
  { label: "DEO Registration", file: "jpr_deo_registration.pdf", icon: "shield" },
  { label: "State Govt. NOC", file: "jpt_govt_noc.pdf", icon: "shield" },
  { label: "RTE Recognition", file: "jpr_rte_noc.pdf", icon: "users" },
  { label: "Building Safety", file: "jpr_safety_certificate.pdf", icon: "building" },
  { label: "Fire Safety NOC", file: "jpr_fire_noc.pdf", icon: "shield" },
  { label: "Drinking Water", file: "jpr_drinking_water.pdf", icon: "flask" },
  { label: "Health & Sanitation", file: "jpr_health_certificate.pdf", icon: "heart" },
  { label: "Mandatory Disclosure", file: "jpr_mandatory_disclosure.pdf", icon: "book" },
] as const;

// Tabbed "stories" section, grouped by stage of school.
export const stageGroups = [
  { tab: "Junior School", stages: ["Pre-primary", "Primary"] },
  { tab: "Middle School", stages: ["Middle"] },
  { tab: "Senior School", stages: ["Secondary", "Senior secondary"] },
];

// Home page "Director's message" section. `cutout` is a transparent PNG (background removed).
export const directorMessage = {
  quote:
    "Success has to be earned. It asks for steady hard work, discipline and confidence. At Vidyasthali, children get room to follow their curiosity, think for themselves and learn to lead.",
  name: school.director,
  role: "Director",
  cutout: "/images/director-cutout.png",
};

// Leadership portraits: add files with these names to /public/images.
export const leaders = [
  { name: school.chairman, role: "Chairman", note: school.chairmanTitle, photo: "" },
  { name: school.director, role: "Director", note: "Leads the Vidyasthali group of institutions", photo: "/images/director.jpg" },
  { name: school.principal, role: "Principal", note: "M.A., B.Ed., Ph.D.", photo: "" },
];

export const gallery = [
  { src: img.investiture, alt: "Student council and teachers at the investiture ceremony" },
  { src: img.schoolFunction, alt: "Students and parents at a school function in the auditorium" },
  { src: img.prePrimary, alt: "Pre-primary children with their teachers" },
  { src: img.lampLighting, alt: "Guests lighting the lamp at a school function" },
];

// official — Mandatory Disclosure, 2025 board results
export const results = [
  { label: "Class X", year: 2025, registered: 121, passed: 121, percent: 100 },
  { label: "Class XII", year: 2025, registered: 119, passed: 113, percent: 95 },
];

// official — Mandatory Disclosure
export const staff = { total: 52, pgt: 11, tgt: 25, prt: 16 };
export const campusFacts = { areaSqm: 4048, labs: 6, girlsToilets: 11, boysToilets: 14 };

export const philosophy = [
  "Indian heritage and way of life",
  "India's influence on world culture",
  "Lessons from the Vedas, the Bhagavad Gita, the epics and the Yoga Shastras",
  "The contribution of India's great thinkers, sages and scientists",
  "How the world sees the Indian way of life",
  "India's lasting values in a modern society",
  "Faith in national character",
];

export const stages = [
  { name: "Pre-primary", photo: img.prePrimary, classes: "Nursery, LKG, UKG", text: "Play, stories, rhymes and early number and letter work, taught by PRT-qualified teachers." },
  { name: "Primary", photo: "", classes: "Classes I to V", text: "Strong reading, writing and maths foundations, with art, dance, music and games every week." },
  { name: "Middle", photo: "", classes: "Classes VI to VIII", text: "Subject teachers, laboratory work, quizzes, debates and club activities." },
  { name: "Secondary", photo: "", classes: "Classes IX and X", text: "The CBSE secondary curriculum, with regular tests and preparation for the Class X board examination." },
  { name: "Senior secondary", photo: img.investiture, classes: "Classes XI and XII", text: "Science, Commerce and Arts streams, taught by post-graduate teachers." },
];

export const campuses = [
  {
    name: "Jaipur campus",
    area: "Durgapura, Jaipur",
    address: "Prithviraj Nagar, Maharani Farm, Durgapura, Jaipur, Rajasthan 302018",
    phones: ["+91 141 276 3165", "+91 141 276 3166"],
    payUrl:
      "https://www.eduqfix.com/PayDirect/#/student/pay/PWjumRw0Xg82ZFG1RAKdHp+BF1Q1NaLs4cemx5TITlvZNhJu9p02H221ClyECE7n/1385",
  },
  {
    name: "Dausa campus",
    area: "Dausa",
    address: "N.H. 11, Nangal Bairsi Road, Dausa, Rajasthan 303303",
    phones: ["+91 90243 36611", "+91 90243 36677"],
    payUrl:
      "https://www.eduqfix.com/PayDirect/#/student/pay/k65IE5YuofEf2CXbHp5HAwMlQB+pYbJ0H9AzjCIwnjd8z4JuMCNoW3IepmSrC2pw/1378",
  },
];

export const ageGuide = [
  { grade: "Nursery", age: "2 years 6 months" },
  { grade: "LKG", age: "3 years 6 months" },
  { grade: "UKG", age: "4 years 6 months" },
  { grade: "Class I", age: "5 years 6 months" },
];

export const admissionDocs = [
  "Transfer certificate from the previous school (Class II onwards)",
  "Birth certificate",
  "Proof of residence",
  "Previous year's report card",
  "Aadhaar card of the child and both parents",
  "Recent passport-size photos of the child and parents",
];

export const timings = [
  { label: "School hours, summer", value: "7:50 am to 1:30 pm" },
  { label: "School hours, winter", value: "8:20 am to 2:00 pm" },
  { label: "Meet the Principal", value: "Monday and Wednesday, 9:00 to 10:00 am" },
  { label: "Meet the Coordinator", value: "Monday and Wednesday, 8:15 to 9:15 am" },
  { label: "Meet a class teacher", value: "Last working day, 11:00 to 11:30 am, by appointment" },
];

export const clubs = [
  { name: "Scrivener's Confederation", text: "The literary club. Members run writing and speaking activities for the whole school." },
  { name: "Heritage Club", text: "Projects, presentations and short documentaries on India's heritage." },
  { name: "Green Team", text: "Environment drives built on four Rs: reduce, reuse, recycle and refuse." },
];

export const sports = [
  "Cricket", "Football", "Hockey", "Basketball", "Volleyball", "Badminton",
  "Athletics", "Kho-kho", "Kabaddi", "Table tennis", "Chess", "Carrom",
];

// Change docBase to "/docs/" after copying the PDFs into /public/docs.
export const docBase = "http://www.vidyasthali.com/";
export const disclosureDocs = [
  { title: "Mandatory public disclosure", file: "jpr_mandatory_disclosure.pdf" },
  { title: "CBSE affiliation extension", file: "jpr_extention_cbse.pdf" },
  { title: "Society registration", file: "jpr_registration.pdf" },
  { title: "DEO registration", file: "jpr_deo_registration.pdf" },
  { title: "State government NOC", file: "jpt_govt_noc.pdf" },
  { title: "RTE recognition", file: "jpr_rte_noc.pdf" },
  { title: "Certificate of land", file: "jpr_certificate_of_land.pdf" },
  { title: "Building safety certificate", file: "jpr_safety_certificate.pdf" },
  { title: "Fire safety NOC", file: "jpr_fire_noc.pdf" },
  { title: "Drinking water certificate", file: "jpr_drinking_water.pdf" },
  { title: "Health and sanitation certificate", file: "jpr_health_certificate.pdf" },
  { title: "School management committee", file: "jpr_managing_committee.pdf" },
  { title: "Parent teacher association", file: "jpr_school_committee.pdf" },
  { title: "Academic calendar", file: "jpr_academic_calendar.pdf" },
  { title: "Fee structure", file: "jpr_fee_structure.pdf" },
  { title: "Board results, last three years", file: "jpr_result.pdf" },
];

export const gradesForEnquiry = [
  "Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V",
  "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI",
];
