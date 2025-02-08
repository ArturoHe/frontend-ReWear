import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import axios from "axios";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack?: () => void;
  onRecoverPassword?: () => void;
  onReturn?: () => void;
};

interface LoginResponse {
  token: string;
}

function LoginForm({ onReturn, onRecoverPassword }: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log("payload", payload);
    try {
      const response = await axios.post<LoginResponse>(
        "https://backend-rewear-production.up.railway.app/login",
        payload
      );

      console.log("response", response);
      const token = response.data.token;

      if (token) {
        sessionStorage.setItem("jwtToken", token);
        window.location.href = "/user";
      } else {
        alert("No se recibió un token");
      }
    } catch (error) {
      console.error("Error en el login", error);
      alert("Error en el inicio de sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="username" className="form-label"></label>
        <input
          required
          name="username"
          type="text"
          className={`form-control ${styles.loginSlot}`}
          id="emailSlotLogin"
          placeholder="Usuario"
        />
      </div>
      <div className="my-3">
        <label htmlFor="passwordSlot" className="form-label"></label>
        <input
          required
          name="password"
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
