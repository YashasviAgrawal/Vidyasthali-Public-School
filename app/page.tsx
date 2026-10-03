import Link from "next/link";
import Counter from "@/components/Counter";
import DirectorMessage from "@/components/DirectorMessage";
import EnquiryForm from "@/components/EnquiryForm";
import HeroSlider from "@/components/HeroSlider";
import IntroCards from "@/components/IntroCards";
import { IconArrow, iconByName } from "@/components/Icons";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import LifeSection from "@/components/LifeSection";
import StageTabs from "@/components/StageTabs";
import Ticker from "@/components/Ticker";
import ValuesArc from "@/components/ValuesArc";
import {
  counters,
  docBase,
  exploreTiles,
  photos,
  programmes,
  recognitions,
  school,
  taglineBand,
} from "@/lib/site";


export default function Home() {
  return (
    <>
      <h1 className="sr-only">{school.name}, Durgapura, Jaipur</h1>

      {/* Crimson tagline band */}
      <div className="bg-yale px-4 py-2 text-center text-white">
        <p className="text-xl font-semibold leading-tight sm:text-[1.75rem]">{taglineBand.title}</p>
        <p className="mt-0.5 text-sm text-powder-soft sm:text-xl">{taglineBand.subtitle}</p>
      </div>

      <HeroSlider />
      <Ticker />

      {/* Intro: heading + a fanned hand of four cards */}
      <section className="relative overflow-hidden bg-alice py-16 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-naples/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-powder/40 blur-3xl" />

        <div className="container-x relative">
          <Reveal>
            <h2 className="section-title mx-auto max-w-3xl">Give Your Children The Education They Deserve</h2>
          </Reveal>

          <div className="mx-auto mt-14 max-w-[1240px] lg:mt-16">
            <IntroCards />
          </div>

          <p className="mt-14 text-center lg:mt-24">
            <Link href="/admissions#enquiry" className="btn-yale px-9 py-3.5 text-lg">
              Give Your Child The Vidyasthali Edge
            </Link>
          </p>
        </div>
      </section>

      <LifeSection />

      {/* Count-up strip */}
      <section aria-label="Key numbers" className="bg-white py-12">
        <dl className="container-x mx-auto grid max-w-5xl gap-8 sm:grid-cols-3 sm:gap-0">
          {counters.map((c, i) => (
            <div key={c.label} className="relative flex flex-col-reverse items-center text-center">
              {i > 0 && (
                <span aria-hidden="true" className="absolute -left-px top-1/2 hidden h-28 w-px -translate-y-1/2 rotate-[25deg] bg-powder-line sm:block" />
              )}
              <dt className="mt-1 text-lg text-muted">{c.label}</dt>
              <dd className="text-6xl font-light text-yale sm:text-[4.2rem]">
                <Counter value={c.value} suffix={c.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <ValuesArc />

      {/* Three tall programme tiles */}
      <section className="bg-white pt-10">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {programmes.map((p) => (
            <Link key={p.title} href={p.href} className="group relative block h-[320px] overflow-hidden lg:h-[390px]">
              <Photo src={p.photo} alt="" className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition duration-500 group-hover:bg-yale/80" />
              <div className="absolute inset-x-5 bottom-6 text-white">
                <h3 className="text-3xl font-normal uppercase text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">{p.title}</h3>
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-3 text-lg text-white/90">{p.text}</p>
                    <span className="mt-3 inline-flex items-center gap-2 font-semibold">
                      Explore <IconArrow />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Be limitless: quick-link tiles */}
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="section-title">Be Limitless With Vidyasthali</h2>
          <ul className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {exploreTiles.map((t, i) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className={`group flex h-[150px] flex-col items-center justify-center rounded-md px-4 text-center text-yale shadow-[4px_4px_0_rgba(23,59,100,0.08)] transition hover:-translate-y-1 hover:bg-yale hover:text-white hover:shadow-lift sm:h-[156px] ${
                    i % 2 === 0 ? "bg-naples" : "bg-powder-soft"
                  }`}
                >
                  <span className="text-3xl font-extrabold leading-none sm:text-[2.6rem]">{t.big}</span>
                  <span className="text-2xl font-light leading-tight sm:text-3xl">{t.small}</span>
                  <span className="mt-2 text-xs font-bold uppercase tracking-wider opacity-75 sm:text-sm">{t.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Affiliations & recognitions */}
      <section className="relative overflow-hidden bg-alice">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] grayscale">
          <Photo src={photos.about} alt="" className="h-full w-full" />
        </div>
        <div className="container-x section relative">
          <h2 className="section-title">Affiliations, Recognitions &amp; Certifications</h2>
          <ul className="mx-auto mt-10 grid max-w-[1340px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {recognitions.map((r) => {
              const Icon = iconByName[r.icon];
              return (
                <li key={r.file} className="border-b border-r border-powder-line/80 [&:nth-child(5n)]:lg:border-r-0 [&:nth-last-child(-n+5)]:lg:border-b-0">
                  <a
                    href={`${docBase}${r.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 px-3 py-6 text-center"
                  >
                    <span className="grid h-24 w-24 place-items-center rounded-full bg-white text-yale shadow-card transition duration-300 group-hover:scale-105 group-hover:bg-yale group-hover:text-white lg:h-28 lg:w-28">
                      <Icon className="h-10 w-10 lg:h-12 lg:w-12" />
                    </span>
                    <span className="text-[0.95rem] font-semibold text-ink">{r.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Tabbed stage cards */}
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="section-title">Every Stage, Every Child</h2>
          <div className="mt-10">
            <StageTabs />
          </div>
        </div>
      </section>

      <DirectorMessage />

      {/* Visit us: map + enquiry, in the two-panel style of the reference's social section */}
      <section className="relative overflow-hidden bg-alice">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] grayscale">
          <Photo src={photos.life} alt="" className="h-full w-full" />
        </div>
        <div className="container-x section relative">
          <h2 className="section-title">Come &amp; Visit Us</h2>
          <div className="mx-auto mt-12 grid max-w-[1140px] gap-6 lg:grid-cols-2">
            <div className="flex flex-col border border-line bg-white">
              <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photos.logo} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full ring-1 ring-black/10" />
                <div className="leading-tight">
                  <p className="font-semibold text-ink">{school.name}</p>
                  <p className="text-sm text-muted">Durgapura, Jaipur</p>
                </div>
              </div>
              <iframe
                title="Map showing Vidyasthali Public School, Durgapura, Jaipur"
                src={school.mapEmbed}
                className="h-[320px] w-full flex-1 lg:h-auto lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 text-sm">
                <span className="text-muted">{school.address}</span>
                <a href={school.mapLink} target="_blank" rel="noopener noreferrer" className="rounded bg-yale px-3 py-1.5 font-semibold text-white transition hover:bg-naples hover:text-yale">
                  Get directions
                </a>
              </div>
            </div>
            <div className="border border-line bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold">Book a campus visit</h3>
              <p className="mt-1 text-muted">Leave your details and the admissions office will call you back.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
