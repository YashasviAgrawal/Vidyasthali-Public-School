import { highlights } from "@/lib/site";
import { IconStar } from "./Icons";

/** Naples Yellow scrolling strip of highlights (Yale text). Becomes a static, wrapped list when reduced motion is on. */
export default function Ticker() {
  // Rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const items = (copy: boolean) =>
    highlights.map((h) => (
      <li
        key={(copy ? "b" : "a") + h}
        aria-hidden={copy || undefined}
        className={`flex shrink-0 items-center gap-2 pr-2 ${copy ? "motion-reduce:hidden" : ""}`}
      >
        <span>{h}</span>
        <IconStar className="h-5 w-5 text-yale" />
      </li>
    ));

  return (
    <section aria-label="School highlights" className="overflow-hidden bg-naples py-2 text-lg font-semibold text-yale sm:text-xl">
      <ul className="marquee flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-1 motion-reduce:px-4">
        {items(false)}
        {items(true)}
      </ul>
    </section>
  );
}
