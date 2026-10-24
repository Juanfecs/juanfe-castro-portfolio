export type ProjectCategory = "Cine" | "Comercial" | "Música" | "Fotografía";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  featured?: boolean;
}

export const site = {
  name: "Juanfe Castro",
  monogram: "JC.",
  role: "Realizador audiovisual · Fotografía · Montaje",
  location: "Colombia · Disponible para proyectos",
  availability: "Disponible para nuevos proyectos",
  email: "castrojuanfelipe2906@gmail.com",
  instagram: "https://www.instagram.com/juanfecs/",
  instagramLabel: "@juanfecs",
  // Agrega aquí una URL de inserción de YouTube o Vimeo para abrir el reel en un modal.
  reelEmbedUrl: "",
  hero: {
    note: "Portafolio audiovisual · 2026",
    headline: ["Ideas que", "se sienten.", "Historias que", "permanecen."],
    intro:
      "Soy Juanfe Castro, realizador audiovisual. Combino imagen, ritmo y sonido para crear piezas con intención: desde proyectos narrativos y musicales hasta contenido para marcas.",
  },
  disciplines: [
    "Dirección",
    "Cámara",
    "Fotografía",
    "Montaje",
    "Color",
    "Diseño sonoro",
    "Narrativa visual",
  ],
  about: {
    eyebrow: "Detrás de la imagen",
    title: "Curiosidad primero. Técnica al servicio de la historia.",
    body:
      "Me interesa crear imágenes que transmitan algo más que información. Exploro la relación entre luz, movimiento, montaje y sonido para encontrar el lenguaje adecuado para cada proyecto.",
    second:
      "Trabajo de forma integral en distintas etapas de la producción audiovisual, desde la idea y la planificación hasta la edición y los detalles finales.",
  },
  services: [
    {
      number: "01",
      title: "Realización audiovisual",
      description: "Concepto, dirección y producción de piezas con una identidad visual clara.",
    },
    {
      number: "02",
      title: "Cámara y fotografía",
      description: "Imágenes cuidadas, composición intencional y búsqueda de atmósferas.",
    },
    {
      number: "03",
      title: "Edición y color",
      description: "Montaje narrativo, ritmo, continuidad visual y acabado de color.",
    },
    {
      number: "04",
      title: "Sonido y música",
      description: "Edición, diseño sonoro y trabajo con el sonido como parte de la historia.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Entre el ruido",
      category: "Cine" as const,
      year: "2025",
      description: "Ejercicio narrativo · Cortometraje",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=85",
      tags: ["Dirección", "Montaje"],
      url: "",
      featured: true,
    },
    {
      id: 2,
      title: "Materia en movimiento",
      category: "Comercial" as const,
      year: "2025",
      description: "Pieza de marca · Dirección de fotografía",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
      tags: ["Cámara", "Color"],
      url: "",
    },
    {
      id: 3,
      title: "Sesión en vivo",
      category: "Música" as const,
      year: "2024",
      description: "Live session · Video musical",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
      tags: ["Música", "Montaje"],
      url: "",
    },
    {
      id: 4,
      title: "Luz de paso",
      category: "Fotografía" as const,
      year: "2024",
      description: "Exploración de luz natural y movimiento",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
      tags: ["Fotografía", "Narrativa visual"],
      url: "",
    },
    {
      id: 5,
      title: "Fuera de cuadro",
      category: "Cine" as const,
      year: "2024",
      description: "Pieza experimental · Investigación visual",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
      tags: ["Experimental", "Dirección"],
      url: "",
    },
    {
      id: 6,
      title: "Territorio",
      category: "Comercial" as const,
      year: "2023",
      description: "Paisaje, identidad y relato visual",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
      tags: ["Cámara", "Color"],
      url: "",
    },
  ] satisfies Project[],
};
