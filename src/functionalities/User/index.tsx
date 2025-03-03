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
    { buyer: string; commentText: string; image: string }[]
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

      setUserData(data);
    } catch (error) {
      console.error("Error al cargar los datos del usuario", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const responseComments = await api.get(`/reviews/${username}`);
      const { averageRating, reviews } = responseComments.data as {
        averageRating: number;
        reviews: Comment[];
      };

      setStars(averageRating);

      const commentsWithUserData = await Promise.all(
        reviews.map(async (comment: Comment) => {
          try {
            const response = await api.post(`/perfilexterno`, {
              user_id: comment.user_id,
            });
            const data = response.data as User;

            let userImage = "/default-profile.jpg"; // Imagen por defecto
            try {
              const responseImage = await api.get(`/user/${data.username}`);
              const imageData = responseImage.data as { image_perfil?: string };
              userImage = imageData.image_perfil || userImage;
            } catch (error) {
              console.error("Error fetching user image", error);
            }

            return {
              buyer: data.username,
              commentText: comment.comment,
              image: userImage,
            };
          } catch (error) {
            return {
              buyer: comment.user_id,
              commentText: comment.comment,
              image: "/default-profile.jpg",
            };
          }
        })
      );

      setComments(commentsWithUserData);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };

  const fetchProducts = async (): Promise<Product[]> => {
    const responseProducts = await api.post("/idexterno", { username });

    const payload = { seller_id: (responseProducts.data as { id: string }).id };

    const response = await api.post("/productsuser", payload);

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

    fetchComments().catch((err) =>
      console.error("Error fetching comments", err)
    );
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
                  {comments.map((comments) => (
                    <PersonalComments
                      userImage={comments.image}
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
