const Estadistica = ({estados}) => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center uppercase'>Mira tus <span className='text-indigo-600'>resultados</span></h2>
            <div className='my-10 mx-2 bg-zinc-100 rounded-lg grid grid-cols-2'>
                <div>
                    <span className='bg-green-400 font-bold mr-1 p-2 block text-center shadow-lg rounded-lg  text-2xl'>Completados</span>
                    <span className=' font-bold ml-1 block p-2 text-center  text-2xl'>{estados.pendiente}</span>
                </div>
                <div>
                    <span className='bg-yellow-400 font-bold ml-1 block p-2 text-center shadow-lg rounded-lg  text-2xl'>Pendientes</span>
                    <span className=' font-bold ml-1 block p-2 text-center  text-2xl'>{estados.realizado}</span>
                </div>
            </div>
        </div>
    )
}

export default Estadistica