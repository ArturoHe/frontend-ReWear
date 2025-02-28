import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Button from "../Button";

type Props = {};

function index({}: Props) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const userData = response.data as {
          name: string;
          email: string;
          picture: string;
        };
        console.log(userData.name);
        console.log(userData.email);
        console.log(userData.picture);
      } catch (error) {
        console.log("Error en la petición a Google:", error);
      }
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
