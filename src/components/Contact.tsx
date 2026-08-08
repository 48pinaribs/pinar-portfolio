import Reveal from "./Reveal";

const EMAIL = "pinararsslan72@gmail.com";

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
          <p>
            Yeni bir proje, bir SaaS fikri ya da reklam kampanyası — konuşalım.
          </p>
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            İletişime geç <span className="arw">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
