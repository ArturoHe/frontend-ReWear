import React from "react";
import styles from "./style.module.css";
import logo from "./logo.png";

const CardRecovery: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`card text-center shadow p-4 ${styles.card}`}>
      <img src={logo} alt="ReWear Logo" className={`mb-4 ${styles.logo}`} />
      <h3 className={styles.h3}>¿Olvidaste tu contraseña?</h3>
      {children}
    </div>
  );
};

export default CardRecovery;
