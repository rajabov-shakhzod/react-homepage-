import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaChevronRight,
  FaEnvelope,
  FaMapMarked,
  FaPhoneAlt,

} from "react-icons/fa";
import { Link } from "react-router-dom";
import { services, socialLinks } from "../scripts/data";

const FooterThree = () => {
  const {t} = useTranslation();
  const lang = localStorage.getItem('i18nextLng') || 'ko';
  const serviceList = services?.length > 4 ? services.slice(0, 4) : services; 
  return (
    <>
      {/* ================== Footer Two Start ==================*/}
      <footer className='footer-area  mt-10 pd-top-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <h4 style={{color: "white"}}>Epik</h4>
                </div>
                <div className='details'>
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <ul className='social-media'>
                    {socialLinks?.map((item, index) => {
                      return(
                      <li key={`${index} ${item?.id}`}>
                      <a href={item?.link}>
                        {item?.icon}
                      </a>
                    </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 offset-xl-2 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Service</h4>
                <ul>
                  {serviceList?.map((item,index) => {
                    return (
                      <li key={`${index} ${item?.id}`}>
                      <Link to={`/service/${item?.id}`}>
                        <FaChevronRight /> {item?.title?.[lang]}
                      </Link>
                    </li>
                    )
                  })}
                 
          
                </ul>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 offset-xl-1 col-md-6'>
              <div className='widget widget_about'>
                <h4 className='widget-title'>Contact Us</h4>
                <div className='details'>
                  <p className='mt-3'>
                    <FaPhoneAlt color="white" /> (+82)-10-7639-2811
                  </p>
                  <p className='mt-2'>
                    <FaEnvelope color="white" /> epikuzcoltd@gmail.com
                  </p>
                  <p className='mt-2'>
                    <FaMapMarked  color="white"/> {t('home.footer.address')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom bg-gray-black'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© Epik 2024 | All Rights Reserved</p>
              </div>
             
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterThree;
