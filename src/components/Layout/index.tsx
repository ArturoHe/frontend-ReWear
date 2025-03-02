import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import NavUser from "../NavUser";

type Props = {};

const token = sessionStorage.getItem("jwtToken");

function index({}: Props) {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default index;
