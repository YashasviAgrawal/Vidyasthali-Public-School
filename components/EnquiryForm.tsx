"use client";

import { useState } from "react";
import { gradesForEnquiry } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"parentName" | "phone" | "childName" | "grade", string>>;

const field =
  "mt-1.5 w-full rounded-lg border border-yale/20 bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-yale focus:outline-none focus:ring-2 focus:ring-yale/15";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const phone = (data.phone || "").replace(/[\s-]/g, "").replace(/^(\+91|0)/, "");

    const next: Errors = {};
    if (!data.parentName?.trim()) next.parentName = "Enter the parent's or guardian's name.";
    if (!/^[6-9]\d{9}$/.test(phone)) next.phone = "Enter a 10-digit mobile number.";
    if (!data.childName?.trim()) next.childName = "Enter the child's name.";
    if (!data.grade) next.grade = "Choose the class you're applying for.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phone }),
      });
      if (!res.ok) throw new Error();
      setSentTo(phone);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg border border-line bg-alice p-8">
        <h3 className="text-2xl font-bold">Enquiry sent</h3>
        <p className="mt-2">
          The admissions office will call you on {sentTo}. You can also call
          <a href="tel:+911412763165" className="link">0141 276 3165</a> during school hours.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="link mt-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-sm font-medium text-red-700">{errors[k]}</p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="parentName" className="font-medium">Parent or guardian name</label>
        <input id="parentName" name="parentName" autoComplete="name" className={field}
          aria-invalid={!!errors.parentName} aria-describedby={errors.parentName ? "parentName-error" : undefined} />
        {err("parentName")}
      </div>
      <div>
        <label htmlFor="phone" className="font-medium">Mobile number</label>
        <input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" className={field}
          aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="childName" className="font-medium">Child&apos;s name</label>
        <input id="childName" name="childName" className={field}
          aria-invalid={!!errors.childName} aria-describedby={errors.childName ? "childName-error" : undefined} />
        {err("childName")}
      </div>
      <div>
        <label htmlFor="grade" className="font-medium">Applying for</label>
        <select id="grade" name="grade" defaultValue="" className={field}
          aria-invalid={!!errors.grade} aria-describedby={errors.grade ? "grade-error" : undefined}>
          <option value="" disabled>Choose a class</option>
          {gradesForEnquiry.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {err("grade")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="font-medium">
          Email <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="font-medium">
          Anything you&apos;d like to ask <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-yale disabled:opacity-60">
          {status === "sending" ? "Sending enquiry…" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm font-medium text-red-700">
            The enquiry didn&apos;t go through. Check your connection and try again, or call 0141 276 3165.
          </p>
        )}
      </div>
    </form>
  );
}
