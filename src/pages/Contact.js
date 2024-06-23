import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import NavbarTwo from "../components/NavbarTwo";
import FooterThree from "../components/FooterThree";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {pathname} = useLocation();
  const {t} = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 320);
  }, [pathname]);
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={t('pageTitle.contact')} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default Contact;
