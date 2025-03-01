import { useEffect } from "react";
import styles from "./style.module.css";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={`container-fluid ${styles.errorBackground}`}>
      <div className="row">
        <div className="col-12 text-center">
          <div
            className="mt-5"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "1rem",
              borderRadius: "30px",
              filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))",
            }}
          >
            <h1>404</h1>
            <h2>¡Ups!, Esta pagina no existe</h2>
            <h3>Si crees que es un error, contacta con el administrador</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
