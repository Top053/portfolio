import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import About from "./About";
import Blog from "./Blogs"
import Projects from "./Projects";

function App(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="about" element={<About/>} />
              <Route path="blog" element={<Blog/>} />
              <Route path="projects" element={<Projects/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default App;