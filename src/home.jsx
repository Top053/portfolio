import Footer from "./footer";
function Home(){
    return(
        <div>
            <div className="main">
                <div className="intro">
                    <p>BOYD<br/><span><b>LENOX</b></span></p>
                    <p id="work">Frontend Software Engineer</p>
                    <div className="btn">
                        <button type="button">Contact Me</button>
                        <button type="button">View Projects</button>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Home;