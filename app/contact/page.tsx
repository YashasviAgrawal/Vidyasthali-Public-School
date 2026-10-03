import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { campuses, school } from "@/lib/site";

export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact us" intro="Call, email or visit either campus. The school office is open during school hours, Monday to Saturday." />

      <section className="container-x grid gap-8 py-20 md:grid-cols-2">
        {campuses.map((c) => (
          <article key={c.name} className="card p-8">
            <h2 className="text-2xl font-bold">{c.name}</h2>
            <address className="mt-3 not-italic text-muted">{c.address}</address>
            <ul className="mt-5 space-y-2">
              {c.phones.map((p) => (
                <li key={p}>
                  <span className="text-sm text-muted">Phone </span>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="link">{p}</a>
                </li>
              ))}
              <li>
                <span className="text-sm text-muted">Email </span>
                <a href={`mailto:${school.email}`} className="link">{school.email}</a>
              </li>
            </ul>
          </article>
        ))}
      </section>

      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-lg border border-line">
          <iframe
            title="Map showing Vidyasthali Public School, Durgapura, Jaipur"
            src={school.mapEmbed}
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a href={school.mapLink} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-block">
          Get directions in Google Maps
        </a>
      </section>

      <section className="bg-alice">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="heading">Write to us</h2>
            <p className="mt-3 text-muted">For admission questions, use this form and the admissions office will call you back.</p>
          </div>
          <div className="rounded-lg bg-white p-6 sm:p-8 lg:col-span-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
