import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { admissionDocs, ageGuide, docBase, school } from "@/lib/site";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  { title: "Send an enquiry", text: "Fill in the form below or call the school office. We'll tell you if seats are available in your child's class." },
  { title: "Visit the campus", text: "Meet the Principal or Coordinator, see the classrooms and collect the admission form." },
  { title: "Submit the form", text: "Return the completed form with the documents listed on this page." },
  { title: "Confirm the seat", text: "Once the school confirms admission, pay the admission and first-quarter fees to secure the seat." },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        intro="Admission is open from Nursery to Class XI, subject to seats. Here's how it works and what you'll need."
      />

      <section className="container-x py-20">
        <h2 className="heading">How admission works</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-naples text-xl font-bold text-yale">
                {i + 1}
              </span>
              <p className="mt-4 text-xl font-semibold text-yale">{s.title}</p>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-alice">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-2">
          <div>
            <h2 className="heading">Minimum age</h2>
            <p className="mt-2 text-muted">Age your child should have reached for each entry class.</p>
            <table className="mt-6 w-full overflow-hidden rounded-xl bg-white text-left">
              <thead className="bg-yale text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Class</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Minimum age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {ageGuide.map((a) => (
                  <tr key={a.grade}>
                    <td className="px-5 py-3 font-medium">{a.grade}</td>
                    <td className="px-5 py-3">{a.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="heading">Documents to bring</h2>
            <ul className="mt-6 space-y-3">
              {admissionDocs.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-yale" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 card p-6">
              <h3 className="text-xl font-bold">Fee structure</h3>
              <p className="mt-2 text-muted">
                The approved fee structure for the current session is published with our mandatory disclosure.
              </p>
              <a href={`${docBase}jpr_fee_structure.pdf`} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-block">
                Open the fee structure (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="container-x scroll-mt-28 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="heading">Send an admission enquiry</h2>
            <p className="mt-4 text-muted">
              The admissions office will call you back. Prefer to talk now? Call{" "}
              <a href={`tel:${school.phoneHref}`} className="link">{school.phones[0]}</a>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
