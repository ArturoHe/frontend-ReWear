import "./style.css";
import LogBackground from "../../components/LogBackground";
import { useEffect } from "react";

type Props = {
  title: string;
};

function Login({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return <LogBackground />;
}

export default Login;
