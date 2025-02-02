import { useState } from "react";
import styles from "./style.module.css";

type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Tipo de botón
};

function ButtonAction({ text, onClick, type = "button" }: Props) {
  return (
    <button
      type={type}
      className={`btn btn-primary container-fluid ${styles.button}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonAction;
