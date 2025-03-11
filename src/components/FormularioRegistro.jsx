import { useState } from "react"
import{posData} from "../services/fetch"
function FormularioRegistro(){
    const [nombre,setNombre] = useState("")
    const [clave,setClave] = useState("")

    async function guardarDatos() {
        const usuarios ={
            "nombre":nombre,
            "clave":clave

            
        }
        await posData(usuarios,"usuarios") 
    }
    return(
        <>
        
        <h1>Crear Cuenta</h1>
        <form> 
            <input type="text" placeholder="Nombre usuario" onChange={(evento)=>setNombre(evento.target.value)} />
            <input type="password" placeholder="Clave usuario" onChange={(evento)=>setClave(evento.target.value)} />
            <button onClick={guardarDatos}>registrarse</button>
        </form>
        </>
    )



}
export default FormularioRegistro