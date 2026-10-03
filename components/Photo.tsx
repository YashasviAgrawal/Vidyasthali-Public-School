"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shows a school photo. If the file is missing from /public/images,
 * it renders a yale brand panel instead of a broken image.
 */
export default function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(!src);

  // Catches images that failed before React hydrated and attached onError.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    // Branded panel: yale gradient with a faint crest watermark, so empty slots look intentional.
    return (
      <div
        {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })}
        className={`relative overflow-hidden bg-gradient-to-br from-yale-deep via-yale-light to-yale ${className}`}
      >
        <span className="pointer-events-none absolute inset-0 grid place-items-center font-deva text-[min(40vw,9rem)] leading-none text-white/[0.07] select-none">
          वि
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
