"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#work", label: "Projeler" },
  { href: "/#stack", label: "Stack" },
  { href: "/#about", label: "Hakkımda" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sitenav${scrolled ? " scrolled" : ""}`}>
      <Link className="brand" href="/#top">
        <span className="dot" />
        Pınar<span className="tag">/ dev</span>
      </Link>
      <div className="navlinks">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/#contact">
          İletişim
        </Link>
      </div>
    </nav>
  );
}
