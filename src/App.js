import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import './App.css';
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={"/" || "/home"} element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
