import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects, services } from "../scripts/data";
import { useTranslation } from "react-i18next";

const ServiceAreaFour = () => {
  const {t} = useTranslation();
  const lang = localStorage.getItem('i18nextLng');
  return (
    <>
      {/*=================== service area start ===================*/}
      <div
        className='service-area bg-cover pd-top-120 pd-bottom-90 pd-top-110 pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
        id="services"
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-12'>
              <div className='section-title text-center'>
                <h6 className='sub-title' style={{boxShadow: "1px 1px  3px 1px #525151"}}>{t('home.service-chip')}</h6>
                <h3 className='title'>
                {t('home.service-title')}
                </h3>
              </div>
            </div>
          </div>
          
          <div className='row'>
          {services.length > 0 && services.map(item =>{
            return(
              <div key={`${item?.id} ${item?.title?.[lang]?.slice(5) || ''}`} className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-4'>
                  <img src={item?.icon} alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>{item?.title?.[lang] || ''}</h5>
                  <p className='content mb-3'>
                   {item?.description?.[lang] || ''}
                  </p>
                  <Link to={`/service/${item?.id}`} className='read-more-text' >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            
            )
          })}
           
            {/* <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/16.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Big Data Analytics</h5>
                  <p className='content mb-3'>
                    Create ipsum dolor sit consec tetur sed diam in the aliquam
                    tempor
                  </p>
                  <Link className='read-more-text' to='/service-details'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/17.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Cyber security</h5>
                  <p className='content mb-3'>
                    Develope ipsum dolor sit consec tetur sed diam in the
                    aliquam tempor
                  </p>
                  <Link className='read-more-text' to='/service-details'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/20.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Mobile App</h5>
                  <p className='content mb-3'>
                    Shop ipsum dolor sit consec tetur Malesuada sed diam in the
                    aliquam tempor
                  </p>
                  <Link className='read-more-text' to='/service-details'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFour;
