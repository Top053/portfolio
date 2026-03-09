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

                        {/*Desktop nav links*/}
                        <ul className={menuOpen ? 'nav-open' : ''}>
                            <li>
                                <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>
                                    Projects
                                </NavLink>
                            </li>
                        </ul>

                        {/*Hamburger button - only visible on mobile or small screens*/}
                        <button
                            className={`hamburger ${menuOpen ? 'open':''}`}
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                        >
                            <span className="hamburger-line one"></span>
                            <span className="hamburger-line two"></span>
                            <span className="hamburger-line three"></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/*dim overlay-click it to close the drawer*/}
            <div 
                className={`drawer-overlay ${menuOpen ? 'overlay-open' : ''}`}
                onClick={closeMenu}
            ></div>
            {/*sliding drawer*/}
            <div className={`drawer ${menuOpen ? 'drawer-open' : ''}`}>
                <ul className="drawer-links">
                    <li>
                        <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
            
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