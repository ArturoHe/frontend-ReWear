import { FaStar } from "react-icons/fa6";

import ButtonAction from "../ButtonAction";
import Button from "../Button";

import styles from "./style.module.css";

type Props = {
  profileImage: string;
  userName: string;
  description: string;
  stars?: number;
  self?: boolean;
};

function index({ profileImage, userName, description }: Props) {
  return (
    <div className="container text-center py-3">
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
        <div className="col py-3">
          <ButtonAction text="Vender nuevo artículo" />
        </div>
        <div className="col">
          <Button text="Configuración" />
        </div>
      </div>
    </div>
  );
}

export default index;
