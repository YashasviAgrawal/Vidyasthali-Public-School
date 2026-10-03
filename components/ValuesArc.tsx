import { coreValues, photos } from "@/lib/site";
import { iconByName } from "./Icons";
import Logo from "./Logo";
import Photo from "./Photo";

// Positions on a 1000 x 520 box: arc centred at (500, 500), radius 420, at 160°, 125°, 90°, 55°, 20°.
const spots = [
  { x: 10.5, y: 68.5 },
  { x: 25.9, y: 30 },
  { x: 50, y: 15.4 },
  { x: 74.1, y: 30 },
  { x: 89.5, y: 68.5 },
];

function Bubble({ title, icon }: { title: string; icon: keyof typeof iconByName }) {
  const Icon = iconByName[icon];
  return (
    <div className="group flex flex-col items-center text-center">
      <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-yale shadow-card ring-1 ring-powder-line transition duration-300 group-hover:scale-110 group-hover:bg-yale group-hover:text-white lg:h-[110px] lg:w-[110px]">
        <Icon className="h-9 w-9 lg:h-12 lg:w-12" />
      </span>
      <span className="mt-3 max-w-[10rem] text-[0.95rem] font-bold leading-tight text-ink/85 lg:text-lg">{title}</span>
    </div>
  );
}

export default function ValuesArc() {
  return (
    <section className="relative overflow-hidden bg-alice">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] grayscale">
        <Photo src={photos.hero} alt="" className="h-full w-full" />
      </div>
      <div className="container-x relative pb-8 pt-16 lg:pb-0 lg:pt-20">
        <h2 className="section-title">Core Values That Nurture Your Child&apos;s Growth</h2>

        {/* Desktop: arc */}
        <div className="relative mx-auto mt-6 hidden aspect-[1000/520] max-w-[1100px] lg:block">
          <svg viewBox="0 0 1000 520" aria-hidden="true" className="absolute inset-0 h-full w-full">
            <path d="M80 520a420 420 0 0 1 840 0" fill="none" stroke="#fff" strokeWidth="9" />
            <path d="M170 520a330 330 0 0 1 660 0" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" />
            <path d="M250 520a250 250 0 0 1 500 0" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="2" />
            <path d="M330 520a170 170 0 0 1 340 0" fill="none" stroke="#fff" strokeOpacity=".4" strokeWidth="1.5" />
          </svg>
          <ul>
            {coreValues.map((v, i) => (
              <li
                key={v.title}
                className="absolute -translate-x-1/2 -translate-y-[55px]"
                style={{ left: `${spots[i].x}%`, top: `${spots[i].y}%` }}
              >
                <Bubble title={v.title} icon={v.icon} />
              </li>
            ))}
          </ul>
          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2">
            <Logo stacked />
          </div>
        </div>

        {/* Mobile and tablet: crest + grid */}
        <div className="mt-10 lg:hidden">
          <div className="flex justify-center">
            <Logo stacked />
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {coreValues.map((v) => (
              <li key={v.title}>
                <Bubble title={v.title} icon={v.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
