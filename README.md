# Vidyasthali Public School website

A redesign of vidyasthali.com, built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS 3.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Node.js 18.18 or newer is required. The site deploys as-is to Vercel, Netlify or any Node host.

## Pages

| Route | Contents |
|---|---|
| `/` | Hero, quick links, about, 2025 board results, campus life, leadership, both campuses, visit timings |
| `/about` | Philosophy, leadership, school-at-a-glance table |
| `/academics` | Stages Nursery to XII, teaching and assessment, teachers, results |
| `/admissions` | Four-step process, minimum ages, documents, fee PDF, enquiry form |
| `/campus-life` | Sports, clubs, competitions, health care, timings and uniform |
| `/gallery` | Photo grid |
| `/disclosure` | CBSE mandatory public disclosure data and all 16 documents |
| `/contact` | Both campuses, Google Map, enquiry form |
| `/pay-fees` | Eduqfix payment links for Jaipur and Dausa |
| `/api/enquiry` | Receives the admission enquiry form (see "Enquiry form" below) |

All text, numbers and links live in **`lib/site.ts`**. Edit that one file to update content.

## Add the logo and photos

Put files in `public/images/` with these exact names. Until a file exists, the site shows a
patterned placeholder instead of a broken image, so you can add them gradually.

| File | Used for |
|---|---|
| `logo.png` | Header, footer and browser tab icon. Use a square PNG with a transparent background, at least 256 × 256 px. |
| `campus-1.jpg` | Home page hero arch, gallery |
| `campus-2.jpg` | About page, gallery |
| `campus-3.jpg` | Campus life photo, gallery |
| `gallery-4.jpg` … `gallery-8.jpg` | Gallery |

The three photos on the current site can be downloaded like this:

```bash
curl -o public/images/campus-1.jpg http://www.vidyasthali.com/images/fullscreen/1.jpg
curl -o public/images/campus-2.jpg http://www.vidyasthali.com/images/fullscreen/2.jpg
curl -o public/images/campus-3.jpg http://www.vidyasthali.com/images/fullscreen/3.jpg
```

Those images are old and low-resolution. For the launch, ask the school for its logo file and
10 to 20 recent, high-quality photos (building, classrooms, labs, library, sports, events).
Photos for the hero should be portrait (about 4:5). Update the captions in `gallery` in `lib/site.ts`.

## Disclosure documents

The disclosure page currently links to the PDFs on the old site (`http://www.vidyasthali.com/...`).
Before launch, download them into `public/docs/` and change `docBase` in `lib/site.ts` to `"/docs/"`.
The old links are plain `http`, which browsers may warn about on an `https` site.

The fee structure PDF is a scan with no readable text. Ask the school for a text-based version.

## Enquiry form

`app/api/enquiry/route.ts` validates the form and currently only logs it to the server console.
Connect it before launch, for example:

- Email with [Resend](https://resend.com) or Nodemailer using the school's mail account
- A Google Sheet through Apps Script
- A database such as Supabase or Postgres

## Verify with the school before going live

These details came from third-party listings or conflicting sources:

- **Principal.** The mandatory disclosure names Dr. Indira Choudhary, but the CBSE SARAS portal shows Sandhya Singh.
- **Minimum ages** for Nursery to Class I, and the cut-off date they are measured against.
- **Streams** offered in Classes XI and XII. Science, Commerce and Arts are shown.
- **Director's quote** on the home page is adapted from the old site's Director's Desk. Get it approved.
- **Chairman's message.** The old site's message was written for the college, so it is not used. Ask for a school-specific message.
- **Announcement strip** text, in `announcement` in `lib/site.ts`. Set it to `null` to hide it.
- **Dausa phone numbers.** The old site lists "+91-9024336611/ 77", shown here as two numbers.

## Design notes

- **Palette:** navy `#142B5C`, deep navy `#0C1C3F`, marigold `#F4A51C`, mist `#EDF2FA`, ink `#1B2435`.
- **Type:** Bricolage Grotesque for headings, Hind for body text, and Tiro Devanagari Hindi for the
  Hindi name. Hind also covers Devanagari, so Hindi pages can be added later.
- **Motif:** a jaali (Jaipur stone-lattice) pattern on dark sections, and jharokha-style arch frames
  for feature photos. The hero arch rises in once on load. This is the only automatic animation, and it
  is switched off for visitors who prefer reduced motion.
- Accessibility: skip link, visible focus rings, labelled form fields with inline errors, `aria-current`
  on the active menu item, and mobile menu state exposed with `aria-expanded`.

## Problems fixed from the old site

- Removed the injected spam links (hair-extension sites) found on every page of the old site.
- No dead menu items. Admissions, Results and the Principal now have real pages or sections.
- Students' transfer certificates are **not** published. Posting them openly exposes children's
  personal details. Handle TC verification on request instead.
- The Jaipur map now points to the school, not to Vidyasthali Law College.
- Mobile-friendly layout, a working admission enquiry form and a clear fee payment page.
