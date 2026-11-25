import { NavLink } from "react-router-dom";

export default function Registro() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card p-4">
          <h2 className="mb-4 text-center">Crear cuenta</h2>

          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input id="nombre" type="text" className="form-control" placeholder="Tu nombre" />
              </div>

              <div className="col-md-6">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input id="apellido" type="text" className="form-control" placeholder="Tu apellido" />
              </div>

              <div className="col-12">
                <label htmlFor="registro-email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  id="registro-email"
                  type="email"
                  className="form-control"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="registro-password" className="form-label">
                  Contraseña
                </label>
                <input id="registro-password" type="password" className="form-control" placeholder="••••••••" />
              </div>

              <div className="col-md-6">
                <label htmlFor="confirm-password" className="form-label">
                  Confirmar contraseña
                </label>
                <input id="confirm-password" type="password" className="form-control" placeholder="••••••••" />
              </div>
            </div>

            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-success">
                Registrarse
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <NavLink to="/login">¿Ya tienes una cuenta? Inicia Sesión</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
