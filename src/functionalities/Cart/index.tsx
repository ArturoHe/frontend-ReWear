import { useEffect } from "react";

import ButtonAction from "../../components/ButtonAction";

import CardCart from "../../components/CardCart";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9">
          <CardCart
            id={1}
            title="HOla"
            description="loremipsum"
            image="/texerror.jpg"
            price={100}
            key={1}
          />
          <CardCart
            id={1}
            title="HOla"
            description="loremipsum"
            image="/texerror.jpg"
            price={100}
            key={1}
          />
          <CardCart
            id={1}
            title="HOla"
            description="loremipsum"
            image="/texerror.jpg"
            price={100}
            key={1}
          />
          <CardCart
            id={1}
            title="HOla"
            description="loremipsum"
            image="/texerror.jpg"
            price={100}
            key={1}
          />
          <CardCart
            id={1}
            title="HOla"
            description="loremipsum"
            image="/texerror.jpg"
            price={100}
            key={1}
          />
          <CardCart
            id={1}
            title="HOla"
            description="loremipsum"
            image="/texerror.jpg"
            price={100}
            key={1}
          />
        </div>
        <div className="col-lg-3">
          <div
            className="container-fluid mt-3 shadow p-3"
            style={{ borderRadius: "30px", position: "sticky", top: "1rem" }}
          >
            <h1>Carrito</h1>
            <hr />
            <div className="row">
              <div className="col-9">HOLA</div>
              <div className="col-3">100</div>
            </div>
            <div className="row">
              <div className="col-9">HOLA</div>
              <div className="col-3">100</div>
            </div>
            <div className="row">
              <div className="col-9">HOLA</div>
              <div className="col-3">100</div>
            </div>
            <div className="row">
              <div className="col-9">HOLA</div>
              <div className="col-3">100</div>
            </div>
            <div className="row">
              <div className="col-9">HOLA</div>
              <div className="col-3">100</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-9">Total</div>
              <div className="col-3">700</div>
            </div>
            <div className="m-4">
              <ButtonAction text="Comprar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

/* <ProductSearchCard
      id={1}
      title="HOla"
      description="loremipsum"
      image="/texerror.jpg"
      price={100}
      key={1}
    />
    
*/
