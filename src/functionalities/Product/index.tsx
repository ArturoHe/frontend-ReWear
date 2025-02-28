import { useEffect, useState } from "react";
import ImagesProductCard from "../../components/ImagesProductCard";
import UserPanelLeft from "../../components/UserPanelLeft";
import TextProduct from "../../components/TextProduct";
import { useParams } from "react-router-dom";
import { ProductResponse } from "../../api/types";
import api from "../../api/axiosConfig";
import Button from "../../components/Button";
import ButtonAction from "../../components/ButtonAction";

// Importa Bootstrap correctamente
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Toast } from "bootstrap";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { id } = useParams<{ id: string }>();
  const [productData, setproductData] = useState<ProductResponse | null>(null);

  const fetchProduct = async (id: string) => {
    const response = await api.get(`/product/${id}`);
    const data: ProductResponse = response.data as ProductResponse;
    console.log(data);
    setproductData(data);
  };

  const handleBuy = async () => {
    console.log("Comprar", productData?.idproduct);
  };

  const handleCart = async () => {
    try {
      const token = sessionStorage.getItem("jwtToken");
      const response = await api.post(
        "/cart/add",
        {
          productId: productData?.idproduct,
          quantity: 1,
        },
        { headers: { Authorization: `${token}` } }
      );
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }

    console.log("Agregado al carrito producto:", productData?.idproduct);

    const toastElement = document.getElementById("liveToast");

    if (toastElement) {
      const toastInstance = new Toast(toastElement);
      toastInstance.show();
    } else {
      console.error("No se encontró el toast en el DOM.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="d-flex flex-nowrap overflow-auto py-4"
              style={{ gap: "1rem" }}
            >
              <ImagesProductCard image="/texerror.jpg" />
              <ImagesProductCard image="/texerror.jpg" />
              <ImagesProductCard image="/texerror.jpg" />
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-9">
                <div className="container m-3">
                  <TextProduct
                    productName={productData?.name_product || ""}
                    description={productData?.description || ""}
                    category={productData?.category || ""}
                    price={parseFloat(productData?.price || "0")}
                  />
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <ButtonAction text="Comprar" onClick={handleBuy} />
                  <Button text="Agregar Al Carrito" onClick={handleCart} />
                </div>
              </div>
              <div className="col-lg-3">
                <UserPanelLeft
                  profileImage="/cuadrado.jpg"
                  userName={productData?.username || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-4">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-success text-white">
            <strong className="me-auto">Notificación</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Producto agregado al carrito exitosamente.
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
