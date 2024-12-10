import { useState } from "react"
import SearchBar from "./components/SearchBar"

const people = [
  {
    id: "people-01",
    title: "Juan Perez"
  },
  {
    id: "people-02",
    title: "Marcos Rivas"
  },
  {
    id: "people-03",
    title: "Segio Martinez"
  },
  {
    id: "people-04",
    title: "Laura Jimenez"
  },
  {
    id: "people-05",
    title: "Horario Martinez"
  }
]

const calendar = [
  {
    id: "calendar-01",
    title: "Sesion de seguimiento"
  },
  {
    id: "calendar-02",
    title: "Revision de propuestas"
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes"
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo"
  },
  {
    id: "calendar-05",
    title: "Revision de pendientes con cliente"
  }
]

const emails = [
  {
    id: "emial-01",
    title: "Reporte de resultados"
  },
  {
    id: "emial-02",
    title: "Requisitos para cambio"
  },
  {
    id: "emial-03",
    title: "Estatus de funcionalidad"
  },
  {
    id: "emial-04",
    title: "Proximos eventos"
  },
  {
    id: "emial-05",
    title: "Participa en la encuesta"
  }
]

export default function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails])
  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all')

  function handleClick(e) {
    const op = e.target.name

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails])
        setCurrentOption('all')
        break;

      case "people":
        setData([...people])
        setCurrentOption('people')
        break;

      case "calendar":
        setData([...calendar])
        setCurrentOption('calendar')
        break;

      case "emails":
        setData([...emails])
        setCurrentOption('emails')
        break;
    }
  }

  return (
    <div className="flex flex-col gap-5 border p-4 rounded items-center">
      <div className="flex gap-3 border-b pb-2">
        <button className="bg-white text-slate-800 px-2 rounded-md hover:bg-[#333] hover:text-white hover:outline hover:outline-1 focus:bg-[#333] focus:text-white focus:outline focus:outline-1" onClick={handleClick} name="all">All</button>
        <button className="bg-white text-slate-800 px-2 rounded-md hover:bg-[#333] hover:text-white hover:outline hover:outline-1 focus:bg-[#333] focus:text-white focus:outline focus:outline-1" onClick={handleClick} name="people">People</button>
        <button className="bg-white text-slate-800 px-2 rounded-md hover:bg-[#333] hover:text-white hover:outline hover:outline-1 focus:bg-[#333] focus:text-white focus:outline focus:outline-1" onClick={handleClick} name="calendar">Calendar</button>
        <button className="bg-white text-slate-800 px-2 rounded-md hover:bg-[#333] hover:text-white hover:outline hover:outline-1 focus:bg-[#333] focus:text-white focus:outline focus:outline-1" onClick={handleClick} name="emails">Emails</button>
      </div>

      <SearchBar items={data} onItemSelected={() => { }} />
    </div>
  )
}