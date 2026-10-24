import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const navItems = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reelOpen, setReelOpen] = useState(false);

  const handlePlayReel = () => {
    if (site.reelEmbedUrl.trim()) setReelOpen(true);
    else document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", reelOpen);
    return () => document.body.classList.remove("modal-open");
  }, [reelOpen]);

  useEffect(() => {
    if (!reelOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReelOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [reelOpen]);

  return (
    <main className="portfolio">
      <nav className="site-nav" aria-label="Navegación principal">
        <div className="page-shell nav-inner">
          <a className="nav-brand" href="#inicio" aria-label={`${site.name}, inicio`}>{site.monogram}<span>FILM / VISUAL</span></a>
          <div className="nav-links">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <a className="nav-cta" href={`mailto:${site.email}`}>Hablemos <ArrowUpRight size={15} /></a>
          <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <a href={`mailto:${site.email}`} onClick={() => setMenuOpen(false)}>Escríbeme ↗</a>
          </div>
        )}
      </nav>

      <Hero onPlayReel={handlePlayReel} />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />

      {reelOpen && (
        <div className="reel-modal" role="dialog" aria-modal="true" aria-label="Reel audiovisual" onMouseDown={(event) => { if (event.target === event.currentTarget) setReelOpen(false); }}>
          <button className="reel-close" type="button" onClick={() => setReelOpen(false)} aria-label="Cerrar reel"><X size={24} /></button>
          <div className="reel-frame">
            <iframe src={site.reelEmbedUrl} title="Reel audiovisual de Juanfe Castro" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </main>
  );
}
