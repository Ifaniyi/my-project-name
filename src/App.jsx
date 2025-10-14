import { Routes, Route } from "react-router-dom";
import Home from './header/Home.jsx';
import Aboutus from './header/Aboutus.jsx';
import Navbar from "./components/Navbar.jsx";
import Howitwork from "./header/Howitwork.jsx";
import Footer from "./components/Footer.jsx";
import Plan from "./header/Plan.jsx";
import Faqs from "./header/Faqs.jsx";
import Learn from "./header/Learn.jsx";
import Hero from "./components/Hero.jsx";
// import Getstarted from "./header/Getstarted.jsx";
import Signup from "./components/Signup.jsx";

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
        <Route path="/learn" element={<Learn />} />
        <Route path="hero" element={<Hero />} />
        {/* <Route path="sign" element={<Getstarted />} /> */}
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}