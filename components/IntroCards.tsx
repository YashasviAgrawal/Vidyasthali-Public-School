"use client";

import { useEffect, useRef } from "react";
import { introTiles } from "@/lib/site";
import Photo from "./Photo";

const STAGGER = 130;
const DURATION = 1100;

/** Four photo cards laid out as a fanned hand, dealt from the centre when scrolled into view. */
export default function IntroCards() {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.75) return; // already on screen: show as is

    el.classList.add("deal-ready");
    let done = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.classList.add("is-in");
        // Hand control back to the normal hover transitions once the deal has finished.
        done = window.setTimeout(
          () => el.classList.remove("deal-ready", "is-in"),
          DURATION + STAGGER * (introTiles.length - 1) + 50,
        );
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(done);
    };
  }, []);

  return (
    <ul ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-7">
      {introTiles.map((t, i) => {
        const accent = t.tone === "accent";
        return (
          <li
            key={t.title}
            className="deal-card relative"
            style={{ "--d": `${i * STAGGER}ms` } as React.CSSProperties}
          >
            <article
              className={`group relative flex h-[320px] flex-col justify-between overflow-hidden rounded-[24px] p-7 shadow-lift sm:h-[360px] lg:h-[380px] ${
                accent ? "text-yale" : "text-white"
              }`}
            >
              <Photo src={t.photo} alt="" className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-110" />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  accent ? "from-naples from-40% via-naples/85 to-naples/25" : "from-yale from-40% via-yale/85 to-yale/30"
                }`}
              />

              <span
                className={`relative grid h-12 w-12 place-items-center rounded-full border-2 text-lg font-bold backdrop-blur-sm ${
                  accent ? "border-yale/70 bg-white/40" : "border-white/70 bg-white/10"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative text-left">
                <span className={`mb-4 block h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20 ${accent ? "bg-yale" : "bg-naples"}`} />
                <h3 className="text-[1.6rem] font-bold leading-tight text-inherit">{t.title}</h3>
                <p className="mt-2 text-[1.05rem] leading-snug opacity-90">{t.text}</p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
