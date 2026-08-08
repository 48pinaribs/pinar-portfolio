"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
  labels: string[];
  urlLabel: string;
  prjCode: string;
};

const GRADIENTS = ["gv-a", "gv-b", "gv-c"];
const SLOTS = [0, 1, 2];

export default function Gallery({ images, labels, urlLabel, prjCode }: GalleryProps) {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  const activeSrc = images[active];
  const activeOk = Boolean(activeSrc) && !broken[active];
  const activeGrad = GRADIENTS[active % GRADIENTS.length];
  const activeLabel =
    labels[active] ?? `görsel ${String(active + 1).padStart(2, "0")} / 3`;

  return (
    <div className="gallery">
      <div className="shot">
        <div className="shot-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="url">{urlLabel || "—"}</span>
        </div>
        <div
          className={["shot-view", activeOk ? "" : `placeholder ${activeGrad}`]
            .filter(Boolean)
            .join(" ")}
        >
          {activeOk ? (
            <Image
              src={activeSrc}
              alt={`${prjCode} görsel ${active + 1}`}
              fill
              sizes="(max-width: 820px) 100vw, 700px"
              onError={() => setBroken((b) => ({ ...b, [active]: true }))}
            />
          ) : (
            <span className="ph">
              <b>
                {prjCode} · görsel {String(active + 1).padStart(2, "0")} / 3
              </b>
              {activeLabel}
            </span>
          )}
        </div>
      </div>
      <div className="g-thumbs">
        {SLOTS.map((i) => {
          const src = images[i];
          const ok = Boolean(src) && !broken[i];
          const grad = GRADIENTS[i % GRADIENTS.length];
          return (
            <button
              key={i}
              type="button"
              className={[
                "thumb",
                ok ? "" : `placeholder ${grad}`,
                active === i ? "active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              aria-label={labels[i] ?? `görsel ${i + 1}`}
            >
              {ok && (
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="220px"
                  onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                />
              )}
              <span className="tl">{String(i + 1).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
