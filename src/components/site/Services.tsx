import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export const Services = () => (
  <section className="section services-section section-anchor" id="servicios">
    <div className="page-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow accent-eyebrow">02 / Lo que hago</p>
          <h2 className="section-title">Del concepto al <span className="serif-italic">corte final.</span></h2>
        </div>
        <p className="section-aside">Una mirada integral para que cada parte de la pieza trabaje a favor de la historia.</p>
      </div>
      <div className="service-list">
        {site.services.map((service) => (
          <a href="#contacto" className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-arrow"><ArrowUpRight size={20} /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
