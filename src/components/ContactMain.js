import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

import { useTranslation } from "react-i18next";
import axios from "axios";
const ContactMain = () => {

  const {t} = useTranslation();
  const lang = localStorage.getItem('i18nextLng') || 'ko';
  const [formState,  setFormState] = useState({})
  const [success, setSuccess] = useState(false)
  const handleChangeData = (e) => {
    setFormState(prev => (
      {...prev, [e?.target.name]: e.target.value}
    ))
  }
  
  const handleSubmit = async () => {
    console.log('app.url', process.env.REACT_APP_BASE_URL)
    await toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          axios.post(`${process.env.REACT_APP_BASE_URL}/api/create-enquiry`, formState,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(resolve)
          .catch(reject);
        }, 330);  // Add a delay of 330ms
      }),
      {
        loading: 'Sending...',
        success: 'Successfully sent!',
        error: 'Failed to send.'
      }
    );
  }


  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position='top-center' reverseOrder={false} />
      <div className='contact-area pd-top-90 pd-bottom-120'>
        <div className='container'>
          <div className='contact-page-inner '>
            <div className='section-title mb-4 pb-2' style={{ display: 'flex', justifyContent: 'center'}}>
              <h2 className='title'>{t('home.contact-title')} </h2>
            </div>
    
              <div className='row'>
              <div className="row" style={{display: 'flex', alignItems: 'center'}}>
                <div className='col-md-2 mb-4' >
                    <label>{t('common.company')}<span style={{color: 'red'}}>*</span></label>
                  </div>
                <div className='col-md-10'>
                  
                  <div className='single-input-inner'>
                    <input
                      name='companyName'
                      type="text"
                      required
                      onChange={handleChangeData}
                    />
                  </div>
                </div>
                </div>
              
                <div className="row" style={{display: 'flex', alignItems: 'center'}}>
                <div className='col-md-2 mb-4' >
                    <label>{t('common.pic')}<span style={{color: 'red'}}>*</span></label>
                  </div>
                <div className='col-md-10'>
                  
                  <div className='single-input-inner' >
                    <input
                      name='pic'
                      type='text'
                      onChange={handleChangeData}
                      required
                    />
                  </div>
                </div>
                </div>
                <div className="row" style={{display: 'flex', alignItems: 'center'}}>
                <div className='col-md-2 mb-4' >
                    <label>{t('common.phone')}<span style={{color: 'red'}}>*</span></label>
                  </div>
                <div className='col-md-10'>
                  
                  <div className='single-input-inner' >
                    <input
                      name='phone'
                      type='text'
                      onChange={handleChangeData}
                      required
                    />
                  </div>
                </div>
                </div>
                <div className="row" style={{display: 'flex', alignItems: 'center'}}>
                <div className='col-md-2 mb-4' >
                    <label>{t('common.email')}<span style={{color: 'red'}}>*</span></label>
                  </div>
                <div className='col-md-10'>
                  
                  <div className='single-input-inner' style={{width: '100%'}}>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      onChange={handleChangeData}
                      required
                    />
                  </div>
                </div>
                </div>
              
            
                
                <div className='col-12 text-center'>
                  <button
                    className='btn btn-base border-radius-10'
                    onClick={handleSubmit}
                  >
                    {t('common.enquiry')}
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className='contact-page-list'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/13.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>{t('common.phone')}</h5>
                  <h6>{}</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/14.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>{t('common.email')}</h5>
                  <h6>{}</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/15.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>{t('home.footer.address')}</h5>
                  <h6>{}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map  */}
      <div className='contact-g-map'>
      <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=seoul,%20gangnamgu,%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
