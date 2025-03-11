import { useState, useEffect } from "react"
import { posData, getInfo } from "../services/fetch"

function Home() {
    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])

    async function enviarTarea() {
        const tareaLista = {
            "tareaTexto": tarea,
            "idUsuario": localStorage.getItem("idUsuario"),
            "estado": false,
            "nombreUsuario": localStorage.getItem("nombreUsuario")
        }
        await posData(tareaLista, "tareas")
        obtenerTareas()
    }

    async function obtenerTareas() {
        const response = await getInfo("tareas")
        setTareas(response)
    }

    useEffect(() => {
        obtenerTareas()
    }, [])

    return (
        <>
            <h1>Le damos la bienvenida</h1>
            <input type="text" placeholder="Escribir tarea" onChange={(e) => setTarea(e.target.value)}
             />
            <button onClick={enviarTarea}>Agregar tarea</button>
            <h2>Tareas:</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        {tarea.tareaTexto} - {tarea.nombreUsuario}
                    </li>
                ))}

                
            </ul>
        </>
    )
}

export default Home

