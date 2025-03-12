import { useState, useEffect } from "react"
import { posData, getInfo, deleteData, patchData } from "../services/fetch"
import "../styles/Home.css"

function Home() {
    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])
    const [recarga, setRecarga] = useState(false)
    const [mostrar, setMostrar] = useState(false)
    const [editar, setEditar] = useState("")
    const [contador, setContador] = useState(0)

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
        const filtroTareas = response.filter(tarea => tarea.idUsuario === localStorage.getItem("idUsuario"))
        setTareas(filtroTareas)
    }

    async function eliminarTarea(id) {
        await deleteData("tareas", id)
        setRecarga(!recarga)
    }

    async function editarTarea(id) {
        const tareaAEditar = {
          "tareaTexto": editar
        }
        await patchData(tareaAEditar, "tareas", id)
        setRecarga(!recarga)
        setMostrar(!mostrar)
    }

    async function contadorTareas() {
        const response = await getInfo("tareas")
        const filtroUsuario = response.filter(tarea => tarea.idUsuario === localStorage.getItem("idUsuario"))
        setContador(filtroUsuario.length)
    }

    useEffect(() => {
        obtenerTareas()
        contadorTareas()
    }, [recarga])

    return (
        <>
            <h1 className="titulo">Le damos la bienvenida</h1>
            <div className="container">
                <input type="text" placeholder="Escribir tarea" className="input"  onChange={(e) => setTarea(e.target.value)} />
                <button className="boton" onClick={enviarTarea}>Agregar tarea</button>
            </div>
            <h2>Tareas:</h2>
            <p className="contador">Tareas pendientes: {contador}</p>
            <ul className="lista">
                {tareas.map((tarea) => (
                    <li key={tarea.id} className="item">
                        <span>{tarea.tareaTexto} - {tarea.nombreUsuario}</span>
                        <div>
                            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                            <button onClick={() => setMostrar(!mostrar)}>Editar</button>
                            {mostrar && (
                                <>
                                    <input placeholder="Editar tarea" onChange={(evento) => setEditar(evento.target.value)} />
                                    <button onClick={() => editarTarea(tarea.id)}>Confirmar edición</button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home;
