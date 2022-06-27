import React from "react";
import './Header.scss'
import { NavLink } from "react-router-dom";

const Header = props => {
    return (
        <div className="Header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">List</NavLink>
        </div>
    )
}

export default Header
