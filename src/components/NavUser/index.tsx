import styles from "./style.module.css";
import { TiShoppingCart } from "react-icons/ti";

type Props = {};

function NavUser({}: Props) {
  return (
    <nav className={`navbar ${styles.navColorRewear} p-0`}>
      <div className="container-fluid">
        <a
          className={`navbar-brand ${styles.s}`}
          style={{ fontSize: "1.5rem" }}
        >
          <TiShoppingCart />
        </a>
        <div className="d-flex">
          <div className=" mx-1">
            <a className={`form-control ${styles.s}`} href="">
              Inicio
            </a>
          </div>

          <div className=" mx-1">
            <a className={`form-control ${styles.s}`} href="">
              Mis Compras
            </a>
          </div>
          <div className=" mx-1">
            <a className={`form-control ${styles.s}`} href="">
              Mi Perfil
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavUser;
