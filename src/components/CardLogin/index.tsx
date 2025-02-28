import { useState } from "react";
import Button from "../Button";
import LoginForm from "../LoginForm";
import styles from "./style.module.css";
import RegisterForm from "../RegisterForm";
import RecoverPassForm from "../RecoverPassForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ButtonGoogle from "../ButtonGoogle";

type Props = {};

function CardLogin({}: Props) {
  const [currentView, setCurrentView] = useState<
    "initial" | "register" | "login" | "recover"
  >("initial");

  const handleShowRegistrationForm = () => {
    setCurrentView("register");
  };

  const handleShowLoginForm = () => {
    setCurrentView("login");
  };
  const handleShowRecoverForm = () => {
    setCurrentView("recover");
  };

  const handleBackToInitial = () => {
    setCurrentView("initial");
  };

  return (
    <div className="d-flex col-sm-8 col-md-8 col-lg-12 col-xl-10">
      <div className={`card shadow ${styles.cardLogin}`}>
        <div className="container-fluid px-5 py-3">
          <img src="/logo.png" className="card-img-top" alt="Logo ReWear" />
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
                <GoogleOAuthProvider clientId="979740667016-qeor1k8041jjuus9fab09fcddmknnkfh.apps.googleusercontent.com">
                  <div>
                    <ButtonGoogle />
                  </div>
                </GoogleOAuthProvider>
              </div>
              <div className="mt-5 mb-3">
                <a
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
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
            <RegisterForm onReturn={handleBackToInitial} />
          </div>
        )}
        {currentView === "login" && (
          <div className="mx-5 mb-3">
            <LoginForm
              onReturn={handleBackToInitial}
              onRecoverPassword={handleShowRecoverForm}
            />
          </div>
        )}
        {currentView === "recover" && (
          <div className="mx-5 mb-3">
            <RecoverPassForm onReturn={handleBackToInitial} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardLogin;
