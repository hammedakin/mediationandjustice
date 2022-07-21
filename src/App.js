import { Route, Routes } from "react-router-dom"
import './App.css';
import './Components/Contact/Contact.css'
import './Components/About/About.css'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import AOS from "aos";
import 'aos/dist/aos.css'
import PageNotFound from "./Components/PageNotFound";

AOS.init();

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
