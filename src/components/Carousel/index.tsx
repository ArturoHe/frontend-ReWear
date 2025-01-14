import React from "react";
import styles from "./style.module.css";
import producto from "./productos_destacados.png";
import novedad from "./novedades.png";
import promocion from "./promociones.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel: React.FC = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide mt-4 ${styles.carousel}`}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={novedad}
            alt="Novedades"
            className={`d-block w-100 ${styles.image}`}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Novedades</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={producto}
            alt="Productos destacados"
            className={`d-block w-100 ${styles.image}`}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Productos destacados</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={promocion}
            alt="Promociones"
            className={`d-block w-100 ${styles.image}`}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Promociones</h3>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
