"use client";

import { useRef, useState } from "react";
import { stageGroups, stages } from "@/lib/site";
import Photo from "./Photo";

/** Tabbed cards in the style of the reference's "Real People & Real Stories" section. */
export default function StageTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent) {
    const last = stageGroups.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const cards = stages.filter((s) => stageGroups[active].stages.includes(s.name));

  return (
    <div>
      <div role="tablist" aria-label="Stages of school" onKeyDown={onKeyDown} className="flex flex-wrap justify-center gap-3 sm:gap-9">
        {stageGroups.map((g, i) => (
          <button
            key={g.tab}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`stage-tab-${i}`}
            aria-selected={i === active}
            aria-controls="stage-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`rounded-md px-6 py-3 text-lg transition-colors sm:px-9 sm:text-xl ${
              i === active ? "bg-yale text-white" : "bg-powder-soft text-yale/80 hover:bg-powder hover:text-yale"
            }`}
          >
            {g.tab}
          </button>
        ))}
      </div>

      <div
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-tab-${active}`}
        className="mt-10 flex flex-wrap justify-center gap-5"
      >
        {cards.map((c) => (
          <article
            key={c.name}
            className="fade-up w-full max-w-[270px] overflow-hidden rounded-t-lg bg-gradient-to-b from-yale-light via-yale to-yale-deep px-[30px] pb-6 pt-4 text-center text-white shadow-frame"
          >
            <p className="text-xl font-extrabold uppercase italic tracking-wide text-naples">{c.classes}</p>
            <div className="relative mt-3 overflow-hidden rounded-lg">
              <Photo src={c.photo} alt="" className="aspect-[3/4] w-full" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-12">
                <p className="font-serif text-[0.95rem] leading-snug">&ldquo;{c.text}&rdquo;</p>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">{c.name}</h3>
            <p className="text-sm italic text-white/75">{c.classes}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
