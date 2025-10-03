import { Outlet, Link } from 'react-router-dom';
function Layout(){
    return(
        <div>
            <header>
                <nav className="nav-bar">
                    <p id="contact">+254795444909</p>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
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