import Navbar from "../../components/Navbar";
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
      <Navbar />
      <div className="container px-5">
        <Carousel />
      </div>

      <Categories />
    </div>
  );
}

export default HomePage;
