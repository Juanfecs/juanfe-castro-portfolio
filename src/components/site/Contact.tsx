import { ArrowDownRight, ArrowUpRight, Instagram, Mail } from "lucide-react";
import { site } from "@/data/site";

export const Contact = () => (
  <section className="contact-section section-anchor" id="contacto">
    <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
    <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
    <div className="page-shell contact-inner">
      <p className="eyebrow">03 / El siguiente paso</p>
      <h2>¿Y si hacemos<br /><span>algo que importe?</span></h2>
      <p className="contact-intro">Una idea en proceso, una historia por contar o un proyecto que necesita otra mirada. Hablemos.</p>
      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}<ArrowUpRight size={22} />
      </a>
      <div className="contact-links">
        <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram <span>{site.instagramLabel}</span><ArrowUpRight size={14} /></a>
        <a href={`mailto:${site.email}`}><Mail size={17} /> Correo <span>Escríbeme directamente</span><ArrowUpRight size={14} /></a>
      </div>
      <div className="contact-bottom"><span className="eyebrow">Juanfe Castro · Audiovisual</span><a href="#inicio" className="back-top">Volver arriba <ArrowDownRight size={15} /></a></div>
    </div>
  </section>
);
