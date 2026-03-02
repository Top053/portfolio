import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Contacticons from "./icons";
function Layout(){
    const [menuOpen, setMenuOpen]=useState(false);
    const closeMenu= () => setMenuOpen(false);
    return(
        <div className='layout'>
            <header>
                <nav className="nav-bar">
                    <div className="page-width nav-content">
                        <p className="contact">+254754692642</p>
                        {/*Hamburger button - only visible on mobile*/}
                        <button
                            className="hamburger"
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                        >
                            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                        </button>
                        {/*nav links*/}
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