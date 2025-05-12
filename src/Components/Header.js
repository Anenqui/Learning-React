import React from "react";
import Navigation from "./Navigation";
import {Link} from 'react-router-dom'
import "../App.css"

<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

function Header() {
    return(
        <header className="header">
            <span className="f">
            Proyecto 1 de react
            </span>
            <Navigation />
        </header>
    )
}

export default Header;