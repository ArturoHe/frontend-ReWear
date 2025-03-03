import { useEffect, useState } from "react";
import UserPanelLeft from "../../components/UserPanelLeft";
import PersonalComments from "../../components/PersonalComments";

import MiniCardProducts from "../../components/MiniCardProducts";
import { useParams } from "react-router-dom";
import api from "../../api/axiosConfig";
import { Product, User, Comment } from "../../api/types";

type Props = { title: string };

function Index({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { username } = useParams<{ username: string }>();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [stars, setStars] = useState<number>();
  const [comments, setComments] = useState<
    { buyer: string; commentText: string }[]
  >([]);

  useEffect(() => {
    if (username) {
      fetchUser(username);
    }
  }, [username, stars]);

  const fetchUser = async (user: string) => {
    try {
      const response = await api.get(`/user/${user}`);
      const data: User = response.data as User;
      console.log("token", sessionStorage.getItem("jwtToken"));
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error("Error al cargar los datos del usuario", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    const responseComments = await api.get(`/reviews/${username}`);
    console.log("responseComments", responseComments);
    const commentsrating = responseComments.data as { averageRating: number };
    const commentsData = responseComments.data as { reviews: string[] };
    setStars(commentsrating.averageRating);

    return (commentsData.reviews as unknown as Comment[]).map((comment) => ({
      buyer: comment.user_id,
      commentText: comment.comment,
    }));
  };

  const fetchProducts = async (): Promise<Product[]> => {
    const responseProducts = await api.post("/idexterno", { username });
    console.log("sadasdsadsadsadsadsad", responseProducts.data);

    const payload = { seller_id: (responseProducts.data as { id: string }).id };

    const response = await api.post("/productsuser", payload);
    console.log("response", response);

    return (response.data as Product[]).map((product) => ({
      id: product.id,
      name_product: product.name_product,
      category: product.category,
      price: product.price,
      description: product.description,
      seller_id: product.seller_id,
      status: product.status,
      publication_status: product.publication_status,
      image_path: product.image_path,
    }));
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products", err));

    fetchComments()
      .then((data) => setComments(data))
      .catch((err) => console.error("Error fetching comments", err));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
            <div
              className="container-fluid mt-3 shadow p-3"
              style={{ borderRadius: "30px", position: "sticky", top: "1rem" }}
            >
              {loading ? (
                <p>Cargando información del usuario...</p>
              ) : userData ? (
                <UserPanelLeft
                  profileImage={userData.image_perfil || "/cuadrado.jpg"}
                  userName={userData.username}
                  description={userData.description}
                />
              ) : (
                <p>No se encontró el usuario.</p>
              )}
            </div>
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
                      key={product.id}
                      id={product.id}
                      price={Number(product.price).toLocaleString("es-CO")}
                      owner={product.seller_id}
                      name={product.name_product}
                      imageProduct={product.image_path}
                    />
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3> Opiniones </h3>
                <hr className="pb-3" />
                <div className="row row-cols-1" style={{ gap: "3rem" }}>
                  <button onClick={fetchComments}>a</button>
                  {comments.map((comments) => (
                    <PersonalComments
                      userImage="/parmero.jpeg"
                      userName={comments.buyer}
                      comment={comments.commentText}
                    />
                  ))}
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
