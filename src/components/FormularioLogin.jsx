import { useState } from "react";
import { getInfo } from "../services/fetch";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function FormularioLogin() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [claveUsuario, setClaveUsuario] = useState("");
  const navigate = useNavigate();

  async function validacionUsuario(e) {
    e.preventDefault();
    const datos = await getInfo("usuarios");
    const usuarioEncontrado = datos.find(
      (usuario) => usuario.nombre === nombreUsuario && usuario.clave === claveUsuario
    );

    if (usuarioEncontrado) {
      navigate("/home");
      localStorage.setItem("idUsuario", usuarioEncontrado.id);
      localStorage.setItem("nombreUsuario", usuarioEncontrado.nombre);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="h1" >Login</h1>
        <form>
          <label className="label" htmlFor="">Nombre Usuario</label>
          <input className="input" onChange={(evento) => setNombreUsuario(evento.target.value)} type="text"
          />
          <label className="label" htmlFor="">Clave Usuario</label>
          <input className="input" onChange={(evento) => setClaveUsuario(evento.target.value)} type="password"
          />

          <button className="boton" onClick={validacionUsuario}>Ingresar</button>
        </form>
      </div>
    </>
  );
}

export default FormularioLogin;
