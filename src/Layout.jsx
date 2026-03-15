import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Contacticons from "./icons";
function Layout(){
    const [drawerOpen, setDrawerOpen]=useState(false);
    const closeDrawer= () => setDrawerOpen(false);
    return(
        <div className='layout'>
            <header>
                <nav className="nav-bar">
                    <div className="page-width nav-content">

                        {/*Desktop nav links*/}
                        <ul>
                            <li>
                                <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""} onClick={closeDrawer}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={closeDrawer}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className={({isActive}) => isActive ? "active" : ""}>
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""} onClick={closeDrawer}>
                                    Projects
                                </NavLink>
                            </li>
                        </ul>

                        {/*Hamburger button - only visible on mobile or small screens*/}
                        <button
                            className="open-drawer"
                            onClick={() => setDrawerOpen(prev => !prev)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={drawerOpen}
                        >
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/*dim overlay-click it to close the drawer*/}
            <div 
                className={`drawer-overlay ${drawerOpen ? 'overlay-open' : ''}`}
                onClick={closeDrawer}
            ></div>
            {/*sliding drawer*/}
            <div className={`drawer ${drawerOpen ? 'drawer-open' : ''}`}>

                <button className="close-drawer" onClick={closeDrawer}>X</button>
                <ul className="drawer-links">
                    <li>
                        <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""} onClick={closeDrawer}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={closeDrawer}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <li>
                            <NavLink to="/blogs" className={({isActive}) => isActive ? "active" : ""}>
                                Blogs
                            </NavLink>
                        </li>
                        <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""} onClick={closeDrawer}>
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