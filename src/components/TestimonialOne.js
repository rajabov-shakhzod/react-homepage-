import React from "react";
import { useTranslation } from "react-i18next";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { testimonials } from "../scripts/data";
const TestimonialOne = () => {
  const {t} = useTranslation();
  const lang = localStorage.getItem('i18nextLng') || 'ko';
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaAngleRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaAngleLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* =================== Testimonial One Start ===================*/}
      <div
        className='testimonial-area pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/11.png")' }}
      >
        <div className='container'>
          <div className='section-title'>
            <h6 className='sub-title' style={{boxShadow: "1px 2px  2px 1px #525151"}}>{t('home.testimonials-chip')}</h6>
            <h2 className='title'>{t('home.testimonials')}</h2>
          </div>
          <div className='testimonial-slider-1  slider-control-round slider-control-dots slider-control-right-top'>
            <Slider {...settings}>
              {testimonials.map((item, index) => {
                 return (<div className='item' key={`${index} ${item?.name}`}>
                 <div className='single-testimonial-inner style-1 text-center'>
                   <h5>{item?.name}</h5>
                   <p className='designation mb-3'>{item?.position}</p>
                   <div className='icon mb-2'>
                     <img src='assets/img/icon/25.png' alt='img' />
                   </div>
                   <p>
                   {item?.comment?.[lang]}
                   </p>
                   <div className='ratting-inner mt-4'>
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                   </div>
                   <div className='thumb'>
                     { item?.avatar && (<img src={item?.avatar} alt='img' />)}
                   </div>
                 </div>
               </div>)
              })}
             
          
         
      
            </Slider>
          </div>
        </div>
      </div>
      {/* =================== Testimonial One End ===================*/}
    </>
  );
};

export default TestimonialOne;
