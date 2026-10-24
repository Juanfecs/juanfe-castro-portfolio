import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export const About = () => (
  <section className="section about-section section-anchor" id="sobre-mi">
    <div className="page-shell about-grid">
      <div className="about-visual">
        <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85" alt="Equipo y espacio de producción audiovisual" loading="lazy" />
        <div className="about-stamp"><span>OBSERVAR</span><span>·</span><span>CREAR</span><span>·</span><span>CONTAR</span></div>
        <span className="about-image-caption">Notas visuales / Archivo 026</span>
      </div>
      <div className="about-content">
        <p className="eyebrow accent-eyebrow">{site.about.eyebrow}</p>
        <h2 className="section-title about-title">{site.about.title}</h2>
        <p className="body-copy">{site.about.body}</p>
        <p className="body-copy">{site.about.second}</p>
        <a className="text-link" href="#contacto">Conversemos sobre tu idea <ArrowUpRight size={16} /></a>
        <div className="about-signature">Juanfe <span>Castro</span></div>
      </div>
    </div>
  </section>
);
