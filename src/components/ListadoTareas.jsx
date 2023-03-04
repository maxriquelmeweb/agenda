import Tarea from './Tarea'

const ListadoTareas = ({ tareas, setTarea, eliminarTarea, actualizarEstadoTarea }) => {
    return (
        <div className='h-screen overflow-y-scroll'>
            <h2 className='text-2xl font-bold text-center uppercase'>Listado de <span className='text-indigo-600'>tareas</span></h2>
            {
                tareas.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        setTarea={setTarea}
                        eliminarTarea={eliminarTarea}
                        actualizarEstadoTarea={actualizarEstadoTarea}
                    />
                ))
            }
        </div>
    )
}

export default ListadoTareas