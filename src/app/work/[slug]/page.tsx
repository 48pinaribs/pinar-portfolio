import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Vaka Çalışması · Pınar`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const style = { "--rc": project.color } as CSSProperties;

  return (
    <main style={style}>
      <section style={{ paddingTop: 172 }}>
        <div className="wrap">
          <Link href="/#work" className="code" style={{ display: "inline-block", marginBottom: 26 }}>
            ← Tüm işler
          </Link>

          <div className="eyebrow" style={{ color: "var(--rc, var(--accent))" }}>
            <span className="ln" style={{ background: "var(--rc, var(--accent))" }} />
            {project.prjCode ?? "PRJ"} · VAKA ÇALIŞMASI
          </div>

          <h1 className="h1" style={{ fontSize: "clamp(34px, 6vw, 64px)" }}>
            {project.title}
          </h1>
          <p className="lede" style={{ maxWidth: 640 }}>
            {project.role}
            {project.urlLabel ? ` · ${project.urlLabel}` : ""}
          </p>

          <div className="r-meta" style={{ justifyContent: "flex-start", marginTop: 18 }}>
            {project.tags.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>

          <div className="links" style={{ marginTop: 28 }}>
            {project.url && (
              <a
                className="linkbtn live"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Canlı site →
              </a>
            )}
            {project.github && (
              <a
                className="linkbtn"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <article className="work-article" style={{ maxWidth: 760 }}>
            <MDXRemote source={project.content} />
          </article>
        </div>
      </section>
    </main>
  );
}
