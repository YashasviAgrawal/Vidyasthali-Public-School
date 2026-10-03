import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <h1 className="text-4xl font-bold">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-4 max-w-prose text-muted">
        The link may be old. Use the menu above, or go back to the home page.
      </p>
      <Link href="/" className="btn-yale mt-8">
        Go to the home page
      </Link>
    </section>
  );
}
