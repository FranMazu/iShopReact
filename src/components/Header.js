import React from 'react'
import "../assets/css/header.css"
import logo from "../assets/images/logo_white_large.png"
function Header() {
    return (
        <React.Fragment>
            <header className="header-color">
                <nav className="main-navbar">
                    <div className="container-logo">
                        <img className="logo" src={logo} alt="iShop" />
                    </div>
                    <div className="links">
                        <p className="title">
                            Productos
                        </p>
                        <p className="title">
                            Usuarios
                        </p>
                    </div>
                    <div>
                        <h1 className="title">Dashboard - iShop</h1>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header