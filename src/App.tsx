import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./functionalities/HomePage";
import Login from "./functionalities/Login";
import UserConfig from "./functionalities/UserConfig";
import User from "./functionalities/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="ReWear | Inicio" />} />
        <Route path="/login" element={<Login title="ReWear | Login" />} />
        <Route
          path="/usrconfig"
          element={<UserConfig title="ReWear | Configuracion" />}
        />

        <Route path="/user" element={<User title="ReWear | User" />} />
      </Routes>
    </Router>
  );
}

/*/*/

export default App;
