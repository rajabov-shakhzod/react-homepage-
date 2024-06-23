import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { projects } from "../scripts/data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const ProjectAreaOne = ({hasTitle = true}) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState()
  const {t} = useTranslation();
  const lang = localStorage.getItem('i18nextLng') || 'ko';
  const [active, setActive] = useState(0)
  const extractCategorieds = (list = []) => {
    
    const categoryMap = new Map();
    list.forEach(item => {
      item?.category?.forEach(cat =>{
        if(!categoryMap.has(cat?.sortValue)){
          categoryMap.set(cat?.sortValue, cat);
        }
      })
    })
  return Array.from(categoryMap.values());
  }
  const filterProjects = (category) => {
   
    if(category !== 'all'){
      const filteredProjects = projects?.filter(item => {
      const  newItems =  item.category.some(cat => cat?.sortValue === category)
      return newItems
    })
  
    setData(filteredProjects);
  }else{
    setData(projects);
  }
    
    
  }

  useEffect(() => {
    setData(projects)
    setCategories([{en: 'All', ko: '모두', sortValue: 'all'}, ...extractCategorieds(projects)])
  }, [])
  return (
    <div className={`project-section pd-top-${hasTitle ? '120' : 90}`} id="projects">
      <div className='container'>
        {hasTitle && (<div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center'>
              <h6 className='sub-title'  style={{boxShadow: "1px 2px  2px 1px #525151"}}>{t('home.projects-chip')}</h6>
              <h2 className='title'>
                {t('home.projects-title')}
              </h2>
            </div>
          </div>
        </div>)}
        <nav className='text-center'>
          <div
            className='nav nav-tabs project-nav-tab d-inline-flex mb-5'
            id='nav-tab'
            role='tablist'
          >
            {categories?.map((item, index) => {
              return (    <button
              key={`ite ${index}`}
                className={`nav-link ${index ===  active && 'active'}` }
                id={`nav-tabs${index+1}-tab`}
                type='button'
      
                onClick={() => {
                  setActive(index)
                  filterProjects(item?.sortValue)}}
              >
                {item?.[lang]}
              </button>)
            })}
          </div>
        </nav>
        <div className='tab-content' id='nav-tabContent'>
         
          <div
            className='tab-pane fade show active'
            id='nav-tabs1'
            role='tabpanel'
            aria-labelledby='nav-tabs1-tab'
          >
            
            <div className='row'>
            <AnimatePresence  mode="sync">
            {data?.map((item, index) => {
           return ( 
            <motion.div
            key={index}
            className='col-md-4'
            
            layout
            initial={{ opacity: 0, x: -400, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 200, scale: 1.2 }}
            transition={{ duration: 0.5, type: "delay" }}
          >
            <div className='single-project-inner' >
              <img src='assets/img/gallery/1.png' width="410px" height="500px" alt='img'  style={{borderRadius: '16px'}}/>
              <div className='details'>
                <h6>{item?.title?.[lang]}</h6> 
                <Link to={`/project/${item?.id}`}  >
                <span>
                  <FaPlus />
                </span>
              <h6 className="read-more-text" style={{color: 'rgb(36, 107, 253)'}} >{t('common.readMore')}</h6>
                  
                </Link>
                
              </div>
          </div> </motion.div>)
          })}
               </AnimatePresence>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAreaOne;
