import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { addComment, findJob, listComments, uploadsDir } from "@/lib/db";

const MAX_IMAGES = 5;
const MAX_BYTES = 2.5 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

const extensions: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function GET() {
  const comments = await listComments();
  return NextResponse.json({ comments });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const author = String(formData.get("author") ?? "").trim() || "Guest";
  const jobRefRaw = String(formData.get("jobRef") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const files = formData
    .getAll("images")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (!jobRefRaw) {
    return NextResponse.json({ error: "A job reference is required." }, { status: 400 });
  }
  if (!body) {
    return NextResponse.json({ error: "Please write a comment." }, { status: 400 });
  }
  if (files.length > MAX_IMAGES) {
    return NextResponse.json({ error: "You can attach up to 5 images." }, { status: 400 });
  }

  const job = await findJob(jobRefRaw);
  if (!job) {
    return NextResponse.json(
      { error: `No job record found for “${jobRefRaw}”. Use a completed job reference such as JR-2391.` },
      { status: 404 },
    );
  }

  for (const file of files) {
    if (!ALLOWED.has(file.type)) {
      return NextResponse.json(
        { error: "Images must be JPEG, PNG, WebP, or GIF." },
        { status: 400 },
      );
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "Each image must be under 2.5MB." }, { status: 400 });
    }
  }

  const id = crypto.randomUUID();
  await mkdir(uploadsDir, { recursive: true });
  const images: string[] = [];

  for (const [index, file] of files.entries()) {
    const ext = extensions[file.type] ?? "jpg";
    const filename = `${id}-${index + 1}.${ext}`;
    const dest = path.join(uploadsDir, filename);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(dest, buffer);
    images.push(`/uploads/comments/${filename}`);
  }

  const comment = await addComment({
    id,
    author,
    jobRef: job.id,
    body,
    images,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ comment, job }, { status: 201 });
}
