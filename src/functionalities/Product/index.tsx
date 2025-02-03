import React from "react";
import Navbar from "../../components/Navbar";
import NavUser from "../../components/NavUser";
import ImagesProductCard from "../../components/ImagesProductCard";
import UserPanelLeft from "../../components/UserPanelLeft";
import TextProduct from "../../components/TextProduct";

type Props = {};

function index({}: Props) {
  return (
    <>
      <Navbar />
      <NavUser />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              className="d-flex flex-nowrap overflow-auto py-4"
              style={{ gap: "1rem" }}
            >
              <ImagesProductCard image="texerror.jpg" />
              <ImagesProductCard image="texerror.jpg" />
              <ImagesProductCard image="texerror.jpg" />
              <ImagesProductCard image="texerror.jpg" />
              <ImagesProductCard image="texerror.jpg" />
              <ImagesProductCard image="texerror.jpg" />
              <ImagesProductCard image="texerror.jpg" />
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-9">
                <div className="container m-3">
                  <TextProduct
                    productName="Huevos x10"
                    description="Hola"
                    category="Comida"
                    price={10.0}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <UserPanelLeft
                  profileImage="cuadrado.jpg"
                  userName="Juan Cuadrado"
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
