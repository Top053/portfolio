import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

function Contacticons(){
    return(
        <div>
            <div className="icons">
                <a 
                    href="https://github.com/Top053" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub size={24} />
                </a>
                <a 
                    href="https://x.com/boyd_dgaf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaTwitter size={24} />
                </a>
                <a 
                    href="https://www.facebook.com/lenox.boyd.12" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaFacebook size={24} />
                </a>
            </div>
        </div>
    );
}

export default Contacticons;