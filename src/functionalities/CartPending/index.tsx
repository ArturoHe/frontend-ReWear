import { useEffect } from "react";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <div className="container my-5">
        <div className="card text-bg-warning  mb-3">
          <div className="card-header">Pago Pendiente</div>
          <div className="card-body">
            <h5 className="card-title">Pago Pendiente</h5>
            <p className="card-text">
              Tu pago se está procesando, por favor espera unos minutos.
            </p>
            <a href="/home" className="btn btn-primary">
              Ir al home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
