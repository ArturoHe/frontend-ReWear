import React from "react";
import styles from "./style.module.css";

const RecoveryButton: React.FC = () => {
  return (
    <button type="submit" className={`btn-primary w-100 ${styles.button}`}>
      Recuperar contraseña
    </button>
  );
};

export default RecoveryButton;
