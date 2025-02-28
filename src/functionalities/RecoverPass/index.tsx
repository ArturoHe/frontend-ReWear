import { useSearchParams } from "react-router-dom";
import CardRecover from "../../components/CardRecover";
import { useEffect } from "react";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return <h1>Token no encontrado</h1>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col col-lg-4 p-0 d-none d-sm-block"
            style={{ minHeight: "100vh", backgroundColor: "rgb(243,171,177)" }}
          ></div>
          <div
            className="col-lg-4 d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "rgb(76,150,151)" }}
          >
            <CardRecover token={token} />
          </div>
          <div
            className="col col-lg-4 p-0 d-none d-sm-block"
            style={{ minHeight: "100vh", backgroundColor: "rgb(220,155,92)" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default index;
