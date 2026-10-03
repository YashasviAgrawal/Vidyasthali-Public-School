import Link from "next/link";
import { school } from "@/lib/site";
import { IconCard, IconMail, IconMap, IconPhone } from "./Icons";

const side = [
  { label: `Call ${school.phones[0]}`, href: `tel:${school.phoneHref}`, icon: IconPhone },
  { label: `Email ${school.email}`, href: `mailto:${school.email}`, icon: IconMail },
  { label: "Get directions", href: school.mapLink, icon: IconMap, external: true },
];

export default function FloatingActions() {
  return (
    <>
      {/* Left: vertical enquiry tab (desktop) */}
      <Link
        href="/admissions#enquiry"
        className="fixed left-0 top-[42%] z-40 hidden rounded-r-lg bg-naples px-2.5 py-5 font-bold text-yale shadow-lift transition hover:bg-yale hover:pl-3.5 hover:text-white md:block"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        Admission Enquiry
      </Link>

      {/* Right: contact icon stack (desktop) */}
      <ul className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 md:flex">
        {side.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-12 items-center rounded-l-lg bg-yale pl-3.5 pr-3 text-white shadow-lift ring-1 ring-white/25 transition-all hover:bg-naples hover:text-yale focus-visible:bg-naples focus-visible:text-yale"
            >
              <Icon className="h-6 w-6 shrink-0" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[16rem] group-focus-visible:ml-2.5 group-focus-visible:max-w-[16rem]">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile: bottom action bar */}
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-yale text-white shadow-[0_-6px_20px_rgba(23,59,100,0.2)] md:hidden"
      >
        <a href={`tel:${school.phoneHref}`} className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold">
          <IconPhone className="h-5 w-5" /> Call
        </a>
        <Link href="/admissions#enquiry" className="flex flex-col items-center gap-0.5 bg-naples py-2.5 text-xs font-bold text-yale">
          <IconMail className="h-5 w-5" /> Enquire
        </Link>
        <Link href="/pay-fees" className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold">
          <IconCard className="h-5 w-5" /> Pay Fees
        </Link>
      </nav>
    </>
  );
}
