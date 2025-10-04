import {Routes,BrowserRouter,Route} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Navbar from "./mycomponents/Navbar";
function App(){
  return(
    <div className="bg-stone-50 relative">
      <Navbar />
      <div className=" mx-auto w-full">
        <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Service" element={<Services/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Weather" element={<Weather/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/*" element={<Notfound/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
export default App;
