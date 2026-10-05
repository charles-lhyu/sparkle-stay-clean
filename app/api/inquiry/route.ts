import { NextResponse } from "next/server";

type Inquiry = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  propertyType?: string;
  property?: string;
  bedrooms?: string;
  bathrooms?: string;
  roomCount?: string;
  date?: string;
  details?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Inquiry;
  if (!body.name || !body.email) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }

  console.log("[inquiry]", {
    at: new Date().toISOString(),
    ...body,
  });

  return NextResponse.json({ ok: true });
}
