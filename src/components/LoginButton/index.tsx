import React from "react";
import styles from "./style.module.css";

const LoginButton: React.FC = () => {
  return (
    <button className={`justify-content-start me-2 ${styles.button}`}>
      Entra a tu cuenta
    </button>
  );
};

export default LoginButton;
