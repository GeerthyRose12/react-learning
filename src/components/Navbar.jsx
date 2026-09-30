import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () =>{
    return (
        <nav>
            <h1>Geerthy</h1>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Navbar;