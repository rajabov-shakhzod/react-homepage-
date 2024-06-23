import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceList from "../scripts/serviceList";
import { useTranslation } from "react-i18next";

const ServiceAreaGroup = () => {
  const {t} = useTranslation();
  const lang = localStorage.getItem('i18nextLng') || 'ko';
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          src='/assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title' style={{boxShadow: "1px 2px  2px 1px #525151"}} >{t('home.service-chip')}</h6>
            <h2 className='title'>
            {t('home.service-title')}
            </h2>
          </div>
          <div className='row'>
            {serviceList.map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                    {data.title}
                    </h5>
                    <p>{data.des}</p>
                    {/* <Link className='btn btn-border-base' to='/service-details'>
                      Touch More <FaPlus />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
      
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaGroup;
