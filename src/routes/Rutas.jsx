import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Error from "../pages/Error";
import Usuario from "../pages/Usuario";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
