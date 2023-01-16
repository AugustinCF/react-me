import React from 'react'
import './portfolio.css'
import { getImageSize } from 'react-image-size';
 

import IMG1 from '../../assets/1 Unik Q Service Bacau.png'
import IMG2 from '../../assets/2 Cazare si Tratament Slanic Moldova - Complex Panoramic.png'
import IMG3 from '../../assets/3 Balkanic Taste Europe.png'
import IMG4 from '../../assets/4 Derom Dental International.png'
import IMG5 from '../../assets/5 Cuple.ro.png'
import IMG6 from '../../assets/6 RACOLE – Producator MOBILA.png'
import IMG7 from '../../assets/7 Mobila Canapele.png'
import IMG8 from '../../assets/8 Case din Containere – Casele modulare.png'
import IMG9 from '../../assets/9 Sanitario - Medical Solutions.png'
import IMG10 from '../../assets/10 Royal Garden – Centru de evenimente Bacau.png'
import IMG11 from '../../assets/11 poke.png'
import IMG12  from '../../assets/12 farmarket.png'
import IMG13  from '../../assets/13 ACASA - Xray DDI.png'
import IMG14 from '../../assets/14 Notariat Onesti - Sorina Chicus - Birou Individual Notarial.png'
import IMG15  from '../../assets/15 Img downloader.png'
import IMG16  from '../../assets/16 php scrapper.png'
import IMG17  from '../../assets/17 email template.png'
import IMG18  from '../../assets/18 cod bare.png'
import IMG19  from '../../assets/19 fuzzy.png'


const data = [

 
  {
    id: 1,
    image: IMG16,
    title: 'Price Alert',
    desc: 'Web Scrapper build with PHP',
    technology: 'PHP',
    live: 'https://github.com/AugustinCF/phpscrapper'
  
  },
  
  {
    id: 2,
    image: IMG15,
    title: 'Image Downloader',
    desc: 'Download Image from google by CSV list',
    technology: 'Python',
    live: 'https://github.com/AugustinCF/balkanicprod/tree/master/google/Google-Image-Scraper-master'
  },
  
  {
    id: 3,
    image: IMG17,
    title: 'Dynamic email template',
    desc: 'Download Image from google by CSV list',
    technology: 'Python',
    live: 'https://github.com/AugustinCF/generate-email-template-with-jinja'
  },
  
  
  {
    id: 4,
    image: IMG19,
    title: 'FuzzyWuzzy',
    desc: 'Find same products fron two lists with FuzzyWuzzy',
    technology:' Python',
    live: 'https://github.com/AugustinCF/FuzzyWuzzy'
  },
  
  
  {
    id: 5,
    image: IMG1,
    title:' Unik Service',
    desc: 'Full Stack',
    technology: 'Wordpress',
    live: 'https://unikservice.ro',
  },
  

  
  {
    id: 7,
    image: IMG2,
    title: 'Hotel Panoramic',
    desc: 'Progetazzione UX / UI',
    technology:' Adobe XD',
    live: 'https://complex-panoramic.ro/'
  },
  
  {
    id: 8,
    image: IMG3,
    title: 'Balkanic Taste',
    desc: 'Full Stack',
    technology: 'OpenCart',
    live: 'https://balkanictaste.com/'
  }, {
    id: 9,
    image: IMG4,
    title:' DDI',
    desc: 'Full Stack',
    technology:' OpenCart',
    live: 'https://beta.ddi.ro/'
  }, {
    id: 10,
    image: IMG5,
    title: 'Cuple',
    desc: 'Full Stack',
    technology: 'OpenCart',
    live: 'https://cuple.ro'
  }, {
    id: 11,
    image: IMG6,
    title:' RACOLE',
    desc: 'Full Stack',
    technology:' Woocommerce',
    live: 'https://RACOLE.ro'
  }, {
    id: 12,
    image: IMG7,
    title: 'Mobila Canapele',
    desc: 'Full Stack',
    technology:' OpenCart',
    live: 'http://mobila-canapele.ro/'
  }, {
    id: 13,
    image: IMG8,
    title:' CASE DIN CONTAINERE',
    desc: 'Full Stack',
    technology:' Wordpress',
    live: 'http://testwp.royalcomfort.ro'
  }, {
    id: 14,
    image: IMG9,
    title: 'Sanitario',
    desc: 'Full Stack',
    technology:' OpenCart',
    live: 'https://sanitario.ro/'
  }, {
    id: 15,
    image: IMG11,
    title: 'Poke',
    desc: 'Full Stack',
    technology:' OpenCart',
    live: 'http://pokepoke.ro/'
  },
    {
    id: 16,
    image: IMG10,
    title: 'Royal Garden',
    desc: 'Full Stack',
    technology: 'Wordpress',
    live: 'https://royal-garden.ro/'
  },
    
  {
    id: 17,
    image: IMG13,
    title: 'Radiologie Dentara',
    desc: 'Full Stack',
    technology: 'Wordpress',
    live: 'https://radiologiedentara.ro/'
  },

  {
    id: 18,
    image: IMG18,
    title: 'Cod bare',
    desc: 'Full Stack',
    technology: 'Woocommerce',
    live: 'http://cod-bare.ro/'
  }
   
  
]

 
 const Portfolio = () => {
   return (
     <section id='portfolio'>
      <h5>My works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id, image, title, desc, technology, live}) => {
          return (         
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="desc">{desc}</div>
            <div className="portfolio__item-cta">
            <a href={live} className='btn' target='_blank'>Live</a>
            <div className="technology">{technology}</div>
            </div>
          </article>
          )
        })
        }  
       
      </div>
  
     </section>
   )
 }
 
 export default Portfolio