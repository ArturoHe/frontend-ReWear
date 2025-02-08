import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import NavUser from "../../components/NavUser";
import EditUserForm from "../../components/EditUserForm";

type Props = { title: string };

function UserConfig({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Navbar />
      <NavUser />
      <div className="container">
        <div className="mt-4">
          <EditUserForm />
        </div>
      </div>
    </>
  );
}

export default UserConfig;
