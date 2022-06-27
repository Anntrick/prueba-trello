import React from "react";
import { useSelector } from "react-redux";
import { selectInput, selectList } from '../List/listSlice'

import './Home.scss'

const Home = props => {
    const list = useSelector(selectList)

    return (
        <div className="Home">
            Home
            {
                list.map((card, index) => (
                    <p key={index}>{card}</p>
                ))
            }


            <button className="btnEj">Aceptar</button>
        </div>
    )
}

export default Home
