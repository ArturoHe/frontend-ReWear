import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import Home from "./functionalities/HomePage";
import Login from "./functionalities/Login";
import UserConfig from "./functionalities/UserConfig";
import User from "./functionalities/User";
import NewProduct from "./functionalities/ProductCreation";
import Product from "./functionalities/Product";
import LandingPage from "./functionalities/LandingPage";
import Search from "./functionalities/ProductSearch";
import Layout from "./components/Layout";
import ErrorPage from "./functionalities/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública sin layout */}
        <Route path="/" element={<LandingPage title="ReWear | Landing" />} />
        <Route path="/login" element={<Login title="ReWear | Login" />} />

        {/* Rutas con Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home title="ReWear | Inicio" />} />
          <Route
            path="/user/:username"
            element={<User title="ReWear | User" />}
          />

          <Route
            path="/userconfig"
            element={<UserConfig title="ReWear | Configuración" />}
          />

          <Route element={<PrivateRoute />}>
            <Route
              path="/newproduct"
              element={<NewProduct title="ReWear | Product" />}
            />
          </Route>

          <Route
            path="/product/:id"
            element={<Product title="ReWear | Product" />}
          />
          <Route
            path="/search/:filter"
            element={<Search title="ReWear | Search" />}
          />

          <Route
            path="*"
            element={<ErrorPage title="ReWear | Configuración" />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
