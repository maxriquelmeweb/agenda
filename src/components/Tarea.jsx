const Tarea = ({ tarea, setTarea, eliminarTarea, actualizarEstadoTarea }) => {
    const { titulo, descripcion, fecha, estado } = tarea;
    return (
        <div className="my-10 mx-2 bg-white rounded-lg p-5 shadow-lg">
            <p className="block uppercase font-bold"><span className="text-indigo-600">Estado:</span> {estado}</p>
            <p className="block uppercase font-bold"><span className="text-indigo-600">Titulo:</span> {titulo}</p>
            <p className="block uppercase font-bold"><span className="text-indigo-600">Descripcion:</span> {descripcion}</p>
            <p className="block uppercase font-bold"><span className="text-indigo-600">Fecha:</span> {fecha}</p>
            <div className="flex justify-between items-center">
                <button
                    className={`flex-1 uppercase font-bold ${estado === "pendiente" ? "bg-green-400 hover:bg-green-600" : "bg-yellow-400 hover:bg-yellow-600"}  mt-7 p-2 rounded-md border-2`}
                    onClick={() => actualizarEstadoTarea(tarea)}
                >
                    {estado === "pendiente" ? "Listo" : "Pendiente"}
                </button>
                <button
                    className='flex-1 uppercase font-bold bg-orange-400  mt-7 p-2 rounded-md border-2 hover:bg-orange-600'
                    onClick={() => setTarea(tarea)}
                >
                    Editar
                </button>
                <button
                    className='flex-1 uppercase font-bold bg-red-400  mt-7 p-2 rounded-md border-2 hover:bg-red-600'
                    onClick={() => eliminarTarea(tarea)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Tarea