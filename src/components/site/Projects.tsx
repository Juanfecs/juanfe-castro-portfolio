import { useMemo, useState } from "react";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { site } from "@/data/site";

const filters = ["Todos", "Cine", "Comercial", "Música", "Fotografía"] as const;

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const projects = useMemo(
    () => activeFilter === "Todos" ? site.projects : site.projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="section projects-section section-anchor" id="proyectos">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow accent-eyebrow">01 / Selección de trabajos</p>
            <h2 className="section-title">Proyectos<span className="accent-dot">.</span></h2>
          </div>
          <p className="section-aside">Cada proyecto pide su propio lenguaje.<br />Estos son algunos puntos de partida.</p>
        </div>

        <div className="project-toolbar">
          <div className="filter-list" role="group" aria-label="Filtrar proyectos">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-button ${activeFilter === filter ? "active" : ""}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="eyebrow">{String(projects.length).padStart(2, "0")} proyectos</span>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const projectUrl = project.url.trim();
            const cardContent = (
              <>
                <div className="project-image-wrap">
                  <img src={project.image} alt={`Fotograma de referencia para ${project.title}`} loading="lazy" />
                  <div className="project-image-shade" />
                  <span className="project-number">{String(project.id).padStart(2, "0")}</span>
                  <span className="project-open"><MoveUpRight size={18} /></span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </>
            );

            return projectUrl ? (
              <a className={`project-card ${index === 0 ? "project-featured" : ""}`} href={projectUrl} target="_blank" rel="noreferrer" key={project.id} aria-label={`Ver proyecto ${project.title} en una nueva pestaña`}>
                {cardContent}
              </a>
            ) : (
              <article className={`project-card project-card-static ${index === 0 ? "project-featured" : ""}`} key={project.id}>
                {cardContent}
              </article>
            );
          })}
        </div>
        <p className="project-note"><span>*</span> Galería de muestra: reemplaza estas imágenes y descripciones por tus proyectos reales en <code>src/data/site.ts</code>.</p>
      </div>
    </section>
  );
};
