import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import { useEffect } from "react";

type Props = {
  title: string;
};

function HomePage({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <div className="container-fluid">
        <Carousel />
      </div>

      <div className="container-fluid">
        <Categories />
      </div>
    </div>
  );
}

export default HomePage;
