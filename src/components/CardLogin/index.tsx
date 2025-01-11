import React, { useState } from "react";
import Button from "../Button";
import LoginForm from "../LoginForm";
import styles from "./style.module.css";
import RegisterForm from "../RegisterForm";

type Props = {};

function CardLogin({}: Props) {
  const [currentView, setCurrentView] = useState<
    "initial" | "register" | "login"
  >("initial");

  const handleShowRegistrationForm = () => {
    setCurrentView("register");
  };

  const handleShowLoginForm = () => {
    setCurrentView("login");
  };

  const handleBackToInitial = () => {
    setCurrentView("initial");
  };

  return (
    <div className="d-flex col-sm-8 col-md-8 col-lg-12 col-xl-10">
      <div className={`card shadow ${styles.cardLogin}`}>
        <div className="container-fluid px-5 py-3">
          <img
            src="/logoRewearRectanguloNoFondo.png"
            className="card-img-top"
            alt="Logo ReWear"
          />
        </div>

        {currentView === "initial" && (
          <div className="card-body" style={{ textAlign: "center" }}>
            <div className="mx-5">
              <div>
                <Button
                  text={"Iniciar con cuenta ReWear"}
                  onClick={handleShowLoginForm}
                />
              </div>
              <div className="my-3">
                <Button text={"Iniciar con Google"} />
              </div>
              <div>
                <Button text={"Iniciar con Facebook"} />
              </div>
              <div className="mt-5 mb-3">
                <a
                  style={{ color: "black", textDecoration: "underline" }}
                  onClick={handleShowRegistrationForm}
                >
                  Registrarme
                </a>
              </div>
            </div>
          </div>
        )}
        {currentView === "register" && (
          <div className="mx-5 mb-3">
            <RegisterForm onBack={handleBackToInitial} />
          </div>
        )}
        {currentView === "login" && (
          <div className="mx-5 mb-3">
            <LoginForm onBack={handleBackToInitial} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardLogin;
