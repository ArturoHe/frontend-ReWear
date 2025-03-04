import ButtonAction from "../ButtonAction";
import Button from "../Button";
import ModalRate from "../ModalRate";
import api from "../../api/axiosConfig";

type Props = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  date: string;
  seller: string;
};

function Index({ image, title, description, price, date, id, seller }: Props) {
  // Efecto para monitorear el cambio de estado

  const handleInfo = async () => {
    console.log("Info");
    console.log("ID:", id);
    console.log("Seller:", seller);

    try {
      const payload = { user_id: seller };
      const response = await api.post("/perfilexterno", payload);

      const data = response.data as { username: string };
      window.location.href = `/user/${data.username}`;
    } catch (error) {
      console.error("Error fetching seller info:", error);
    }
  };

  return (
    <>
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
                  height: "15rem",
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
              <p>{`Fecha de compra: ${date}`}</p>
              <div className="my-2">
                <Button text="Ver Info Vendedor" onClick={handleInfo} />
              </div>
              <div>
                <ButtonAction
                  text="Calificar Vendedor"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalRate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalRate"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Calificar Vendedor
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ModalRate idProduct={id} idSeller={seller} key={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
