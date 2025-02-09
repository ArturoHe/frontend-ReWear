import { useEffect } from "react";

import EditUserForm from "../../components/EditUserForm";

type Props = { title: string };

function UserConfig({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <div className="container">
        <div className="mt-4">
          <EditUserForm />
        </div>
      </div>
    </>
  );
}

export default UserConfig;
