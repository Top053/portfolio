import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Contacticons(){
    return(
        <div>
            <a href="https://x.com/boyd_dgaf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaTwitter size={24} /></a>
            <a href="https://www.facebook.com/lenox.boyd.12" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaFacebook size={24} /></a>
            <a href="https://www.instagram.com/persona.non.grrrata/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaInstagram size={24} /></a>
        </div>
    );
}

export default Contacticons;