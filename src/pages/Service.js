import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ServiceAreaGroup from "../components/ServiceAreaGroup";
import NavbarTwo from "../components/NavbarTwo";
import FooterThree from "../components/FooterThree";
import ProjectAreaOne from "../components/ProjectAreaOne";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Service = () => {
  const {t} = useTranslation();
  const {pathname} = useLocation();
  const lang = localStorage.getItem('i18nextLng') || 'ko';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={t('common.project')} />

      <ProjectAreaOne hasTitle={false}/>
      {/* Service Area One */}
      <ServiceAreaGroup />

        

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default Service;
