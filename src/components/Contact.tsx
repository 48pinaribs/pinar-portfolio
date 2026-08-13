import Reveal from "./Reveal";

const PHONE_INTL = "905439434472"; // +90 543 943 44 72

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact">
          <h2>
            Bir sonraki sistemi
            <br />
            birlikte kuralım.
          </h2>
          <p>Yeni bir proje ya da bir SaaS fikri — konuşalım.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a
              className="btn btn-primary"
              href={`https://wa.me/${PHONE_INTL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              İletişime geç <span className="arw">→</span>
            </a>
            <a className="btn btn-ghost" href={`tel:+${PHONE_INTL}`}>
              Ara
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
