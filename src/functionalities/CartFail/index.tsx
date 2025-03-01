import { useEffect } from "react";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <div className="container my-5">
        <div className="card text-bg-danger   mb-3">
          <div className="card-header">Pago Rechazado</div>
          <div className="card-body">
            <h5 className="card-title">Pago Rechazado</h5>
            <p className="card-text">
              Tu pago ha sido rechazado, por favor intenta nuevamente.
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
