import Link from "next/link";
import { photos } from "@/lib/site";
import Photo from "./Photo";

export default function PageHero({ title, intro }: { title: string; intro?: string }) {
  return (

      <section className="relative overflow-hidden bg-yale-deep md:mx-[2.6%]">
        <div aria-hidden="true" className="absolute inset-0">
          <Photo src={photos.hero} alt="" className="h-full w-full opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yale-deep/95 via-yale/80 to-yale-light/60" />
        <div className="container-x relative pb-24 pt-14 text-center sm:pb-28 sm:pt-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex justify-center gap-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{title}</li>
            </ol>
          </nav>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-normal text-white sm:text-5xl">{title}</h1>
          <span aria-hidden="true" className="mx-auto mt-5 block h-1 w-[108px] rounded-full bg-[linear-gradient(90deg,#fff_0_55%,#FFDE70_55%_100%)]" />
          {intro && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{intro}</p>}
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[40px] w-full sm:h-[64px]"
        >
          <path d="M0 64c160-40 320-40 480 0s320 40 480 0 320-40 480 0v56H0Z" fill="#fff" fillOpacity=".35" />
          <path d="M0 84c180-34 360 22 540 0s360-44 540-8 270 36 360 20v24H0Z" fill="#fff" fillOpacity=".6" />
          <path d="M0 100c240-24 480 16 720 4s480-26 720-2v18H0Z" fill="#fff" />
        </svg>
      </section>

  );
}
