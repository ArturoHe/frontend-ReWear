import React, { useState } from "react";
import styles from "./style.module.css";

type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Tipo de botón
};

function ButtonAction({ text, onClick, type = "button" }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type={type}
      className={`btn btn-primary container-fluid ${
        hovered ? styles.buttonHover : styles.buttonNoHover
      }`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </button>
  );
}

export default ButtonAction;
