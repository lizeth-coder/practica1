import { NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";
import { useContext } from "react";
import Swal from "sweetalert2";

const Home = () => {
    const { usuario, cerrar_sesion } = useContext(Contexto);
    const logout = () => {
        Swal.fire({
            icon: "success",
            title: "Cerrando sesion!",
            text: "Estas siendo redirigido"
        });
        cerrar_sesion();
    }
    return (
        <div>
            <h1>Home</h1>
            <p>{usuario.usuario}</p>
            <button onClick={() => logout()} className="btn btn-danger">Cerrar Sesion</button>
            <NavLink to="/login" className="btn btn-primary">Iniciar sesion</NavLink>
        </div>
    )
}

export default Home;
