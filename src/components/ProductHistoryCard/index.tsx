import ButtonAction from "../ButtonAction";
import Button from "../Button";
import ModalRate from "../ModalRate";

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  date: string;
};

function index({ image, title, description, price, date }: Props) {
  const handleInfo = () => {
    console.log("Info");
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
              <p>{`Fecha de compra: ${date}`}</p>
              <div className="my-2">
                <Button text="Ver Info" onClick={handleInfo} />
              </div>
              <div>
                <ButtonAction
                  text="Calificar Vendedor"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
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
              <ModalRate idProduct="" idSeller="" key={0} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
