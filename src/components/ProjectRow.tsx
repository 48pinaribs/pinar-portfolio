"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/projects";
import Gallery from "./Gallery";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectRow({ project, index }: Props) {
  const [open, setOpen] = useState(false);
  const prjCode = project.prjCode ?? `PRJ-${String(index + 1).padStart(2, "0")}`;
  const style = { "--rc": project.color } as CSSProperties;

  return (
    <article className={`row${open ? " open" : ""}`} style={style}>
      <button
        type="button"
        className="row-head"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="r-idx">{prjCode}</span>
        <span className="r-title">
          {project.title}
          <span className="role">
            {project.role}
            {project.urlLabel ? ` · ${project.urlLabel}` : ""}
          </span>
          <span className="bar" />
        </span>
        <span className="r-meta">
          {project.tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </span>
        <span className="r-toggle">
          <span className="pm">+</span>
        </span>
      </button>

      <div className="r-body">
        <div className="r-body-in">
          <Gallery
            images={project.images ?? []}
            labels={project.labels ?? []}
            urlLabel={project.urlLabel ?? project.url ?? ""}
            prjCode={prjCode}
          />
          <div className="r-side">
            <div className="links">
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
              <a className="linkbtn" href={`/work/${project.slug}`}>
                Vaka çalışması →
              </a>
            </div>
            <div className="steps">
              {(project.steps ?? []).map((s) => (
                <div className="step" key={s.label}>
                  <div className="sk">{s.label}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
