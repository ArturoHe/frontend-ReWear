import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack?: () => void;
  onRecoverPassword?: () => void;
  onReturn?: () => void;
};

function RecoverPassForm({ onRecoverPassword, onReturn }: Props) {
  return (
    <form>
      <h4>¿Olvidaste tu contraseña?</h4>
      <div className="my-3">
        <label htmlFor="emailSlot" className="form-label"></label>
        <input
          required
          type="email"
          className={`form-control ${styles.loginSlot}`}
          id="emailSlotLogin"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>

      <div>
        <ButtonAction text="Recuperar contraseña" type="submit" />
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

export default RecoverPassForm;
