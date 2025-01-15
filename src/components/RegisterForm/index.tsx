import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack?: () => void;
  onReturn?: () => void;
};

function RegisterForm({ onSubmit, onReturn }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      method="POST"
      action="https://backend-rewear-production.up.railway.app/register
"
    >
      <div className="my-2">
        <label htmlFor="firstNameSlot" className="form-label"></label>
        <input
          required
          name="first_name"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="firstNameSlotRegister"
          placeholder="Nombre(s)"
        />
      </div>

      <div className="my-2">
        <label htmlFor="lastNameSlot" className="form-label"></label>
        <input
          required
          name="last_name"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="lastNameSlotRegister"
          placeholder="Apellido(s)"
        />
      </div>

      <div className="my-2">
        <label htmlFor="phoneSlot" className="form-label"></label>
        <input
          required
          name="phone"
          type="phone"
          className={`form-control ${styles.loginSlot}`}
          id="phoneSlotRegister"
          placeholder="Numero de telefono"
        />
      </div>

      <div className="my-2">
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

      <div className="my-2">
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

      <div className="mt-3 form-check">
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

export default RegisterForm;
