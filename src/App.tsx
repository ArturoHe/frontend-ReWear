import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ProductEdit from "./components/ProductFormEdit";
import Cart from "./functionalities/Cart";
import History from "./functionalities/History";
import RecoverPass from "./functionalities/RecoverPass";
import CartFail from "./functionalities/CartFail";
import CartPending from "./functionalities/CartPending";
import CartSuccess from "./functionalities/CartSuccess";
import CategoryKids from "./components/CategoryKids";
import CategoryWoman from "./components/CategoryWoman";
import CategoryMan from "./components/CategoryMan";
import CategoryUnisex from "./components/CategoryUnisex";
import TyC from "./components/TyC";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública sin layout */}
        <Route path="/" element={<LandingPage title="ReWear | Landing" />} />
        <Route path="/login" element={<Login title="ReWear | Login" />} />
        <Route
          path="/actualizarcontrasena"
          element={<RecoverPass title="ReWear | Recover" />}
        />

        {/* Rutas con Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home title="ReWear | Inicio" />} />
          <Route
            path="/category/infantil"
            element={<CategoryKids title="ReWear | Infantil" />}
          />
          <Route
            path="/category/mujer"
            element={<CategoryWoman title="ReWear | Mujer" />}
          />

          <Route
            path="/category/hombre"
            element={<CategoryMan title="ReWear | Hombre" />}
          />
          <Route
            path="/category/unisex"
            element={<CategoryUnisex title="ReWear | Unisex" />}
          />
          <Route path="/TyC" element={<TyC title="ReWear | TyC" />} />
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

          <Route element={<PrivateRoute />}>
            <Route
              path="/editproduct/:id"
              element={<ProductEdit title="ReWear | Edit" />}
            />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route
              path="/paymentsuccess"
              element={<CartSuccess title="ReWear | Pago exitoso" />}
            />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route
              path="/paymenterror"
              element={<CartFail title="ReWear | Error de Pago" />}
            />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route
              path="/paymentpending"
              element={<CartPending title="ReWear | Pago pendiente" />}
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

          <Route path="/cart" element={<Cart title="ReWear | Carrito" />} />

          <Route
            path="/history"
            element={<History title="ReWear | Historial" />}
          />

          <Route path="*" element={<ErrorPage title="ReWear | 404" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
