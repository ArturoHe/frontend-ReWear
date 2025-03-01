import { Link } from "react-router-dom";
import Button from "../Button";
import ButtonAction from "../ButtonAction";
import api from "../../api/axiosConfig";

type Props = {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  price?: string;
};

function index({ image, title, description, price, id }: Props) {
  const handleDelete = async () => {
    try {
      const payload = {
        productId: id?.toString(),
      };

      const token = sessionStorage.getItem("jwtToken");

      await api.post("/cart/remove", payload, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.log("Error deleting product:", error);
    }
    alert("Producto eliminado");
    window.location.reload();
  };

  return (
    <div
      className="container-fluid mt-3 shadow position-relative"
      style={{ borderRadius: "30px" }}
    >
      <div className="container p-3">
        <div className="row align-items-center">
          <div className="col-lg-4 my-2">
            <img
              src={image}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "30px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-xs-6 col-lg-5">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="col-xs-6 col-lg-3">
            <h2>${price}</h2>
            <div className="py-2">
              <Link to={`/product/${id}`}>
                <ButtonAction text="Ver Info" />
              </Link>
            </div>
            <div>
              <Button text="Eliminar" onClick={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
