"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/site";
import { IconChevron } from "./Icons";
import Photo from "./Photo";

const INTERVAL = 5500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, count, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="bg-white md:px-[2.6%]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
        touchX.current = null;
      }}
    >
      <div className="relative h-[300px] overflow-hidden bg-yale-deep sm:h-[440px] lg:h-[650px]">
        {heroSlides.map((s, i) => (
          <div
            key={s.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Photo
              src={s.src}
              alt={s.alt}
              priority={i === 0}
              className={`h-full w-full transition-transform duration-[6000ms] ease-out ${i === index ? "scale-105" : "scale-100"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div
              key={i === index ? `on-${index}` : "off"}
              className={`absolute bottom-[22%] left-5 right-5 sm:left-10 lg:bottom-[25%] lg:left-[54px] ${i === index ? "fade-up" : "invisible"}`}
            >
              <p className="text-xl font-normal leading-snug text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-3xl lg:text-[2.6rem] lg:leading-[1.2]">
                {s.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </p>
            </div>
          </div>
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center bg-yale/70 text-white transition hover:bg-naples hover:text-yale sm:left-4"
            >
              <span className="sr-only">Previous slide</span>
              <IconChevron dir="left" className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center bg-yale/70 text-white transition hover:bg-naples hover:text-yale sm:right-4"
            >
              <span className="sr-only">Next slide</span>
              <IconChevron className="h-6 w-6" />
            </button>
            <div className="absolute bottom-[13%] right-5 z-10 flex gap-2 sm:right-10">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                >
                  <span className="sr-only">Go to slide {i + 1}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Layered wave at the bottom edge */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[42px] w-full sm:h-[70px] lg:h-[96px]"
        >
          <path d="M0 64c160-40 320-40 480 0s320 40 480 0 320-40 480 0v56H0Z" fill="#fff" fillOpacity=".35" />
          <path d="M0 84c180-34 360 22 540 0s360-44 540-8 270 36 360 20v24H0Z" fill="#fff" fillOpacity=".6" />
          <path d="M0 100c240-24 480 16 720 4s480-26 720-2v18H0Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
}
