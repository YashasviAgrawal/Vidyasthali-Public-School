import { results } from "@/lib/site";

export default function ResultBars({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="space-y-8">
      {results.map((r) => (
        <li key={r.label}>
          <div className="flex items-baseline justify-between gap-4">
            <span className={`text-xl font-bold ${dark ? "text-white" : "text-yale"}`}>
              {r.label} board exam, {r.year}
            </span>
            <span className={`text-3xl font-extrabold ${dark ? "text-white" : "text-yale"}`}>{r.percent}%</span>
          </div>
          <div
            className={`mt-3 h-2.5 overflow-hidden rounded-full ${dark ? "bg-white/15" : "bg-alice"}`}
            role="img"
            aria-label={`${r.percent} percent pass rate`}
          >
            <div className={`h-full rounded-full ${dark ? "bg-white" : "bg-yale"}`} style={{ width: `${r.percent}%` }} />
          </div>
          <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-muted"}`}>
            {r.passed} of {r.registered} students passed
          </p>
        </li>
      ))}
    </ul>
  );
}
