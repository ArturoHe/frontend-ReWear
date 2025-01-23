import React, { useEffect } from "react";
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
        <EditUserForm />
      </div>
    </>
  );
}

export default UserConfig;
