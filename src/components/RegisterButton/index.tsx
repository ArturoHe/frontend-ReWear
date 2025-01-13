import React from "react";
import styles from "./style.module.css";

const RegisterButton: React.FC = () => {
  return (
    <button className={`justify-content-start me-2 ${styles.button}`}>
      Crea tu cuenta
    </button>
  );
};

export default RegisterButton;
