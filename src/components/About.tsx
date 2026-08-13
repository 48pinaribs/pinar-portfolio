import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-idx">03 /</span>
          <span className="sec-title">Hakkımda</span>
          <span className="sec-rule" />
        </Reveal>

        <div className="about">
          <Reveal as="div" className="bio">
            <p>
              Merhaba, ben <b>Pınar</b>. Full-stack developer&apos;ım; işi
              fikir aşamasından canlı ürüne kadar tek başıma
              taşıyabiliyorum — tasarım, geliştirme, test ve deploy.
            </p>
            <p>
              Şu an enerjimin çoğu <b>OTOOTAĞ</b>&apos;da: otomotiv yedek parça
              için kurduğum B2B/ERP SaaS platformu. Next.js, Flutter ve
              Go&apos;yu tek bir monorepo&apos;da çalıştırıyor, üç katmanı da
              uçtan uca test ediyorum.
            </p>
            <div className="how">
              <div className="hrow">
                <span className="hn">01</span>
                <span className="ht">
                  <b>Uçtan uca sahiplenirim.</b> Frontend&apos;den veri
                  hattına kadar tek muhatap.
                </span>
              </div>
              <div className="hrow">
                <span className="hn">02</span>
                <span className="ht">
                  <b>Test odaklı çalışırım.</b> Teslim ettiğim şey gerçekten
                  çalışır — smoke/E2E harness&apos;lerle.
                </span>
              </div>
              <div className="hrow">
                <span className="hn">03</span>
                <span className="ht">
                  <b>Şeffaf ilerlerim.</b> Temiz commit akışı, net raporlama,
                  sürprizsiz teslim.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal as="aside" className="cv" delay="d1">
            <div className="cvh">
              <span>KÜNYE</span>
              <span>CV</span>
            </div>
            <div className="cvrow">
              <span className="ck">Rol</span>
              <span className="cv-v">
                Full-Stack Developer
                <span>SaaS · Web</span>
              </span>
            </div>
            <div className="cvrow">
              <span className="ck">Konum</span>
              <span className="cv-v">
                Türkiye
                <span>Remote çalışır</span>
              </span>
            </div>
            <div className="cvrow">
              <span className="ck">Odak</span>
              <span className="cv-v">
                Next.js · Flutter · Go
                <span>PostgreSQL / Neon</span>
              </span>
            </div>
            <div className="cvrow">
              <span className="ck">Öne çıkan</span>
              <span className="cv-v">
                OTOOTAĞ
                <span>B2B/ERP SaaS · kurucu</span>
              </span>
            </div>
            <div className="cvrow">
              <span className="ck">Diller</span>
              <span className="cv-v">Türkçe · İngilizce</span>
            </div>
            <div className="cvfoot">
              <a className="btn btn-primary" href="/cv-pinar.pdf" download>
                CV indir (PDF) ↓
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
