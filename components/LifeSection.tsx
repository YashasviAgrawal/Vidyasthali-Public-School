"use client";

import { useRef, useState } from "react";
import { lifeCards } from "@/lib/site";
import FeatureArt from "./FeatureArt";
import { IconChevron } from "./Icons";

const INITIAL = 3;

/** Simplified world-map silhouette used as a soft backdrop. */
function WorldMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 500" aria-hidden="true" preserveAspectRatio="xMidYMid meet" className={className}>
      <g fill="#fff" stroke="#fff" strokeWidth="6" strokeLinejoin="round">
        {/* North America, Central America, Greenland */}
        <path d="M95 95 130 78l45-8 40-8 40-4 45 4 35 10-17 20-18 6 12 14-22 16-22 12-6 20-14 18-10 22-16 14-8 18-14 14-8 16-12-10-8-16-12-10-10-14-10-20-12-20-10-22-18-14-18-12-22-6 10-14Z" />
        <path d="m192 262 13 10 15 10 12 8-6 6-14-8-14-10Z" />
        <path d="m345 40 40-10 35 6 5 22-20 24-25 16-18-12-12-22Z" />
        {/* South America */}
        <path d="m238 296 24-6 28 10 28 18 20 18-6 26-16 22-16 20-14 24-14 24-8 14-8-10 2-26-6-30-10-28-10-26-2-26Z" />
        {/* Europe, Scandinavia, UK */}
        <path d="m455 92 15-14 22-8 28-8 28 4 18 12-6 18-15 12-15 12-18 12-18 4-16-6-12-12-14-8Z" />
        <path d="m500 62 12-22 18-10 18 6-8 20-15 8Z" />
        <path d="m445 84 7-12 8 8-5 14Z" />
        {/* Africa, Madagascar */}
        <path d="m448 160 22-14 30-4 30 2 26 6 16 22 18 24 10 14-12 20-10 28-10 30-12 26-16 26-18 14-14-6-8-26-6-28-8-28-16-22-18-18-12-22-2-22Z" />
        <path d="m600 300 8-10 4 20-10 20-6-12Z" />
        {/* Asia, Arabia, India, South-East Asia, Japan */}
        <path d="m560 96 30-16 40-14 50-10 50-6 60 4 60 8 50 12 40 18-10 20-30 8-20 20-20 20-22 16-18 20-20 14-20-4-18 16-22-6-16 14-16 22-14-16-12-22-18-16-20-8-20 6-20-16-16-20-12-20-6-22Z" />
        <path d="m580 160 30 8 18 22-16 20-20-12-10-18Z" />
        <path d="m660 198 30 2 18 20-10 28-14 22-10-20-10-24Z" />
        <path d="m760 222 16 10 6 24-12 6-8-18Z" />
        <path d="m770 280 30-4 12 10-22 4Zm50 4 30-4 12 12-26 4Zm-20 16 30 2-4 8-26-2Z" />
        <path d="m880 130 12-10 6 20-12 20-8-10Z" />
        {/* Australia, New Zealand */}
        <path d="m820 340 30-14 34-4 28 8 20 22-2 28-20 20-30 4-24-8-26-6-14-18Z" />
        <path d="m960 400 8-8 4 18-10 10Z" />
      </g>
    </svg>
  );
}

/** Hand-drawn brush stroke placed under the last words of the heading. */
function BrushUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 34" aria-hidden="true" preserveAspectRatio="none" className={className}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18C70 9 160 6 252 12" strokeWidth="6" />
        <path d="M86 27c34-8 74-11 110-7" strokeWidth="5" />
        <path d="M196 20c-26 3-56 7-84 11" strokeWidth="3.5" />
      </g>
    </svg>
  );
}

export default function LifeSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  function toggle() {
    if (expanded) sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setExpanded((v) => !v);
  }

  return (
    <section ref={sectionRef} className="relative scroll-mt-16 overflow-hidden bg-powder-soft py-14 lg:py-16">
      <WorldMap className="pointer-events-none absolute left-1/2 top-[56%] w-[1500px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80" />

      <div className="container-x relative">
        <h2 className="text-center text-[2.4rem] font-normal leading-tight text-ink sm:text-5xl lg:text-[3.6rem]">
          Life That{" "}
          <span className="relative inline-block whitespace-nowrap">
            Defines Us!
            <BrushUnderline className="absolute -bottom-7 -left-[8%] h-6 w-[118%] text-yale sm:-bottom-9 sm:h-8" />
          </span>
        </h2>

        <ul id="life-cards" className="mx-auto mt-16 grid max-w-[1300px] gap-x-7 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {lifeCards.map((c, i) => {
            const extra = i >= INITIAL;
            if (extra && !expanded) return null;
            return (
              <li key={c.title} className={extra ? "fade-up" : ""} style={extra ? { animationDelay: `${(i - INITIAL) * 70}ms` } : undefined}>
                <article className="group h-full rounded-md bg-white px-8 pb-12 pt-10 text-center shadow-[7px_7px_0_0_#173B64] transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0_0_#173B64]">
                  <FeatureArt
                    name={c.art}
                    className="mx-auto h-[120px] w-[140px] transition duration-300 group-hover:-translate-y-1.5 group-hover:scale-105"
                  />
                  <h3 className="mt-6 text-[1.5rem] font-normal uppercase leading-snug tracking-wide text-yale">{c.title}</h3>
                  <p className="mx-auto mt-3 max-w-[22rem] text-[1.05rem] leading-relaxed text-muted">{c.text}</p>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-16 text-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={expanded}
            aria-controls="life-cards"
            className="inline-flex items-center gap-2 rounded bg-yale px-10 py-3.5 text-lg font-semibold text-white shadow-[0_6px_14px_rgba(23,59,100,0.35)] transition hover:-translate-y-0.5 hover:bg-naples hover:text-yale"
          >
            {expanded ? "Show less" : "Read more"}
            <IconChevron className={`h-5 w-5 transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`} />
          </button>
        </p>
      </div>
    </section>
  );
}
