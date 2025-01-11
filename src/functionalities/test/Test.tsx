import React, { ReactNode } from "react";
import Button from "../../components/Button";

type Props = {
  children?: ReactNode;
};

function Test({}: Props) {
  return (
    <>
      <h1>HOlA</h1>
      <p>
        esto es una funcionalidad que está en
        rewear-front\src\functionalities\test\Test.tsx
      </p>
      <hr />
      <div>
        <p>
          <Button text="Hola" />
        </p>

        <br />

        <p>
          este boton arriba es llamado del componente a la funcionalidad
          (Test.tsx)
        </p>

        <hr />
      </div>
    </>
  );
}

export default Test;
