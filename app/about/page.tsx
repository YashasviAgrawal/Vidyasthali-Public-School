import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { campusFacts, leaders, philosophy, photos, school, staff } from "@/lib/site";

export const metadata: Metadata = { title: "About the school" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Vidyasthali"
        intro="A public school for boys and girls that teaches children to understand the modern world through an Indian point of view."
      />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="heading">What we stand for</h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg">
            <p>
              Vidyasthali Public School is run by the {school.society} and affiliated to the Central Board of
              Secondary Education up to Class XII. We aim for academic excellence, but our first job is to help
              children think creatively and grow into people of good character.
            </p>
            <p>
              Personality development is built into the school week through yoga, dance, drama, debates, quizzes
              and clubs. Teachers pay close attention to each child&apos;s wellbeing as well as their marks.
            </p>
          </div>

          <h3 className="mt-12 text-2xl font-semibold">Every student is introduced to</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {philosophy.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-yale" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-card lg:col-span-5">
          <Photo src={photos.about} alt="Students at Vidyasthali Public School" className="h-full w-full" />
        </div>
      </section>

      <section className="bg-alice">
        <div className="container-x py-20">
          <h2 className="section-title">Our Leadership</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leaders.map((p) => (
              <article key={p.role} className="card overflow-hidden text-center">
                <Photo src={p.photo} alt={`${p.name}, ${p.role}`} className="aspect-[4/3] w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="font-semibold text-yale/70">({p.role})</p>
                  <p className="mt-2 text-sm text-muted">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="heading">The school at a glance</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left">
            <tbody className="divide-y divide-line">
              {[
                ["Board", `CBSE, New Delhi (Affiliation No. ${school.affiliation}, School Code ${school.schoolCode})`],
                ["Level", school.level],
                ["Medium of instruction", school.medium],
                ["Type", "Co-educational day school"],
                ["Teachers", `${staff.total} (${staff.pgt} PGT, ${staff.tgt} TGT, ${staff.prt} PRT), plus a special educator and a wellness counsellor`],
                ["Campus area", `${campusFacts.areaSqm.toLocaleString("en-IN")} sq m`],
                ["Laboratories", `${campusFacts.labs}, including computer labs`],
                ["Managed by", school.society],
              ].map(([k, v]) => (
                <tr key={k}>
                  <th scope="row" className="w-1/3 py-4 pr-6 font-semibold text-yale">{k}</th>
                  <td className="py-4">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-muted">
          Source: the school&apos;s CBSE mandatory public disclosure.{" "}
          <Link href="/disclosure" className="link">View all documents</Link>
        </p>
      </section>
    </>
  );
}
