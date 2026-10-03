import { NextResponse } from "next/server";

type Enquiry = {
  parentName?: string;
  phone?: string;
  childName?: string;
  grade?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Enquiry;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "The request body must be JSON." }, { status: 400 });
  }

  const { parentName, phone, childName, grade } = body;
  if (!parentName?.trim() || !childName?.trim() || !grade || !/^[6-9]\d{9}$/.test(phone ?? "")) {
    return NextResponse.json({ error: "Parent name, a 10-digit mobile number, child name and class are required." }, { status: 400 });
  }

  // TODO: deliver the enquiry to the admissions office.
  // Options: send an email (e.g. Resend, Nodemailer with the school's SMTP),
  // save to a Google Sheet, or store in a database.
  console.log("New admission enquiry", {
    parentName: parentName.trim(),
    phone,
    childName: childName.trim(),
    grade,
    email: body.email?.trim() || null,
    message: body.message?.trim() || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
