import { Outlet, Link } from 'react-router-dom';
function Header(){
    return(
        <div>
            <header>
                <nav className="nav-bar">
                    <p id="contact">+254795444909</p>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Header;