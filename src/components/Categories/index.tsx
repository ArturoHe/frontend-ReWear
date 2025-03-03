import React from "react";
import CategoryCard from "../CategoryCard";

const Categories: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "Infantil",
      image: "/infantil.png",
      description: "Ropa de segunda mano para niños y niñas",
    },
    {
      id: 2,
      name: "Mujer",
      image: "/mujer.png",
      description: "Moda sostenible para mujeres",
    },
    {
      id: 3,
      name: "Hombre",
      image: "/hombre.png",
      description: "Ropa de segunda mano para hombres",
    },
    {
      id: 4,
      name: "Unisex",
      image: "/unisex.png",
      description: "Moda sin género",
    },
  ];

  return (
    <section className="categories">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="container"
      >
        <h2 className="section-title">Categorías</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "1rem",
          }}
          className="categories-grid"
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
