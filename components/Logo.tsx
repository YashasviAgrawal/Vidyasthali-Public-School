"use client";

import { useEffect, useRef, useState } from "react";
import { photos, school } from "@/lib/site";

/**
 * School logo with name. Uses /public/images/logo.png (the round Vidyasthali badge);
 * falls back to a shield monogram if the file is missing.
 * `light` is for dark backgrounds (footer); `stacked` centres the name under the crest.
 */
export default function Logo({ light = false, stacked = false }: { light?: boolean; stacked?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const crest = failed ? (
    <svg viewBox="0 0 48 56" aria-hidden="true" className={stacked ? "h-28 w-24 lg:h-40 lg:w-[8.5rem]" : "h-12 w-10 shrink-0 sm:h-14 sm:w-12"}>
      <path d="M24 2 4 9v17c0 13 8.5 23.5 20 28 11.5-4.5 20-15 20-28V9Z" fill={light ? "#fff" : "#173B64"} />
      <path d="M24 7 9 12.5V26c0 10 6.4 18.4 15 22 8.6-3.6 15-12 15-22V12.5Z" fill={light ? "#173B64" : "#fff"} />
      <text x="24" y="35" textAnchor="middle" fontFamily="var(--font-deva), serif" fontSize="20" fill={light ? "#fff" : "#173B64"}>
        वि
      </text>
    </svg>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={photos.logo}
      alt=""
      onError={() => setFailed(true)}
      width={210}
      height={210}
      className={`shrink-0 rounded-full object-contain shadow-card ring-1 ring-black/10 ${
        stacked ? "h-28 w-28 lg:h-40 lg:w-40" : "h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      }`}
    />
  );

  if (stacked) {
    return (
      <span className="flex flex-col items-center text-center">
        {crest}
        <span className={`mt-3 font-crest text-2xl font-bold leading-tight ${light ? "text-white" : "text-yale"}`}>
          Vidyasthali
        </span>
        <span className={`text-lg font-semibold ${light ? "text-white" : "text-yale"}`}>Public School</span>
      </span>
    );
  }

  return (
    <span className="flex items-center gap-3">
      {crest}
      <span className="leading-none">
        <span
          className={`block font-crest text-[1.05rem] font-bold uppercase tracking-wide sm:text-2xl xl:text-[1.7rem] ${
            light ? "text-white" : "text-yale"
          }`}
        >
          {school.name}
        </span>
        <span className={`mt-1 block font-deva text-xs sm:text-sm ${light ? "text-white/70" : "text-muted"}`}>
          {school.hindiName}
        </span>
      </span>
    </span>
  );
}
