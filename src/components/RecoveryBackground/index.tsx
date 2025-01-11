import React from "react";
import styles from "./style.module.css";

interface RecoveryBackgroundProps {
  children: React.ReactNode; // Define que acepta hijos
}

const RecoveryBackground: React.FC<RecoveryBackgroundProps> = ({
  children,
}) => {
  return (
    <div className={`${styles.container} container-fluid p-0`}>
      <div className="row vh-100 g-0">
        <div
          className={`col-md-4 p-0 d-none d-md-block ${styles.leftSection}`}
        />
        <div
          className={`col-md-4 d-flex align-items-center justify-content-center p-0 ${styles.centerSection}`}
        >
          {children} {/* Renderiza los hijos pasados como props */}
        </div>
        <div
          className={`col-md-4 p-0 d-none d-md-block ${styles.rightSection}`}
        />
      </div>
    </div>
  );
};

export default RecoveryBackground;
