import { useState, useEffect } from "react"
import Error from "./Error"
import Estadistica from "./Estadistica"

const Formulario = ({ tareas, setTareas, tarea, setTarea, estados }) => {
    //formulario
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')
    //editando
    const [editando, setEditando] = useState(false)
    //error
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(tarea).length > 0) {
            setTitulo(tarea.titulo)
            setDescripcion(tarea.descripcion)
            setFecha(tarea.fecha)
            setEditando(true)
        } else {
            setEditando(false)
        }
    }, [tarea])

    useEffect(() => {
        if (tareas.find(t => t.id === tarea.id) === undefined)
            limpiarFormulario()
        setEditando(false)
    }, [tareas])

    const handleSubmit = e => {
        e.preventDefault()
        if ([titulo, descripcion, fecha].includes('')) {
            //error faltan llenar datos
            setError(true)
        } else {
            setError(false)
            const tareaFormulario = {
                titulo,
                descripcion,
                fecha
            }
            if (editando) {
                //editamos la tarea
                tareaFormulario.id = tarea.id
                tareaFormulario.estado = tarea.estado
                setTareas(tareas.map(t => t.id === tarea.id ? tareaFormulario : t));
                setTarea({});
            } else {
                //agregamos la tarea
                tareaFormulario.id = generarId();
                tareaFormulario.estado = 'pendiente';
                setTareas([...tareas, tareaFormulario]);
            }
            limpiarFormulario();
        }
    }

    const limpiarFormulario = () => {
        setTitulo('')
        setDescripcion('')
        setFecha('')
    }

    const generarId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36).substring(2)
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-center uppercase'>Agrega tu <span className='text-indigo-600'>tarea</span></h2>
            <form
                onSubmit={handleSubmit}
                className='my-10 mx-2 bg-white rounded-lg p-5 shadow-lg'
            >
                {
                    error &&
                    <Error
                        mensaje={'Faltan llenar todos los campos'}
                    />
                }

                <label
                    htmlFor="tituloTarea"
                    className='block uppercase font-bold'>
                    Agrega el titulo
                </label>
                <input
                    id='tituloTarea'
                    type="text"
                    placeholder='escribe aquí'
                    className='w-full font-bold bg-zinc-50 mt-2 p-2 rounded-md border-2'
                    onChange={e => setTitulo(e.target.value)}
                    value={titulo}
                />
                <label
                    htmlFor="descripcionTarea"
                    className='block uppercase font-bold mt-5'>
                    Agrega la descripcion
                </label>
                <textarea
                    id="descripcionTarea"
                    rows="3"
                    placeholder='escribe aquí'
                    className='w-full font-bold bg-zinc-50 mt-2 p-2 rounded-md border-2'
                    onChange={e => setDescripcion(e.target.value)}
                    value={descripcion}
                />
                <label
                    htmlFor="fechaTarea"
                    className='block uppercase font-bold mt-5'>
                    Agrega la fecha
                </label>
                <input
                    id="fechaTarea"
                    type='date'
                    className='w-full font-bold bg-zinc-50 mt-2 p-2 rounded-md border-2'
                    onChange={e => setFecha(e.target.value)}
                    value={fecha}
                />
                <button
                    type='submit'
                    className={`w-full uppercase font-bold ${editando ? "bg-orange-400 hover:bg-orange-600" : "bg-green-400 hover:bg-green-600"}  mt-7 p-2 rounded-md border-2 `}
                >
                    {editando ? 'Actualizar' : 'Agregar'}
                </button>
            </form>
            <Estadistica
                estados={estados}
            />
        </div>
    )
}

export default Formulario