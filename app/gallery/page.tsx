import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { gallery } from "@/lib/site";

export const metadata: Metadata = { title: "Photo gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Photo gallery" intro="Moments from classrooms, the playground, festivals and school events." />
      <section className="container-x py-16">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <li key={g.src} className="mb-5 break-inside-avoid">
              <figure>
                <Photo
                  src={g.src}
                  alt={g.alt}
                  className={`w-full rounded-xl ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                />
                <figcaption className="mt-2 text-sm text-muted">{g.alt}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
