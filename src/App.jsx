import { Routes, Route } from "react-router-dom";
import Home from './header/Home.jsx';
import Aboutus from './header/Aboutus.jsx';
import Navbar from "./components/Navbar.jsx";
import Howitwork from "./header/Howitwork.jsx";

export default function App () {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/How" element={<Howitwork />} />
      </Routes>
    </div>
  )
}