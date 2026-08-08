import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectStep = {
  label: string;
  title: string;
  body: string;
};

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  role: string;
  color: string;
  url?: string;
  github?: string;
  tags: string[];
  images: string[];
  labels?: string[];
  prjCode?: string;
  urlLabel?: string;
  summary: string;
  steps?: ProjectStep[];
};

export type Project = ProjectFrontmatter & {
  content: string;
};

function readProjectFile(fileName: string): Project {
  const filePath = path.join(PROJECTS_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    ...(data as ProjectFrontmatter),
    content,
  };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort(); // filenames drive display order (01 otootag, ... alphabetical is fine for our 3)

  // Preserve a stable, intentional order matching PRJ-01/02/03 rather than
  // relying purely on alphabetical filename sort.
  const order = ["otootag.mdx", "web-development.mdx", "meta-ads.mdx"];
  const ordered = order.filter((f) => files.includes(f));
  const rest = files.filter((f) => !order.includes(f));

  return [...ordered, ...rest].map(readProjectFile);
}

export function getProjectBySlug(slug: string): Project | null {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(PROJECTS_DIR, fileName);
  if (!fs.existsSync(filePath)) return null;
  return readProjectFile(fileName);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}
