import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Contacticons from "./icons";
function Layout(){
    const [menuOpen, setMenuOpen]=useState(false);
    const closeMenu= () => SetMenuOpen(false);
    return(
        <div className='layout'>
            <header>
                <nav className="nav-bar">
                    <div className="page-width nav-content">
                        <p className="contact">+254754692642</p>
                        {/*Hamburger button-only visible*/}
                        <button></button>
                        <ul>
                            <li>
                                <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <div className="page-width">
                    <Outlet/>
                </div>
            </main>
            <footer>
                <div className="page-width footer-container">
                    <div className="footer-content">
                            <Contacticons/>
                            <p>© {new Date().getFullYear()} Lenox Boyd | All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;