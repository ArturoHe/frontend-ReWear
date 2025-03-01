import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import api from "../../api/axiosConfig";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack?: () => void;
  onReturn?: () => void;
};

function RecoverPassForm({ onReturn }: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: formData.get("email"),
    };

    try {
      await api.post("/forgot-password", payload);

      alert("Se ha enviado un correo para recuperar tu contraseña");
      window.location.href = "/";
    } catch (error) {
      alert("Error en el inicio de sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>¿Olvidaste tu contraseña?</h4>
      <div className="my-3">
        <label htmlFor="emailSlot" className="form-label"></label>
        <input
          required
          type="email"
          name="email"
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
