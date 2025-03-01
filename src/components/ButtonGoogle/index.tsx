import { GoogleLogin } from "@react-oauth/google";
import api from "../../api/axiosConfig";

type Props = {};

function Index({}: Props) {
  return (
    <div>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const payload = {
            token: credentialResponse.credential,
          };

          try {
            const response = await api.post("/auth/google", payload);

            const data = response.data as { token: string };
            const token: string = data.token;

            sessionStorage.setItem("jwtToken", token);

            try {
              const responseId = await api.get("/perfil", {
                headers: {
                  Authorization: `${token}`,
                },
              });

              const responseData = responseId.data as {
                id: string;
                username: string;
              };
              sessionStorage.setItem("id", responseData.id);
              sessionStorage.setItem("username", responseData.username);
            } catch (error) {
              console.log("Error en la solicitud de datos:", error);
            }

            if (sessionStorage.getItem("redirectAfterLogin")) {
              window.location.href =
                sessionStorage.getItem("redirectAfterLogin")!;
              sessionStorage.removeItem("redirectAfterLogin");
              return;
            } else {
              window.location.href = "/home";
            }
          } catch (error) {
            console.log("Error en la solicitud:", error);
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default Index;
