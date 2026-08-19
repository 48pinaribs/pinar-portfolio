import Reveal from "./Reveal";
import type { CSSProperties } from "react";

type StackRow = {
  code: string;
  label: string;
  color: string;
  chips: string[];
};

const ROWS: StackRow[] = [
  {
    code: "FE/",
    label: "Frontend",
    color: "#2946D8",
    chips: [
      "Next.js",
      "React",
      "Flutter Web",
      "Redux Toolkit",
      "Ant Design",
      "Leaflet",
      "Tailwind",
      "TypeScript",
    ],
  },
  {
    code: "BE/",
    label: "Backend",
    color: "#0E9F6E",
    chips: [
      "Go",
      ".NET / ASP.NET Core",
      "REST API",
      "N-Tier Architecture",
      "JWT / RBAC",
      "Iyzipay",
      "Monolith arch",
    ],
  },
  {
    code: "DB/",
    label: "Data",
    color: "#8B5CF6",
    chips: [
      "PostgreSQL",
      "Neon",
      "Supabase",
      "Entity Framework Core",
      "Scraping pipelines",
      "TecDoc/EPC logic",
    ],
  },
  {
    code: "QA/",
    label: "Testing",
    color: "#E8973A",
    chips: ["flutter drive", "ChromeDriver", "Bash smoke tests", "E2E harness"],
  },
  {
    code: "OPS/",
    label: "Environment",
    color: "#E85D75",
    chips: ["WSL · Ubuntu", "Monorepo", "Docker", "Git", "Vercel", "Render"],
  },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-idx">02 /</span>
          <span className="sec-title">Teknik Spesifikasyon</span>
          <span className="sec-rule" />
        </Reveal>
        <Reveal as="p" className="sec-note">
          Uçtan uca tek elden: frontend&apos;den veri hattına.
        </Reveal>

        <Reveal className="stack">
          {ROWS.map((row) => (
            <div
              className="srow"
              key={row.code}
              style={{ "--rc": row.color } as CSSProperties}
            >
              <div className="k">
                <span className="n">{row.code} </span>
                {row.label}
              </div>
              <div className="v">
                {row.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
