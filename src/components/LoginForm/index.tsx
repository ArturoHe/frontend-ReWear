import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
};

function LoginForm({}: Props) {
  return (
    <form>
      <div className="my-3">
        <label htmlFor="emailSlot" className="form-label"></label>
        <input
          required
          type="email"
          className={`form-control ${styles.loginSlot}`}
          id="emailSlotLogin"
          placeholder="Correo Electrónico"
        />
      </div>
      <div className="my-3">
        <label htmlFor="passwordSlot" className="form-label"></label>
        <input
          required
          type="password"
          className={`form-control ${styles.loginSlot}`}
          id="passwordSlotLogin"
          placeholder="Contraseña"
        />
      </div>

      <div className="my-3">
        <a href="" style={{ color: "black", fontSize: "0.85rem" }}>
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <div>
        <ButtonAction text="Entrar" type="submit" />
      </div>

      <div className="mt-5">
        <a href="" style={{ color: "black" }}>
          Volver
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
