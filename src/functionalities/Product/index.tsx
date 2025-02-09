import { useEffect, useState } from "react";

import ImagesProductCard from "../../components/ImagesProductCard";
import UserPanelLeft from "../../components/UserPanelLeft";
import TextProduct from "../../components/TextProduct";
import { useParams } from "react-router-dom";
import { ProductResponse, User } from "../../api/types";
import api from "../../api/axiosConfig";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  const { id } = useParams<{ id: string }>();
  const [productData, setproductData] = useState<ProductResponse | null>(null);

  const fetchProduct = async (id: string) => {
    const response = await api.get(`/product/${id}`);
    const data: ProductResponse = response.data as ProductResponse;
    console.log(data);
    setproductData(data);
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const { username } = useParams<{ username: string }>();
  const [userData, setuserData] = useState<User | null>(null);

  const fetchUser = async (id: string) => {
    const response = await api.get(`/product/${id}`);
    const data: User = response.data as User;
    console.log(data);
    setuserData(data);
  };

  /*useEffect(() => {
    if (id) {
      fetchUser(username);
    }
  }, [id]);*/

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
              <ImagesProductCard image="/texerror.jpg" />
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
                    price={
                      typeof productData?.price === "number"
                        ? productData.price
                        : parseFloat(productData?.price || "0")
                    }
                  />
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
    </>
  );
}

export default index;
