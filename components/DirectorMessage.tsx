import { directorMessage } from "@/lib/site";
import Reveal from "./Reveal";

/** Decorative mandala, drawn in currentColor. */
function Mandala({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <g fill="currentColor">
        {petals.map((a) => (
          <ellipse key={a} cx="100" cy="42" rx="14" ry="38" transform={`rotate(${a} 100 100)`} />
        ))}
        {inner.map((a) => (
          <ellipse key={a} cx="100" cy="64" rx="9" ry="24" transform={`rotate(${a} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="18" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="100" cy="100" r="30" />
        <circle cx="100" cy="100" r="96" />
      </g>
    </svg>
  );
}

/** Outline double quote mark. */
function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 44" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M4 40V24C4 12 10 5 22 3v7c-6 2-9 6-9 12h9v18Z" />
        <path d="M38 40V24c0-12 6-19 18-21v7c-6 2-9 6-9 12h9v18Z" />
      </g>
    </svg>
  );
}

export default function DirectorMessage() {
  const { quote, name, role, cutout } = directorMessage;
  return (
    <section aria-labelledby="director-message" className="relative overflow-hidden bg-yale text-white">
      <Mandala className="pointer-events-none absolute -bottom-24 -left-20 w-72 text-white/[0.06] sm:w-96" />
      <Mandala className="pointer-events-none absolute -top-28 left-[38%] hidden w-64 text-white/[0.04] lg:block" />

      <div className="container-x relative grid items-end gap-6 pt-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pt-20">
        <Reveal className="pb-4 lg:pb-20">
          <h2 id="director-message" className="text-sm font-bold uppercase tracking-[0.25em] text-naples">
            Our Leadership
          </h2>
          <QuoteMark className="mt-6 w-16 text-naples sm:w-20" />
          <blockquote className="mt-6 max-w-[34rem] text-xl font-semibold leading-[1.6] text-white sm:text-[1.45rem]">
            {quote}
          </blockquote>

          <span aria-hidden="true" className="mt-12 block h-px w-32 bg-white/70" />
          <p className="mt-6 font-serif text-[1.7rem] font-bold leading-tight text-white">{name}</p>
          <p className="mt-1 text-lg text-powder-soft">{role}</p>
        </Reveal>

        <div className="relative mx-auto h-[330px] w-full max-w-[380px] sm:h-[370px] lg:mx-0 lg:ml-auto lg:h-[420px]">
          {/* Lighter panel behind the portrait */}
          <div className="absolute inset-x-0 bottom-[16%] top-[16%] overflow-hidden rounded-[28px] bg-yale-light">
            <Mandala className="absolute -right-16 -top-16 w-64 text-white/[0.07]" />
            <Mandala className="absolute -bottom-20 -left-16 w-56 text-white/[0.05]" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cutout}
            alt={`${name}, ${role}`}
            width={360}
            height={390}
            loading="lazy"
            className="absolute bottom-0 left-1/2 h-[88%] max-h-[360px] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_18px_30px_rgba(6,17,31,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
