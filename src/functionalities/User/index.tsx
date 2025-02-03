import { useEffect } from "react";
import UserPanelLeft from "../../components/UserPanelLeft";
import MiniCard from "../../components/MiniCard";
import PersonalComments from "../../components/PersonalComments";
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
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
            <UserPanelLeft
              profileImage="cuadrado.jpg"
              userName="Juan Cuadrado"
              description="soy el mejor jugador del mundo."
            />
          </div>

          <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 col-12">
            <div className="row row-cols-1">
              <div className="container my-4">
                <div
                  className="d-flex flex-nowrap overflow-auto py-4"
                  style={{ gap: "1rem" }}
                >
                  <MiniCard
                    id="51sdaa4"
                    price={8000}
                    title="Cubeta de Huevos"
                  />
                  <MiniCard
                    id="51swaw8"
                    price={8000}
                    title="Cubeta de Huevos"
                  />
                  <MiniCard
                    id="51sda8w8"
                    price={8000}
                    title="Cubeta de Huevos"
                  />
                  <MiniCard
                    id="51s531daw8"
                    price={8000}
                    title="Cubeta de Huevos"
                  />
                  <MiniCard
                    id="51s165daw8"
                    price={8000}
                    title="Cubeta de Huevos"
                  />
                  <MiniCard
                    id="51sdfsdaaw8"
                    price={8000}
                    title="Cubeta de Huevos"
                  />
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3> Opiniones </h3>
              <hr className="pb-3" />
              <div className="row row-cols-1" style={{ gap: "3rem" }}>
                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />

                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />
                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />
                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />
                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />
                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />
                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />
                <PersonalComments
                  userImage="parmero.jpeg"
                  userName="Pablo Armero"
                  comment="hola test"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
