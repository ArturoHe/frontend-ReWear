import { useGoogleLogin } from "@react-oauth/google";

import Button from "../Button";

type Props = {};

function index({}: Props) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Token:", tokenResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  return (
    <>
      <div>
        <Button onClick={login} text="Iniciar con Google" />
      </div>
    </>
  );
}

export default index;
