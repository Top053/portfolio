import { useNavigate } from "react-router-dom";
import Contacticons from "./icons";

function Home(){
    const navigate=useNavigate();
    return(
        <div>
            <div className="main">
                <div className="intro">
                    <p>BOYD<br/><span><b>LENOX</b></span></p>
                    <p id="work">Frontend Software Engineer</p>
                    <div className="btn">
                        <button type="button">Contact Me</button>
                        <button type="button" onClick={()=>navigate("/projects")} >View Projects</button>
                    </div>
                </div>
                <div className="icons">
                    <Contacticons/>
                </div>
            </div>
        </div>
    )
}
export default Home;