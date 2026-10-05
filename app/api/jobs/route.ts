import { NextResponse } from "next/server";
import { listJobs } from "@/lib/db";

export async function GET() {
  const jobs = await listJobs();
  return NextResponse.json({ jobs });
}
