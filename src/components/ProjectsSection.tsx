import Reveal from "./Reveal";
import ProjectRow from "./ProjectRow";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-idx">01 /</span>
          <span className="sec-title">Seçili İşler</span>
          <span className="sec-rule" />
        </Reveal>
        <Reveal as="p" className="sec-note">
          Her satırı aç → problem, yaklaşım ve sonucu gör.
        </Reveal>

        <div className="index">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
