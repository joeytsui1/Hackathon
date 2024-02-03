import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Service from "./Component/Service";
import Physicians from "./Component/Physicians";
import DoctorPage from "./Component/DoctorPage";
// import ContactPage from "./Component/ContactPage";
// import NotFoundPage from "./Component/NotFoundPage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Service />}></Route>
          <Route exact path="/physicians" element={<Physicians />}></Route>
          <Route exact path="/physicians/:name" element={<DoctorPage />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
