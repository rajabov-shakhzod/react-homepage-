import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setLang } from "../store/reducers/appReducer";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

const NavbarTwo = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const { lang } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const menuActive = () => {
    setActive(!active);
  };
  const { t } = useTranslation();
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };
  const handleChangeLanguage = (value) => {
    window.location.reload();
    dispatch(setLang(value));
    localStorage.setItem('i18nextLng', value);
  }
  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* search popup start*/}
      {/* <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id='td-search-popup'
      >
        <form action='/' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </div> */}
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>
      {/* ==================== Navbar Two Start ====================*/}
      <nav className='navbar navbar-area navbar-area-2 navbar-expand-lg sticky-active'>
        <div className='container nav-container'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              Epik
            </Link>
          </div>
          {/* <div className='nav-right-part nav-right-part-mobile'>
            <span className='search-bar-btn' onClick={searchActive}>
              <FaSearch />
            </span>
          </div> */}
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
              <li>
                <HashLink smooth to='/#about'>About Us</HashLink>
              </li>
              <li >
                <HashLink smooth to='/#services'>{t('common.service')}</HashLink>
                {/* <ul className='sub-menu'>
                  <li>
                    <Link to='/service'>Service</Link>
                  </li>
                  <li>
                    <Link to='/service-details'>Service Single</Link>
                  </li>
                </ul> */}
              </li>

              <li>
                <Link  to='/project'>{t('common.project')}</Link>
                {/* <ul className='sub-menu'>
                  {projects.map((project) => {
                    return (
                      <li key={project?.id}>
                        <Link to={`projects/${project?.id}`}>{project?.title?.[lang]}</Link>
                      </li>
                    )
                  })}
                </ul> */}
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>{lang.toLowerCase() === 'ko' ? 'Ko' : 'En'}</a>
                <ul className='sub-menu'>
                  <li onClick={() => handleChangeLanguage('en')} > <Link><div style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: "center", justifyContent: 'flex-start' }}>
                    <img
                      src='/assets/img/us_flag.png'
                      alt="flag"
                      height="12px"
                      width="18px"
                      style={{
                        border: '1px solid white'
                      }}
                    />
                    EN
                  </div></Link></li>
                  <li onClick={() => handleChangeLanguage('ko')} > <Link>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: "center", justifyContent: 'flex-start' }}>
                    <img
                      src='/assets/img/ko_flag.png'
                      alt="flag"
                      height="12px"
                      width="18px"
                      style={{
                        border: '1px solid'
                      }}
                    />
                    Ko
                  </div></Link></li>
                </ul>
              </li>

            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop align-self-center'>
            <Link className='btn btn-border-base' to='/contact'>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarTwo;
