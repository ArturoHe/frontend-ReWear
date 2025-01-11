import React from "react";
import styles from "./style.module.css";

const BoxEmail: React.FC = () => {
  return (
    <input
      type="email"
      className={`form-control ${styles.input}`}
      placeholder="Ingresa tu correo electrónico"
      required
    />
  );
};

export default BoxEmail;
