import { Outlet, NavLink } from 'react-router-dom';
function Layout(){
    return(
        <div className='layout'>
            <header>
                <nav className="nav-bar">
                    <div className="page-width nav-content">
                        <p className="contact">+254754692642</p>
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
                <div className="page-width">
                    © {new Date().getFullYear()} Lenox Boyd | All rights reserved |
                </div>
                
            </footer>
        </div>
    )
}

export default Layout;