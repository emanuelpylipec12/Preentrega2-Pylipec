import React from 'react'
import { Link } from "react-router-dom"
import '../NavBar/NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header>
        
        <nav className="navbar">
          <Link to="/" className="logo"><h1>Materia Argenta</h1></Link>
            <ul className="menu"> 
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/Mates">Mates</Link></li>
                <li><Link className="menu-link" to="/productos/Termos">Termos</Link></li>
                <li><Link className="menu-link" to="/productos/Yerbas">Yerbas</Link></li>
                <li><CartWidget /></li>
               
            </ul>
        </nav>

      

    </header>
  )
}

export default NavBar