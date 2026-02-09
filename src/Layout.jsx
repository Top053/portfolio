import { Outlet, NavLink } from 'react-router-dom';
function Layout(){
    return(
        <div>
            <header>
                <nav className="nav-bar">
                    <p id="contact">+254754692642</p>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
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