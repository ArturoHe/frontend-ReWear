import React from "react";
import "./style.css";
import imageIzq from "./assets/img/fondoIzquierda.jpg";
import imageCen from "./assets/img/fondoCentro.png";
import imageDer from "./assets/img/fondoDerecha.jpg";

const styleIzq = {
  backgroundImage: `url(${imageIzq})`,
  backgroundSize: "cover",
};

const styleCen = {
  backgroundImage: `url(${imageCen})`,
  backgroundSize: "cover",
};

const styleDer = {
  backgroundImage: `url(${imageDer})`,
  backgroundSize: "cover",
};

type Props = {};

const style = (props: Props) => {
  return (
    <div className="container-fluid">
      <div>
        <div></div>
        <div className="row">
          <div className="col" style={styleIzq}></div>
          <div className="col" style={styleCen}></div>
          <div className="col" style={styleDer}></div>
        </div>
      </div>
    </div>
  );
};

export default style;
