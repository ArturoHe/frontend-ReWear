import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const heroSlides = [
  {
    image: "/novedades.png",
    title: "Novedades de Verano",
    subtitle: "Descubre las últimas tendencias para esta temporada",
  },
  {
    image: "/productos_destacados.png",
    title: "Colección Sostenible",
    subtitle: "Moda que cuida el planeta",
  },
  {
    image: "/promociones.png",
    title: "Ofertas Especiales",
    subtitle: "Hasta 50% de descuento en selección de productos",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero">
      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <div style={{
                padding: '2rem',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
              }} className="container">
                <h1 style={{
                  color: 'white',
                  fontWeight: 'bold',
                }} className="hero-title">{slide.title}</h1>
                <p style={{
                  color: 'white',
                }} className="hero-subtitle">{slide.subtitle}</p>
                <button className="button button-primary">
                  Ver colección
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
