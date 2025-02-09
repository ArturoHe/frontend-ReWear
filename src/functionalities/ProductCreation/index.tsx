import { useEffect } from "react";

import ProductForm from "../../components/ProductForm";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <div className="container w-50">
        <ProductForm />
      </div>
    </>
  );
}

export default index;
