import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  price: number;
};

function index({ image, title, description, price }: Props) {
  return (
    <div
      className="container-fluid mt-3 shadow"
      style={{ borderRadius: "30px" }}
    >
      <div className="container p-3">
        <div className="row align-items-center">
          <div className="col-lg-4 d-none d-sm-block">
            <img
              src={image}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
