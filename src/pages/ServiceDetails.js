import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ServiceDetailsArea from "../components/ServiceDetailsArea";
import NavbarTwo from "../components/NavbarTwo";
import FooterThree from "../components/FooterThree";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
   {/* Navigation Bar */}
   <NavbarTwo />

{/* Navigation Bar */}
<Breadcrumb title={"Service Details"} />

{/* Service Details Area */}
<ServiceDetailsArea />

{/* Footer One */}
<FooterThree />
    </div>
  );
};

export default ServiceDetails;
