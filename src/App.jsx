import Header from "./Header";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>} />
              <Route path="about" element={<About/>} />
              <Route path="projects" element={<Projects/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default App;