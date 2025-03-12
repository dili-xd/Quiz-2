import { useState } from "react";
import { posData } from "../services/fetch";
import "../styles/Registro.css";

function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");

  async function guardarDatos(e) {
    e.preventDefault();
    const usuarios = {
      "nombre": nombre,
      "clave": clave
    };
    await posData(usuarios, "usuarios");
  }

  return (
    <>
      <div className="formulario">
        <h1 className="ritulo">Crear Cuenta</h1>
        <form>
          <input className="input" type="text" placeholder="Nombre usuario"onChange={(evento) => setNombre(evento.target.value)}
          />
          <input className="input"  type="password" placeholder="Clave usuario" onChange={(evento) => setClave(evento.target.value)}
          />
          <button className="boton" onClick={guardarDatos}>Registrarse</button>
        </form>
      </div>
    </>
  );
}

export default FormularioRegistro;
