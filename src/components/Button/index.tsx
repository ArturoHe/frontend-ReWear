import React, { useState } from "react";
import styles from "./style.module.css";

type Props = {
  text: string;
};

function Button({ text }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className={`btn btn-primary ${
        hovered ? styles.buttonHover : styles.buttonNoHover
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </button>
  );
}

export default Button;
