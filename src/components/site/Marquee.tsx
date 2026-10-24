interface MarqueeProps {
  items: string[];
  className?: string;
}

export const Marquee = ({ items, className = "" }: MarqueeProps) => (
  <div className={`marquee ${className}`} aria-label={items.join(", ")}>
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
          {items.map((item, index) => (
            <span className="marquee-item" key={`${copy}-${item}-${index}`}>
              <span className="marquee-star">✳</span>{item}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
