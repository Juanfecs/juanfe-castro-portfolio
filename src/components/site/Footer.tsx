import { site } from "@/data/site";

export const Footer = () => (
  <footer className="site-footer">
    <div className="page-shell footer-inner">
      <a className="footer-brand" href="#inicio">{site.monogram}</a>
      <span>Hecho con intención visual · © {new Date().getFullYear()} {site.name}</span>
      <a href={`mailto:${site.email}`}>Disponible para proyectos ↗</a>
    </div>
  </footer>
);
