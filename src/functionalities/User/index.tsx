import { useEffect, useState } from "react";
import UserPanelLeft from "../../components/UserPanelLeft";
import PersonalComments from "../../components/PersonalComments";
import Navbar from "../../components/Navbar";
import NavUser from "../../components/NavUser";
import MiniCardProducts from "../../components/MiniCardProducts";
import { useParams } from "react-router-dom";
import api from "../../api/axiosConfig";
import { Product, ProductResponse, User } from "../../api/types";

type Props = { title: string };

function Index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { username } = useParams<{ username: string }>();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      fetchUser(username);
    }
  }, [username]);

  const fetchUser = async (user: string) => {
    try {
      const response = await api.get(`/user/${user}`);
      const data: User = response.data as User;
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error("Error al cargar los datos del usuario", error);
    } finally {
      setLoading(false);
    }
  };

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (): Promise<Product[]> => {
    const response = await api.get<ProductResponse[]>("/products");

    return response.data.map((product) => ({
      id: product.id,
      name: product.name_product,
      category: product.category,
      price: parseFloat(product.price),
      description: product.description,
      publicationStatus: product.publication_status,
      publicationDate: product.publication_date,
    }));
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <>
      <Navbar />
      <NavUser />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
            {loading ? (
              <p>Cargando información del usuario...</p>
            ) : userData ? (
              <UserPanelLeft
                profileImage={userData.profileImage || "/cuadrado.jpg"}
                userName={userData.username}
                description={userData.description}
              />
            ) : (
              <p>No se encontró el usuario.</p>
            )}
          </div>

          <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 col-12">
            <div className="row row-cols-1">
              <div className="container my-4">
                <div
                  className="d-flex flex-nowrap overflow-auto py-4"
                  style={{ gap: "1rem" }}
                >
                  {products.map((product) => (
                    <MiniCardProducts
                      id={product.id}
                      price={product.price}
                      key={product.id}
                      title={product.name}
                    />
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3> Opiniones </h3>
                <hr className="pb-3" />
                <div className="row row-cols-1" style={{ gap: "3rem" }}>
                  <PersonalComments
                    userImage="/parmero.jpeg"
                    userName="Pablo Armero"
                    comment="hola test"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
