import React from "react";
import styles from "./style.module.css";
import infantil from "./infantil.png";
import mujer from "./mujer.png";
import hombre from "./hombre.png";
import unisex from "./unisex.png";

const Categories: React.FC = () => {
  const categories = [
    { name: "Infantil", image: infantil },
    { name: "Mujer", image: mujer },
    { name: "Hombre", image: hombre },
    { name: "Unisex", image: unisex },
  ];

  return (
    <div className={`mt-5 ${styles.container}`}>
      {categories.map((category) => (
        <div key={category.name} className={`text-center ${styles.card}`}>
          <img
            src={category.image}
            alt={category.name}
            className={styles.image}
          />
          <h5 className={styles.title}>{category.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Categories;
