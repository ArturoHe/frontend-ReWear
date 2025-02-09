import { useEffect } from "react";
import styles from "./style.module.css";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={`container-fluid ${styles.errorBackground} text-center`}>
      <div className="container shadow-lg p-5 rounded">
        <h1 className="pt-5" style={{ fontWeight: "bold", fontSize: "7rem" }}>
          Ups, no encontramos esta pagina, pero puedes seguir navegando
        </h1>
      </div>
    </div>
  );
}

export default index;
