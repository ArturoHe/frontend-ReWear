import styles from "./style.module.css";
import imageIzq from "./assets/img/fondoIzquierda.jpg";
import imageCen from "./assets/img/fondoCentro.png";
import imageDer from "./assets/img/fondoDerecha.jpg";
import Card from "../CardLogin";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const styleIzq = {
  backgroundImage: `url(${imageIzq})`,
  backgroundSize: "cover",
};

const styleCen = {
  backgroundImage: `url(${imageCen})`,
  backgroundSize: "cover",
};

const styleDer = {
  backgroundImage: `url(${imageDer})`,
  backgroundSize: "cover",
};

const LogBackground = () => {
  return (
    <div className="container-fluid">
      <div>
        <div className="row">
          <div
            className={`col col-lg-4 p-0 d-none d-lg-block ${styles.colo}`}
            style={styleIzq}
          >
            <div
              className="m-4"
              style={{
                fontSize: "1.5rem",
              }}
            >
              <a
                href="/home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <FaRegArrowAltCircleLeft /> Home
              </a>
            </div>
          </div>
          <div
            className={`col position-relative ${styles.colo}`}
            style={styleCen}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <Card />
            </div>
          </div>
          <div
            className={`col col-lg-4 p-0 d-none d-lg-block ${styles.colo}`}
            style={styleDer}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LogBackground;
