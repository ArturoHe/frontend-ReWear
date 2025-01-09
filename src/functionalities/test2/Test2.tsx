import React from "react";
import Form from "../../components/Form";

type Props = {};

function Test2({}: Props) {
  return (
    <>
      <Form />
      <p>Este Form (componente) es llamado desde Test2.tsx</p>
    </>
  );
}

export default Test2;
