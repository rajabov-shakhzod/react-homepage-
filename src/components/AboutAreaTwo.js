import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaTwo = () => {
  const {t} = useTranslation();
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120' id='about'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-5 mb-4 mb-lg-0 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/10.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-7 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0' >
                <h6 className='sub-title' style={{boxShadow: "1px 1px  3px 1px #525151"}}> {t('home.about.who-we-are')}</h6>
                <h3 className='title'>
                  {t('home.about.title')}
                </h3>
                <p className='content mb-4'>
                 {t('home.about.description-1')}
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> {t('home.about.check-1')}
                      </li>
                      <li>
                        <FaCheckCircle /> {t('home.about.check-2')}
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> {t('home.about.check-3')}
                      </li>
                      <li>
                        <FaCheckCircle /> {t('home.about.check-4')}
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                {t('home.about.description-2')}
                </p>
                {/* <Link className='btn btn-border-base' to='/about'>
                  Discover More <FaPlus />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
