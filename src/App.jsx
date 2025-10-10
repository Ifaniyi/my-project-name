import { Routes, Route } from "react-router-dom";
import Home from './header/Home.jsx';
import Aboutus from './header/Aboutus.jsx';
import Navbar from "./components/Navbar.jsx";
import Howitwork from "./header/Howitwork.jsx";
import Footer from "./components/Footer.jsx";
import Plan from "./header/Plan.jsx";
import Faqs from "./header/Faqs.jsx";


export default function App () {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/how" element={<Howitwork />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </div>
  )
}