export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow h-anim a1">
              <span className="ln" />
              FULL-STACK DEVELOPER · TR
            </div>
            <h1 className="h1 h-anim a2">
              Fikirden
              <br />
              <span className="u">production&apos;a.</span>
            </h1>
            <p className="lede h-anim a3">
              Ben Pınar. <b>Next.js, Flutter ve Go</b> ile uçtan uca SaaS
              ürünleri ve ölçeklenebilir web sistemleri kuruyorum. Amiral
              gemim <b>OTOOTAĞ</b> — otomotiv yedek parça için B2B/ERP
              platformu.
            </p>
            <div className="hero-actions h-anim a4">
              <a className="btn btn-primary" href="#work">
                Projeleri incele <span className="arw">→</span>
              </a>
              <a className="btn btn-ghost" href="#contact">
                Birlikte çalışalım
              </a>
            </div>
          </div>

          <div className="legend h-anim a4">
            <div className="lh">
              <span>INDEX</span>
              <span>2026</span>
            </div>
            <div className="lr">
              <span className="k">01</span>
              <span className="t">
                OTOOTAĞ <span>· Pazaryeri</span>
              </span>
            </div>
            <div className="lr">
              <span className="k">02</span>
              <span className="t">
                OTOOTAĞ Bayi Paneli <span>· B2B/ERP</span>
              </span>
            </div>
            <div className="lr">
              <span className="k">03</span>
              <span className="t">
                Köyümüzden Sofranıza <span>· E-ticaret</span>
              </span>
            </div>
            <div className="lr">
              <span className="k">→</span>
              <span className="t">Açık işlere uygun</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
