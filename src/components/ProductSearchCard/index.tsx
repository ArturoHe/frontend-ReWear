import { Link } from "react-router-dom";

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  quality: string;
};

function index({ image, title, description, price, id, quality }: Props) {
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
            <h3>{`Calidad: ${quality}`}</h3>
            <p>{description}</p>
            <Link className="stretched-link" to={`/product/${id}`}></Link>
          </div>
          <div className="col-xs-6 col-lg-3">
            <h2>${price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
