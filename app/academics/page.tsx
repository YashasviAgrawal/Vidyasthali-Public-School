import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ResultBars from "@/components/ResultBars";
import { campusFacts, stages, staff } from "@/lib/site";

export const metadata: Metadata = { title: "Academics" };

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        intro="The CBSE curriculum from Nursery to Class XII, taught in English, with continuous evaluation and individual attention in the lab and library."
      />

      <section className="container-x py-20">
        <h2 className="heading">Stages of school</h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-yale/10 md:grid-cols-5">
          {stages.map((s) => (
            <li key={s.name} className="bg-white p-6">
              <p className="text-xl font-bold text-yale">{s.name}</p>
              <p className="mt-1 text-sm font-semibold text-yale">{s.classes}</p>
              <p className="mt-4 text-[0.95rem] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-alice">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-2">
          <div>
            <h2 className="heading">How we teach and assess</h2>
            <div className="mt-6 max-w-prose space-y-4 text-lg">
              <p>
                Students are assessed continuously through periodic tests, examinations and teachers&apos;
                day-to-day observation. Promotion is based on the whole year&apos;s work, and parents&apos;
                views are taken into account.
              </p>
              <p>
                In the laboratories, students carry out experiments themselves rather than in large groups. In
                the computer labs, each student works on their own computer. Smart classrooms bring digital
                lessons into everyday teaching.
              </p>
              <p>
                The library is classified and run by a qualified librarian who helps children find what they need.
              </p>
            </div>
          </div>
          <div className="self-start rounded-lg bg-white p-8">
            <h3 className="text-2xl font-bold">Our teachers</h3>
            <ul className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                ["PGT", staff.pgt, "Classes XI–XII"],
                ["TGT", staff.tgt, "Classes VI–X"],
                ["PRT", staff.prt, "Classes I–V"],
              ].map(([k, v, note]) => (
                <li key={k as string} className="rounded-xl bg-alice p-4">
                  <p className="text-3xl font-bold text-yale">{v}</p>
                  <p className="font-semibold">{k}</p>
                  <p className="text-xs text-muted">{note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              {staff.total} teachers in all, supported by a special educator, a wellness counsellor, a librarian
              and coaches for physical education and dance. The campus has {campusFacts.labs} laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="heading">Board results</h2>
          <p className="mt-4 max-w-md text-muted">CBSE Class X and Class XII results for 2025.</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ResultBars />
        </div>
      </section>
    </>
  );
}
