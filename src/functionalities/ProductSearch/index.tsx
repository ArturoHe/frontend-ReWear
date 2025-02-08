import { useEffect } from "react";
import ProductSearchCard from "../../components/ProductSearchCard";
import SearchFilters from "../../components/SearchFilters";
import Navbar from "../../components/Navbar";
import NavUser from "../../components/NavUser";

type Props = { title: string };

function index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Navbar />
      <NavUser />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-3">
            <SearchFilters />
          </div>

          <div className="col-xs-12 col-lg-9">
            <ProductSearchCard
              title="Huevos"
              description="Huevos de gallina de corral de granja ecológica certificada por la UE y el sello de bienestar animal de la UE."
              image="landing.jpg"
              price={10000}
            />
            <ProductSearchCard
              title="Huevos"
              description="Huevos de gallina de corral de granja ecológica certificada por la UE y el sello de bienestar animal de la UE."
              image="landing.jpg"
              price={10000}
            />
            <ProductSearchCard
              title="Huevos"
              description="Huevos de gallina de corral de granja ecológica certificada por la UE y el sello de bienestar animal de la UE."
              image="landing.jpg"
              price={10000}
            />
            <ProductSearchCard
              title="Huevos"
              description="Huevos de gallina de corral de granja ecológica certificada por la UE y el sello de bienestar animal de la UE."
              image="landing.jpg"
              price={10000}
            />
            <ProductSearchCard
              title="Huevos"
              description="Huevos de gallina de corral de granja ecológica certificada por la UE y el sello de bienestar animal de la UE."
              image="landing.jpg"
              price={10000}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
