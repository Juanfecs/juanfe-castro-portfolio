import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import { site } from "@/data/site";
import { Marquee } from "@/components/site/Marquee";

interface HeroProps {
  onPlayReel: () => void;
}

export const Hero = ({ onPlayReel }: HeroProps) => (
  <section className="hero section-anchor" id="inicio">
    <div className="hero-image" aria-hidden="true" />
    <div className="hero-grain" aria-hidden="true" />
    <div className="hero-inner page-shell">
      <header className="topline">
        <span className="eyebrow">{site.hero.note}</span>
        <span className="eyebrow topline-location">{site.location}</span>
        <span className="availability"><i />{site.availability}</span>
      </header>

      <div className="hero-main">
        <div className="hero-heading-wrap">
          <p className="hero-kicker">Una mirada. Muchas formas de contar.</p>
          <h1 className="hero-heading">
            {site.hero.headline.map((line, index) => (
              <span className={index === 1 || index === 3 ? "outline-word" : ""} key={line}>{line}</span>
            ))}
          </h1>
          <span className="hero-index">JC. / 001—026</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Realizador audiovisual independiente</p>
          <p className="hero-intro">{site.hero.intro}</p>
          <div className="hero-actions">
            <button type="button" className="button button-light" onClick={onPlayReel}>
              <Play size={15} fill="currentColor" /> Ver reel
            </button>
            <a className="button button-outline-light" href="#contacto">
              Hablemos <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <span>Cámara · Montaje · Sonido</span>
            <a href="#proyectos">Explorar proyectos <ArrowDownRight size={14} /></a>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span className="eyebrow">Desliza para descubrir</span>
        <span className="scroll-mark"><span /></span>
        <span className="eyebrow">01 / 04</span>
      </div>
    </div>
    <Marquee items={site.disciplines} className="hero-marquee" />
  </section>
);
