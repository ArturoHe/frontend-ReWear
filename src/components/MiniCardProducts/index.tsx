import { Link } from "react-router-dom";
import api from "../../api/axiosConfig";
import Button from "../Button";

type Props = {
  id: number;
  title: string;
  price: number;
  onClick?: () => void;
  owner?: number;
};

function index({ title, price, owner, id }: Props) {
  const userID = sessionStorage.getItem("id");

  const isSelf =
    userID !== null && owner !== undefined && parseInt(userID) === owner;

  const handleDelete = async () => {
    const response = await api.delete(`/product/${id}`, {
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
      },
    });
    alert("Producto eliminado");
    window.location.reload();
  };

  return (
    <>
      <div
        className="card text-center"
        style={{ minWidth: "12rem", minHeight: "12rem" }}
      >
        <img
          src="/texerror.jpg"
          className="card-img-top"
          alt="..."
          style={{ height: "50%", objectFit: "cover" }}
        />
        <div className="card-body" style={{ padding: "0.5rem", height: "20%" }}>
          <h5 className="card-title" style={{ fontSize: "1rem" }}>
            {title}
          </h5>
          <p className="card-text mb-0">$ {price}</p>

          <Link className="stretched-link" to={`/product/${id}`}></Link>
        </div>
      </div>

      {isSelf ? (
        <div>
          <Button text="eliminar" onClick={handleDelete} />
        </div>
      ) : null}
    </>
  );
}

export default index;
