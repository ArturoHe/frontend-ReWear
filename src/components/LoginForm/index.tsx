import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack?: () => void;
  onRecoverPassword?: () => void;
  onReturn?: () => void;
};

function LoginForm({ onRecoverPassword, onReturn }: Props) {
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
        <div
          onClick={onRecoverPassword}
          style={{
            cursor: "pointer",
            color: "black",
            textDecoration: "underline",
            fontSize: "0.85rem",
          }}
        >
          ¿Olvidaste tu contraseña?
        </div>
      </div>

      <div>
        <ButtonAction text="Entrar" type="submit" />
      </div>

      <div className="mt-5">
        <div
          onClick={onReturn}
          style={{
            cursor: "pointer",
            color: "black",
            textDecoration: "underline",
            fontSize: "0.85rem",
          }}
        >
          Volver
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
