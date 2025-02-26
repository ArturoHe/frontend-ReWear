import { useSearchParams } from "react-router-dom";

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
      <div>index</div>
    </>
  );
}

export default index;
