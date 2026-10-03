import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { campuses, school } from "@/lib/site";

export const metadata: Metadata = { title: "Pay fees online" };

export default function PayFeesPage() {
  return (
    <>
      <PageHero
        title="Pay fees online"
        intro="Fees are paid securely through Eduqfix. Choose your child's campus, then enter the student details on the payment page."
      />
      <section className="container-x grid gap-8 py-20 md:grid-cols-2">
        {campuses.map((c) => (
          <article key={c.name} className="flex flex-col card p-8">
            <h2 className="text-2xl font-bold">{c.name}</h2>
            <p className="mt-2 text-muted">{c.address}</p>
            <a href={c.payUrl} target="_blank" rel="noopener noreferrer" className="btn-yale mt-8 self-start">
              Pay fees for {c.area}
            </a>
          </article>
        ))}
      </section>
      <p className="container-x pb-20 text-muted">
        Payment not showing, or charged twice? Call the accounts office on{" "}
        <a href={`tel:${school.phoneHref}`} className="link">{school.phones[0]}</a> with your transaction ID.
      </p>
    </>
  );
}
