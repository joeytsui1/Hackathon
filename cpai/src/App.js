import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Services from "./Component/Services";
import Physicians from "./Component/Physicians";
import DoctorPage from "./Component/DoctorPage";
import ServicePage from "./Component/ServicePage";
import ContactPage from "./Component/ContactPage"
// import ContactPage from "./Component/ContactPage";
// import NotFoundPage from "./Component/NotFoundPage";
import { LanguageProvider } from "./Component/LanguageSwitcher/LanguageContext";
function App() {

  useEffect(() => {
    const cleanupSpeechSynthesis = () => {
      window.speechSynthesis.cancel();
    };

    window.addEventListener('beforeunload', cleanupSpeechSynthesis);

    return () => {
      window.removeEventListener('beforeunload', cleanupSpeechSynthesis);
      cleanupSpeechSynthesis();
    };
  }, []);
  
  return (
    <LanguageProvider>
      <>
        <NavBar></NavBar>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />}></Route>
            <Route
              exact
              path="/services/:name"
              element={<ServicePage />}
            ></Route>
            <Route exact path="/physicians" element={<Physicians />}></Route>
            <Route
              exact
              path="/physicians/:name"
              element={<DoctorPage />}
            ></Route>
            <Route exact path="/contact" element={<ContactPage />}></Route> 
          </Routes>
        </Router>
        <Footer></Footer>
      </>
    </LanguageProvider>
  );
}

export default App;
