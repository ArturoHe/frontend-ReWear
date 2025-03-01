import React from "react";
import ButtonAction from "../ButtonAction";
import styles from "./style.module.css";
import axios from "axios";
import api from "../../api/axiosConfig";
import { authResponse, LoginResponse } from "../../api/types";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack?: () => void;
  onRecoverPassword?: () => void;
  onReturn?: () => void;
};

function LoginForm({ onReturn, onRecoverPassword }: Props) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post<LoginResponse>(
        "https://backend-rewear-production.up.railway.app/login",
        payload
      );

      const token = response.data.token;

      const responseId = await api.get<authResponse>("/perfil", {
        headers: {
          Authorization: `${token}`,
        },
      });

      const idUser = responseId.data.id;
      const username = responseId.data.username;

      if (token) {
        sessionStorage.setItem("jwtToken", token);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("id", idUser);

        if (sessionStorage.getItem("redirectAfterLogin")) {
          window.location.href = sessionStorage.getItem("redirectAfterLogin")!;
          sessionStorage.removeItem("redirectAfterLogin");
          return;
        } else {
          window.location.href = "/home";
        }
      } else {
        alert("No se recibió un token");
      }
    } catch (error) {
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
          placeholder="Correo Electronico o Usuario"
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
