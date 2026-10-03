import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { campusFacts, disclosureDocs, docBase, results, school, staff } from "@/lib/site";

export const metadata: Metadata = { title: "Mandatory public disclosure" };

export default function DisclosurePage() {
  return (
    <>
      <PageHero
        title="Mandatory public disclosure"
        intro="Information and documents published as required by CBSE, Appendix IX. Jaipur campus."
      />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="heading">General information</h2>
          <dl className="mt-6 divide-y divide-line">
            {[
              ["School", school.name],
              ["Affiliation No.", school.affiliation],
              ["School code", school.schoolCode],
              ["Address", school.address],
              ["Principal", school.principal],
              ["Email", school.email],
              ["Phone", school.phones.join(", ")],
              ["Teachers", `${staff.total} (PGT ${staff.pgt}, TGT ${staff.tgt}, PRT ${staff.prt})`],
              ["Campus area", `${campusFacts.areaSqm.toLocaleString("en-IN")} sq m`],
              ["Laboratories", `${campusFacts.labs}`],
              ["Toilets", `Girls ${campusFacts.girlsToilets}, boys ${campusFacts.boysToilets}`],
              ...results.map((r) => [`${r.label} result ${r.year}`, `${r.passed} of ${r.registered} passed (${r.percent}%)`]),
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-5 gap-4 py-3">
                <dt className="col-span-2 font-semibold text-yale">{k}</dt>
                <dd className="col-span-3">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="heading">Documents</h2>
          <p className="mt-2 text-muted">Each document opens as a PDF in a new tab.</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {disclosureDocs.map((d) => (
              <li key={d.file}>
                <a
                  href={`${docBase}${d.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 font-medium text-yale hover:bg-alice"
                >
                  <span>{d.title}</span>
                  <span className="shrink-0 rounded bg-alice px-2 py-0.5 text-xs font-semibold text-muted">PDF</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
