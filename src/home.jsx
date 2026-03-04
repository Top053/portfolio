import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    return(
        <div>
            <div className="main">
                <div className="intro">
                    <p>BOYD<br/><span><b>LENOX</b></span></p>
                    <p id="work">Frontend Software Engineer</p>
                    <div className="btn">
                        <button type="button" className="btn-home">Contact Me</button>
                        <button type="button" onClick={()=>navigate("/projects")} className="btn-home" >View Projects</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;