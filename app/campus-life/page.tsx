import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { clubs, photos, sports, timings } from "@/lib/site";

export const metadata: Metadata = { title: "Campus life" };

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        title="Campus life"
        intro="Sports, clubs, competitions and community service give every child a chance to find what they love."
      />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="heading">Games and sports</h2>
          <p className="mt-5 max-w-prose text-lg">
            The playground has courts and pitches for team games, athletics tracks for jumps and throws, and space
            for traditional Indian games. Trained coaches lead physical education for every class.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {sports.map((s) => (
              <li key={s} className="rounded-full border border-yale/20 px-4 py-1.5 text-sm font-medium text-yale">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-card lg:col-span-5">
          <Photo src={photos.life} alt="Students on the school playground" className="h-full w-full" />
        </div>
      </section>

      <section className="bg-alice">
        <div className="container-x py-20">
          <h2 className="heading">Clubs</h2>
          <p className="mt-3 max-w-prose text-muted">
            Members are selected through applications and an interview with the club mentors and head girls.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {clubs.map((c) => (
              <div key={c.name} className="card border-t-4 border-yale p-6">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-2 text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-2">
        <div>
          <h2 className="heading">Competitions through the year</h2>
          <p className="mt-4 max-w-prose">
            Inter-section contests give every class a stage: storytelling in Class VI, drawing in Classes I and II,
            collage making in Class V, handwriting in Class IV, vocabulary and maths quizzes for the middle school,
            and general knowledge quizzes for Classes IX to XI. The annual cultural fest brings the whole school together.
          </p>
          <h2 className="heading mt-12">Health and care</h2>
          <p className="mt-4 max-w-prose">
            A qualified doctor and support staff are on campus to attend to minor ailments straight away. The school
            has a tie-up with multi-speciality hospitals in Jaipur for emergencies. A wellness counsellor and a special
            educator support children who need extra help.
          </p>
          <h2 className="heading mt-12">Community service</h2>
          <p className="mt-4 max-w-prose">
            Students take part in community service programmes and help during civic drives and natural calamities,
            learning to care for people less privileged than themselves.
          </p>
        </div>
        <div className="self-start rounded-lg bg-yale p-8 text-white">
          <h2 className="text-2xl font-bold text-white">School day and visiting hours</h2>
          <dl className="mt-6 divide-y divide-white/10">
            {timings.map((t) => (
              <div key={t.label} className="py-4">
                <dt className="text-sm text-white/70">{t.label}</dt>
                <dd className="font-semibold">{t.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-white/70">
            Students wear the prescribed uniform for each section and activity. Samples and a list of stockists are
            on the school notice board.
          </p>
        </div>
      </section>
    </>
  );
}
