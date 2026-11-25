import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(Contexto);
    const navegacion = useNavigate();
    const validacion = {
        email: {
            required: "El campo nombre es requerido!"
        },
        password: {
            required: "El campo contraseña es requerido!"
        }
    }
    const onSubmit = (data) => {
        login({ usuario: data.email });
        Swal.fire({
            icon: "success",
            title: "Acceso correcto!",
            text: "Estas siendo redirigido ... "
        });
        navegacion("/");
    }
    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="row justify-content-center">
                <div className="col-md-5">
                    {errors.email && <p>{errors.email.message}</p>}
                    <label htmlFor="email">email</label>
                    <input { ...register("email", validacion.email) } type="text" className="form-control mb-3" placeholder="email" />
                    {errors.password && <p>{errors.password.message}</p>}
                    <label htmlFor="password">password</label>
                    <input { ...register("password", validacion.password) } type="text" className="form-control mb-3" placeholder="password" />
                    <button type="submit" className="btn btn-primary mb-3 w-100">Iniciar Sesion</button>
                    <NavLink className="btn btn-primary mb-3 w-100">Registrarse</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login;
