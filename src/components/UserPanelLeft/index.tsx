import { FaStar } from "react-icons/fa6";

import ButtonAction from "../ButtonAction";
import Button from "../Button";

import styles from "./style.module.css";
import { Link } from "react-router-dom";

type Props = {
  profileImage: string;
  userName: string;
  description?: string;
  stars?: number;
  self?: boolean;
};

function index({ profileImage, userName, description, self }: Props) {
  if (!description) {
    description = "No hay descripción";
  }

  return (
    <div className="container text-center py-3 position-relative">
      <div className="row row-cols-1">
        <div className="col">
          <div>
            <div className="">
              <img
                className={`${styles.profile}`}
                src={profileImage}
                alt=""
                style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
              />
              <Link className="stretched-link" to={`/user/${userName}`}></Link>
            </div>
          </div>
          <div>
            <h3 className="py-3">{userName}</h3>
          </div>

          <div>
            <p className="py-3">{description}</p>
          </div>

          <div
            className="row mx-5 pb-4"
            style={{ fontSize: "1.5rem", color: "gold" }}
          >
            <div className="col">
              <FaStar />
            </div>
            <div className="col">
              <FaStar />
            </div>
            <div className="col">
              <FaStar />
            </div>
            <div className="col">
              <FaStar />
            </div>
            <div className="col">
              <FaStar />
            </div>
          </div>
        </div>
        {self ? (
          <div id="buttons" className="container">
            <div className="col py-3">
              <ButtonAction text="Vender nuevo artículo" />
            </div>
            <div className="col">
              <Button text="Configuración" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default index;
