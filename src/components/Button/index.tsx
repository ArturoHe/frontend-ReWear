import React, { useState } from "react";
import styles from "./style.module.css";

type Props = {
  text: string;
  onClick?: () => void;
};

function Button({ text, onClick }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
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

export default Button;
