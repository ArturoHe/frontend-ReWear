import { useSearchParams } from "react-router-dom";
import CardRecover from "../../components/CardRecover";

type Props = {};

function index({}: Props) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log("token", token);

  if (!token) {
    return (
      <>
        <div>nononono</div>
      </>
    );
  }

  return (
    <>
      <div
        className="container-fluid"
        style={{ minHeight: "100vh", backgroundColor: "gray " }}
      >
        <div className="row">
          <div className="col d-none d-sm-block">a</div>
          <div className="col text-center ">
            <CardRecover />
          </div>
          <div className="col d-none d-sm-block">c</div>
        </div>
      </div>
    </>
  );
}

export default index;
