import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
};

function RegisterForm({ onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div className="my-3">
        <label htmlFor="emailSlot" className="form-label"></label>
        <input
          required
          name="email"
          type="email"
          className={`form-control ${styles.loginSlot}`}
          id="emailSlotRegister"
          placeholder="Correo Electrónico"
        />
      </div>

      <div className="my-3">
        <label htmlFor="userSlot" className="form-label"></label>
        <input
          required
          name="user"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="userSlotRegister"
          placeholder="Nombre de Usuario"
        />
      </div>

      <div className="my-3">
        <label htmlFor="passwordSlot" className="form-label"></label>
        <input
          required
          name="password"
          type="password"
          className={`form-control ${styles.loginSlot}`}
          id="passwordSlotRegister"
          placeholder="Contraseña"
        />
      </div>

      <div className="my-3">
        <label htmlFor="passwordSlot" className="form-label"></label>
        <input
          required
          name="passwordCheck"
          type="password"
          className={`form-control ${styles.loginSlot}`}
          id="passwordCheckSlotRegister"
          placeholder="Confirma tu Contraseña"
        />
      </div>

      <div className="my-3 form-check">
        <input
          required
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          <div style={{ fontSize: "0.8rem" }}>
            He leído y acepto los{" "}
            <a href="" style={{ color: "black" }}>
              términos y condiciones
            </a>
          </div>
        </label>
      </div>

      <div className="mt-5 mx-5">
        <ButtonAction text="Registrarme" type="submit" />
      </div>

      <div className="mt-5">
        <a href="" style={{ color: "black" }}>
          Volver
        </a>
      </div>
    </form>
  );
}

export default RegisterForm;
