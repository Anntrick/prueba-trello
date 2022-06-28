//import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import './List.scss'

import ItemCard from "../../components/ItemCard/ItemCard"
import { changeInput, addTask, selectInput, selectList } from './listSlice'

const List = props => {
    const dispatch = useDispatch()
    //equivalente al useState pero de redux
    const input = useSelector(selectInput)
    const list = useSelector(selectList)
    /*const [data, setData] = useState({
        input: "",
        list: []
    })*/
    
    const handleChange = (event) => {
        dispatch(changeInput(event.target.value))
        /*setData({
            ...data,
            input: event.target.value
        })*/
    }

    const handleTaskChange = (event) => {
        if(event.key === "Enter") {
            saveInput()
        }
    }

    const saveInput = () => {
        dispatch(changeInput(""))
        dispatch(addTask(input))

        //En el array, ...data.list nos incluye todo el array
        // y simplemente añadimos lo nuevo detrás
        /*setData({
            ...data,
            list: [ ...data.list, data.input ],
            input:""
        })*/
    }

    return (
        <div className="List">
            <h1>Lista de tareas</h1>
            <div>
                {
                    list.map((card, index) => (
                        <ItemCard key={index} data={card} />
                    ))
                }
            </div>
            <div className="newContent">
                <input className="listInput" onKeyPress={handleTaskChange} placeholder="Nueva tarea" type="text" name="task" onChange={handleChange} value={input} />
                <button className="listBtn" onClick={saveInput}>Guardar</button>
            </div>
        </div>
    )
}

export default List

