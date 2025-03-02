import { useEffect } from "react";
import ProductHistoryCard from "../../components/ProductHistoryCard";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <ProductHistoryCard
        id={1}
        title="TEST"
        description="Lorem ipsum dolor sit amet."
        image="/texerror.jpg"
        price={100}
        date="2025-02-28"
      />
    </>
  );
}

export default index;
