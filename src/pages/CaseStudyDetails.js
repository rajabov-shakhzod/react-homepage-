import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CaseStudyArea from "../components/CaseStudyArea";
import { useLocation } from "react-router-dom";
import NavbarTwo from "../components/NavbarTwo";
import FooterThree from "../components/FooterThree";
import { projects } from "../scripts/data";
import { useSelector } from "react-redux";

const CaseStudyDetails = () => {
  const { pathname } = useLocation();

  const pathArr = pathname.split('/');

  const projectId = pathArr[pathArr.length - 1];

  const currentProject = projects.find(item => item.id === Number(projectId));
  const { lang } = useSelector((state) => state.app);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={currentProject?.title?.[lang]} />

      {/* Case Study Area */}
      <CaseStudyArea />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default CaseStudyDetails;
