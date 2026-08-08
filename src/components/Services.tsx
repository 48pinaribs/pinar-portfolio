import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-idx">03 /</span>
          <span className="sec-title">Hizmetler</span>
          <span className="sec-rule" />
        </Reveal>

        <div className="svc" style={{ marginTop: 44 }}>
          <Reveal as="div" className="scard" delay="d1">
            <span className="sno">01</span>
            <h3>Web &amp; SaaS Geliştirme</h3>
            <p>
              Tanıtım sitesinden tam ölçekli SaaS ürününe; tasarım, geliştirme
              ve deploy tek elden.
            </p>
            <ul>
              <li>Kurumsal &amp; landing siteleri</li>
              <li>Full-stack SaaS / dashboard</li>
              <li>Teknik SEO denetimi</li>
            </ul>
          </Reveal>

          <Reveal as="div" className="scard" delay="d2">
            <span className="sno">02</span>
            <h3>Meta Reklam Yönetimi</h3>
            <p>
              Facebook &amp; Instagram reklamlarının kurulumu, optimizasyonu ve
              dönüşüm odaklı funnel tasarımı.
            </p>
            <ul>
              <li>Kampanya kurulumu &amp; Pixel</li>
              <li>Performans optimizasyonu</li>
              <li>Aylık raporlama</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
