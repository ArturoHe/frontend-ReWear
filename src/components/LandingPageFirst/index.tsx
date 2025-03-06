import styles from "./style.module.css";
import Button from "../../components/Button";

type Props = {};

function LandingPage({}: Props) {
  const handleHome = () => {
    window.location.href = "/home";
  };
  return (
    <>
      <div className={`container-fluid ${styles.LandingBackground}`}>
        <div className="col-xs-12 col-lg-5">
          <div className="d-flex justify-content-center pt-5">
            <img src="logo.png" alt="logo ReWear" style={{ height: "7rem" }} />
          </div>
          <div className="text-center pt-5">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "3rem",
              }}
            >
              ¿Ropa que ya no usas?
              <br />
              ¡Véndela en ReWear!
            </h1>
          </div>

          <div className="text-center mt-5 pt-2 d-none d-sm-block">
            <h2 style={{ fontSize: "1.5rem" }}>
              Cuida el planeta y obtén dinero en el proceso.{" "}
            </h2>
          </div>

          <div className="d-flex justify-content-center">
            <div className="mt-3 pt-5 ">
              <Button text="¡Comienza a vender!" onClick={handleHome} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
