import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoTareas from './components/ListadoTareas'

function App() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) ?? []);
  const [tarea, setTarea] = useState({})
  const [estados, setEstados] = useState({})

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))

    const conteoPorTipo = tareas.reduce((conteo, objeto) => {
      conteo[objeto.estado] = (conteo[objeto.estado] || 0) + 1;
      return conteo;
    }, {});

    if (Object.keys(conteoPorTipo).length === 0) {
      setEstados({
        pendiente: 0,
        realizado: 0
      });
    } else {
      if (conteoPorTipo.pendiente === undefined) {
        conteoPorTipo.pendiente = 0;
      }
      if (conteoPorTipo.realizado === undefined) {
        conteoPorTipo.realizado = 0;
      }
      setEstados(conteoPorTipo);
    }


  }, [tareas])

  const actualizarEstadoTarea = (tarea) => {
    const { estado, id } = tarea
    if (estado === "pendiente") {
      tarea.estado = "realizado";
      setTareas(tareas.map(t => id === t.id ? tarea : t))
    } else {
      tarea.estado = "pendiente";
      setTareas(tareas.map(t => id === t.id ? tarea : t))
    }
  }

  const eliminarTarea = (tarea) => {
    setTareas(tareas.filter(t => t.id !== tarea.id))
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className='grid grid-cols-2'>
        <Formulario
          tareas={tareas}
          setTareas={setTareas}
          tarea={tarea}
          setTarea={setTarea}
          estados={estados}
        />
        <ListadoTareas
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
          actualizarEstadoTarea={actualizarEstadoTarea}
        />
      </div>
    </div>
  )
}

export default App
