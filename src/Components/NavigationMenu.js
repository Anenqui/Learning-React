import React from "react";
import{Link,} from "react-router-dom";
import '../App.css';


function NavigationMenu(props) {
    return (
    <div>
        <div className="f">Menú</div>
        <ul>
            <li>
                <Link to="/" className="home"  onClick={props.closeMenu}>Principal</Link>
            </li>
            <li>
                <Link to="/about" className="home"  onClick={props.closeMenu}>Sobre nosotros</Link>
            </li>
            <li>
                <Link to="/contact" className="home"  onClick={props.closeMenu}>Contactame</Link>
            </li>
        </ul>
    </div>
)}

export default NavigationMenu;