import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Contact from "./pages/Contact";
import HomeTwo from "./pages/HomeTwo";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import './scripts/i18n';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);



  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<HomeTwo />} />
  
        <Route
          exact
          path="project/:id"
          element={<CaseStudyDetails />}
        />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/project' element={<Service />} />
        <Route path="service">
        <Route exact path=":id" element={<ServiceDetails />} />
        </Route>
      </Routes>

      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;
