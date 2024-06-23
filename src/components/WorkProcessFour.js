import React from "react";
import { workProcesses } from "../scripts/data";
import { useTranslation } from "react-i18next";

const WorkProcessFour = () => {
  const lang = localStorage.getItem('i18nextLng') || 'ko';
  const {t } = useTranslation();
  return (
    <>
      {/*==================== Work Process Three start ====================*/}
      <div
        className='work-process-area bg-position-right pd-top-90 pd-bottom-50'
        style={{ backgroundImage: 'url("./assets/img/bg/16.png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center pb-5'>
                <h6 className='sub-title' style={{boxShadow: "1px 1px  3px 1px #525151"}}>{t('home.work-process-chip')}</h6>
                <h2 className='title'>
                 {t('home.work-process')}
                </h2>
              </div>
            </div>
          </div>
          <div className='work-process-area-inner-2'>
            <div className='row'>
              {workProcesses.map((item, index)=> {
                const content = index !==workProcesses.length -1 ? (
                  <div className='col-lg-3 col-md-6' key={`${index} ${item?.title?.[lang]?.slice(5)}`}>
                  <div className='single-work-process-inner style-2 text-center'>
                    <img
                      className='line-img'
                      src={item?.lineSrc}
                      alt='img'
                    />
                    <div className='thumb mb-3'>
                      <img src={item?.icon} alt='img' />
                    </div>
                    <div className='details'>
                      <h5 className='mb-3'>{item?.title?.[lang]}</h5>
                      <p className='content'>
                      {item?.description?.[lang]}
                      </p>
                    </div>
                  </div>
                </div>
                ) :(
                  <div className='col-lg-3 col-md-6' key={`${index} ${item?.title?.[lang]?.slice(5)}`}>
                  <div className='single-work-process-inner style-2 text-center'>
                    <div className='thumb mb-3'>
                      <img src={item?.icon} alt='img' />
                    </div>
                    <div className='details'>
                      <h5 className='mb-3'>{item?.title?.[lang]}</h5>
                      <p className='content'>
                      {item?.description?.[lang]}
                      </p>
                    </div>
                  </div>
                </div>
                )
                return content
              } )}
             
           
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessFour;
