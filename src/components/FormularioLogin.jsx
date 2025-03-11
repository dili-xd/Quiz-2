import { useState } from "react";
import { getInfo } from "../services/fetch";
import { useNavigate } from "react-router-dom";

function FormularioLogin (){
    const [nombreUsuario,setNombreUsuario] = useState("")
    const [claveUsuario,setClaveUsuario] = useState("")
    const navigate = useNavigate()
    
    async function validacionUsuario(e) {
        e.preventDefault()
        const datos = await getInfo("usuarios")
        const usuarioEncontrado = datos.find(usuario=>usuario.nombre === nombreUsuario && usuario.clave === claveUsuario)

        if(usuarioEncontrado){
          navigate("/home")
          localStorage.setItem("idUsuario",usuarioEncontrado.id)
          localStorage.setItem("nombreUsuario",usuarioEncontrado.nombre)
        }
    }

    return(
        <>
        <form>
            <label htmlFor="">Nombre Usuario</label>
            <input onChange={(evento)=>setNombreUsuario(evento.target.value)} type="text" />
            <label htmlFor="">Clave Usuario</label>
            <input onChange={(evento)=>setClaveUsuario(evento.target.value)} type="text" />
    
            <button onClick={validacionUsuario}>ingresar</button>
        </form>
        </>
    )
}
export default FormularioLogin;