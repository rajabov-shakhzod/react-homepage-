import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { services } from "../scripts/data";

const ServiceDetailsArea = () => {
  const { lang } = useSelector((state) => state.app);
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const serviceId = pathArr[pathArr.length - 1]
  const { t } = useTranslation();
  const [currentService, setCurrentService] = useState({});
  useEffect(() => {
    const item = services.find(item => item?.id === Number(serviceId))
    setCurrentService(item);
  }, [location.pathname])
  return (
    <>
      {/* ===================== Service Details Area start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> {t('common.service-list')}
                  </h5>
                  <ul className='catagory-items'>
                    {services.map((item, index) => {
                      return (  
                      <li key={`${index}${item?.id}`} >
                        <Link to={`/service/${item?.id}`}>{item?.title?.[lang]}</Link>
                      </li>)
                      
                      
                    })}
                  </ul>
                </div>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='/assets/img/about/9.png' width="410px" height="350px" alt='img' />
                  </div>
                  <div className='details'>
                    <Link to='/contact' className='btn btn-base border-radius-7' >
                      {t('pageTitle.contact')}
                    </Link>
                  </div>
                </div>
                {/* <div className='widget widget_download'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> Download
                  </h5>
                  <ul>
                    <li>
                      <a href='#'>
                        {" "}
                        Company Profile <FaAngleDoubleRight />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        Zip File Download <FaAngleDoubleRight />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src='/assets/img/service/7.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      {currentService?.title?.[lang]}
                    </h4>
                    <p>
                     {currentService?.description1?.[lang]}
                    </p>
                    <p>
                    {currentService?.description2?.[lang]}
                    </p>
                    <h4>Get touch have any question ?</h4>
                    <p>
                      It is a long established fact that a reader will be distr
                      acted bioiiy the end gail readable content of a page when
                      looking.
                    </p>
                    <div
                      className='accordion accordion-inner accordion-icon-left mt-3 mb-4'
                      id='accordionExample'
                    >
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingOne'>
                          <button
                            className='accordion-button'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne'
                          >
                            What services do you offer?
                          </button>
                        </h2>
                        <div
                          id='collapseOne'
                          className='accordion-collapse collapse show'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingTwo'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            How long does it take for you to complete a project?
                          </button>
                        </h2>
                        <div
                          id='collapseTwo'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingTwo'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingThree'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            How much does it cost to work with your agency?
                          </button>
                        </h2>
                        <div
                          id='collapseThree'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingThree'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Our Best it company</h4>
                    <p>
                      Thooiie point the of using the table.Your Startup industry
                      is ours standard our service decesion loream saum solar
                      sysem in the world.
                    </p>
                    <div className='row'>
                      <div className='col-md-6'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle /> Creating a Balanced and Nutritious
                          </li>
                          <li>
                            <FaCheckCircle /> iTechnology that helps grow
                            companies
                          </li>
                          <li>
                            <FaCheckCircle /> Everything you need to succeed
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle /> Creating a Balanced and Nutritious
                          </li>
                          <li>
                            <FaCheckCircle /> iTechnology that helps grow
                            companies
                          </li>
                          <li>
                            <FaCheckCircle /> Everything you need to succeed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Service Details Area End ===================== */}
    </>
  );
};

export default ServiceDetailsArea;
