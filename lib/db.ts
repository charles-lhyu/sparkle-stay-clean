import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type JobRecord = {
  id: string;
  status: string;
  title: string;
  service: string;
  location: string;
  date: string;
  quote: string;
  client: string;
  outcome: string;
};

export type CommentRecord = {
  id: string;
  author: string;
  jobRef: string;
  body: string;
  images: string[];
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const jobsFile = path.join(dataDir, "jobs.json");
const commentsFile = path.join(dataDir, "comments.json");
export const uploadsDir = path.join(process.cwd(), "public", "uploads", "comments");

export function normalizeJobRef(raw: string) {
  const compact = raw.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!compact) return "";
  if (compact.startsWith("JR")) return `JR-${compact.slice(2)}`;
  return compact;
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const text = await readFile(file, "utf8");
    return JSON.parse(text) as T;
  } catch {
    return fallback;
  }
}

export async function listJobs() {
  return readJson<JobRecord[]>(jobsFile, []);
}

export async function findJob(rawRef: string) {
  const id = normalizeJobRef(rawRef);
  if (!id) return null;
  const jobs = await listJobs();
  return jobs.find((job) => job.id === id) ?? null;
}

export async function listComments() {
  const comments = await readJson<CommentRecord[]>(commentsFile, []);
  return comments.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export async function addComment(comment: CommentRecord) {
  await mkdir(dataDir, { recursive: true });
  const comments = await listComments();
  comments.push(comment);
  await writeFile(commentsFile, `${JSON.stringify(comments, null, 2)}\n`, "utf8");
  return comment;
}
