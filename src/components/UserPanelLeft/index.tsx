import { FaStar } from "react-icons/fa6";

import ButtonAction from "../ButtonAction";
import Button from "../Button";

import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  profileImage: string;
  userName: string;
  description?: string;
  stars?: number;
};

function index({ profileImage, userName, description }: Props) {
  const userLogged = sessionStorage.getItem("username");
  const isSelf = userName === userLogged;

  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate("/newproduct");
  };

  const handleConfig = () => {
    navigate("/userconfig");
  };

  if (!description) {
    description = "No hay descripción";
  }

  return (
    <div className="container text-center py-3">
      <div className="row row-cols-1">
        <div className="col">
          <div>
            <div>
              <img
                className={`${styles.profile}`}
                src={profileImage}
                alt=""
                style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
              />
            </div>

            <div>
              <Link to={`/user/${userName}`} style={{ color: "black" }}>
                <h3 className="py-3">{userName}</h3>
              </Link>
            </div>

            <div>
              <p className="py-3">{description}</p>
            </div>

            <div
              className="row mx-5 pb-4"
              style={{ fontSize: "1.5rem", color: "gold" }}
            >
              <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
        </div>
        {isSelf ? (
          <div id="buttons" className="container">
            <div className="col py-3">
              <ButtonAction
                text="Vender nuevo artículo"
                onClick={handleNewProduct}
              />
            </div>
            <div className="col">
              <Button text="Configuración" onClick={handleConfig} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default index;
