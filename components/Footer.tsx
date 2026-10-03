import Link from "next/link";
import { campuses, school, timings } from "@/lib/site";
import { IconArrow, IconClock, IconMail, IconMap, IconPhone, IconPin } from "./Icons";
import Logo from "./Logo";

const usefulLinks = [
  { label: "Admissions", href: "/admissions" },
  { label: "Admission Enquiry", href: "/admissions#enquiry" },
  { label: "Contact Us", href: "/contact" },
  { label: "Pay Fee Online", href: "/pay-fees" },
  { label: "Photo Gallery", href: "/gallery" },
];

const programLinks = [
  { label: "Academics", href: "/academics" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Board Results", href: "/academics" },
  { label: "Mandatory Public Disclosure", href: "/disclosure" },
];

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((n) => (
        <li key={n.label}>
          <Link href={n.href} className="group inline-flex items-center gap-2.5 text-white/75 transition hover:text-white">
            <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            {n.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-naples bg-yale-deep text-white/75">
      <div className="container-x relative">
        {/* Top: crest + branches + timing */}
        <div className="grid gap-6 border-b border-white/15 py-8 lg:grid-cols-[300px_1fr_1fr] lg:items-stretch">
          <div className="flex items-center justify-center lg:justify-start lg:pl-4">
            <Logo light stacked />
          </div>
          <div className="rounded-md border border-white/60 px-4 py-4">
            <h2 className="text-[1.9rem] font-bold leading-tight text-white">Our Branches</h2>
            <ul className="mt-3 space-y-3">
              {campuses.map((c) => (
                <li key={c.name} className="flex gap-3">
                  <IconPin className="mt-1 h-5 w-5 shrink-0" />
                  <span>
                    <span className="font-semibold text-white">{c.name}: </span>
                    {c.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-white/60 px-4 py-4">
            <h2 className="text-[1.9rem] font-bold leading-tight text-white">Timing</h2>
            <ul className="mt-3 space-y-3">
              {timings.slice(0, 3).map((t) => (
                <li key={t.label} className="flex gap-3">
                  <IconClock className="mt-1 h-5 w-5 shrink-0" />
                  <span>
                    {t.label}: {t.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.2fr] lg:px-4">
          <div>
            <h2 className="text-[1.4rem] font-bold text-white">About</h2>
            <p className="mt-4 leading-[1.8]">
              Run by the {school.society}, {school.name} is a co-educational, English-medium CBSE school in
              Durgapura, Jaipur, teaching Nursery to Class XII with Indian values at the centre of school life.
            </p>
            <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-naples transition hover:gap-3">
              Read More <IconArrow />
            </Link>
          </div>
          <div>
            <h2 className="text-[1.4rem] font-bold text-white">Useful Links</h2>
            <LinkList items={usefulLinks} />
          </div>
          <div>
            <h2 className="text-[1.4rem] font-bold text-white">Our Programs</h2>
            <LinkList items={programLinks} />
          </div>
          <div>
            <h2 className="text-[1.4rem] font-bold text-white">Connect Us</h2>
            <ul className="mt-5 flex gap-3">
              {[
                { label: "Call the school", href: `tel:${school.phoneHref}`, icon: IconPhone },
                { label: "Email the school", href: `mailto:${school.email}`, icon: IconMail },
                { label: "Open in Google Maps", href: school.mapLink, icon: IconMap },
              ].map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="grid h-[34px] w-[34px] place-items-center border border-naples text-naples transition hover:bg-naples hover:text-yale"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-3">
              {school.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <IconPhone className="h-5 w-5 shrink-0" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">{p}</a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <IconMail className="h-5 w-5 shrink-0" />
                <a href={`mailto:${school.email}`} className="break-all hover:text-white">{school.email}</a>
              </li>
            </ul>
            <div className="mt-5 overflow-hidden">
              <iframe
                title="Map of the Jaipur campus"
                src={school.mapEmbed}
                className="h-[100px] w-full max-w-[270px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <p className="pb-8 text-center text-xs font-semibold text-white/70">
          CBSE Affiliation No. <span className="text-white">{school.affiliation}</span> · School Code{" "}
          <span className="text-white">{school.schoolCode}</span>
        </p>
      </div>

      <div className="border-t border-white/10 bg-black/25">
        <div className="container-x flex flex-col gap-3 py-5 text-[0.95rem] text-white sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} | {school.name}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <li><Link href="/disclosure" className="hover:underline">Mandatory Disclosure</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/pay-fees" className="hover:underline">Pay Fees</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
