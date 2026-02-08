import React, { useRef, useState, useEffect } from "react";
import "./CardScroll.css";

function CardScroll({ children, count }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = 340 + 16; // card width + gap
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, count - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [count]);

  const scrollTo = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 340 + 16;
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div className="card-scroll" ref={scrollRef}>
        {children}
      </div>
      <div className="scroll-dots">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            className={`scroll-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardScroll;
