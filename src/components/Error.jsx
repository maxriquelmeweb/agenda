const Error = ({ mensaje }) => {
    return (
        <div className='text-center mb-5'>
            <p className='uppercase font-bold bg-red-400 p-3 text-white'>{mensaje}</p>
        </div>
    )
}

export default Error