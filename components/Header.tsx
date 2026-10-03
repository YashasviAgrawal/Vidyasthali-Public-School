"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/site";
import { IconCard, IconPhone } from "./Icons";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Row 1: crest and action buttons */}
      <div className="bg-white">
        <div className="container-x flex items-center justify-between gap-4 py-2.5">
          <Link href="/" aria-label={`${school.name}, home`} className="min-w-0">
            <Logo />
          </Link>
          <div className="flex shrink-0 items-center gap-3 lg:gap-8">
            <Link href="/pay-fees" className="btn-box hidden md:inline-flex">
              <IconCard className="h-5 w-5" /> Pay Fees Online
            </Link>
            <a href={`tel:${school.phoneHref}`} className="btn-box hidden md:inline-flex">
              <IconPhone className="h-5 w-5" /> {school.phones[0]}
            </a>
            <a
              href={`tel:${school.phoneHref}`}
              className="grid h-12 w-12 place-items-center rounded-full bg-yale text-white md:hidden"
            >
              <IconPhone className="h-5 w-5" />
              <span className="sr-only">Call {school.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2: menu bar (sticky) */}
      <header className="sticky top-0 z-50 border-b border-powder-line bg-powder-soft">
        <nav aria-label="Main" className="container-x hidden lg:block">
          <ul className="flex items-stretch justify-between py-2.5">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="flex flex-1 justify-center border-r border-powder-line last:border-r-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative whitespace-nowrap px-3 py-1 text-[1.05rem] transition-colors after:absolute after:inset-x-3 after:-bottom-1 after:h-[3px] after:origin-left after:rounded-full after:bg-yale after:transition-transform ${
                      active
                        ? "font-semibold text-yale after:scale-x-100"
                        : "text-ink hover:text-yale after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="container-x flex items-center justify-between py-2 lg:hidden">
          <span className="text-sm font-semibold text-muted">Menu</span>
          <button
            type="button"
            className="grid h-10 w-12 place-items-center rounded border border-powder-line bg-white/60 text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-56px)] overflow-y-auto border-t border-powder-line bg-white shadow-lift lg:hidden"
          >
            <ul className="container-x py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block border-b border-line py-3.5 text-lg ${
                      isActive(item.href) ? "font-semibold text-yale" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="grid gap-3 py-5 sm:grid-cols-2">
                <Link href="/admissions#enquiry" className="btn-accent">Admission Enquiry</Link>
                <Link href="/pay-fees" className="btn-yale">Pay Fees Online</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
