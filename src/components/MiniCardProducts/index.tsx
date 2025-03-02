import { Link } from "react-router-dom";
import api from "../../api/axiosConfig";
import Button from "../Button";

type Props = {
  id: number;

  name: string;
  price: string;
  onClick?: () => void;
  owner?: number;
  imageProduct: string;
};

function index({ name, price, owner, id, imageProduct }: Props) {
  const userID = sessionStorage.getItem("id");

  const isSelf =
    userID !== null && owner !== undefined && parseInt(userID) === owner;

  const handleDelete = async () => {
    const response = await api.delete(`/product/${id}`, {
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
      },
    });
    alert(response);
    window.location.reload();
  };

  const handleEdit = async () => {
    window.location.href = `/editproduct/${id}`;
  };

  return (
    <>
      <div
        className="card text-center"
        style={{
          minWidth: "12rem",
          minHeight: "12rem",
          maxHeight: "12rem",
          maxWidth: "12rem",
        }}
      >
        <img
          src={imageProduct}
          className="card-img-top"
          alt="..."
          style={{ height: "50%", objectFit: "cover" }}
        />
        <div className="card-body" style={{ padding: "0.5rem", height: "20%" }}>
          <h5 className="card-title" style={{ fontSize: "1rem" }}>
            {name}
          </h5>
          <p className="card-text mb-0">$ {price}</p>

          <Link className="stretched-link" to={`/product/${id}`}></Link>
        </div>
      </div>

      {isSelf ? (
        <div>
          <div className="me-5 my-2">
            <Button text="eliminar" onClick={handleDelete} />
          </div>

          <div className="me-5 my-2">
            <Button text="Editar" onClick={handleEdit} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default index;
