import { Outlet, NavLink } from 'react-router-dom';
function Layout(){
    return(
        <div className='layout'>
            <header>
                <nav className="nav-bar">
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
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                © 2025 My Website | All rights reserved
            </footer>
        </div>
    )
}

export default Layout;