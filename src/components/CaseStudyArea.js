import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { projects, socialLinks } from "../scripts/data";
import { Formatter } from "../scripts/utils";

const CaseStudyArea = () => {
  const {t} = useTranslation();
  const { lang } = useSelector((state) => state.app);
  const {pathname} = useLocation();
  const pathArr = pathname.split('/');
  const projectId = pathArr[pathArr.length - 1];
 const project = projects.find(item => item.id === Number(projectId))


  return (
    <>
      {/* ====================  Case Study Area start ====================*/}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_info'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> {t('project.project-info')}
                  </h5>
                  
                  <div className='widget-info-inner'>
                    <h6>{t('project.client')}</h6>
                    {project.details.client}
                    <h6>{t('project.category')}</h6>
                    {project?.category.map((item,index) => (<p key={`${index} ${item.sortValue}`}>{item?.[lang]}</p>))}
                    <h6>{t('project.date')}</h6>
                    <p>{Formatter.formatTime(project.details.date, 'YYYY-MM-DD')}</p>
                    <h6>{t('project.location')}</h6>
                    <p>{project.details.location}</p>
                  </div>
                </div>

                <div className='widget widget_info'>
                  <ul className='social-media' style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
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
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src='/assets/img/service/7.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      {project.details.title?.[lang]}
                    </h4>
                    <p>
                    {project.details.description1?.[lang]}
                    </p>
                  
                    <p>
                      Lorem available market standard dummy text available
                      market industry Lorem Ipsum simply dummy text of free
                      available market.There are many variations of passages of
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some form,
                    </p>
                    <h4>Get touch have any question ?</h4>
                    <p>
                      It is a long established fact that a reader will be distr
                      acted bioiiy the end gail readable content of a page when
                      looking.
                    </p>
                    <h4>Our Best it company</h4>
                    <p>
                      Thooiie point the of using the table.Your Startup industry
                      is ours standard our service decesion loream saum solar
                      sysem in the world.
                    </p>
                  </div>
                </div>
             
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px'}}>
                      {project?.details?.technologies?.map((item, index) => {
                        return(
                          <div
                          key={`${index} $`}
                          className='sub-title '
                          data-aos='fade-right'
                          data-aos-delay='100'
                          data-aos-duration='500'
                          style={{
                            boxShadow: "0px 1px  6px 0px #525151",
                            border: "0.5px",
            
                            borderRadius: "30px",
                            background: "#fff",
                            padding: "8px 20px",
                            display: "inline-block",
                          }}
                          > 
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px'
                          }}>
                            <img src={item?.icon}  height='18' width='auto'  style={{ borderRadius: '50%'}} alt="img"/>
                          <h6
                       
                       style={{
                      
                       fontSize: "14px",
                       fontWeight: 'bald',
                        marginTop: '10px',
                       letterSpacing: "1px",}}
                     >
                       {`text`}
                     </h6>
                             </div>
                       
                          </div>
                      
                        )
                      })}
                    </div>
            </div>
            
          </div>
          <div className='row'>
       
            
          </div>
        </div>
      </div>
      {/* ====================  Case Study Area End ====================*/}
    </>
  );
};

export default CaseStudyArea;
