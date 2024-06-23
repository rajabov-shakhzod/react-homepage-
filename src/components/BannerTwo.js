import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { useTranslation } from "react-i18next";
const BannerTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const {t} = useTranslation();
  return (
    <>
      {/* ================== BannerTwo Start ==================*/}
      <div
        className=' bg-relative banner-area-2 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/bg/8.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='banner-inner pe-xl-5'>
                <h6
                  className='subtitle '
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                  style={{boxShadow: "1px 2px  2px 1px #525151"}}
                >
                  Designing for the future
                </h6>
                <h2
                  className='title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                >
                  {" "}
                  {t('home.banner.title')}
                </h2>
                <p
                  className='content pe-xl-5 '
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                 {t('home.banner.description')}
                </p>
                {/* <Link
                  className='btn btn-border-base '
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  to='/about'
                >
                  Discover More <FaPlus />
                </Link> */}
                {/* <div
                  className='d-inline-block align-self-center '
                  data-aos='fade-right'
                  data-aos-delay='350'
                  data-aos-duration='1500'
                >
                  <span
                    onClick={() => setOpen(true)}
                    className='video-play-btn-hover'
                  >
                    <img src='assets/img/video.svg' alt='img' />{" "}
                    <h6 className='d-inline-block'>how we work</h6>
                  </span>

                  <div></div>
                </div>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='XM6kTQPzzpQ'
                  onClose={() => setOpen(false)}
                /> */}
              </div>
            </div>
            <div
              className='col-lg-6 col-md-9 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='banner-thumb-2 mt-4 mt-lg-0'>
                <img
                  className='banner-animate-img banner-animate-img-4'
                  src='assets/img/banner-2/3.png'
                  alt='img'
                />
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-2/4.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/banner-2/5.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-3 top_image_bounce'
                    src='assets/img/banner-2/2.png'
                    alt='img'
                  />
                  <img
                    className='main-img'
                    src='assets/img/banner-2/1.png'
                    alt='img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerTwo End ==================*/}
    </>
  );
};

export default BannerTwo;
